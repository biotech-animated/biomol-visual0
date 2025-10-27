'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import ScrollProgress from '@/components/ScrollProgress';
import Footer from '@/components/Footer';
import { Lock } from 'lucide-react';

export default function ClientPortalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate login process
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simple demo login - in real app, this would connect to your auth system
    if (username === 'demo' && password === 'demo') {
      setIsAuthenticated(true);
      sessionStorage.setItem('clientPortalAuth', 'true');
    } else {
      setError('Invalid username or password. Try demo/demo for demo access.');
    }
    
    setIsLoading(false);
  };

  if (isAuthenticated || (typeof window !== 'undefined' && sessionStorage.getItem('clientPortalAuth') === 'true')) {
    return (
      <div className="min-h-screen" style={{ background: 'var(--bmv-bg)' }}>
        <ScrollProgress />
        <Navigation />
        <div style={{ paddingTop: '120px', paddingBottom: 'var(--space-11)' }}>
          <div className="max-w-6xl mx-auto px-6">
            <div style={{ marginBottom: 'var(--space-9)' }}>
              <h1 className="text-center">Client Portal</h1>
              <p
                className="text-center"
                style={{
                  fontSize: '17px',
                  color: 'var(--bmv-text-secondary)',
                  marginTop: 'var(--space-3)'
                }}
              >
                Welcome to your secure client portal
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
              <div>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Project Overview</h3>
                <div
                  style={{
                    position: 'relative',
                    paddingBottom: '56.25%',
                    height: 0,
                    overflow: 'hidden',
                    borderRadius: '12px',
                    background: 'var(--bmv-surface)'
                  }}
                >
                  <iframe
                    src="https://fast.wistia.net/embed/iframe/5iu2hp8mjn"
                    title="Project Overview"
                    allow="autoplay; fullscreen"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 'none'
                    }}
                  />
                </div>
              </div>

              <div>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Final Deliverable</h3>
                <div
                  style={{
                    position: 'relative',
                    paddingBottom: '56.25%',
                    height: 0,
                    overflow: 'hidden',
                    borderRadius: '12px',
                    background: 'var(--bmv-surface)'
                  }}
                >
                  <iframe
                    src="https://fast.wistia.net/embed/iframe/5iu2hp8mjn"
                    title="Final Deliverable"
                    allow="autoplay; fullscreen"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 'none'
                    }}
                  />
                </div>
              </div>
            </div>

            <div style={{ marginTop: 'var(--space-9)', textAlign: 'center' }}>
              <button
                onClick={() => {
                  setIsAuthenticated(false);
                  if (typeof window !== 'undefined') {
                    sessionStorage.removeItem('clientPortalAuth');
                  }
                }}
                style={{
                  padding: '12px 24px',
                  background: 'transparent',
                  color: 'var(--bmv-text-secondary)',
                  border: '1px solid var(--bmv-border)',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 250ms cubic-bezier(0.2, 0.8, 0.2, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--bmv-text)';
                  e.currentTarget.style.color = 'var(--bmv-text)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--bmv-border)';
                  e.currentTarget.style.color = 'var(--bmv-text-secondary)';
                }}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--bmv-bg)' }}>
      <ScrollProgress />
      <Navigation />
      <div
        className="flex items-center justify-center min-h-screen pb-16 pt-24 overflow-y-auto"
      >
        <div
          style={{
            width: '100%',
            maxWidth: '420px',
            padding: 'var(--space-4)',
            background: 'var(--bmv-surface)',
            borderRadius: '12px',
            border: '1px solid var(--bmv-border)',
            margin: 'var(--space-4)'
          }}
          className="sm:p-6"
        >
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                background: 'var(--bmv-purple)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--space-4)'
              }}
            >
              <Lock size={28} color="white" />
            </div>
            <h2>Client Portal</h2>
            <p
              style={{
                fontSize: '15px',
                color: 'var(--bmv-text-secondary)',
                marginTop: 'var(--space-2)'
              }}
            >
              Enter your credentials to access
            </p>
          </div>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <div>
              <label
                htmlFor="username"
                style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  marginBottom: 'var(--space-2)',
                  color: 'var(--bmv-text)'
                }}
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'var(--bmv-bg)',
                  border: '1px solid var(--bmv-border)',
                  borderRadius: '8px',
                  fontSize: '15px',
                  color: 'var(--bmv-text)',
                  outline: 'none',
                  transition: 'border-color 200ms'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = 'var(--bmv-purple)'}
                onBlur={(e) => e.currentTarget.style.borderColor = 'var(--bmv-border)'}
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  marginBottom: 'var(--space-2)',
                  color: 'var(--bmv-text)'
                }}
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'var(--bmv-bg)',
                  border: '1px solid var(--bmv-border)',
                  borderRadius: '8px',
                  fontSize: '15px',
                  color: 'var(--bmv-text)',
                  outline: 'none',
                  transition: 'border-color 200ms'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = 'var(--bmv-purple)'}
                onBlur={(e) => e.currentTarget.style.borderColor = 'var(--bmv-border)'}
                placeholder="Enter your password"
              />
            </div>

            {error && (
              <div
                style={{
                  padding: '12px 16px',
                  background: 'rgba(220, 38, 38, 0.1)',
                  border: '1px solid rgba(220, 38, 38, 0.3)',
                  borderRadius: '8px',
                  fontSize: '14px',
                  color: '#ef4444'
                }}
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '14px',
                background: isLoading ? 'var(--bmv-purple-pressed)' : 'var(--bmv-purple)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '500',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                transition: 'all 250ms cubic-bezier(0.2, 0.8, 0.2, 1)',
                opacity: isLoading ? 0.7 : 1
              }}
              onMouseEnter={(e) => {
                if (!isLoading) e.currentTarget.style.background = 'var(--bmv-purple-hover)';
              }}
              onMouseLeave={(e) => {
                if (!isLoading) e.currentTarget.style.background = 'var(--bmv-purple)';
              }}
            >
              {isLoading ? 'Logging in...' : 'Log In'}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
