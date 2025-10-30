"use client"
import { useRef, useState, useEffect } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight, Lightbulb, Palette, Video, Package, Rocket } from 'lucide-react';

// Dynamically load Swiper and styles
let SwiperComponent: any = null;
let SwiperSlideComponent: any = null;
let NavigationModule: any = null;

export default function UnifiedSection() {
  const testimonials = [
    {
      id: 1,
      brief: "Working with Biomol Visual has been a great advantage for Abcore.",
      quote: "Working with Biomol Visual has been a great advantage for Abcore. It has allowed us to work with marketing experts who are interested in the success and growth of our company, without having to hire additional employees. Abcore can go to Biomol Visual with ideas of marketing campaigns we are thinking about starting, budget them accordingly, and focus on executing the campaigns as quickly and efficiently as possible. There is no lag time of hiring and training a new employee. There is no digging through the internet trying to find out how to do something. Biomol Visual knows and can start immediately. Their work has increased our lead generation considerably, and has allowed us to spend more of our marketing budget on marketing, not experimenting. Biomol Visual helped us first with making a video to describe our flagship product, but just as importantly helped us to setup a landing page and advertising campaign to put the movie in front of as many potential customers as possible.",
      author: "David Barraclough",
      title: "CEO",
      company: "Abcore",
      logo: "./logos/Abcore.webp"
    },
    {
      id: 2,
      brief: "The final product was truly excellent and it was a key element in helping us to win a major competition.",
      quote: "We needed a video to explain and demonstrate some complex technology that we have developed in the DNA field, and we approached Biomol Visual for help. From the beginning of the process they were very engaged, understanding the principles of the technology and suggesting innovative ways to illustrate the key concepts. The project had a short deadline and they acted quickly and were prompt and helpful when we requested a series of small changes. The final product was truly excellent and it was a key element in helping us to win a major competition.",
      author: "Tom Brown",
      title: "Professor of Nucleic Acid Chemistry",
      company: "University of Oxford",
      logo: "./logos/NIH.webp"
    },
    {
      id: 3,
      brief: "The Biomol Visual team quickly understood what we wanted to achieve and delivered a great product on time and on budget.",
      quote: "This was our first video, and we wanted a tool to effectively convey a complex story. Biomol Visual 'got it' and guided us through a dynamic development process to produce an excellent production that really differentiates us and our technology. The Biomol Visual team quickly understood what we wanted to achieve and delivered a great product on time and on budget. The Biomol Visual team understands science and biotech, so communication is direct and effective—no wasting time bringing designers up to speed. We were delighted with the final productions and the flexible approach that Biomol Visual had. In the first instance the video will support conference presentations and later on it will feature on our website. Great product, dynamic process, cost effective and pleasant to work with.",
      author: "James Campbell",
      title: "CEO",
      company: "Patrys",
      logo: "./logos/Patrys.webp"
    },
    {
      id: 4,
      brief: "I would highly recommend working with Biomol Visual because I had a very positive experience from start to finish.",
      quote: "Biomol Visual were professional and efficient in delivering very high quality videos. My favorite elements are the 3D labeled antibodies! Our whole team loved the videos, they have enabled us to refresh our branding and have helped our audiences engage with us on YouTube further. It was very useful to work with professionals who understand complex scientific concepts, and we would recommend their company for the quality and speed of final work delivered. I would highly recommend working with Biomol Visual because I had a very positive experience of working with Biomol Visual from start to finish. They really took the messages we wanted to convey on board and translated our brief into very high quality 2D and 3D videos.",
      author: "Klaudyna Johnstone",
      title: "Marketing Manager",
      company: "Innova Biosciences",
      logo: "./logos/Innova Biosciences.webp"
    },
    {
      id: 5,
      brief: "Our finished product from Biomol Visual helps us to quickly explain our technology in way that fits a broad audience.",
      quote: "Biomol Visual has a great team of marketing experts as well as scientists that understand our processes and are able to explain them in a clear, distilled message. The team was professional and explained the process of producing an animated video clearly from the beginning. Our finished product from Biomol Visual helps us to quickly explain our technology in way that fits a broad audience. The results look great and have become part of our constant outreach to both collaborators as well as investors. The professional team at Biomol Visual clearly understand the biotech industry and how to present an understandable message in a short amount of time that conveys a very complex understanding of our technology. I would recommend the Biomol Visual to anyone wanting to create a concise message regarding their technology, but the value to small companies like ours is great. Without having to hire consultants and marketing experts over a long period of time, and for a very reasonable budget, we were able to create an excellent product.",
      author: "Eddie Sullivan",
      title: "CEO",
      company: "SAb Biotherapeutics",
      logo: "./logos/SAb Bio.webp"
    },
    {
      id: 6,
      brief: "It has been fantastic to work with Ksenia's team, and especially on the scientific side, it has been a breeze to explain all of our scientific concepts and have them accurately represented in our final animation product.",
      quote: "It has been fantastic to work with Ksenia's team, and especially on the scientific side, it has been a breeze to explain all of our scientific concepts and have them accurately represented in our final animation product.",
      author: "Harvey Tian",
      title: "CEO & Co-Founder",
      company: "Inso Biosciences",
      logo: "./logos/Inso Bio.webp"
    },
    {
      id: 7,
      brief: "Biomol Visual understood the concept behind our product. Our team's response to the video they created was very positive.",
      quote: "Biomol Visual understood the concept behind our product. Our team's response to the video they created was very positive. We needed only minor adjustments before accepting the final version. The video was an excellent touch at IMMUNOLOGY 2017, one of our main annual conferences. It is also helping with our product-specific webpages and marketing material. Biomol Visual did excellent background research before presenting a proposal. They also arranged a thorough discussion before proceeding with the project, had excellent understanding of the scientific concept of the product, were very responsive to suggestions during development, and gave a fair price. Thanks a lot to the entire team. Hopefully this won't be our only project!",
      author: "Miguel Tam",
      title: "Senior Product Manager",
      company: "BioLegend",
      logo: "./logos/BioLegend.webp"
    },
    {
      id: 8,
      brief: "Biomol Visual is a unique group of people that should be the go to group for producing biology-related videos for pharmaceutical and biotech companies of any size.",
      quote: "As part of our company website revamping process, our CEO charged us with producing a series of short videos to highlight our company and programs. We were fortunate to get a referral from our web designer firm to the talented team at Biomol Visual. They quickly assessed our needs and provided sample products from previous clients, as well as rough mock ups specific to our project. Once we had a contract in place, their talented script writer Pia worked with us to assemble video scripts and then story boards. Once the story boards were finalized, the animation phase moved quickly as Marcin used his background in biology together with animation skills to produce three separate videos that are visually stunning and tell our stories well. Biomol Visual is a unique group of people that should be the go to group for producing biology-related videos for pharmaceutical and biotech companies of any size. We would happily use their services again.",
      author: "Diana Price",
      title: "Senior Director of Neurosciences",
      company: "Neuropore Therapies",
      logo: "./logos/Neuropore.webp"
    },
    {
      id: 9,
      brief: "Your team was extremely knowledgeable and easy to work with. We only had to request very minimal edits throughout the process.",
      quote: "Your team was extremely knowledgeable and easy to work with. We only had to request very minimal edits throughout the process. We appreciate the time and effort from all members of your team to get us a high-quality product. We are excited to share it.",
      author: "Melinda Langdon",
      title: "Director of Marketing and Communications",
      company: "Ivy Brain Tumor Center",
      logo: "./logos/Ivy Brain Tumor Center.png"
    },
    {
      id: 10,
      brief: "We felt the team had a solid understanding of the technology and was very receptive to the explanation of the details.",
      quote: "We felt the team had a solid understanding of the technology and was very receptive to the explanation of the details. Amazing communication, regular updates, always felt like you were working in 'our favour' - thanks to the WHOLE team!",
      author: "Teresa Harris",
      title: "Director, Business Development",
      company: "Numaferm",
      logo: "./logos/Numaferm.webp"
    },
    {
      id: 11,
      brief: "You all were great - responsive, knowledgeable and helpful.",
      quote: "You all were great - responsive, knowledgeable and helpful. The whole team was great - honestly - thank you so much.",
      author: "Mathew Mitchell",
      title: "Chief Business Officer",
      company: "Arialys",
      logo: "./logos/Arialys.webp"
    },
    {
      id: 12,
      brief: "The educational animation has a prominent position on our website, and helps inform visitors of how our molecular tests work.",
      quote: "The educational animation has a prominent position on our website, and helps inform visitors of how our molecular tests work. Easy to work with, quick grasp of concepts. They were excellent partners for a technically advanced subject.",
      author: "Jonathan Romanowsky",
      title: "Co-Founder & Chief Business Officer",
      company: "Inflammatix",
      logo: "./logos/Inflammatix.webp"
    },
    {
      id: 13,
      brief: "The 3D video animation created with Biomol Visual has helped to succinctly tell our story.",
      quote: "The 3D video animation created with Biomol Visual has helped to succinctly tell our story. I particularly appreciated the excellent communication with Ben and the clear milestones and deadlines. The relationship with Benjamin after reaching out to him was great. The depth of scientific knowledge, digital media expertise, clear milestones and ease of communication with the Biomol Visual team were all exceptional.",
      author: "Hernan A. Bazan",
      title: "CEO & Co-Founder",
      company: "South Rampart Pharma",
      logo: "./logos/SRP.webp"
    },
    {
      id: 14,
      brief: "Your unique ability to convey a complex scientific paradigm in less than 2 minutes is remarkable.",
      quote: "The video is providing an effective glimpse of the conceptual and complex innovation of our startup company with a clear and effective message. Your unique ability to convey a complex scientific paradigm in less than 2 minutes is remarkable. If someone was on the fence about starting an animation project with Biomol Visual, I would tell them to do it. They make the steps and development of the project easy and enjoyable.",
      author: "Nicolas G. Bazan",
      title: "Founder & CEO",
      company: "CurVirBiotech",
      logo: "./logos/CurVirBiotech.webp"
    },
    {
      id: 15,
      brief: "Great to work with creatives who understand the concepts we're trying to communicate.",
      quote: "Great to work with creatives who understand the concepts we're trying to communicate.",
      author: "Andrea Maranger",
      title: "Business Development Manager",
      company: "Bio-Techne",
      logo: "./logos/Bio-Techne.webp"
    },
    {
      id: 16,
      brief: "The video was very well received and I thank you ALL for your hard work in making this happen in time for ASCO.",
      quote: "The video was very well received and I thank you ALL for your hard work in making this happen in time for ASCO.",
      author: "Liz Macfadyen",
      title: "PR, Marketing, and Communications Manager",
      company: "Inivata",
      logo: "./logos/Inivata.webp"
    },
    {
      id: 17,
      brief: "Biomol Visual were very professional in their approach and brought strong scientific skills and experience in translating messaging to the project.",
      quote: "Biomol Visual were very professional in their approach and brought strong scientific skills and experience in translating messaging to the project. We were very happy with the result and the animations were cost effective in comparison to other providers we approached.",
      author: "Kathy Harrison",
      title: "CEO",
      company: "Dimerix",
      logo: "./logos/Dimerix.webp"
    },
    {
      id: 18,
      brief: "Team was knowledgeable about science/technology. Team has good knowledge about the industry.",
      quote: "Team was knowledgeable about science/technology. Team has good knowledge about the industry. I'm excited to see the end product. Working with the production manager, also based in the UK, has been great for me and I have found her both responsive and appreciative of our needs.",
      author: "Nick Edmunds",
      title: "Chief Technology Officer",
      company: "Mission Therapeutics",
      logo: "./logos/Mission Tx.webp"
    },
    {
      id: 19,
      brief: "We were satisfied with the degree of knowledge. We understand there are nuances with our technology that require specific feedback and guidance.",
      quote: "We were satisfied with the degree of knowledge. We understand there are nuances with our technology that require specific feedback and guidance and we did not necessarily have that in mind going into the project but the team handled it well. We felt that knowledge of the industry was good.",
      author: "Kevin Green",
      title: "VP, Business Development",
      company: "Bioniz",
      logo: "./logos/Bioniz.webp"
    },
    {
      id: 20,
      brief: "Excellent job and good responsiveness to comments.",
      quote: "Excellent job and good responsiveness to comments.",
      author: "William V. Williams",
      title: "President & CEO",
      company: "BriaCell",
      logo: "./logos/BriaCell.webp"
    },
    {
      id: 21,
      brief: "The team was very knowledgeable about the industry and understood our science well.",
      quote: "The team was very knowledgeable about the industry and understood our science well.",
      author: "Charlotte Davis",
      title: "Internal Operations Manager",
      company: "Chimera Bioengineering",
      logo: "./logos/Chimera Bio.webp"
    },
    {
      id: 22,
      brief: "The video helped us in informing investors, employees and other stakeholders about our program.",
      quote: "The video helped us in informing investors, employees and other stakeholders about our program. The team was very professional and understood the science well. Very good company.",
      author: "Anker Lundemose",
      title: "Chief Executive Officer",
      company: "Mission Therapeutics",
      logo: "./logos/Mission Tx.webp"
    },
    {
      id: 23,
      brief: "It was easy to work with the team knowing that they were knowledgeable on scientific topics.",
      quote: "It was easy to work with the team knowing that they were knowledgeable on scientific topics.",
      author: "Ada Kim",
      title: "Marketing Manager",
      company: "Tecan",
      logo: "./logos/Tecan.webp"
    },
    {
      id: 24,
      brief: "With support of our medical team, Biomol Visual was able to sufficiently deliver the intended scientific messages.",
      quote: "With support of our medical team, Biomol Visual was able to sufficiently deliver the intended scientific messages. Thank you for helping bring this idea to life. Ushma, Ben, and Victoria were particularly helpful.",
      author: "Claire Thrasher",
      title: "Associate",
      company: "Unither",
      logo: "./logos/Unither.webp"
    },
    {
      id: 25,
      brief: "Isabel, Serap",
      quote: "Isabel, Serap - You guys did a wonderful job. Also kudos to your team.",
      author: "Deepak Lyar",
      title: "Post-doctoral Scientist",
      company: "Arbele",
      logo: "./logos/Arbele.webp"
    },
    {
      id: 26,
      brief: "Your team has done a great job!",
      quote: "Your team has done a great job! I appreciate it greatly. Keep up good work.",
      author: "Shunqi Yan",
      title: "Vice President, Head of CMC",
      company: "Arthrosi Therapeutics",
      logo: "./logos/Arthrosi.webp"
    }
  ];

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

  const phases = [
    {
      number: '1',
      icon: Lightbulb,
      title: 'Strategy & Storyboard',
      description: 'We start with a deep dive into your science, developing a script and visual storyboard. You approve the complete strategic and narrative plan before anything is built.'
    },
    {
      number: '2',
      icon: Palette,
      title: 'Design & Animatic',
      description: 'Next, we define the visual universe for your project. You approve the final look and feel with Style Frames and the precise timing with an Animatic, ensuring perfect alignment before production begins.'
    },
    {
      number: '3',
      icon: Video,
      title: 'Production & Post-Production',
      description: 'With the blueprint approved, our dedicated team of scientific experts brings the vision to life through 3D modeling, animation, and cinematic post-production.'
    },
    {
      number: '4',
      icon: Package,
      title: 'Final Delivery',
      description: 'You receive the final, high-resolution visualization, ready for your investor meeting, conference presentation, or website launch.'
    },
    {
      number: '5',
      icon: Rocket,
      title: 'Strategic Deployment',
      description: 'Finally, we activate your new asset. The same scientific experts who built your visualization work directly with your team to guide its strategic deployment, maximizing its value long after delivery.'
    }
  ];

  const testimonialsSwiperRef = useRef<SwiperType | null>(null);
  const teamSwiperRef = useRef<SwiperType | null>(null);
  const [isSwiperLoaded, setIsSwiperLoaded] = useState(false);

  useEffect(() => {
    // Dynamically load Swiper when component mounts
    if (!isSwiperLoaded) {
      // Load CSS first if not already loaded
      if (typeof window !== 'undefined') {
        const existingLink = document.querySelector('link[href*="swiper"]');
        if (!existingLink) {
          const link1 = document.createElement('link');
          link1.rel = 'stylesheet';
          link1.href = 'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css';
          document.head.appendChild(link1);
        }
      }

      Promise.all([
        import('swiper/react'),
        import('swiper/modules')
      ]).then((modules) => {
        SwiperComponent = modules[0].Swiper;
        SwiperSlideComponent = modules[0].SwiperSlide;
        NavigationModule = modules[1].Navigation;
        setIsSwiperLoaded(true);
      });
    }
  }, [isSwiperLoaded]);

  if (!isSwiperLoaded) {
    return (
      <section
        className="section-responsive"
        style={{
          background: '#1B0A2E',
          minHeight: '400px'
        }}
      >
        <div className="container-responsive">
          <div className="text-center" style={{ padding: 'var(--space-9)' }}>
            <p style={{ color: 'var(--bmv-text-secondary)' }}>Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  const Swiper = SwiperComponent;
  const SwiperSlide = SwiperSlideComponent;
  const Navigation = NavigationModule;

  return (
    <section
      className="section-responsive"
      style={{
        background: '#1B0A2E'
      }}
    >
      <div className="container-responsive">
        {/* Testimonials Carousel */}
        <div style={{ marginBottom: 'var(--space-11)' }}>
          <div className="text-center" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 className="text-responsive-lg" style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: '500' }}>
              What Our Clients Say
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              loop={false}
              allowTouchMove={true}
              onSwiper={(swiper: SwiperType) => {
                testimonialsSwiperRef.current = swiper;
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div
                    className="testimonial-card w-full"
                    style={{
                      padding: 'var(--space-4)',
                      background: 'var(--bmv-surface)',
                      borderRadius: '12px',
                      border: '1px solid rgba(183, 148, 246, 0.1)',
                      transition: 'all 250ms cubic-bezier(0.2, 0.8, 0.2, 1)',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--bmv-surface-2)';
                      e.currentTarget.style.borderColor = 'rgba(183, 148, 246, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--bmv-surface)';
                      e.currentTarget.style.borderColor = 'rgba(183, 148, 246, 0.1)';
                    }}
                  >
                    <div className="flex flex-col lg:flex-row gap-6 h-full">
                      <div className="flex-1 flex flex-col h-full relative">
                        <div className="flex items-center ml-2" style={{ marginBottom: 'var(--space-3)' }}>
                          <div className="rounded-lg flex items-center justify-center max-w-[200px]">
                            <img
                              src={testimonial.logo}
                              alt={`${testimonial.company} logo`}
                              className="h-[60px] w-auto max-w-full object-contain filter brightness-0 invert opacity-80"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                              }}
                            />
                          </div>
                        </div>

                        <blockquote
                          className="text-responsive-md mt-6 md:mt-0 md:absolute md:top-1/2 md:transform md:left-0 md:-translate-y-1/2"
                          style={{
                            fontFamily: "'Red Hat Display', sans-serif",
                            fontWeight: '400',
                            color: 'var(--bmv-text-heading)',
                            lineHeight: '1.2'
                          }}
                        >
                          &quot;{testimonial.brief}&quot;
                        </blockquote>
                      </div>

                      <div className="md:flex-1 h-full flex flex-col justify-between">
                        <div style={{ marginBottom: 'var(--space-4)' }}>
                          <p
                            style={{
                              fontFamily: "'Red Hat Text', sans-serif",
                              fontSize: '16px',
                              fontWeight: '400',
                              lineHeight: '1.6',
                              color: 'var(--bmv-text)',
                              maxHeight: '280px',
                              overflowY: 'auto',
                              paddingRight: 'var(--space-4)'
                            }}
                          >
                            {testimonial.quote}
                          </p>
                        </div>

                        <div
                          style={{
                            borderTop: '1px solid rgba(183, 148, 246, 0.2)',
                            paddingTop: 'var(--space-4)'
                          }}
                        >
                          <div
                            style={{
                              fontFamily: "'Red Hat Text', sans-serif",
                              fontSize: '16px',
                              fontWeight: '400',
                              color: 'var(--bmv-text-heading)'
                            }}
                          >
                            {testimonial.author}
                          </div>
                          <div
                            style={{
                              fontFamily: "'Red Hat Text', sans-serif",
                              fontSize: '14px',
                              fontWeight: '300',
                              color: 'var(--bmv-text-secondary)',
                            }}
                          >
                            {testimonial.title}
                          </div>
                          <div
                            style={{
                              fontFamily: "'Red Hat Text', sans-serif",
                              fontSize: '14px',
                              fontWeight: '400',
                              color: 'var(--bmv-text-secondary)',
                            }}
                          >
                            {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              className="swiper-button-prev-testimonials absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 flex items-center justify-center transition-all duration-300"
              onClick={() => {
                if (testimonialsSwiperRef.current) {
                  testimonialsSwiperRef.current.slidePrev();
                }
              }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={56} className="text-white hover:text-purple-400 transition-colors duration-300" />
            </button>

            <button
              className="swiper-button-next-testimonials absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 flex items-center justify-center transition-all duration-300"
              onClick={() => {
                if (testimonialsSwiperRef.current) {
                  testimonialsSwiperRef.current.slideNext();
                }
              }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={56} className="text-white hover:text-purple-400 transition-colors duration-300" />
            </button>
          </div>
        </div>

        {/* Team Carousel */}
        <div style={{ marginBottom: 'var(--space-11)' }}>
          <div className="text-center" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 className="text-responsive-lg" style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: '500' }}>
              Scientific Leadership Team
            </h2>
            <p
              className="text-responsive-sm"
              style={{
                fontFamily: "'Red Hat Text', sans-serif",
                fontWeight: '400',
                color: 'var(--bmv-text-secondary)',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}
            >
              Meet the dedicated senior experts who will guide your project from scientific discovery to final delivery.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              loop={false}
              allowTouchMove={true}
              onSwiper={(swiper: SwiperType) => {
                teamSwiperRef.current = swiper;
              }}
            >
              {team.map((member, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="phase-card"
                    style={{
                      padding: 'var(--space-5)',
                      background: 'var(--bmv-surface)',
                      borderRadius: '12px',
                      border: '1px solid rgba(183, 148, 246, 0.1)',
                      transition: 'all 250ms cubic-bezier(0.2, 0.8, 0.2, 1)',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--bmv-surface-2)';
                      e.currentTarget.style.borderColor = 'rgba(183, 148, 246, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--bmv-surface)';
                      e.currentTarget.style.borderColor = 'rgba(183, 148, 246, 0.1)';
                    }}
                  >
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="flex items-center justify-center">
                          <div
                            style={{
                              width: '100%',
                              maxWidth: '300px',
                              aspectRatio: '1',
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

                        <div className="flex flex-col gap-4">
                          <div>
                            <h3
                              className="text-responsive-md"
                              style={{
                                fontFamily: "'Red Hat Display', sans-serif",
                                fontWeight: '500',
                                color: 'var(--bmv-text-heading)',
                                marginBottom: 'var(--space-2)'
                              }}
                            >
                              {member.name}
                            </h3>
                            <p
                              className="text-responsive-sm"
                              style={{
                                fontFamily: "'Red Hat Display', sans-serif",
                                color: 'var(--bmv-orange)',
                                fontWeight: '400'
                              }}
                            >
                              {member.title}
                            </p>
                          </div>
                          <p
                            style={{
                              fontFamily: "'Red Hat Text', sans-serif",
                              fontSize: '16px',
                              fontWeight: '400',
                              color: 'var(--bmv-text)',
                              lineHeight: '1.6'
                            }}
                          >
                            {member.bio}
                          </p>
                        </div>

                        <div className="flex flex-col gap-4">
                          <div>
                            <p
                              style={{
                                fontFamily: "'Red Hat Text', sans-serif",
                                fontSize: '14px',
                                fontWeight: '500',
                                color: 'var(--bmv-text-secondary)',
                                marginBottom: 'var(--space-1)'
                              }}
                            >
                              Credentials
                            </p>
                            <p
                              style={{
                                fontFamily: "'Red Hat Text', sans-serif",
                                fontSize: '16px',
                                fontWeight: '400',
                                color: 'var(--bmv-text)',
                                lineHeight: '1.6'
                              }}
                            >
                              {member.credentials}
                            </p>
                          </div>
                          <div>
                            <p
                              style={{
                                fontFamily: "'Red Hat Text', sans-serif",
                                fontSize: '14px',
                                fontWeight: '500',
                                color: 'var(--bmv-text-secondary)',
                                marginBottom: 'var(--space-1)'
                              }}
                            >
                              Expertise
                            </p>
                            <p
                              style={{
                                fontFamily: "'Red Hat Text', sans-serif",
                                fontSize: '16px',
                                fontWeight: '400',
                                color: 'var(--bmv-text)',
                                lineHeight: '1.6'
                              }}
                            >
                              {member.expertise}
                            </p>
                          </div>
                          <div>
                            <p
                              style={{
                                fontFamily: "'Red Hat Text', sans-serif",
                                fontSize: '14px',
                                fontWeight: '500',
                                color: 'var(--bmv-text-secondary)',
                                marginBottom: 'var(--space-1)'
                              }}
                            >
                              Based in
                            </p>
                            <p
                              style={{
                                fontFamily: "'Red Hat Text', sans-serif",
                                fontSize: '16px',
                                fontWeight: '400',
                                color: 'var(--bmv-text)',
                                lineHeight: '1.6'
                              }}
                            >
                              {member.location}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              className="swiper-button-prev-team absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 flex items-center justify-center transition-all duration-300"
              onClick={() => {
                if (teamSwiperRef.current) {
                  teamSwiperRef.current.slidePrev();
                }
              }}
              aria-label="Previous team member"
            >
              <ChevronLeft size={56} className="text-white hover:text-purple-400 transition-colors duration-300" />
            </button>

            <button
              className="swiper-button-next-team absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 flex items-center justify-center transition-all duration-300"
              onClick={() => {
                if (teamSwiperRef.current) {
                  teamSwiperRef.current.slideNext();
                }
              }}
              aria-label="Next team member"
            >
              <ChevronRight size={56} className="text-white hover:text-purple-400 transition-colors duration-300" />
            </button>
          </div>
        </div>

        {/* 5-Phase System */}
        <div>
          <h2
            className="text-center text-responsive-lg"
            style={{
              fontFamily: "'Red Hat Display', sans-serif",
              fontWeight: '500',
              marginBottom: 'var(--space-8)'
            }}
          >
            A Simple 5-Phase System
          </h2>

          <div className="grid-responsive-5" style={{ marginBottom: 'var(--space-7)' }}>
            {phases.map((phase, index) => (
              <div
                key={index}
                className="phase-card"
                style={{
                  padding: 'var(--space-4)',
                  background: 'var(--bmv-surface)',
                  borderRadius: '12px',
                  border: '1px solid rgba(183, 148, 246, 0.1)',
                  transition: 'all 250ms cubic-bezier(0.2, 0.8, 0.2, 1)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--bmv-surface-2)';
                  e.currentTarget.style.borderColor = 'rgba(183, 148, 246, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--bmv-surface)';
                  e.currentTarget.style.borderColor = 'rgba(183, 148, 246, 0.1)';
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: `linear-gradient(135deg, rgba(155, 89, 208, ${0.15 + index * 0.05}), rgba(255, 107, 53, ${0.1 + index * 0.05}))`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 'var(--space-4)',
                      position: 'relative'
                    }}
                  >
                    <phase.icon size={24} style={{ color: 'var(--bmv-purple)' }} />
                    <div
                      style={{
                        position: 'absolute',
                        top: '-4px',
                        right: '-4px',
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--bmv-purple), var(--bmv-orange))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '11px',
                        fontWeight: '500',
                        color: 'white'
                      }}
                    >
                      {phase.number}
                    </div>
                  </div>
                  <h4
                    className="text-responsive-sm"
                    style={{
                      fontFamily: "'Red Hat Display', sans-serif",
                      fontWeight: '400',
                      marginBottom: 'var(--space-3)',
                      color: 'var(--bmv-text-heading)'
                    }}
                  >
                    {phase.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "'Red Hat Text', sans-serif",
                      fontSize: '16px',
                      fontWeight: '400',
                      color: 'var(--bmv-text-secondary)',
                      lineHeight: '1.6'
                    }}
                  >
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p
            className="text-center"
            style={{
              fontFamily: "'Red Hat Text', sans-serif",
              fontSize: '16px',
              fontWeight: '400',
              color: 'var(--bmv-text)',
              lineHeight: '1.6'
            }}
          >
            A process designed for total clarity, giving you a transparent, real-time view of your project&apos;s progress.
          </p>
        </div>
      </div>
    </section>
  );
}
