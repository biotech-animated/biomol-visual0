"use client";
import { PageMetadata } from '../metadata';
import Navigation from '@/components/Navigation';
import ScrollProgress from '@/components/ScrollProgress';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <>
      <PageMetadata
        title="Terms of Service - Biomol Visual"
        description="Terms of Service for Biomol Visual LLP. Read our terms and conditions for using our website and services."
        keywords="terms of service, terms and conditions, biomol visual terms"
      />
      <div className="min-h-screen bg-[#1B0A2E]">
        <ScrollProgress />
        <Navigation />

        <main className="pt-32 md:pt-40 pb-20">
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
                Terms of Service
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
              {/* Agreement to Terms */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  Agreement to Terms
                </h2>
                <p>
                  By accessing or using the Biomol Visual website (biomolvisual.com) (&quot;Website&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you disagree with any part of these terms, you do not have permission to access our Website.
                </p>
                <p className="mt-4">
                  <strong>Biomol Visual LLP</strong> (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) reserves the right to update these Terms at any time. We will notify you of any changes by updating the &quot;Last Updated&quot; date.
                </p>
              </section>

              {/* Use of Website */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  Use of Website
                </h2>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  Acceptable Use
                </h3>
                <p>
                  You may use our Website for lawful purposes only. You agree to use the Website in a way that:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>Complies with all applicable laws and regulations</li>
                  <li>Respects the intellectual property rights of others</li>
                  <li>Does not interfere with or disrupt the Website&apos;s operation</li>
                  <li>Does not attempt to gain unauthorized access to any portion of the Website</li>
                </ul>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  Prohibited Uses
                </h3>
                <p>
                  You may not use our Website to:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>Violate any laws or regulations</li>
                  <li>Infringe upon intellectual property rights</li>
                  <li>Transmit malware, viruses, or any destructive code</li>
                  <li>Send spam or unsolicited communications</li>
                  <li>Harvest or collect email addresses or other contact information</li>
                  <li>Engage in any activity that could damage, disable, or impair the Website</li>
                  <li>Attempt to probe, scan, or test the vulnerability of our systems</li>
                  <li>Copy, modify, or distribute our content without permission</li>
                </ul>
              </section>

              {/* Intellectual Property Rights */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  Intellectual Property Rights
                </h2>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  Our Content
                </h3>
                <p>
                  All content on this Website, including but not limited to:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>Text, graphics, logos, images, and animations</li>
                  <li>Audio and video content</li>
                  <li>Software and code</li>
                  <li>Molecular visualizations and scientific animations in our portfolio</li>
                  <li>The compilation of all content on the Website</li>
                </ul>
                <p className="mt-4">
                  is owned by Biomol Visual LLP or our clients and is protected by United States and international copyright, trademark, and other intellectual property laws.
                </p>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  Portfolio and Case Studies
                </h3>
                <p>
                  The scientific animations and visualizations displayed in our portfolio are shown with permission from our clients. These works remain the property of their respective owners and may not be reproduced without written permission from both Biomol Visual and the client.
                </p>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  Limited License
                </h3>
                <p>
                  We grant you a limited, non-exclusive, non-transferable license to access and view our Website for personal, non-commercial purposes. This license does not include any right to:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>Resell or commercially use our Website or its contents</li>
                  <li>Copy, reproduce, or distribute our content</li>
                  <li>Modify or create derivative works based on our content</li>
                  <li>Use data mining, robots, or similar data gathering tools</li>
                </ul>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  Trademarks
                </h3>
                <p>
                  &quot;Biomol Visual&quot; and our logo are trademarks of Biomol Visual LLP. You may not use our trademarks without our prior written permission.
                </p>
              </section>

              {/* User Content */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  User Content
                </h2>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  Contact Forms and Communications
                </h3>
                <p>
                  When you submit information through our contact forms or communicate with us through the Website, you:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>Grant us the right to use this information to respond to your inquiry</li>
                  <li>Warrant that the information you provide is accurate and lawful</li>
                  <li>Agree not to submit any confidential or proprietary information unless covered by a separate Non-Disclosure Agreement</li>
                </ul>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  Feedback
                </h3>
                <p>
                  Any feedback, suggestions, or ideas you provide about our Website or services become our property and may be used without compensation to you.
                </p>
              </section>

              {/* Privacy */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  Privacy
                </h2>
                <p>
                  Your use of our Website is also governed by our Privacy Policy. Please review our Privacy Policy at{' '}
                  <a
                    href="/privacy"
                    className="text-[#9B59D0] hover:text-[#ED8936] transition-colors underline"
                  >
                    biomolvisual.com/privacy
                  </a>
                  , which also governs the Website and informs users of our data collection practices.
                </p>
              </section>

              {/* Disclaimers */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  Disclaimers
                </h2>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  No Warranties
                </h3>
                <p className="uppercase font-medium">
                  THE WEBSITE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                </p>
                <p className="mt-4">
                  We do not warrant that:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>The Website will be uninterrupted, secure, or error-free</li>
                  <li>The information on the Website is accurate, complete, or current</li>
                  <li>Any defects or errors will be corrected</li>
                </ul>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  No Professional Advice
                </h3>
                <p>
                  Content on our Website is for general informational purposes only. It is not intended to constitute professional advice. Scientific visualizations shown in our portfolio are representations and should not be used for medical or research decisions without consulting qualified professionals.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  Limitation of Liability
                </h2>
                <p className="uppercase font-medium">
                  TO THE FULLEST EXTENT PERMITTED BY LAW, BIOMOL VISUAL LLP SHALL NOT BE LIABLE FOR ANY:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4 uppercase font-medium">
                  <li>INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
                  <li>LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES</li>
                  <li>DAMAGES RESULTING FROM YOUR USE OR INABILITY TO USE THE WEBSITE</li>
                  <li>DAMAGES RESULTING FROM ANY UNAUTHORIZED ACCESS TO OUR SERVERS</li>
                  <li>DAMAGES RESULTING FROM ANY THIRD-PARTY CONTENT OR CONDUCT</li>
                </ul>
                <p className="mt-4 uppercase font-medium">
                  EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>
                <p className="mt-4 uppercase font-medium">
                  IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED ONE HUNDRED DOLLARS ($100).
                </p>
              </section>

              {/* Indemnification */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  Indemnification
                </h2>
                <p>
                  You agree to defend, indemnify, and hold harmless Biomol Visual LLP, its officers, directors, employees, and agents, from any claims, damages, obligations, losses, liabilities, costs, or expenses (including attorney&apos;s fees) arising from:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any third-party rights</li>
                  <li>Any content you submit to our Website</li>
                  <li>Your use or misuse of the Website</li>
                </ul>
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
                  Our Website may contain links to third-party websites or services that are not owned or controlled by Biomol Visual LLP. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
                </p>
                <p className="mt-4">
                  You acknowledge and agree that we shall not be responsible or liable for any damage or loss caused by your use of any third-party content, goods, or services.
                </p>
              </section>

              {/* Termination */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  Termination
                </h2>
                <p>
                  We reserve the right to terminate or suspend your access to the Website immediately, without prior notice or liability, for any reason, including breach of these Terms.
                </p>
                <p className="mt-4">
                  Upon termination, your right to use the Website will immediately cease.
                </p>
              </section>

              {/* Governing Law */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  Governing Law
                </h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
                </p>
                <p className="mt-4">
                  You agree to submit to the personal and exclusive jurisdiction of the courts located in California for the resolution of any disputes.
                </p>
              </section>

              {/* Severability */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  Severability
                </h2>
                <p>
                  If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will continue in full force and effect.
                </p>
              </section>

              {/* Entire Agreement */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  Entire Agreement
                </h2>
                <p>
                  These Terms, together with our Privacy Policy, constitute the entire agreement between you and Biomol Visual LLP regarding the use of our Website.
                </p>
              </section>

              {/* Changes to Terms */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  Changes to Terms
                </h2>
                <p>
                  We reserve the right to modify or replace these Terms at any time. If we make material changes, we will provide notice by updating the date at the top of these Terms.
                </p>
                <p className="mt-4">
                  Your continued use of the Website after any changes constitutes acceptance of the new Terms.
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
                  Contact Information
                </h2>
                <p>
                  For questions about these Terms of Service or our Privacy Policy, please contact us:
                </p>
                <div
                  className="mt-6 p-6 rounded-lg"
                  style={{
                    background: 'var(--bmv-surface)',
                    border: '1px solid rgba(183, 148, 246, 0.2)'
                  }}
                >
                  <p className="font-medium mb-1" style={{ color: 'var(--bmv-text-heading)' }}>
                    <strong>Email:</strong> legal@biomolvisual.com
                  </p>
                  <p className="mb-1">
                    <strong>Phone:</strong> US: 888-391-0030 | UK: 0800-707-4030
                  </p>
                  <p>
                    <strong>Mail:</strong> Biomol Visual LLP, 27 Old Gloucester Street, London, United Kingdom, WC1N 3AX
                  </p>
                  <p className="mt-3">
                    For general business inquiries: hello@biomolvisual.com
                  </p>
                </div>
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
