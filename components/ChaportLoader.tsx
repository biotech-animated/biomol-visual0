'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function ChaportLoader() {
  useEffect(() => {
    // Only load Chaport after user interaction or after a delay
    let loaded = false;
    let timeoutId: NodeJS.Timeout | null = null;

    const loadChaport = () => {
      if (loaded || typeof window === 'undefined') return;
      
      // Check if Chaport is already loaded
      if ((window as any).chaport) {
        loaded = true;
        return;
      }

      // Initialize Chaport
      const w = window as any;
      const d = document;

      w.chaportConfig = {
        appId: '68fd6310d9fdec4fcce50fc3',
      };

      if (w.chaport) {
        loaded = true;
        return;
      }

      const v3: any = (w.chaport = {});
      v3._q = [];
      v3._l = {};
      v3.q = function (...args: any[]) {
        v3._q.push(args);
      };
      v3.on = function (e: string, fn: Function) {
        if (!v3._l[e]) v3._l[e] = [];
        v3._l[e].push(fn);
      };

      const s = d.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://app.chaport.com/javascripts/insert.js';
      s.onload = () => {
        loaded = true;
      };
      const ss = d.getElementsByTagName('script')[0];
      ss.parentNode?.insertBefore(s, ss);
    };

    // Load after user interactions
    const events = ['mousedown', 'touchstart', 'scroll', 'keydown'];
    const handleInteraction = () => {
      if (!loaded) {
        loadChaport();
        // Remove all listeners after first interaction
        events.forEach(event => {
          document.removeEventListener(event, handleInteraction);
        });
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      }
    };

    // Add interaction listeners
    events.forEach(event => {
      document.addEventListener(event, handleInteraction, { passive: true, once: true });
    });

    // Fallback: Load after 3 seconds if no interaction
    timeoutId = setTimeout(() => {
      if (!loaded) {
        loadChaport();
        events.forEach(event => {
          document.removeEventListener(event, handleInteraction);
        });
      }
    }, 3000);

    // Cleanup
    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleInteraction);
      });
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  // This component doesn't render anything
  return null;
}
