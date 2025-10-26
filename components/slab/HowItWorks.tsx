import { MessageCircle, Search, FileCheck, MousePointer, Truck } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: MessageCircle,
      title: 'Quick Consultation',
      description: '15-minute call to understand what you need and when you need it.'
    },
    {
      number: '02',
      icon: Search,
      title: 'Internal Review',
      description: "We review our asset library to see what's available. Takes 2 business days."
    },
    {
      number: '03',
      icon: FileCheck,
      title: 'Options Delivered',
      description: 'We present your options: instant loops ready now, or custom builds with timeline and pricing.'
    },
    {
      number: '04',
      icon: MousePointer,
      title: 'You Choose',
      description: 'Select the option that fits your timeline and budget. No pressure, just clarity.'
    },
    {
      number: '05',
      icon: Truck,
      title: 'Delivery & Deployment',
      description: 'Instant loops download immediately. Custom loops delivered in 3-5 weeks.'
    }
  ];

  return (
    <section className="section-responsive !pt-6" style={{ background: '#1B0A2E' }}>
      <div className="container-responsive">
        <h2
          className="text-white text-center mb-16"
          style={{
            fontFamily: "'Red Hat Display', sans-serif",
            fontSize: '36px',
            fontWeight: 500
          }}
        >
          Simple Process. Fast Results.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div
                  className="phase-card h-full"
                  style={{
                    padding: 'var(--space-4)',
                    background: 'var(--bmv-surface)',
                    borderRadius: '12px',
                    border: '1px solid rgba(183, 148, 246, 0.1)',
                    transition: 'all 250ms cubic-bezier(0.2, 0.8, 0.2, 1)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--bmv-surface-2)';
                    e.currentTarget.style.borderColor = 'rgba(183, 148, 246, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--bmv-surface)';
                    e.currentTarget.style.borderColor = 'rgba(183, 148, 246, 0.1)';
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      zIndex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%'
                    }}
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: `linear-gradient(135deg, rgba(155, 89, 208, ${0.15 + index * 0.05}), rgba(255, 107, 53, ${0.1 + index * 0.05}))`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 'var(--space-4)',
                        position: 'relative'
                      }}
                    >
                      <Icon size={24} style={{ color: 'var(--bmv-purple)' }} />
                      <div
                        style={{
                          position: 'absolute',
                          top: '-4px',
                          right: '-4px',
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, var(--bmv-purple), var(--bmv-orange))',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '11px',
                          fontWeight: '500',
                          color: 'white'
                        }}
                      >
                        {step.number}
                      </div>
                    </div>
                    <h4
                      className="text-responsive-sm"
                      style={{
                        fontFamily: "'Red Hat Display', sans-serif",
                        fontWeight: '400',
                        marginBottom: 'var(--space-3)',
                        color: 'var(--bmv-text-heading)'
                      }}
                    >
                      {step.title}
                    </h4>
                    <p
                      style={{
                        fontFamily: "'Red Hat Text', sans-serif",
                        fontSize: '16px',
                        fontWeight: '400',
                        color: 'var(--bmv-text-secondary)',
                        lineHeight: '1.6',
                        flex: 1
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="max-w-[600px] mx-auto text-center py-4 px-6 rounded-md"
          style={{
            background: 'rgba(155,89,208,0.1)',
            border: '1px solid rgba(155,89,208,0.3)'
          }}
        >
          <p
            className="text-[#ED8936]"
            style={{
              fontFamily: "'Red Hat Display', sans-serif",
              fontSize: '20px',
              fontWeight: 500
            }}
          >
            Timeline: Instant to 5 weeks, depending on your choice.
          </p>
        </div>
      </div>
    </section>
  );
}
