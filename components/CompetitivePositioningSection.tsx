import Image from 'next/image';

export default function CompetitivePositioningSection() {
  return (
    <section
      className="min-h-screen flex items-center justify-center section-responsive"
      style={{
        background: '#1B0A2E'
      }}
    >
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
              gap: 'var(--space-6)'
            }}
          >
            <h2 className="text-responsive-lg" style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: '500', marginBottom: '0' }}>
              Why Pay for a Mega-Agency&apos;s Overhead?
            </h2>

            <div
              className="text-responsive-sm"
              style={{
                fontFamily: "'Red Hat Text', sans-serif",
                fontWeight: '400',
                color: 'var(--bmv-text)',
                lineHeight: '1.6',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-4)'
              }}
            >
            <p>
              The largest Scientific Communication Studios are built on a model of massive scale. You benefit from radically lean operations by design. We have obsessively engineered our entire process to be ruthlessly efficient—from software to business model.
            </p>

            <p>
              This means zero overhead bloat. Your investment goes directly to the senior talent working on your project.
            </p>

            <p className="text-responsive-sm" style={{ fontFamily: "'Red Hat Text', sans-serif", fontWeight: '400', lineHeight: '1.6', color: 'var(--bmv-text-heading)' }}>
              It&apos;s simple. You get a funding-grade result, without paying for mega-agency overhead.
            </p>

            <p
              className="text-responsive-sm"
              style={{
                fontFamily: "'Red Hat Text', sans-serif",
                fontWeight: '400',
                lineHeight: '1.6',
                color: 'var(--bmv-orange)'
              }}
            >
              A level of value the larger studios simply can&apos;t touch.
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
            <Image
              src="/SLAB_Recce_ATP_8k_v01.webp"
              alt="Advanced molecular visualization"
              width={550}
              height={550}
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
    </section>
  );
}
