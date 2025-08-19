import Hero from '@/components/Hero';
import TargetAudience from '@/components/TargetAudience';
import Testimonials from '@/components/Testimonials';
import PurchaseSection from '@/components/PurchaseSection';
import ContactFooter from '@/components/ContactFooter';

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-light">
      <Hero />
      <TargetAudience />
      <Testimonials />
      <PurchaseSection />
      <ContactFooter />
    </div>
  );
}