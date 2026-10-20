import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Umrah Packages from Pakistan | Hasb-e-Rabbi Travels',
  description:
    'Explore Umrah packages from Pakistan with hotel, transport and visa support options. Compare inclusions and request a tailored quote.',
  alternates: { canonical: 'https://hasberabbi.com/umrah-packages' },
  openGraph: {
    title: 'Umrah Packages from Pakistan | Hasb-e-Rabbi Travels',
    description: 'Compare Umrah travel packages, hotel options and services from Pakistan.',
    url: 'https://hasberabbi.com/umrah-packages',
    type: 'website',
  },
};

export default function UmrahPackagesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
