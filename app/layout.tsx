import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
  metadataBase: new URL('https://biomolvisual.com'),
  title: {
    default: "Biomol Visual - Molecular & Cellular MOA Visualization",
    template: "%s | Biomol Visual"
  },
  description: "Molecular & Cellular MOA Visualization That Gets You Funded. We translate complex molecular science into compelling visual stories designed to win investor confidence.",
  keywords: ['medical animation', 'molecular visualization', 'MOA visualization', 'biotech animation', 'scientific animation', 'cellular visualization', 'medical illustration', 'pharmaceutical visualization'],
  authors: [{ name: 'Biomol Visual' }],
  creator: 'Biomol Visual',
  publisher: 'Biomol Visual',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://biomolvisual.com',
    siteName: 'Biomol Visual',
    title: 'Biomol Visual - Molecular & Cellular MOA Visualization',
    description: 'Molecular & Cellular MOA Visualization That Gets You Funded. We translate complex molecular science into compelling visual stories designed to win investor confidence.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Biomol Visual - Molecular & Cellular MOA Visualization',
    description: 'Molecular & Cellular MOA Visualization That Gets You Funded. We translate complex molecular science into compelling visual stories designed to win investor confidence.',
  },
  verification: {
    // Add your Google Search Console verification code here when available
    // google: 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Biomol Visual",
              "description": "Molecular & Cellular MOA Visualization That Gets You Funded",
              "url": "https://biomolvisual.com",
              "logo": "https://biomolvisual.com/favicon.ico",
              "areaServed": "Worldwide",
              "serviceType": "Medical Animation Services",
              "knowsAbout": [
                "Molecular Mechanism of Action Visualization",
                "Cellular Biology Visualization",
                "Biotechnology Communication",
                "Scientific Animation",
                "Pharmaceutical Visualization"
              ],
              "offers": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "MOA Visualization Services",
                  "description": "Professional molecular and cellular visualization services for biotech companies"
                }
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "info@biomolvisual.com"
              }
            })
          }}
        />
        <Script
          id="chaport-live-chat"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,v3){
                w.chaportConfig = {
                  appId : '68fd6310d9fdec4fcce50fc3',
                };

                if(w.chaport)return;v3=w.chaport={};v3._q=[];v3._l={};v3.q=function(){v3._q.push(arguments)};v3.on=function(e,fn){if(!v3._l[e])v3._l[e]=[];v3._l[e].push(fn)};var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://app.chaport.com/javascripts/insert.js';var ss=d.getElementsByTagName('script')[0];ss.parentNode.insertBefore(s,ss)})(window, document);
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
