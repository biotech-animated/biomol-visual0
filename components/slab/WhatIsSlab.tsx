export default function WhatIsSlab() {
  return (
    <section className="section-responsive !pt-6" style={{ background: '#1B0A2E' }}>
      <div className="container-responsive" style={{ maxWidth: '900px' }}>
        <h2
          className="text-[#E2E8F0] text-center mb-4"
          style={{
            fontFamily: "'Red Hat Display', sans-serif",
            fontSize: '40px',
            fontWeight: 500
          }}
        >
          What Is SLAB?
        </h2>

        <p
          className="text-[#A0AEC0] text-center mb-12"
          style={{
            fontFamily: "'Red Hat Display', sans-serif",
            fontSize: '20px',
            fontWeight: 500
          }}
        >
          SLAB stands for Seamless Loop Asset Bank. Here's why we built it.
        </p>

        <div className="space-y-8 text-[#E2E8F0]" style={{ fontFamily: "'Red Hat Text', sans-serif", fontSize: '18px', lineHeight: '1.7' }}>
          <p>
            We kept seeing the same pattern. Biotech and pharma companies with incredible science—real innovation, solid teams, important work—but when it came time to present that work to the world, they were stuck with generic stock footage. Visuals that didn't match the quality of their science. Websites that needed an upgrade.
          </p>

          <p>
            It wasn't for lack of trying. Custom animation solves this perfectly, but it takes months, requires significant budgets, and needs long lead times. Most companies don't have that luxury when they're preparing for a partnership meeting, launching a new website, heading to a conference next month, or building a sales deck.
          </p>

          <p>
            That's why we built SLAB.
          </p>

          <p>
            <strong style={{ fontWeight: 500 }}>For instant needs:</strong> We have pre-made, scientifically accurate loops ready to download immediately. Think premium stock footage that's actually accurate.
          </p>

          <p>
            <strong style={{ fontWeight: 500 }}>For custom projects:</strong> We take production-grade components from our library—the same cellular environments we use for our premium work—and customize them to your specific biology. Brand them to your identity. Deliver in <span style={{ color: '#ED8936' }}>3-5 weeks</span>. Under <span style={{ color: '#ED8936' }}>$6K</span>. No procurement. No waiting.
          </p>

          <div
            className="mt-8 p-6"
            style={{
              background: 'rgba(155,89,208,0.1)',
              border: '1px solid rgba(155,89,208,0.3)',
              borderRadius: '8px'
            }}
          >
            <p className="text-[#E2E8F0]" style={{ fontStyle: 'italic' }}>
              Think of it like this: Traditional animation is building a house from blueprints. SLAB is moving into a luxury apartment—either move in as-is today, or customize and move in next month. You get the premium result, just faster and more accessible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
