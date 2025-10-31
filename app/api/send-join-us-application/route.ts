import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { verifyRecaptchaToken } from '@/lib/recaptcha';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      email,
      location,
      improvementAreas,
      universityDegrees,
      linkedinProfile,
      workVision,
      teamFit,
      performanceNeeds,
      passion,
      cvFileName,
      additionalComments,
      recaptchaToken
    } = body;

    // Validate required fields
    if (!firstName || !email || !location || !improvementAreas || improvementAreas.length === 0) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA token
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification required' },
        { status: 400 }
      );
    }

    const isRecaptchaValid = await verifyRecaptchaToken(recaptchaToken, 'job_application');
    if (!isRecaptchaValid) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed' },
        { status: 400 }
      );
    }

    // Validate SMTP environment variables
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP credentials not configured. Please set SMTP_USER and SMTP_PASS environment variables.');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact support.' },
        { status: 500 }
      );
    }

    // Create transporter for Zoho Mail
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.zoho.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    // Email content for admin
    const mailOptions = {
      from: process.env.SMTP_FROM || 'info@biomolvisual.com',
      to: process.env.SMTP_TO || 'info@biomolvisual.com',
      subject: `New Job Application from ${firstName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #9B59D0; border-bottom: 2px solid #9B59D0; padding-bottom: 10px;">
            New Job Application Submission
          </h2>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Applicant Information</h3>
            <p><strong>Name:</strong> ${firstName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Location:</strong> ${location}</p>
            ${linkedinProfile ? `<p><strong>LinkedIn Profile:</strong> <a href="${linkedinProfile}" target="_blank">${linkedinProfile}</a></p>` : ''}
            ${cvFileName ? `<p><strong>CV/Resume:</strong> ${cvFileName}</p>` : ''}
          </div>

          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Areas of Expertise</h3>
            <ul style="margin: 10px 0; padding-left: 20px;">
              ${improvementAreas.map((area: string) => `<li>${area}</li>`).join('')}
            </ul>
          </div>

          ${universityDegrees ? `
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">University Degrees</h3>
            <p style="white-space: pre-wrap;">${universityDegrees}</p>
          </div>
          ` : ''}

          ${workVision ? `
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Work Vision</h3>
            <p style="white-space: pre-wrap;">${workVision}</p>
          </div>
          ` : ''}

          ${teamFit ? `
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Team Fit</h3>
            <p style="white-space: pre-wrap;">${teamFit}</p>
          </div>
          ` : ''}

          ${performanceNeeds ? `
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Performance Needs</h3>
            <p style="white-space: pre-wrap;">${performanceNeeds}</p>
          </div>
          ` : ''}

          ${passion ? `
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Passion & Motivation</h3>
            <p style="white-space: pre-wrap;">${passion}</p>
          </div>
          ` : ''}

          ${additionalComments ? `
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Additional Comments</h3>
            <p style="white-space: pre-wrap;">${additionalComments}</p>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This email was sent from the Biomol Visual job application form.</p>
            <p>Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    };

    // Send admin notification email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to applicant
    const userConfirmationOptions = {
      from: process.env.SMTP_FROM || 'info@biomolvisual.com',
      to: email,
      subject: 'Thank you for your application - Biomol Visual',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #9B59D0; border-bottom: 2px solid #9B59D0; padding-bottom: 10px;">
            Thank you for applying!
          </h2>

          <p>Dear ${firstName},</p>

          <p>Thank you for taking the time to complete your application to join the Biomol Visual team. We have received your submission and our management team will review it carefully.</p>

          <p>If we think working with you is likely to help us grow as a company and further our mission, we will reach out to you in the next 7 days.</p>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your Application Summary</h3>
            <p><strong>Name:</strong> ${firstName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Areas of expertise:</strong> ${improvementAreas.length} selected</p>
            ${cvFileName ? `<p><strong>CV/Resume:</strong> ${cvFileName}</p>` : ''}
          </div>

          <p>We really appreciate your interest in joining our team. Have a great day!</p>

          <p>Best regards,<br>
          The Biomol Visual Team</p>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This is an automated confirmation email. Please do not reply to this message.</p>
            <p>Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    };

    // Send user confirmation email
    await transporter.sendMail(userConfirmationOptions);

    return NextResponse.json(
      { message: 'Application submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending job application email:', error);

    // Provide more specific error messages based on the error type
    if (error instanceof Error) {
      if (error.message.includes('EAUTH') || error.message.includes('Authentication Failed')) {
        return NextResponse.json(
          { error: 'Email authentication failed. Please check SMTP credentials.' },
          { status: 500 }
        );
      } else if (error.message.includes('ECONNECTION') || error.message.includes('Connection')) {
        return NextResponse.json(
          { error: 'Unable to connect to email server. Please try again later.' },
          { status: 500 }
        );
      } else if (error.message.includes('JSON')) {
        return NextResponse.json(
          { error: 'Invalid request data format' },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Failed to submit application. Please try again later.' },
      { status: 500 }
    );
  }
}
