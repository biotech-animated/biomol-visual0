import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function AssetLibrary() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const categories = [
    {
      id: 'cells',
      title: 'Cells & Cellular Components',
      items: 'B-Cells • Cancer Cells • Centrosomes • Dendritic Cells • Epithelial Cells • Fibroblasts • Hair Follicles • Hepatocytes • Kidney Cells • Leukocytes • Macrophages • Mitochondria • Natural Killer (NK) Cells • Neurons • Ovaries & Follicles • Pancreatic Beta Cells • PBMCs (Peripheral Blood Mononuclear Cells) • Phagocytes • Photoreceptor Cells • Platelets • Red Blood Cells • Retinal Stem Cells • T-Cells • Tumor Microenvironments'
    },
    {
      id: 'proteins',
      title: 'Proteins, Receptors & Enzymes',
      items: 'ACE2 Receptors • Albumin • Alpha-Synuclein Proteins • Amyloid-β Oligomers • Antibodies (IgG, Polyclonal, Monoclonal) • Antibody Fragments (scFv, di-scFv) • Antigens • Aquaporins • ATP Synthase • Cadherin-17 (CDH17) • CAR (Chimeric Antigen Receptor) • CD3 • CD40L • Checkpoint Inhibitor Molecules • Cytokines • Deubiquitinating Enzymes (DUBs) • DNA Polymerase • Dynein Motors • E3 Ligases • Electron Transport Chain Complexes • Endocannabinoid Receptors • G-Protein-Coupled Receptors (GPCRs) • GM-CSF • Helicase • Heterotrimeric G-Proteins • Histones • HLA Molecules • Insulin • Integrins • Interferon-gamma (IFN-γ) • Interleukin-12 (IL-12) • Ion Channels • Kinesin Motors • Kinetochores • Luciferase • MHC Monomers & Tetramers • Myosin Motors • NMDA Receptors • OX40L • Phosphodiesterases (PDEs) • Photosystems I & II • Primase • Protein A/G • Receptor Tyrosine Kinases (RTKs) • Signal Recognition Particles (SRP) • Single Domain Antibodies (Nanobodies) • Streptavidin • Topoisomerase • Transporter Proteins • Transposase • Ubiquitin • URAT1 Transporters • USP30'
    },
    {
      id: 'dna',
      title: 'DNA, RNA & Genetic Machinery',
      items: 'cDNA • Chromatin Fibers • Circulating Tumor DNA (ctDNA) • DNA (Double Helix) • Fully Condensed Chromosomes • mRNA • Nuclear Pore Complexes (NPC) • Nucleosomes • Oligonucleotides • Peptide Nucleic Acids (PNAs) • Plasmids • Proteasomes • Replisomes • Ribosomes • RNA Polymerase Complexes • siRNA / MicroRNA • Spliceosomes • Telomerase • Transposons • tRNA'
    },
    {
      id: 'structural',
      title: 'Structural & Extracellular Matrix Components',
      items: 'Actin Filaments • Adherens Junctions • Bacterial Biofilms • Blood Vessels • Clathrin-Coated Vesicles • Collagen • Desmosomes • Fibronectin • Gap Junctions • Immune Complex Lattices • Immunological Synapses • Intermediate Filaments • Lipid Rafts • Microtubules • Misfolded Protein Aggregates • Mitotic Spindles • Phospholipid Bilayers • Reactive Oxygen Species (ROS) • Sarcomeres • SNARE Complexes • Tight Junctions • Tophi (Uric Acid Crystals)'
    },
    {
      id: 'therapeutic',
      title: 'Therapeutic & Delivery Systems',
      items: 'Antibody-Drug Conjugates (ADCs) • Bispecific T-Cell Engagers • Dendrimers • Lipid Mediators • Microbubbles • Nanoparticles • Oncolytic Viruses • Peptide Therapeutics • Photosensitizing Agents • RNA Therapeutic Nanoparticles • Small Molecule Drugs • Synthetic Polymers'
    },
    {
      id: 'areas',
      title: 'Therapeutic Areas',
      items: 'Oncology • Infectious Disease • Neurology & CNS Disorders • Immunology & Inflammation • Metabolic & Endocrine Disorders • Nephrology • Cardiovascular & Pulmonary • Fibrosis • Regenerative Medicine & Cell Therapy • Diagnostics & Research Tools'
    }
  ];

  return (
    <section className="section-responsive !pt-6" style={{ background: '#1B0A2E' }}>
      <div className="container-responsive" style={{ maxWidth: '1000px' }}>
        <h2
          className="text-white text-center mb-4"
          style={{
            fontFamily: "'Red Hat Display', sans-serif",
            fontSize: '36px',
            fontWeight: 500
          }}
        >
          Inside the SLAB Asset Bank
        </h2>

        <p
          className="text-[#A0AEC0] text-center mb-12"
          style={{
            fontFamily: "'Red Hat Text', sans-serif",
            fontSize: '18px'
          }}
        >
          Our biological components include:
        </p>

        <div className="space-y-2">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="phase-card"
              style={{
                padding: 'var(--space-4)',
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
              <div
                style={{
                  position: 'relative',
                  zIndex: 1
                }}
              >
                <button
                  onClick={() => toggleSection(category.id)}
                  className="w-full flex items-center justify-between"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    padding: 0,
                    margin: 0
                  }}
                >
                  <h4
                    className="text-responsive-sm"
                    style={{
                      fontFamily: "'Red Hat Display', sans-serif",
                      fontWeight: '400',
                      color: 'var(--bmv-text-heading)',
                      textAlign: 'left',
                      margin: 0
                    }}
                  >
                    {category.title}
                  </h4>
                  <ChevronDown
                    className={`w-6 h-6 text-[#A0AEC0] transition-transform duration-300 ${
                      openSection === category.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openSection === category.id ? 'max-h-[2000px]' : 'max-h-0'
                  }`}
                >
                  <div style={{ marginTop: 'var(--space-3)' }}>
                    <p
                      style={{
                        fontFamily: "'Red Hat Text', sans-serif",
                        fontSize: '16px',
                        fontWeight: '400',
                        color: 'var(--bmv-text-secondary)',
                        lineHeight: '1.6',
                        margin: 0
                      }}
                    >
                      {category.items}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
