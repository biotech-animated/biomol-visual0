import { X, ArrowRight, ChevronDown } from 'lucide-react';
import { useState, FormEvent, useEffect } from 'react';
import RecaptchaV3, { useRecaptchaV3 } from '@/components/ui/RecaptchaV3';

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
  const [isTherapeuticAreaDropdownOpen, setIsTherapeuticAreaDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  // Use reCAPTCHA v3 hook
  const { token: recaptchaToken, error: recaptchaError, generateToken, clearToken, clearError } = useRecaptchaV3('case_study_request');

  const therapeuticAreaOptions = [
    { value: '', label: 'Select an option' },
    { value: 'cell-gene-therapy', label: 'Cell & Gene Therapy' },
    { value: 'immunology', label: 'Immunology' },
    { value: 'neurology', label: 'Neurology' },
    { value: 'oncology', label: 'Oncology' },
    { value: 'platform-technology', label: 'Platform Technology' },
    { value: 'rare-diseases', label: 'Rare Diseases' },
    { value: 'other', label: 'Other' }
  ];

  const getSelectedTherapeuticAreaLabel = () => {
    const selected = therapeuticAreaOptions.find(option => option.value === formData.therapeuticArea);
    return selected ? selected.label : 'Select an option';
  };

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      
      // Store current scroll position
      const scrollY = window.scrollY;
      
      // Apply scrollbar-gutter to prevent layout shift
      document.documentElement.style.scrollbarGutter = 'stable';
      
      // Apply styles to prevent scrolling
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      // Use requestAnimationFrame to ensure smooth animation on reopen
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsAnimating(true));
      });
      
      return () => {
        // Remove fixed positioning
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        document.documentElement.style.scrollbarGutter = '';
        
        // Restore scroll position instantly without animation
        window.scrollTo({ top: scrollY, behavior: 'instant' });
      };
    } else {
      setIsAnimating(false);
      // Remove fixed positioning
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.documentElement.style.scrollbarGutter = '';
      
      // Restore scroll position instantly without animation
      window.scrollTo({ top: scrollY, behavior: 'instant' });
      
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle escape key to close form
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isTherapeuticAreaDropdownOpen) {
        const target = event.target as Element;
        if (!target.closest('.custom-select-container')) {
          setIsTherapeuticAreaDropdownOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isTherapeuticAreaDropdownOpen]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    clearError();

    try {
      // Generate reCAPTCHA v3 token
      let token;
      try {
        token = await generateToken();
      } catch (recaptchaError) {
        console.error('reCAPTCHA error:', recaptchaError);
        // If there's already a recaptchaError from the hook, it will be displayed
        // Otherwise, show a generic error
        if (!recaptchaError) {
          setSubmitStatus('error');
        }
        setIsSubmitting(false);
        return;
      }

      const response = await fetch('/api/send-case-study-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: token
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          fullName: '',
          company: '',
          email: '',
          therapeuticArea: '',
          projectDescription: ''
        });
        clearToken();
        // Close form after 2 seconds
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 2000);
      } else {
        const errorData = await response.json().catch(() => ({}));
        setSubmitStatus('error');
        console.error('Server error:', errorData);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
                className="w-full bg-[#0A0A0A] border border-white/20 rounded-md px-4 py-3 text-white focus:border-[#b12176] focus:outline-none focus:ring-2 focus:ring-[#b12176]/20 transition-colors duration-200"
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
                className="w-full bg-[#0A0A0A] border border-white/20 rounded-md px-4 py-3 text-white focus:border-[#b12176] focus:outline-none focus:ring-2 focus:ring-[#b12176]/20 transition-colors duration-200"
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
                className="w-full bg-[#0A0A0A] border border-white/20 rounded-md px-4 py-3 text-white focus:border-[#b12176] focus:outline-none focus:ring-2 focus:ring-[#b12176]/20 transition-colors duration-200"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '16px'
                }}
              />
            </div>

            <div className="relative">
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
              <div className="relative custom-select-container">
                <button
                  type="button"
                  onClick={() => setIsTherapeuticAreaDropdownOpen(!isTherapeuticAreaDropdownOpen)}
                  className={`w-full bg-[#0A0A0A] border border-white/20 rounded-md px-4 py-3 text-white focus:border-[#b12176] focus:outline-none transition-all duration-200 text-left flex items-center justify-between ${
                    isTherapeuticAreaDropdownOpen ? 'border-[#b12176]' : ''
                  }`}
                  style={{
                    fontFamily: "'Red Hat Text', sans-serif",
                    fontSize: '16px',
                    outline: 'none',
                    boxShadow: 'none'
                  }}
                >
                  <span className={formData.therapeuticArea ? 'text-white' : 'text-[#888]'}>
                    {getSelectedTherapeuticAreaLabel()}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#b12176] transition-transform duration-200 ${
                      isTherapeuticAreaDropdownOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <div
                  className={`absolute top-full left-0 right-0 mt-1 bg-[#0A0A0A] border border-white/20 rounded-md shadow-lg z-10 transition-all duration-200 ${
                    isTherapeuticAreaDropdownOpen 
                      ? 'opacity-100 visible translate-y-0' 
                      : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  {therapeuticAreaOptions.map((option, index) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, therapeuticArea: option.value });
                        setIsTherapeuticAreaDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left transition-colors duration-150 focus:outline-none ${
                        formData.therapeuticArea === option.value
                          ? 'bg-[#b12176]/10 text-[#b12176]'
                          : 'text-white hover:bg-white/5'
                      } ${
                        index === 0 ? 'rounded-t-md' : ''
                      } ${
                        index === therapeuticAreaOptions.length - 1 ? 'rounded-b-md' : ''
                      }`}
                      style={{
                        fontFamily: "'Red Hat Text', sans-serif",
                        fontSize: '16px',
                        outline: 'none',
                        boxShadow: 'none'
                      }}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
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
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-4 p-4 bg-green-900/20 border border-green-500/30 rounded-md">
                  <p className="text-green-400 text-center" style={{ fontFamily: "'Red Hat Text', sans-serif", fontSize: '14px' }}>
                    ✓ Thank you! Your case study request has been sent successfully.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-4 p-4 bg-red-900/20 border border-red-500/30 rounded-md">
                  <p className="text-red-400 text-center" style={{ fontFamily: "'Red Hat Text', sans-serif", fontSize: '14px' }}>
                    ✗ Sorry, there was an error sending your request. Please try again.
                  </p>
                </div>
              )}

            {/* reCAPTCHA Error */}
            {recaptchaError && (
              <div className="mb-4 p-4 bg-red-900/20 border border-red-500/30 rounded-md">
                <p className="text-red-400 text-center" style={{ fontFamily: "'Red Hat Text', sans-serif", fontSize: '14px' }}>
                  ✗ {recaptchaError || 'reCAPTCHA verification failed. Please try again.'}
                </p>
              </div>
            )}

              {/* reCAPTCHA Component */}
              <RecaptchaV3
                onTokenGenerated={() => {}} // Token is handled by the hook
                onError={() => {}} // Error is handled by the hook
                action="case_study_request"
                className="mb-4"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-4 rounded-[50px] text-white tracking-wider cursor-pointer border-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  padding: '8px 8px 8px 24px',
                  background: isSubmitting ? 'rgba(155, 89, 208, 0.4)' : 'rgba(155, 89, 208, 0.65)',
                  fontFamily: "'Red Hat Display', sans-serif",
                  fontSize: '16px',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
                  transitionDuration: '250ms'
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.background = 'rgba(155, 89, 208, 0.85)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.background = 'rgba(155, 89, 208, 0.65)';
                  }
                }}
              >
                <span className="flex-1 text-center">
                  {isSubmitting ? 'Sending...' : 'Send Me Relevant Case Study'}
                </span>
                <div
                  className="flex items-center justify-center rounded-full bg-white"
                  style={{
                    width: '40px',
                    height: '40px',
                    color: 'rgba(155, 89, 208, 1)'
                  }}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <ArrowRight size={20} />
                  )}
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
