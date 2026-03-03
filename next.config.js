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
          // Content Security Policy - relaxed for Practice Better widget
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' use.typekit.net cdn.practicebetter.io *.practicebetter.io",
              "style-src 'self' 'unsafe-inline' use.typekit.net p.typekit.net fonts.googleapis.com *.practicebetter.io",
              "font-src 'self' use.typekit.net fonts.gstatic.com data:",
              "img-src 'self' data: blob: https: *.practicebetter.io",
              "connect-src 'self' p.typekit.net performance.typekit.net *.practicebetter.io https://modernmentalhealthhormones.practicebetter.io vercel.com *.vercel.com *.vercel-storage.com",
              "frame-src 'self' https: *.practicebetter.io https://modernmentalhealthhormones.practicebetter.io",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self' *.practicebetter.io",
              "object-src 'none'",
              "media-src 'self' *.practicebetter.io",
              "manifest-src 'self'",
            ].join('; '),
          },
          // MIME type sniffing protection
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Referrer policy - more permissive for Practice Better
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
