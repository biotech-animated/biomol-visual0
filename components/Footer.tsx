import { Youtube, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const services = [
    'Molecular & Cellular MOA Visualization',
    'Mechanism of Disease (MOD) Visualization',
    'Biotherapeutic Mechanism Visualization',
    'Platform Technology Visualization',
    'Scientific Storytelling'
  ];

  const applications = [
    'Series A/B/C Fundraising',
    'Investor Communications',
    'BD Partnerships',
    'FDA Presentations',
    'Conference Launches',
    'Sales Enablement'
  ];

  const links = [
    { label: 'Terms of Service', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Join Us', href: '#' }
  ];

  const socialLinks = [
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer
      className="section-responsive !pb-8"
      style={{
        background: '#1B0A2E',
        borderTop: '1px solid rgba(183, 148, 246, 0.1)'
      }}
    >
      <div className="container-responsive">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          style={{
            gap: 'var(--space-8)',
            marginBottom: 'var(--space-8)'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <div>
              <div className="flex items-center" style={{ marginBottom: 'var(--space-3)' }}>
                <span
                  className="tracking-tight text-responsive-md"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500'
                  }}
                >
                  <span style={{ color: 'var(--bmv-purple)' }}>BIOMOL</span>
                  <span style={{ color: 'var(--bmv-text-heading)' }}> | </span>
                  <span style={{ color: 'var(--bmv-orange)' }}>VISUAL</span>
                </span>
              </div>
              <p
                className="text-[14px]"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontWeight: '300',
                  color: 'var(--bmv-text-secondary)',
                  marginBottom: 'var(--space-1)'
                }}
              >
                Molecular and Cellular MOA & MOD Visualization Specialists
              </p>
            </div>
            <p
              className="text-[14px]"
              style={{
                fontFamily: "'Red Hat Text', sans-serif",
                fontWeight: '400',
                color: 'var(--bmv-text-secondary)',
                lineHeight: '1.6'
              }}
            >
              We create scientifically precise molecular and cellular mechanism of action visualizations for the world's most innovative biotech companies. Our dedicated team of scientific experts transforms complex science—from biotherapeutic mechanisms to platform technologies—into clear stories that secure funding and drive partnerships.
            </p>
            <div className="flex" style={{ gap: 'var(--space-3)' }}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="footer-social-link"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'var(--bmv-surface)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--bmv-text-secondary)'
                  }}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4
              style={{
                fontFamily: "'Red Hat Display', sans-serif",
                fontSize: '14px',
                fontWeight: '500',
                color: 'var(--bmv-text-heading)',
                marginBottom: 'var(--space-4)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              Services
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="footer-link"
                    style={{
                      fontFamily: "'Red Hat Text', sans-serif",
                      fontSize: '14px',
                      fontWeight: '400',
                      color: 'var(--bmv-text-secondary)'
                    }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              style={{
                fontFamily: "'Red Hat Display', sans-serif",
                fontSize: '14px',
                fontWeight: '500',
                color: 'var(--bmv-text-heading)',
                marginBottom: 'var(--space-4)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              Applications
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {applications.map((application, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="footer-link"
                    style={{
                      fontFamily: "'Red Hat Text', sans-serif",
                      fontSize: '14px',
                      fontWeight: '400',
                      color: 'var(--bmv-text-secondary)'
                    }}
                  >
                    {application}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              style={{
                fontFamily: "'Red Hat Display', sans-serif",
                fontSize: '14px',
                fontWeight: '500',
                color: 'var(--bmv-text-heading)',
                marginBottom: 'var(--space-4)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              Company
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="footer-link"
                    style={{
                      fontFamily: "'Red Hat Text', sans-serif",
                      fontSize: '14px',
                      fontWeight: '400',
                      color: 'var(--bmv-text-secondary)'
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{
            paddingTop: 'var(--space-6)',
            borderTop: '1px solid var(--bmv-text-secondary)',
            textAlign: 'center'
          }}
        >
          <p
            style={{
              fontFamily: "'Red Hat Text', sans-serif",
              fontSize: '14px',
              fontWeight: '300',
              color: 'var(--bmv-text-heading)'
            }}
          >
            © 2025 Biomol Visual | Clarity in Every MOA.
          </p>
        </div>
      </div>
    </footer>
  );
}
