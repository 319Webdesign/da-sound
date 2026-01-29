import { MetadataRoute } from 'next';
import { categories } from '@/lib/categories';
import { products } from '@/lib/products';

const SITE_URL = 'https://da-sound.de';

const staticRoutes: {
  path: string;
  priority: number;
  changefreq: MetadataRoute.SitemapEntry['changefreq'];
}[] = [
  { path: '/', priority: 1, changefreq: 'daily' },
  { path: '/kontakt', priority: 0.9, changefreq: 'weekly' },
  { path: '/booking', priority: 0.8, changefreq: 'weekly' },
  { path: '/datenschutz', priority: 0.7, changefreq: 'monthly' },
  { path: '/impressum', priority: 0.7, changefreq: 'monthly' },
  { path: '/liefergebiet', priority: 0.7, changefreq: 'monthly' },
  { path: '/ueber-uns', priority: 0.7, changefreq: 'monthly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries = staticRoutes.map(route => ({
    url: new URL(route.path, SITE_URL).toString(),
    lastModified,
    priority: route.priority,
    changefreq: route.changefreq,
  }));

  const categoryEntries = categories.map(category => ({
    url: new URL(`/kategorien/${category.slug}`, SITE_URL).toString(),
    lastModified,
    priority: 0.85,
    changefreq: 'weekly' as const,
  }));

  const productEntries = products.map(product => ({
    url: new URL(`/produkte/${product.id}`, SITE_URL).toString(),
    lastModified,
    priority: 0.75,
    changefreq: 'weekly' as const,
  }));

  return [...staticEntries, ...categoryEntries, ...productEntries];
}
