/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Performance-Optimierungen
  compress: true,
  poweredByHeader: false,
  // Optimierung für Mobile
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
