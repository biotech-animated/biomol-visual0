'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CaseStudiesHero from '@/components/casestudies/CaseStudiesHero';
import CaseStudiesForm from '@/components/casestudies/CaseStudiesForm';

export default function CaseStudiesPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1B0A2E]">
      <Navigation />
      <CaseStudiesHero onOpenForm={() => setIsFormOpen(true)} />
      <Footer />
      <CaseStudiesForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}
