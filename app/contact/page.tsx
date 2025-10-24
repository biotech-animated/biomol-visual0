"use client";
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import ScrollProgress from '@/components/ScrollProgress';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import CompanyInfo from '@/components/contact/CompanyInfo';
import ContactCta from '@/components/contact/ContactCta';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1B0A2E]">
      <ScrollProgress />
      <Navigation />
      <ContactHero onOpenForm={() => setIsFormOpen(true)} />
      <CompanyInfo />
      <ContactCta onOpenForm={() => setIsFormOpen(true)} />
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <Footer />
    </div>
  );
}
