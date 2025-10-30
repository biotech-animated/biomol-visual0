'use client';

import dynamic from 'next/dynamic';
import { PageMetadata } from './metadata';
import Navigation from '@/components/Navigation';
import ScrollProgress from '@/components/ScrollProgress';
import HeroSection from '@/components/HeroSection';

// Code split below-the-fold components
const DifferentiationSection = dynamic(() => import('@/components/DifferentiationSection'), {
  loading: () => null,
});
const ShowReelSection = dynamic(() => import('@/components/ShowReelSection'), {
  loading: () => null,
});
const ByTheNumbersSection = dynamic(() => import('@/components/ByTheNumbersSection'), {
  loading: () => null,
});
const UnifiedSection = dynamic(() => import('@/components/UnifiedSection'), {
  loading: () => null,
});
const SecuritySection = dynamic(() => import('@/components/SecuritySection'), {
  loading: () => null,
});
const CompetitivePositioningSection = dynamic(() => import('@/components/CompetitivePositioningSection'), {
  loading: () => null,
});
const FinalCTASection = dynamic(() => import('@/components/FinalCTASection'), {
  loading: () => null,
});
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => null,
});

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
