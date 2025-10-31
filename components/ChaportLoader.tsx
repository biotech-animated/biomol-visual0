'use client';

import { useEffect } from 'react';

export default function ChaportLoader() {
  useEffect(() => {
    // Load Chaport after 3 seconds
    const timer = setTimeout(() => {
      if (typeof window === 'undefined') return;

      // Check if Chaport is already loaded
      if ((window as any).chaport) return;

      // Initialize Chaport configuration
      const w = window as any;
      const d = document;

      w.chaportConfig = {
        appId: '68fd6310d9fdec4fcce50fc3',
      };

      // Initialize Chaport object
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

      // Load Chaport script
      const script = d.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://app.chaport.com/javascripts/insert.js';
      const firstScript = d.getElementsByTagName('script')[0];
      firstScript.parentNode?.insertBefore(script, firstScript);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
