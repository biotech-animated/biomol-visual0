'use client';

import { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    handleResize(); // Initial check
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const navItems = [
    { label: 'SLAB', href: '/slab' },
    { label: 'Team', href: '/team' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Client Portal', href: '/portal', icon: true },
    { label: 'Contact', href: '/contact', isButton: true }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled || isMobile ? 'backdrop-blur-md shadow-lg' : ''
      }`}
      style={{
        background: isScrolled || isMobile ? 'rgba(26, 10, 46, 0.7)' : 'transparent',
        transition: 'all 500ms cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div 
        className="container-responsive !max-w-[1500px]" 
        style={{ 
          paddingTop: 'var(--space-4)', 
          paddingBottom: 'var(--space-4)'
        }}
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center group"
          >
            <span
              className="tracking-tight text-[24px]"
              style={{
                fontFamily: "'Red Hat Display', sans-serif",
                fontWeight: '500',
                background: 'linear-gradient(90deg, var(--bmv-purple) 0%, var(--bmv-orange) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              BIOMOL VISUAL
            </span>
          </Link>

          <div className="hidden md:flex items-center" style={{ gap: 'var(--space-5)' }}>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href || '#'}
                className={item.isButton ? '' : 'nav-link'}
                style={{
                  fontFamily: "'Red Hat Display', sans-serif",
                  fontWeight: '500',
                  color: pathname === item.href ? 'var(--bmv-purple-hover)' : 'var(--bmv-text)',
                  fontSize: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  ...(item.isButton && {
                    padding: '8px 20px',
                    borderRadius: '20px',
                    border: '2px solid rgba(226, 232, 240, 0.5)',
                    transition: 'all 250ms cubic-bezier(0.2, 0.8, 0.2, 1)'
                  })
                }}
                onMouseEnter={(e) => {
                  if (item.isButton) {
                    e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.7)';
                    e.currentTarget.style.background = 'rgba(226, 232, 240, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (item.isButton) {
                    e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.5)';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {item.icon && <User size={16} />}
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
                  href={item.href || '#'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={item.isButton ? 'text-left' : 'text-left nav-link'}
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: '500',
                    color: pathname === item.href ? 'var(--bmv-purple-hover)' : 'var(--bmv-text)',
                    fontSize: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    ...(item.isButton && {
                      padding: '8px 20px',
                      borderRadius: '20px',
                      border: '2px solid rgba(226, 232, 240, 0.5)',
                      width: 'fit-content'
                    })
                  }}
                >
                  {item.icon && <User size={16} />}
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