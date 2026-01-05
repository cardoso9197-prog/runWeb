/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'runrun-backend.up.railway.app'],
  },
}

module.exports = nextConfig
