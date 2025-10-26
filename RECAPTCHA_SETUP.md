# Google reCAPTCHA Integration

This project now includes Google reCAPTCHA v2 integration with the classic "I'm not a robot" checkbox to protect all forms against spam and bot submissions.

## Setup Instructions

### 1. Get reCAPTCHA Keys

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Create a new site with **reCAPTCHA v2** (not v3)
3. Select **"I'm not a robot" Checkbox** option
4. Add your domain(s) to the site
5. Copy the **Site Key** and **Secret Key**

### 2. Environment Variables

Add the following environment variables to your `.env.local` file:

```bash
# Google reCAPTCHA Configuration
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key_here
```

### 3. Forms Protected

The following forms now include reCAPTCHA protection:

- **ContactForm.tsx** - Contact form with visible reCAPTCHA checkbox
- **JoinUsModal.tsx** - Job application form with visible reCAPTCHA checkbox  
- **CaseStudiesForm.tsx** - Case study request form with visible reCAPTCHA checkbox

### 4. How It Works

1. **Frontend**: The reCAPTCHA checkbox loads automatically when forms are opened
2. **User Interaction**: Users must click the "I'm not a robot" checkbox
3. **Verification**: Google may show additional challenges (image selection, etc.)
4. **Token Generation**: Once verified, reCAPTCHA generates a token
5. **Backend**: API routes verify the token with Google's servers before processing submissions
6. **Error Handling**: Users see clear error messages if reCAPTCHA verification fails

### 5. What Users Will See

- **Classic reCAPTCHA checkbox** with "I'm not a robot" text
- **Google reCAPTCHA logo** and branding
- **Privacy policy links** as required by Google
- **Reset button** to refresh the reCAPTCHA if needed
- **Status indicator** showing when reCAPTCHA is loaded and ready

### 6. API Endpoints Updated

All form submission endpoints now verify reCAPTCHA tokens:

- `/api/send-contact`
- `/api/send-join-us-application` 
- `/api/send-case-study-request`

### 7. Features

- **Visible reCAPTCHA**: Uses reCAPTCHA v2 with the familiar checkbox interface
- **Server-side verification**: All tokens are verified on the backend
- **Error handling**: Clear error messages for failed verification
- **Reset functionality**: Users can reset reCAPTCHA if needed
- **Responsive design**: Works on all device sizes
- **Privacy compliance**: Includes Google's required privacy policy links

### 8. Testing

To test the integration:

1. Set up your reCAPTCHA keys in environment variables
2. Open any form on the website
3. You should see the classic "I'm not a robot" checkbox
4. Click the checkbox and complete any challenges
5. Fill out and submit the form
6. Check browser console for any reCAPTCHA-related errors
7. Verify that submissions work with valid tokens and fail without them

### 9. Troubleshooting

**Common Issues:**

- **"reCAPTCHA not loaded"**: Check that `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is set correctly
- **"reCAPTCHA verification failed"**: Verify `RECAPTCHA_SECRET_KEY` is correct and matches the site key
- **No checkbox visible**: Ensure you're using reCAPTCHA v2 (not v3) and the site key is correct
- **Domain mismatch**: Ensure your domain is added to the reCAPTCHA site configuration
- **Forms not submitting**: Check browser console for JavaScript errors

**Debug Mode:**

Check browser console for these messages:
- "reCAPTCHA loaded successfully"
- "reCAPTCHA token generated: [token]..."

### 10. Security Notes

- Never expose your secret key in client-side code
- Always verify tokens on the server side
- Monitor reCAPTCHA responses for suspicious activity
- Consider implementing additional rate limiting for extra protection

## Files Modified

- `lib/recaptcha.ts` - reCAPTCHA utility functions
- `components/ui/Recaptcha.tsx` - Visible reCAPTCHA checkbox component
- `components/contact/ContactForm.tsx` - Added reCAPTCHA integration
- `components/JoinUsModal.tsx` - Added reCAPTCHA integration
- `components/casestudies/CaseStudiesForm.tsx` - Added reCAPTCHA integration
- `app/api/send-contact/route.ts` - Added token verification
- `app/api/send-join-us-application/route.ts` - Added token verification
- `app/api/send-case-study-request/route.ts` - Added token verification
