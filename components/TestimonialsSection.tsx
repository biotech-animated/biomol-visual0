"use client"
import { useState } from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      brief: "Working with Biotech Animated has been a great advantage for Abcore.",
      quote: "Working with Biotech Animated has been a great advantage for Abcore. It has allowed us to work with marketing experts who are interested in the success and growth of our company, without having to hire additional employees. Their work has increased our lead generation considerably, and has allowed us to spend more of our marketing budget on marketing, not experimenting.",
      author: "David Barraclough",
      title: "CEO, Abcore",
      company: "Abcore",
      logo: "/logos/Abcore.webp"
    },
    {
      id: 2,
      brief: "The final product was truly excellent and it was a key element in helping us to win a major competition.",
      quote: "We needed a video to explain and demonstrate some complex technology that we have developed in the DNA field, and we approached Biotech Animated for help. From the beginning of the process they were very engaged, understanding the principles of the technology and suggesting innovative ways to illustrate the key concepts. The final product was truly excellent and it was a key element in helping us to win a major competition.",
      author: "Tom Brown",
      title: "Professor of Nucleic Acid Chemistry, University of Oxford",
      company: "University of Oxford",
      logo: "/logos/NIH.webp"
    },
    {
      id: 3,
      brief: "The Biotech Animated team quickly understood what we wanted to achieve and delivered a great product on time and on budget.",
      quote: "This was our first video, and we wanted a tool to effectively convey a complex story. Biotech animated 'got it' and guided us through a dynamic development process to produce an excellent production that really differentiates us and our technology. The Biotech Animated team quickly understood what we wanted to achieve and delivered a great product on time and on budget.",
      author: "James Campbell",
      title: "CEO, Patrys",
      company: "Patrys",
      logo: "/logos/Patrys.webp"
    },
    {
      id: 4,
      brief: "I would highly recommend working with Biotech Animated because I had a very positive experience from start to finish.",
      quote: "Biotech Animated were professional and efficient in delivering very high quality videos. My favorite elements are the 3D labeled antibodies! Our whole team loved the videos, they have enabled us to refresh our branding and have helped our audiences engage with us on YouTube further. I would highly recommend working with Biotech Animated because I had a very positive experience of working with Biotech Animated from start to finish.",
      author: "Klaudyna Johnstone",
      title: "Marketing Manager, Innova Biosciences",
      company: "Innova Biosciences",
      logo: "/logos/Innova Biosciences.webp"
    },
    {
      id: 5,
      brief: "Our finished product from Biotech Animated helps us to quickly explain our technology in way that fits a broad audience.",
      quote: "Biotech Animated has a great team of marketing experts as well as scientists that understand our processes and are able to explain them in a clear, distilled message. Our finished product from Biotech Animated helps us to quickly explain our technology in way that fits a broad audience. The results look great and have become part of our constant outreach to both collaborators as well as investors.",
      author: "Eddie Sullivan",
      title: "CEO, SAb Biotherapeutics",
      company: "SAb Biotherapeutics",
      logo: "/logos/SAb Bio.webp"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section 
      className="py-20"
      style={{
        background: 'var(--bmv-bg-orange-darker)'
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-h2 font-display text-gray-200 mb-6">What Our Clients Say</h2>
        </div>

        {/* Single Testimonial Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-gray-850/90 hover:bg-purple-500/20 border border-purple-500/30 hover:border-orange-500/50 rounded-full flex items-center justify-center transition-all duration-500 backdrop-blur-sm"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-gray-300 hover:text-orange-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-gray-850/90 hover:bg-purple-500/20 border border-purple-500/30 hover:border-orange-500/50 rounded-full flex items-center justify-center transition-all duration-500 backdrop-blur-sm"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-gray-300 hover:text-orange-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Horizontal Testimonial Slider */}
          <div className="mx-16 overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-850/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-purple-500/20 hover:border-orange-500/30 transition-all duration-500 h-[500px] flex flex-col">
                    <div className="flex flex-col md:flex-row gap-8 flex-1">
                      {/* Left Side - Company Info & Quote */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          {/* Company Logo and Info */}
                          <div className="flex items-center mb-6">
                            <div className="backdrop-blur-sm rounded-lg flex items-center justify-center max-w-[140px] h-[39px] md:h-[52.83px] flex-shrink-0 mr-4">
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
                          
                          <blockquote className="text-2xl md:text-3xl font-bold text-gray-200 leading-tight">
                            "{testimonial.brief}"
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
                            <p className="text-body text-gray-300 text-left font-text">{testimonial.quote}</p>
                          </div>
                        </div>

                        {/* Author Info */}
                        <div className="border-t border-gray-600 pt-6">
                          <div className="text-gray-200 font-semibold text-lg">
                            {testimonial.author}
                          </div>
                          <div className="text-gray-400 text-sm mt-1">
                            {testimonial.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${index === currentSlide
                  ? 'bg-orange-500 shadow-lg shadow-orange-500/50'
                  : 'bg-gray-600 hover:bg-purple-500/50'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
