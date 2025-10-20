"use client"
import { useEffect, useState } from 'react';

export default function ByTheNumbersSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const metrics = [
    [
      { number: '$500M+', label: 'Raised by Our Clients\nUsing Assets We Made' },
      { number: '30+', label: 'Successful Rounds of Funding\nUsing Our Work as a Key Asset' },
      { number: '70+', label: 'Biopharma Clients Served' }
    ],
    [
      { number: '100+', label: 'Molecular & Cellular Mechanisms Visualized' },
      { number: '1 in 4', label: 'Clients Return for Additional Projects' },
      { number: '10+', label: 'Years of Operation' }
    ]
  ];

  return (
    <section
      className="flex flex-col"
      style={{
        minHeight: '100vh'
      }}
    >
      <div
        className="flex-1 flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/Barrier_Red_Version1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center" style={{ marginBottom: 'var(--space-9)' }}>
          By the Numbers
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          {metrics.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid md:grid-cols-3"
              style={{ gap: 'var(--space-5)' }}
            >
              {row.map((metric, index) => (
                <div
                  key={index}
                  className="text-center metric-card"
                  style={{
                    padding: 'var(--space-6)',
                    background: 'rgba(30, 30, 40, 0.4)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    borderRadius: '12px',
                    border: '1px solid rgba(183, 148, 246, 0.2)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    className="metric-card-glow"
                    style={{
                      position: 'absolute',
                      inset: '-2px',
                      borderRadius: '12px',
                      padding: '2px',
                      background: 'conic-gradient(from 0deg, transparent, transparent)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      pointerEvents: 'none',
                      zIndex: 0
                    }}
                  />
                  <div
                    style={{
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    <div
                      style={{
                        fontSize: 'clamp(32px, 5vw, 48px)',
                        fontWeight: '500',
                        color: 'var(--bmv-purple-light)',
                        marginBottom: 'var(--space-3)',
                        fontFamily: "'Red Hat Display', sans-serif"
                      }}
                    >
                      {metric.number}
                    </div>
                    <div
                      style={{
                        fontSize: '16px',
                        color: 'var(--bmv-text)',
                        lineHeight: '1.4',
                        whiteSpace: 'pre-line'
                      }}
                    >
                      {metric.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <p
          className="text-center"
          style={{
            marginTop: 'var(--space-8)',
            fontSize: '18px',
            color: 'var(--bmv-text-secondary)'
          }}
        >
          The track record your breakthrough deserves.
        </p>
      </div>
      </div>

      <div
        style={{
          height: '140px',
          background: '#000000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          overflow: 'hidden'
        }}
      >
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div
            className="animate-scroll"
            style={{
              display: 'flex',
              gap: 'var(--space-10)',
              width: 'max-content',
              alignItems: 'center',
              height: '100%'
            }}
          >
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="logo-container"
                style={{
                  height: '100%',
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
                    height: '48px',
                    width: 'auto',
                    maxWidth: '200px',
                    objectFit: 'contain',
                    filter: 'brightness(0) invert(1)',
                    opacity: '0.4',
                    transition: 'opacity 0.3s ease'
                  }}
                />
              </div>
            ))}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="logo-container"
                style={{
                  height: '100%',
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
                    height: '48px',
                    width: 'auto',
                    maxWidth: '200px',
                    objectFit: 'contain',
                    filter: 'brightness(0) invert(1)',
                    opacity: '0.4',
                    transition: 'opacity 0.3s ease'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
