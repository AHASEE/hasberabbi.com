'use client';

import { useState } from 'react';
import PackageCard from '@/components/PackageCard';

export default function UmrahPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: 'Is 100% visa approval really guaranteed?',
      a: 'We handle your Umrah visa application with all required documents professionally prepared. While we maintain a strong approval track record, final approval rests with the Saudi authorities.'
    },
    {
      q: 'What is included in the package price?',
      a: 'Every package includes visa processing, hotel accommodation, transport, and Ziyarat tours as listed on each card. Meals, insurance, and flights vary by package — check the feature list above.'
    },
    {
      q: 'Can I customize my package (extra days, room type, etc.)?',
      a: 'Yes — the Executive VIP package is fully customizable (7-21 days), and room sharing options (Sharing/Quad/Triple/Double) are available on the Family Tour package. Message us on WhatsApp to customize any package.'
    },
    {
      q: 'How far are the hotels from Haram?',
      a: 'It depends on the package — Economy is around 600m, Premium is about 100m, and our Family Tour hotels are just 8-10 minutes\' walk from Haram in both Makkah and Madinah.'
    },
    {
      q: 'What is the cancellation / refund policy?',
      a: 'Refund terms depend on visa and hotel booking status at the time of cancellation. Contact our support team on WhatsApp for the exact policy on your booked package.'
    },
    {
      q: 'What documents do I need for the Umrah visa?',
      a: 'A valid passport (6+ months validity), passport-size photographs, and a completed visa application. Our team will guide you through the exact document checklist once you book.'
    }
  ];

  const packages = [
    {
      title: 'Economy Umrah Package',
      price: 'PKR 195,000',
      duration: 'Per Person (All Inclusive)',
      image: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?w=800&q=80',
      features: [
        '10 Days / 9 Nights Duration',
        'Visa Processing Included',
        '3-Star Hotel (600m from Haram)',
        'Shared AC Transport',
        'Breakfast Included',
        'Ziyarat Tours in Makkah & Madinah'
      ],
      seatsLeft: 8,
      reviews: '⭐⭐⭐⭐⭐ 487 travelers booked this',
      whatsappText: "I'm interested in Economy Umrah Package (PKR 195,000)"
    },
    {
      title: 'Premium Group Package',
      price: 'PKR 345,000',
      duration: 'Per Person (All Inclusive)',
      image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&q=80',
      features: [
        '15 Days / 14 Nights Duration',
        'Visa + Travel Insurance',
        '4-Star Hotel (100m from Haram)',
        'Luxury AC Bus Transport',
        'Full Board Meals',
        'Complete Ziyarat Tours',
        'Expert Group Coordinator',
        '24/7 Support Team'
      ],
      popular: true,
      seatsLeft: 5,
      reviews: '⭐⭐⭐⭐⭐ 1,234 travelers booked',
      whatsappText: "I'm interested in Premium Umrah Package (PKR 345,000)"
    },
    {
      title: 'Executive VIP Package',
      price: 'PKR 455,000',
      duration: 'Per Person (All Inclusive)',
      image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=800&q=80',
      features: [
        'Customizable Duration (7-21 Days)',
        'Executive Visa Processing',
        '5-Star Clock Tower Hotels',
        'Private GMC/Coaster Transport',
        'Full Board Premium Meals',
        'VIP Ziyarat Tours',
        'Personal Assistant 24/7',
        'Fast Track Airport',
        'Laundry Services'
      ],
      seatsLeft: 3,
      reviews: '⭐⭐⭐⭐⭐ 289 travelers booked',
      whatsappText: "I'm interested in VIP Package (PKR 455,000)"
    },
    {
      title: 'Umrah Family Tour + Jeddah & Taif',
      price: 'From PKR 325,000',
      duration: '20 Days Economy (All Inclusive)',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
      features: [
        'Umrah Visa & Travel Insurance Included',
        'Direct Return Air Ticket',
        'Makkah: 8-9 mins walk | Madinah: 9-10 mins walk',
        'Professional Urdu Speaking Tour Guide',
        '2 Complimentary Meals Daily',
        'Complete Ziyarat + Jeddah & Taif Sightseeing',
        'Round Transportation by Bus'
      ],
      popular: true,
      badgeLabel: '👨‍👩‍👧‍👦 FAMILY FAVORITE',
      seatsLeft: 12,
      reviews: '⭐⭐⭐⭐⭐ 280 families completed',
      pricingTiers: [
        { type: 'Sharing', price: 'PKR 325,000' },
        { type: 'Quad', price: 'PKR 330,000' },
        { type: 'Triple', price: 'PKR 370,000' },
        { type: 'Double', price: 'PKR 399,000' }
      ],
      whatsappText: "I'm interested in Umrah Family Tour + Jeddah & Taif (From PKR 325,000)"
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden text-white py-20">
        {/* Background: Makkah, Taif, Madina, Jeddah — each a full column with a label */}
        <div className="absolute inset-0 flex">
          <div className="relative w-1/4 h-full">
            <img
              src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmqOqJyNxRjgFN3YKKTidWzeO0w7WWV2kkinKRjwlk4Bn0aJXuSiVqHZDjf_CRimu4xNRO26_fDVZ0H5oCdKi51fUMLD3fE6qE4mGgBK32sy-8-tDCym3y2WqTFfQAFly5fHw=s1360-w1360-h1020-rw"
              alt="Makkah"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/55 backdrop-blur px-5 py-1.5 rounded-full text-sm font-extrabold tracking-widest">
              MAKKAH
            </span>
          </div>
          <div className="relative w-1/4 h-full">
            <img src="/images/hero/jeddah-golden-sphere.jpg" alt="Taif" className="w-full h-full object-cover" />
            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/55 backdrop-blur px-5 py-1.5 rounded-full text-sm font-extrabold tracking-widest">
              TAIF
            </span>
          </div>
          <div className="relative w-1/4 h-full">
            <img
              src="https://images.unsplash.com/photo-1646424857576-2a66db82a65c?w=1920&q=80"
              alt="Madina"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/55 backdrop-blur px-5 py-1.5 rounded-full text-sm font-extrabold tracking-widest">
              MADINA
            </span>
          </div>
          <div className="relative w-1/4 h-full">
            <img src="/images/hero/jeddah-coastline.jpg" alt="Jeddah" className="w-full h-full object-cover" />
            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/55 backdrop-blur px-5 py-1.5 rounded-full text-sm font-extrabold tracking-widest">
              JEDDAH
            </span>
          </div>
        </div>

        {/* Subtle overlay just for text readability — images stay clearly visible */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Hot Deal moving marquee */}
        <div className="absolute top-0 left-0 w-full overflow-hidden bg-red-600 text-white py-2 shadow-lg z-10">
          <div className="flex whitespace-nowrap animate-marquee">
            {Array(2)
              .fill(0)
              .map((_, i) => (
                <span key={i} className="flex items-center gap-8 px-8 text-sm md:text-base font-bold tracking-wide">
                  <span>🔥 HOT DEAL — LIMITED SEATS AVAILABLE</span>
                  <span>⏰ BOOK NOW BEFORE PRICES RISE</span>
                  <span>🕋 100% VISA APPROVAL GUARANTEE</span>
                  <span>💰 STARTING FROM PKR 195,000 ONLY</span>
                </span>
              ))}
          </div>
          <style jsx>{`
            @keyframes marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-marquee {
              animation: marquee 18s linear infinite;
              width: max-content;
            }
          `}</style>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center pt-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Best Umrah Packages 2026
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Economy, Premium & VIP packages with 100% visa approval guarantee
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/923322352945?text=I%20want%20Umrah%20quote"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:scale-105 transition-all"
            >
              💬 Get Quote on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20" id="packages">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary-dark mb-4">
              Umrah Packages 2026 - All Inclusive
            </h2>
            <p className="text-xl text-gray-600">
              Choose the package that suits your budget
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {packages.map((pkg, idx) => (
              <PackageCard key={idx} {...pkg} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-emerald-50 rounded-2xl p-10 text-center">
            <h3 className="text-3xl font-bold text-primary-dark mb-4">
              Need Help Choosing?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Our experts are available 24/7
            </p>
            <a href="https://wa.me/923322352945?text=Help%20me%20choose%20package"
              target="_blank"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-all"
            >
              💬 Chat with Expert
            </a>
          </div>

          {/* FAQ */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h3 className="text-3xl font-extrabold text-primary-dark text-center mb-10">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {faqs.map((item, idx) => (
                <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-primary-dark">{item.q}</span>
                    <span className={`text-primary text-2xl leading-none shrink-0 transition-transform ${openFaq === idx ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-5 text-gray-600 bg-white">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}