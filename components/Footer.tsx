'use client';

import { useState } from 'react';
import { Linkedin, Youtube, Instagram } from 'lucide-react';
import JoinUsModal from './JoinUsModal';

export default function Footer() {
  const [isJoinUsModalOpen, setIsJoinUsModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1B0A2E] border-t border-[#9B59D0]/20 py-16">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1.5fr_1.5fr_1fr] gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <button
              onClick={scrollToTop}
              className="font-medium text-xl mb-4 tracking-tight transition-all duration-200 hover:opacity-80"
              style={{
                fontFamily: "'Red Hat Display', sans-serif",
                fontWeight: 500,
                background: 'linear-gradient(90deg, #9B59D0 0%, #ED8936 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              BIOMOL VISUAL
            </button>
            <p className="text-sm text-[#A0AEC0] leading-relaxed mb-6" style={{ fontFamily: "'Red Hat Text', sans-serif", fontWeight: 300 }}>
              Molecular and Cellular MOA & MOD Visualization Specialists
            </p>
            <p className="text-sm text-[#718096] leading-relaxed mb-6" style={{ fontFamily: "'Red Hat Text', sans-serif", fontWeight: 300 }}>
              We create scientifically precise molecular and cellular mechanism of action visualizations for the world's most innovative biotech companies. Our dedicated team of scientific experts transforms complex science—from biotherapeutic mechanisms to platform technologies—into clear stories that secure funding and drive partnerships.
            </p>
            <p className="text-sm text-[#718096] leading-relaxed" style={{ fontFamily: "'Red Hat Text', sans-serif", fontWeight: 300 }}>
              All web design and content created exclusively by Biomol Visual All Rights Reserved.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#E2E8F0] font-medium text-sm mb-4 uppercase tracking-wider" style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 500 }}>
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#moa" className="text-sm text-[#A0AEC0] hover:text-[#9B59D0] transition-colors duration-200" style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
                  Molecular & Cellular MOA Visualization
                </a>
              </li>
              <li>
                <a href="#mod" className="text-sm text-[#A0AEC0] hover:text-[#9B59D0] transition-colors duration-200" style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
                  Mechanism of Disease (MOD) Visualization
                </a>
              </li>
              <li>
                <a href="#biotherapeutic" className="text-sm text-[#A0AEC0] hover:text-[#9B59D0] transition-colors duration-200" style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
                  Biotherapeutic Mechanism Visualization
                </a>
              </li>
              <li>
                <a href="#platform" className="text-sm text-[#A0AEC0] hover:text-[#9B59D0] transition-colors duration-200" style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
                  Platform Technology Visualization
                </a>
              </li>
              <li>
                <a href="#storytelling" className="text-sm text-[#A0AEC0] hover:text-[#9B59D0] transition-colors duration-200" style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
                  Scientific Storytelling
                </a>
              </li>
            </ul>
          </div>

          {/* Applications */}
          <div>
            <h3 className="text-[#E2E8F0] font-medium text-sm mb-4 uppercase tracking-wider" style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 500 }}>
              Applications
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#fundraising" className="text-sm text-[#A0AEC0] hover:text-[#9B59D0] transition-colors duration-200" style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
                  Series A/B/C Fundraising
                </a>
              </li>
              <li>
                <a href="#investor" className="text-sm text-[#A0AEC0] hover:text-[#9B59D0] transition-colors duration-200" style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
                  Investor Communications
                </a>
              </li>
              <li>
                <a href="#bd" className="text-sm text-[#A0AEC0] hover:text-[#9B59D0] transition-colors duration-200" style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
                  BD Partnerships
                </a>
              </li>
              <li>
                <a href="#fda" className="text-sm text-[#A0AEC0] hover:text-[#9B59D0] transition-colors duration-200" style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
                  FDA Presentations
                </a>
              </li>
              <li>
                <a href="#conferences" className="text-sm text-[#A0AEC0] hover:text-[#9B59D0] transition-colors duration-200" style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
                  Conference Launches
                </a>
              </li>
              <li>
                <a href="#sales" className="text-sm text-[#A0AEC0] hover:text-[#9B59D0] transition-colors duration-200" style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
                  Sales Enablement
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[#E2E8F0] font-medium text-sm mb-4 uppercase tracking-wider" style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 500 }}>
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#terms" className="text-sm text-[#A0AEC0] hover:text-[#9B59D0] transition-colors duration-200" style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-sm text-[#A0AEC0] hover:text-[#9B59D0] transition-colors duration-200" style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <button
                  onClick={() => setIsJoinUsModalOpen(true)}
                  className="text-sm text-[#A0AEC0] hover:text-[#9B59D0] transition-colors duration-200"
                  style={{
                    fontFamily: "'Red Hat Text', sans-serif",
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  Join Us
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#9B59D0]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-[#718096]" style={{ fontFamily: "'Red Hat Text', sans-serif", fontWeight: 300 }}>
              © 2025 Biomol Visual | Clarity in Every MOA
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/biotechanimated"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#ED8936]/20 border border-[#ED8936]/40 flex items-center justify-center transition-all duration-300 hover:bg-[#ED8936] hover:border-[#ED8936] hover:shadow-[0_0_20px_rgba(237,137,54,0.5)] group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-[#ED8936] transition-colors duration-300 group-hover:text-white" />
              </a>

              <a
                href="https://twitter.com/biotechanimated"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#ED8936]/20 border border-[#ED8936]/40 flex items-center justify-center transition-all duration-300 hover:bg-[#ED8936] hover:border-[#ED8936] hover:shadow-[0_0_20px_rgba(237,137,54,0.5)] group"
                aria-label="X"
              >
                <svg className="w-5 h-5 text-[#ED8936] transition-colors duration-300 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              <a
                href="https://www.youtube.com/@BiotechAnimated"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#ED8936]/20 border border-[#ED8936]/40 flex items-center justify-center transition-all duration-300 hover:bg-[#ED8936] hover:border-[#ED8936] hover:shadow-[0_0_20px_rgba(237,137,54,0.5)] group"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-[#ED8936] transition-colors duration-300 group-hover:text-white" />
              </a>

              <a
                href="https://www.instagram.com/biotechanimated/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#ED8936]/20 border border-[#ED8936]/40 flex items-center justify-center transition-all duration-300 hover:bg-[#ED8936] hover:border-[#ED8936] hover:shadow-[0_0_20px_rgba(237,137,54,0.5)] group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-[#ED8936] transition-colors duration-300 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <JoinUsModal isOpen={isJoinUsModalOpen} onClose={() => setIsJoinUsModalOpen(false)} />
    </footer>
  );
}
