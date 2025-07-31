/** @type {import('next').NextConfig} */
const securityHeaders = [
  // HTTP Strict Transport Security (HSTS)
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  // Prevent MIME type sniffing
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  // Clickjacking protection
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  // XSS Protection
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  // Referrer Policy
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  // Permissions Policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=()'
  },
  // Content Security Policy (CSP)
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https:;
      style-src 'self' 'unsafe-inline' https:;
      img-src 'self' data: https:;
      font-src 'self' https:;
      connect-src 'self' https:;
      media-src 'self' https:;
      object-src 'none';
      frame-ancestors 'none';
      base-uri 'self';
      form-action 'self';
    `.replace(/\s+/g, ' ').trim()
  }
];

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  // Security-related configurations
  poweredByHeader: false, // Remove X-Powered-By header
  generateEtags: true, // Enable ETags for better caching
  compress: true, // Enable response compression
  productionBrowserSourceMaps: false, // Disable source maps in production
  // Disable directory listing
  images: {
    domains: ['darshtech.com'], // Add your domain here
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
}

// For older browsers that don't support Permissions-Policy
const withSecurityHeaders = (nextConfig = {}) => {
  return {
    ...nextConfig,
    async headers() {
      const headers = await (nextConfig.headers ? nextConfig.headers() : []);
      return [
        ...headers,
        {
          source: '/(.*)',
          headers: [
            ...securityHeaders,
            // Feature-Policy for older browsers
            {
              key: 'Feature-Policy',
              value: "geolocation 'none'; microphone 'none'; camera 'none'; payment 'none'"
            }
          ],
        },
      ];
    },
  };
};

module.exports = withSecurityHeaders(nextConfig);
