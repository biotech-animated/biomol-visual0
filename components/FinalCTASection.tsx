"use client"
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FinalCTASection() {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://fast.wistia.com/embed/medias/jikvx2yp0x.jsonp';
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-responsive"
    >
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <div
          className="wistia_embed wistia_async_jikvx2yp0x videoFoam=true autoPlay=true muted=true controlsVisibleOnLoad=false endVideoBehavior=loop playbar=false"
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

      <div className="relative z-10 container-responsive">
        <div className="text-center" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
          <h2 className="text-responsive-lg" style={{ lineHeight: '1.2' }}>
            Stop Explaining. Start Showing.
          </h2>

          <p
            className="text-responsive-sm"
            style={{
              color: 'var(--bmv-text)',
              lineHeight: '1.7'
            }}
          >
            Every day without a powerful fundraising asset, the cost of a complex story grows.
          </p>

          <div
            className="text-left max-w-2xl mx-auto text-responsive-sm"
            style={{
              color: 'var(--bmv-text)',
              lineHeight: '1.7',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-2)'
            }}
          >
            <p>• Investors struggle to grasp your science.</p>
            <p>• Potential partners miss your key competitive advantage.</p>
            <p>• Your momentum is lost in a loop of re-explaining the core science.</p>
            <p>• Competitors with clearer stories win the funding that should be yours.</p>
          </div>

          <p
            className="text-responsive-md"
            style={{
              fontWeight: '500',
              color: 'var(--bmv-text-heading)'
            }}
          >
            One powerful fundraising asset solves all of this.
          </p>

          <div style={{ paddingTop: 'var(--space-4)' }}>
            <button
              onClick={() => window.location.href = '/contact'}
              className="group cta-button"
              style={{
                padding: '8px 8px 8px 24px',
                background: 'rgba(251, 146, 60, 0.65)',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                fontSize: '16px',
                fontWeight: '500',
                transition: 'all 250ms cubic-bezier(0.2, 0.8, 0.2, 1)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '16px',
                position: 'relative',
                overflow: 'hidden'
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

          <p
            className="max-w-2xl mx-auto text-responsive-sm"
            style={{
              color: 'var(--bmv-text)',
              paddingTop: 'var(--space-4)'
            }}
          >
            In a 30-minute call, we will show you exactly how to transform your science into your most powerful communication asset.
          </p>
        </div>
      </div>
    </section>
  );
}
