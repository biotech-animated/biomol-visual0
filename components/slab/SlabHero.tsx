import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function SlabHero() {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://fast.wistia.com/embed/medias/o4t98618ua.jsonp';
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
    <section className="relative overflow-hidden bg-[#1B0A2E]" style={{ height: '100vh' }}>
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <div
          className="wistia_embed wistia_async_o4t98618ua videoFoam=true autoPlay=true muted=true controlsVisibleOnLoad=false endVideoBehavior=loop playbar=false"
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
            Premium Looping Assets from Our Vault.<br />
            Ready to Deploy in Weeks.
          </h1>

          <p
            className="text-[#E2E8F0] mb-8"
            style={{
              fontFamily: "'Red Hat Display', sans-serif",
              fontSize: '24px',
              fontWeight: 500
            }}
          >
            A curated vault of molecular and cellular assets. Scientifically accurate. Cinema-quality. Ready to customize.
          </p>

          <div className="flex flex-row gap-6 items-center">
            <Link href="#examples">
              <button
                className="inline-flex items-center gap-4 rounded-[50px] text-white cursor-pointer border-none transition-all hover:scale-[1.02]"
                style={{
                  padding: '8px 8px 8px 24px',
                  background: 'rgba(155, 89, 208, 0.65)',
                  fontFamily: "'Red Hat Display', sans-serif",
                  fontSize: '16px',
                  fontWeight: 500,
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
                <span>See Examples</span>
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
            </Link>
            <Link href="/contact">
              <button
                onMouseEnter={(e) => {
                  setIsHovering(true);
                  e.currentTarget.style.background = 'rgba(237, 108, 70, 0.85)';
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  setIsHovering(false);
                  e.currentTarget.style.background = 'rgba(237, 108, 70, 0.65)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
                className="inline-flex items-center gap-4 rounded-[50px] text-white cursor-pointer border-none transition-all"
                style={{
                  padding: '8px 8px 8px 24px',
                  background: 'rgba(237, 108, 70, 0.65)',
                  fontFamily: "'Red Hat Display', sans-serif",
                  fontSize: '16px',
                  fontWeight: 500,
                  transition: 'all 250ms cubic-bezier(0.2, 0.8, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  width: isHovering ? '250px' : '180px',
                }}
              >
                <span style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                  <span
                    style={{
                      opacity: isHovering ? 0 : 1,
                      transform: isHovering ? 'translateY(-10px)' : 'translateY(0)',
                      transition: 'all 0.3s ease',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    Get Started
                  </span>
                  <span
                    style={{
                      position: 'absolute',
                      left: '50%',
                      transform: isHovering ? 'translate(-50%, 0)' : 'translate(-50%, 10px)',
                      opacity: isHovering ? 1 : 0,
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      fontSize: '14px',
                      alignItems: 'center',
                      textAlign: 'center',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    <span style={{ display: 'block' }}>15-minute consultation</span>
                    <span style={{ display: 'block' }}>Custom quote in 24 hours</span>
                  </span>
                </span>
                <div
                  className="flex items-center justify-center rounded-full bg-white"
                  style={{
                    width: '40px',
                    height: '40px',
                    color: 'rgba(237, 108, 70, 1)',
                    flexShrink: 0
                  }}
                >
                  <ArrowRight size={20} />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div >
    </section >
  );
}
