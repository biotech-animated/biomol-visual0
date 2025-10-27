"use client";

import { useState, useEffect } from 'react';
import { PageMetadata } from '../metadata';
import Navigation from '@/components/Navigation';
import ScrollProgress from '@/components/ScrollProgress';
import Footer from '@/components/Footer';
import TeamHero from '@/components/team/TeamHero';
import TeamMemberProfile from '@/components/team/TeamMemberProfile';
import { teamMembers } from '@/data/teamMembers';

export default function TeamPage() {
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);

  const handleNavigate = (direction: 'prev' | 'next', index: number) => {
    const newIndex = direction === 'prev' ? index - 1 : index + 1;
    if (newIndex >= 0 && newIndex < teamMembers.length) {
      setCurrentMemberIndex(newIndex);
      const memberId = teamMembers[newIndex].id;
      const element = document.getElementById(memberId);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <>
      <PageMetadata
        title="Our Team - Biomol Visual"
        description="Meet the PhD scientists and expert team behind Biomol Visual. Our team specializes in translating complex molecular science into compelling visual stories."
        keywords="biomol visual team, scientific visualization team, molecular animation experts, biomedical visualization specialists"
      />
      <div className="min-h-screen bg-[#1B0A2E]">
        <ScrollProgress />
        <Navigation />

        <main>
          <TeamHero />
          <div className='space-y-[120px] section-responsive'>
            {teamMembers.map((member, index) => (
              <TeamMemberProfile
                key={member.id}
                member={member}
                index={index}
                totalMembers={teamMembers.length}
                onNavigate={(direction) => handleNavigate(direction, index)}
              />
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
