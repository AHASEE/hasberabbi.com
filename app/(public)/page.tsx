// app/page.tsx
import React from "react";
import "../../app/(public)/style.css"
export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <span className="hero-badge">
            ✨ 100% Verified Ministry Approved Travel Agency
          </span>
          <h1 data-lingo="hero_title">
            Best Hajj & Umrah Packages 2025 Pakistan
          </h1>
          <p className="hero-subtext">
            Premium packages starting PKR 185,000 with luxury hotels, expert
            guidance, and 100% visa approval guarantee. Book now and save PKR
            20,000!
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
            ⚡ Only 12 Seats Left for March 2025 | Book Within 24 Hours
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
      <section
        className="section-padding"
        id="packages"
        style={{ background: "#f9fafb" }}
      >
        <div className="container mx-auto px-4">
          <div className="section-header text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">
              Cheap & Premium Umrah Packages 2025
            </h2>
            <p>Choose the best package for your budget with installment options available</p>
          </div>

          <div className="packages-grid grid md:grid-cols-3 gap-6">
            {/* Economy Package */}
            <div className="package-card border rounded-lg shadow p-4 relative">
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
                  PKR 185,000
                  <small className="block text-sm font-normal">
                    Per Person (All Inclusive)
                  </small>
                </div>
                <div className="installment mb-2">💳 Or 6 Monthly Installments of PKR 31,000</div>
                <ul className="features-list list-disc pl-5 mb-4">
                  <li>10 Days / 9 Nights Duration</li>
                  <li>Visa Processing Included</li>
                  <li>3-Star Hotel (600m from Haram)</li>
                  <li>Shared AC Transport</li>
                  <li>Breakfast Included</li>
                  <li>Ziyarat Tours in Makkah & Madinah</li>
                </ul>
                <a
                  href="https://wa.me/923001234567?text=I'm%20interested%20in%20Economy%20Umrah%20Package%20(PKR%20185,000)"
                  className="btn btn-whatsapp w-full block text-center py-2 rounded bg-green-500 text-white font-semibold"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book Economy Package
                </a>
                <div className="package-footer mt-2 text-sm text-gray-600">
                  ⭐⭐⭐⭐⭐ 487 travelers booked this in 2024
                </div>
              </div>
            </div>

            {/* Premium Package */}
            <div className="package-card popular border rounded-lg shadow p-4 relative">
              <div className="popular-tag absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded text-sm">
                ⭐ MOST POPULAR
              </div>
              <div className="seats-left absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                🔥 Only 5 Seats Left
              </div>
              <div className="package-img mb-4">
                <img
                  src="https://images.unsplash.com/photo-1564769625905-50e93615e769?w=500&q=80"
                  alt="Premium Umrah Package Near Haram"
                  className="rounded"
                />
              </div>
              <div className="package-content">
                <h3 className="text-xl font-bold mb-2">Premium Group Package</h3>
                <div className="price-tag font-semibold mb-2">
                  PKR 295,000
                  <small className="block text-sm font-normal">
                    Per Person (All Inclusive)
                  </small>
                </div>
                <div className="installment mb-2">💳 Or 8 Monthly Installments of PKR 37,000</div>
                <ul className="features-list list-disc pl-5 mb-4">
                  <li>15 Days / 14 Nights Duration</li>
                  <li>Visa + Travel Insurance</li>
                  <li>4-Star Hotel (100m from Haram)</li>
                  <li>Luxury AC Bus Transport</li>
                  <li>Full Board Meals (Breakfast, Lunch, Dinner)</li>
                  <li>Complete Ziyarat Tours</li>
                  <li>Expert Group Coordinator</li>
                  <li>24/7 Support Team</li>
                </ul>
                <a
                  href="https://wa.me/923313954965?text=I'm%20interested%20in%20Premium%20Umrah%20Package%20(PKR%20295,000)"
                  className="btn btn-whatsapp w-full block text-center py-2 rounded bg-green-500 text-white font-semibold"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book Premium Package
                </a>
                <div className="package-footer mt-2 text-sm text-gray-600">
                  ⭐⭐⭐⭐⭐ 1,234 travelers booked this in 2024
                </div>
              </div>
            </div>

            {/* VIP Package */}
            <div className="package-card border rounded-lg shadow p-4 relative">
              <div className="seats-left absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                🔥 Only 3 Seats Left
              </div>
              <div className="package-img mb-4">
                <img
                  src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=500&q=80"
                  alt="VIP Luxury Umrah Package"
                  className="rounded"
                />
              </div>
              <div className="package-content">
                <h3 className="text-xl font-bold mb-2">Executive VIP Package</h3>
                <div className="price-tag font-semibold mb-2">
                  PKR 450,000
                  <small className="block text-sm font-normal">
                    Per Person (All Inclusive)
                  </small>
                </div>
                <div className="installment mb-2">💳 Or 10 Monthly Installments of PKR 45,000</div>
                <ul className="features-list list-disc pl-5 mb-4">
                  <li>Customizable Duration (14-21 Days)</li>
                  <li>Executive Visa Processing</li>
                  <li>5-Star Clock Tower Hotels (Haram View)</li>
                  <li>Private GMC/Coaster Transport</li>
                  <li>Full Board Premium Meals</li>
                  <li>VIP Ziyarat Tours with Guide</li>
                  <li>Personal Assistant 24/7</li>
                  <li>Fast Track Airport Services</li>
                  <li>Laundry Services Included</li>
                </ul>
                <a
                  href="https://wa.me/923313954965?text=I'm%20interested%20in%20VIP%20Executive%20Package%20(PKR%20450,000)"
                  className="btn btn-whatsapp w-full block text-center py-2 rounded bg-green-500 text-white font-semibold"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book VIP Package
                </a>
                <div className="package-footer mt-2 text-sm text-gray-600">
                  ⭐⭐⭐⭐⭐ 289 travelers booked this in 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add Comparison Table, Testimonials, FAQ sections similarly... */}
      {/* Wrap all content inside this main component */}
    </main>
  );
}

