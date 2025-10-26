import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { verifyRecaptchaToken } from '@/lib/recaptcha';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, company, email, therapeuticArea, projectDescription, recaptchaToken } = body;

    // Validate required fields
    if (!fullName || !company || !email || !therapeuticArea) {
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

    const isRecaptchaValid = await verifyRecaptchaToken(recaptchaToken);
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
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || 'info@biomolvisual.com',
      to: process.env.SMTP_TO || 'info@biomolvisual.com',
      subject: `New Case Study Request from ${fullName} at ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #b12176; border-bottom: 2px solid #b12176; padding-bottom: 10px;">
            New Case Study Request
          </h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Therapeutic Area:</strong> ${therapeuticArea}</p>
          </div>
          
          ${projectDescription ? `
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Project Description</h3>
            <p style="white-space: pre-wrap;">${projectDescription}</p>
          </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This email was sent from the Biomol Visual case studies request form.</p>
            <p>Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    };

    // Send admin notification email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to user
    const userConfirmationOptions = {
      from: process.env.SMTP_FROM || 'info@biomolvisual.com',
      to: email,
      subject: 'Thank you for your case study request - Biomol Visual',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #b12176; border-bottom: 2px solid #b12176; padding-bottom: 10px;">
            Thank you for your interest!
          </h2>
          
          <p>Dear ${fullName},</p>
          
          <p>Thank you for reaching out to Biomol Visual regarding a case study request. We have received your submission and our team will review it shortly.</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your Request Details</h3>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Therapeutic Area:</strong> ${therapeuticArea}</p>
            ${projectDescription ? `<p><strong>Project Description:</strong><br><span style="white-space: pre-wrap;">${projectDescription}</span></p>` : ''}
          </div>
          
          <p>We typically respond within 1-2 business days. If you have any urgent questions, please don't hesitate to contact us directly.</p>
          
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
      { message: 'Case study request submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending case study request email:', error);
    
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
      }
    }
    
    return NextResponse.json(
      { error: 'Failed to send case study request. Please try again later.' },
      { status: 500 }
    );
  }
}
