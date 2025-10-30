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
        description="Privacy Policy for Biomol Visual. Learn how we collect, use, and protect your personal information."
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
              <p
                className="text-responsive-sm"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  color: 'var(--bmv-text-secondary)'
                }}
              >
                Last Updated: January 2025
              </p>
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
                  Biomol Visual (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p className="mt-4">
                  By accessing or using our website and services, you agree to the terms of this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access our website or use our services.
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
                  Personal Information
                </h3>
                <p>
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>Fill out contact forms on our website</li>
                  <li>Request information about our services</li>
                  <li>Schedule a consultation or strategy call</li>
                  <li>Subscribe to our newsletter or updates</li>
                  <li>Engage with our team via email or phone</li>
                </ul>
                <p className="mt-4">
                  This information may include:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>Name and job title</li>
                  <li>Company name and information</li>
                  <li>Email address and phone number</li>
                  <li>Professional background and areas of interest</li>
                  <li>Project details and requirements</li>
                </ul>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  Automatically Collected Information
                </h3>
                <p>
                  When you visit our website, we may automatically collect certain information about your device and browsing actions, including:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>IP address and browser type</li>
                  <li>Operating system and device information</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Clickstream data and usage patterns</li>
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
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To deliver our scientific visualization services</li>
                  <li>To schedule and conduct consultations and strategy calls</li>
                  <li>To send you information about our services, updates, and relevant content</li>
                  <li>To improve our website, services, and user experience</li>
                  <li>To analyze website traffic and usage patterns</li>
                  <li>To protect against fraud and ensure security</li>
                  <li>To comply with legal obligations and enforce our terms</li>
                </ul>
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
                  Information Sharing and Disclosure
                </h2>
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  Service Providers
                </h3>
                <p>
                  We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you. These providers are contractually obligated to keep your information confidential and use it only for the purposes we specify.
                </p>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  Legal Requirements
                </h3>
                <p>
                  We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., court orders, government agencies).
                </p>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  Business Transfers
                </h3>
                <p>
                  In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.
                </p>
              </section>

              {/* Client Confidentiality */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  Client Project Confidentiality
                </h2>
                <p>
                  We understand the sensitive nature of scientific and proprietary information shared during our engagements. We maintain strict confidentiality protocols:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>All client projects are protected under Non-Disclosure Agreements (NDAs)</li>
                  <li>Project files are encrypted using 256-bit AES encryption</li>
                  <li>Access to confidential information is restricted to our core scientific team based in the US and Canada</li>
                  <li>We provide complete data destruction upon project completion, upon request</li>
                  <li>We never share client project details, scientific information, or proprietary data without explicit written consent</li>
                </ul>
              </section>

              {/* Data Security */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  Data Security
                </h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>Industry-standard encryption protocols (SSL/TLS)</li>
                  <li>Secure data storage and transmission</li>
                  <li>Regular security audits and updates</li>
                  <li>Restricted access to personal information</li>
                  <li>Employee training on data protection</li>
                </ul>
                <p className="mt-4">
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
                </p>
              </section>

              {/* Cookies and Tracking */}
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
                <p>
                  We may use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>Remember your preferences and settings</li>
                  <li>Understand how you use our website</li>
                  <li>Improve website functionality and performance</li>
                  <li>Analyze website traffic and usage patterns</li>
                </ul>
                <p className="mt-4">
                  You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.
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
                  Third-Party Websites
                </h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
                </p>
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
                <p>
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Objection:</strong> Object to processing of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your information to another service provider</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, please contact us using the information provided below.
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
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                </p>
                <p className="mt-4">
                  For client project data, we follow the data destruction protocols outlined in our service agreements and NDAs.
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
                  Our website and services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                </p>
              </section>

              {/* International Data Transfers */}
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
                  Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. By using our services, you consent to the transfer of your information to the United States and other countries where we operate.
                </p>
              </section>

              {/* Changes to Privacy Policy */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  Changes to This Privacy Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the &quot;Last Updated&quot; date at the top of this page.
                </p>
                <p className="mt-4">
                  We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
                </p>
              </section>

              {/* Contact Information */}
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
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div
                  className="mt-6 p-6 rounded-lg"
                  style={{
                    background: 'var(--bmv-surface)',
                    border: '1px solid rgba(183, 148, 246, 0.2)'
                  }}
                >
                  <p className="font-medium mb-2" style={{ color: 'var(--bmv-text-heading)' }}>
                    Biomol Visual
                  </p>
                  <p className="mb-1">Email: privacy@biomolvisual.com</p>
                  <p>Website: www.biomolvisual.com/contact</p>
                </div>
              </section>

              {/* Footer Note */}
              <section className="text-center pt-8 pb-12">
                <p
                  className="text-sm"
                  style={{ color: 'var(--bmv-text-secondary)' }}
                >
                  Your privacy is important to us. We are committed to protecting your personal information and handling it responsibly.
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
