"use client"

import Image from 'next/image';

export default function DifferentiationSection() {
  return (
    <section
      className="flex flex-col section-responsive"
      style={{
        background: '#1B0A2E'
      }}
    >
      <div className="flex-1 flex items-center justify-center">
        <div className="container-responsive">
          <div
            className="grid grid-cols-1 lg:grid-cols-2"
            style={{
              gap: 'var(--space-12)',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-5)'
              }}
            >
              <h2 className="text-responsive-lg" style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: '500', marginBottom: '0' }}>
                We Don&apos;t Show Procedures. We Show Molecular and Cellular Processes.
              </h2>

              <div
                className="text-responsive-sm"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  color: 'var(--bmv-text)',
                  lineHeight: '1.6',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-3)',
                  fontWeight: '400'
                }}
              >
                <p>
                  Generalist medical animation studios divide their attention across the entire medical spectrum. From surgical procedures to dental implants to pharmaceutical mechanisms. One day they&apos;re animating joint replacements. The next, they&apos;re trying to work on complex biomolecular interactions. Each project requires fundamentally different expertise, visual languages, and scientific understanding.
                  </p>

            <p style={{ fontFamily: "'Red Hat Text', sans-serif", fontWeight: '400', color: 'var(--bmv-text-heading)' }}>
              The problem this creates is clear: teams that constantly switch contexts never develop deep expertise in any single domain. They can&apos;t anticipate the questions investors will want answered about your specific molecular and cellular science. They&apos;re learning on your timeline—and your budget.
                </p>

                <p style={{ fontFamily: "'Red Hat Text', sans-serif", fontWeight: '400', color: 'var(--bmv-text-heading)' }}>
                  We only do one thing: <span style={{ color: 'var(--bmv-orange)' }}>visually explain the molecular and cellular science that gets you funded.</span> This singular focus is our advantage, and has been since we were founded in 2015.
                </p>

                <p>
                Our PhD scientists understand your molecular and cellular Mechanism of Action (MOA) in one call. No wasted time explaining the basics. This deep focus also means fewer errors from the start, which leads to vastly minimized corrections from your board.
                </p>

                <div
                  style={{
                    padding: 'var(--space-5)',
                    background: 'var(--bmv-surface)',
                    borderLeft: `4px solid var(--bmv-purple)`,
                    borderRadius: '8px',
                    marginTop: 'var(--space-4)',
                    marginBottom: 'var(--space-4)'
                  }}
                >
                  <p className="text-responsive-sm" style={{ fontFamily: "'Red Hat Text', sans-serif", fontStyle: 'italic', marginBottom: 'var(--space-3)' }}>
                    &ldquo;The team understands science and biotech, so communication is direct and effective — no wasting time bringing designers up to speed.&rdquo;
                  </p>
                  <p className="text-responsive-sm" style={{ fontFamily: "'Red Hat Text', sans-serif", fontWeight: '300', color: 'var(--bmv-text-secondary)' }}>
                    — Dr. James Campbell, CEO, Patrys
                  </p>
                </div>

                <p className="md:pb-0 pb-6 text-responsive-sm" style={{ fontFamily: "'Red Hat Text', sans-serif", fontWeight: '400', color: 'var(--bmv-orange)' }}>
                  Just a smarter process. And a more powerful result.
                </p>
              </div>
            </div>

            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '550px',
                aspectRatio: '4 / 5',
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                justifySelf: 'end'
              }}
            >
              <Image
                src="/SLAB_Recce_ATP_FullHD_v02.webp"
                alt="Molecular visualization showing cellular membrane and protein interactions"
                width={550}
                height={688}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
