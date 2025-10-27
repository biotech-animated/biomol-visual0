"use client";
import { useState } from 'react';
import { PageMetadata } from '../metadata';
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
    <>
      <PageMetadata
        title="Contact Us - Biomol Visual"
        description="Get in touch with Biomol Visual to discuss your molecular visualization needs. Our team is ready to help you communicate your science effectively."
        keywords="contact biomol visual, medical animation services, molecular visualization consultation, biotech animation inquiry"
      />
      <div className="min-h-screen bg-[#1B0A2E]">
        <ScrollProgress />
        <Navigation />
        <ContactHero onOpenForm={() => setIsFormOpen(true)} />
        <CompanyInfo />
        <ContactCta onOpenForm={() => setIsFormOpen(true)} />
        <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        <Footer />
      </div>
    </>
  );
}
