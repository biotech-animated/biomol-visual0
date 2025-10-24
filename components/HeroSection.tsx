'use client';

import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://fast.wistia.com/embed/medias/rg07nq3ve0.jsonp';
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

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: '100vh' }}
    >
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <div
          className="wistia_embed wistia_async_rg07nq3ve0 videoFoam=true autoPlay=true muted=true controlsVisibleOnLoad=false endVideoBehavior=loop playbar=false"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            filter: 'brightness(0.6)'
          }}
        >
          &nbsp;
        </div>
      </div>

      <div className="absolute inset-0 bg-black opacity-30" style={{ zIndex: 1 }}></div>

      <div className="relative z-10 h-full flex flex-col justify-end pb-[160px] px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto w-full">
          <h1
            className="text-[#E2E8F0] mb-4"
            style={{
              fontFamily: "'Red Hat Display', sans-serif",
              fontSize: '44px',
              fontWeight: 500,
              lineHeight: '1.2'
            }}
          >
            Molecular & Cellular MOA Visualization That Gets You Funded
          </h1>

          <p
            className="text-[#E2E8F0] mb-8"
            style={{
              fontFamily: "'Red Hat Display', sans-serif",
              fontSize: '24px',
              fontWeight: 500
            }}
          >
            We translate your complex molecular science into a 2-minute visual story designed to win investor confidence.
          </p>

          <div className="flex flex-row gap-6 items-center">
            <Link
                  href="/case-studies"
                  className="group"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    padding: '8px 8px 8px 24px',
                    background: 'rgba(138, 92, 246, 0.65)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    fontSize: '16px',
                    fontWeight: '500',
                    transition: 'all 250ms cubic-bezier(0.2, 0.8, 0.2, 1)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(138, 92, 246, 0.85)';
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(138, 92, 246, 0.65)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <span>Show Reel</span>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'rgba(138, 92, 246, 1)'
                    }}
                  >
                    <ArrowRight size={20} />
                  </div>
                </Link>

                <Link
                  href="/contact"
                  className="group cta-button"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    padding: '8px 8px 8px 24px',
                    background: 'rgba(251, 146, 60, 0.65)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    fontSize: '16px',
                    fontWeight: '500',
                    transition: 'all 250ms cubic-bezier(0.2, 0.8, 0.2, 1)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    position: 'relative',
                    overflow: 'hidden',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    setIsHovered(true);
                    e.currentTarget.style.background = 'rgba(251, 146, 60, 0.85)';
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    setIsHovered(false);
                    e.currentTarget.style.background = 'rgba(251, 146, 60, 0.65)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <span style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                    <span
                      style={{
                        opacity: isHovered ? 0 : 1,
                        transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
                        transition: 'all 0.3s ease',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      Book Your Strategy Call
                    </span>
                    <span
                      style={{
                        position: 'absolute',
                        left: '50%',
                        transform: isHovered ? 'translate(-50%, 0)' : 'translate(-50%, 10px)',
                        opacity: isHovered ? 1 : 0,
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        fontSize: '14px',
                        alignItems: 'center',
                        textAlign: 'center',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      <span style={{ display: 'block' }}>30-minute call</span>
                      <span style={{ display: 'block' }}>Takes two minutes to book</span>
                    </span>
                  </span>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'rgba(251, 146, 60, 1)',
                      flexShrink: 0
                    }}
                  >
                    <ArrowRight size={20} />
                  </div>
                </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
