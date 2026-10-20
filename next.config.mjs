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
  async headers() {
    return [
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      // HTTP to HTTPS
      {
        source: '/:path*',
        has: [{ type: 'header', key: 'x-forwarded-proto', value: 'http' }],
        destination: 'https://hasberabbi.com/:path*',
        permanent: true,
      },
      // WWW to non-WWW
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.hasberabbi.com' }],
        destination: 'https://hasberabbi.com/:path*',
        permanent: true,
      },
      // Preserve the old Haramain rates URL
      {
        source: '/blog/haramain-train-ticket-prices-2026-rates-table',
        destination: '/blog/haramain-train-ticket-prices-2026-rates-table-hinglish-urduhindi',
        permanent: true,
      },
      // Fix previously shared non-canonical Solo Female Umrah links.
      {
        source: '/solo-female-umrah-from-pakistan-2026',
        destination: '/blog/solo-female-umrah-from-pakistan-2026',
        permanent: true,
      },
      // Purane redirects
      { source: '/umrah', destination: '/umrah-packages', permanent: true },
      { source: '/hajj', destination: '/hajj-packages', permanent: true },
      { source: '/visa', destination: '/visa-services', permanent: true },
      { source: '/admin', destination: '/hb-secure-panel-92', permanent: true },
{ source: '/admin/:path*', destination: '/hb-secure-panel-92/:path*', permanent: true },
{ source: '/hb-secure-panel-92/new', destination: '/hb-secure-panel-92/blogs/new', permanent: true },
    ]
  },
}

export default nextConfig