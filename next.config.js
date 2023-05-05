/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    CLIENT_URL: 'https://api.sosyaldugun.com'
  }
}

module.exports = nextConfig
