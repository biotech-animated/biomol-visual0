export default function CompetitivePositioningSection() {
  return (
    <section
      className="min-h-screen flex items-center justify-center"
      style={{
        background: 'var(--bmv-bg-orange-darker)'
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
          className="competitive-positioning-grid"
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-6)'
            }}
          >
            <h2 style={{ fontSize: '42px', lineHeight: '1.2', marginBottom: '0' }}>
              Why Pay for a Mega-Agency's Overhead?
            </h2>

            <div
              style={{
                fontSize: '16px',
                color: 'var(--bmv-text)',
                lineHeight: '1.7',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-4)'
              }}
            >
            <p>
              The largest Scientific Communication Studios are built on a model of massive scale. You benefit from{' '}
              <span style={{ fontWeight: '500', color: 'var(--bmv-purple-light)' }}>
                radically lean operations by design
              </span>
              . We have obsessively engineered our entire process to be ruthlessly efficient—from software to business structure.
            </p>

            <p>
              This means zero overhead bloat. Your investment goes directly to the senior talent working on your project.
            </p>

            <p style={{ fontSize: '18px', fontWeight: '500', color: 'var(--bmv-text-heading)' }}>
              It's simple. You get a funding-grade result, without paying for mega-agency overhead.
            </p>

            <p
              style={{
                fontSize: '17px',
                color: 'var(--bmv-purple-light)',
                fontWeight: '500'
              }}
            >
              A level of value the larger studios simply can't touch.
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
              src="./SLAB_Recce_ATP_8k_v01.jpg"
              alt="Advanced molecular visualization"
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

      <style>{`
        @media (max-width: 1024px) {
          .competitive-positioning-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
