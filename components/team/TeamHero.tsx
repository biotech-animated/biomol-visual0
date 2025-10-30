"use client";

import { teamMembers } from '@/data/teamMembers';

export default function TeamHero() {
  const scrollToMember = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const names = ['Ksenia', 'Isabel', 'Andrew', 'Ushma', 'Benjamin'];

  return (
    <section className="relative overflow-hidden bg-[#1B0A2E] min-h-screen">
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/video/SLAB_RNA_dark.webp"
          className="w-full h-full object-cover"
          style={{ position: 'absolute', width: '100%', height: '100%', left: 0, top: 0, filter: 'brightness(0.6)' }}
        >
          <source src="/video/SLAB_RNA_dark.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-black opacity-30" style={{ zIndex: 1 }}></div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-end pt-20 pb-[200px] px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto w-full">
          <h1 className="text-[#E2E8F0] mb-4" style={{ fontFamily: "'Red Hat Display', sans-serif", fontSize: '44px', fontWeight: 500, lineHeight: '1.2' }}>
            Scientific Leadership Team
          </h1>

          <p className="text-xl text-[#E2E8F0] leading-relaxed mb-3 max-w-3xl" style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 500, fontSize: '24px' }}>
            Five senior scientific experts who guide every phase of your project.
          </p>

          <p className="text-base text-[#A0AEC0] leading-relaxed max-w-4xl" style={{ fontFamily: "'Red Hat Text', sans-serif", fontSize: '16px' }}>
            We&apos;re not a production line. We&apos;re a precision team. While larger studios deploy dozens of generalists across hundreds of projects, your entire visualization stays with the same dedicated experts from first call to final frame. Deep scientific expertise. Total project ownership. Zero handoffs.
          </p>
        </div>
      </div>

      {/* Team Photo Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-[#1A202C]/50 backdrop-blur-[10px] border-t border-[#9B59D0]/20" style={{ height: '150px' }}>
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 h-full">
          <div className="flex justify-center items-center h-full gap-12 md:gap-16 overflow-x-auto scrollbar-hide">
            {teamMembers.map((member, index) => (
              <button
                key={member.id}
                onClick={() => scrollToMember(member.id)}
                className="flex flex-col items-center group cursor-pointer transition-all duration-300 flex-shrink-0"
                aria-label={`View ${member.name}'s profile`}
              >
                <div
                  className="rounded-full bg-gradient-to-br from-[#1A202C] to-[#121212] border-2 border-[#9B59D0]/30 transition-all duration-300 group-hover:border-[#9B59D0] flex items-center justify-center overflow-hidden shadow-lg group-hover:shadow-[0_0_24px_rgba(155,89,208,0.4)]"
                  style={{ width: '80px', height: '80px' }}
                >
                  <img
                    src={`/team/${member.id}.jpg`}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-10 h-10 text-[#718096] transition-colors duration-300 group-hover:text-[#9B59D0] flex items-center justify-center"><svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>';
                      }
                    }}
                  />
                </div>
                <p className="text-[#E2E8F0] text-sm mt-2 transition-colors duration-200 group-hover:text-[#9B59D0]" style={{ fontFamily: "'Red Hat Text', sans-serif", fontWeight: 400 }}>
                  {names[index]}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
