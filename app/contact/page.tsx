'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus('success');
    setFormData({ name: '', email: '', company: '', message: '' });

    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--bmv-bg)' }}>
      <Navigation />
      <div className="min-h-screen bg-[#101010] pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Let's Create
              <span className="block mt-2 bg-gradient-to-r from-[#007bff] to-[#8A2BE2] bg-clip-text text-transparent">
                Something Extraordinary
              </span>
            </h1>
            <p className="text-xl text-[#F0F0F0]/70 max-w-3xl mx-auto font-light">
              Ready to transform your scientific vision into visual reality? Let's talk.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
                <p className="text-[#F0F0F0]/70 leading-relaxed mb-8">
                  Whether you have a specific project in mind or just want to explore possibilities,
                  we're here to help bring your scientific story to life.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#007bff] to-[#8A2BE2] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email Us</h3>
                    <p className="text-[#F0F0F0]/70">hello@biomolvisual.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#007bff] to-[#8A2BE2] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Call Us</h3>
                    <p className="text-[#F0F0F0]/70">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#007bff] to-[#8A2BE2] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Visit Us</h3>
                    <p className="text-[#F0F0F0]/70">
                      123 Innovation Drive<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h3 className="text-white font-semibold mb-4">Office Hours</h3>
                <div className="space-y-2 text-[#F0F0F0]/70">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#101010] rounded-2xl p-8 border border-[#007bff]/20">
              {status === 'success' ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-[#007bff]/20 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle size={32} className="text-[#007bff]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                  <p className="text-[#F0F0F0]/70">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-white mb-6">Book Your Strategy Call</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-[#F0F0F0] mb-2 font-medium">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-[#101010] border border-[#007bff]/30 rounded-lg text-white placeholder-[#F0F0F0]/40 focus:outline-none focus:border-[#007bff] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-[#F0F0F0] mb-2 font-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#101010] border border-[#007bff]/30 rounded-lg text-white placeholder-[#F0F0F0]/40 focus:outline-none focus:border-[#007bff] transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-company" className="block text-[#F0F0F0] mb-2 font-medium">
                        Company
                      </label>
                      <input
                        type="text"
                        id="contact-company"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 bg-[#101010] border border-[#007bff]/30 rounded-lg text-white placeholder-[#F0F0F0]/40 focus:outline-none focus:border-[#007bff] transition-colors"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-[#F0F0F0] mb-2 font-medium">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-[#101010] border border-[#007bff]/30 rounded-lg text-white placeholder-[#F0F0F0]/40 focus:outline-none focus:border-[#007bff] transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full px-6 py-4 bg-gradient-to-r from-[#007bff] to-[#007bff]/90 text-white rounded-lg hover:shadow-lg hover:shadow-[#007bff]/50 transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 group"
                    >
                      <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                      {status === 'idle' && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
