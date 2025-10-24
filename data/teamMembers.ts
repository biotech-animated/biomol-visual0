export interface TeamMember {
  id: string;
  name: string;
  title: string;
  credentials: string;
  location: string;
  quickStats: {
    years: string;
    expertise: string;
    location: string;
  };
  bio: string;
  pullQuote: string;
  beyondTheLab: {
    icon: string;
    text: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 'ksenia',
    name: 'Ksenia Timonina, PhD',
    title: 'Scientific Managing Director',
    credentials: 'PhD Molecular Biology, York University',
    location: 'Toronto, Canada',
    quickStats: {
      years: '2',
      expertise: 'Scientific Oversight',
      location: 'Toronto, Canada'
    },
    bio: "Ksenia ensures scientific accuracy across all project phases, keeping timelines on track and stakeholder communication seamless. With five peer-reviewed publications in molecular biology and membrane protein research, she brings rigorous scientific standards to every project. Her experience as co-founder of a funded biotech startup gives her unique insight into the pressures and requirements of securing investment—she understands both the technical precision your science requires and the strategic clarity investors demand.\n\nAs Scientific Managing Director, Ksenia reviews every frame for accuracy, coordinates between technical and creative teams, and ensures your molecular mechanisms are represented with absolute fidelity. Her background in cellular signaling and protein interactions means she catches subtle errors that could undermine credibility. She's your primary point of contact throughout the project, maintaining the delicate balance between scientific complexity and visual clarity that makes animations both accurate and accessible.\n\nHer approach combines the rigor of academic research with the efficiency of business execution—a rare combination that ensures projects stay on schedule without compromising quality. Having published first-author papers in peer-reviewed journals, she knows the importance of getting every detail right. Yet her startup experience taught her that perfection must be balanced with deadlines and deliverables.",
    pullQuote: "She understands both the technical precision your science requires and the strategic clarity investors demand.",
    beyondTheLab: {
      icon: 'piano',
      text: 'Level 9 Piano certification—which explains her talent for coordinating complex projects with perfect timing and harmony. Also maintains an active research interest in longevity science and cellular aging mechanisms.'
    }
  },
  {
    id: 'isabel',
    name: 'Isabel Canto, PhD',
    title: 'Scientific Story Architect',
    credentials: 'PhD Biomedical Sciences, UC San Diego',
    location: 'San Diego, USA',
    quickStats: {
      years: '10',
      expertise: 'Narrative Design',
      location: 'San Diego, USA'
    },
    bio: "Isabel transforms dense scientific data into compelling visual narratives that resonate with diverse audiences. With eight peer-reviewed publications including first-author papers in Journal of Biological Chemistry and PNAS, she brings deep scientific credibility to storytelling. Her doctoral research on GPCR signaling and protein trafficking provides the foundation for understanding complex cellular mechanisms across therapeutic areas.\n\nAs a founding team member since 2015, Isabel has developed and refined our signature approach to scientific storytelling. She's completed over 100 projects, each requiring her to distill hundreds of pages of research into clear, engaging narratives that maintain scientific integrity while achieving business objectives. Her process begins with deep immersion in your science—reading your papers, understanding your mechanism, identifying the key insights that will resonate with investors.\n\nWhat sets Isabel apart is her ability to find the narrative thread that connects molecular events to therapeutic outcomes. She understands that investors don't just want to see how a drug binds—they want to understand why that binding matters, what cascade it triggers, and how that translates to patient benefit. Her scripts and storyboards create a logical flow that guides viewers from problem to solution, making complex science feel inevitable rather than impenetrable.\n\nHer creative process produces unexpectedly elegant solutions to complex visualization challenges. Clients consistently praise her ability to capture the essence of their science while making it accessible to non-specialist audiences. She maintains close collaboration with researchers throughout the process, ensuring every simplification serves clarity without sacrificing accuracy.",
    pullQuote: "Her scripts and storyboards create a logical flow that guides viewers from problem to solution, making complex science feel inevitable rather than impenetrable.",
    beyondTheLab: {
      icon: 'gamepad',
      text: 'Claims her best creative solutions come during video game sessions—pattern recognition skills that translate directly to visual problem-solving. An avid reader of both scientific literature and science fiction, finding inspiration in the intersection of current research and future possibilities.'
    }
  },
  {
    id: 'andrew',
    name: 'Andrew Catalano, PhD',
    title: 'Scientific Visualization Specialist',
    credentials: 'PhD Cell and Systems Biology, University of Toronto',
    location: 'Toronto, Canada',
    quickStats: {
      years: '10',
      expertise: 'Molecular Architecture',
      location: 'Toronto, Canada'
    },
    bio: "Andrew builds the molecular scaffolding that brings your mechanism to life with unprecedented accuracy. With 14 peer-reviewed publications including five first-author papers, his scientific foundation is unquestionable. But what truly sets him apart is his hands-on structural biology experience—he's actually solved protein structures at 4.1 Å resolution using X-ray crystallography, published in eLife. This means he doesn't just animate proteins; he understands them at the atomic level.\n\nHis decade at Biomol Visual has been dedicated to perfecting the art of molecular visualization. Andrew creates scientifically accurate 3D frameworks for complex biomolecular interactions, ensuring every bond angle, every conformational change, every molecular interaction follows the laws of physics and chemistry. When he builds a protein, it's not just visually correct—it's structurally valid down to the side chain orientations.\n\nBeyond technical accuracy, Andrew brings pedagogical clarity to every project. As founder of an educational platform and instructor at the University of Toronto, he's taught complex biological concepts to over 100 students. This teaching experience informs his visualization approach—he knows how to reveal complexity gradually, building understanding layer by layer. His work doesn't just show; it teaches.\n\nHis expertise spans the full range of biomolecular visualization: protein-protein interactions, DNA-RNA dynamics, membrane transport, enzyme catalysis, and signal transduction pathways. He's particularly skilled at representing dynamic processes—showing not just structures but mechanisms in motion. His work has been featured in top-tier journals and conferences, setting the standard for scientific visualization in the industry.",
    pullQuote: "When he builds a protein, it's not just visually correct—it's structurally valid down to the side chain orientations.",
    beyondTheLab: {
      icon: 'book',
      text: 'Author of university-level biology textbooks—explaining complex science clearly is both his profession and passion. Winner of teaching innovation awards, he brings the same commitment to clarity in every visualization project.'
    }
  },
  {
    id: 'ushma',
    name: 'Ushma Patel, MS',
    title: 'Scientific Art Specialist',
    credentials: 'MS Biomedical Visualization, University of Illinois Chicago',
    location: 'Denver, USA',
    quickStats: {
      years: '5',
      expertise: 'Visual Excellence',
      location: 'Denver, USA'
    },
    bio: "Ushma transforms scientific accuracy into visual impact that captivates audiences while maintaining absolute fidelity to the underlying science. With formal training in both neuroscience (BS, Summa Cum Laude) and biomedical visualization (MS), plus three years of hands-on molecular biology lab experience, she bridges the gap between scientific rigor and aesthetic excellence.\n\nWinner of the 2024 AMI Award and Pixie Award, Ushma has art-directed over 50 productions in her five years at Biomol Visual. Her unique ability lies in elevating structurally accurate molecular frameworks into photorealistic visualizations that are both scientifically precise and visually stunning. Working with our team of 3D visualization specialists, she ensures every project achieves the perfect balance between accuracy and impact. She understands that in the world of biotech funding, credibility comes not just from accuracy but from production values that match the innovation of the science.\n\nHer process begins with deep research into visual references—electron microscopy images, cellular imaging—ensuring every texture, every surface, every lighting choice has a basis in scientific reality. Yet she also knows when to employ artistic license to enhance understanding: choosing colors that differentiate without confusing, adjusting transparency to reveal hidden mechanisms, choreographing camera movements that guide the eye through complex processes.\n\nHaving co-authored papers in Nature Methods (2025) and contributed to four peer-reviewed neuroscience publications, she brings scientific credibility to aesthetic decisions. Every visual choice serves both beauty and understanding. Her style frames set the visual tone for entire projects, establishing a consistent visual language that carries through from molecule to cell to therapeutic effect.",
    pullQuote: "Every visual choice serves both beauty and understanding.",
    beyondTheLab: {
      icon: 'camera',
      text: 'Finds inspiration in gaming environments and nature walks—unexpected sources that fuel innovative visual solutions. Her photography hobby focusing on macro imagery of natural structures directly influences her approach to molecular visualization.'
    }
  },
  {
    id: 'benjamin',
    name: 'Benjamin Denton',
    title: 'Founder & CEO',
    credentials: 'BSc Biotechnology, University College London',
    location: 'San Diego, USA',
    quickStats: {
      years: '10',
      expertise: 'Biotech Business Development',
      location: 'San Diego, USA'
    },
    bio: "Benjamin founded Biomol Visual after recognizing a critical gap in how biotechs communicate complex science to achieve business objectives. His unique background—combining biotechnology training from University College London with pharmaceutical business development experience—positioned him to understand both the scientific complexities and commercial realities of the biotech industry.\n\nBefore launching Biomol Visual, Benjamin worked in pharmaceutical business development, managing complex drug discovery partnerships and CRO services. This experience taught him that visual clarity of a scientific presentation directly impacts business outcomes—from investor decisions to regulatory approvals to partnership negotiations. He saw how the right visual assets could unlock funding rounds, accelerate FDA approvals, and facilitate major acquisitions.\n\nOver the past decade, Benjamin has helped biotech clients achieve extraordinary business milestones through strategic visual communication. His work has supported successful funding rounds, regulatory presentations, and strategic partnerships. For several long-term clients, he's developed integrated campaigns that drove sustained revenue growth—in some cases generating millions annually and ultimately facilitating successful exits. These partnerships demonstrate his ability to align visual strategy with commercial objectives, whether the goal is Series A funding, strategic partnership, or acquisition.\n\nHis obsession with business outcomes has shaped every aspect of Biomol Visual's approach. He's built an exceptional team of specialists who understand that every production must serve a strategic purpose. By maintaining lean operations and focusing exclusively on molecular and cellular mechanisms, the team are able to deliver premium quality while ensuring strong ROI for every client investment.",
    pullQuote: "Visual clarity of scientific presentations directly impacts business outcomes—from investor decisions to regulatory approvals to partnership negotiations.",
    beyondTheLab: {
      icon: 'waves',
      text: "In his 20s, Benjamin was a competitive swimmer and head coach who built a championship program from the ground up. Today, he gives back through a nonprofit that supports aspiring swim coaches—providing the mentorship and resources he wished he'd had 20 years ago."
    }
  }
];
