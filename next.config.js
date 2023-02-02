/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{
      protocol: 'https',
      hostname: 'via.placeholder.com',
    }],
  },
  compiler: {
    styledComponents: true,
  },
  eslint: {
    dirs: ['pages', 'src'],
  },
}

module.exports = nextConfig
