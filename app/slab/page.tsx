"use client";
import Navigation from '@/components/Navigation';
import ScrollProgress from '@/components/ScrollProgress';
import Footer from '@/components/Footer';
import SlabHero from '@/components/slab/SlabHero';
import TrustBar from '@/components/slab/TrustBar';
import WhatIsSlab from '@/components/slab/WhatIsSlab';
import ComparisonTable from '@/components/slab/ComparisonTable';
import SlabPackages from '@/components/slab/SlabPackages';
import SlabExamples from '@/components/slab/SlabExamples';
import HowItWorks from '@/components/slab/HowItWorks';
import AssetLibrary from '@/components/slab/AssetLibrary';
import SlabFaq from '@/components/slab/SlabFaq';
import SlabCta from '@/components/slab/SlabCta';

export default function SlabPage() {
  return (
    <div className="min-h-screen bg-[#1B0A2E]">
      <ScrollProgress />
      <Navigation />

      <main>
        <SlabHero />
        <TrustBar />
        <WhatIsSlab />
        <ComparisonTable />
        <SlabPackages />
        <SlabExamples />
        <HowItWorks />
        <AssetLibrary />
        <SlabFaq />
        <SlabCta />
      </main>

      <Footer />
    </div>
  );
}
