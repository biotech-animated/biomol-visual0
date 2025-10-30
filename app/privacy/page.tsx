"use client";
import { PageMetadata } from '../metadata';
import Navigation from '@/components/Navigation';
import ScrollProgress from '@/components/ScrollProgress';
import Footer from '@/components/Footer';
import { Shield, Mail, Lock, Eye, AlertCircle, FileText, Globe, Cookie } from 'lucide-react';

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

            {/* Friendly Intro Callout */}
            <div
              className="mb-12 p-6 rounded-lg"
              style={{
                background: 'linear-gradient(135deg, rgba(155, 89, 208, 0.1) 0%, rgba(237, 137, 54, 0.1) 100%)',
                border: '1px solid rgba(183, 148, 246, 0.3)'
              }}
            >
              <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: 'var(--bmv-orange)' }} />
                <div>
                  <h2
                    className="text-lg font-medium mb-2"
                    style={{
                      fontFamily: "'Red Hat Display', sans-serif",
                      color: 'var(--bmv-text-heading)'
                    }}
                  >
                    We keep privacy simple
                  </h2>
                  <p
                    style={{
                      fontFamily: "'Red Hat Text', sans-serif",
                      fontSize: '16px',
                      lineHeight: '1.8',
                      color: 'var(--bmv-text)'
                    }}
                  >
                    We know privacy matters, especially in biotech where confidentiality is everything. This policy is written in straightforward language so you understand exactly how we handle your information.
                  </p>
                </div>
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
              {/* Hello from Biomol Visual */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  Hello from Biomol Visual
                </h2>
                <p>
                  We&apos;re Biomol Visual LLP, and we create molecular and cellular MOA/MOD visuals for biotech and pharma companies. This Privacy Policy explains how we handle your information when you visit our website or work with us.
                </p>
                <p className="mt-4">
                  We know privacy matters, especially in biotech and pharma where confidentiality is everything. Here&apos;s our straightforward approach to protecting your information.
                </p>
              </section>

              {/* Gradient Separator */}
              <div
                style={{
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent 0%, rgba(155, 89, 208, 0.5) 50%, transparent 100%)',
                  margin: '2rem 0'
                }}
              />

              {/* Information We Collect */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-6 h-6" style={{ color: 'var(--bmv-orange)' }} />
                  <h2
                    className="text-responsive-md"
                    style={{
                      fontFamily: "'Red Hat Display', sans-serif",
                      fontWeight: '500',
                      color: 'var(--bmv-text-heading)'
                    }}
                  >
                    Information We Collect
                  </h2>
                </div>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  When You Contact Us
                </h3>
                <p>
                  If you fill out our contact form or email us, we collect:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>Your name and email</li>
                  <li>Your company name</li>
                  <li>Your phone number (if provided)</li>
                  <li>Whatever you write in your message</li>
                </ul>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  When You Visit Our Website
                </h3>
                <p>
                  Our website automatically collects:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>Your IP address (this is standard for all websites)</li>
                  <li>What pages you visit</li>
                  <li>What browser you&apos;re using</li>
                  <li>How you found us (Google search, direct link, etc.)</li>
                </ul>
                <p className="mt-4">
                  We use Google Analytics to understand our website traffic. It&apos;s anonymous data that helps us improve our site.
                </p>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  When You Become a Client
                </h3>
                <p>
                  If we work together, we&apos;ll also collect:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>Billing information</li>
                  <li>Project details and scientific data</li>
                  <li>Communications about your project</li>
                </ul>
              </section>

              {/* Gradient Separator */}
              <div
                style={{
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent 0%, rgba(237, 137, 54, 0.5) 50%, transparent 100%)',
                  margin: '2rem 0'
                }}
              />

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
                  Here&apos;s what we do with your information:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li><strong>Respond to your inquiries</strong> - If you contact us, we&apos;ll use your info to reply</li>
                  <li><strong>Send project updates</strong> - If you&apos;re a client, we&apos;ll keep you informed</li>
                  <li><strong>Improve our website</strong> - Analytics help us understand what&apos;s working</li>
                  <li><strong>Process payments</strong> - For client invoicing</li>
                  <li><strong>Send newsletters</strong> - Only if you explicitly sign up</li>
                </ul>
                <div
                  className="mt-6 p-6 rounded-lg"
                  style={{
                    background: 'rgba(34, 197, 94, 0.05)',
                    border: '1px solid rgba(34, 197, 94, 0.2)'
                  }}
                >
                  <p className="font-medium">
                    We don&apos;t sell your information. Ever. We don&apos;t share it with third parties for marketing. We&apos;re a small team focused on doing great work, not playing games with your data.
                  </p>
                </div>
              </section>

              {/* Gradient Separator */}
              <div
                style={{
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent 0%, rgba(155, 89, 208, 0.5) 50%, transparent 100%)',
                  margin: '2rem 0'
                }}
              />

              {/* Protecting Client Confidentiality */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6" style={{ color: 'var(--bmv-orange)' }} />
                  <h2
                    className="text-responsive-md"
                    style={{
                      fontFamily: "'Red Hat Display', sans-serif",
                      fontWeight: '500',
                      color: 'var(--bmv-text-heading)'
                    }}
                  >
                    Protecting Client Confidentiality
                  </h2>
                </div>
                <p>
                  This is critical for us. When you share scientific data:
                </p>
                <div
                  className="mt-6 p-6 rounded-lg"
                  style={{
                    background: 'rgba(155, 89, 208, 0.05)',
                    border: '1px solid rgba(155, 89, 208, 0.2)'
                  }}
                >
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Lock className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--bmv-orange)' }} />
                      <div>
                        <strong>We sign NDAs</strong> before you share anything confidential
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Lock className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--bmv-orange)' }} />
                      <div>
                        <strong>Access is restricted</strong> to only team members working on your project
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Lock className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--bmv-orange)' }} />
                      <div>
                        <strong>Files are encrypted</strong> during storage and transfer
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Lock className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--bmv-orange)' }} />
                      <div>
                        <strong>We delete files</strong> when you ask us to after project completion
                      </div>
                    </li>
                  </ul>
                  <p className="mt-4 font-medium">
                    Your scientific breakthroughs stay confidential. Period.
                  </p>
                </div>
              </section>

              {/* Gradient Separator */}
              <div
                style={{
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent 0%, rgba(237, 137, 54, 0.5) 50%, transparent 100%)',
                  margin: '2rem 0'
                }}
              />

              {/* Cookies */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Cookie className="w-6 h-6" style={{ color: 'var(--bmv-orange)' }} />
                  <h2
                    className="text-responsive-md"
                    style={{
                      fontFamily: "'Red Hat Display', sans-serif",
                      fontWeight: '500',
                      color: 'var(--bmv-text-heading)'
                    }}
                  >
                    Cookies
                  </h2>
                </div>
                <p>
                  Our website uses cookies (small text files) for:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li><strong>Google Analytics</strong> - Understanding website usage</li>
                  <li><strong>Basic functionality</strong> - Remembering your preferences</li>
                </ul>
                <p className="mt-4">
                  You can block cookies in your browser settings. The website will still work fine.
                </p>
              </section>

              {/* Who We Share Information With */}
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
                  We only share your information with:
                </p>
                <div
                  className="mt-6 p-6 rounded-lg"
                  style={{
                    background: 'var(--bmv-surface)',
                    border: '1px solid rgba(183, 148, 246, 0.2)'
                  }}
                >
                  <h3
                    className="text-lg font-medium mb-3"
                    style={{ color: 'var(--bmv-orange)' }}
                  >
                    Service providers we need to run our business:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Payment processors (for invoicing)</li>
                    <li>Cloud storage (for file delivery)</li>
                    <li>Email services (for communication)</li>
                  </ul>

                  <h3
                    className="text-lg font-medium mb-3 mt-6"
                    style={{ color: 'var(--bmv-orange)' }}
                  >
                    Legal requirements:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>If legally required by court order or law enforcement (this has never happened)</li>
                  </ul>
                  <p className="mt-4 text-sm" style={{ color: 'var(--bmv-text-secondary)' }}>
                    These services are contractually required to protect your data and only use it to provide their service.
                  </p>
                </div>
              </section>

              {/* Gradient Separator */}
              <div
                style={{
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent 0%, rgba(155, 89, 208, 0.5) 50%, transparent 100%)',
                  margin: '2rem 0'
                }}
              />

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
                  Your Rights
                </h2>
                <p>
                  You can:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li><strong>Ask what information we have</strong> about you</li>
                  <li><strong>Request corrections</strong> if something&apos;s wrong</li>
                  <li><strong>Ask us to delete your information</strong> (unless we legally need to keep it)</li>
                  <li><strong>Opt out of marketing emails</strong> (there&apos;s an unsubscribe link in every email)</li>
                  <li><strong>Request your data</strong> in a portable format</li>
                </ul>
                <p className="mt-4">
                  Just email us at legal@biomolvisual.com and we&apos;ll help you out.
                </p>
              </section>

              {/* Data Storage & International Transfers */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6" style={{ color: 'var(--bmv-orange)' }} />
                  <h2
                    className="text-responsive-md"
                    style={{
                      fontFamily: "'Red Hat Display', sans-serif",
                      fontWeight: '500',
                      color: 'var(--bmv-text-heading)'
                    }}
                  >
                    Data Storage &amp; International Transfers
                  </h2>
                </div>
                <p>
                  We&apos;re UK-registered but our team works from the US and Canada. Your data might be processed in any of these countries. By using our website or services, you&apos;re okay with this.
                </p>
                <p className="mt-4">
                  We keep your information only as long as needed:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li><strong>Client projects:</strong> Duration of project plus any agreed retention</li>
                  <li><strong>Contact inquiries:</strong> 2 years</li>
                  <li><strong>Newsletter subscribers:</strong> Until you unsubscribe</li>
                  <li><strong>Website analytics:</strong> 26 months (Google Analytics default)</li>
                </ul>
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
                  Our website is for business purposes. We don&apos;t knowingly collect information from anyone under 16. If we find out we have, we&apos;ll delete it.
                </p>
              </section>

              {/* Gradient Separator */}
              <div
                style={{
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent 0%, rgba(237, 137, 54, 0.5) 50%, transparent 100%)',
                  margin: '2rem 0'
                }}
              />

              {/* Security */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-6 h-6" style={{ color: 'var(--bmv-orange)' }} />
                  <h2
                    className="text-responsive-md"
                    style={{
                      fontFamily: "'Red Hat Display', sans-serif",
                      fontWeight: '500',
                      color: 'var(--bmv-text-heading)'
                    }}
                  >
                    Security
                  </h2>
                </div>
                <p>
                  We protect your information with:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>SSL encryption on our website</li>
                  <li>Password-protected accounts</li>
                  <li>Encrypted file storage</li>
                  <li>Limited access (only team members who need it)</li>
                </ul>
                <p className="mt-4">
                  No system is perfect, but we take security seriously and follow industry best practices.
                </p>
              </section>

              {/* Updates to This Policy */}
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
                  We might update this policy occasionally. If we make big changes, we&apos;ll:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>Update the date at the top</li>
                  <li>Post a notice on our website</li>
                  <li>Email you if it&apos;s a major change affecting you</li>
                </ul>
              </section>

              {/* California & EU/UK Residents */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  California &amp; EU/UK Residents
                </h2>
                <p>
                  If you&apos;re in California, you have additional rights under CCPA. If you&apos;re in the EU or UK, you have additional rights under GDPR. These include enhanced rights to access, delete, and control your data. Contact us at legal@biomolvisual.com to exercise these rights.
                </p>
              </section>

              {/* Gradient Separator */}
              <div
                style={{
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent 0%, rgba(155, 89, 208, 0.5) 50%, transparent 100%)',
                  margin: '2rem 0'
                }}
              />

              {/* Contact Us */}
              <section className="border-t border-[#9B59D0]/20 pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-6 h-6" style={{ color: 'var(--bmv-orange)' }} />
                  <h2
                    className="text-responsive-md"
                    style={{
                      fontFamily: "'Red Hat Display', sans-serif",
                      fontWeight: '500',
                      color: 'var(--bmv-text-heading)'
                    }}
                  >
                    Questions or Concerns?
                  </h2>
                </div>
                <p className="mb-4">
                  We&apos;re here to help:
                </p>
                <div
                  className="mt-6 p-6 rounded-lg"
                  style={{
                    background: 'var(--bmv-surface)',
                    border: '1px solid rgba(183, 148, 246, 0.2)'
                  }}
                >
                  <p className="mb-2">
                    <strong>Privacy &amp; Legal:</strong> legal@biomolvisual.com
                  </p>
                  <p className="mb-2">
                    <strong>General Inquiries:</strong> hello@biomolvisual.com
                  </p>
                  <p className="mb-3">
                    <strong>Phone:</strong> US: 888-391-0030 | UK: 0800-707-4030
                  </p>
                  <p className="font-medium mb-1" style={{ color: 'var(--bmv-text-heading)' }}>
                    <strong>Mailing Address:</strong>
                  </p>
                  <p>Biomol Visual LLP</p>
                  <p>27 Old Gloucester Street</p>
                  <p>London, United Kingdom</p>
                  <p>WC1N 3AX</p>
                  <div
                    className="mt-6 pt-6"
                    style={{
                      borderTop: '1px solid rgba(183, 148, 246, 0.2)'
                    }}
                  >
                    <p className="mb-2">
                      If you think we&apos;ve mishandled your data, you can also complain to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <strong>UK:</strong> Information Commissioner&apos;s Office (
                        <a
                          href="https://ico.org.uk"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#9B59D0] hover:text-[#ED8936] transition-colors underline"
                        >
                          ico.org.uk
                        </a>
                        )
                      </li>
                      <li><strong>EU:</strong> Your local data protection authority</li>
                    </ul>
                    <p className="mt-4 text-sm" style={{ color: 'var(--bmv-text-secondary)' }}>
                      But please talk to us first - we&apos;re a small team and we&apos;ll do our best to fix any issues.
                    </p>
                  </div>
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
