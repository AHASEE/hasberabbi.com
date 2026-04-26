import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visa Services Pakistan | Tourist, Work & Business Visa | HasbeRabbi',
  description:
    'Pakistan se Saudi Arabia, UAE, UK, Canada, Australia aur Europe visa services. Fast processing, 99% success rate. Karachi mein trusted visa consultants. WhatsApp par free consultation lein!',
  keywords: [
    'visa services pakistan',
    'visa karachi',
    'saudi arabia visa pakistan',
    'uae visa pakistan',
    'uk visa pakistan',
    'canada visa pakistan',
    'schengen visa pakistan',
    'visa consultant karachi',
    'tourist visa pakistan',
    'work visa pakistan',
  ],
  alternates: {
    canonical: 'https://hasberabbi.com/visa-services',
  },
  openGraph: {
    title: 'Visa Services Pakistan | HasbeRabbi',
    description:
      'Saudi Arabia, UAE, UK, Canada aur 8+ countries ke liye visa services. 5000+ visas processed. Free consultation available.',
    url: 'https://hasberabbi.com/visa-services',
    siteName: 'HasbeRabbi',
    locale: 'en_PK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visa Services Pakistan | HasbeRabbi',
    description:
      'Saudi Arabia, UAE, UK, Canada aur 8+ countries ke liye visa services. 5000+ visas processed.',
  },
};

// ✅ Schema Markup — Google ko clearly samjhata hai
const schemaMarkup = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://hasberabbi.com/#business',
      name: 'HasbeRabbi Visa & Travel Services',
      url: 'https://hasberabbi.com',
      telephone: '+923313954965',
      description:
        'Pakistan mein trusted visa consultants. Saudi Arabia, UAE, UK, Canada, Australia aur Europe visa services.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Karachi',
        addressRegion: 'Sindh',
        addressCountry: 'PK',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '24.8607',
        longitude: '67.0011',
      },
      openingHours: 'Mo-Sa 09:00-21:00',
      priceRange: 'PKR 4,500 – 90,000',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '320',
      },
      sameAs: [
        'https://wa.me/923313954965',
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://hasberabbi.com/visa-services/#service',
      name: 'Visa Consultancy Services',
      provider: { '@id': 'https://hasberabbi.com/#business' },
      areaServed: {
        '@type': 'Country',
        name: 'Pakistan',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Visa Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Saudi Arabia Visa' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UAE Dubai Visa' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UK Visa' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Schengen Europe Visa' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Canada Visa' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Australia Visa' } },
        ],
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://hasberabbi.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Visa Services',
          item: 'https://hasberabbi.com/visa-services',
        },
      ],
    },
  ],
};

const countries = [
  { name: 'Saudi Arabia', slug: 'saudi-arabia', flag: '🇸🇦', types: 'Tourist • Business • Umrah • Work', fee: 'PKR 12,000 – 20,000', processing: '3–7 days' },
  { name: 'UAE / Dubai', slug: 'uae-dubai', flag: '🇦🇪', types: 'Tourist • Visit • Work', fee: 'PKR 15,000 – 25,000', processing: '2–4 days' },
  { name: 'United Kingdom', slug: 'united-kingdom', flag: '🇬🇧', types: 'Tourist • Student • Work', fee: 'PKR 35,000 – 55,000', processing: '15–21 days' },
  { name: 'Schengen (Europe)', slug: 'schengen-europe', flag: '🇪🇺', types: 'Tourist • Business • Transit', fee: 'PKR 28,000 – 42,000', processing: '10–15 days' },
  { name: 'Malaysia', slug: 'malaysia', flag: '🇲🇾', types: 'Tourist • Business • Social', fee: 'PKR 5,000 – 10,000', processing: '2–5 days' },
  { name: 'Turkey', slug: 'turkey', flag: '🇹🇷', types: 'e-Visa • Business • Transit', fee: 'PKR 4,500 – 8,000', processing: '1–3 days' },
  { name: 'Canada', slug: 'canada', flag: '🇨🇦', types: 'Visitor • Student • Work • PR', fee: 'PKR 55,000 – 85,000', processing: '4–8 weeks' },
  { name: 'Australia', slug: 'australia', flag: '🇦🇺', types: 'Tourist • Student • Work', fee: 'PKR 55,000 – 90,000', processing: '3–8 weeks' },
];

const steps = [
  { num: '01', title: 'Documents Collect Karein', desc: 'Hamari checklist ke mutabiq tamam documents tayyar karein' },
  { num: '02', title: 'Humse Contact Karein', desc: 'WhatsApp ya call par free consultation lein' },
  { num: '03', title: 'Application Submit', desc: 'Hamari team aapki application prepare aur submit karegi' },
  { num: '04', title: 'Visa Receive Karein', desc: 'Approval par visa home delivery ya email pe milega' },
];

