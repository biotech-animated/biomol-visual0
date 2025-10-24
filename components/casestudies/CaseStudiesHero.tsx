import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface CaseStudiesHeroProps {
  onOpenForm: () => void;
}

export default function CaseStudiesHero({ onOpenForm }: CaseStudiesHeroProps) {
  const [fundingCount, setFundingCount] = useState(0);
  const [roundsCount, setRoundsCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://fast.wistia.com/embed/medias/z1zuxffzmk.jsonp';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://fast.wistia.com/assets/external/E-v1.js';
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      if (document.body.contains(script1)) document.body.removeChild(script1);
      if (document.body.contains(script2)) document.body.removeChild(script2);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateValue(setFundingCount, 0, 500, 1500);
          animateValue(setRoundsCount, 0, 30, 1500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateValue = (
    setter: (value: number) => void,
    start: number,
    end: number,
    duration: number
  ) => {
    const startTime = Date.now();
    const easeOutQuad = (t: number) => t * (2 - t);

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuad(progress);
      const current = Math.floor(start + (end - start) * easedProgress);

      setter(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#1B0A2E]" style={{ height: '100vh' }}>
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <div
          className="wistia_embed wistia_async_z1zuxffzmk videoFoam=true autoPlay=true muted=true controlsVisibleOnLoad=false endVideoBehavior=loop playbar=false"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            filter: 'brightness(0.6)'
          }}
        >
          &nbsp;
        </div>
      </div>

      <div className="absolute inset-0 bg-black opacity-30" style={{ zIndex: 1 }}></div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 pt-32 pb-16">
        <div className="max-w-[1400px] mx-auto w-full">
          <h1
            className="text-[#E2E8F0] mb-16"
            style={{
              fontFamily: "'Red Hat Display', sans-serif",
              fontSize: '44px',
              fontWeight: 500,
              lineHeight: '1.2'
            }}
          >
            Our Strategic Playbook. Your Competitive Edge.
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <div>
              <p
                className="text-[#A0AEC0]"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '1.6'
                }}
              >
                A successful funding round is the result of a powerful strategy. Our case studies break down the strategic architecture behind our clients&apos; successes—how the visual asset was built, where it was deployed, and the market impact it created.
              </p>

              <p
                className="text-[#A0AEC0] mt-4"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '1.6'
                }}
              >
                Because this playbook is proprietary and core to our clients&apos; competitive advantage, we provide these detailed analyses on a confidential, request-only basis.
              </p>

              <button
                onClick={onOpenForm}
                className="mt-8 inline-flex items-center gap-4 rounded-[50px] text-white tracking-wider cursor-pointer border-none transition-all hover:scale-[1.02]"
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
                <span>Request Case Studies</span>
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

          <div className="mt-12">
            <p
              className="text-[#E2E8F0] text-center mb-6"
              style={{
                fontFamily: "'Red Hat Display', sans-serif",
                fontSize: '24px',
                fontWeight: 500
              }}
            >
              We&apos;ve created key visual assets used in:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[675px] mx-auto">
              <div
                className="rounded-xl p-6 text-center relative overflow-hidden group border border-[#1a1a1a] phase-card"
                style={{
                  background: '#1a1a1a',
                }}
              >
                <div className="relative z-10">
                  <p
                    style={{
                      fontFamily: "'Red Hat Display', sans-serif",
                      fontSize: '48px',
                      fontWeight: 500,
                      color: '#ed6c46',
                      lineHeight: '1'
                    }}
                  >
                    ${fundingCount}M+
                  </p>
                  <p
                    className="text-[#f5f5f5] mt-3 uppercase tracking-wider"
                    style={{
                      fontFamily: "'Red Hat Text', sans-serif",
                      fontSize: '11px',
                      fontWeight: 400,
                      letterSpacing: '0.05em'
                    }}
                  >
                    Client Funding Rounds
                  </p>
                </div>
              </div>

              <div
                className="rounded-xl p-6 text-center relative overflow-hidden group border border-[#1a1a1a] phase-card"
                style={{
                  background: '#1a1a1a',
                }}
              >
                <div className="relative z-10">
                  <p
                    style={{
                      fontFamily: "'Red Hat Display', sans-serif",
                      fontSize: '48px',
                      fontWeight: 500,
                      color: '#ed6c46',
                      lineHeight: '1'
                    }}
                  >
                    {roundsCount}+
                  </p>
                  <p
                    className="text-[#f5f5f5] mt-3 uppercase tracking-wider"
                    style={{
                      fontFamily: "'Red Hat Text', sans-serif",
                      fontSize: '11px',
                      fontWeight: 400,
                      letterSpacing: '0.05em'
                    }}
                  >
                    Successful Series A/B/C Rounds
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
