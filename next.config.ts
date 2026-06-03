import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', // This allows any path under the hostname
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        // Mídia do Hygraph (inclui endpoints regionais, ex.: us-west-2.graphassets.com)
        protocol: 'https',
        hostname: '**.graphassets.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
