'use client';

import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://fast.wistia.com/embed/medias/rg07nq3ve0.jsonp';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://fast.wistia.com/assets/external/E-v1.js';
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      if (document.body.contains(script1)) document.body.removeChild(script1);
      if (document.body.contains(script2)) document.body.removeChild(script2);
    };
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

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <div
          className="wistia_embed wistia_async_rg07nq3ve0 videoFoam=true autoPlay=true muted=true controlsVisibleOnLoad=false endVideoBehavior=loop playbar=false"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            filter: 'brightness(0.6)'
          }}
        >
          &nbsp;
        </div>
      </div>

      <div className="absolute inset-0 bg-black opacity-30" style={{ zIndex: 1 }}></div>

      <div className="relative z-10 flex-1 flex items-end">
        <div className="w-full px-6 pb-16">
          <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            <h1 style={{ lineHeight: '1.16', textAlign: 'left' }}>
              Molecular & Cellular MOA Visualization That Gets You Funded
            </h1>

            <p
              style={{
                fontSize: '20px',
                fontWeight: '400',
                color: 'var(--bmv-text-heading)',
                opacity: '0.95',
                textAlign: 'left',
                maxWidth: '800px'
              }}
            >
              We translate your complex molecular science into a 3-minute visual story designed to win investor confidence.
            </p>

            <div
              className="flex flex-col"
              style={{
                gap: 'var(--space-3)',
                paddingTop: 'var(--space-4)'
              }}
            >
              <div
                className="flex flex-col sm:flex-row items-start"
                style={{ gap: 'var(--space-3)' }}
              >
                <Link
                  href="/case-studies"
                  className="group"
                  style={{
                    padding: '14px 24px 14px 32px',
                    background: 'rgba(138, 92, 246, 0.65)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    fontSize: '16px',
                    fontWeight: '500',
                    transition: 'all 250ms cubic-bezier(0.2, 0.8, 0.2, 1)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(138, 92, 246, 0.85)';
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(138, 92, 246, 0.65)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <span>Show Reel</span>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'rgba(138, 92, 246, 1)'
                    }}
                  >
                    <ArrowRight size={20} />
                  </div>
                </Link>

                <Link
                  href="/contact"
                  className="group cta-button"
                  style={{
                    padding: '14px 24px 14px 32px',
                    background: 'rgba(251, 146, 60, 0.65)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    fontSize: '16px',
                    fontWeight: '500',
                    transition: 'all 250ms cubic-bezier(0.2, 0.8, 0.2, 1)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    position: 'relative',
                    overflow: 'hidden',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    setIsHovered(true);
                    e.currentTarget.style.background = 'rgba(251, 146, 60, 0.85)';
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    setIsHovered(false);
                    e.currentTarget.style.background = 'rgba(251, 146, 60, 0.65)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <span style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                    <span
                      style={{
                        opacity: isHovered ? 0 : 1,
                        transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
                        transition: 'all 0.3s ease',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      Book Your Strategy Call
                    </span>
                    <span
                      style={{
                        position: 'absolute',
                        left: '50%',
                        transform: isHovered ? 'translate(-50%, 0)' : 'translate(-50%, 10px)',
                        opacity: isHovered ? 1 : 0,
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        fontSize: '14px',
                        alignItems: 'center',
                        textAlign: 'center',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      <span style={{ display: 'block' }}>30-Minute Call.</span>
                      <span style={{ display: 'block' }}>No obligation</span>
                    </span>
                  </span>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'rgba(251, 146, 60, 1)',
                      flexShrink: 0
                    }}
                  >
                    <ArrowRight size={20} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative z-10 w-full overflow-hidden"
        style={{
          paddingTop: 'var(--space-6)',
          paddingBottom: 'var(--space-6)',
          background: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center'
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
            {/* First set of logos */}
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
                    filter: 'grayscale(100%) brightness(1) opacity(0.25)',
                    pointerEvents: 'none'
                  }}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
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
                    filter: 'grayscale(100%) brightness(1) opacity(0.25)',
                    pointerEvents: 'none'
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
