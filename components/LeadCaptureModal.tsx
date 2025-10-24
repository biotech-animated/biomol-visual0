import { useState } from 'react';
import { X, CheckCircle, AlertCircle } from 'lucide-react';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadCaptureModal({ isOpen, onClose }: LeadCaptureModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

  //   try {
  //     await submitLeadCapture(formData);
  //     setStatus('success');
  //     setFormData({ name: '', email: '', interest: '' });
  //   } catch (error) {
  //     setStatus('error');
  //     setErrorMessage(error instanceof Error ? error.message : 'An error occurred. Please try again.');
  //   }
  };

  const handleClose = () => {
    setStatus('idle');
    setErrorMessage('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in"
      style={{
        padding: 'var(--space-3)',
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(8px)'
      }}
    >
      <div
        className="relative w-full max-w-md rounded-2xl shadow-2xl animate-slide-up"
        style={{
          background: 'var(--bmv-surface)',
          border: '1px solid rgba(183, 148, 246, 0.2)'
        }}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 transition-colors"
          style={{ color: 'var(--bmv-text-secondary)' }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--bmv-text-heading)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--bmv-text-secondary)'}
        >
          <X size={24} />
        </button>

        <div style={{ padding: 'var(--space-5)' }}>
          {status === 'success' ? (
            <div className="text-center" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                style={{ background: 'rgba(155, 89, 208, 0.2)' }}
              >
                <CheckCircle size={32} style={{ color: 'var(--bmv-purple)' }} />
              </div>
              <h3
                style={{
                  fontSize: 'clamp(22px, 3.2vw, 32px)',
                  fontWeight: '500',
                  color: 'var(--bmv-text-heading)'
                }}
              >
                Thank You!
              </h3>
              <p style={{ color: 'var(--bmv-text-secondary)' }}>
                We'll review your information and send relevant case studies to your email shortly.
              </p>
              <button
                onClick={handleClose}
                className="w-full"
                style={{
                  padding: '16px 24px',
                  background: 'var(--bmv-purple)',
                  color: 'white',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 250ms cubic-bezier(0.2, 0.8, 0.2, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--bmv-purple-hover)';
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--bmv-purple)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <h2
                style={{
                  fontSize: 'clamp(22px, 3.2vw, 32px)',
                  fontWeight: '500',
                  color: 'var(--bmv-text-heading)',
                  marginBottom: 'var(--space-2)'
                }}
              >
                Request Case Studies
              </h2>
              <p
                style={{
                  color: 'var(--bmv-text-secondary)',
                  marginBottom: 'var(--space-4)'
                }}
              >
                Our case studies are confidential. Tell us about your company so we can send relevant examples.
              </p>

              {status === 'error' && (
                <div
                  className="flex items-start rounded-lg"
                  style={{
                    marginBottom: 'var(--space-3)',
                    padding: 'var(--space-3)',
                    background: 'rgba(252, 129, 129, 0.1)',
                    border: '1px solid rgba(252, 129, 129, 0.3)',
                    gap: 'var(--space-2)'
                  }}
                >
                  <AlertCircle size={20} style={{ color: '#FC8181', flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ color: '#FC8181', fontSize: '14px' }}>{errorMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <div>
                  <label
                    htmlFor="name"
                    style={{
                      display: 'block',
                      color: 'var(--bmv-text)',
                      marginBottom: 'var(--space-2)',
                      fontWeight: '500',
                      fontSize: '16px'
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '16px',
                      background: 'var(--bmv-bg)',
                      border: '1px solid var(--bmv-border)',
                      borderRadius: '8px',
                      color: 'var(--bmv-text)',
                      fontSize: '16px',
                      transition: 'border-color 200ms ease, box-shadow 200ms ease'
                    }}
                    placeholder="John Doe"
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--bmv-purple-hover)';
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(155, 89, 208, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--bmv-border)';
                      e.currentTarget.style.boxShadow = 'none';
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
                      fontSize: '16px'
                    }}
                  >
                    Company Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '16px',
                      background: 'var(--bmv-bg)',
                      border: '1px solid var(--bmv-border)',
                      borderRadius: '8px',
                      color: 'var(--bmv-text)',
                      fontSize: '16px',
                      transition: 'border-color 200ms ease, box-shadow 200ms ease'
                    }}
                    placeholder="john@company.com"
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--bmv-purple-hover)';
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(155, 89, 208, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--bmv-border)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    style={{
                      display: 'block',
                      color: 'var(--bmv-text)',
                      marginBottom: 'var(--space-2)',
                      fontWeight: '500',
                      fontSize: '16px'
                    }}
                  >
                    Tell us about your company and interest
                  </label>
                  <textarea
                    id="interest"
                    required
                    rows={4}
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '16px',
                      background: 'var(--bmv-bg)',
                      border: '1px solid var(--bmv-border)',
                      borderRadius: '8px',
                      color: 'var(--bmv-text)',
                      fontSize: '16px',
                      resize: 'none',
                      transition: 'border-color 200ms ease, box-shadow 200ms ease',
                      fontFamily: "'Red Hat Text', sans-serif"
                    }}
                    placeholder="Tell us about your company, industry, and what you're looking to achieve..."
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--bmv-purple-hover)';
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(155, 89, 208, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--bmv-border)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full"
                  style={{
                    padding: '16px 24px',
                    background: 'var(--bmv-orange)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: '500',
                    transition: 'all 250ms cubic-bezier(0.2, 0.8, 0.2, 1)',
                    cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                    opacity: status === 'submitting' ? 0.5 : 1
                  }}
                  onMouseEnter={(e) => {
                    if (status !== 'submitting') {
                      e.currentTarget.style.background = 'var(--bmv-orange-hover)';
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (status !== 'submitting') {
                      e.currentTarget.style.background = 'var(--bmv-orange)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }
                  }}
                >
                  {status === 'submitting' ? 'Submitting...' : 'Submit Request'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
