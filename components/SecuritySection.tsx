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
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/Macrophage_Orange_Version1.jpg)',
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
            We get it. You're about to share your breakthrough with strangers. The science you've spent years perfecting. The data that isn't published yet.
            <br /><br />
            Here's our commitment to protecting it:
          </p>
        </div>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-4"
          style={{ gap: 'var(--space-5)', marginBottom: 'var(--space-8)' }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="security-card phase-card"
              style={{
                padding: 'var(--space-5)',
                background: 'rgba(30, 30, 40, 0.4)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: '12px',
                border: '1px solid rgba(183, 148, 246, 0.2)',
                transition: 'all 250ms cubic-bezier(0.2, 0.8, 0.2, 1)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(30, 30, 40, 0.6)';
                e.currentTarget.style.borderColor = 'rgba(183, 148, 246, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(30, 30, 40, 0.4)';
                e.currentTarget.style.borderColor = 'rgba(183, 148, 246, 0.2)';
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
            We've protected the confidential information of over 70 biotech clients. Including some of the most innovative and sensitive biotherapeutic research in the industry.
          </p>
          <p style={{ fontWeight: '500', color: 'var(--bmv-text-heading)' }}>
            Not one breach. Not one leak. Not one sleepless night for our clients.
          </p>
          <p style={{ color: 'var(--bmv-purple-light)', fontSize: '18px' }}>
            Your secret stays secret. Until you're ready to change the world.
          </p>
        </div>
      </div>

    </section>
  );
}
