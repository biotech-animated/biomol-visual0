import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot-Image',
        disallow: ['/logos/'],
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/portal/*', '/logos/'],
      },
    ],
    sitemap: 'https://biomolvisual.com/sitemap.xml',
  };
}

