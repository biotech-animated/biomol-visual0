import { Lock, Shield, MapPin, Trash2 } from 'lucide-react';

export default function SecuritySection() {
  const features = [
    {
      icon: Lock,
      title: 'Ironclad NDAs',
      description: 'We are happy to execute a mutual Non-Disclosure Agreement to protect your confidential information from day one.'
    },
    {
      icon: Shield,
      title: 'Military-Grade Encryption',
      description: 'Your files are protected at every stage using 256-bit AES encryption.'
    },
    {
      icon: MapPin,
      title: 'Secure Team Access',
      description: 'All confidential information is restricted to our scientific leadership team, based exclusively in the US and Canada.'
    },
    {
      icon: Trash2,
      title: 'Data Destruction on Request',
      description: 'We provide complete data destruction upon project completion.'
    }
  ];

  return (
    <section
      className="min-h-screen flex items-center justify-center section-responsive"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/Macrophage_Orange_Version1.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center" style={{ marginBottom: 'var(--space-9)' }}>
          <h2 style={{ marginBottom: 'var(--space-4)' }}>
            Your Science Stays Your Science
          </h2>
          <p
            className="max-w-3xl mx-auto"
            style={{
              fontSize: '17px',
              color: 'var(--bmv-text)',
              lineHeight: '1.7'
            }}
          >
            We get it. You&apos;re about to share your breakthrough with strangers. The science you&apos;ve spent years perfecting. The data that isn&apos;t published yet.
            <br /><br />
            Here&apos;s our commitment to protecting it:
          </p>
        </div>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-4"
          style={{ gap: 'var(--space-5)', marginBottom: 'var(--space-8)' }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="security-features-card"
              style={{
                padding: 'var(--space-5)',
                borderRadius: '12px',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  position: 'relative',
                  zIndex: 1
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(155, 89, 208, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--space-4)'
                  }}
                >
                  <feature.icon size={24} style={{ color: 'var(--bmv-purple)' }} />
                </div>
                <h4
                  style={{
                    marginBottom: 'var(--space-2)',
                    color: 'var(--bmv-text-heading)'
                  }}
                >
                  {feature.title}
                </h4>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--bmv-text-secondary)',
                    lineHeight: '1.6'
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="text-center max-w-3xl mx-auto"
          style={{
            fontSize: '17px',
            color: 'var(--bmv-text)',
            lineHeight: '1.7',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-4)'
          }}
        >
          <p>
            We&apos;ve protected the confidential information of over 70 biotech clients. Including some of the most innovative and sensitive biotherapeutic research in the industry.
          </p>
          <p style={{ color: 'var(--bmv-orange)', fontSize: '18px' }}>
            Your secret stays secret. Until you&apos;re ready to change the world.
          </p>
        </div>
      </div>

    </section>
  );
}
