'use client';

import { PageMetadata } from './metadata';
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
    <>
      <PageMetadata
        title="Biomol Visual - Molecular & Cellular MOA Visualization"
        description="Molecular & Cellular MOA Visualization That Gets You Funded. We translate your complex molecular science into compelling 2-minute visual stories designed to win investor confidence."
        keywords="molecular visualization, MOA visualization, biotech animation, medical animation, scientific animation, cellular visualization"
      />
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
    </>
  );
}
