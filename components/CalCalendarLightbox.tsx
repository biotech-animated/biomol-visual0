'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';

// Declare Cal.com global object
declare global {
  interface Window {
    Cal: {
      init: () => void;
    };
  }
}

interface CalCalendarLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  calUrl: string;
}

export default function CalCalendarLightbox({ isOpen, onClose, calUrl }: CalCalendarLightboxProps) {
  useEffect(() => {
    if (isOpen) {
      // Load Cal.com embed script
      const script = document.createElement('script');
      script.src = 'https://app.cal.com/embed/embed.js';
      script.async = true;
      document.body.appendChild(script);

      // Initialize the calendar after script loads
      script.onload = () => {
        // The Cal.com script will automatically initialize elements with cal-embed class
        if (window.Cal) {
          window.Cal.init();
        }
      };

      return () => {
        // Clean up script when component unmounts
        const existingScript = document.querySelector('script[src="https://app.cal.com/embed/embed.js"]');
        if (existingScript && document.body.contains(existingScript)) {
          document.body.removeChild(existingScript);
        }
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-75"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative max-w-4xl w-full mx-4 max-h-[90vh] bg-transparent">
        {/* Header */}
        <div className="flex items-center justify-between pb-4">
          <h2 className="text-xl font-semibold text-white">Book Your Strategy Call</h2>
          <button
            onClick={onClose}
            className="rounded-full transition-colors text-gray-300 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Calendar Content */}
          <div 
            className="cal-embed"
            data-cal-link={calUrl}
            data-cal-namespace=""
            data-cal-config='{"layout":"month_view"}'
            style={{ width: '100%', height: '600px', overflow: 'auto' }}
          >
            <iframe
              src={`https://cal.com/${calUrl}?embed=true`}
              width="100%"
              height="100%"
              frameBorder="0"
              title="Cal.com Booking"
              style={{ border: 'none', borderRadius: '8px' }}
            />
          </div>
      </div>
    </div>
  );
}
