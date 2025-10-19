"use client"
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ScientificTeamSection() {
  const team = [
    {
      name: 'Ksenia',
      title: 'Scientific Managing Director',
      bio: "Your main point of contact. Ensures scientific accuracy across all project phases, keeping timelines on track and stakeholder communication seamless. Reviews every frame for scientific precision. Five peer-reviewed papers. Also has Level 9 Piano certification, which explains why your project runs like a perfectly orchestrated symphony.",
      credentials: 'PhD Molecular Biology, York University',
      expertise: 'Project Management, Team Leadership, Scientific Review',
      location: 'Canada (Eastern Time)',
      initials: 'KT'
    },
    {
      name: 'Isabel',
      title: 'Scientific Story Architect',
      bio: "Writes your script. Creates your storyboard. Takes your 200-slide deck and turns it into a 3-minute story that gets funded. Eight publications. Over 100 projects since 2015. Quiet in meetings but comes back with visual solutions so clever you'll wonder if she's psychic.",
      credentials: 'PhD Biomedical Sciences, UC San Diego',
      expertise: 'Scientific Storytelling, Scriptwriting, Storyboarding',
      location: 'United States (Pacific Time)',
      initials: 'IC'
    },
    {
      name: 'Andrew',
      title: 'Scientific Visualization Specialist',
      bio: "Builds your molecular models. Makes sure every protein folds correctly. Published crystal structures at 4.1 Å resolution. When not perfecting your MOA, he's teaching university students why their proteins are drawn wrong.",
      credentials: 'PhD Cell and Systems Biology, University of Toronto',
      expertise: '3D Modeling, Structural Biology, Scientific Accuracy',
      location: 'Canada (Eastern Time)',
      initials: 'AC'
    },
    {
      name: 'Ushma',
      title: 'Scientific Art Specialist',
      bio: "Creates your Style Frames. Defines your visual brand. 2024 AMI Award winner. Claims her best ideas come from video games and walks, which sounds suspicious until you see the results.",
      credentials: 'MS Biomedical Visualization, University of Illinois Chicago; BS Neuroscience, Dominican University',
      expertise: 'Art Direction, Style Frame Development, Visual Branding',
      location: 'United States (Mountain Time)',
      initials: 'UP'
    },
    {
      name: 'Benjamin',
      title: 'Founder & CEO',
      bio: "Founded Biomol Visual after working in pharmaceutical business development, managing drug discovery partnerships. Built and retained an exceptional team of PhD and MSc specialists. Driven by the belief that entrepreneurship fuels scientific progress. He helps biotech founders turn innovations into funded realities. BSc Biotechnology with Honours from University College London. Still gets nightmares about Comic Sans in investor presentations.",
      credentials: 'BSc Biotechnology, University College London',
      expertise: 'Team Leadership, Business Strategy, Lean Operations',
      location: 'United States (Pacific Time)',
      initials: 'BD'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const next = () => {
    if (isAnimating) return;
    setDirection(1);
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % team.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prev = () => {
    if (isAnimating) return;
    setDirection(-1);
    setIsAnimating(true);
    setCurrentIndex((p) => (p - 1 + team.length) % team.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToIndex = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/Barrier_Red_Version2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center" style={{ marginBottom: 'var(--space-9)' }}>
          <h2 style={{ marginBottom: 'var(--space-4)' }}>
            Scientific Leadership Team
          </h2>
          <p
            style={{
              fontSize: '17px',
              color: 'var(--bmv-text-secondary)',
              maxWidth: '700px',
              margin: '0 auto'
            }}
          >
            Meet the dedicated senior experts who will guide your project from scientific discovery to final delivery.
          </p>
        </div>

        <div className="relative" style={{ overflow: 'hidden' }}>
          <div
            style={{
              display: 'flex',
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: isAnimating ? 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
            }}
          >
            {team.map((member, index) => (
              <div
                key={index}
                style={{
                  minWidth: '100%',
                  width: '100%',
                  flexShrink: 0
                }}
              >
                <div
                  className="grid md:grid-cols-3"
                  style={{
                    gap: 'var(--space-5)',
                    padding: 'var(--space-6)',
                    background: 'rgba(30, 30, 40, 0.4)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    borderRadius: '12px',
                    border: '1px solid rgba(183, 148, 246, 0.2)',
                    minHeight: '480px'
                  }}
                >
                  <div className="flex items-center justify-center">
                    <div
                      style={{
                        width: '400px',
                        height: '400px',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        position: 'relative',
                        background: 'linear-gradient(135deg, var(--bmv-purple) 0%, var(--bmv-orange) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <img
                        src={`/team/${member.name.toLowerCase()}.jpg`}
                        alt={`${member.name} photo`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center'
                        }}
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = document.createElement('div');
                          fallback.style.cssText = `
                            width: 100%;
                            height: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 32px;
                            font-weight: 500;
                            color: white;
                          `;
                          fallback.textContent = member.initials;
                          target.parentNode?.appendChild(fallback);
                        }}
                      />
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                    <div>
                      <h3 style={{ marginBottom: 'var(--space-1)' }}>{member.name}</h3>
                      <p style={{ color: 'var(--bmv-purple-light)', fontSize: '16px', fontWeight: '500' }}>
                        {member.title}
                      </p>
                    </div>
                    <p style={{ fontSize: '16px', color: 'var(--bmv-text)', lineHeight: '1.6' }}>
                      {member.bio}
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', fontSize: '14px' }}>
                    <div>
                      <p style={{ color: 'var(--bmv-text-secondary)', marginBottom: 'var(--space-1)', fontWeight: '500' }}>
                        Credentials
                      </p>
                      <p style={{ color: 'var(--bmv-text)' }}>{member.credentials}</p>
                    </div>
                    <div>
                      <p style={{ color: 'var(--bmv-text-secondary)', marginBottom: 'var(--space-1)', fontWeight: '500' }}>
                        Expertise
                      </p>
                      <p style={{ color: 'var(--bmv-text)' }}>{member.expertise}</p>
                    </div>
                    <div>
                      <p style={{ color: 'var(--bmv-text-secondary)', marginBottom: 'var(--space-1)', fontWeight: '500' }}>
                        Based in
                      </p>
                      <p style={{ color: 'var(--bmv-text)' }}>{member.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="flex items-center justify-center"
            style={{ gap: 'var(--space-3)', marginTop: 'var(--space-5)' }}
          >
            <button
              onClick={prev}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'var(--bmv-surface)',
                border: '1px solid rgba(183, 148, 246, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 250ms',
                color: 'var(--bmv-text)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--bmv-purple)';
                e.currentTarget.style.borderColor = 'var(--bmv-purple)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--bmv-surface)';
                e.currentTarget.style.borderColor = 'rgba(183, 148, 246, 0.3)';
              }}
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex" style={{ gap: 'var(--space-2)' }}>
              {team.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToIndex(index)}
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: index === currentIndex ? 'var(--bmv-purple)' : 'var(--bmv-border)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 250ms'
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'var(--bmv-surface)',
                border: '1px solid rgba(183, 148, 246, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 250ms',
                color: 'var(--bmv-text)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--bmv-purple)';
                e.currentTarget.style.borderColor = 'var(--bmv-purple)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--bmv-surface)';
                e.currentTarget.style.borderColor = 'rgba(183, 148, 246, 0.3)';
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
