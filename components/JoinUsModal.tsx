'use client';

import { useState, useEffect } from 'react';
import { X, CheckCircle, AlertCircle, ChevronRight, ChevronLeft } from 'lucide-react';
import RecaptchaV3, { useRecaptchaV3 } from '@/components/ui/RecaptchaV3';

interface JoinUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  firstName: string;
  email: string;
  location: string;
  improvementAreas: string[];
  universityDegrees: string;
  linkedinProfile: string;
  workVision: string;
  teamFit: string;
  performanceNeeds: string;
  passion: string;
  cvFile: File | null;
  additionalComments: string;
}

const IMPROVEMENT_AREAS = [
  'Biomedical Animation',
  'MOA Animation',
  '3D Generalist',
  '3D Modeling and Rigging',
  '3D Surfacing and Lighting',
  '3D Animation',
  '2D Scientific Illustration',
  '2D Animation & Motion Graphics',
  'Storyboard & Visual Content Creation',
  'Scientific Guidance For Our Design Team',
  'Knowledge of Pharma/Biotech Industry',
  'Molecular Biology',
  'Scientific Copywriting',
  'General Scientific Support',
  'PPC Advertising',
  'Conversion Optimization',
  'Voice Talent',
  'Knowledge of Investor Pitches',
  'Sales Psychology',
  'Project Management',
  'Business Management',
  'Business Development & Sales',
  'Visual Sequence Editing (VSE)',
  'Sound Design',
  'Other'
];

