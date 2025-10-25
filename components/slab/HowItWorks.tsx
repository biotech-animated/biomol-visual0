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
    <section className="py-24 bg-[#1B0A2E]">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
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
                  className="rounded-lg p-6 h-full flex flex-col relative overflow-hidden group border border-[#1a1a1a] phase-card"
                  style={{
                    background: 'rgba(155,89,208,0.05)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="relative mb-4">
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '12px',
                          background: `linear-gradient(135deg, rgba(155, 89, 208, ${0.15 + index * 0.05}), rgba(255, 107, 53, ${0.1 + index * 0.05}))`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto',
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
                    </div>

                    <h3
                      className="text-white text-center mb-3"
                      style={{
                        fontFamily: "'Red Hat Display', sans-serif",
                        fontSize: '20px',
                        fontWeight: 500
                      }}
                    >
                      {step.title}
                    </h3>

                    <p
                      className="text-[#E2E8F0] text-center"
                      style={{
                        fontFamily: "'Red Hat Text', sans-serif",
                        fontSize: '15px',
                        lineHeight: '1.7'
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
