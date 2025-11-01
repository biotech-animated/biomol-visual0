"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';

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
    { src: '/logos/client-04.webp', alt: 'Abcore' },
    { src: '/logos/client-01.webp', alt: 'Agarose Bead Technologies' },
    { src: '/logos/client-40.webp', alt: 'MilliporeSigma' },
    { src: '/logos/client-02.webp', alt: 'ACD' },
    { src: '/logos/client-05.webp', alt: 'Altamira Therapeutics' },
    { src: '/logos/client-06.webp', alt: 'Applied Biomath' },
    { src: '/logos/client-07.webp', alt: 'Arbele' },
    { src: '/logos/client-08.webp', alt: 'Arialys' },
    { src: '/logos/client-09.webp', alt: 'Arthrosi Therapeutics' },
    { src: '/logos/client-03.webp', alt: 'ATD Bio' },
    { src: '/logos/client-10.webp', alt: 'Avelas Biosciences' },
    { src: '/logos/client-12.webp', alt: 'Bio-Techne' },
    { src: '/logos/client-13.webp', alt: 'BioLegend' },
    { src: '/logos/client-14.webp', alt: 'Bioniz' },
    { src: '/logos/client-15.webp', alt: 'BriaCell' },
    { src: '/logos/client-16.webp', alt: 'BroadPharm' },
    { src: '/logos/client-11.webp', alt: 'BURL-Concepts' },
    { src: '/logos/client-17.webp', alt: 'CancerVAX' },
    { src: '/logos/client-18.webp', alt: 'Canopy' },
    // { src: '/logos/client-19.webp', alt: 'ChemDiv' },
    { src: '/logos/client-20.webp', alt: 'Chimera Bio' },
    { src: '/logos/client-21.webp', alt: 'Chromocyte' },
    { src: '/logos/client-22.webp', alt: 'Codex DNA' },
    { src: '/logos/client-23.webp', alt: 'Crescendo Biologics' },
    { src: '/logos/client-24.webp', alt: 'CurVirBiotech' },
    { src: '/logos/client-25.webp', alt: 'Dimerix' },
    { src: '/logos/client-26.webp', alt: 'Elsie Bio' },
    { src: '/logos/client-27.webp', alt: 'Endogena' },
    { src: '/logos/client-28.webp', alt: 'Histogen' },
    { src: '/logos/client-29.webp', alt: 'Inflammatix' },
    { src: '/logos/client-30.webp', alt: 'Inivata' },
    { src: '/logos/client-31.webp', alt: 'Innova Biosciences' },
    { src: '/logos/client-32.webp', alt: 'Inso Bio' }
  ]
  const logos2 = [
    { src: '/logos/client-33.webp', alt: 'Insphero' },
    { src: '/logos/client-34.webp', alt: 'Intuitive Bio' },
    { src: '/logos/client-35.webp', alt: 'Invion' },
    { src: '/logos/client-37.webp', alt: 'Lonza' },
    { src: '/logos/client-38.webp', alt: 'May Health' },
    { src: '/logos/client-41.webp', alt: 'Mission Tx' },
    { src: '/logos/client-43.webp', alt: 'Neubase' },
    { src: '/logos/client-45.webp', alt: 'Neuropore' },
    { src: '/logos/client-44.webp', alt: 'NeuroTrials' },
    { src: '/logos/client-42.webp', alt: 'NIH' },
    { src: '/logos/client-46.webp', alt: 'NovaBiotics' },
    { src: '/logos/client-47.webp', alt: 'Numaferm' },
    { src: '/logos/client-48.webp', alt: 'OncoMyx' },
    { src: '/logos/client-49.webp', alt: 'Patrys' },
    { src: '/logos/client-50.webp', alt: 'Presympto' },
    { src: '/logos/client-51.webp', alt: 'ProbiusDx' },
    { src: '/logos/client-52.webp', alt: 'Quantum Si' },
    { src: '/logos/client-53.webp', alt: 'Recce' },
    { src: '/logos/client-54.webp', alt: 'SAb Bio' },
    { src: '/logos/client-56.webp', alt: 'Serimmune' },
    { src: '/logos/client-55.webp', alt: 'SRP' },
    { src: '/logos/client-57.webp', alt: 'StarPharma' },
    { src: '/logos/client-58.webp', alt: 'Tavotek' },
    { src: '/logos/client-59.webp', alt: 'Tecan' },
    { src: '/logos/client-60.webp', alt: 'Unither' },
    { src: '/logos/client-61.webp', alt: 'Valo Tx' },
    { src: '/logos/client-62.webp', alt: 'Verona' },
    { src: '/logos/client-39.webp', alt: 'Merck' },
    { src: '/logos/client-63.webp', alt: 'ViaCyte' },
    { src: '/logos/client-64.webp', alt: 'YDS' },
    // { src: '/logos/client-65.webp', alt: 'YHM' }
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
      className="flex flex-col section-responsive !pb-0"
      style={{
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/Barrier_Red_Version1.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div
        className="flex-1 flex items-center justify-center"

      >
        <div className="container-responsive !max-w-6xl">
          <h2 className="text-center text-responsive-lg" style={{ marginBottom: 'var(--space-9)' }}>
            By the Numbers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.flat().map((metric, index) => (
              <div
                key={index}
                className="text-center metrics-card"
                style={{
                  padding: 'var(--space-4)',
                  borderRadius: '12px',
                  border: '1px solid rgba(183, 148, 246, 0.2)',
                  transition: 'all 250ms cubic-bezier(0.2, 0.8, 0.2, 1)',
                  cursor: 'pointer',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(183, 148, 246, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(183, 148, 246, 0.2)';
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  <div
                    className="text-responsive-xl"
                    style={{
                      fontWeight: '500',
                      color: 'var(--bmv-orange)',
                      marginBottom: 'var(--space-3)',
                      fontFamily: "'Red Hat Display', sans-serif"
                    }}
                  >
                    {metric.number}
                  </div>
                  <div
                    className="text-responsive-sm"
                    style={{
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

          <p
            className="text-center text-responsive-sm pb-6"
            style={{
              marginTop: 'var(--space-8)',
              color: 'var(--bmv-text-secondary)'
            }}
          >
            The track record your breakthrough deserves.
          </p>
        </div>
      </div>

      <div style={{ background: 'black' }}>
        <div className='flex align-center justify-center w-full overflow-hidden mb-5 mt-[30px]' >
          <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div
              className="animate-scroll"
              style={{
                display: 'flex',
                gap: 'var(--space-11)',
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
                    paddingTop: '9px',
                    paddingBottom: '9px',
                    paddingLeft: index === 0 ? 'var(--space-11)' : '0'
                  }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={200}
                    height={30}
                    style={{
                      height: '30px',
                      width: 'auto',
                      maxWidth: '200px',
                      objectFit: 'contain',
                      filter: 'brightness(0) invert(1)',
                      opacity: '0.3',
                      transition: 'opacity 0.3s ease'
                    }}
                    loading="lazy"
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
                    paddingTop: '9px',
                    paddingBottom: '9px',
                    paddingRight: index === logos.length - 1 ? 'var(--space-11)' : '0'
                  }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={200}
                    height={30}
                    style={{
                      height: '30px',
                      width: 'auto',
                      maxWidth: '200px',
                      objectFit: 'contain',
                      filter: 'brightness(0) invert(1)',
                      opacity: '0.3',
                      transition: 'opacity 0.3s ease'
                    }}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Duplicated logos flow - left to right */}
        <div className='flex align-center justify-center w-full overflow-hidden pb-[30px]' >
          <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div
              className="animate-scroll-reverse"
              style={{
                display: 'flex',
                gap: 'var(--space-11)',
                width: 'max-content',
                alignItems: 'center',
                height: '100%'
              }}
            >
              {logos2.map((logo, index) => (
                <div
                  key={`third-${index}`}
                  className="logo-container"
                  style={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: '9px',
                    paddingBottom: '9px',
                    paddingLeft: index === 0 ? 'var(--space-11)' : '0'
                  }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={200}
                    height={30}
                    style={{
                      height: '30px',
                      width: 'auto',
                      maxWidth: '200px',
                      objectFit: 'contain',
                      filter: 'brightness(0) invert(1)',
                      opacity: '0.3',
                      transition: 'opacity 0.3s ease'
                    }}
                    loading="lazy"
                  />
                </div>
              ))}
              {logos2.map((logo, index) => (
                <div
                  key={`fourth-${index}`}
                  className="logo-container"
                  style={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: '9px',
                    paddingBottom: '9px',
                    paddingRight: index === logos2.length - 1 ? 'var(--space-11)' : '0'
                  }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={200}
                    height={30}
                    style={{
                      height: '30px',
                      width: 'auto',
                      maxWidth: '200px',
                      objectFit: 'contain',
                      filter: 'brightness(0) invert(1)',
                      opacity: '0.3',
                      transition: 'opacity 0.3s ease'
                    }}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