export default function JoinUsModal({ isOpen, onClose }: JoinUsModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    email: '',
    location: '',
    improvementAreas: [],
    universityDegrees: '',
    linkedinProfile: '',
    workVision: '',
    teamFit: '',
    performanceNeeds: '',
    passion: '',
    cvFile: null,
    additionalComments: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  
  // Use reCAPTCHA v3 hook
  const { token: recaptchaToken, error: recaptchaError, generateToken, clearToken, clearError } = useRecaptchaV3('job_application');

  if (!isOpen) return null;

  const validateStep = (step: number): boolean => {
    const errors: string[] = [];

    if (step === 1) {
      if (!formData.firstName.trim()) errors.push('First name is required');
      if (!formData.email.trim()) errors.push('Email is required');
      if (!formData.location.trim()) errors.push('Location is required');
    } else if (step === 2) {
      if (formData.improvementAreas.length === 0) {
        errors.push('Please select at least one area you can help with');
      }
    }

    setValidationErrors(errors);
    return errors.length === 0;
  };

  const handleNext = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.preventDefault();
    }
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
      setValidationErrors([]);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    setValidationErrors([]);
  };

  const toggleImprovementArea = (area: string) => {
    setFormData(prev => ({
      ...prev,
      improvementAreas: prev.improvementAreas.includes(area)
        ? prev.improvementAreas.filter(a => a !== area)
        : [...prev.improvementAreas, area]
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, cvFile: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    clearError();

    try {
      // Generate reCAPTCHA v3 token
      const token = await generateToken();

      const response = await fetch('/api/send-join-us-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          email: formData.email,
          location: formData.location,
          improvementAreas: formData.improvementAreas,
          universityDegrees: formData.universityDegrees,
          linkedinProfile: formData.linkedinProfile,
          workVision: formData.workVision,
          teamFit: formData.teamFit,
          performanceNeeds: formData.performanceNeeds,
          passion: formData.passion,
          cvFileName: formData.cvFile ? formData.cvFile.name : '',
          additionalComments: formData.additionalComments,
          recaptchaToken: token
        }),
      });

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch (jsonError) {
          throw new Error(`Server error: ${response.status} ${response.statusText}`);
        }
        throw new Error(errorData.error || 'Failed to submit application');
      }

      // Parse success response with error handling
      let responseData;
      try {
        responseData = await response.json();
      } catch (jsonError) {
        console.error('Error parsing success response:', jsonError);
        // Still consider it a success if we got a 200 status
      }

      setStatus('success');
      setFormData({
        firstName: '',
        email: '',
        location: '',
        improvementAreas: [],
        universityDegrees: '',
        linkedinProfile: '',
        workVision: '',
        teamFit: '',
        performanceNeeds: '',
        passion: '',
        cvFile: null,
        additionalComments: ''
      });
      clearToken();
      setCurrentStep(1);
    } catch (error: any) {
      setStatus('error');
      setErrorMessage(error.message || 'Failed to submit application. Please try again.');
    }
  };

  const handleClose = () => {
    setStatus('idle');
    setErrorMessage('');
    setValidationErrors([]);
    clearToken();
    clearError();
    setCurrentStep(1);
    onClose();
  };

  const renderProgressBar = () => (
    <div style={{ marginBottom: '32px' }}>
      <div style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '12px'
      }}>
        {[1, 2, 3, 4].map((step) => (
          <div
            key={step}
            style={{
              flex: 1,
              height: '4px',
              borderRadius: '2px',
              background: step <= currentStep
                ? 'linear-gradient(90deg, var(--bmv-purple) 0%, var(--bmv-orange) 100%)'
                : 'rgba(155, 89, 208, 0.2)',
              transition: 'all 300ms ease'
            }}
          />
        ))}
      </div>
      <p style={{
        color: 'var(--bmv-text-secondary)',
        fontSize: '13px',
        textAlign: 'center',
        fontFamily: "'Red Hat Text', sans-serif"
      }}>
        Step {currentStep} of 4
      </p>
    </div>
  );

  const renderStep1 = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
      <div>
        <h3 style={{
          fontSize: '20px',
          fontWeight: '500',
          color: 'var(--bmv-text-heading)',
          marginBottom: 'var(--space-2)',
          fontFamily: "'Red Hat Display', sans-serif"
        }}>
          About Us
        </h3>
        <p style={{
          color: 'var(--bmv-text-secondary)',
          fontSize: '14px',
          lineHeight: '1.7',
          fontFamily: "'Red Hat Text', sans-serif"
        }}>
          The purpose of our work is 1) to help biotech and pharma companies with promising technology get the funding and partnerships they need to advance the development of their therapeutics and 2) to assist with the B2B sales of companies providing effective products and services supporting the life-science market. Broadly speaking, we can call this biotech business development, and to some extent, biotech growth marketing.
        </p>
        <p style={{
          color: 'var(--bmv-text-secondary)',
          fontSize: '14px',
          lineHeight: '1.7',
          fontFamily: "'Red Hat Text', sans-serif",
          marginTop: 'var(--space-2)'
        }}>
          Over the last 10 years we have assembled a small team of driven individuals, passionate about creating a highly valuable marketing tool that ultimately improves lives.
        </p>
      </div>

      <div>
        <label
          htmlFor="firstName"
          style={{
            display: 'block',
            color: 'var(--bmv-text)',
            marginBottom: 'var(--space-2)',
            fontWeight: '500',
            fontSize: '14px',
            fontFamily: "'Red Hat Display', sans-serif"
          }}
        >
          What is your first name? *
        </label>
        <input
          type="text"
          id="firstName"
          required
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          style={{
            width: '100%',
            padding: '14px 16px',
            background: 'rgba(26, 10, 46, 0.6)',
            border: '1px solid rgba(155, 89, 208, 0.3)',
            borderRadius: '10px',
            color: 'var(--bmv-text)',
            fontSize: '15px',
            transition: 'all 200ms ease',
            fontFamily: "'Red Hat Text', sans-serif"
          }}
          placeholder="John"
          onFocus={(e) => {
            e.currentTarget.style.borderColor = 'var(--bmv-purple)';
            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(155, 89, 208, 0.15)';
            e.currentTarget.style.background = 'rgba(26, 10, 46, 0.8)';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'rgba(155, 89, 208, 0.3)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.background = 'rgba(26, 10, 46, 0.6)';
          }}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          style={{
            display: 'block',
            color: 'var(--bmv-text)',
            marginBottom: 'var(--space-2)',
            fontWeight: '500',
            fontSize: '14px',
            fontFamily: "'Red Hat Display', sans-serif"
          }}
        >
          What is your email address? *
        </label>
        <p style={{
          color: 'var(--bmv-text-secondary)',
          fontSize: '13px',
          marginBottom: 'var(--space-2)',
          fontFamily: "'Red Hat Text', sans-serif"
        }}>
          This is how we will contact you.
        </p>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          style={{
            width: '100%',
            padding: '14px 16px',
            background: 'rgba(26, 10, 46, 0.6)',
            border: '1px solid rgba(155, 89, 208, 0.3)',
            borderRadius: '10px',
            color: 'var(--bmv-text)',
            fontSize: '15px',
            transition: 'all 200ms ease',
            fontFamily: "'Red Hat Text', sans-serif"
          }}
          placeholder="john@example.com"
          onFocus={(e) => {
            e.currentTarget.style.borderColor = 'var(--bmv-purple)';
            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(155, 89, 208, 0.15)';
            e.currentTarget.style.background = 'rgba(26, 10, 46, 0.8)';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'rgba(155, 89, 208, 0.3)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.background = 'rgba(26, 10, 46, 0.6)';
          }}
        />
      </div>

      <div>
        <label
          htmlFor="location"
          style={{
            display: 'block',
            color: 'var(--bmv-text)',
            marginBottom: 'var(--space-2)',
            fontWeight: '500',
            fontSize: '14px',
            fontFamily: "'Red Hat Display', sans-serif"
          }}
        >
          In which city and country are you currently physically located? *
        </label>
        <input
          type="text"
          id="location"
          required
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          style={{
            width: '100%',
            padding: '14px 16px',
            background: 'rgba(26, 10, 46, 0.6)',
            border: '1px solid rgba(155, 89, 208, 0.3)',
            borderRadius: '10px',
            color: 'var(--bmv-text)',
            fontSize: '15px',
            transition: 'all 200ms ease',
            fontFamily: "'Red Hat Text', sans-serif"
          }}
          placeholder="San Francisco, USA"
          onFocus={(e) => {
            e.currentTarget.style.borderColor = 'var(--bmv-purple)';
            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(155, 89, 208, 0.15)';
            e.currentTarget.style.background = 'rgba(26, 10, 46, 0.8)';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'rgba(155, 89, 208, 0.3)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.background = 'rgba(26, 10, 46, 0.6)';
          }}
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
      <div>
        <label
          style={{
            display: 'block',
            color: 'var(--bmv-text)',
            marginBottom: 'var(--space-3)',
            fontWeight: '500',
            fontSize: '14px',
            fontFamily: "'Red Hat Display', sans-serif"
          }}
        >
          Which areas of our business can you help us improve? *
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '10px',
          maxHeight: '300px',
          overflowY: 'auto',
          padding: '4px'
        }}>
          {IMPROVEMENT_AREAS.map((area) => (
            <div
              key={area}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px',
                background: formData.improvementAreas.includes(area)
                  ? '#1A202C'
                  : 'rgba(26, 10, 46, 0.6)',
                border: `1px solid ${formData.improvementAreas.includes(area)
                  ? 'rgba(155, 89, 208, 0.5)'
                  : 'rgba(155, 89, 208, 0.3)'}`,
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 200ms ease',
                fontFamily: "'Red Hat Text', sans-serif",
                fontSize: '14px',
                color: 'var(--bmv-text)'
              }}
              onClick={() => toggleImprovementArea(area)}
              onMouseEnter={(e) => {
                if (!formData.improvementAreas.includes(area)) {
                  e.currentTarget.style.background = 'rgba(26, 10, 46, 0.8)';
                  e.currentTarget.style.borderColor = 'rgba(155, 89, 208, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (!formData.improvementAreas.includes(area)) {
                  e.currentTarget.style.background = 'rgba(26, 10, 46, 0.6)';
                  e.currentTarget.style.borderColor = 'rgba(155, 89, 208, 0.3)';
                }
              }}
            >
              <div
                style={{
                  width: '18px',
                  height: '18px',
                  cursor: 'pointer',
                  background: formData.improvementAreas.includes(area) 
                    ? 'var(--bmv-purple)' 
                    : 'transparent',
                  border: '2px solid var(--bmv-purple)',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}
              >
                {formData.improvementAreas.includes(area) && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{
                      color: 'white',
                      stroke: 'currentColor',
                      strokeWidth: '3',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round'
                    }}
                  >
                    <polyline points="20,6 9,17 4,12"></polyline>
                  </svg>
                )}
              </div>
              {area}
            </div>
          ))}
        </div>
      </div>

      <div>
        <label
          htmlFor="universityDegrees"
          style={{
            display: 'block',
            color: 'var(--bmv-text)',
            marginBottom: 'var(--space-2)',
            fontWeight: '500',
            fontSize: '14px',
            fontFamily: "'Red Hat Display', sans-serif"
          }}
        >
          Which university degrees have you completed?
        </label>
        <p style={{
          color: 'var(--bmv-text-secondary)',
          fontSize: '13px',
          marginBottom: 'var(--space-2)',
          fontFamily: "'Red Hat Text', sans-serif"
        }}>
          Please list them out like this: 1) B.Sc. in Biochemistry from Smith University 2) M.Sc. in Biology from Smith University etc.
        </p>
        <textarea
          id="universityDegrees"
          rows={4}
          value={formData.universityDegrees}
          onChange={(e) => setFormData({ ...formData, universityDegrees: e.target.value })}
          style={{
            width: '100%',
            padding: '14px 16px',
            background: 'rgba(26, 10, 46, 0.6)',
            border: '1px solid rgba(155, 89, 208, 0.3)',
            borderRadius: '10px',
            color: 'var(--bmv-text)',
            fontSize: '15px',
            resize: 'vertical',
            transition: 'all 200ms ease',
            fontFamily: "'Red Hat Text', sans-serif",
            minHeight: '100px'
          }}
          placeholder="1) B.Sc. in Biochemistry from Smith University&#10;2) M.Sc. in Biology from Smith University"
          onFocus={(e) => {
            e.currentTarget.style.borderColor = 'var(--bmv-purple)';
            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(155, 89, 208, 0.15)';
            e.currentTarget.style.background = 'rgba(26, 10, 46, 0.8)';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'rgba(155, 89, 208, 0.3)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.background = 'rgba(26, 10, 46, 0.6)';
          }}
        />
      </div>

      <div>
        <label
          htmlFor="linkedinProfile"
          style={{
            display: 'block',
            color: 'var(--bmv-text)',
            marginBottom: 'var(--space-2)',
            fontWeight: '500',
            fontSize: '14px',
            fontFamily: "'Red Hat Display', sans-serif"
          }}
        >
          Please share your LinkedIn profile if you have one.
        </label>
        <input
          type="url"
          id="linkedinProfile"
          value={formData.linkedinProfile}
          onChange={(e) => setFormData({ ...formData, linkedinProfile: e.target.value })}
          style={{
            width: '100%',
            padding: '14px 16px',
            background: 'rgba(26, 10, 46, 0.6)',
            border: '1px solid rgba(155, 89, 208, 0.3)',
            borderRadius: '10px',
            color: 'var(--bmv-text)',
            fontSize: '15px',
            transition: 'all 200ms ease',
            fontFamily: "'Red Hat Text', sans-serif"
          }}
          placeholder="https://linkedin.com/in/yourprofile"
          onFocus={(e) => {
            e.currentTarget.style.borderColor = 'var(--bmv-purple)';
            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(155, 89, 208, 0.15)';
            e.currentTarget.style.background = 'rgba(26, 10, 46, 0.8)';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'rgba(155, 89, 208, 0.3)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.background = 'rgba(26, 10, 46, 0.6)';
          }}
        />
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
      <div>
        <label
          htmlFor="workVision"
          style={{
            display: 'block',
            color: 'var(--bmv-text)',
            marginBottom: 'var(--space-2)',
            fontWeight: '500',
            fontSize: '14px',
            fontFamily: "'Red Hat Display', sans-serif"
          }}
        >
          Please tell us how you would envision working with us.
        </label>
        <textarea
          id="workVision"
          rows={4}
          value={formData.workVision}
          onChange={(e) => setFormData({ ...formData, workVision: e.target.value })}
          style={{
            width: '100%',
            padding: '14px 16px',
            background: 'rgba(26, 10, 46, 0.6)',
            border: '1px solid rgba(155, 89, 208, 0.3)',
            borderRadius: '10px',
            color: 'var(--bmv-text)',
            fontSize: '15px',
            resize: 'vertical',
            transition: 'all 200ms ease',
            fontFamily: "'Red Hat Text', sans-serif",
            minHeight: '100px'
          }}
          placeholder="Describe how you see yourself contributing to our team..."
          onFocus={(e) => {
            e.currentTarget.style.borderColor = 'var(--bmv-purple)';
            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(155, 89, 208, 0.15)';
            e.currentTarget.style.background = 'rgba(26, 10, 46, 0.8)';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'rgba(155, 89, 208, 0.3)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.background = 'rgba(26, 10, 46, 0.6)';
          }}
        />
      </div>

      <div>
        <label
          htmlFor="teamFit"
          style={{
            display: 'block',
            color: 'var(--bmv-text)',
            marginBottom: 'var(--space-2)',
            fontWeight: '500',
            fontSize: '14px',
            fontFamily: "'Red Hat Display', sans-serif"
          }}
        >
          Please describe why we would enjoy working with you in a team environment.
        </label>
        <textarea
          id="teamFit"
          rows={4}
          value={formData.teamFit}
          onChange={(e) => setFormData({ ...formData, teamFit: e.target.value })}
          style={{
            width: '100%',
            padding: '14px 16px',
            background: 'rgba(26, 10, 46, 0.6)',
            border: '1px solid rgba(155, 89, 208, 0.3)',
            borderRadius: '10px',
            color: 'var(--bmv-text)',
            fontSize: '15px',
            resize: 'vertical',
            transition: 'all 200ms ease',
            fontFamily: "'Red Hat Text', sans-serif",
            minHeight: '100px'
          }}
          placeholder="Tell us about your collaboration style and team skills..."
          onFocus={(e) => {
            e.currentTarget.style.borderColor = 'var(--bmv-purple)';
            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(155, 89, 208, 0.15)';
            e.currentTarget.style.background = 'rgba(26, 10, 46, 0.8)';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'rgba(155, 89, 208, 0.3)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.background = 'rgba(26, 10, 46, 0.6)';
          }}
        />
      </div>

      <div>
        <label
          htmlFor="performanceNeeds"
          style={{
            display: 'block',
            color: 'var(--bmv-text)',
            marginBottom: 'var(--space-2)',
            fontWeight: '500',
            fontSize: '14px',
            fontFamily: "'Red Hat Display', sans-serif"
          }}
        >
          Please describe what you need from our company to perform at your best.
        </label>
        <textarea
          id="performanceNeeds"
          rows={4}
          value={formData.performanceNeeds}
          onChange={(e) => setFormData({ ...formData, performanceNeeds: e.target.value })}
          style={{
            width: '100%',
            padding: '14px 16px',
            background: 'rgba(26, 10, 46, 0.6)',
            border: '1px solid rgba(155, 89, 208, 0.3)',
            borderRadius: '10px',
            color: 'var(--bmv-text)',
            fontSize: '15px',
            resize: 'vertical',
            transition: 'all 200ms ease',
            fontFamily: "'Red Hat Text', sans-serif",
            minHeight: '100px'
          }}
          placeholder="What resources, environment, or support would help you excel..."
          onFocus={(e) => {
            e.currentTarget.style.borderColor = 'var(--bmv-purple)';
            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(155, 89, 208, 0.15)';
            e.currentTarget.style.background = 'rgba(26, 10, 46, 0.8)';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'rgba(155, 89, 208, 0.3)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.background = 'rgba(26, 10, 46, 0.6)';
          }}
        />
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
      <div>
        <label
          htmlFor="passion"
          style={{
            display: 'block',
            color: 'var(--bmv-text)',
            marginBottom: 'var(--space-2)',
            fontWeight: '500',
            fontSize: '14px',
            fontFamily: "'Red Hat Display', sans-serif"
          }}
        >
          Aside from salary requirements, what makes you passionate about the work you do?
        </label>
        <textarea
          id="passion"
          rows={4}
          value={formData.passion}
          onChange={(e) => setFormData({ ...formData, passion: e.target.value })}
          style={{
            width: '100%',
            padding: '14px 16px',
            background: 'rgba(26, 10, 46, 0.6)',
            border: '1px solid rgba(155, 89, 208, 0.3)',
            borderRadius: '10px',
            color: 'var(--bmv-text)',
            fontSize: '15px',
            resize: 'vertical',
            transition: 'all 200ms ease',
            fontFamily: "'Red Hat Text', sans-serif",
            minHeight: '100px'
          }}
          placeholder="Share what drives and motivates you..."
          onFocus={(e) => {
            e.currentTarget.style.borderColor = 'var(--bmv-purple)';
            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(155, 89, 208, 0.15)';
            e.currentTarget.style.background = 'rgba(26, 10, 46, 0.8)';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'rgba(155, 89, 208, 0.3)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.background = 'rgba(26, 10, 46, 0.6)';
          }}
        />
      </div>

      <div>
        <label
          htmlFor="cvFile"
          style={{
            display: 'block',
            color: 'var(--bmv-text)',
            marginBottom: 'var(--space-2)',
            fontWeight: '500',
            fontSize: '14px',
            fontFamily: "'Red Hat Display', sans-serif"
          }}
        >
          Please upload your latest CV/resume.
        </label>
        
        {/* Modern File Upload Component */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '48px',
            background: 'rgba(26, 10, 46, 0.6)',
            border: '1px solid rgba(155, 89, 208, 0.3)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            padding: '0 16px',
            cursor: 'pointer',
            transition: 'all 200ms ease',
            fontFamily: "'Red Hat Text', sans-serif"
          }}
          onClick={() => document.getElementById('cvFile')?.click()}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--bmv-purple)';
            e.currentTarget.style.background = 'rgba(26, 10, 46, 0.8)';
            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(155, 89, 208, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(155, 89, 208, 0.3)';
            e.currentTarget.style.background = 'rgba(26, 10, 46, 0.6)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <input
            type="file"
            id="cvFile"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            style={{
              position: 'absolute',
              opacity: 0,
              width: '100%',
              height: '100%',
              cursor: 'pointer',
              zIndex: 1
            }}
          />
          
          {formData.cvFile ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%' }}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                style={{ color: 'var(--bmv-purple)', flexShrink: 0 }}
              >
                <path
                  d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{
                color: 'var(--bmv-text)',
                fontSize: '15px',
                fontFamily: "'Red Hat Text', sans-serif",
                flex: 1,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}>
                {formData.cvFile.name}
              </span>
              <span style={{
                color: 'var(--bmv-text-secondary)',
                fontSize: '13px',
                fontFamily: "'Red Hat Text', sans-serif",
                flexShrink: 0
              }}>
                Change
              </span>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%' }}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                style={{ color: 'var(--bmv-purple)', flexShrink: 0 }}
              >
                <path
                  d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{
                color: 'var(--bmv-text-secondary)',
                fontSize: '15px',
                fontFamily: "'Red Hat Text', sans-serif",
                flex: 1
              }}>
                Choose file to upload
              </span>
              <span style={{
                color: 'var(--bmv-text-secondary)',
                fontSize: '13px',
                fontFamily: "'Red Hat Text', sans-serif",
                flexShrink: 0
              }}>
                PDF, DOC, DOCX
              </span>
            </div>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="additionalComments"
          style={{
            display: 'block',
            color: 'var(--bmv-text)',
            marginBottom: 'var(--space-2)',
            fontWeight: '500',
            fontSize: '14px',
            fontFamily: "'Red Hat Display', sans-serif"
          }}
        >
          Is there anything else you&apos;d like to tell us?
        </label>
        <textarea
          id="additionalComments"
          rows={4}
          value={formData.additionalComments}
          onChange={(e) => setFormData({ ...formData, additionalComments: e.target.value })}
          style={{
            width: '100%',
            padding: '14px 16px',
            background: 'rgba(26, 10, 46, 0.6)',
            border: '1px solid rgba(155, 89, 208, 0.3)',
            borderRadius: '10px',
            color: 'var(--bmv-text)',
            fontSize: '15px',
            resize: 'vertical',
            transition: 'all 200ms ease',
            fontFamily: "'Red Hat Text', sans-serif",
            minHeight: '100px'
          }}
          placeholder="Any additional information you'd like to share..."
          onFocus={(e) => {
            e.currentTarget.style.borderColor = 'var(--bmv-purple)';
            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(155, 89, 208, 0.15)';
            e.currentTarget.style.background = 'rgba(26, 10, 46, 0.8)';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'rgba(155, 89, 208, 0.3)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.background = 'rgba(26, 10, 46, 0.6)';
          }}
        />
      </div>
    </div>
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in"
      style={{
        padding: 'var(--space-3)',
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(12px)'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl shadow-2xl animate-slide-up overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(26, 10, 46, 0.98) 0%, rgba(45, 20, 70, 0.98) 100%)',
          border: '1px solid rgba(155, 89, 208, 0.3)',
          boxShadow: '0 20px 60px rgba(155, 89, 208, 0.2)',
          maxHeight: '90vh'
        }}
      >
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 z-10 transition-all duration-200"
          style={{
            color: 'rgba(226, 232, 240, 0.7)',
            background: 'rgba(0, 0, 0, 0.2)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(155, 89, 208, 0.2)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--bmv-text-heading)';
            e.currentTarget.style.background = 'rgba(155, 89, 208, 0.2)';
            e.currentTarget.style.borderColor = 'rgba(155, 89, 208, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'rgba(226, 232, 240, 0.7)';
            e.currentTarget.style.background = 'rgba(0, 0, 0, 0.2)';
            e.currentTarget.style.borderColor = 'rgba(155, 89, 208, 0.2)';
          }}
        >
          <X size={20} />
        </button>

        <div style={{
          padding: '40px',
          overflowY: 'auto',
          maxHeight: '90vh'
        }}>
          {status === 'success' ? (
            <div className="text-center" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto"
                style={{
                  background: 'linear-gradient(135deg, rgba(155, 89, 208, 0.2) 0%, rgba(237, 137, 54, 0.2) 100%)',
                  border: '2px solid rgba(155, 89, 208, 0.3)'
                }}
              >
                <CheckCircle size={40} style={{ color: 'var(--bmv-purple)' }} />
              </div>
              <h3
                style={{
                  fontSize: 'clamp(24px, 3.5vw, 36px)',
                  fontWeight: '500',
                  color: 'var(--bmv-text-heading)',
                  fontFamily: "'Red Hat Display', sans-serif"
                }}
              >
                Thank You!
              </h3>
              <div style={{
                color: 'var(--bmv-text-secondary)',
                fontSize: '15px',
                lineHeight: '1.7',
                fontFamily: "'Red Hat Text', sans-serif",
                textAlign: 'left'
              }}>
                <p style={{ marginBottom: 'var(--space-3)' }}>
                  Thank you for taking the time to complete this form today.
                </p>
                <p style={{ marginBottom: 'var(--space-3)' }}>
                  Your answers have been sent to our management team and we will review them as soon as we can.
                </p>
                <p style={{ marginBottom: 'var(--space-3)' }}>
                  If we think working with you is likely to help us grow as a company and further our mission we will reach out to you in the next 7 days.
                </p>
                <p>
                  Thanks again for your time. We really appreciate it. Have a great day!
                </p>
              </div>
              <button
                onClick={handleClose}
                className="w-full"
                style={{
                  padding: '16px 24px',
                  background: 'linear-gradient(90deg, var(--bmv-purple) 0%, var(--bmv-orange) 100%)',
                  color: 'white',
                  borderRadius: '12px',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 250ms cubic-bezier(0.2, 0.8, 0.2, 1)',
                  fontFamily: "'Red Hat Display', sans-serif",
                  marginTop: 'var(--space-2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(155, 89, 208, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <div style={{ marginBottom: 'var(--space-4)' }}>
                <h2
                  style={{
                    fontSize: 'clamp(26px, 3.5vw, 38px)',
                    fontWeight: '500',
                    background: 'linear-gradient(90deg, var(--bmv-purple) 0%, var(--bmv-orange) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: 'var(--space-2)',
                    fontFamily: "'Red Hat Display', sans-serif"
                  }}
                >
                  Join Our Team
                </h2>
                <p
                  style={{
                    color: 'var(--bmv-text-secondary)',
                    fontSize: '15px',
                    lineHeight: '1.6',
                    fontFamily: "'Red Hat Text', sans-serif"
                  }}
                >
                  Thanks for your interest in working with us.
                </p>
              </div>

              {renderProgressBar()}

              {(status === 'error' || validationErrors.length > 0 || recaptchaError) && (
                <div
                  className="flex items-start rounded-lg"
                  style={{
                    marginBottom: 'var(--space-3)',
                    padding: 'var(--space-3)',
                    background: 'rgba(252, 129, 129, 0.15)',
                    border: '1px solid rgba(252, 129, 129, 0.4)',
                    gap: 'var(--space-2)'
                  }}
                >
                  <AlertCircle size={20} style={{ color: '#FC8181', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    {validationErrors.map((error, index) => (
                      <p key={index} style={{ color: '#FC8181', fontSize: '14px', marginBottom: index < validationErrors.length - 1 ? '4px' : 0 }}>
                        {error}
                      </p>
                    ))}
                    {errorMessage && <p style={{ color: '#FC8181', fontSize: '14px' }}>{errorMessage}</p>}
                    {recaptchaError && <p style={{ color: '#FC8181', fontSize: '14px' }}>{recaptchaError}</p>}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {currentStep === 1 && renderStep1()}
                {currentStep === 2 && renderStep2()}
                {currentStep === 3 && renderStep3()}
                {currentStep === 4 && renderStep4()}

                {/* reCAPTCHA Component - only show on final step */}
                {currentStep === 4 && (
                  <div style={{ marginBottom: 'var(--space-3)' }}>
                    <RecaptchaV3
                      onTokenGenerated={() => {}} // Token is handled by the hook
                      onError={() => {}} // Error is handled by the hook
                      action="job_application"
                    />
                  </div>
                )}

                <div style={{
                  display: 'flex',
                  gap: 'var(--space-3)',
                  marginTop: 'var(--space-4)'
                }}>
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={handleBack}
                      style={{
                        flex: 1,
                        padding: '16px 24px',
                        background: 'rgba(26, 10, 46, 0.8)',
                        color: 'var(--bmv-text)',
                        border: '1px solid rgba(155, 89, 208, 0.3)',
                        borderRadius: '12px',
                        fontSize: '16px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'all 250ms cubic-bezier(0.2, 0.8, 0.2, 1)',
                        fontFamily: "'Red Hat Display', sans-serif",
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(26, 10, 46, 1)';
                        e.currentTarget.style.borderColor = 'rgba(155, 89, 208, 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(26, 10, 46, 0.8)';
                        e.currentTarget.style.borderColor = 'rgba(155, 89, 208, 0.3)';
                      }}
                    >
                      <ChevronLeft size={20} />
                      Back
                    </button>
                  )}

                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={(e) => handleNext(e)}
                      style={{
                        flex: 1,
                        padding: '16px 24px',
                        background: 'linear-gradient(90deg, var(--bmv-purple) 0%, var(--bmv-orange) 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '12px',
                        fontSize: '16px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'all 250ms cubic-bezier(0.2, 0.8, 0.2, 1)',
                        fontFamily: "'Red Hat Display', sans-serif",
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 10px 40px rgba(155, 89, 208, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      Next
                      <ChevronRight size={20} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      style={{
                        flex: 1,
                        padding: '16px 24px',
                        background: 'linear-gradient(90deg, var(--bmv-purple) 0%, var(--bmv-orange) 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '12px',
                        fontSize: '16px',
                        fontWeight: '500',
                        cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                        opacity: status === 'submitting' ? 0.6 : 1,
                        transition: 'all 250ms cubic-bezier(0.2, 0.8, 0.2, 1)',
                        fontFamily: "'Red Hat Display', sans-serif"
                      }}
                      onMouseEnter={(e) => {
                        if (status !== 'submitting') {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 10px 40px rgba(155, 89, 208, 0.4)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (status !== 'submitting') {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }
                      }}
                    >
                      {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
                    </button>
                  )}
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
