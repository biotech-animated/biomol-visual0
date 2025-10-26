export async function verifyTurnstile(token: string): Promise<boolean> {
  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return false;
  }
}

export async function verifyRecaptcha(token: string): Promise<{ success: boolean; score?: number }> {
  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      {
        method: 'POST',
      }
    );

    const data = await response.json();
    return {
      success: data.success === true && (data.score === undefined || data.score >= 0.5),
      score: data.score,
    };
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return { success: false };
  }
}

export function checkHoneypot(honeypotValue: string): boolean {
  return honeypotValue === '';
}

export async function verifyBotProtection(
  turnstileToken: string | null,
  recaptchaToken: string | null,
  honeypot: string
): Promise<{ success: boolean; message?: string }> {
  if (!checkHoneypot(honeypot)) {
    return { success: false, message: 'Bot detected (honeypot)' };
  }

  if (turnstileToken) {
    const turnstileValid = await verifyTurnstile(turnstileToken);
    if (!turnstileValid) {
      return { success: false, message: 'Turnstile verification failed' };
    }
  }

  if (recaptchaToken) {
    const recaptchaResult = await verifyRecaptcha(recaptchaToken);
    if (!recaptchaResult.success) {
      return { success: false, message: 'reCAPTCHA verification failed' };
    }
  }

  return { success: true };
}
