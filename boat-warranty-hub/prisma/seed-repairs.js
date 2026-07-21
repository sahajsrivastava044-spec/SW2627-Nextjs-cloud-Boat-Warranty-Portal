import "dotenv/config";
import { prisma } from "../lib/prisma.js";
import { faker } from "@faker-js/faker";

// Realistic boAt device issues
const boatIssues = [
  "Left earbud audio volume significantly lower than right",
  "Right earbud not charging when placed in case",
  "Bluetooth connection drops frequently during calls",
  "Battery depleting within 30 minutes of full charge",
  "Microphone static noise during voice calls",
  "Touch controls unresponsive on right earbud",
  "Smartwatch screen flickering intermittently",
  "Speaker distortion at high volume levels",
  "Charging case LED indicator stays red continuously",
  "Neckband power button stuck or non-responsive",
  "ANC (Active Noise Cancellation) creating buzzing noise",
  "Firmware update failed, device stuck in boot loop",
  "Physical damage to earbud charging contacts",
  "One side audio completely dead",
  "Smartwatch heart rate sensor giving erratic readings"
];

const technicianNotesList = [
  "Replaced left driver unit and recalibrated frequency response. Tested for 2 hours.",
  "Cleaned oxidized charging pins with contact cleaner and updated firmware to latest build.",
  "Replaced internal lithium-ion battery cell. Tested 3 full charge-discharge cycles.",
  "Re-soldered loose Bluetooth antenna connection. Signal strength back to optimal levels.",
  "Replaced touch sensor IC module and re-flashed device firmware.",
  "Inspected motherboard under microscope; replaced damaged power management IC.",
  "Replaced defective speaker cone assembly. Sound test passed QA standards.",
  "Cleaned internal microphone mesh and replaced digital MEMS mic module.",
  "Customer notified: Device repaired under warranty standard coverage.",
  "Replaced display assembly and sealed housing for IPX7 water resistance.",
  "Replaced faulty charging port module. Voltage and current draw verified normal.",
  "Issue could not be reproduced; recalibrated sensor algorithms and returned device."
];

const repairStatuses = ["PENDING", "IN_PROGRESS", "COMPLETED", "CANCELLED"];

async function main() {
  console.log("🚀 Fetching existing products from database...\n");

  const products = await prisma.product.findMany({
    select: { id: true, productName: true, purchaseDate: true }
  });

  if (products.length === 0) {
    console.log("⚠️ No products found in database! Please seed products first.");
    return;
  }

  console.log(`Found ${products.length} products. Generating fake repair history...\n`);

  const repairsToInsert = [];

  for (const product of products) {
    // Generate 1 to 3 repair entries per product
    const numRepairs = faker.number.int({ min: 1, max: 3 });

    for (let i = 0; i < numRepairs; i++) {
      const issue = faker.helpers.arrayElement(boatIssues);
      const status = faker.helpers.arrayElement(repairStatuses);
      
      // Repair date: between product purchase date and today
      const repairDate = faker.date.between({
        from: new Date(product.purchaseDate),
        to: new Date()
      });

      // Estimated completion: 2 to 7 days after repair date
      const estimatedCompletion = new Date(repairDate);
      estimatedCompletion.setDate(estimatedCompletion.getDate() + faker.number.int({ min: 2, max: 7 }));

      const technicianNotes = (status === "COMPLETED" || status === "IN_PROGRESS")
        ? faker.helpers.arrayElement(technicianNotesList)
        : (status === "CANCELLED" ? "Repair request cancelled by customer." : "Awaiting technician inspection.");

      repairsToInsert.push({
        productId: product.id,
        issue,
        repairStatus: status,
        repairDate,
        estimatedCompletion,
        technicianNotes,
      });
    }
  }

  const result = await prisma.repair.createMany({
    data: repairsToInsert
  });

  console.log(`✅ Successfully inserted ${result.count} fake repair records into Repair table!\n`);

  // Display sample inserted repairs
  const sampleRepairs = await prisma.repair.findMany({
    take: 10,
    orderBy: { id: "desc" },
    include: { product: { select: { productName: true, serialNumber: true } } }
  });

  console.log("📋 Sample Repair Records:");
  sampleRepairs.forEach((r) => {
    const statusIcon = r.repairStatus === "COMPLETED" ? "✅" : r.repairStatus === "IN_PROGRESS" ? "⏳" : r.repairStatus === "PENDING" ? "🟡" : "❌";
    console.log(`  [Repair #${r.id}] Product: ${r.product.productName} (${r.product.serialNumber})`);
    console.log(`     Status: ${statusIcon} ${r.repairStatus} | Date: ${r.repairDate.toISOString().split('T')[0]}`);
    console.log(`     Issue: "${r.issue}"`);
    console.log(`     Notes: "${r.technicianNotes}"\n`);
  });

  console.log("Seeding repairs complete! 🎉");
}

main()
  .catch((e) => {
    console.error("❌ Repair seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
