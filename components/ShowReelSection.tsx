'use client';

import { useState, useEffect, useRef } from 'react';

export default function ShowReelSection() {
  const [shouldLoad, setShouldLoad] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section
      ref={sectionRef}
      id="showreel"
      className="flex items-center justify-center section-responsive"
      style={{
        background: '#1B0A2E',
        paddingTop: '24px',
      }}
    >
      <div className="max-w-[1400px] px-8 md:px-16 w-full">
        <div
          className="text-center"
          style={{
            marginBottom: 'var(--space-9)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-3)'
          }}
        >
          <h2 className="text-responsive-lg" style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: '500' }}>Showreel</h2>
          <p
            className="max-w-3xl mx-auto text-responsive-sm"
            style={{
              fontFamily: "'Red Hat Text', sans-serif",
              fontWeight: '400',
              lineHeight: '1.6',
              color: 'var(--bmv-text-secondary)'
            }}
          >
            Press play to see how we transform complex science into clear, compelling stories that drive results.
          </p>
        </div>

        <div
          className="aspect-video w-full rounded-2xl overflow-hidden mx-auto"
          style={{
            border: '1px solid rgba(183, 148, 246, 0.2)'
          }}
        >
          {shouldLoad ? (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/UvMDknsBp9E"
              title="Showreel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                display: 'block'
              }}
              loading="lazy"
            />
          ) : (
            <div 
              className="w-full h-full flex items-center justify-center bg-gray-900"
              style={{
                background: 'linear-gradient(135deg, rgba(27, 10, 46, 1), rgba(26, 10, 46, 0.8))'
              }}
            >
              <div className="text-white text-center">
                <div className="mb-4 text-xl">Loading video...</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
