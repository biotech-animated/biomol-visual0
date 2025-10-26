// reCAPTCHA v3 utility functions

export interface RecaptchaResponse {
  success: boolean;
  'error-codes'?: string[];
  challenge_ts?: string;
  hostname?: string;
  score?: number;
  action?: string;
}

/**
 * Verify reCAPTCHA v3 token on the server side
 * @param token - The reCAPTCHA token to verify
 * @param action - The action that was performed (optional, defaults to 'submit')
 * @param minScore - Minimum score threshold (optional, defaults to 0.5)
 */
export async function verifyRecaptchaToken(token: string, action: string = 'submit', minScore: number = 0.5): Promise<boolean> {
  if (!process.env.RECAPTCHA_SECRET_KEY) {
    console.error('RECAPTCHA_SECRET_KEY environment variable is not set');
    return false;
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: token,
        remoteip: '', // Optional: can be added for additional security
      }),
    });

    const data: RecaptchaResponse = await response.json();
    
    if (!data.success) {
      console.error('reCAPTCHA verification failed:', data['error-codes']);
      return false;
    }

    // For reCAPTCHA v3, check the score
    if (data.score !== undefined) {
      if (data.score < minScore) {
        console.warn(`reCAPTCHA score too low: ${data.score} (minimum: ${minScore})`);
        return false;
      }
      
      // Optional: verify the action matches
      if (data.action && data.action !== action) {
        console.warn(`reCAPTCHA action mismatch: expected ${action}, got ${data.action}`);
        return false;
      }
    }

    return true;
  } catch (error) {
    console.error('Error verifying reCAPTCHA token:', error);
    return false;
  }
}

/**
 * Load reCAPTCHA v3 script dynamically
 */
export function loadRecaptchaScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    // Check if script is already loaded
    if (document.querySelector('script[src*="recaptcha"]')) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load reCAPTCHA script'));
    
    document.head.appendChild(script);
  });
}

/**
 * Execute reCAPTCHA v3 and get token
 * @param action - The action to perform (defaults to 'submit')
 */
export function executeRecaptcha(action: string = 'submit'): Promise<string> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.grecaptcha) {
      reject(new Error('reCAPTCHA not loaded'));
      return;
    }

    window.grecaptcha.ready(() => {
      window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!, {
        action: action
      }).then((token: string) => {
        resolve(token);
      }).catch((error: any) => {
        reject(error);
      });
    });
  });
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
      render: (container: HTMLElement, options: {
        sitekey: string;
        callback: (token: string) => void;
        'expired-callback'?: () => void;
        'error-callback'?: () => void;
      }) => number;
      reset: (widgetId: number) => void;
    };
  }
}
