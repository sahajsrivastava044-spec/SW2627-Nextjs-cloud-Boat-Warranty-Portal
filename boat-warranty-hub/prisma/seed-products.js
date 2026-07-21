import "dotenv/config";
import { prisma } from "../lib/prisma.js";
import { faker } from "@faker-js/faker";

// Real-world boAt product names
const boatProducts = [
  "boAt Airdopes 141",
  "boAt Airdopes 171",
  "boAt Airdopes 181",
  "boAt Airdopes 311 Pro",
  "boAt Airdopes 408",
  "boAt Airdopes 441",
  "boAt Airdopes 621",
  "boAt Airdopes 881",
  "boAt Rockerz 255 Pro+",
  "boAt Rockerz 333",
  "boAt Rockerz 450",
  "boAt Rockerz 480",
  "boAt Rockerz 510",
  "boAt Rockerz 550",
  "boAt BassHeads 100",
  "boAt BassHeads 152",
  "boAt BassHeads 225",
  "boAt BassHeads 900",
  "boAt Stone 350",
  "boAt Stone 1000",
  "boAt Stone 1200",
  "boAt Stone 1400",
  "boAt Stone SpeedX",
  "boAt Partypal 50",
  "boAt Partypal 200",
  "boAt Xtend Smartwatch",
  "boAt Wave Call 2",
  "boAt Wave Sigma",
  "boAt Wave Style Call",
  "boAt Lunar Connect",
];

// Generate a unique serial number in format boAt-XXXX-XXXXXX
function generateSerial() {
  const part1 = faker.string.alphanumeric(4).toUpperCase();
  const part2 = faker.string.numeric(6);
  return `BOAT-${part1}-${part2}`;
}

async function main() {
  console.log("🚀 Seeding 20 fake boAt products...\n");

  const products = [];
  const usedSerials = new Set();

  for (let i = 0; i < 20; i++) {
    // Ensure unique serial numbers
    let serial;
    do {
      serial = generateSerial();
    } while (usedSerials.has(serial));
    usedSerials.add(serial);

    const productName = faker.helpers.arrayElement(boatProducts);

    // Purchase date: between 3 years ago and 6 months ago
    const purchaseDate = faker.date.between({
      from: new Date(Date.now() - 3 * 365 * 24 * 60 * 60 * 1000),
      to: new Date(Date.now() - 6 * 30 * 24 * 60 * 60 * 1000),
    });

    // Warranty: 1 or 2 years from purchase
    const warrantyYears = faker.helpers.arrayElement([1, 2]);
    const warrantyExpiry = new Date(purchaseDate);
    warrantyExpiry.setFullYear(warrantyExpiry.getFullYear() + warrantyYears);

    // isActive = warranty hasn't expired yet
    const isActive = warrantyExpiry > new Date();

    products.push({
      serialNumber: serial,
      productName,
      purchaseDate,
      warrantyExpiry,
      isActive,
      warrantyPdfUrl: null,
      pdfUploadedAt: null,
    });
  }

  const result = await prisma.product.createMany({
    data: products,
    skipDuplicates: true,
  });

  console.log(`✅ Inserted ${result.count} products successfully!\n`);

  // Pretty-print the seeded data
  const inserted = await prisma.product.findMany({
    orderBy: { id: "desc" },
    take: result.count,
  });

  inserted.forEach((p) => {
    const status = p.isActive ? "✅ Active" : "❌ Expired";
    console.log(
      `  [${p.id}] ${p.productName.padEnd(30)} | SN: ${p.serialNumber} | ${status}`
    );
  });

  console.log("\nSeeding complete! 🎉");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e.message);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
