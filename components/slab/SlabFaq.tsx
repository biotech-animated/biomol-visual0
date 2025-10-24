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
    <section className="py-24 bg-[#1B0A2E]">
      <div className="max-w-[1000px] mx-auto px-8 md:px-16">
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
              className="border border-[#9B59D0]/20 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex items-center justify-between p-6 bg-[#1A202C] hover:bg-[#222222] transition-colors duration-200"
                aria-expanded={openQuestion === index}
              >
                <span
                  className="text-white text-left pr-4"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontSize: '20px',
                    fontWeight: 500
                  }}
                >
                  {faq.question}
                </span>
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
                <div className="p-6 bg-[#1A202C]">
                  <p
                    className="text-[#E2E8F0]"
                    style={{
                      fontFamily: "'Red Hat Text', sans-serif",
                      fontSize: '16px',
                      lineHeight: '1.8'
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
