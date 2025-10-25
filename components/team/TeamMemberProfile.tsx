"use client";

import { User, MapPin, Calendar, Target, Quote, ChevronDown, Piano, Gamepad2, BookOpen, Camera, Waves } from 'lucide-react';
import { TeamMember } from '../../data/teamMembers';
import { useState } from 'react';

interface TeamMemberProfileProps {
  member: TeamMember;
  index: number;
  totalMembers: number;
  onNavigate: (direction: 'prev' | 'next') => void;
}

const highlightStats = (text: string) => {
  const patterns = [
    /(\d+\+?\s+(?:peer-reviewed\s+)?publications?)/gi,
    /(\d+\+?\s+(?:years?|projects?))/gi,
    /(five\s+peer-reviewed\s+publications?)/gi,
    /(over\s+\d+\+?\s+projects?)/gi,
    /(millions\s+in\s+funding)/gi,
    /(zero\s+scientific\s+revision\s+rate)/gi,
    /(a\s+decade)/gi,
  ];

  let highlighted = text;
  patterns.forEach(pattern => {
    highlighted = highlighted.replace(pattern, '<mark class="stat-highlight">$1</mark>');
  });

  return highlighted;
};

const getIconComponent = (iconName: string, index: number) => {
  const colors = ['#ED8936', '#ED8936'];
  const color = colors[index % colors.length];

  const iconProps = {
    className: "w-12 h-12",
    style: { color }
  };

  switch (iconName) {
    case 'piano':
      return <Piano {...iconProps} />;
    case 'gamepad':
      return <Gamepad2 {...iconProps} />;
    case 'book':
      return <BookOpen {...iconProps} />;
    case 'camera':
      return <Camera {...iconProps} />;
    case 'waves':
      return <Waves {...iconProps} />;
    default:
      return <span style={{ fontSize: '48px' }}>{iconName}</span>;
  }
};

export default function TeamMemberProfile({ member, index, totalMembers, onNavigate }: TeamMemberProfileProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const paragraphs = member.bio.split('\n\n');

  return (
    <section id={member.id} className="bg-[#1B0A2E]">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 items-start">
          <div className="lg:sticky lg:top-24">
            <div
              className="w-full bg-gradient-to-br from-[#1A202C] to-[#121212] flex items-center justify-center overflow-hidden border border-[#9B59D0]/10"
              style={{ aspectRatio: '4/5', borderRadius: '12px' }}
            >
              <img
                src={`/team/${member.id}.jpg`}
                alt={member.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<div class="w-40 h-40 text-[#718096] flex items-center justify-center"><svg class="w-40 h-40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>';
                  }
                }}
              />
            </div>
          </div>

          <div className="flex flex-col flex-1">
            <h2 className="text-[#E2E8F0] leading-tight" style={{ fontFamily: "'Red Hat Display', sans-serif", fontSize: '36px', fontWeight: 500, marginBottom: '16px' }}>
              {member.name}
            </h2>
            <p className="text-[#ED8936] mb-4" style={{ fontFamily: "'Red Hat Display', sans-serif", fontSize: '24px', fontWeight: 500 }}>
              {member.title}
            </p>
            <p className="text-[#A0AEC0] mb-8" style={{ fontFamily: "'Red Hat Text', sans-serif", fontSize: '16px', fontWeight: 400 }}>
              {member.credentials}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div
                className="team-stats-card rounded-lg p-6 relative overflow-hidden group"
                style={{
                  cursor: 'pointer'
                }}
              >
                <div className="flex flex-col items-center text-center relative z-10">
                  <Calendar className="w-10 h-10 text-[#9B59D0] mb-3" />
                  <div className="text-3xl font-medium text-[#E2E8F0] mb-2" style={{ fontFamily: "'Red Hat Display', sans-serif" }}>
                    {member.quickStats.years}
                  </div>
                  <div className="text-xs text-[#A0AEC0]" style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
                    Years at Biomol Visual
                  </div>
                </div>
              </div>

              <div
                className="team-stats-card rounded-lg p-6 relative overflow-hidden group"
                style={{
                  cursor: 'pointer'
                }}
              >
                <div className="flex flex-col items-center text-center relative z-10">
                  <MapPin className="w-10 h-10 text-[#9B59D0] mb-3" />
                  <div className="text-sm py-2 font-medium text-[#E2E8F0] mb-2" style={{ fontFamily: "'Red Hat Display', sans-serif" }}>
                    {member.quickStats.location}
                  </div>
                  <div className="text-xs text-[#A0AEC0]" style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
                    Location
                  </div>
                </div>
              </div>

              <div
                className="team-stats-card rounded-lg p-6 relative overflow-hidden group"
                style={{
                  cursor: 'pointer'
                }}
              >
                <div className="flex flex-col items-center text-center relative z-10">
                  <Target className="w-10 h-10 text-[#9B59D0] mb-3" />
                  <div className="text-sm py-2 font-medium text-[#E2E8F0] mb-2" style={{ fontFamily: "'Red Hat Display', sans-serif" }}>
                    {member.quickStats.expertise}
                  </div>
                  <div className="text-xs text-[#A0AEC0]" style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
                    Expertise
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[#E2E8F0] leading-relaxed space-y-6" style={{ fontFamily: "'Red Hat Text', sans-serif", fontSize: '16px', lineHeight: '1.7' }}>
              <div>
                <p dangerouslySetInnerHTML={{ __html: highlightStats(paragraphs[0]) }}></p>

                <div className="my-12 pl-8 relative">
                  <Quote className="absolute -left-2 -top-2 w-8 h-8 text-[#9B59D0]/30" />
                  <p className="text-xl text-[#E2E8F0] italic leading-relaxed" style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 400 }}>
                    {member.pullQuote}
                  </p>
                </div>
              </div>

              <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="space-y-6">
                  {paragraphs.slice(1).map((paragraph, idx) => (
                    <p key={idx} dangerouslySetInnerHTML={{ __html: highlightStats(paragraph) }}></p>
                  ))}
                </div>
              </div>
            </div>

            {paragraphs.length > 1 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-6 flex items-center gap-2 text-[#9B59D0] hover:text-[#A776D7] transition-colors duration-200"
                style={{ fontFamily: "'Red Hat Text', sans-serif", fontSize: '15px', fontWeight: 500 }}
              >
                {isExpanded ? 'Show Less' : 'Read Full Bio'}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
              </button>
            )}

            <div
              className="mt-12 team-stats-card rounded-xl p-8 relative overflow-hidden group"
              style={{
                cursor: 'pointer'
              }}
            >
              <div className="relative z-10">
                <h4 className="text-[#A0AEC0] mb-6" style={{ fontFamily: "'Red Hat Display', sans-serif", fontSize: '20px', fontWeight: 400 }}>
                  Beyond the Lab
                </h4>
                <div className="flex gap-6 items-start">
                  {getIconComponent(member.beyondTheLab.icon, index)}
                  <p className="text-[#E2E8F0] leading-relaxed italic" style={{ fontFamily: "'Red Hat Text', sans-serif", fontSize: '16px' }}>
                    {member.beyondTheLab.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
