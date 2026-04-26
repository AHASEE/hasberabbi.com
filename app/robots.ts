import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/blog',
          '/blog/',
          '/visa-services',
          '/visa-services/',
          '/umrah-packages',
          '/hajj-packages',
          '/about',
          '/contact',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '/*.json$',
        ],
      },
    ],
    sitemap: 'https://hasberabbi.com/sitemap.xml',
    host: 'https://hasberabbi.com',
  };
}