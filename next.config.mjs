/** @type {import('next').NextConfig} */
const nextConfig = {
  // Basic configuration
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  
  // Essential optimizations
  compress: true,
  generateEtags: true,
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 year
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // HTTP agent options
  httpAgentOptions: {
    keepAlive: true,
  },
};

module.exports = nextConfig;
