import { Check, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import CalCalendarLightbox from '../CalCalendarLightbox';

export default function SlabPackages() {
  const [showCalendarLightbox, setShowCalendarLightbox] = useState(false);

  return (
    <section className="section-responsive !pt-6" style={{ background: '#1B0A2E' }}>
      <div className="container-responsive">
        <h2
          className="text-white text-center mb-4"
          style={{
            fontFamily: "'Red Hat Display', sans-serif",
            fontSize: '36px',
            fontWeight: 500
          }}
        >
          Three Options. One Simple Choice.
        </h2>

        <p
          className="text-[#A0AEC0] text-center mb-16"
          style={{
            fontFamily: "'Red Hat Text', sans-serif",
            fontSize: '18px'
          }}
        >
          Same PhD team. Same scientific rigor. Choose your level of customization.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
          <div
            className="rounded-lg p-10 flex flex-col relative overflow-hidden group border border-[#1a1a1a] phase-card"
            style={{
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
            <div className="relative z-10 flex flex-col h-full">
              <h3
                className="text-white mb-2"
                style={{
                  fontFamily: "'Red Hat Display', sans-serif",
                  fontSize: '24px',
                  fontWeight: 500
                }}
              >
                INSTANT LOOP<sup style={{ fontSize: '14px' }}>™</sup>
              </h3>
              <p
                className="text-[#ED8936] mb-6"
                style={{
                  fontFamily: "'Red Hat Display', sans-serif",
                  fontSize: '18px',
                  fontWeight: 300,
                  fontStyle: 'italic'
                }}
              >
                Premium Stock. Ready Now.
              </p>
              <p
                className="text-[#E2E8F0] mb-8"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '16px',
                  lineHeight: '1.7'
                }}
              >
                Pre-made, scientifically accurate loops from our production library. What stock footage should be but never is.
              </p>

              <div className="mb-8">
                <p
                  className="text-white font-medium mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontSize: '16px'
                  }}
                >
                  Includes:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                    <span className="text-[#E2E8F0]" style={{ fontFamily: "'Red Hat Text', sans-serif", fontSize: '14px', lineHeight: '1.8' }}>
                      10-15 seconds seamless
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                    <span className="text-[#E2E8F0]" style={{ fontFamily: "'Red Hat Text', sans-serif", fontSize: '14px', lineHeight: '1.8' }}>
                      4K resolution
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                    <span className="text-[#E2E8F0]" style={{ fontFamily: "'Red Hat Text', sans-serif", fontSize: '14px', lineHeight: '1.8' }}>
                      Immediate download
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                    <span className="text-[#E2E8F0]" style={{ fontFamily: "'Red Hat Text', sans-serif", fontSize: '14px', lineHeight: '1.8' }}>
                      PhD-verified accuracy
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-[#ef4444] flex-shrink-0 mt-0.5" />
                    <span className="text-[#E2E8F0]" style={{ fontFamily: "'Red Hat Text', sans-serif", fontSize: '14px', lineHeight: '1.8' }}>
                      Brand customization
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-[#ef4444] flex-shrink-0 mt-0.5" />
                    <span className="text-[#E2E8F0]" style={{ fontFamily: "'Red Hat Text', sans-serif", fontSize: '14px', lineHeight: '1.8' }}>
                      Scientific customization
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-[#ef4444] flex-shrink-0 mt-0.5" />
                    <span className="text-[#E2E8F0]" style={{ fontFamily: "'Red Hat Text', sans-serif", fontSize: '14px', lineHeight: '1.8' }}>
                      Still images
                    </span>
                  </li>
                </ul>
              </div>

              <p
                className="text-[#999999] mb-6 flex-grow"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '14px',
                  fontStyle: 'italic'
                }}
              >
                Ideal For: Companies needing professional visuals immediately without scientific customization
              </p>

              <button
                onClick={() => setShowCalendarLightbox(true)}
                className="w-full inline-flex items-center justify-center gap-4 rounded-[50px] text-white uppercase tracking-wider cursor-pointer border-none transition-all "
                style={{
                  padding: '8px 8px 8px 24px',
                  background: 'rgba(155, 89, 208, 0.65)',
                  fontFamily: "'Red Hat Display', sans-serif",
                  fontSize: '16px',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
                  transitionDuration: '250ms'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(155, 89, 208, 0.85)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(155, 89, 208, 0.65)';
                }}
              >
                <span className="flex-1 text-center">Get Started</span>
                <div
                  className="flex items-center justify-center rounded-full bg-white"
                  style={{
                    width: '40px',
                    height: '40px',
                    color: 'rgba(155, 89, 208, 1)'
                  }}
                >
                  <ArrowRight size={20} />
                </div>
              </button>
            </div>
          </div>

          <div
            className="rounded-lg p-10 flex flex-col relative overflow-hidden group border border-[#1a1a1a] phase-card"
            style={{
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
            <div className="relative z-10 flex flex-col h-full">
              <h3
                className="text-white mb-2"
                style={{
                  fontFamily: "'Red Hat Display', sans-serif",
                  fontSize: '24px',
                  fontWeight: 500
                }}
              >
                SIGNATURE LOOP<sup style={{ fontSize: '14px' }}>™</sup>
              </h3>
              <p
                className="text-[#ED8936] mb-6"
                style={{
                  fontFamily: "'Red Hat Display', sans-serif",
                  fontSize: '18px',
                  fontWeight: 300,
                  fontStyle: 'italic'
                }}
              >
                Brand-Matched Speed
              </p>
              <p
                className="text-[#E2E8F0] mb-8"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '16px',
                  lineHeight: '1.7'
                }}
              >
                Transform our library assets into your branded loop. Perfect when you need premium quality fast.
              </p>

              <div className="mb-8">
                <p
                  className="text-white font-medium mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontSize: '16px'
                  }}
                >
                  Includes:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                    <span className="text-[#E2E8F0]" style={{ fontFamily: "'Red Hat Text', sans-serif", fontSize: '14px', lineHeight: '1.8' }}>
                      Up to 15 seconds seamless
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                    <span className="text-[#E2E8F0]" style={{ fontFamily: "'Red Hat Text', sans-serif", fontSize: '14px', lineHeight: '1.8' }}>
                      Your brand colors & style
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                    <span className="text-[#E2E8F0]" style={{ fontFamily: "'Red Hat Text', sans-serif", fontSize: '14px', lineHeight: '1.8' }}>
                      One looping video file
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                    <span className="text-[#E2E8F0]" style={{ fontFamily: "'Red Hat Text', sans-serif", fontSize: '14px', lineHeight: '1.8' }}>
                      3-4 week delivery
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                    <span className="text-[#E2E8F0]" style={{ fontFamily: "'Red Hat Text', sans-serif", fontSize: '14px', lineHeight: '1.8' }}>
                      One revision round
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-[#ef4444] flex-shrink-0 mt-0.5" />
                    <span className="text-[#E2E8F0]" style={{ fontFamily: "'Red Hat Text', sans-serif", fontSize: '14px', lineHeight: '1.8' }}>
                      Scientific customization
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-[#ef4444] flex-shrink-0 mt-0.5" />
                    <span className="text-[#E2E8F0]" style={{ fontFamily: "'Red Hat Text', sans-serif", fontSize: '14px', lineHeight: '1.8' }}>
                      Still images
                    </span>
                  </li>
                </ul>
              </div>

              <p
                className="text-[#999999] mb-6 flex-grow"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '14px',
                  fontStyle: 'italic'
                }}
              >
                Ideal For: Companies needing visual credibility with brand consistency but without scientific specificity
              </p>

              <button
                onClick={() => setShowCalendarLightbox(true)}
                className="w-full inline-flex items-center justify-center gap-4 rounded-[50px] text-white uppercase tracking-wider cursor-pointer border-none transition-all "
                style={{
                  padding: '8px 8px 8px 24px',
                  background: 'rgba(155, 89, 208, 0.65)',
                  fontFamily: "'Red Hat Display', sans-serif",
                  fontSize: '16px',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
                  transitionDuration: '250ms'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(155, 89, 208, 0.85)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(155, 89, 208, 0.65)';
                }}
              >
                <span className="flex-1 text-center">Get Started</span>
                <div
                  className="flex items-center justify-center rounded-full bg-white"
                  style={{
                    width: '40px',
                    height: '40px',
                    color: 'rgba(155, 89, 208, 1)'
                  }}
                >
                  <ArrowRight size={20} />
                </div>
              </button>
            </div>
          </div>

          <div
            className="rounded-lg p-10 flex flex-col relative group border border-[#1a1a1a] phase-card"
            style={{
              background: 'var(--bmv-surface)',
              borderRadius: '12px',
              border: '1px solid rgba(183, 148, 246, 0.1)',
              transition: 'all 250ms cubic-bezier(0.2, 0.8, 0.2, 1)',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'visible'
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
            {/* Most Popular Ribbon */}
            <div
              className="absolute top-10 right-10 z-20"
              style={{
                transform: 'translate(20%, -20%) rotate(45deg)',
                transformOrigin: 'center',
                width: '80px',
                height: '80px',
                overflow: 'visible'
              }}
            >
              <img
                src="/pngaaa.com-6324228.png"
                alt="Most Popular"
                className="absolute top-0 right-0"
                style={{
                  width: '80px',
                  height: '80px',
                  transform: 'rotate(-45deg) translate(5px, -5px)',
                  objectFit: 'contain'
                }}
              />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <h3
                className="text-white mb-2"
                style={{
                  fontFamily: "'Red Hat Display', sans-serif",
                  fontSize: '24px',
                  fontWeight: 500
                }}
              >
                PRECISION LOOP<sup style={{ fontSize: '14px' }}>™</sup>
              </h3>
            <p
              className="text-[#ED8936] mb-6"
              style={{
                fontFamily: "'Red Hat Display', sans-serif",
                fontSize: '18px',
                fontWeight: 300,
                fontStyle: 'italic'
              }}
            >
              Scientific Accuracy Guaranteed
            </p>
            <p
              className="text-[#E2E8F0] mb-8"
              style={{
                fontFamily: "'Red Hat Text', sans-serif",
                fontSize: '16px',
                lineHeight: '1.7'
              }}
            >
              Your exact molecular or biologic structure. Built for use cases where complete scientific accuracy is important.
            </p>

            <div className="mb-8">
              <p
                className="text-white font-medium mb-4"
                style={{
                  fontFamily: "'Red Hat Display', sans-serif",
                  fontSize: '16px'
                }}
              >
                Includes:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                  <span className="text-[#E2E8F0]" style={{ fontFamily: "'Red Hat Text', sans-serif", fontSize: '14px', lineHeight: '1.8' }}>
                    Up to 20 seconds seamless
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                  <span className="text-[#E2E8F0]" style={{ fontFamily: "'Red Hat Text', sans-serif", fontSize: '14px', lineHeight: '1.8' }}>
                    Your exact structure & target
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                  <span className="text-[#E2E8F0]" style={{ fontFamily: "'Red Hat Text', sans-serif", fontSize: '14px', lineHeight: '1.8' }}>
                    Complete scientific customization
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                  <span className="text-[#E2E8F0]" style={{ fontFamily: "'Red Hat Text', sans-serif", fontSize: '14px', lineHeight: '1.8' }}>
                    4 high-resolution still images
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                  <span className="text-[#E2E8F0]" style={{ fontFamily: "'Red Hat Text', sans-serif", fontSize: '14px', lineHeight: '1.8' }}>
                    Multiple video formats
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                  <span className="text-[#E2E8F0]" style={{ fontFamily: "'Red Hat Text', sans-serif", fontSize: '14px', lineHeight: '1.8' }}>
                    4-5 week delivery
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                  <span className="text-[#E2E8F0]" style={{ fontFamily: "'Red Hat Text', sans-serif", fontSize: '14px', lineHeight: '1.8' }}>
                    Two revision rounds
                  </span>
                </li>
              </ul>
            </div>

            <p
              className="text-[#999999] mb-6 flex-grow"
              style={{
                fontFamily: "'Red Hat Text', sans-serif",
                fontSize: '14px',
                fontStyle: 'italic'
              }}
            >
              Ideal For: Companies presenting to technical audiences or partners requiring scientific precision
            </p>

            <button
              onClick={() => setShowCalendarLightbox(true)}
              className="w-full inline-flex items-center justify-center gap-4 rounded-[50px] text-white uppercase tracking-wider cursor-pointer border-none transition-all "
              style={{
                padding: '8px 8px 8px 24px',
                background: 'rgba(155, 89, 208, 0.65)',
                fontFamily: "'Red Hat Display', sans-serif",
                fontSize: '16px',
                fontWeight: 500,
                letterSpacing: '0.05em',
                transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
                transitionDuration: '250ms'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(155, 89, 208, 0.85)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(155, 89, 208, 0.65)';
              }}
            >
              <span className="flex-1 text-center">Get Started</span>
              <div
                className="flex items-center justify-center rounded-full bg-white"
                style={{
                  width: '40px',
                  height: '40px',
                  color: 'rgba(155, 89, 208, 1)'
                }}
              >
                <ArrowRight size={20} />
              </div>
            </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes rotateBorder {
          0% {
            background: conic-gradient(
              from 0deg,
              rgb(255, 107, 53),
              rgb(183, 148, 246),
              rgb(142, 99, 232),
              rgb(183, 148, 246),
              rgb(255, 107, 53)
            );
          }
          100% {
            background: conic-gradient(
              from 360deg,
              rgb(255, 107, 53),
              rgb(183, 148, 246),
              rgb(142, 99, 232),
              rgb(183, 148, 246),
              rgb(255, 107, 53)
            );
          }
        }

        .animated-border {
          animation: rotateBorder 3s linear infinite;
        }
      `}</style>

      <CalCalendarLightbox
        isOpen={showCalendarLightbox}
        onClose={() => setShowCalendarLightbox(false)}
        calUrl="biomolvisual/15min"
      />
    </section>
  );
}
