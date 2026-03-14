import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Hasb-e-Rabbi - Hajj, Umrah & Visa Services Pakistan',
    template: '%s | Hasb-e-Rabbi'
  },
  description: 'Best Hajj packages, Umrah packages, and Visa services in Pakistan. Ministry approved travel agency since 2013 with 100% visa approval.',
  keywords: 'hajj packages pakistan, umrah packages, visa services',
  authors: [{ name: 'Hasb-e-Rabbi Travels' }],
  alternates: {
    canonical: 'https://hasberabbi.com',
  },
  openGraph: {
    title: 'Hasb-e-Rabbi - Hajj, Umrah & Visa Services',
    description: 'Ministry approved Hajj, Umrah and Visa services in Pakistan',
    url: 'https://hasberabbi.com',
    siteName: 'Hasb-e-Rabbi Travels & Tours',
    locale: 'en_PK',
    type: 'website',
  },
  verification: {
    google: 'lvUsHPEtLdlMqIK4AGSahDqPprVSl-iPIoYMKNC7Ao8',
  },
  other: {
      'msvalidate.01': '74A82FCA7545743C7B40A06A316422CA',
    }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights /> 
      </body>
    </html>
  );
}
