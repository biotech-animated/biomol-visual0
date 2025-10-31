import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import CalCalendarLightbox from '../CalCalendarLightbox';
import { useLazyVideo } from '@/hooks/useLazyVideo';

export default function SlabHero() {
  const [isHovering, setIsHovering] = useState(false);
  const [showCalendarLightbox, setShowCalendarLightbox] = useState(false);

  const { videoRef } = useLazyVideo('/video/SLAB_RNA_dark.mp4');

  return (
    <section 
      className="relative overflow-hidden md:h-screen h-auto" 
      style={{ 
        background: '#1B0A2E'
      }}
    >
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/video/SLAB_RNA_dark.webp"
          className="w-full h-full object-cover"
          style={{ position: 'absolute', width: '100%', height: '100%', left: 0, top: 0, filter: 'brightness(0.6)' }}
        />
      </div>

      <div className="absolute inset-0 bg-black opacity-30" style={{ zIndex: 1 }}></div>

      <div className="relative z-10 min-h-screen flex flex-col justify-end pb-24 md:pb-[160px] px-8 md:px-16 pt-32">
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

          <div className="flex md:flex-row flex-col gap-6 md:items-center items-start">
            <Link href="#examples">
              <button
                className="inline-flex items-center gap-4 rounded-[50px] text-white cursor-pointer border-none transition-all"
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
            <button
              onClick={() => setShowCalendarLightbox(true)}
              onMouseEnter={(e) => {
                setIsHovering(true);
                e.currentTarget.style.background = 'rgba(237, 108, 70, 0.85)';
              }}
              onMouseLeave={(e) => {
                setIsHovering(false);
                e.currentTarget.style.background = 'rgba(237, 108, 70, 0.65)';
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
                    <span style={{ display: 'block' }}>15-minute call</span>
                    <span style={{ display: 'block' }}>Takes 2 minutes to book</span>
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
          </div>
        </div>
      </div >

      <CalCalendarLightbox
        isOpen={showCalendarLightbox}
        onClose={() => setShowCalendarLightbox(false)}
        calUrl="biomolvisual/15min"
      />
    </section >
  );
}
