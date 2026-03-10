/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Canonical: non-www → www + SEO-Redirects nach Migration (Reihenfolge: spezifisch vor allgemein)
  async redirects() {
    const hostRedirect = {
      source: '/:path*',
      has: [{ type: 'host', value: 'da-sound.de' }],
      destination: 'https://www.da-sound.de/:path*',
      permanent: true,
    };

    // ─── 1. Rechtliches & Basis ─────────────────────────────────────────────
    const rechtliches = [
      { source: '/anfrage', destination: '/booking', permanent: true },
      { source: '/anfrage/', destination: '/booking', permanent: true },
    ];
    // /agb, /datenschutz, /impressum, /kontakt, /booking existieren unverändert – keine Redirects nötig

    // ─── 2. Kategorien (alte Slugs → aktuelle Next.js-Slugs) ────────────────
    const kategorien = [
      { source: '/kategorien/pa-systeme', destination: '/kategorien/pa-anlagen', permanent: true },
      { source: '/kategorien/pa-systeme/', destination: '/kategorien/pa-anlagen', permanent: true },
      { source: '/kategorien/lichttechnik', destination: '/kategorien/statische-scheinwerfer-led-spots', permanent: true },
      { source: '/kategorien/lichttechnik/', destination: '/kategorien/statische-scheinwerfer-led-spots', permanent: true },
      { source: '/kategorien/tontechnik', destination: '/kategorien/mischpulte-mikrofone', permanent: true },
      { source: '/kategorien/tontechnik/', destination: '/kategorien/mischpulte-mikrofone', permanent: true },
      { source: '/kategorien/mikrofone', destination: '/kategorien/mischpulte-mikrofone', permanent: true },
      { source: '/kategorien/mikrofone/', destination: '/kategorien/mischpulte-mikrofone', permanent: true },
      { source: '/kategorien/effektmaschinen', destination: '/kategorien/nebelmaschinen-buehneneffekte', permanent: true },
      { source: '/kategorien/effektmaschinen/', destination: '/kategorien/nebelmaschinen-buehneneffekte', permanent: true },
      { source: '/kategorien/scheinwerfer', destination: '/kategorien/statische-scheinwerfer-led-spots', permanent: true },
      { source: '/kategorien/scheinwerfer/', destination: '/kategorien/statische-scheinwerfer-led-spots', permanent: true },
    ];
    // moving-heads, pa-systeme (→ pa-anlagen) bereits abgedeckt; Rest identisch mit aktuellen Slugs

    return [hostRedirect, ...rechtliches, ...kategorien];
  },
  // Performance-Optimierungen
  compress: true,
  poweredByHeader: false,
  // Optimierung für Mobile
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 Jahr für statische Assets
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  // Optimierte Compiler-Optionen
  swcMinify: true,
};

module.exports = nextConfig;
