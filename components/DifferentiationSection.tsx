"use client"

import Image from 'next/image';

export default function DifferentiationSection() {
  return (
    <section
      className="min-h-screen flex items-center justify-center"
      style={{
        position: 'relative',
        background: 'var(--bmv-bg-purple-dark)',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/94cbb8ff-ce9f-4e10-8d08-4bb251d718ec.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-12)',
            alignItems: 'center'
          }}
          className="differentiation-grid"
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-5)'
            }}
          >
            <h2 style={{ fontSize: '34px', lineHeight: '1.2', marginBottom: '0' }}>
              We Don't Animate Surgeries. We Visualize Molecular & Cellular Mechanisms of Action.
            </h2>

            <div
              style={{
                fontSize: '16px',
                color: 'var(--bmv-text)',
                lineHeight: '1.7',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-3)'
              }}
            >
            <p>
              Generalist studios animate hip replacements on Monday. A dental procedure on Tuesday. And a new surgical tool on Wednesday. Then they attempt your complex molecular science on Thursday.
            </p>

            <p style={{ fontWeight: '500', color: 'var(--bmv-text-heading)' }}>
              We only do one thing: Visually explain the molecular and cellular science that gets you funded. This singular focus is our advantage.
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
              <p style={{ fontSize: '18px', fontStyle: 'italic', marginBottom: 'var(--space-3)' }}>
                "The team understands science and biotech, so communication is direct and effective – no wasting time bringing designers up to speed."
              </p>
              <p style={{ fontSize: '14px', color: 'var(--bmv-text-secondary)' }}>
                — Dr. James Campbell, CEO, Patrys
              </p>
            </div>

            <p style={{ fontSize: '17px', fontWeight: '500', color: 'var(--bmv-purple-light)' }}>
              Just a smarter process. And a more powerful result.
            </p>
            </div>
          </div>

          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '550px',
              aspectRatio: '1 / 1',
              overflow: 'hidden',
              borderRadius: '12px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              justifySelf: 'end'
            }}
          >
            <img
              src="./SLAB_Recce_ATP_FullHD_v02.png"
              alt="Molecular visualization showing cellular membrane and protein interactions"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .differentiation-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
