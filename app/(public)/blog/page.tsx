import PackageCard from '@/components/PackageCard';
import Link from 'next/link';

export const metadata = {
  title: 'Best Umrah Packages 2025 Lahore | PKR 185,000 | Ministry Approved | Dar Al Salam',
  description: 'Book affordable Umrah packages from Lahore starting PKR 185,000. Ministry approved agency with 100% visa approval.',
};

export default function HomePage() {
  const packages = [
    {
      title: 'Economy Umrah Package',
      price: 'PKR 185,000',
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
      installment: 'Or 6 Monthly Installments of PKR 31,000',
      reviews: '⭐⭐⭐⭐⭐ 487 travelers booked this in 2024',
      whatsappText: "I'm interested in Economy Umrah Package (PKR 185,000)"
    },
    {
      title: 'Premium Group Package',
      price: 'PKR 295,000',
      duration: 'Per Person (All Inclusive)',
      image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&q=80',
      features: [
        '15 Days / 14 Nights Duration',
        'Visa + Travel Insurance',
        '4-Star Hotel (100m from Haram)',
        'Luxury AC Bus Transport',
        'Full Board Meals (Breakfast, Lunch, Dinner)',
        'Complete Ziyarat Tours',
        'Expert Group Coordinator',
        '24/7 Support Team'
      ],
      popular: true,
      seatsLeft: 5,
      installment: 'Or 8 Monthly Installments of PKR 37,000',
      reviews: '⭐⭐⭐⭐⭐ 1,234 travelers booked this in 2024',
      whatsappText: "I'm interested in Premium Umrah Package (PKR 295,000)"
    },
    {
      title: 'Executive VIP Package',
      price: 'PKR 450,000',
      duration: 'Per Person (All Inclusive)',
      image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=800&q=80',
      features: [
        'Customizable Duration (14-21 Days)',
        'Executive Visa Processing',
        '5-Star Clock Tower Hotels (Haram View)',
        'Private GMC/Coaster Transport',
        'Full Board Premium Meals',
        'VIP Ziyarat Tours with Guide',
        'Personal Assistant 24/7',
        'Fast Track Airport Services',
        'Laundry Services Included'
      ],
      seatsLeft: 3,
      installment: 'Or 10 Monthly Installments of PKR 45,000',
      reviews: '⭐⭐⭐⭐⭐ 289 travelers booked this in 2024',
      whatsappText: "I'm interested in VIP Executive Package (PKR 450,000)"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center text-white bg-gradient-to-br from-primary-dark/90 to-primary/90 bg-[url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1920&q=80')] bg-cover bg-center bg-fixed">
        <div className="container mx-auto px-4 py-20">
          <div className="bg-accent/20 backdrop-blur-sm px-8 py-3 rounded-full inline-block mb-6 border-2 border-accent/50">
            <span className="font-semibold text-sm">✨ 100% Verified Ministry Approved Travel Agency</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-2xl">
            Best Hajj & Umrah Packages 2025 Pakistan
          </h1>
          
          <p className="text-xl max-w-3xl mx-auto mb-10 text-white/95 leading-relaxed">
            Premium packages starting PKR 185,000 with luxury hotels, expert guidance, and 100% visa approval guarantee. Book now and save PKR 20,000!
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            
            <a  href="https://wa.me/923313954965?text=Assalamualaikum!%20I%20want%20instant%20quote%20for%20Umrah%20package"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:scale-105 transition-all"
            >
              💬 Get Instant Quote on WhatsApp
            </a>
            
             <a href="tel:+923313954965"
              className="bg-accent hover:bg-accent-hover text-primary-dark px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:scale-105 transition-all"
            >
              📞 Call Now: +92 331 3954965
            </a>
          </div>
          
          <div className="mt-10 bg-red-600 text-white px-10 py-4 rounded-full inline-block font-bold text-lg animate-pulse shadow-2xl">
            ⚡ Only 12 Seats Left for March 2025 | Book Within 24 Hours
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 z-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-10 grid md:grid-cols-4 gap-8">
            {[
              { number: '12+', label: 'Years Experience' },
              { number: '8,450+', label: 'Happy Pilgrims' },
              { number: '100%', label: 'Visa Approval' },
              { number: '4.9⭐', label: 'Customer Rating' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center py-4 border-r last:border-r-0 border-gray-200">
                <div className="text-5xl font-extrabold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-4">
              Cheap & Premium Umrah Packages 2025
            </h2>
            <p className="text-xl text-gray-600">
              Choose the best package for your budget with installment options available
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <PackageCard key={idx} {...pkg} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/umrah"
              className="inline-block bg-primary hover:bg-primary-light text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-all"
            >
              View All Umrah Packages →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20" id="testimonials">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-4">
              What Our Pilgrims Say
            </h2>
            <p className="text-xl text-gray-600">
              Real reviews from satisfied customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Muhammad Ahmed Khan',
                location: 'Karachi | Feb 2024',
                text: 'Alhamdulillah, my Umrah journey was perfect. Hotels were 5 minutes walk from Haram. Highly recommended!'
              },
              {
                name: 'Ayesha Fatima',
                location: 'Lahore | March 2024',
                text: 'Everything was professionally managed. The visa came in just 6 days. Will book again Insha\'Allah.'
              },
              {
                name: 'Imran Siddiqui',
                location: 'Islamabad | Hajj 2024',
                text: 'Best Hajj service in Pakistan! My elderly parents were well taken care of. JazakAllah!'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 relative">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  "
                </div>
                <div className="text-yellow-400 text-2xl mb-4 text-center">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 italic leading-relaxed mb-6">{testimonial.text}</p>
                <div className="border-t pt-4">
                  <h4 className="font-bold text-primary-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50" id="faq">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know before booking
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: 'What is the cost of Umrah from Pakistan in 2025?',
                a: 'Umrah packages start from PKR 185,000 for economy and go up to PKR 450,000 for VIP packages.'
              },
              {
                q: 'How long does Umrah visa processing take?',
                a: 'Visa processing usually takes 5 to 7 working days. We have 100% approval rate.'
              },
              {
                q: 'What documents are required?',
                a: 'Passport (8 months validity), CNIC, photos, Polio & Meningitis certificates.'
              },
              {
                q: 'Can I pay in installments?',
                a: 'Yes! We offer 6-10 monthly installments with no hidden charges.'
              }
            ].map((faq, idx) => (
              <details key={idx} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-primary">
                <summary className="font-bold text-primary-dark cursor-pointer">{faq.q}</summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-6">Ready to Start Your Sacred Journey?</h2>
          <p className="text-xl mb-10">Contact us now for free consultation</p>
          
           <a href="https://wa.me/923313954965?text=I%20want%20to%20book%20Umrah%20package"
            target="_blank"
            className="inline-block bg-accent hover:bg-accent-hover text-primary-dark px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:scale-105 transition-all"
          >
            💬 Chat with Expert
          </a>
        </div>
      </section>
    </>
  );
}