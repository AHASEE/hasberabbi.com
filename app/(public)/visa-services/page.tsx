import Link from 'next/link';

export const metadata = {
  title: 'Visa Services - Country Visa Information & Requirements',
  description: 'Complete visa information for multiple countries. Tourist, business, and work visa services from Pakistan.',
  alternates: {
    canonical: 'https://hasberabbi.com/visa-services',
  },
}

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
      {/* Hero */}
      <section className="relative text-white py-20 bg-[url('/visa-hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-black/30"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg w-full text-center">
            Visa Services & Information
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-10 drop-shadow-md">
            Complete visa guides for multiple countries. Tourist, Business & Work visas.
          </p>
          <a
            href="https://wa.me/923313954965?text=I%20need%20visa%20information"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg shadow-2xl hover:scale-105 transition-all inline-block"
          >
            💬 Get Visa Consultation
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
            <h2 className="text-3xl font-extrabold text-primary-dark mb-3">How It Works</h2>
            <p className="text-gray-600">Simple 4-step process — hum sab handle karte hain</p>
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
            <h2 className="text-4xl font-extrabold text-primary-dark mb-4">
              Visa Information by Country
            </h2>
            <p className="text-xl text-gray-600">
              Country select karein — complete requirements aur guide dekhein
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((country) => (
              <Link
                key={country.slug}
                href={`/visa-services/${country.slug}`}
                className="group bg-white border-2 border-gray-100 rounded-2xl shadow-md hover:shadow-xl hover:border-primary transition-all duration-300 overflow-hidden"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-primary to-primary-dark p-5 text-center">
                  <div className="text-5xl mb-2">{country.flag}</div>
                  <h3 className="text-white font-extrabold text-lg">{country.name}</h3>
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
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available in Multiple Languages</h3>
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

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-2xl p-10 text-center">
            <h3 className="text-3xl font-bold mb-4">Need Help with Your Visa Application?</h3>
            <p className="text-lg mb-8 opacity-90">Our visa experts are available 24/7 to assist you</p>
            <a
              href="https://wa.me/923313954965?text=Help%20with%20visa%20application"
              target="_blank"
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