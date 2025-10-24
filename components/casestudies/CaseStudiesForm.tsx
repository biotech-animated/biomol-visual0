import { X, ArrowRight } from 'lucide-react';
import { useState, FormEvent, useEffect } from 'react';

interface CaseStudiesFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseStudiesForm({ isOpen, onClose }: CaseStudiesFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    therapeuticArea: '',
    projectDescription: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Small delay to ensure DOM is ready before starting animation
      const timer = setTimeout(() => setIsAnimating(true), 10);
      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  if (!isVisible) return null;

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ease-out ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed right-0 top-0 h-full w-full md:w-[600px] bg-[#2A2A2A] border-l border-[#333] z-50 overflow-y-auto transition-transform duration-300 ease-out transform ${
          isAnimating ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2
              className="text-white"
              style={{
                fontFamily: "'Red Hat Display', sans-serif",
                fontSize: '32px',
                fontWeight: 500
              }}
            >
              Request Access
            </h2>
            <button
              onClick={onClose}
              className="text-[#888] hover:text-white transition-colors"
              aria-label="Close form"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <p
            className="text-[#f5f5f5] mb-8"
            style={{
              fontFamily: "'Red Hat Text', sans-serif",
              fontSize: '16px',
              lineHeight: '1.7'
            }}
          >
            We have a library of confidential case studies in the therapeutic areas listed below. To ensure we send you the most relevant example, please select the field that is closest to your work.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                className="block text-[#f5f5f5] mb-2"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '14px',
                  fontWeight: 500
                }}
              >
                Full Name <span style={{ color: '#ed6c46' }}>*</span>
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full bg-[#0A0A0A] border border-white/15 rounded-md px-4 py-3 text-white focus:border-[#b12176] focus:outline-none focus:ring-2 focus:ring-[#b12176]/20 transition-colors duration-200"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '16px'
                }}
              />
            </div>

            <div>
              <label
                className="block text-[#f5f5f5] mb-2"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '14px',
                  fontWeight: 500
                }}
              >
                Company <span style={{ color: '#ed6c46' }}>*</span>
              </label>
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-[#0A0A0A] border border-white/15 rounded-md px-4 py-3 text-white focus:border-[#b12176] focus:outline-none focus:ring-2 focus:ring-[#b12176]/20 transition-colors duration-200"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '16px'
                }}
              />
            </div>

            <div>
              <label
                className="block text-[#f5f5f5] mb-2"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '14px',
                  fontWeight: 500
                }}
              >
                Work Email <span style={{ color: '#ed6c46' }}>*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#0A0A0A] border border-white/15 rounded-md px-4 py-3 text-white focus:border-[#b12176] focus:outline-none focus:ring-2 focus:ring-[#b12176]/20 transition-colors duration-200"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '16px'
                }}
              />
            </div>

            <div>
              <label
                className="block text-[#f5f5f5] mb-2"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '14px',
                  fontWeight: 500
                }}
              >
                Select Your Closest Therapeutic Area <span style={{ color: '#ed6c46' }}>*</span>
              </label>
              <select
                required
                value={formData.therapeuticArea}
                onChange={(e) => setFormData({ ...formData, therapeuticArea: e.target.value })}
                className="w-full bg-[#0A0A0A] border border-white/20 rounded-md px-4 py-3 text-white focus:border-[#b12176] focus:outline-none focus:ring-2 focus:ring-[#b12176]/20 transition-colors duration-200 appearance-none"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '16px',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23b12176' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 16px center',
                  backgroundSize: '12px'
                }}
              >
                <option value="">Select an option</option>
                <option value="cell-gene-therapy">Cell & Gene Therapy</option>
                <option value="immunology">Immunology</option>
                <option value="neurology">Neurology</option>
                <option value="oncology">Oncology</option>
                <option value="platform-technology">Platform Technology</option>
                <option value="rare-diseases">Rare Diseases</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                className="block text-[#f5f5f5] mb-2"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '14px',
                  fontWeight: 500
                }}
              >
                A brief, confidential description of your project (optional)
              </label>
              <textarea
                value={formData.projectDescription}
                onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                rows={5}
                className="w-full bg-[#0A0A0A] border border-white/20 rounded-md px-4 py-3 text-white focus:border-[#b12176] focus:outline-none focus:ring-2 focus:ring-[#b12176]/20 transition-colors duration-200 resize-vertical"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '16px',
                  minHeight: '100px'
                }}
              />
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-4 rounded-[50px] text-white tracking-wider cursor-pointer border-none transition-all hover:scale-[1.02]"
                style={{
                  padding: '8px 8px 8px 24px',
                  background: 'rgba(155, 89, 208, 0.65)',
                  fontFamily: "'Red Hat Display', sans-serif",
                  fontSize: '16px',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
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
                <span className="flex-1 text-center">Send Me Relevant Case Study</span>
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

              <p
                className="text-[#999999] mt-5 text-center"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '13px',
                  lineHeight: '1.6'
                }}
              >
                By submitting, you agree to keep all provided materials strictly confidential. Our team will be in touch shortly.
              </p>
            </div>
          </form>
        </div>
      </div>

    </>
  );
}
