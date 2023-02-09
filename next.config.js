/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{
      protocol: 'https',
      hostname: 'image.bplink66.com',
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
