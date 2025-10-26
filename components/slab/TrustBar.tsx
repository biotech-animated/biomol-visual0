export default function TrustBar() {
  return (
    <section className="section-responsive" style={{ background: '#1B0A2E' }}>
      <div className="container-responsive">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="flex flex-col items-center text-center py-8 rounded-lg relative overflow-hidden group phase-card"
            style={{
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
            <div className="relative z-10">
              <p
                className="mb-2"
                style={{
                  fontFamily: "'Red Hat Display', sans-serif",
                  fontSize: '48px',
                  fontWeight: 500,
                  color: '#ED8936',
                  lineHeight: '1'
                }}
              >
                100+
              </p>
              <p
                className="text-[#A0AEC0]"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '1.5'
                }}
              >
                Pre-Built Assets<br />Ready to Customize
              </p>
            </div>
          </div>

          <div
            className="flex flex-col items-center text-center py-8 rounded-lg relative overflow-hidden group phase-card"
            style={{
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
            <div className="relative z-10">
              <p
                className="mb-2"
                style={{
                  fontFamily: "'Red Hat Display', sans-serif",
                  fontSize: '48px',
                  fontWeight: 500,
                  color: '#ED8936',
                  lineHeight: '1'
                }}
              >
                3-5 Weeks
              </p>
              <p
                className="text-[#A0AEC0]"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '1.5'
                }}
              >
                Delivery Timeline
              </p>
            </div>
          </div>

          <div
            className="flex flex-col items-center text-center py-8 rounded-lg relative overflow-hidden group phase-card"
            style={{
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
            <div className="relative z-10">
              <p
                className="mb-2"
                style={{
                  fontFamily: "'Red Hat Display', sans-serif",
                  fontSize: '48px',
                  fontWeight: 500,
                  color: '#ED8936',
                  lineHeight: '1'
                }}
              >
                All Under $8K
              </p>
              <p
                className="text-[#A0AEC0]"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '1.5'
                }}
              >
                No PO Required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
