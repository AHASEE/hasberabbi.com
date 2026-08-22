import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import VehicleTiltCard from './VehicleTiltCard';
import {
  MessageCircle,
  Phone,
  Trophy,
  Star,
  ShieldCheck,
  Mountain,
  Trees,
  Waves,
  CloudFog,
  MapPin as PeakIcon,
  Car,
  Route,
  Hotel,
  Sparkles,
  ChevronDown,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Islamabad to Pakistan Tour Packages 2026 | Prado & Coaster with Driver | Hasb-e-Rabbi',
  description:
    'Prado / Coaster tour packages from Islamabad to Hunza, Skardu, Naran, Swat and Murree, driver included. Trusted agency since 2013.',
  alternates: { canonical: 'https://hasberabbi.com/tour-packages/islamabad' },
};

const destinations = [
  {
    name: 'Hunza Valley',
    icon: Mountain,
    image: '/assest/Hunza Valley.jpg',
  },
  {
    name: 'Skardu',
    icon: PeakIcon,
    image: '/assest/Skardu.jpg',
  },
  {
    name: 'Naran Kaghan',
    icon: Trees,
    image: '/assest/Naran Kaghan.jpg',
  },
  {
    name: 'Swat Valley',
    icon: Waves,
    image: '/assest/Swat Valley.jpg',
  },
  {
    name: 'Murree',
    icon: CloudFog,
    image: '/assest/Murree.jpg',
  },
  {
    name: 'Fairy Meadows',
    icon: Mountain,
    image: '/assest/Fairy Meadows.jpg',
  },
];

const packages = [
  {
    name: 'Prado Private Tour',
    price: 'PKR 45,000',
    unit: 'Per Day (Car + Driver)',
    seats: 'Limited Prados Available',
    popular: false,
    features: [
      '4x4 Toyota Prado with Experienced Driver',
      'Fuel Included Within Package Route',
      'Islamabad Pickup & Drop',
      'Ideal for Family / Small Group (up to 5)',
      'Flexible Route Planning',
      'Driver Accommodation Included',
    ],
    booked: '320+ tours completed',
  },
  {
    name: 'Premium Group Coaster',
    price: 'PKR 18,000',
    unit: 'Per Person (All Inclusive)',
    seats: 'Only 6 Seats Left',
    popular: true,
    features: [
      '7 Days / 6 Nights Northern Tour',
      'AC Coaster with Professional Driver',
      'Hotel Stay Included (3-Star)',
      'Breakfast & Dinner Included',
      'Guided Sightseeing at Every Stop',
      'Group Coordinator on Tour',
      '24/7 Support Team',
    ],
    booked: '540+ travelers booked this',
  },
  {
    name: 'VIP Prado Executive',
    price: 'PKR 85,000',
    unit: 'Per Day (All Inclusive)',
    seats: 'Only 2 Prados Left',
    popular: false,
    features: [
      'Brand New Prado with VIP Driver',
      '4-5 Star Hotel Bookings Assisted',
      'Customizable Duration (3-14 Days)',
      'Personal Trip Assistant',
      'Fast Route Planning & Ziyarat/Sightseeing Stops',
      'Full Board Meals Option Available',
    ],
    booked: '95+ VIP tours completed',
  },
];

const faqs = [
  {
    q: 'Does a driver come along with the car?',
    a: 'Yes! Every one of our tour packages includes an experienced, trusted driver with the vehicle — you never have to drive yourself.',
  },
  {
    q: 'How long does it take from Islamabad to Hunza/Skardu?',
    a: 'From Islamabad to Hunza it takes roughly 18-20 hours by road (with overnight stops), and a similar duration to Skardu. We plan the route with comfortable rest stops along the way.',
  },
  {
    q: 'Is fuel included in the package price?',
    a: 'Fuel for the planned route is included in the Prado Private Tour and VIP package. The Coaster group package is fully all-inclusive.',
  },
  {
    q: 'Do I need to pay an advance to book?',
    a: 'Yes, an advance payment is required to confirm your seat/vehicle. The remaining amount can be cleared before or during the tour — get in touch with our team on WhatsApp.',
  },
  {
    q: 'Are these tours safe for families and children?',
    a: 'Absolutely. Our drivers are experienced and we ensure family-friendly stops and comfortable accommodation, especially on the Coaster Group package.',
  },
];

