'use client';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import DifferentiationSection from '@/components/DifferentiationSection';
import ShowReelSection from '@/components/ShowReelSection';
import ByTheNumbersSection from '@/components/ByTheNumbersSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ScientificTeamSection from '@/components/ScientificTeamSection';
import ProcessSection from '@/components/ProcessSection';
import SecuritySection from '@/components/SecuritySection';
import CompetitivePositioningSection from '@/components/CompetitivePositioningSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bmv-bg)' }}>
      <Navigation />
      <HeroSection />
      <DifferentiationSection />
      <ShowReelSection />
      <ByTheNumbersSection />
      <TestimonialsSection />
      <ScientificTeamSection />
      <ProcessSection />
      <SecuritySection />
      <CompetitivePositioningSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
