export const metadata = {
  title: 'About Us | Hasb-e-Rabbi Travels & Tours',
  description: 'Hasb-e-Rabbi Travels & Tours - Ministry approved Hajj & Umrah agency in Pakistan since 2013. Learn about our services and team.',
  alternates: {
    canonical: 'https://hasberabbi.com/about',
  },
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      {/* <section className="hero relative min-h-[60vh] flex items-center justify-center text-center text-white"
        style={{ background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1920&q=80) center/cover' }}>
        <div className="hero-content">
         <h1 className="text-3xl md:text-5xl font-extrabold mb-4">About Hasb-e-Rabbi</h1>
          <p className="text-xl max-w-2xl mx-auto">Ministry approved Hajj & Umrah travel agency serving Pakistan since 2013</p>
        </div>
      </section> */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center text-white overflow-hidden"
  style={{ background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1920&q=80) center/cover' }}>
  
  <div className="relative z-10 px-4">
    {/* Badge */}
    <span className="inline-block bg-amber-400/20 border border-amber-400 text-amber-300 px-6 py-2 rounded-full text-sm font-semibold mb-6">
      ✨ Ministry Approved Since 2013
    </span>
    
    {/* Title */}
    <h1 className="text-3xl md:text-6xl font-extrabold mb-6 leading-tight">
      About <span className="text-amber-400">Hasb-e-Rabbi</span>
      <br />
      <span className="text-2xl md:text-4xl font-semibold">Travels & Tours</span>
    </h1>
    
    {/* Subtitle */}
    <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90 leading-relaxed">
      Ministry approved Hajj & Umrah travel agency <br />
      serving Pakistan since 2013
    </p>

    {/* Stats */}
    <div className="flex gap-6 justify-center mt-8 flex-wrap">
      <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-full">
        <span className="font-bold text-amber-400">12+</span> Years
      </div>
      <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-full">
        <span className="font-bold text-amber-400">8,450+</span> Pilgrims
      </div>
      <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-full">
        <span className="font-bold text-amber-400">100%</span> Visa Approval
      </div>
    </div>
  </div>
</section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary-dark">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Hasb-e-Rabbi Travels & Tours was established in 2013 with a mission to provide
                affordable and quality Hajj & Umrah services to Pakistani pilgrims. Over the years,
                we have served more than 8,450 happy pilgrims from across Pakistan.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We are Ministry of Religious Affairs approved travel agency with 100% visa approval
                record. Our team of experienced professionals ensures a smooth and spiritually
                fulfilling pilgrimage experience for every pilgrim.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From Karachi to Lahore, Islamabad to Peshawar — we serve pilgrims from all over
                Pakistan with our comprehensive Hajj, Umrah and Visa services.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary text-white p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold mb-2">12+</div>
                <div>Years Experience</div>
              </div>
              <div className="bg-amber-500 text-white p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold mb-2">8,450+</div>
                <div>Happy Pilgrims</div>
              </div>
              <div className="bg-green-600 text-white p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div>Visa Approval</div>
              </div>
              <div className="bg-blue-600 text-white p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold mb-2">4.9⭐</div>
                <div>Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary-dark">
            Why Choose Hasb-e-Rabbi?
          </h2>
         <div className="grid grid-cols-2 gap-4">
  {[
    { number: '12+', label: 'Years Experience', bg: 'bg-primary' },
    { number: '8,450+', label: 'Happy Pilgrims', bg: 'bg-amber-500' },
    { number: '100%', label: 'Visa Approval', bg: 'bg-green-600' },
    { number: '4.9⭐', label: 'Customer Rating', bg: 'bg-blue-600' },
  ].map((item, i) => (
    <div key={i} className={`${item.bg} text-white p-4 rounded-2xl text-center`}>
      <div className="text-2xl md:text-4xl font-bold mb-1">{item.number}</div>
      <div className="text-sm md:text-base">{item.label}</div>
    </div>
  ))}
</div>
        </div>
      </section>

      {/* CTA */}
     <section className="py-20 relative overflow-hidden text-center text-white"
  style={{ background: 'linear-gradient(135deg, #047857 0%, #065f46 50%, #064e3b 100%)' }}>
  
  {/* Background decoration */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-0 left-0 w-64 h-64 bg-amber-400 rounded-full -translate-x-32 -translate-y-32"/>
    <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-400 rounded-full translate-x-32 translate-y-32"/>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    {/* Badge */}
    <span className="inline-block bg-amber-400/20 border border-amber-400 text-amber-300 px-6 py-2 rounded-full text-sm font-semibold mb-6">
      🕌 Start Your Spiritual Journey
    </span>

    <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
      Ready to Book Your <br/>
      <span className="text-amber-400">Hajj or Umrah?</span>
    </h2>

    <p className="text-lg md:text-xl mb-10 text-white/80 max-w-xl mx-auto">
      Contact us today for a free consultation — our experts are available 24/7
    </p>

    <div className="flex gap-4 justify-center flex-wrap">
      <a href="https://wa.me/923322352945"
        className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-all">
        💬 WhatsApp Us Now
      </a>
      <a href="tel:+923322352945"
        className="bg-amber-400 hover:bg-amber-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-all">
        📞 Call Now
      </a>
    </div>

    {/* Trust badges */}
    <div className="flex gap-4 justify-center mt-8 flex-wrap text-sm text-white/70">
      <span>✅ Ministry Approved</span>
      <span>•</span>
      <span>🏆 Since 2013</span>
      <span>•</span>
      <span>⭐ 4.9/5 Rating</span>
    </div>
  </div>

      </section>
    </main>
  )
}