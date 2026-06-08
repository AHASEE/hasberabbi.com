// app/page.tsx
import React from "react";
import Image from 'next/image'
import "../../app/(public)/style.css"
import Link from "next/link";
export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero" id="home" style={{ position: 'relative' }}>
        {/* Background Image - Next.js optimized */}
        <Image
          src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1200&q=70&auto=format&fit=crop"
          alt="Makkah Masjid al-Haram"
          fill
          priority
          style={{ objectFit: 'cover', zIndex: 0 }}
        />
        {/* Dark overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.52)', zIndex: 1 }} />
        <div className="hero-content" style={{ position: 'relative', zIndex: 2 }}>
          <span className="hero-badge">
            ✨ 100% Verified Ministry Approved Travel Agency
          </span>
          <h1 data-lingo="hero_title">
            Best Hajj & Umrah Packages 2026 Pakistan
          </h1>
          <p className="hero-subtext">
            Premium packages starting PKR 195,000 with luxury hotels, expert
            guidance, and 100% visa approval guarantee.
          </p>
          <div className="hero-buttons flex flex-col md:flex-row gap-4 mt-4">
            <a
              href="https://wa.me/923313954965?text=Assalamualaikum!%20I%20want%20instant%20quote%20for%20Umrah%20package"
              className="btn btn-whatsapp"
              target="_blank"
              rel="noreferrer"
            >
              💬 Get Instant Quote on WhatsApp
            </a>
            <a href="tel:+923313954965" className="btn btn-primary">
              📞 Call Now: +92 331 3954965
            </a>
          </div>
          <div className="urgency-banner mt-4">
            ⚡ Only 12 Seats Left for March 2026 | Book Within 24 Hours
          </div>
        </div>
      </section>
    
      {/* Stats Section */}
      <section className="container stats-container my-12">
        <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="stat-box">
            <div className="stat-number text-3xl font-bold">12+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-box">
            <div className="stat-number text-3xl font-bold">8,450+</div>
            <div className="stat-label">Happy Pilgrims</div>
          </div>
          <div className="stat-box">
            <div className="stat-number text-3xl font-bold">100%</div>
            <div className="stat-label">Visa Approval</div>
          </div>
          <div className="stat-box">
            <div className="stat-number text-3xl font-bold">4.9⭐</div>
            <div className="stat-label">Customer Rating</div>
          </div>
        </div>
      </section>

      



      {/* Packages Section */}
      <section className="section-padding" id="packages" style={{ background: "#f9fafb" }}>
        <div className="container mx-auto px-4">
          <div className="section-header text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">
              Cheap & Premium Umrah Packages 2026
            </h2>
            <p>Choose the best package for your budget with installment options available</p>
          </div>
          <div className="packages-grid grid md:grid-cols-3 gap-6">
            {/* Economy Package */}
            <div className="package-card border rounded-lg shadow p-4 relative">
              <div className="seats-left absolute top-2 right-2 bg-red-700 text-white px-2 py-1 rounded text-sm font-semibold">
                🔥 Only 8 Seats Left
              </div>
              <div className="package-img mb-4">
                <img src="https://images.unsplash.com/photo-1519817650390-64a93db51149?w=500&q=80" alt="Economy Umrah Package Makkah 2026" className="rounded" />
              </div>
              <div className="package-content">
                <h3 className="text-xl font-bold mb-2">Economy Umrah Package</h3>
                <div className="price-tag font-semibold mb-2">
                  PKR 195,000
                  <small className="block text-sm font-normal">Per Person (All Inclusive)</small>
                </div>
                <ul className="features-list list-disc pl-5 mb-4">
                  <li>10 Days / 9 Nights Duration</li>
                  <li>Visa Processing Included</li>
                  <li>3-Star Hotel </li>
                  <li>Shared AC Transport</li>
                  <li>Ziyarat Tours in Makkah & Madinah</li>
                </ul>
                <a href="https://wa.me/923313954965?text=I'm%20interested%20in%20Economy%20Umrah%20Package%20(PKR%20195,000)"
                  className="btn btn-whatsapp w-full block text-center py-2 rounded bg-green-700 text-white font-semibold"
                  target="_blank" rel="noreferrer">
                  Book Economy Package
                </a>
                <div className="package-footer mt-2 text-sm text-gray-600">⭐⭐⭐⭐⭐ 487 travelers booked this in 2026</div>
              </div>
            </div>

            {/* Premium Package */}
            <div className="package-card popular border rounded-lg shadow p-4 relative">
              <div className="popular-tag absolute top-2 left-2 bg-yellow-700 text-white px-2 py-1 rounded text-sm font-semibold">⭐ MOST POPULAR</div>
              <div className="seats-left absolute top-2 right-2 bg-red-700 text-white px-2 py-1 rounded text-sm font-semibold">🔥 Only 5 Seats Left</div>
              <div className="package-img mb-4">
                <img src="https://images.unsplash.com/photo-1564769625905-50e93615e769?w=500&q=80" alt="Premium Umrah Package Near Haram 2026" className="rounded" />
              </div>
              <div className="package-content">
                <h3 className="text-xl font-bold mb-2">Premium Group Package</h3>
                <div className="price-tag font-semibold mb-2">
                  PKR 345,000
                  <small className="block text-sm font-normal">Per Person (All Inclusive)</small>
                </div>
                <ul className="features-list list-disc pl-5 mb-4">
                  <li>15 Days / 14 Nights Duration</li>
                  <li>Visa + Travel Insurance</li>
                  <li>4-Star Hotel (100m from Haram)</li>
                  <li>Luxury AC Bus Transport</li>
                  <li>Full Board Meals</li>
                  <li>Complete Ziyarat Tours</li>
                  <li>Expert Group Coordinator</li>
                  <li>24/7 Support Team</li>
                </ul>
                <a href="https://wa.me/923322352945?text=I'm%20interested%20in%20Premium%20Umrah%20Package%20(PKR%20335,000)"
                  className="btn btn-whatsapp w-full block text-center py-2 rounded bg-green-700 text-white font-semibold"
                  target="_blank" rel="noreferrer">
                  Book Premium Package
                </a>
                <div className="package-footer mt-2 text-sm text-gray-600">⭐⭐⭐⭐⭐ 1,234 travelers booked this in 2026</div>
              </div>
            </div>

            {/* VIP Package */}
            <div className="package-card border rounded-lg shadow p-4 relative">
              <div className="seats-left absolute top-2 right-2 bg-red-700 text-white px-2 py-1 rounded text-sm font-semibold">🔥 Only 3 Seats Left</div>
              <div className="package-img mb-4">
                <img src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=500&q=80" alt="VIP Luxury Umrah Package 2026" className="rounded" />
              </div>
              <div className="package-content">
                <h3 className="text-xl font-bold mb-2">Executive VIP Package</h3>
                <div className="price-tag font-semibold mb-2">
                  PKR 455,000
                  <small className="block text-sm font-normal">Per Person (All Inclusive)</small>
                </div>
                <ul className="features-list list-disc pl-5 mb-4">
                  <li>Customizable Duration (7-21 Days)</li>
                  <li>Executive Visa Processing</li>
                  <li>5-Star Clock Tower Hotels (Haram View)</li>
                  <li>Private GMC/Coaster Transport</li>
                  <li>Full Board Premium Meals</li>
                  <li>VIP Ziyarat Tours with Guide</li>
                  <li>Personal Assistant 24/7</li>
                  <li>Fast Track Airport Services</li>
                  <li>Laundry Services Included</li>
                </ul>
                <a href="https://wa.me/923322352945?text=I'm%20interested%20in%20VIP%20Executive%20Package%20(PKR%20455,000)"
                  className="btn btn-whatsapp w-full block text-center py-2 rounded bg-green-700 text-white font-semibold"
                  target="_blank" rel="noreferrer">
                  Book VIP Package
                </a>
                <div className="package-footer mt-2 text-sm text-gray-600">⭐⭐⭐⭐⭐ 289 travelers booked this in 2026</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Agency Section - SEO */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Pakistan Ka #1 Hajj Umrah Agency
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-6">
                Hasb-e-Rabbi — Aapka Bharosa 2013 Se
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Hasb-e-Rabbi Travels & Tours Pakistan ka sabse trusted aur Ministry of Religious Affairs approved Hajj & Umrah travel agency hai. 2013 se hum ne 8,450 se zyada Pakistani pilgrims ko Hajj aur Umrah ka mauka diya hai.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Hamare packages mein visa processing, air tickets, 3-star se 5-star hotels, AC transport, full board meals, aur experienced Muallims sab kuch included hai. Karachi, Lahore, Islamabad, Rawalpindi, Peshawar aur poore Pakistan mein hum apni services provide karte hain.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Economy package PKR 195,000 se shuru hota hai aur VIP package PKR 455,000 tak available hai. Hum ne aaj tak kisi bhi pilgrim ka visa reject nahi hone diya — yeh hamari 100% visa approval guarantee hai.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/umrah-packages"
                  className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition">
                  Umrah Packages Dekhein
                </Link>
                <Link href="/about"
                  className="border-2 border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition">
                  Hamare Baare Mein
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary text-white p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold mb-2">12+</div>
                <div className="font-semibold">Saal Ka Tajruba</div>
              </div>
              <div className="bg-amber-500 text-white p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold mb-2">8,450+</div>
                <div className="font-semibold">Khush Hujjaj</div>
              </div>
              <div className="bg-green-600 text-white p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="font-semibold">Visa Approval</div>
              </div>
              <div className="bg-blue-600 text-white p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold mb-2">4.9⭐</div>
                <div className="font-semibold">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Kyun Chunein Hasb-e-Rabbi?
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-4">
              Pakistan Ka Sabse Trusted Hajj & Umrah Agency
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              12 saal se zyada experience ke saath hum ne 8,450+ pilgrims ki zindagi mein roohani safar ko yaddgar banaya
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🏆', title: 'Ministry Approved', desc: 'Ministry of Religious Affairs Pakistan se officially approved travel agency — MRA/423' },
              { icon: '✅', title: '100% Visa Approval', desc: '12 saalon mein kisi bhi pilgrim ka visa reject nahi hua — yeh hamari guarantee hai' },
              { icon: '💰', title: 'Best Price Guarantee', desc: 'Economy package PKR 195,000 se shuru — poore Pakistan mein best rates guaranteed' },
              { icon: '🕌', title: 'Expert Muallims', desc: 'Trained aur experienced Muallims har group ke saath — poora Hajj aur Umrah guide karte hain' },
              { icon: '✈️', title: 'Complete Package', desc: 'Visa, air tickets, hotels, transport, meals — sab kuch ek jagah se without koi tension' },
              { icon: '📞', title: '24/7 Support', desc: 'Safar ke doran raat din humari team available — Makkah aur Madinah mein bhi' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center border border-gray-100">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-primary-dark">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            Poore Pakistan Mein Hajj & Umrah Service
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Karachi se Peshawar tak — har city se Hajj aur Umrah packages available
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { city: 'Karachi', link: '/umrah-packages' },
              { city: 'Lahore', link: '/umrah-packages' },
              { city: 'Islamabad', link: '/umrah-packages' },
              { city: 'Rawalpindi', link: '/umrah-packages' },
              { city: 'Peshawar', link: '/umrah-packages' },
              { city: 'Quetta', link: '/umrah-packages' },
              { city: 'Multan', link: '/umrah-packages' },
              { city: 'Faisalabad', link: '/umrah-packages' },
            ].map((item, i) => (
              <Link key={i} href={item.link}
                className="bg-white/10 border border-white/30 px-6 py-3 rounded-full font-semibold text-lg hover:bg-white/20 transition">
                📍 {item.city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Customer Reviews
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-4">
              Hamare Khush Hujjaj Ki Awaz
            </h2>
            <p className="text-gray-600 text-lg">4.9/5 rating — 892 verified reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Muhammad Akram', city: 'Karachi', review: 'Alhamdulillah bahut acha experience tha. Visa 7 din mein mil gaya, hotel Haram ke bilkul paas tha. Hasb-e-Rabbi ki team ne poora khayal rakha. Highly recommended!', pkg: 'Premium Umrah Package' },
              { name: 'Fatima Bibi', city: 'Lahore', review: 'Pehli baar Umrah gaye the — bilkul nervous tha. Magar Hasb-e-Rabbi ki team ne hath thaam liya. Muallim sahab ne sab kuch samjhaya. Allah qabool kare aur inhe jazak Allah dein.', pkg: 'Economy Umrah Package' },
              { name: 'Haji Abdul Rauf', city: 'Islamabad', review: 'VIP package mein sab kuch first class tha. Hotel ka Haram view tha, khana zabardast tha. Puri family ke saath gaye — 6 log. Sab ne bahut tarif ki. Agle saal phir jaayenge InshaAllah.', pkg: 'VIP Hajj Package' },
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md relative">
                <div className="text-5xl text-amber-400 mb-4">"</div>
                <p className="text-gray-600 italic leading-relaxed mb-6">{t.review}</p>
                <div className="border-t pt-4">
                  <div className="font-bold text-primary-dark">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.city} • {t.pkg}</div>
                  <div className="text-amber-400 mt-1">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - AEO Optimized */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <span className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">Common questions people search on Google about Hajj & Umrah packages</p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'What is the price of Umrah package 2026 from Pakistan?',
                a: 'Hasb-e-Rabbi\'s Economy Umrah Package starts from PKR 195,000 per person, including visa processing, hotel, transport, and meals. Premium package is PKR 335,000 and VIP package is PKR 455,000.'
              },
              {
                q: 'How many days does it take to get an Umrah visa from Pakistan?',
                a: 'Through Hasb-e-Rabbi, your Umrah visa is processed within 7-10 working days. We handle the entire process — you only need to provide the required documents.'
              },
              {
                q: 'Are Umrah packages available from Lahore and Islamabad?',
                a: 'Yes! We provide Hajj and Umrah packages from Karachi, Lahore, Islamabad, Rawalpindi, Peshawar, Quetta, Multan, and Faisalabad across all of Pakistan.'
              },
              {
                q: 'When will Hajj 2026 depart from Pakistan?',
                a: 'Hajj 2026 is expected in May/June 2026. Pakistan\'s Hajj quota is limited, so early registration is essential. Contact Hasb-e-Rabbi now to secure your seat.'
              },
              {
                q: 'What is included in a Hasb-e-Rabbi Umrah package?',
                a: 'Our Umrah packages include visa processing, round-trip air tickets, hotel accommodation in Makkah and Madinah, AC transport, full board meals, Ziyarat tours, and an experienced Muallim guide.'
              },
              {
                q: 'Is Hasb-e-Rabbi a Ministry approved travel agency?',
                a: 'Yes! Hasb-e-Rabbi Travels & Tours is officially approved by the Ministry of Religious Affairs Pakistan — registration number MRA/423. We have been registered and operating since 2013.'
              },
              {
                q: 'What documents are required for Umrah from Pakistan?',
                a: 'You need a valid passport (minimum 6 months validity), CNIC copy, 2 passport-size photographs, and a Mahram certificate for female applicants. Our team provides complete guidance throughout.'
              },
            ].map((faq, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-xl p-6 cursor-pointer group">
                <summary className="font-bold text-primary-dark text-lg flex justify-between items-center list-none">
                  {faq.q}
                  <span className="text-2xl text-amber-500 transition-transform ml-4 flex-shrink-0">+</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden text-center text-white"
        style={{ background: 'linear-gradient(135deg, #047857 0%, #065f46 50%, #064e3b 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-amber-400 rounded-full -translate-x-32 -translate-y-32" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-400 rounded-full translate-x-32 translate-y-32" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="inline-block bg-amber-400/20 border border-amber-400 text-amber-300 px-6 py-2 rounded-full text-sm font-semibold mb-6">
            🕌 Aaj Hi Book Karen
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Apna Hajj ya Umrah
            <br />
            <span className="text-amber-400">Abhi Book Karen!</span>
          </h2>
          <p className="text-lg md:text-xl mb-10 text-white/80 max-w-xl mx-auto">
            Limited seats available — PKR 195,000 se shuru. Free consultation ke liye abhi contact karen!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/923313954965?text=Assalamualaikum!%20I%20want%20to%20book%20Hajj/Umrah%20package"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-all">
              💬 WhatsApp Us Now
            </a>
            <a href="tel:+923313954965"
              className="bg-amber-400 hover:bg-amber-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-all">
              📞 Call Now
            </a>
          </div>
          <div className="flex gap-6 justify-center mt-8 flex-wrap text-sm text-white/70">
            <span>✅ Ministry Approved</span>
            <span>•</span>
            <span>🏆 Since 2013</span>
            <span>•</span>
            <span>⭐ 4.9/5 Rating</span>
            <span>•</span>
            <span>100% Visa Approval</span>
          </div>
        </div>
    </section>



        {/* .................................. */}

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
      


      {/* Packages Section
      <section
        className="section-padding"
        id="packages"
        style={{ background: "#f9fafb" }}
      >
        <div className="container mx-auto px-4">
          <div className="section-header text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">
              Cheap & Premium Umrah Packages 2026
            </h2>
            <p>Choose the best package for your budget with installment options available</p>
          </div>

          <div className="packages-grid grid md:grid-cols-3 gap-6">
            {/* Economy Package */}
            {/* <div className="package-card border rounded-lg shadow p-4 relative">
              <div className="seats-left absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                🔥 Only 8 Seats Left
              </div>
              <div className="package-img mb-4">
                <img
                  src="https://images.unsplash.com/photo-1519817650390-64a93db51149?w=500&q=80"
                  alt="Economy Umrah Package Makkah"
                  className="rounded"
                />
              </div>
              <div className="package-content">
                <h3 className="text-xl font-bold mb-2">Economy Umrah Package</h3>
                <div className="price-tag font-semibold mb-2">
                  PKR 195,000
                  <small className="block text-sm font-normal">
                    Per Person (All Inclusive)
                  </small>
                </div>
                <ul className="features-list list-disc pl-5 mb-4">
                  <li>10 Days / 9 Nights Duration</li>
                  <li>Visa Processing Included</li>
                  <li>3-Star Hotel </li>
                  <li>Shared AC Transport</li>
                  <li>Ziyarat Tours in Makkah & Madinah</li>
                </ul>
                <a
                  href="https://wa.me/923313954965?text=I'm%20interested%20in%20Economy%20Umrah%20Package%20(PKR%20185,000)"
                  className="btn btn-whatsapp w-full block text-center py-2 rounded bg-green-500 text-white font-semibold"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book Economy Package
                </a>
                <div className="package-footer mt-2 text-sm text-gray-600">
                  ⭐⭐⭐⭐⭐ 487 travelers booked this in 2026
                </div>
              </div>
            </div> */}
{/*  */}



      {/* FAQ Schema Markup for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the price of Umrah package 2026 from Pakistan?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hasb-e-Rabbi's Economy Umrah Package starts from PKR 195,000 per person, which includes visa processing, hotel accommodation, transport, and meals. Premium package is available at PKR 335,000 and VIP package at PKR 455,000."
                }
              },
              {
                "@type": "Question",
                "name": "How many days does it take to get an Umrah visa from Pakistan?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Through Hasb-e-Rabbi, your Umrah visa is processed within 7-10 working days. We handle the entire process — you only need to provide the required documents."
                }
              },
              {
                "@type": "Question",
                "name": "Are Umrah packages available from Lahore and Islamabad?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! We provide Hajj and Umrah packages from Karachi, Lahore, Islamabad, Rawalpindi, Peshawar, Quetta, Multan, and Faisalabad across all of Pakistan."
                }
              },
              {
                "@type": "Question",
                "name": "When will Hajj 2026 depart from Pakistan?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hajj 2026 is expected in May/June 2026. Pakistan's Hajj quota is limited, so early registration is essential. Contact Hasb-e-Rabbi now to secure your seat."
                }
              },
              {
                "@type": "Question",
                "name": "What is included in a Hasb-e-Rabbi Umrah package?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our Umrah packages include visa processing, round-trip air tickets, hotel accommodation in Makkah and Madinah, air-conditioned transport, full board meals, Ziyarat tours, and an experienced Muallim guide."
                }
              },
              {
                "@type": "Question",
                "name": "Is Hasb-e-Rabbi a Ministry approved travel agency?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Hasb-e-Rabbi Travels & Tours is officially approved by the Ministry of Religious Affairs Pakistan — registration number MRA/423. We have been registered and operating since 2013."
                }
              },
              {
                "@type": "Question",
                "name": "What documents are required for Umrah from Pakistan?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For Umrah from Pakistan, you need a valid passport (minimum 6 months validity), CNIC copy, 2 passport-size photographs, and a Mahram certificate for female applicants. Hasb-e-Rabbi's team provides complete guidance throughout the process."
                }
              }
            ]
          })
        }}
      />

      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": "Hasb-e-Rabbi Travels & Tours",
            "url": "https://hasberabbi.com",
            "logo": "https://hasberabbi.com/logo.jpg",
            "description": "Ministry of Religious Affairs approved Hajj and Umrah travel agency in Pakistan. Serving pilgrims since 2013 with 100% visa approval guarantee.",
            "telephone": "+923313954965",
            "email": "haseebclubi33@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "PK",
              "addressRegion": "Pakistan"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "892"
            },
            "priceRange": "PKR 195,000 - PKR 450,000",
            "openingHours": "Mo-Su 00:00-23:59",
            "sameAs": [
              "https://hasberabbi.com"
            ]
          })
        }}
      />
    </main>
  );
}