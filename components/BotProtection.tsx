'use client';

import { useEffect } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

interface BotProtectionProps {
  onTurnstileVerify: (token: string) => void;
  onRecaptchaVerify: (token: string) => void;
  honeypotValue: string;
  onHoneypotChange: (value: string) => void;
}

function RecaptchaComponent({ onVerify }: { onVerify: (token: string) => void }) {
  const { executeRecaptcha } = useGoogleReCaptcha();

  useEffect(() => {
    const handleRecaptcha = async () => {
      if (!executeRecaptcha) {
        return;
      }

      const token = await executeRecaptcha('submit');
      onVerify(token);
    };

    handleRecaptcha();
  }, [executeRecaptcha, onVerify]);

  return null;
}

export default function BotProtection({
  onTurnstileVerify,
  onRecaptchaVerify,
  honeypotValue,
  onHoneypotChange
}: BotProtectionProps) {
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <>
      {/* Honeypot Field - Hidden from users, bots will fill it */}
      <div
        style={{
          position: 'absolute',
          left: '-9999px',
          width: '1px',
          height: '1px',
          overflow: 'hidden'
        }}
        aria-hidden="true"
      >
        <label htmlFor="website_url">Website</label>
        <input
          type="text"
          id="website_url"
          name="website_url"
          tabIndex={-1}
          autoComplete="off"
          value={honeypotValue}
          onChange={(e) => onHoneypotChange(e.target.value)}
        />
      </div>

      {/* Cloudflare Turnstile - Invisible */}
      {turnstileSiteKey && turnstileSiteKey !== 'your_turnstile_site_key_here' && (
        <div style={{ marginTop: '16px' }}>
          <Turnstile
            siteKey={turnstileSiteKey}
            onSuccess={onTurnstileVerify}
            options={{
              theme: 'dark',
              size: 'invisible',
            }}
          />
        </div>
      )}

      {/* Google reCAPTCHA v3 - Invisible */}
      {recaptchaSiteKey && recaptchaSiteKey !== 'your_recaptcha_site_key_here' && (
        <GoogleReCaptchaProvider reCaptchaKey={recaptchaSiteKey}>
          <RecaptchaComponent onVerify={onRecaptchaVerify} />
        </GoogleReCaptchaProvider>
      )}
    </>
  );
}