const whyChooseUs = [
  { Icon: Car, title: 'Car + Trusted Driver', desc: 'Every package includes a verified, experienced driver along with the vehicle.' },
  { Icon: Trophy, title: '12+ Years of Experience', desc: 'Hajj, Umrah and now domestic tours — a trusted name in Pakistan since 2013.' },
  { Icon: ShieldCheck, title: 'Fair Pricing', desc: 'Transparent pricing, no hidden charges — what we quote is final.' },
  { Icon: Route, title: 'Flexible Routes', desc: 'We can customize the route according to your requirements.' },
  { Icon: Hotel, title: 'Hotel Assistance', desc: 'We also handle hotel bookings for group packages.' },
  { Icon: Phone, title: '24/7 Support', desc: 'Our team stays with you throughout the tour.' },
];

export default function IslamabadTourPackagesPage() {
  const waNumber = '923313954965';
  const waBase = `https://wa.me/${waNumber}`;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-emerald-50 to-white overflow-hidden">
        <div className="container mx-auto py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary-dark font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
              <Sparkles size={16} /> Car + Driver Included on Every Package
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary-dark mb-4 leading-tight">
              Islamabad to Pakistan Tour Packages 2026
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto md:mx-0 mb-8 text-base md:text-lg">
              Trusted, driver-included tour packages from Islamabad to Hunza, Skardu,
              Naran, Swat and Murree — with Prado or Coaster.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href={`${waBase}?text=Assalamualaikum!%20I%20want%20a%20quote%20for%20Islamabad%20tour%20package`}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-gradient-to-r from-yellow-500 to-amber-600 text-black/90 font-bold px-5 py-3 text-sm sm:text-base rounded-full shadow-md hover:opacity-90 transition"
              >
                <MessageCircle size={18} className="flex-shrink-0" /> Get Quote on WhatsApp
              </a>
              <a
                href="tel:+923313954965"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-primary text-white font-bold px-5 py-3 text-sm sm:text-base rounded-full shadow-md hover:bg-primary-light transition"
              >
                <Phone size={18} className="flex-shrink-0" /> +92 331 3954965
              </a>
            </div>
            <p className="mt-5 text-sm font-semibold text-amber-700">
              Limited Prados Available for Upcoming Season — Book Within 24 Hours
            </p>
          </div>

          {/* 3D tilt hero vehicle image */}
          <div className="mx-auto w-full max-w-md">
            <VehicleTiltCard
              src="/vehicles/prado-black-front.jpg"
              alt="Hasb-e-Rabbi Toyota Land Cruiser — Islamabad tour fleet"
              label="Toyota Land Cruiser"
              sublabel="Available with driver — Islamabad based"
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-emerald-50 border-y border-primary-light/20 py-8">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-extrabold text-primary-dark">12+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-primary-dark">950+</div>
            <div className="text-sm text-gray-600">Happy Travelers</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-primary-dark">100%</div>
            <div className="text-sm text-gray-600">Trusted Drivers</div>
          </div>
          <div>
            <div className="flex items-center justify-center gap-1 text-3xl font-extrabold text-primary-dark">
              4.9 <Star size={22} className="fill-amber-500 text-amber-500" />
            </div>
            <div className="text-sm text-gray-600">Customer Rating</div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="container mx-auto py-14">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary-dark font-semibold text-xs md:text-sm px-4 py-1.5 rounded-full mb-3">
            <Mountain size={14} /> Where We Take You
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Northern Pakistan Destinations
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto text-sm md:text-base">
            From alpine meadows to mountain valleys — explore Pakistan's most loved travel spots
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {destinations.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.name}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-200"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={d.image}
                  alt={`${d.name}, Northern Pakistan`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Icon badge */}
                <div className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center ring-1 ring-white/40">
                  <Icon
                    size={15}
                    className="text-white transition-transform duration-700 ease-out group-hover:rotate-[360deg]"
                  />
                </div>

                {/* Name */}
                <div className="absolute inset-x-0 bottom-0 p-3">
                  <div className="font-bold text-white text-sm leading-tight drop-shadow-sm">
                    {d.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Our Fleet */}
      <section className="bg-gray-50 py-14">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <span className="text-primary-dark font-semibold text-sm">Our Vehicles</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-1">Our Fleet</h2>
            <p className="text-gray-600 mt-2">Well-maintained vehicles, trusted drivers — hover to see closer</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <VehicleTiltCard
              src="/vehicles/prado-white-front.jpg"
              alt="Toyota Prado — Hasb-e-Rabbi fleet"
              label="Toyota Prado"
              sublabel="4x4 · Up to 5 passengers"
            />
            <VehicleTiltCard
              src="/vehicles/land-cruiser-front.jpg"
              alt="Toyota Land Cruiser — Hasb-e-Rabbi fleet"
              label="Toyota Land Cruiser"
              sublabel="VIP executive rides"
            />
            <VehicleTiltCard
              src="/vehicles/corolla-front.jpg"
              alt="Toyota Corolla Altis — Hasb-e-Rabbi fleet"
              label="Toyota Corolla Altis"
              sublabel="City transfers · Small groups"
              bgColor="black"
            />
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-white py-14">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <span className="text-primary-dark font-semibold text-sm">Choose a Package</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-1">
              Islamabad Tour Packages — Car + Driver Included
            </h2>
            <p className="text-gray-600 mt-2">Pick the best package for your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative bg-white rounded-2xl shadow-md border-2 overflow-hidden flex flex-col ${
                  pkg.popular ? 'border-amber-500' : 'border-gray-100'
                }`}
              >
                {pkg.popular && (
                  <div className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-yellow-500 to-amber-600 text-black/90 text-xs font-bold text-center py-1.5">
                    <Star size={14} className="fill-black/80" /> MOST POPULAR
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-xs font-bold text-amber-700 mb-2">{pkg.seats}</div>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-1">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="text-2xl font-extrabold text-primary-dark">{pkg.price}</span>
                    <div className="text-xs text-gray-500">{pkg.unit}</div>
                  </div>
                  <ul className="space-y-2 mb-6 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                        <ShieldCheck size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`${waBase}?text=I'm%20interested%20in%20${encodeURIComponent(
                      pkg.name
                    )}%20(${encodeURIComponent(pkg.price)})`}
                    className="block text-center bg-primary text-white font-semibold py-2.5 rounded-full hover:bg-primary-light transition mb-2"
                  >
                    Book This Package
                  </a>
                  <div className="flex items-center justify-center gap-1 text-center text-xs text-gray-500">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={12} className="fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    {pkg.booked}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto py-14">
        <div className="text-center mb-10">
          <span className="text-primary-dark font-semibold text-sm">Why Choose Hasb-e-Rabbi</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-1">
            Pakistan's Trusted Tour & Travel Partner
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-primary/10 mb-3">
                <item.Icon className="text-primary" size={22} strokeWidth={1.75} />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-14">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <span className="text-primary-dark font-semibold text-sm">FAQ</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-1">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm group"
              >
                <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center list-none">
                  {item.q}
                  <ChevronDown size={18} className="text-primary group-open:rotate-180 transition-transform flex-shrink-0" />
                </summary>
                <p className="text-sm text-gray-600 mt-3">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto py-14 text-center">
        <span className="text-primary-dark font-semibold text-sm">Book Today</span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2 mb-3">
          Book Your Northern Pakistan Tour Now!
        </h2>
        <p className="text-gray-600 mb-6">
          Limited Prados available — car + driver included. Contact us now for a free consultation!
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`${waBase}?text=Assalamualaikum!%20I%20want%20to%20book%20a%20tour%20package`}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-gradient-to-r from-yellow-500 to-amber-600 text-black/90 font-bold px-6 py-3 rounded-full shadow-md hover:opacity-90 transition"
          >
            <MessageCircle size={18} className="flex-shrink-0" /> WhatsApp Us Now
          </a>
          <a
            href="tel:+923313954965"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-primary text-white font-bold px-6 py-3 rounded-full shadow-md hover:bg-primary-light transition"
          >
            <Phone size={18} className="flex-shrink-0" /> Call Now
          </a>
        </div>
      </section>
    </>
  );
}