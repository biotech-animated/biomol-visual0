import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
}

export default function TeamPage() {
  const team: TeamMember[] = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Founder & Chief Scientific Officer',
      bio: 'Ph.D. in Structural Biology with 15+ years visualizing complex molecular systems',
      expertise: ['Protein Dynamics', 'Molecular Modeling', 'Scientific Direction']
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Lead Creative Director',
      bio: 'Award-winning visual artist specializing in bringing scientific concepts to life',
      expertise: ['3D Animation', 'Visual Storytelling', 'Art Direction']
    },
    {
      name: 'Dr. James Wilson',
      role: 'Senior Visualization Scientist',
      bio: 'Computational biologist transforming data into compelling visual narratives',
      expertise: ['Data Visualization', 'Bioinformatics', 'Technical Animation']
    },
    {
      name: 'Emma Thompson',
      role: 'Project Director',
      bio: 'Orchestrating complex projects with precision and strategic insight',
      expertise: ['Client Relations', 'Project Management', 'Strategy']
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bmv-bg)' }}>
      <Navigation />
      <div className="min-h-screen bg-[#101010] pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Meet The
              <span className="block mt-2 bg-gradient-to-r from-[#007bff] to-[#8A2BE2] bg-clip-text text-transparent">
                Visionaries
              </span>
            </h1>
            <p className="text-xl text-[#F0F0F0]/70 max-w-3xl mx-auto font-light">
              A fusion of scientific expertise and creative excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-[#1a1a1a] to-[#101010] rounded-2xl p-8 border border-[#007bff]/20 hover:border-[#007bff]/50 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#007bff] to-[#8A2BE2] rounded-full mb-4 flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-[#007bff] font-medium">{member.role}</p>
                </div>

                <p className="text-[#F0F0F0]/70 mb-6 leading-relaxed">
                  {member.bio}
                </p>

                <div className="space-y-3">
                  <p className="text-[#F0F0F0] font-semibold text-sm uppercase tracking-wide">Expertise</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#007bff]/20 text-[#007bff] rounded-full text-sm border border-[#007bff]/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-[#F0F0F0]/10 flex space-x-4">
                  <button className="p-2 text-[#F0F0F0]/60 hover:text-[#007bff] transition-colors">
                    <Linkedin size={20} />
                  </button>
                  <button className="p-2 text-[#F0F0F0]/60 hover:text-[#007bff] transition-colors">
                    <Mail size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#007bff]/10 to-[#8A2BE2]/10 rounded-2xl p-12 border border-[#007bff]/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Team</h2>
            <p className="text-[#F0F0F0]/70 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for scientific visualization
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-[#007bff] to-[#007bff]/90 text-white rounded-lg hover:shadow-lg hover:shadow-[#007bff]/50 transition-all duration-300 font-medium">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
