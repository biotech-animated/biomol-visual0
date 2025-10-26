'use client';

import { useEffect, useState, useCallback } from 'react';
import { loadRecaptchaScript, executeRecaptcha } from '@/lib/recaptcha';

interface RecaptchaV3Props {
  onTokenGenerated: (token: string) => void;
  onError: (error: string) => void;
  action?: string;
  className?: string;
}

export default function RecaptchaV3({ 
  onTokenGenerated, 
  onError, 
  action = 'submit',
  className = '' 
}: RecaptchaV3Props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);

  const executeRecaptchaV3 = useCallback(async () => {
    if (!isLoaded || isExecuting) return;

    setIsExecuting(true);
    try {
      const token = await executeRecaptcha(action);
      console.log('reCAPTCHA v3 token generated:', token.substring(0, 20) + '...');
      onTokenGenerated(token);
    } catch (error) {
      console.error('Error executing reCAPTCHA v3:', error);
      onError('Failed to verify reCAPTCHA. Please try again.');
    } finally {
      setIsExecuting(false);
    }
  }, [isLoaded, isExecuting, action, onTokenGenerated, onError]);

  useEffect(() => {
    const initializeRecaptcha = async () => {
      try {
        await loadRecaptchaScript();
        
        // Wait for grecaptcha to be available
        const checkGrecaptcha = () => {
          if (window.grecaptcha && typeof window.grecaptcha.execute === 'function') {
            setIsLoaded(true);
            console.log('reCAPTCHA v3 loaded successfully');
          } else {
            setTimeout(checkGrecaptcha, 100);
          }
        };
        
        checkGrecaptcha();
      } catch (error) {
        console.error('Failed to load reCAPTCHA v3:', error);
        onError('Failed to load reCAPTCHA. Please refresh the page and try again.');
      }
    };

    initializeRecaptcha();
  }, [onError]);

  // Expose the execute function for external use
  useEffect(() => {
    // Store the execute function on the component instance for external access
    (window as any).executeRecaptchaV3 = executeRecaptchaV3;
    
    return () => {
      delete (window as any).executeRecaptchaV3;
    };
  }, [executeRecaptchaV3]);

  return (
    <div className={`recaptcha-v3-container ${className}`}>
      {/* Invisible reCAPTCHA v3 - no visible UI */}
      {isLoaded && (
        <div 
          style={{
            fontSize: '12px',
            color: '#666',
            textAlign: 'center',
            marginTop: '8px',
            fontFamily: "'Red Hat Text', sans-serif"
          }}
        >
          ✓ reCAPTCHA v3 protection active
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

// Export a hook for easy token generation
export function useRecaptchaV3(action: string = 'submit') {
  const [token, setToken] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isExecuting, setIsExecuting] = useState(false);

  const generateToken = useCallback(async () => {
    if (isExecuting) return;

    setIsExecuting(true);
    setError('');
    
    try {
      const newToken = await executeRecaptcha(action);
      setToken(newToken);
      return newToken;
    } catch (err) {
      const errorMessage = 'Failed to verify reCAPTCHA. Please try again.';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsExecuting(false);
    }
  }, [action, isExecuting]);

  return {
    token,
    error,
    isExecuting,
    generateToken,
    clearToken: () => setToken(''),
    clearError: () => setError('')
  };
}
