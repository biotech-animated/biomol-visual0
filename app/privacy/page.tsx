"use client";
import { PageMetadata } from '../metadata';
import Navigation from '@/components/Navigation';
import ScrollProgress from '@/components/ScrollProgress';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <>
      <PageMetadata
        title="Privacy Policy - Biomol Visual"
        description="Privacy Policy for Biomol Visual LLP. Learn how we collect, use, and protect your personal information."
        keywords="privacy policy, data protection, biomol visual privacy, GDPR compliance"
      />
      <div className="min-h-screen bg-[#1B0A2E]">
        <ScrollProgress />
        <Navigation />

        <main className="section-responsive" style={{ paddingTop: 'var(--space-12)' }}>
          <div className="max-w-4xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-12">
              <h1
                className="text-responsive-lg mb-4"
                style={{
                  fontFamily: "'Red Hat Display', sans-serif",
                  fontWeight: '500',
                  color: 'var(--bmv-text-heading)'
                }}
              >
                Privacy Policy
              </h1>
              <div
                className="text-responsive-sm mb-2"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  color: 'var(--bmv-text-secondary)'
                }}
              >
                <p><strong>Effective Date:</strong> November 1, 2025</p>
                <p><strong>Last Updated:</strong> November 1, 2025</p>
              </div>
            </div>

            {/* Contact Information Box */}
            <div
              className="mb-12 p-6 rounded-lg"
              style={{
                background: 'var(--bmv-surface)',
                border: '1px solid rgba(183, 148, 246, 0.2)'
              }}
            >
              <h2
                className="text-lg font-medium mb-4"
                style={{
                  fontFamily: "'Red Hat Display', sans-serif",
                  color: 'var(--bmv-text-heading)'
                }}
              >
                Contact Information
              </h2>
              <div
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '16px',
                  lineHeight: '1.8',
                  color: 'var(--bmv-text)'
                }}
              >
                <p className="font-medium mb-1" style={{ color: 'var(--bmv-text-heading)' }}>Biomol Visual LLP</p>
                <p>27 Old Gloucester Street</p>
                <p>London, United Kingdom</p>
                <p className="mb-3">WC1N 3AX</p>
                <p><strong>Privacy Inquiries:</strong> privacy@biomolvisual.com</p>
                <p><strong>General Inquiries:</strong> hello@biomolvisual.com</p>
                <p><strong>US Phone:</strong> 888-391-0030</p>
                <p><strong>UK Phone:</strong> 0800-707-4030</p>
              </div>
            </div>

            {/* Content */}
            <div
              className="space-y-8"
              style={{
                fontFamily: "'Red Hat Text', sans-serif",
                fontSize: '16px',
                lineHeight: '1.8',
                color: 'var(--bmv-text)'
              }}
            >
              {/* Introduction */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  Introduction
                </h2>
                <p>
                  This Privacy Policy explains how Biomol Visual LLP (&quot;Biomol Visual,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and protects your personal information when you visit our website biomolvisual.com or use our services.
                </p>
                <p className="mt-4">
                  We specialize in molecular and cellular mechanism of action (MOA) visualizations for biotech and pharmaceutical companies. We take the protection of your information seriously, especially given the confidential nature of the scientific data our clients entrust to us.
                </p>
              </section>

              {/* Information We Collect */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  Information We Collect
                </h2>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  Information You Provide to Us
                </h3>
                <p>
                  We collect information you voluntarily provide when you:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li><strong>Contact us through our website forms</strong> (name, email, company name, phone number, message content)</li>
                  <li><strong>Book a strategy call</strong> (name, email, company, preferred meeting time)</li>
                  <li><strong>Subscribe to our newsletter</strong> (email address)</li>
                  <li><strong>Become a client</strong> (billing information, project details, scientific data)</li>
                  <li><strong>Apply for a position</strong> (resume, portfolio, contact information)</li>
                </ul>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  Information Automatically Collected
                </h3>
                <p>
                  When you visit our website, we automatically collect:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li><strong>Technical information:</strong> IP address, browser type, operating system, device information</li>
                  <li><strong>Usage data:</strong> Pages visited, time spent on pages, links clicked, referring website</li>
                  <li><strong>Cookies and similar technologies:</strong> See our Cookie Policy section below</li>
                </ul>
              </section>

              {/* How We Use Your Information */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  How We Use Your Information
                </h2>
                <p>
                  We use your information to:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li><strong>Provide our services:</strong> Create visualizations, manage projects, deliver final assets</li>
                  <li><strong>Communicate with you:</strong> Respond to inquiries, send project updates, provide customer support</li>
                  <li><strong>Process payments:</strong> Handle billing and invoicing for our services</li>
                  <li><strong>Improve our services:</strong> Analyze website usage, enhance user experience</li>
                  <li><strong>Marketing:</strong> Send newsletters and updates (only with your consent)</li>
                  <li><strong>Legal compliance:</strong> Meet legal obligations and protect our rights</li>
                </ul>
              </section>

              {/* Legal Basis */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  Legal Basis for Processing (For UK/EU Visitors)
                </h2>
                <p>
                  We process your personal data based on:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li><strong>Contract:</strong> When necessary to provide our services</li>
                  <li><strong>Consent:</strong> For marketing communications and cookies</li>
                  <li><strong>Legitimate interests:</strong> For business operations, security, and fraud prevention</li>
                  <li><strong>Legal obligations:</strong> When required by law</li>
                </ul>
              </section>

              {/* Scientific Data Protection */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  How We Protect Your Scientific Data
                </h2>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  Client Confidentiality Commitment
                </h3>
                <p>
                  When you become a client, we understand you&apos;re entrusting us with valuable scientific information. We protect your data through:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li><strong>Non-Disclosure Agreements:</strong> We execute mutual NDAs before receiving any confidential information</li>
                  <li><strong>Access Controls:</strong> Only assigned team members can access your project data</li>
                  <li><strong>Secure Storage:</strong> All files are encrypted using industry-standard encryption</li>
                  <li><strong>Data Deletion:</strong> We delete project files upon request after project completion</li>
                  <li><strong>No Unauthorized Sharing:</strong> We never share your scientific data with third parties without explicit permission</li>
                </ul>
              </section>

              {/* Cookies */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  Cookies and Tracking Technologies
                </h2>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  What Are Cookies?
                </h3>
                <p>
                  Cookies are small text files placed on your device when you visit our website. We use them to improve your experience and understand how our site is used.
                </p>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  Types of Cookies We Use
                </h3>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website (Google Analytics)</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and choices</li>
                </ul>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  Managing Cookies
                </h3>
                <p>
                  You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.
                </p>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  Google Analytics
                </h3>
                <p>
                  We use Google Analytics to understand website usage. Google Analytics collects information such as how often users visit our site, what pages they visit, and what other sites they used prior to coming to our site. We use this information to improve our website and services.
                </p>
                <p className="mt-4">
                  You can opt out of Google Analytics by visiting:{' '}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9B59D0] hover:text-[#ED8936] transition-colors underline"
                  >
                    https://tools.google.com/dlpage/gaoptout
                  </a>
                </p>
              </section>

              {/* Information Sharing */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  Who We Share Information With
                </h2>
                <p>
                  We do not sell, trade, or rent your personal information. We may share your information with:
                </p>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  Service Providers
                </h3>
                <p>
                  We work with trusted third parties who help us operate our business:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>Payment processors (for billing)</li>
                  <li>Cloud storage providers (for file storage)</li>
                  <li>Email service providers (for communications)</li>
                  <li>Analytics providers (for website improvements)</li>
                </ul>
                <p className="mt-4">
                  These providers are contractually obligated to protect your information and use it only for the services they provide to us.
                </p>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  Legal Requirements
                </h3>
                <p>
                  We may disclose your information if required to:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>Comply with legal obligations</li>
                  <li>Respond to lawful requests from public authorities</li>
                  <li>Protect our rights, privacy, safety, or property</li>
                  <li>Enforce our terms of service</li>
                </ul>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  Business Transfers
                </h3>
                <p>
                  If Biomol Visual is involved in a merger, acquisition, or sale of assets, your information may be transferred. We will notify you before your information becomes subject to a different privacy policy.
                </p>
              </section>

              {/* Data Retention */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  Data Retention
                </h2>
                <p>
                  We retain your information only as long as necessary for the purposes outlined in this policy:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li><strong>Client project data:</strong> Duration of project plus any agreed retention period</li>
                  <li><strong>Contact form inquiries:</strong> 2 years from last communication</li>
                  <li><strong>Marketing lists:</strong> Until you unsubscribe</li>
                  <li><strong>Website analytics:</strong> 26 months</li>
                  <li><strong>Billing records:</strong> As required by tax and accounting regulations</li>
                </ul>
              </section>

              {/* Your Rights */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  Your Rights and Choices
                </h2>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  Access and Control
                </h3>
                <p>
                  You have the right to:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li><strong>Access</strong> the personal information we hold about you</li>
                  <li><strong>Correct</strong> inaccurate or incomplete information</li>
                  <li><strong>Delete</strong> your personal information (subject to legal requirements)</li>
                  <li><strong>Object</strong> to certain uses of your information</li>
                  <li><strong>Withdraw consent</strong> for marketing communications</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, email us at privacy@biomolvisual.com.
                </p>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  Marketing Communications
                </h3>
                <p>
                  You can opt out of marketing emails by:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>Clicking the &quot;unsubscribe&quot; link in any marketing email</li>
                  <li>Emailing us at privacy@biomolvisual.com</li>
                </ul>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  California Privacy Rights
                </h3>
                <p>
                  If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect and how we use it.
                </p>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  EU/UK Privacy Rights
                </h3>
                <p>
                  If you are in the EU or UK, you have additional rights under GDPR, including:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>Right to data portability</li>
                  <li>Right to restrict processing</li>
                  <li>Right to lodge a complaint with supervisory authorities</li>
                </ul>
              </section>

              {/* International Transfers */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  International Data Transfers
                </h2>
                <p>
                  Biomol Visual LLP is registered in the UK but operates primarily from the United States. Your information may be transferred to and processed in the United States or other countries where our team members are located.
                </p>
                <p className="mt-4">
                  By using our services, you consent to the transfer of your information to countries outside your country of residence, which may have different data protection rules.
                </p>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  Children&apos;s Privacy
                </h2>
                <p>
                  Our website and services are not directed to children under 16. We do not knowingly collect personal information from children under 16. If we learn we have collected information from a child under 16, we will delete that information.
                </p>
              </section>

              {/* Third-Party Links */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  Third-Party Links
                </h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites. We encourage you to read their privacy policies before providing any information.
                </p>
              </section>

              {/* Security */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  Security
                </h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure password requirements</li>
                  <li>Limited access to personal information</li>
                  <li>Regular security assessments</li>
                </ul>
                <p className="mt-4">
                  However, no method of electronic transmission or storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </section>

              {/* Updates to Policy */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  Updates to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>Posting the new policy on our website</li>
                  <li>Updating the &quot;Last Updated&quot; date</li>
                  <li>Sending an email to affected users (for material changes)</li>
                </ul>
                <p className="mt-4">
                  Your continued use of our services after changes constitutes acceptance of the updated policy.
                </p>
              </section>

              {/* Contact Us */}
              <section className="border-t border-[#9B59D0]/20 pt-8">
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  Contact Us
                </h2>
                <p>
                  If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
                </p>
                <div
                  className="mt-6 p-6 rounded-lg"
                  style={{
                    background: 'var(--bmv-surface)',
                    border: '1px solid rgba(183, 148, 246, 0.2)'
                  }}
                >
                  <p className="font-medium mb-1" style={{ color: 'var(--bmv-text-heading)' }}>
                    <strong>Email:</strong> privacy@biomolvisual.com
                  </p>
                  <p className="mb-1">
                    <strong>Phone:</strong> US: 888-391-0030 | UK: 0800-707-4030
                  </p>
                  <p>
                    <strong>Mail:</strong> Biomol Visual LLP, 27 Old Gloucester Street, London, United Kingdom, WC1N 3AX
                  </p>
                  <p className="mt-3">
                    For general inquiries: hello@biomolvisual.com
                  </p>
                </div>
              </section>

              {/* Complaints */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  Complaints
                </h2>
                <p>
                  If you believe we have not handled your personal information properly, you have the right to lodge a complaint with:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>
                    <strong>UK:</strong> Information Commissioner&apos;s Office (ICO) -{' '}
                    <a
                      href="https://ico.org.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#9B59D0] hover:text-[#ED8936] transition-colors underline"
                    >
                      ico.org.uk
                    </a>
                  </li>
                  <li><strong>EU:</strong> Your local data protection authority</li>
                </ul>
              </section>

              {/* Footer Note */}
              <section className="text-center pt-8 pb-12 border-t border-[#9B59D0]/20">
                <p
                  className="text-sm"
                  style={{ color: 'var(--bmv-text-secondary)' }}
                >
                  © 2025 Biomol Visual LLP. All rights reserved.
                </p>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
