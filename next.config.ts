/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')()

const advancedHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
]

const nextConfig = withNextIntl({
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true
  },
  transpilePackages: ['mui-file-input'],
  images: {
    unoptimized: true
  },
  output: 'export', // Static export için
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}'
    },
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}'
    }
  },
  i18n: {
    locales: ['en', 'tr'],
    defaultLocale: 'en'
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: advancedHeaders
      }
    ]
  }
})

module.exports = nextConfig
