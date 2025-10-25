import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function SlabFaq() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "What's the difference between Instant Loop and regular stock footage?",
      answer: "Traditional stock footage is generic, often scientifically imprecise, and looks the same across every biotech website. Instant Loops are pre-made but scientifically precise, PhD-verified, and built to the same quality standards as our custom work—what stock footage should be but never is."
    },
    {
      question: "How is SLAB different from stock footage?",
      answer: "Stock footage is generic, made for everyone, and usually scientifically imprecise. SLAB (all three tiers) is verified by our PhD team for scientific precision. Signature is customized to your brand identity, while Precision is both scientifically customized to your MOA and branded to your identity."
    },
    {
      question: "How is this different from your full custom animation service?",
      answer: "Full custom animation is a complete 2-3 minute MOA story with multiple scenes and transitions, taking a significant amount of time. SLAB is one looping scene (10-20 seconds depending on tier) delivered instantly to 5 weeks. Different scope, different timeline, same quality."
    },
    {
      question: "What if I need my exact molecular structure and specific receptor visualized?",
      answer: "That's what the Precision Loop is for. We build your exact biomolecular structure from your specifications—your specific target, your specific interaction, scientifically accurate to your biology."
    },
    {
      question: "What formats do I receive?",
      answer: "Instant Loop and Signature Loop include one video file in MP4 and MOV formats. Precision Loop includes video files plus 4 high-resolution still images for presentations and web use."
    },
    {
      question: "What's your revision policy?",
      answer: "Instant Loop has no revisions (pre-made asset). Signature Loop includes one revision round. Precision Loop includes two revision rounds. Additional revisions are available if needed for custom tiers."
    },
    {
      question: "How do I get started?",
      answer: "Book a 15-minute consultation call to tell us about your science and what you're looking for. We'll review our asset library (takes 2 business days) and get back to you with options—instant loops if we have something ready, or custom builds with timeline and pricing. You choose what fits, and we deliver."
    }
  ];

  return (
    <section className="section-responsive !pt-6" style={{ background: '#1B0A2E' }}>
      <div className="container-responsive" style={{ maxWidth: '1000px' }}>
        <h2
          className="text-white text-center mb-16"
          style={{
            fontFamily: "'Red Hat Display', sans-serif",
            fontSize: '36px',
            fontWeight: 500
          }}
        >
          Common Questions
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="phase-card"
              style={{
                padding: 'var(--space-4)',
                background: 'var(--bmv-surface)',
                borderRadius: '12px',
                border: '1px solid rgba(183, 148, 246, 0.1)',
                transition: 'all 250ms cubic-bezier(0.2, 0.8, 0.2, 1)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
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
                  zIndex: 1
                }}
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full flex items-center justify-between"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    padding: 0,
                    margin: 0
                  }}
                  aria-expanded={openQuestion === index}
                >
                  <h4
                    className="text-responsive-sm"
                    style={{
                      fontFamily: "'Red Hat Display', sans-serif",
                      fontWeight: '400',
                      color: 'var(--bmv-text-heading)',
                      textAlign: 'left',
                      margin: 0,
                      paddingRight: 'var(--space-4)'
                    }}
                  >
                    {faq.question}
                  </h4>
                  <ChevronDown
                    className={`w-6 h-6 text-[#A0AEC0] flex-shrink-0 transition-transform duration-300 ${
                      openQuestion === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openQuestion === index ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                >
                  <div style={{ marginTop: 'var(--space-3)' }}>
                    <p
                      style={{
                        fontFamily: "'Red Hat Text', sans-serif",
                        fontSize: '16px',
                        fontWeight: '400',
                        color: 'var(--bmv-text-secondary)',
                        lineHeight: '1.6',
                        margin: 0
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
