'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Team', href: '/team' },
    { label: 'SLAB', href: '/slab' },
    { label: 'Contact', href: '/contact' },
    { label: 'Client Portal', href: '/portal' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md shadow-lg' : ''
      }`}
      style={{
        background: isScrolled ? 'rgba(26, 10, 46, 0.95)' : 'transparent'
      }}
    >
      <div className="container-responsive !max-w-[1500px]" style={{ paddingTop: 'var(--space-3)', paddingBottom: 'var(--space-3)' }}>
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center group"
          >
            <span
              className="tracking-tight text-responsive-md"
              style={{
                fontFamily: "'Red Hat Display', sans-serif",
                fontWeight: '500'
              }}
            >
              <span style={{ color: 'var(--bmv-purple)' }}>BIOMOL&nbsp;</span>
              <span style={{ color: 'var(--bmv-orange)' }}>VISUAL</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center" style={{ gap: 'var(--space-5)' }}>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="nav-link"
                style={{
                  fontFamily: "'Red Hat Display', sans-serif",
                  fontWeight: '500',
                  color: pathname === item.href ? 'var(--bmv-purple-hover)' : 'var(--bmv-text)',
                  fontSize: '16px'
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            style={{ color: 'var(--bmv-text-heading)' }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div
            className="md:hidden border-t"
            style={{
              marginTop: 'var(--space-3)',
              paddingBottom: 'var(--space-3)',
              borderColor: 'var(--bmv-border)'
            }}
          >
            <div
              className="flex flex-col"
              style={{
                gap: 'var(--space-3)',
                marginTop: 'var(--space-3)'
              }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-left nav-link"
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: pathname === item.href ? 'var(--bmv-purple-hover)' : 'var(--bmv-text)',
                    fontSize: '16px'
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}