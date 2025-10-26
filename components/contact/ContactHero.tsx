import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

interface ContactHeroProps {
  onOpenForm: () => void;
}

export default function ContactHero({ onOpenForm }: ContactHeroProps) {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://fast.wistia.com/embed/medias/9l1fpz3db6.jsonp';
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
          className="wistia_embed wistia_async_9l1fpz3db6 videoFoam=true autoPlay=true muted=true controlsVisibleOnLoad=false endVideoBehavior=loop playbar=false"
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
            Get in Touch
          </h1>

          <p
            className="text-[#E2E8F0] mb-8"
            style={{
              fontFamily: "'Red Hat Display', sans-serif",
              fontSize: '24px',
              fontWeight: 500
            }}
          >
            Whether you need a full custom project or something from our asset library, we&apos;ll figure out the right fit together.
          </p>

          <button
            onClick={onOpenForm}
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
            <span>Get in Touch</span>
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
    </section>
  );
}
