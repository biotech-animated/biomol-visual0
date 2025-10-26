# Biomol Visual

A Next.js application for Biomol Visual showcasing case studies, team information, and contact forms.

## Environment Setup

### Email Configuration

This application uses Nodemailer to send emails through SMTP. To enable email functionality, you need to configure the following environment variables:

1. Create a `.env.local` file in the root directory
2. Add the following environment variables:

```env
# SMTP Configuration for Email Sending
SMTP_HOST=smtp.zoho.com
SMTP_PORT=587
SMTP_USER=your-email@biomolvisual.com
SMTP_PASS=your-app-password
SMTP_FROM=info@biomolvisual.com
SMTP_TO=info@biomolvisual.com
```

### Email Service Options

#### Zoho Mail (Default)
- Host: `smtp.zoho.com`
- Port: `587`
- Requires: App-specific password (not your regular password)

#### Gmail
- Host: `smtp.gmail.com`
- Port: `587`
- Requires: App-specific password (enable 2FA and generate app password)

#### Outlook/Hotmail
- Host: `smtp-mail.outlook.com`
- Port: `587`
- Requires: Your regular password

### Getting App-Specific Passwords

#### For Zoho Mail:
1. Go to Zoho Mail settings
2. Navigate to Security → App Passwords
3. Generate a new app password
4. Use this password in `SMTP_PASS`

#### For Gmail:
1. Enable 2-Factor Authentication
2. Go to Google Account settings
3. Security → App passwords
4. Generate a new app password
5. Use this password in `SMTP_PASS`

## Development

```bash
npm install
npm run dev
```

## Deployment

Make sure to set the environment variables in your deployment platform (Vercel, Netlify, etc.).

## Troubleshooting

### Email Authentication Errors

If you see "535 Authentication Failed" errors:

1. Verify your `SMTP_USER` and `SMTP_PASS` are correctly set
2. Ensure you're using an app-specific password, not your regular password
3. Check that your email service allows SMTP access
4. Verify the SMTP host and port are correct for your email provider

### Common Issues

- **Missing environment variables**: The app will show "Email service not configured" error
- **Wrong credentials**: Check your username and app-specific password
- **SMTP blocked**: Some email providers block SMTP from certain IPs or require whitelisting
