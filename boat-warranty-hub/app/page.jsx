import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import CTA from '@/components/home/CTA';
import Features from '@/components/home/Features';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CTA />
      <Features />
      <Footer />
    </main>
  );
}
