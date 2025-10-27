"use client"
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsSection() {
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
      logo: "./logos/Biolegend.webp"
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
      logo: "./logos/Ivy Brain Tumor Center.webp"
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

  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section 
      className="section-responsive"
      style={{
        background: '#1B0A2E'
      }}
    >
      <div className="container-responsive" style={{maxWidth: "1152px!important"}}>
        <div className="text-center mb-16">
          <h2 className="text-responsive-lg text-gray-200 mb-6" style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: '500' }}>What Our Clients Say</h2>
        </div>

        {/* Swiper Testimonial Slider */}
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
              prevEl: '.swiper-button-prev-testimonials',
              nextEl: '.swiper-button-next-testimonials',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-testimonials',
              bulletClass: 'swiper-pagination-bullet-testimonials',
              bulletActiveClass: 'swiper-pagination-bullet-active-testimonials',
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            style={{
              '--swiper-navigation-color': 'white',
              '--swiper-pagination-color': '#ED8936',
            } as React.CSSProperties}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <div className="w-full px-4 md:px-12">
                  <div className="bg-gray-850/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-white transition-all duration-500 min-h-[400px] md:h-[500px] flex flex-col">
                    <div className="flex flex-col lg:flex-row gap-6 md:gap-8 flex-1">
                      {/* Left Side - Company Info & Quote */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          {/* Company Logo and Info */}
                          <div className="flex items-center mb-6">
                            <div className="backdrop-blur-sm rounded-lg flex items-center justify-center max-w-[240px] h-[60px] md:h-[80px] flex-shrink-0 mr-4">
                              <img
                                src={testimonial.logo}
                                alt={`${testimonial.company} logo`}
                                className="h-[32px] md:h-[40px] w-auto max-w-full object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                }}
                              />
                            </div>
                          </div>

                          <blockquote className="text-responsive-md text-gray-200" style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: '500' }}>
                            &quot;{testimonial.brief}&quot;
                          </blockquote>
                        </div>
                      </div>

                      {/* Right Side - Author Info & CTA */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          {/* Quotation Mark Icon */}
                          <div className="flex justify-end flex-col gap-2 mb-6">
                            <svg className="w-16 h-16 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                            </svg>
                            <div style={{ fontFamily: "'Red Hat Text', sans-serif", fontSize: '16px', fontWeight: '400', lineHeight: '1.6' }} className="text-gray-300 text-left overflow-y-auto h-[280px]">{testimonial.quote}</div>
                          </div>
                        </div>

                        {/* Author Info */}
                        <div className="border-t border-gray-600 pt-6">
                          <div style={{ fontFamily: "'Red Hat Text', sans-serif", fontSize: '16px', fontWeight: '400' }} className="text-gray-200">
                            {testimonial.author}
                          </div>
                          <div style={{ fontFamily: "'Red Hat Text', sans-serif", fontSize: '14px', fontWeight: '300' }} className="text-gray-400 mt-1">
                            {testimonial.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            className="swiper-button-prev-testimonials absolute md:left-0 left-6 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-gray-850/90 hover:bg-purple-500/20 border border-white rounded-full flex items-center justify-center transition-all duration-500 backdrop-blur-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            className="swiper-button-next-testimonials absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-gray-850/90 hover:bg-purple-500/20 border border-white rounded-full flex items-center justify-center transition-all duration-500 backdrop-blur-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          {/* Custom Pagination */}
          <div className="swiper-pagination-testimonials justify-center mt-8 space-x-2 hidden md:flex"></div>
        </div>
      </div>
    </section>
  );
}
