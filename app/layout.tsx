import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import ChaportLoader from '@/components/ChaportLoader';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});


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
              "alternateName": "Biotech Animated",
              "foundingDate": "2015-01-01",
              "slogan": "Molecular & Cellular MOA Visualization That Gets You Funded",
              "description": "Molecular & Cellular MOA Visualization That Gets You Funded. We translate complex molecular science into compelling visual stories designed to win investor confidence.",
              "url": "https://biomolvisual.com",
              "logo": "https://biomolvisual.com/favicon.ico",
              "areaServed": "Worldwide",
              "numberOfEmployees": 10,
              "serviceType": "Medical Animation Services",
              "sameAs": [
                "https://www.linkedin.com/company/biotechanimated",
                "https://twitter.com/biotechanimated",
                "https://www.youtube.com/@BiotechAnimated",
                "https://www.instagram.com/biotechanimated/"
              ],
              "knowsAbout": [
                "Molecular Mechanism of Action Visualization",
                "Cellular Biology Visualization",
                "Biotechnology Communication",
                "Scientific Animation",
                "Pharmaceutical Visualization",
                "Mechanism of Disease (MOD) Visualization",
                "Biotherapeutic Mechanism Visualization",
                "Platform Technology Visualization"
              ],
              "offers": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Molecular & Cellular MOA Visualization",
                    "description": "Scientifically precise molecular and cellular mechanism of action visualizations for biotech companies"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mechanism of Disease (MOD) Visualization",
                    "description": "Clear visualization of disease mechanisms for investor and partner communications"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Biotherapeutic Mechanism Visualization",
                    "description": "Visual storytelling for biotherapeutic drug mechanisms and development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Platform Technology Visualization",
                    "description": "Visualization of innovative platform technologies for biotech companies"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Scientific Storytelling",
                    "description": "Transforming complex science into compelling narratives for fundraising and partnerships"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "SLAB - Seamless Loop Asset Bank",
                    "description": "Premium looping molecular and cellular assets ready to customize and deploy in weeks"
                  }
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "bestRating": "5",
                "ratingCount": "70",
                "reviewCount": "70"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "info@biomolvisual.com",
                "availableLanguage": "English"
              },
              "additionalProperty": [
                {
                  "@type": "PropertyValue",
                  "name": "Total Client Funding Raised",
                  "value": "$500M+"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Successful Funding Rounds",
                  "value": "30+"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Total Clients Served",
                  "value": "70+"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Previous Brand Name",
                  "value": "Biotech Animated (rebranded to Biomol Visual in October 2025)"
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <ChaportLoader />
      </body>
    </html>
  );
}
