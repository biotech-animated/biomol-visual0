'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface RecaptchaProps {
  onTokenGenerated: (token: string) => void;
  onError: (error: string) => void;
  className?: string;
}

export default function Recaptcha({ onTokenGenerated, onError, className = '' }: RecaptchaProps) {
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [widgetId, setWidgetId] = useState<number | null>(null);
  const isRenderedRef = useRef(false);

  const renderRecaptcha = useCallback(() => {
    if (!recaptchaRef.current || isRenderedRef.current || !window.grecaptcha || typeof window.grecaptcha.render !== 'function') {
      return;
    }

    try {
      // Clear any existing content
      recaptchaRef.current.innerHTML = '';
      
      const id = window.grecaptcha.render(recaptchaRef.current, {
        sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
        callback: (token: string) => {
          console.log('reCAPTCHA token generated:', token.substring(0, 20) + '...');
          onTokenGenerated(token);
        },
        'expired-callback': () => {
          console.log('reCAPTCHA expired');
          onError('reCAPTCHA verification expired. Please verify again.');
        },
        'error-callback': () => {
          console.log('reCAPTCHA error');
          onError('reCAPTCHA verification failed. Please try again.');
        }
      });
      
      setWidgetId(id);
      isRenderedRef.current = true;
      console.log('reCAPTCHA rendered successfully');
    } catch (error) {
      console.error('Error rendering reCAPTCHA:', error);
      onError('Failed to load reCAPTCHA. Please refresh the page.');
    }
  }, [onTokenGenerated, onError]);

  useEffect(() => {
    const loadRecaptchaScript = () => {
      return new Promise<void>((resolve, reject) => {
        // Check if script is already loaded
        if (document.querySelector('script[src*="recaptcha"]')) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/api.js?render=explicit`;
        script.async = true;
        script.defer = true;
        
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load reCAPTCHA script'));
        
        document.head.appendChild(script);
      });
    };

    const initializeRecaptcha = async () => {
      try {
        await loadRecaptchaScript();
        
        // Wait for grecaptcha to be available
        const checkGrecaptcha = () => {
          if (window.grecaptcha && typeof window.grecaptcha.render === 'function') {
            setIsLoaded(true);
            console.log('reCAPTCHA loaded successfully');
            renderRecaptcha();
          } else {
            setTimeout(checkGrecaptcha, 100);
          }
        };
        
        checkGrecaptcha();
      } catch (error) {
        console.error('Failed to load reCAPTCHA:', error);
        onError('Failed to load reCAPTCHA. Please refresh the page and try again.');
      }
    };

    initializeRecaptcha();

    // Cleanup function
    return () => {
      if (widgetId !== null && window.grecaptcha && window.grecaptcha.reset) {
        try {
          window.grecaptcha.reset(widgetId);
        } catch (error) {
          console.log('Error resetting reCAPTCHA on cleanup:', error);
        }
      }
      isRenderedRef.current = false;
    };
  }, [renderRecaptcha, widgetId]);

  const resetRecaptcha = () => {
    if (widgetId !== null && window.grecaptcha) {
      try {
        window.grecaptcha.reset(widgetId);
      } catch (error) {
        console.error('Error resetting reCAPTCHA:', error);
        // If reset fails, try to re-render
        if (recaptchaRef.current) {
          recaptchaRef.current.innerHTML = '';
          isRenderedRef.current = false;
          setIsLoaded(false);
          // Re-render after a short delay
          setTimeout(() => {
            if (window.grecaptcha && typeof window.grecaptcha.render === 'function') {
              renderRecaptcha();
            }
          }, 100);
        }
      }
    }
  };

  return (
    <div className={`recaptcha-container ${className}`}>
      {/* reCAPTCHA Widget Container */}
      <div 
        ref={recaptchaRef}
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '16px',
          minHeight: '78px' // Ensure consistent height
        }}
      />
      
      {/* Status indicator */}
      {isLoaded && (
        <div style={{
          textAlign: 'center',
          fontSize: '12px',
          color: '#666',
          fontFamily: "'Red Hat Text', sans-serif",
          marginBottom: '8px'
        }}>
          ✓ reCAPTCHA loaded - Please complete the verification above
        </div>
      )}

      {/* Reset button */}
      {isLoaded && (
        <div style={{ textAlign: 'center', marginBottom: '12px' }}>
          <button
            type="button"
            onClick={resetRecaptcha}
            style={{
              padding: '6px 12px',
              background: 'rgba(156, 163, 175, 0.1)',
              border: '1px solid rgba(156, 163, 175, 0.3)',
              borderRadius: '4px',
              color: '#6b7280',
              fontSize: '11px',
              fontFamily: "'Red Hat Text', sans-serif",
              cursor: 'pointer',
              transition: 'all 200ms ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(156, 163, 175, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(156, 163, 175, 0.1)';
            }}
          >
            Reset reCAPTCHA
          </button>
        </div>
      )}

      {/* reCAPTCHA badge */}
      <div 
        className="recaptcha-badge"
        style={{
          fontSize: '12px',
          color: '#666',
          textAlign: 'center',
          marginTop: '8px'
        }}
      >
        <p style={{ margin: 0, fontFamily: "'Red Hat Text', sans-serif" }}>
          This site is protected by reCAPTCHA and the Google{' '}
          <a 
            href="https://policies.google.com/privacy" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#b12176', textDecoration: 'none' }}
          >
            Privacy Policy
          </a>{' '}
          and{' '}
          <a 
            href="https://policies.google.com/terms" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#b12176', textDecoration: 'none' }}
          >
            Terms of Service
          </a>{' '}
          apply.
        </p>
      </div>
    </div>
  );
}
