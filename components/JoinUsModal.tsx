'use client';

import { useState } from 'react';
import { X, CheckCircle, AlertCircle } from 'lucide-react';

interface JoinUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JoinUsModal({ isOpen, onClose }: JoinUsModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    portfolio: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // Simulate submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', role: '', portfolio: '', message: '' });
    }, 1000);
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
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(12px)'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl shadow-2xl animate-slide-up overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(26, 10, 46, 0.98) 0%, rgba(45, 20, 70, 0.98) 100%)',
          border: '1px solid rgba(155, 89, 208, 0.3)',
          boxShadow: '0 20px 60px rgba(155, 89, 208, 0.2)'
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

        <div style={{ padding: '40px' }}>
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
                  fontWeight: '600',
                  color: 'var(--bmv-text-heading)',
                  fontFamily: "'Red Hat Display', sans-serif"
                }}
              >
                Application Received!
              </h3>
              <p style={{
                color: 'var(--bmv-text-secondary)',
                fontSize: '16px',
                lineHeight: '1.6',
                fontFamily: "'Red Hat Text', sans-serif"
              }}>
                Thank you for your interest in joining Biomol Visual. We'll review your application and get back to you soon.
              </p>
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
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 250ms cubic-bezier(0.2, 0.8, 0.2, 1)',
                  fontFamily: "'Red Hat Display', sans-serif",
                  marginTop: 'var(--space-2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(155, 89, 208, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
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
                    fontWeight: '600',
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
                  Be part of our mission to transform complex science into compelling visual stories.
                </p>
              </div>

              {status === 'error' && (
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
                      fontSize: '14px',
                      fontFamily: "'Red Hat Display', sans-serif"
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
                      padding: '14px 16px',
                      background: 'rgba(26, 10, 46, 0.6)',
                      border: '1px solid rgba(155, 89, 208, 0.3)',
                      borderRadius: '10px',
                      color: 'var(--bmv-text)',
                      fontSize: '15px',
                      transition: 'all 200ms ease',
                      fontFamily: "'Red Hat Text', sans-serif"
                    }}
                    placeholder="John Doe"
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
                    Email
                  </label>
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
                    htmlFor="role"
                    style={{
                      display: 'block',
                      color: 'var(--bmv-text)',
                      marginBottom: 'var(--space-2)',
                      fontWeight: '500',
                      fontSize: '14px',
                      fontFamily: "'Red Hat Display', sans-serif"
                    }}
                  >
                    Role Interest
                  </label>
                  <select
                    id="role"
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      background: 'rgba(26, 10, 46, 0.6)',
                      border: '1px solid rgba(155, 89, 208, 0.3)',
                      borderRadius: '10px',
                      color: formData.role ? 'var(--bmv-text)' : 'var(--bmv-text-secondary)',
                      fontSize: '15px',
                      transition: 'all 200ms ease',
                      fontFamily: "'Red Hat Text', sans-serif",
                      cursor: 'pointer'
                    }}
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
                  >
                    <option value="">Select a role</option>
                    <option value="3d-animator">3D Animator</option>
                    <option value="scientific-illustrator">Scientific Illustrator</option>
                    <option value="motion-designer">Motion Designer</option>
                    <option value="scientific-consultant">Scientific Consultant</option>
                    <option value="project-manager">Project Manager</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="portfolio"
                    style={{
                      display: 'block',
                      color: 'var(--bmv-text)',
                      marginBottom: 'var(--space-2)',
                      fontWeight: '500',
                      fontSize: '14px',
                      fontFamily: "'Red Hat Display', sans-serif"
                    }}
                  >
                    LinkedIn / Portfolio URL
                  </label>
                  <input
                    type="url"
                    id="portfolio"
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
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

                <div>
                  <label
                    htmlFor="message"
                    style={{
                      display: 'block',
                      color: 'var(--bmv-text)',
                      marginBottom: 'var(--space-2)',
                      fontWeight: '500',
                      fontSize: '14px',
                      fontFamily: "'Red Hat Display', sans-serif"
                    }}
                  >
                    Why do you want to join us?
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
                    placeholder="Tell us about your experience and what excites you about joining Biomol Visual..."
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

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full"
                  style={{
                    padding: '16px 24px',
                    marginTop: 'var(--space-2)',
                    background: 'linear-gradient(90deg, var(--bmv-purple) 0%, var(--bmv-orange) 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontWeight: '600',
                    transition: 'all 250ms cubic-bezier(0.2, 0.8, 0.2, 1)',
                    cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                    opacity: status === 'submitting' ? 0.6 : 1,
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
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
