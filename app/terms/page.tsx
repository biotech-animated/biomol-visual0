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
              {/* Welcome */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  Welcome to Biomol Visual
                </h2>
                <p>
                  These Terms of Service (&quot;Terms&quot;) apply to your use of the Biomol Visual website at biomolvisual.com. By using our website, you agree to these terms. If you don&apos;t agree, please don&apos;t use our website.
                </p>
                <p className="mt-4">
                  We&apos;re Biomol Visual LLP, and we create molecular and cellular visualizations for biotech companies. This website showcases our work and provides information about our services.
                </p>
              </section>

              {/* Using Our Website */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  Using Our Website
                </h2>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  What You Can Do
                </h3>
                <p>
                  You&apos;re welcome to:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>Browse our portfolio and case studies</li>
                  <li>Learn about our services</li>
                  <li>Contact us about potential projects</li>
                  <li>Share links to our content (with attribution)</li>
                </ul>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  What You Can&apos;t Do
                </h3>
                <p>
                  Please don&apos;t:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>Copy our animations or portfolio work without permission</li>
                  <li>Use automated tools to scrape or download our content</li>
                  <li>Try to hack or disrupt our website</li>
                  <li>Pretend to be us or misrepresent your relationship with us</li>
                  <li>Use our website for anything illegal</li>
                </ul>
              </section>

              {/* Our Content */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  Our Content
                </h2>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  What We Own
                </h3>
                <p>
                  All the content on our website is protected by copyright, including:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>Our molecular animations and visualizations</li>
                  <li>Our website design and text</li>
                  <li>Our logo and brand name</li>
                  <li>Our blog posts and articles</li>
                </ul>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  Portfolio Work
                </h3>
                <p>
                  The scientific animations in our portfolio are shown with our clients&apos; permission. These projects often contain confidential information and proprietary science. You cannot use, copy, or distribute these animations without written permission from both us and the client.
                </p>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  Using Our Content
                </h3>
                <p>
                  If you want to use something from our website (like featuring our work in an article), please email us at hello@biomolvisual.com. We&apos;re usually happy to help with reasonable requests.
                </p>
              </section>

              {/* When You Contact Us */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  When You Contact Us
                </h2>
                <p>
                  When you fill out our contact form or email us:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>We&apos;ll use your information to respond to your inquiry</li>
                  <li>Please don&apos;t send us confidential information unless we&apos;ve signed an NDA first</li>
                  <li>Any ideas or suggestions you share with us become our property (this is standard so we can use feedback to improve)</li>
                </ul>
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
                  We take your privacy seriously. Please read our{' '}
                  <a
                    href="/privacy"
                    className="text-[#9B59D0] hover:text-[#ED8936] transition-colors underline"
                  >
                    Privacy Policy
                  </a>
                  {' '}to understand how we handle your information.
                </p>
              </section>

              {/* Important Disclaimers */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  Important Disclaimers
                </h2>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  Website Availability
                </h3>
                <p>
                  We try to keep our website running smoothly, but:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>Sometimes it might be down for maintenance</li>
                  <li>We might have technical issues</li>
                  <li>We might update or change content without notice</li>
                </ul>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  Not Medical Advice
                </h3>
                <p>
                  Our animations are scientific visualizations for educational and communication purposes. They&apos;re not medical advice. Don&apos;t make health decisions based on our portfolio pieces.
                </p>

                <h3
                  className="text-lg font-medium mb-3 mt-6"
                  style={{ color: 'var(--bmv-orange)' }}
                >
                  Third-Party Links
                </h3>
                <p>
                  We sometimes link to other websites. We&apos;re not responsible for their content or practices.
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
                <p>
                  This is the part where we limit our financial responsibility (every website has this):
                </p>
                <p className="mt-4">
                  <strong>If something goes wrong with our website</strong>, our maximum liability to you is $100. We won&apos;t be responsible for indirect damages like lost profits or data loss from using our website.
                </p>
                <p className="mt-4">
                  This only applies to the website itself - not our actual animation services, which are covered by separate client agreements.
                </p>
              </section>


              {/* Changes to These Terms */}
              <section>
                <h2
                  className="text-responsive-md mb-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  Changes to These Terms
                </h2>
                <p>
                  We might update these Terms occasionally. If we make significant changes, we&apos;ll update the date at the top. Continuing to use our website after changes means you accept the new terms.
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
                  These Terms are governed by the laws of California, USA. Any disputes would be handled in California courts.
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
                <p className="mb-4">
                  Questions about these Terms or our Privacy Policy?
                </p>
                <div
                  className="mt-6 p-6 rounded-lg"
                  style={{
                    background: 'var(--bmv-surface)',
                    border: '1px solid rgba(183, 148, 246, 0.2)'
                  }}
                >
                  <p className="mb-2">
                    <strong>Email:</strong> legal@biomolvisual.com
                  </p>
                  <p className="mb-2">
                    <strong>General inquiries:</strong> hello@biomolvisual.com
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
