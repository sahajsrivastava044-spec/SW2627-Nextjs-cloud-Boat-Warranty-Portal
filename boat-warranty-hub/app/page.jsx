import LandingNavbar from '@/components/layout/LandingNavbar';
import LandingHero from '@/components/home/LandingHero';
import CategoriesGrid from '@/components/home/CategoriesGrid';
import ProcessTimeline from '@/components/home/ProcessTimeline';
import Features from '@/components/home/Features';
import TrustStats from '@/components/home/TrustStats';
import FAQAccordion from '@/components/home/FAQAccordion';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'boAt Warranty Hub — Instant Warranty Lookup & Support',
  description:
    'Verify your boAt product warranty instantly. Enter your serial number to check warranty status, claim replacement, and download your official certificate.',
};

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: '#0d0d0d', overflowX: 'hidden' }}>
      <LandingNavbar />
      <LandingHero />
      <CategoriesGrid />
      <ProcessTimeline />
      <Features />
      <TrustStats />
      <FAQAccordion />
      <Footer />
    </main>
  );
}
