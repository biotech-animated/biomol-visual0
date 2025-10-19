"use client"
import { useEffect, useState } from 'react';

export default function ByTheNumbersSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const metrics = [
    [
      { number: '$500M+', label: 'Raised by Our Clients' },
      { number: '30+', label: 'Successful Rounds of Funding' },
      { number: '70+', label: 'Biopharma Clients Served' }
    ],
    [
      { number: '100+', label: 'Molecular & Cellular Mechanisms Visualized' },
      { number: '1 in 4', label: 'Clients Return for Additional Projects' },
      { number: '10+', label: 'Years of Operation' }
    ]
  ];

  return (
    <section
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/Barrier_Red_Version1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center" style={{ marginBottom: 'var(--space-9)' }}>
          By the Numbers
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          {metrics.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid md:grid-cols-3"
              style={{ gap: 'var(--space-5)' }}
            >
              {row.map((metric, index) => (
                <div
                  key={index}
                  className="text-center metric-card"
                  style={{
                    padding: 'var(--space-6)',
                    background: 'rgba(30, 30, 40, 0.4)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    borderRadius: '12px',
                    border: '1px solid rgba(183, 148, 246, 0.2)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    className="metric-card-glow"
                    style={{
                      position: 'absolute',
                      inset: '-2px',
                      borderRadius: '12px',
                      padding: '2px',
                      background: 'conic-gradient(from 0deg, transparent, transparent)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      pointerEvents: 'none',
                      zIndex: 0
                    }}
                  />
                  <div
                    style={{
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    <div
                      style={{
                        fontSize: 'clamp(32px, 5vw, 48px)',
                        fontWeight: '500',
                        color: 'var(--bmv-purple-light)',
                        marginBottom: 'var(--space-3)',
                        fontFamily: "'Red Hat Display', sans-serif"
                      }}
                    >
                      {metric.number}
                    </div>
                    <div
                      style={{
                        fontSize: '16px',
                        color: 'var(--bmv-text)',
                        lineHeight: '1.4'
                      }}
                    >
                      {metric.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <p
          className="text-center"
          style={{
            marginTop: 'var(--space-8)',
            fontSize: '18px',
            color: 'var(--bmv-text-secondary)'
          }}
        >
          The track record your breakthrough deserves.
        </p>
      </div>

      <style>{`
        @keyframes rotate-border {
          0% {
            --angle: 0deg;
          }
          100% {
            --angle: 360deg;
          }
        }

        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }

        .metric-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .metric-card:hover {
          transform: translateY(-2px);
          box-shadow:
            0 0 20px rgba(183, 148, 246, 0.4),
            0 0 40px rgba(255, 107, 53, 0.3),
            0 8px 32px rgba(0, 0, 0, 0.4);
        }

        .metric-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 12px;
          padding: 2px;
          background: conic-gradient(
            from var(--angle),
            rgb(255, 107, 53),
            rgb(183, 148, 246),
            rgb(142, 99, 232),
            rgb(183, 148, 246),
            rgb(255, 107, 53)
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .metric-card:hover::before {
          opacity: 1;
          animation: rotate-border 3s linear infinite;
        }

        .metric-card-glow {
          display: none;
        }
      `}</style>
    </section>
  );
}
