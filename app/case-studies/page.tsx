'use client';

import { useState } from 'react';
import { PageMetadata } from '../metadata';
import Navigation from '@/components/Navigation';
import ScrollProgress from '@/components/ScrollProgress';
import Footer from '@/components/Footer';
import CaseStudiesHero from '@/components/casestudies/CaseStudiesHero';
import CaseStudiesForm from '@/components/casestudies/CaseStudiesForm';

export default function CaseStudiesPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <PageMetadata
        title="Case Studies - Biomol Visual"
        description="Explore our portfolio of molecular and cellular visualization projects. See how we help biotech companies communicate their science effectively to secure funding."
        keywords="case studies, biotech portfolio, medical animation examples, molecular visualization projects, scientific visualization case studies"
      />
      <div className="min-h-screen bg-[#1B0A2E]">
        <ScrollProgress />
        <Navigation />
        <CaseStudiesHero onOpenForm={() => setIsFormOpen(true)} />
        <Footer />
        <CaseStudiesForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </div>
    </>
  );
}
