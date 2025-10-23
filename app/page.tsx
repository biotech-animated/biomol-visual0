'use client';

import Navigation from '@/components/Navigation';
import ScrollProgress from '@/components/ScrollProgress';
import HeroSection from '@/components/HeroSection';
import DifferentiationSection from '@/components/DifferentiationSection';
import ShowReelSection from '@/components/ShowReelSection';
import ByTheNumbersSection from '@/components/ByTheNumbersSection';
import UnifiedSection from '@/components/UnifiedSection';
import SecuritySection from '@/components/SecuritySection';
import CompetitivePositioningSection from '@/components/CompetitivePositioningSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bmv-bg)' }}>
      <ScrollProgress />
      <Navigation />
      <HeroSection />
      <DifferentiationSection />
      <ShowReelSection />
      <ByTheNumbersSection />
      <UnifiedSection />
      <SecuritySection />
      <CompetitivePositioningSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
