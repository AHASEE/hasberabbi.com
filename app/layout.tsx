import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Hasb-e-Rabbi - Hajj, Umrah & Visa Services Pakistan',
    template: '%s | Hasb-e-Rabbi'
  },
  description: 'Best Hajj packages, Umrah packages, and Visa services in Pakistan. Ministry approved travel agency since 2013 with 100% visa approval.',
  keywords: 'hajj packages pakistan, umrah packages, visa services, hajj packages karachi, umrah packages lahore, umrah packages islamabad',
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

const schema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Hasb-e-Rabbi Travels & Tours",
  "url": "https://hasberabbi.com",
  "logo": "https://hasberabbi.com/logo.jpg",
  "description": "Ministry approved Hajj & Umrah travel agency in Pakistan since 2013.",
  "telephone": "+92-331-3954965",
  "email": "haseebclubi33@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office 202, Dolmen Center",
    "addressLocality": "Karachi",
    "addressRegion": "Sindh",
    "addressCountry": "PK"
  },
  "openingHours": "Mo-Sa 09:00-21:00",
  "priceRange": "PKR 185,000 - PKR 1,250,000",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "892"
  },
  "areaServed": [
    "Karachi", "Lahore", "Islamabad", "Rawalpindi", "Peshawar", "Quetta"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CF6J0QLKMG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CF6J0QLKMG');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}