# Google reCAPTCHA v3 Integration

This project now includes Google reCAPTCHA v3 integration with invisible protection to protect all forms against spam and bot submissions. reCAPTCHA v3 runs in the background and provides a risk score without requiring user interaction.

## Setup Instructions

### 1. Get reCAPTCHA Keys

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Create a new site with **reCAPTCHA v3** (not v2)
3. Add your domain(s) to the site
4. Copy the **Site Key** and **Secret Key**

### 2. Environment Variables

Add the following environment variables to your `.env.local` file:

```bash
# Google reCAPTCHA v3 Configuration
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key_here
```

### 3. Forms Protected

The following forms now include reCAPTCHA v3 protection:

- **ContactForm.tsx** - Contact form with invisible reCAPTCHA v3
- **JoinUsModal.tsx** - Job application form with invisible reCAPTCHA v3  
- **CaseStudiesForm.tsx** - Case study request form with invisible reCAPTCHA v3

### 4. How It Works

1. **Frontend**: The reCAPTCHA v3 script loads automatically when forms are opened
2. **Background Analysis**: reCAPTCHA v3 analyzes user behavior in the background
3. **Token Generation**: When forms are submitted, reCAPTCHA generates a token with a risk score
4. **Backend**: API routes verify the token with Google's servers and check the risk score
5. **Score Threshold**: Forms are rejected if the risk score is below 0.5 (configurable)
6. **Error Handling**: Users see clear error messages if reCAPTCHA verification fails

### 5. What Users Will See

- **No visible reCAPTCHA widget** - completely invisible to users
- **Smooth user experience** - no interruptions or challenges
- **Google reCAPTCHA badge** - small badge in the corner (required by Google)
- **Privacy policy links** as required by Google

### 6. API Endpoints Updated

All form submission endpoints now verify reCAPTCHA v3 tokens with score checking:

- `/api/send-contact` - Contact form submissions
- `/api/send-case-study-request` - Case study requests  
- `/api/send-join-us-application` - Job applications

### 7. Score Thresholds

The system uses a default minimum score of 0.5:
- **0.9 - 1.0**: Very likely human
- **0.7 - 0.9**: Likely human
- **0.5 - 0.7**: Neutral
- **0.1 - 0.5**: Likely bot (rejected)
- **0.0 - 0.1**: Very likely bot (rejected)

### 8. Actions Used

Each form uses a specific action for better analytics:
- `contact_form` - Contact form submissions
- `case_study_request` - Case study requests
- `job_application` - Job applications

### 9. Benefits of reCAPTCHA v3

- **Better User Experience**: No visible challenges or checkboxes
- **More Accurate**: Uses behavioral analysis instead of simple challenges
- **Analytics**: Provides detailed analytics on bot vs human traffic
- **Mobile Friendly**: Works seamlessly on all devices
- **Accessibility**: No accessibility concerns with invisible protection
