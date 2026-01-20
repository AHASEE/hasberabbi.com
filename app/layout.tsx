import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
 title: {
    default: 'Hasb-e-Rabbi - Hajj, Umrah & Visa Services Pakistan',
    template: '%s | Hasb-e-Rabbi'
  },description: 'Best Hajj packages, Umrah packages, and Visa services in Pakistan. Ministry approved travel agency since 2013 with 100% visa approval. Economy, Premium & VIP packages available.',
  keywords: 'hajj packages pakistan, umrah packages, visa services, saudi visa, umrah 2025, hajj 2025, travel agency pakistan',
  authors: [{ name: 'Hasb-e-Rabbi Travels' }],
  openGraph: {
    title: 'Hasb-e-Rabbi - Hajj, Umrah & Visa Services',
    description: 'Ministry approved Hajj, Umrah and Visa services in Pakistan',
    url: 'https://hasberabbi.com',
    siteName: 'Hasb-e-Rabbi Travels & Tours',
    locale: 'en_PK',
    type: 'website',
  },
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
      </body>
    </html>
  );
}