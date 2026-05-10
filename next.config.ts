import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Item 1: Image optimization — WebP/AVIF auto-conversion
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 1080, 1920],
    imageSizes: [100, 200, 400],
  },

  // Strict mode for catching side effects
  reactStrictMode: true,

  // Headers for security + caching
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      {
        // Cache static assets aggressively
        source: '/images/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

// Item 3: Bundle analysis — run with `ANALYZE=true npm run build`
const withBundleAnalyzer =
  process.env.ANALYZE === 'true'
    ? // eslint-disable-next-line @typescript-eslint/no-require-imports
      require('@next/bundle-analyzer')({ enabled: true })
    : (config: NextConfig) => config;

export default withBundleAnalyzer(nextConfig);
