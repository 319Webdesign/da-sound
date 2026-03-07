import { MetadataRoute } from 'next';

// Canonical URL: www ist die finale Domain (da-sound.de wird dorthin umgeleitet)
const SITE_URL = 'https://www.da-sound.de';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/dashboard/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
