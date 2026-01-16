/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
