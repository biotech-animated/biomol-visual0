'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { X, Play, ExternalLink } from 'lucide-react';

export default function CaseStudiesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const caseStudies = [
    {
      id: 1,
      title: 'Molecular Mechanism of Action',
      client: 'Biotech Startup',
      description: 'Complex protein-protein interaction visualization for Series A funding',
      image: '/SLAB_Chimera_8k_frame_01_v0 - Copy.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=UvMDknsBp9E'
    },
    {
      id: 2,
      title: 'Cellular Pathway Visualization',
      client: 'Pharmaceutical Company',
      description: 'Drug mechanism visualization for FDA presentation',
      image: '/SLAB_Recce_ATP_8k_v01.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=UvMDknsBp9E'
    },
    {
      id: 3,
      title: 'Platform Technology Demo',
      client: 'Research Institute',
      description: 'Scientific platform demonstration for investor meetings',
      image: '/Barrier_Red_Version1.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=UvMDknsBp9E'
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bmv-bg)' }}>
      <Navigation />
      <div className="min-h-screen bg-[#101010] pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white" style={{ fontFamily: "'Red Hat Display', sans-serif" }}>
              Case Studies
              <span className="block mt-2 bg-gradient-to-r from-[#007bff] to-[#8A2BE2] bg-clip-text text-transparent">
                & Portfolio
              </span>
            </h1>
            <p className="text-xl text-[#F0F0F0]/70 max-w-3xl mx-auto font-light" style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
              Explore our recent work and see how we've helped biotech companies communicate their science
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="group bg-gradient-to-br from-[#1a1a1a] to-[#101010] rounded-2xl overflow-hidden border border-[#007bff]/20 hover:border-[#007bff]/50 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="w-16 h-16 bg-[#007bff] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <Play size={24} className="text-white ml-1" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Red Hat Display', sans-serif" }}>{study.title}</h3>
                  <p className="text-[#007bff] font-medium mb-3" style={{ fontFamily: "'Red Hat Text', sans-serif" }}>{study.client}</p>
                  <p className="text-[#F0F0F0]/70 text-sm leading-relaxed" style={{ fontFamily: "'Red Hat Text', sans-serif" }}>{study.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#007bff]/10 to-[#8A2BE2]/10 rounded-2xl p-12 border border-[#007bff]/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Red Hat Display', sans-serif" }}>Ready to See Your Science in Action?</h2>
            <p className="text-[#F0F0F0]/70 mb-8 max-w-2xl mx-auto" style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
              Let's discuss how we can bring your molecular and cellular mechanisms to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-gradient-to-r from-[#007bff] to-[#007bff]/90 text-white rounded-lg hover:shadow-lg hover:shadow-[#007bff]/50 transition-all duration-300 font-medium"
                style={{ fontFamily: "'Red Hat Display', sans-serif" }}
              >
                View Full Portfolio
              </button>
              <a
                href="/contact"
                className="px-8 py-4 bg-transparent border-2 border-[#007bff] text-white rounded-lg hover:bg-[#007bff]/10 transition-all duration-300 font-medium flex items-center justify-center gap-2"
                style={{ fontFamily: "'Red Hat Display', sans-serif" }}
              >
                Start Your Project
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl mx-4 bg-[#1a1a1a] rounded-2xl overflow-hidden">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              <X size={20} />
            </button>
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/UvMDknsBp9E?autoplay=1"
                title="Case Study Video"
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
