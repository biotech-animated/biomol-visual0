import { Lightbulb, Palette, Video, Package, Rocket } from 'lucide-react';

export default function ProcessSection() {
  const phases = [
    {
      number: '1',
      icon: Lightbulb,
      title: 'Strategy & Storyboard',
      description: 'We start with a deep dive into your science, developing a script and visual storyboard. You approve the complete strategic and narrative plan before anything is built.'
    },
    {
      number: '2',
      icon: Palette,
      title: 'Design & Animatic',
      description: 'Next, we define the visual universe for your project. You approve the final look and feel with Style Frames and the precise timing with an Animatic, ensuring perfect alignment before production begins.'
    },
    {
      number: '3',
      icon: Video,
      title: 'Production & Post-Production',
      description: 'With the blueprint approved, our dedicated team of scientific experts brings the vision to life through 3D modeling, animation, and cinematic post-production.'
    },
    {
      number: '4',
      icon: Package,
      title: 'Final Delivery',
      description: 'You receive the final, high-resolution visualization, ready for your investor meeting, conference presentation, or website launch.'
    },
    {
      number: '5',
      icon: Rocket,
      title: 'Strategic Deployment',
      description: 'Finally, we activate your new asset. The same scientific experts who built your visualization work directly with your team to guide its strategic deployment, maximizing its value long after delivery.'
    }
  ];

  return (
    <section
      className="min-h-screen flex items-center justify-center"
      style={{
        background: '#1B0A2E'
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center" style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: '500', fontSize: '32px', lineHeight: '1.2', marginBottom: 'var(--space-8)' }}>
          A Simple 5-Phase System
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'var(--space-5)',
            marginBottom: 'var(--space-7)'
          }}
        >
          {phases.map((phase, index) => (
            <div
              key={index}
              className="phase-card"
              style={{
                padding: 'var(--space-5)',
                background: 'var(--bmv-surface)',
                borderRadius: '12px',
                border: '1px solid rgba(183, 148, 246, 0.1)',
                transition: 'all 250ms cubic-bezier(0.2, 0.8, 0.2, 1)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--bmv-surface-2)';
                e.currentTarget.style.borderColor = 'rgba(183, 148, 246, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--bmv-surface)';
                e.currentTarget.style.borderColor = 'rgba(183, 148, 246, 0.1)';
              }}
            >
              <div
                style={{
                  position: 'relative',
                  zIndex: 1
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: `linear-gradient(135deg, rgba(155, 89, 208, ${0.15 + index * 0.05}), rgba(255, 107, 53, ${0.1 + index * 0.05}))`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--space-4)',
                    position: 'relative'
                  }}
                >
                  <phase.icon size={24} style={{ color: 'var(--bmv-purple)' }} />
                  <div
                    style={{
                      position: 'absolute',
                      top: '-4px',
                      right: '-4px',
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, var(--bmv-purple), var(--bmv-orange))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '11px',
                      fontWeight: '600',
                      color: 'white'
                    }}
                  >
                    {phase.number}
                  </div>
                </div>
                <h4
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '400',
                    marginBottom: 'var(--space-3)',
                    color: 'var(--bmv-text-heading)',
                    fontSize: '16px',
                    lineHeight: '1.3'
                  }}
                >
                  {phase.title}
                </h4>
                <p
                  style={{
                    fontFamily: "'Red Hat Text', sans-serif",
                    fontSize: '13px',
                    fontWeight: '400',
                    color: 'var(--bmv-text-secondary)',
                    lineHeight: '1.6'
                  }}
                >
                  {phase.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          className="text-center"
          style={{
            fontFamily: "'Red Hat Text', sans-serif",
            fontSize: '17px',
            fontWeight: '400',
            color: 'var(--bmv-text)',
            lineHeight: '1.6'
          }}
        >
          A process designed for total clarity, giving you a transparent, real-time view of your project's progress.
        </p>
      </div>

    </section>
  );
}
