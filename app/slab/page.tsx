import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CheckCircle, Zap, Shield, Sparkles, ArrowRight } from 'lucide-react';

export default function SlabPage() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning-Fast Rendering',
      description: 'State-of-the-art rendering engine for real-time molecular visualization'
    },
    {
      icon: Shield,
      title: 'Scientific Accuracy',
      description: 'Built on validated algorithms and peer-reviewed methodologies'
    },
    {
      icon: Sparkles,
      title: 'Intuitive Interface',
      description: 'Designed for scientists, by scientists. No learning curve required'
    }
  ];

  const plans = [
    {
      name: 'Academic',
      price: '$99',
      period: 'per month',
      features: [
        'Unlimited molecular models',
        'High-resolution exports',
        'Basic animation tools',
        'Community support',
        'Academic license'
      ]
    },
    {
      name: 'Professional',
      price: '$299',
      period: 'per month',
      features: [
        'Everything in Academic',
        'Advanced animation suite',
        'Custom branding',
        'Priority support',
        'Commercial license',
        'Team collaboration tools'
      ],
      featured: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom integrations',
        'On-premise deployment',
        'Training & onboarding',
        'SLA guarantee'
      ]
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bmv-bg)' }}>
      <Navigation />
      <div className="min-h-screen bg-[#101010] pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block mb-4">
              <div className="px-4 py-2 bg-gradient-to-r from-[#007bff]/20 to-[#8A2BE2]/20 rounded-full border border-[#007bff]/30">
                <span className="text-[#007bff] font-semibold">Introducing SLAB</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Scientific Visualization
              <span className="block mt-2 bg-gradient-to-r from-[#007bff] to-[#8A2BE2] bg-clip-text text-transparent">
                Made Simple
              </span>
            </h1>
            <p className="text-xl text-[#F0F0F0]/70 max-w-3xl mx-auto font-light">
              The most powerful molecular visualization platform for researchers and biotech professionals
            </p>
          </div>

          <div className="mb-20">
            <div className="aspect-video bg-gradient-to-br from-[#007bff]/20 to-[#8A2BE2]/20 rounded-2xl border border-[#007bff]/30 flex items-center justify-center relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-[#007bff]/5 to-[#8A2BE2]/5 animate-pulse"></div>
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-[#007bff] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <p className="text-white font-semibold">Watch Product Demo</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#101010] rounded-2xl p-8 border border-[#007bff]/20 hover:border-[#007bff]/50 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#007bff] to-[#8A2BE2] rounded-xl flex items-center justify-center mb-6">
                  <feature.icon size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-[#F0F0F0]/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Choose Your Plan
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-8 transition-all duration-500 hover:transform hover:scale-105 ${
                    plan.featured
                      ? 'bg-gradient-to-br from-[#007bff]/20 to-[#8A2BE2]/20 border-2 border-[#007bff] relative'
                      : 'bg-gradient-to-br from-[#1a1a1a] to-[#101010] border border-[#007bff]/20'
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-1 bg-gradient-to-r from-[#007bff] to-[#8A2BE2] text-white text-sm font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-[#F0F0F0]/60 ml-2">/ {plan.period}</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle size={20} className="text-[#007bff] flex-shrink-0 mt-0.5" />
                        <span className="text-[#F0F0F0]/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group ${
                      plan.featured
                        ? 'bg-gradient-to-r from-[#007bff] to-[#007bff]/90 text-white hover:shadow-lg hover:shadow-[#007bff]/50'
                        : 'bg-transparent border-2 border-[#007bff] text-white hover:bg-[#007bff]/10'
                    }`}
                  >
                    <span>{plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#007bff]/10 to-[#8A2BE2]/10 rounded-2xl p-12 border border-[#007bff]/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Research?</h2>
            <p className="text-[#F0F0F0]/70 mb-8 max-w-2xl mx-auto">
              Join thousands of researchers already using SLAB to create stunning scientific visualizations
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-[#007bff] to-[#007bff]/90 text-white rounded-lg hover:shadow-lg hover:shadow-[#007bff]/50 transition-all duration-300 font-medium">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
