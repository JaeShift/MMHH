/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    serverActions: {
      bodySizeLimit: '25mb',
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Content Security Policy - allows OptiMantra patient flows
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' use.typekit.net *.optimantra.com",
              "style-src 'self' 'unsafe-inline' use.typekit.net p.typekit.net fonts.googleapis.com *.optimantra.com",
              "font-src 'self' use.typekit.net fonts.gstatic.com data:",
              "img-src 'self' data: blob: https: *.optimantra.com",
              "connect-src 'self' p.typekit.net performance.typekit.net *.optimantra.com vercel.com *.vercel.com *.vercel-storage.com",
              "frame-src 'self' https: *.optimantra.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self' *.optimantra.com",
              "object-src 'none'",
              "media-src 'self' *.optimantra.com",
              "manifest-src 'self'",
            ].join('; '),
          },
          // MIME type sniffing protection
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Referrer policy - more permissive for external intake portals
          {
            key: 'Referrer-Policy',
            value: 'no-referrer-when-downgrade',
          },
          // XSS protection (legacy browsers)
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
