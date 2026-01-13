/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Performance-Optimierungen
  compress: true,
  poweredByHeader: false,
  // Optimierung für Mobile
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  // Experimental features für bessere Performance
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