export default function VisaPage() {
  return (
    <>
      {/* ✅ Schema Markup Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Hero */}
      <section className="relative text-white py-20 bg-[url('/visa-hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-black/30"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* ✅ H1 mein main keyword add kiya */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg w-full text-center">
            Visa Services Pakistan
          </h1>
          {/* ✅ Secondary keyword subheading mein */}
          <p className="text-xl max-w-3xl mx-auto mb-4 drop-shadow-md font-semibold">
            Saudi Arabia • UAE • UK • Canada • Australia • Europe
          </p>
          <p className="text-lg max-w-2xl mx-auto mb-10 drop-shadow-md opacity-90">
            Pakistan ke trusted visa consultants. Tourist, Business aur Work visas — fast processing ke saath.
          </p>
          <a
            href="https://wa.me/923313954965?text=I%20need%20visa%20information"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg shadow-2xl hover:scale-105 transition-all inline-block"
          >
            💬 Free Visa Consultation Lein
          </a>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-extrabold text-accent">5000+</div>
              <div className="text-sm opacity-80 mt-1">Visas Processed</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-accent">8+</div>
              <div className="text-sm opacity-80 mt-1">Countries Covered</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-accent">10+</div>
              <div className="text-sm opacity-80 mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-accent">99%</div>
              <div className="text-sm opacity-80 mt-1">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            {/* ✅ H2 mein keyword */}
            <h2 className="text-3xl font-extrabold text-primary-dark mb-3">
              Visa Application Process — 4 Asan Steps
            </h2>
            <p className="text-gray-600">Hum sab handle karte hain — aap bas documents dein</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-6 text-center shadow-md">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-extrabold text-lg mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold text-gray-800 mb-2 text-sm md:text-base">{step.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            {/* ✅ H2 better keyword targeting */}
            <h2 className="text-4xl font-extrabold text-primary-dark mb-4">
              Country-Wise Visa Information & Requirements
            </h2>
            <p className="text-xl text-gray-600">
              Country select karein — complete requirements, fees aur processing time dekhein
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((country) => (
              <Link
                key={country.slug}
                href={`/visa-services/${country.slug}`}
                className="group bg-white border-2 border-gray-100 rounded-2xl shadow-md hover:shadow-xl hover:border-primary transition-all duration-300 overflow-hidden"
                // ✅ aria-label adds accessibility + SEO context
                aria-label={`${country.name} visa requirements and fees`}
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-primary to-primary-dark p-5 text-center">
                  <div className="text-5xl mb-2" role="img" aria-label={`${country.name} flag`}>
                    {country.flag}
                  </div>
                  <h3 className="text-white font-extrabold text-lg">{country.name} Visa</h3>
                  <p className="text-white/70 text-xs mt-1">{country.types}</p>
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">💰 Fee</span>
                    <span className="font-semibold text-primary text-xs">{country.fee}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">⏱ Processing</span>
                    <span className="font-semibold text-gray-700 text-xs">{country.processing}</span>
                  </div>
                  <div className="pt-2 border-t border-gray-100">
                    <span className="text-primary font-bold text-sm group-hover:underline">
                      View Requirements →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Language Info */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Visa Guidance Available in Multiple Languages
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white px-6 py-3 rounded-full shadow-md border-2 border-gray-200">
                <span className="font-semibold text-gray-700">🇬🇧 English</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-md border-2 border-gray-200">
                <span className="font-semibold text-gray-700">🇵🇰 اردو (Urdu)</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-md border-2 border-gray-200">
                <span className="font-semibold text-gray-700">🇮🇳 Hinglish</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section — ✅ Naya section, Google featured snippets ke liye */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-extrabold text-primary-dark mb-10 text-center">
            Visa Services — Aam Sawaalaat (FAQ)
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Pakistan se UAE visa kitne din mein milta hai?',
                a: 'UAE tourist visa Pakistan se generally 2–4 business days mein process hota hai. HasbeRabbi ke through apply karne par hum complete documentation handle karte hain.',
              },
              {
                q: 'UK visa ke liye kya documents chahiye?',
                a: 'UK visitor visa ke liye passport, bank statement (6 months), employment letter, travel insurance, aur accommodation proof chahiye. Hamari team aapko complete checklist deti hai.',
              },
              {
                q: 'Canada visa apply karne mein kitna time lagta hai?',
                a: 'Canada visitor visa processing 4–8 weeks tak le sakta hai. Hum aapki application professionally prepare karte hain taake approval chances maximum hon.',
              },
              {
                q: 'Kya HasbeRabbi Karachi mein hai?',
                a: 'Haan, HasbeRabbi Karachi mein based hai aur puri Pakistan mein visa services provide karta hai. WhatsApp par online consultation bhi available hai.',
              },
            ].map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-2 text-base">❓ {faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-2xl p-10 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Visa Application Mein Help Chahiye?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Hamare visa experts 24/7 available hain — free consultation lein
            </p>
            <a
              href="https://wa.me/923313954965?text=Help%20with%20visa%20application"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent hover:bg-accent-hover text-primary-dark px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-all"
            >
              💬 Chat with Visa Expert
            </a>
          </div>
        </div>
      </section>
    </>
  );
}