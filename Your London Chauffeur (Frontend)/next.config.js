/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ylc-media.s3.eu-west-2.amazonaws.com', 'ylc-media.s3.amazonaws.com', 'res.cloudinary.com'],
  },
}

module.exports = nextConfig
