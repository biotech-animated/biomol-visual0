import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, telephone, interest, hearAbout, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !interest) {
      return NextResponse.json(
        { error: 'Missing required fields' },
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
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #b12176; border-bottom: 2px solid #b12176; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${telephone ? `<p><strong>Telephone:</strong> ${telephone}</p>` : ''}
            <p><strong>Interest:</strong> ${interest}</p>
            ${hearAbout ? `<p><strong>How they heard about us:</strong> ${hearAbout}</p>` : ''}
          </div>
          
          ${message ? `
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Project Description</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This email was sent from the Biomol Visual contact form.</p>
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
      subject: 'Thank you for contacting us - Biomol Visual',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #b12176; border-bottom: 2px solid #b12176; padding-bottom: 10px;">
            Thank you for reaching out!
          </h2>
          
          <p>Dear ${firstName} ${lastName},</p>
          
          <p>Thank you for contacting Biomol Visual. We have received your message and our team will get back to you shortly.</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your Message Details</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${telephone ? `<p><strong>Telephone:</strong> ${telephone}</p>` : ''}
            <p><strong>Interest:</strong> ${interest}</p>
            ${hearAbout ? `<p><strong>How you heard about us:</strong> ${hearAbout}</p>` : ''}
            ${message ? `<p><strong>Your Message:</strong><br><span style="white-space: pre-wrap;">${message}</span></p>` : ''}
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
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending contact form email:', error);
    
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
      { error: 'Failed to send contact form. Please try again later.' },
      { status: 500 }
    );
  }
}
