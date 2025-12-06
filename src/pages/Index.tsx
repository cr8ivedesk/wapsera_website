import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import BackToTop from '@/components/BackToTop';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import DashboardSection from '@/components/sections/DashboardSection';
import AutomationSection from '@/components/sections/AutomationSection';
import PricingSection from '@/components/sections/PricingSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';

const Index = () => {
  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative">
      <CustomCursor />
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DashboardSection />
        <AutomationSection />
        <PricingSection />
        <CTASection />
        <WhyChooseUsSection />
        <Footer />
      </main>
      <BottomNav />
      <BackToTop />

      <div
        className="fixed bottom-0 left-0 right-0 h-36 pointer-events-none z-40 backdrop-blur-[40px] [mask-image:linear-gradient(to_bottom,transparent,black)]"
      />
    </div>
  );
};

export default Index;
