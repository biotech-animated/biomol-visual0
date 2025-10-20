"use client"

import Image from 'next/image';

export default function DifferentiationSection() {
  const logos = [
    { src: './logos/Abcore.webp', alt: 'Abcore' },
    { src: './logos/ABT.webp', alt: 'Agarose Bead Technologies' },
    { src: './logos/ACD.webp', alt: 'ACD' },
    { src: './logos/Altamira.webp', alt: 'Altamira Therapeutics' },
    { src: './logos/Applied Biomath.webp', alt: 'Applied Biomath' },
    { src: './logos/Arbele.webp', alt: 'Arbele' },
    { src: './logos/Arialys.webp', alt: 'Arialys' },
    { src: './logos/Arthrosi.webp', alt: 'Arthrosi Therapeutics' },
    { src: './logos/ATD Bio.webp', alt: 'ATD Bio' },
    { src: './logos/Avelas.webp', alt: 'Avelas Biosciences' },
    { src: './logos/Bio-Techne.webp', alt: 'Bio-Techne' },
    { src: './logos/Biolegend.webp', alt: 'BioLegend' },
    { src: './logos/Bioniz.webp', alt: 'Bioniz' },
    { src: './logos/BriaCell.webp', alt: 'BriaCell' },
    { src: './logos/BroadPharm.webp', alt: 'BroadPharm' },
    { src: './logos/BURL-Concepts.webp', alt: 'BURL-Concepts' },
    { src: './logos/CancerVAX.webp', alt: 'CancerVAX' },
    { src: './logos/Canopy.webp', alt: 'Canopy' },
    { src: './logos/ChemDiv.webp', alt: 'ChemDiv' },
    { src: './logos/Chimera Bio.webp', alt: 'Chimera Bio' },
    { src: './logos/Chromocyte.webp', alt: 'Chromocyte' },
    { src: './logos/Codex DNA.webp', alt: 'Codex DNA' },
    { src: './logos/Crescendo Biologics.webp', alt: 'Crescendo Biologics' },
    { src: './logos/CurVirBiotech.webp', alt: 'CurVirBiotech' },
    { src: './logos/Dimerix.webp', alt: 'Dimerix' },
    { src: './logos/Elsie Bio.webp', alt: 'Elsie Bio' },
    { src: './logos/Endogena.webp', alt: 'Endogena' },
    { src: './logos/Histogen.webp', alt: 'Histogen' },
    { src: './logos/Inflammatix.webp', alt: 'Inflammatix' },
    { src: './logos/Inivata.webp', alt: 'Inivata' },
    { src: './logos/Innova Biosciences.webp', alt: 'Innova Biosciences' },
    { src: './logos/Inso Bio.webp', alt: 'Inso Bio' },
    { src: './logos/Insphero.webp', alt: 'Insphero' },
    { src: './logos/Intuitive Bio.webp', alt: 'Intuitive Bio' },
    { src: './logos/Invion.webp', alt: 'Invion' },
    { src: './logos/Lonza.webp', alt: 'Lonza' },
    { src: './logos/May Health.webp', alt: 'May Health' },
    { src: './logos/Merck.webp', alt: 'Merck' },
    { src: './logos/MilliporeSigma.webp', alt: 'MilliporeSigma' },
    { src: './logos/Mission Tx.webp', alt: 'Mission Tx' },
    { src: './logos/Neubase.webp', alt: 'Neubase' },
    { src: './logos/Neuropore.webp', alt: 'Neuropore' },
    { src: './logos/NeuroTrials.webp', alt: 'NeuroTrials' },
    { src: './logos/NIH.webp', alt: 'NIH' },
    { src: './logos/NovaBiotics.webp', alt: 'NovaBiotics' },
    { src: './logos/Numaferm.webp', alt: 'Numaferm' },
    { src: './logos/OncoMyx.webp', alt: 'OncoMyx' },
    { src: './logos/Patrys.webp', alt: 'Patrys' },
    { src: './logos/Presympto.webp', alt: 'Presympto' },
    { src: './logos/ProbiusDx.webp', alt: 'ProbiusDx' },
    { src: './logos/Quantum Si.webp', alt: 'Quantum Si' },
    { src: './logos/Recce.webp', alt: 'Recce' },
    { src: './logos/SAb Bio.webp', alt: 'SAb Bio' },
    { src: './logos/Serimmune.webp', alt: 'Serimmune' },
    { src: './logos/SRP.webp', alt: 'SRP' },
    { src: './logos/StarPharma.webp', alt: 'StarPharma' },
    { src: './logos/Tavotek.webp', alt: 'Tavotek' },
    { src: './logos/Tecan.webp', alt: 'Tecan' },
    { src: './logos/Unither.webp', alt: 'Unither' },
    { src: './logos/Valo Tx.webp', alt: 'Valo Tx' },
    { src: './logos/Verona.webp', alt: 'Verona' },
    { src: './logos/ViaCyte.webp', alt: 'ViaCyte' },
    { src: './logos/YDS.webp', alt: 'YDS' },
    { src: './logos/YHM.webp', alt: 'YHM' }
  ];
  return (
    <section
      className="min-h-screen flex flex-col"
      style={{
        background: 'var(--bmv-bg-purple-dark)'
      }}
    >
      <div className="flex-1 flex items-center justify-center">
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
      </div>

      <div
        style={{
          background: '#000000',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: 'max(var(--space-5), calc((100vw - 1200px) / 2))',
          paddingRight: 'var(--space-5)',
          marginTop: 'auto',
          width: '100%'
        }}
      >
        <p style={{
          fontSize: '14px',
          color: '#FFFFFF',
          margin: 0,
          letterSpacing: '0.02em'
        }}>
          Trusted by over 70 biopharma companies around the world
        </p>
      </div>

      <div
        style={{
          paddingTop: '20px',
          paddingBottom: '20px',
          background: '#000000',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          overflow: 'hidden'
        }}
      >
        <div style={{ position: 'relative', width: '100%' }}>
          <div
            className="animate-scroll"
            style={{
              display: 'flex',
              gap: 'var(--space-10)',
              width: 'max-content',
              alignItems: 'center'
            }}
          >
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                style={{
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingLeft: index === 0 ? 'var(--space-10)' : '0'
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    height: '60px',
                    width: 'auto',
                    maxWidth: '180px',
                    objectFit: 'contain',
                    filter: 'brightness(0) invert(1)',
                    pointerEvents: 'none'
                  }}
                />
              </div>
            ))}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                style={{
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingRight: index === logos.length - 1 ? 'var(--space-10)' : '0'
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    height: '60px',
                    width: 'auto',
                    maxWidth: '180px',
                    objectFit: 'contain',
                    filter: 'brightness(0) invert(1)',
                    pointerEvents: 'none'
                  }}
                />
              </div>
            ))}
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
