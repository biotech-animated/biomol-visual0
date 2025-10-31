'use client';

import { ArrowRight } from 'lucide-react';
import { useState, lazy, Suspense } from 'react';
import Link from 'next/link';
import { useLazyVideo } from '@/hooks/useLazyVideo';

// Lazy load lightbox components only when needed
const VideoLightbox = lazy(() => import('./VideoLightbox'));
const CalCalendarLightbox = lazy(() => import('./CalCalendarLightbox'));

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [showVideoLightbox, setShowVideoLightbox] = useState(false);
  const [showCalendarLightbox, setShowCalendarLightbox] = useState(false);

  const { videoRef } = useLazyVideo('/video/Neutrophil_Purple_loop.mp4', {
    isHero: true,
    heroDelay: 2000,
  });

  return (
    <section
      className="relative overflow-hidden min-h-screen"
    >
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/video/Neutrophil_Purple_loop.webp"
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

          <div className="flex md:flex-row flex-col gap-6 md:items-center items-start">
            <button
                  onClick={() => setShowVideoLightbox(true)}
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
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(138, 92, 246, 0.65)';
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
                </button>

                <button
                  onClick={() => setShowCalendarLightbox(true)}
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
                  }}
                  onMouseLeave={(e) => {
                    setIsHovered(false);
                    e.currentTarget.style.background = 'rgba(251, 146, 60, 0.65)';
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
                      <span style={{ display: 'block' }}>Takes 2 minutes to book</span>
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
                </button>
          </div>
        </div>
      </div>

      {showVideoLightbox && (
        <Suspense fallback={null}>
          <VideoLightbox
            isOpen={showVideoLightbox}
            onClose={() => setShowVideoLightbox(false)}
            videoUrl="https://www.youtube.com/watch?v=UvMDknsBp9E"
          />
        </Suspense>
      )}

      {showCalendarLightbox && (
        <Suspense fallback={null}>
          <CalCalendarLightbox
            isOpen={showCalendarLightbox}
            onClose={() => setShowCalendarLightbox(false)}
            calUrl="biomolvisual/30min"
          />
        </Suspense>
      )}
    </section>
  );
}
