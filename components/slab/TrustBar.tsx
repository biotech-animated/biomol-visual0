export default function TrustBar() {
  return (
    <section className="py-16 bg-[#1B0A2E]">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="flex flex-col items-center text-center py-8 rounded-lg relative overflow-hidden group phase-card"
            style={{
              background: 'rgba(155,89,208,0.05)',
              backdropFilter: 'blur(10px)',
              cursor: 'pointer'
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
              background: 'rgba(155,89,208,0.05)',
              backdropFilter: 'blur(10px)',
              cursor: 'pointer'
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
              background: 'rgba(155,89,208,0.05)',
              backdropFilter: 'blur(10px)',
              cursor: 'pointer'
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
