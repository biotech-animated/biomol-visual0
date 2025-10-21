"use client"
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ScientificTeamSection() {
  const team = [
    {
      name: 'Ksenia',
      title: 'Scientific Managing Director',
      bio: "Your main point of contact. Ensures scientific accuracy across all project phases, keeping timelines on track and stakeholder communication seamless. Reviews every frame for scientific precision. Five peer-reviewed papers. Also has Level 9 Piano certification, which explains why your project runs like a perfectly orchestrated symphony.",
      credentials: 'PhD Molecular Biology, York University',
      expertise: 'Project Management, Team Leadership, Scientific Review',
      location: 'Canada (Eastern Time)',
      initials: 'KT'
    },
    {
      name: 'Isabel',
      title: 'Scientific Story Architect',
      bio: "Writes your script. Creates your storyboard. Takes your 100-slide deck and turns it into a 2-minute story. Eight publications. Over 100 projects since 2015. Quiet in meetings but comes back with visual solutions so clever you'll wonder if she's psychic.",
      credentials: 'PhD Biomedical Sciences, UC San Diego',
      expertise: 'Scientific Storytelling, Scriptwriting, Storyboarding',
      location: 'United States (Pacific Time)',
      initials: 'IC'
    },
    {
      name: 'Andrew',
      title: 'Scientific Visualization Specialist',
      bio: "Builds your molecular models. Makes sure every protein folds correctly. Published crystal structures at 4.1 Å resolution. When not perfecting your MOA, he's teaching university students why their proteins are drawn wrong.",
      credentials: 'PhD Cell and Systems Biology, University of Toronto',
      expertise: '3D Modeling, Structural Biology, Scientific Accuracy',
      location: 'Canada (Eastern Time)',
      initials: 'AC'
    },
    {
      name: 'Ushma',
      title: 'Scientific Art Specialist',
      bio: "Creates your Style Frames. Defines your visual brand. 2024 AMI Award winner. Claims her best ideas come from video games and walks, which sounds suspicious until you see the results.",
      credentials: 'MS Biomedical Visualization, University of Illinois Chicago; BS Neuroscience, Dominican University',
      expertise: 'Art Direction, Style Frame Development, Visual Branding',
      location: 'United States (Mountain Time)',
      initials: 'UP'
    },
    {
      name: 'Benjamin',
      title: 'Founder & CEO',
      bio: "Founded Biomol Visual after working in pharmaceutical business development, managing drug discovery partnerships. Built and retained an exceptional team of PhD and MSc specialists. BSc Biotechnology with Honours from University College London. Still gets nightmares about Comic Sans in investor presentations.",
      credentials: 'BSc Biotechnology, University College London',
      expertise: 'Team Leadership, Business Strategy, Lean Operations',
      location: 'United States (Pacific Time)',
      initials: 'BD'
    }
  ];

  const swiperRef = useRef<SwiperType | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section
      className="min-h-screen flex items-center justify-center section-responsive"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/Barrier_Red_Version2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container-responsive">
        <div className="text-center" style={{ marginBottom: 'var(--space-9)' }}>
          <h2 className="text-responsive-lg" style={{ marginBottom: 'var(--space-4)' }}>
            Scientific Leadership Team
          </h2>
          <p
            className="text-responsive-sm"
            style={{
              color: 'var(--bmv-text-secondary)',
              maxWidth: '700px',
              margin: '0 auto'
            }}
          >
            Meet the dedicated senior experts who will guide your project from scientific discovery to final delivery.
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-custom',
              bulletClass: 'swiper-pagination-bullet-custom',
              bulletActiveClass: 'swiper-pagination-bullet-active-custom',
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setActiveSlide(swiper.activeIndex);
            }}
            style={{
              '--swiper-navigation-color': 'var(--bmv-text)',
              '--swiper-pagination-color': 'var(--bmv-purple)',
            } as React.CSSProperties}
          >
            {team.map((member, index) => (
              <SwiperSlide key={index}>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
                  style={{
                    padding: 'clamp(1rem, 4vw, 2rem)',
                    background: 'rgba(30, 30, 40, 0.4)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    borderRadius: '12px',
                    border: '1px solid white',
                    minHeight: 'clamp(400px, 50vh, 480px)'
                  }}
                >
                  <div className="flex items-center justify-center order-1 md:order-1 lg:order-1">
                    <div
                      className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] aspect-square"
                      style={{
                        borderRadius: '12px',
                        overflow: 'hidden',
                        position: 'relative',
                        background: 'linear-gradient(135deg, var(--bmv-purple) 0%, var(--bmv-orange) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <img
                        src={`./team/${member.name.toLowerCase()}.jpg`}
                        alt={`${member.name} photo`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center'
                        }}
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = document.createElement('div');
                          fallback.style.cssText = `
                            width: 100%;
                            height: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 32px;
                            font-weight: 500;
                            color: white;
                          `;
                          fallback.textContent = member.initials;
                          target.parentNode?.appendChild(fallback);
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 md:gap-4 order-2 md:order-2 lg:order-2">
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium" style={{ marginBottom: 'var(--space-1)' }}>{member.name}</h3>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl" style={{ color: 'var(--bmv-purple-light)', fontWeight: '500' }}>
                        {member.title}
                      </p>
                    </div>
                    <p className="text-responsive-sm" style={{ color: 'var(--bmv-text)', lineHeight: '1.6' }}>
                      {member.bio}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 md:gap-4 order-3 md:order-3 lg:order-3 text-responsive-sm">
                    <div>
                      <p style={{ color: 'var(--bmv-text-secondary)', marginBottom: 'var(--space-1)', fontWeight: '500' }}>
                        Credentials
                      </p>
                      <p style={{ color: 'var(--bmv-text)' }}>{member.credentials}</p>
                    </div>
                    <div>
                      <p style={{ color: 'var(--bmv-text-secondary)', marginBottom: 'var(--space-1)', fontWeight: '500' }}>
                        Expertise
                      </p>
                      <p style={{ color: 'var(--bmv-text)' }}>{member.expertise}</p>
                    </div>
                    <div>
                      <p style={{ color: 'var(--bmv-text-secondary)', marginBottom: 'var(--space-1)', fontWeight: '500' }}>
                        Based in
                      </p>
                      <p style={{ color: 'var(--bmv-text)' }}>{member.location}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <button
              className="swiper-button-prev-testimonials absolute md:left-0 left-6 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-gray-850/90 hover:bg-purple-500/20 border border-white rounded-full flex items-center justify-center transition-all duration-500 backdrop-blur-sm"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ChevronLeft size={20} />
          </button>

          <button
            className="swiper-button-next-testimonials absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-gray-850/90 hover:bg-purple-500/20 border border-white rounded-full flex items-center justify-center transition-all duration-500 backdrop-blur-sm"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button> */}

          <div
            className="items-center justify-center gap-2 sm:gap-3 md:gap-4 flex"
            style={{ marginTop: 'clamp(1rem, 3vw, 2rem)' }}
          >
            <button
              className="swiper-button-prev-custom hidden md:flex"
              onClick={() => swiperRef.current?.slidePrev()}
              style={{
                width: 'clamp(32px, 8vw, 40px)',
                height: 'clamp(32px, 8vw, 40px)',
                borderRadius: '50%',
                background: 'var(--bmv-surface)',
                border: '1px solid rgba(183, 148, 246, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 250ms',
                color: 'var(--bmv-text)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--bmv-purple)';
                e.currentTarget.style.borderColor = 'var(--bmv-purple)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--bmv-surface)';
                e.currentTarget.style.borderColor = 'rgba(183, 148, 246, 0.3)';
              }}
            >
              <ChevronLeft size={20} />
            </button>

            <div className="swiper-pagination-custom flex justify-center !w-min" style={{ gap: 'clamp(0.25rem, 2vw, 0.5rem)' }}>
              {team.map((_, index) => (
                <button
                  key={index}
                  className="swiper-pagination-bullet-custom"
                  onClick={() => swiperRef.current?.slideTo(index)}
                  style={{
                    width: 'clamp(6px, 2vw, 8px)',
                    height: 'clamp(6px, 2vw, 8px)',
                    borderRadius: '50%',
                    background: activeSlide === index ? 'var(--bmv-purple)' : 'var(--bmv-border)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 250ms'
                  }}
                />
              ))}
            </div>

            <button
              className="swiper-button-next-custom hidden md:flex"
              onClick={() => swiperRef.current?.slideNext()}
              style={{
                width: 'clamp(32px, 8vw, 40px)',
                height: 'clamp(32px, 8vw, 40px)',
                borderRadius: '50%',
                background: 'var(--bmv-surface)',
                border: '1px solid rgba(183, 148, 246, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 250ms',
                color: 'var(--bmv-text)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--bmv-purple)';
                e.currentTarget.style.borderColor = 'var(--bmv-purple)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--bmv-surface)';
                e.currentTarget.style.borderColor = 'rgba(183, 148, 246, 0.3)';
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
