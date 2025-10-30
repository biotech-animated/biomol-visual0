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

  if (!token) {
    console.error('reCAPTCHA token is empty');
    return false;
  }

  try {
    console.log('Sending verification request to Google reCAPTCHA...');
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
    console.log('reCAPTCHA verification response:', JSON.stringify(data, null, 2));
    
    if (!data.success) {
      console.error('reCAPTCHA verification failed. Error codes:', data['error-codes']);
      return false;
    }

    // For reCAPTCHA v3, check the score
    if (data.score !== undefined) {
      console.log(`reCAPTCHA score: ${data.score} (minimum required: ${minScore})`);
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

    console.log('reCAPTCHA verification successful!');
    return true;
  } catch (error) {
    console.error('Error verifying reCAPTCHA token:', error);
    return false;
  }
}

// Singleton promise for script loading to prevent duplicate loads
let scriptLoadingPromise: Promise<void> | null = null;

/**
 * Load reCAPTCHA v3 script dynamically with singleton pattern
 * This ensures the script is only loaded once, even if called multiple times
 */
export function loadRecaptchaScript(): Promise<void> {
  // Return existing promise if script is already loading
  if (scriptLoadingPromise) {
    return scriptLoadingPromise;
  }

  // Check if grecaptcha is already available
  if (typeof window !== 'undefined' && window.grecaptcha) {
    return Promise.resolve();
  }

  // Create a new promise that will be reused if multiple calls happen simultaneously
  scriptLoadingPromise = new Promise((resolve, reject) => {
    // Check if grecaptcha became available between the check and promise creation
    if (typeof window !== 'undefined' && window.grecaptcha) {
      scriptLoadingPromise = null; // Reset for next time
      resolve();
      return;
    }

    // Check if script tag already exists in DOM
    const existingScript = document.querySelector('script[src*="recaptcha/api.js"]') as HTMLScriptElement | null;
    
    if (existingScript) {
      // Script tag exists - wait for it to load
      const checkGrecaptcha = () => {
        if (window.grecaptcha) {
          scriptLoadingPromise = null; // Reset for next time
          resolve();
        } else {
          // Continue checking until grecaptcha is available
          setTimeout(checkGrecaptcha, 100);
        }
      };
      checkGrecaptcha();
      return;
    }

    // Get the site key
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!siteKey) {
      scriptLoadingPromise = null; // Reset on error
      reject(new Error('NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not configured'));
      return;
    }

    // Create and load the script
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      // Wait for grecaptcha to be available
      const checkGrecaptcha = () => {
        if (window.grecaptcha) {
          scriptLoadingPromise = null; // Reset for next time
          resolve();
        } else {
          setTimeout(checkGrecaptcha, 100);
        }
      };
      checkGrecaptcha();
    };
    
    script.onerror = () => {
      scriptLoadingPromise = null; // Reset on error
      reject(new Error('Failed to load reCAPTCHA script. Please check your internet connection and try again.'));
    };
    
    document.head.appendChild(script);
  });

  return scriptLoadingPromise;
}

/**
 * Execute reCAPTCHA v3 and get token
 * @param action - The action to perform (defaults to 'submit')
 */
export function executeRecaptcha(action: string = 'submit'): Promise<string> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('reCAPTCHA can only be executed in the browser'));
      return;
    }

    // Get the site key
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!siteKey) {
      reject(new Error('NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not configured'));
      return;
    }

    // Check if grecaptcha is available
    if (!window.grecaptcha) {
      reject(new Error('reCAPTCHA not loaded. Please wait and try again.'));
      return;
    }

    // Use grecaptcha.ready to ensure it's fully initialized
    window.grecaptcha.ready(() => {
      try {
        window.grecaptcha.execute(siteKey, {
          action: action
        }).then((token: string) => {
          if (!token || typeof token !== 'string') {
            reject(new Error('Invalid reCAPTCHA token received'));
            return;
          }
          resolve(token);
        }).catch((error: any) => {
          console.error('reCAPTCHA execution error:', error);
          // Handle case where grecaptcha.execute rejects with null or undefined
          if (error === null || error === undefined) {
            reject(new Error('reCAPTCHA verification returned null. This may indicate a configuration issue with your site key.'));
            return;
          }
          // Ensure we never reject with null
          const errorMessage = error?.message || error?.toString() || 'Failed to execute reCAPTCHA';
          reject(new Error(errorMessage));
        });
      } catch (error: any) {
        console.error('Error calling grecaptcha.execute:', error);
        // Handle case where error is null or undefined
        if (error === null || error === undefined) {
          reject(new Error('reCAPTCHA threw a null error. Please check your reCAPTCHA configuration.'));
          return;
        }
        // Ensure we never reject with null
        const errorMessage = error?.message || error?.toString() || 'Failed to call reCAPTCHA';
        reject(new Error(errorMessage));
      }
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
