import { Phone, Mail, Clock } from 'lucide-react';
import ObfuscatedEmailLink from '../ObfuscatedEmailLink';

export default function CompanyInfo() {
  return (
    <section className="py-20 px-8 md:px-16 bg-[#1B0A2E]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <h2
              className="mb-8"
              style={{
                fontFamily: "'Red Hat Display', sans-serif",
                fontSize: '36px',
                fontWeight: 500,
                color: '#9B59D0'
              }}
            >
              About Biomol Visual
            </h2>

            <div className="space-y-6">
              <p
                className="text-[#CCCCCC]"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '16px',
                  lineHeight: '1.8'
                }}
              >
                In October 2025, Biotech Animated became Biomol Visual, marking a decade of specialized work in molecular and cellular mechanism of action visualization. Our rebrand reflects our singular focus: helping biotech companies translate groundbreaking science into funded realities.
              </p>

              <p
                className="text-[#CCCCCC]"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '16px',
                  lineHeight: '1.8'
                }}
              >
                Biomol Visual LLP is registered in London, but our entire scientific leadership team—PhD and MSc-qualified molecular biologists and biomedical visualization specialists—operates across US and Canada time zones (Pacific, Mountain, and Eastern). This global structure allows us to work seamlessly with biotech companies worldwide, from Boston and San Diego to London and Sydney.
              </p>

              <p
                className="text-[#CCCCCC]"
                style={{
                  fontFamily: "'Red Hat Text', sans-serif",
                  fontSize: '16px',
                  lineHeight: '1.8'
                }}
              >
                We&apos;ve partnered with innovative companies worldwide, supporting funding rounds that have generated over $500 million in capital, including clients later acquired for multi-billion dollar valuations.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-[#1A1A1A] border border-[#333] rounded-lg p-8 h-full">
              <div className="space-y-6">
                <div>
                  <p
                    className="text-[#888] uppercase mb-4"
                    style={{
                      fontFamily: "'Red Hat Text', sans-serif",
                      fontSize: '14px',
                      letterSpacing: '1px'
                    }}
                  >
                    Global Client Base
                  </p>
                  <p
                    className="text-[#CCCCCC] mb-6"
                    style={{
                      fontFamily: "'Red Hat Text', sans-serif",
                      fontSize: '16px',
                      lineHeight: '1.7'
                    }}
                  >
                    Our clients span the world&apos;s leading biotech hubs:
                  </p>
                </div>

                <div className="space-y-4">
                  <p
                    style={{
                      fontFamily: "'Red Hat Text', sans-serif",
                      fontSize: '16px',
                      lineHeight: '1.7'
                    }}
                  >
                    <span className="font-medium" style={{ color: '#ED8936' }}>United States:</span>{' '}
                    <span className="text-[#CCCCCC]">San Diego • Boston • San Francisco • New York • Philadelphia</span>
                  </p>

                  <p
                    style={{
                      fontFamily: "'Red Hat Text', sans-serif",
                      fontSize: '16px',
                      lineHeight: '1.7'
                    }}
                  >
                    <span className="font-medium" style={{ color: '#ED8936' }}>Australia:</span>{' '}
                    <span className="text-[#CCCCCC]">Sydney • Melbourne</span>
                  </p>

                  <p
                    style={{
                      fontFamily: "'Red Hat Text', sans-serif",
                      fontSize: '16px',
                      lineHeight: '1.7'
                    }}
                  >
                    <span className="font-medium" style={{ color: '#ED8936' }}>United Kingdom:</span>{' '}
                    <span className="text-[#CCCCCC]">London • Cambridge</span>
                  </p>
                </div>

                <p
                  className="text-[#CCCCCC] pt-4"
                  style={{
                    fontFamily: "'Red Hat Text', sans-serif",
                    fontSize: '16px',
                    lineHeight: '1.7'
                  }}
                >
                  From seed stage to late-stage acquisition prep, we&apos;ve worked with biotech companies across every funding stage.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-[#1A1A1A] border border-[#333] rounded-lg p-8 h-full">
              <div className="space-y-8">
                <div>
                  <p
                    className="text-[#888] uppercase mb-3"
                    style={{
                      fontFamily: "'Red Hat Text', sans-serif",
                      fontSize: '14px',
                      letterSpacing: '1px'
                    }}
                  >
                    Registered Office
                  </p>
                  <p
                    className="text-[#F0F0F0]"
                    style={{
                      fontFamily: "'Red Hat Text', sans-serif",
                      fontSize: '16px',
                      lineHeight: '1.6'
                    }}
                  >
                    Biomol Visual LLP<br />
                    27 Old Gloucester Street<br />
                    London, United Kingdom<br />
                    WC1N 3AX
                  </p>
                </div>

                <div>
                  <p
                    className="text-[#888] uppercase mb-3 flex items-center gap-2"
                    style={{
                      fontFamily: "'Red Hat Text', sans-serif",
                      fontSize: '14px',
                      letterSpacing: '1px'
                    }}
                  >
                    <Phone className="w-4 h-4" />
                    Phone
                  </p>
                  <p
                    className="text-[#F0F0F0]"
                    style={{
                      fontFamily: "'Red Hat Text', sans-serif",
                      fontSize: '16px',
                      lineHeight: '1.6'
                    }}
                  >
                    <a href="tel:+18883910030" className="text-[#ED8936] hover:text-[#C05621] transition-colors">
                      US: 888 391 0030
                    </a>
                    <br />
                    <a href="tel:+4408007074030" className="text-[#ED8936] hover:text-[#C05621] transition-colors">
                      UK: 0800 707 4030
                    </a>
                  </p>
                </div>

                <div>
                  <p
                    className="text-[#888] uppercase mb-3 flex items-center gap-2"
                    style={{
                      fontFamily: "'Red Hat Text', sans-serif",
                      fontSize: '14px',
                      letterSpacing: '1px'
                    }}
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </p>
                  <p
                    className="text-[#F0F0F0]"
                    style={{
                      fontFamily: "'Red Hat Text', sans-serif",
                      fontSize: '16px'
                    }}
                  >
                    <ObfuscatedEmailLink className="text-[#ED8936] hover:text-[#C05621] transition-colors">
                      hello@biomolvisual.com
                    </ObfuscatedEmailLink>
                  </p>
                </div>

                <div>
                  <p
                    className="text-[#888] uppercase mb-3 flex items-center gap-2"
                    style={{
                      fontFamily: "'Red Hat Text', sans-serif",
                      fontSize: '14px',
                      letterSpacing: '1px'
                    }}
                  >
                    <Clock className="w-4 h-4" />
                    Business Hours
                  </p>
                  <p
                    className="text-[#F0F0F0]"
                    style={{
                      fontFamily: "'Red Hat Text', sans-serif",
                      fontSize: '16px',
                      lineHeight: '1.6'
                    }}
                  >
                    Available 9 AM - 6 PM Pacific<br />
                    Every business day
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
