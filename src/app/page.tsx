import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Industries from '@/components/Industries';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Industries />
      <Features />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
