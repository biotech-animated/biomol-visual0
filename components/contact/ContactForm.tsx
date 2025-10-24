import { X, Check, ArrowRight } from 'lucide-react';
import { useState, FormEvent, useEffect } from 'react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    interest: '',
    hearAbout: '',
    message: ''
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
        className={`fixed right-0 top-0 h-full w-full md:w-[600px] bg-[#1F1F1F] border-l border-[#333] z-50 overflow-y-auto transition-transform duration-300 ease-out transform ${
          isAnimating ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2
              className="text-white"
              style={{
                fontFamily: "'Red Hat Display', sans-serif",
                fontSize: '28px',
                fontWeight: 500
              }}
            >
              Contact Us
            </h2>
            <button
              onClick={onClose}
              className="text-[#888] hover:text-white transition-colors"
              aria-label="Close form"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                className="block text-[#CCCCCC] mb-2"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '14px'
                }}
              >
                First Name *
              </label>
              <input
                type="text"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full bg-[#1A1A1A] border border-[#333] rounded-md px-4 py-3 text-white focus:border-[#b12176] focus:outline-none focus:ring-2 focus:ring-[#b12176]/20 transition-colors duration-200"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '16px'
                }}
              />
            </div>

            <div>
              <label
                className="block text-[#CCCCCC] mb-2"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '14px'
                }}
              >
                Last Name *
              </label>
              <input
                type="text"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full bg-[#1A1A1A] border border-[#333] rounded-md px-4 py-3 text-white focus:border-[#b12176] focus:outline-none focus:ring-2 focus:ring-[#b12176]/20 transition-colors duration-200"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '16px'
                }}
              />
            </div>

            <div>
              <label
                className="block text-[#CCCCCC] mb-2"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '14px'
                }}
              >
                Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#1A1A1A] border border-[#333] rounded-md px-4 py-3 text-white focus:border-[#b12176] focus:outline-none focus:ring-2 focus:ring-[#b12176]/20 transition-colors duration-200"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '16px'
                }}
              />
            </div>

            <div>
              <label
                className="block text-[#CCCCCC] mb-2"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '14px'
                }}
              >
                Telephone Number
              </label>
              <input
                type="tel"
                value={formData.telephone}
                onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                className="w-full bg-[#1A1A1A] border border-[#333] rounded-md px-4 py-3 text-white focus:border-[#b12176] focus:outline-none focus:ring-2 focus:ring-[#b12176]/20 transition-colors duration-200"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '16px'
                }}
              />
            </div>

            <div>
              <label
                className="block text-[#CCCCCC] mb-2"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '14px'
                }}
              >
                I'm interested in *
              </label>
              <select
                required
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                className="w-full bg-[#1A1A1A] border border-[#333] rounded-md px-4 py-3 text-white focus:border-[#b12176] focus:outline-none focus:ring-2 focus:ring-[#b12176]/20 transition-colors duration-200"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '16px'
                }}
              >
                <option value="">Select an option</option>
                <option value="full-custom">Full Custom Project</option>
                <option value="slab-precision">SLAB: Precision Loop</option>
                <option value="slab-signature">SLAB: Signature Loop</option>
                <option value="slab-instant">SLAB: Instant Loop</option>
                <option value="general">General Inquiry</option>
                <option value="partnership">Partnership Opportunity</option>
              </select>
            </div>

            <div>
              <label
                className="block text-[#CCCCCC] mb-2"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '14px'
                }}
              >
                How did you hear about us?
              </label>
              <select
                value={formData.hearAbout}
                onChange={(e) => setFormData({ ...formData, hearAbout: e.target.value })}
                className="w-full bg-[#1A1A1A] border border-[#333] rounded-md px-4 py-3 text-white focus:border-[#b12176] focus:outline-none focus:ring-2 focus:ring-[#b12176]/20 transition-colors duration-200"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '16px'
                }}
              >
                <option value="">Select an option</option>
                <option value="google">Google Search</option>
                <option value="linkedin">LinkedIn</option>
                <option value="referral">Referral</option>
                <option value="conference">Conference</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                className="block text-[#CCCCCC] mb-2"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '14px'
                }}
              >
                Tell us about your project
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full bg-[#1A1A1A] border border-[#333] rounded-md px-4 py-3 text-white focus:border-[#b12176] focus:outline-none transition-colors resize-none"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '16px'
                }}
              />
            </div>

            <div className="pt-4">
              <p
                className="text-[#888] mb-4 flex items-start gap-2"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '13px'
                }}
              >
                <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Trusted by 70+ biopharma companies</span>
              </p>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-4 rounded-[50px] text-white cursor-pointer border-none transition-all hover:scale-[1.02]"
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
                <span className="flex-1 text-center">Submit</span>
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
                className="text-[#888] mt-4 text-center"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '12px'
                }}
              >
                All inquiries are confidential and your information is secured with 256-bit encryption.
              </p>
            </div>
          </form>
        </div>
      </div>

    </>
  );
}
