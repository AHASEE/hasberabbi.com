/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      }
    ],
  },
  async redirects() {
    return [
      {
        source: '/umrah',
        destination: '/umrah-packages',
        permanent: true,
      },
      {
        source: '/hajj',
        destination: '/hajj-packages',
        permanent: true,
      },
      {
        source: '/visa',
        destination: '/visa-services',
        permanent: true,
      },
    ]
  },
}

export default nextConfig