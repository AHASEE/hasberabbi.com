import PackageCard from '@/components/PackageCard';

export const metadata = {
  title: 'Hajj Packages 2025 Pakistan | Ministry Approved | Dar Al Salam',
  description: 'Book Hajj 2025 packages. Government approved with complete services. Starting PKR 750,000.',
};

export default function HajjPage() {
  const packages = [
    {
      title: 'Short Haji Package (20 Days)',
      price: 'PKR 750,000',
      duration: 'Per Person (All Inclusive)',
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=80',
      features: [
        '20 Days Complete Hajj',
        'Hajj Visa Processing',
        'Round Trip Air Tickets',
        '3-Star Hotels (Makkah & Madinah)',
        'Accommodation in Mina, Arafat',
        'Full Board Meals',
        'AC Transport',
        'Hajj Coordinator',
        'Complete Training',
        'Medical Support'
      ],
      seatsLeft: 12,
      installment: 'Or 12 Monthly Installments of PKR 62,500',
      reviews: '⭐⭐⭐⭐⭐ 156 pilgrims completed',
      whatsappText: "I'm interested in Short Haji Package (PKR 750,000)"
    },
    {
      title: 'Long Haji Package (38-40 Days)',
      price: 'PKR 850,000',
      duration: 'Per Person (All Inclusive)',
      image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&q=80',
      features: [
        '38-40 Days Hajj Experience',
        'Hajj Visa Processing',
        'Round Trip Air Tickets',
        '4-Star Hotels (Near Haram)',
        'Premium Accommodation',
        'Full Board Deluxe Meals',
        'Luxury AC Transport',
        'Expert Muallim',
        'Complete Training',
        'Extended Worship Time',
        'Medical Team 24/7',
        'Laundry Services'
      ],
      popular: true,
      seatsLeft: 8,
      installment: 'Or 12 Monthly Installments of PKR 71,000',
      reviews: '⭐⭐⭐⭐⭐ 312 pilgrims completed',
      whatsappText: "I'm interested in Long Haji Package (PKR 850,000)"
    },
    {
      title: 'VIP Hajj Package (40 Days)',
      price: 'PKR 1,250,000',
      duration: 'Per Person (All Inclusive)',
      image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=800&q=80',
      features: [
        '40 Days VIP Experience',
        'Executive Visa Processing',
        'Business Class Tickets',
        '5-Star Hotels (Haram View)',
        'VIP Accommodation',
        'International Buffet',
        'Private AC Coaster',
        'Personal Assistant',
        'Private Muallim',
        'Fast Track Immigration',
        'Personal Doctor',
        'Daily Housekeeping',
        'Elderly Care'
      ],
      seatsLeft: 5,
      installment: 'Or 15 Monthly Installments of PKR 83,000',
      reviews: '⭐⭐⭐⭐⭐ 89 VIP pilgrims',
      whatsappText: "I'm interested in VIP Hajj (PKR 1,250,000)"
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20 bg-[url('https://images.unsplash.com/photo-1564769625905-50e93615e769?w=1920&q=80')] bg-cover bg-center bg-blend-multiply">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            🕌 Hajj 2025 Packages Pakistan
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Government approved packages with complete services. Ministry regulated prices.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            
            <a href="https://wa.me/923313954965?text=Hajj%202025%20details"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:scale-105 transition-all"
            >
              💬 Get Hajj 2025 Quote
            </a>
          </div>
        </div>
      </section>

      {/* Important Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">📋 Hajj 2025 Important Information</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white/10 rounded-lg p-5 backdrop-blur-sm">
                <p className="font-bold text-lg mb-2">🗓️ Hajj Dates</p>
                <p className="text-sm">Expected: 14-19 June 2025</p>
              </div>
              <div className="bg-white/10 rounded-lg p-5 backdrop-blur-sm">
                <p className="font-bold text-lg mb-2">📝 Deadline</p>
                <p className="text-sm">Expected March 2025</p>
              </div>
              <div className="bg-white/10 rounded-lg p-5 backdrop-blur-sm">
                <p className="font-bold text-lg mb-2">💰 Quota</p>
                <p className="text-sm">Limited seats available</p>
              </div>
              <div className="bg-white/10 rounded-lg p-5 backdrop-blur-sm">
                <p className="font-bold text-lg mb-2">✅ Approval</p>
                <p className="text-sm">100% for eligible</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary-dark mb-4">
              Hajj 2025 Packages - Ministry Approved
            </h2>
            <p className="text-xl text-gray-600">
              Complete 40-day packages with all services
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <PackageCard key={idx} {...pkg} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-r from-primary to-primary-dark text-white rounded-2xl p-10 text-center">
            <h3 className="text-3xl font-bold mb-4">⏰ Application Closing Soon!</h3>
            <p className="text-lg mb-8">
              Limited government quota available. Book now!
            </p>
            
            <a  href="https://wa.me/923313954965?text=Apply%20Hajj%202025"
              target="_blank"
              className="inline-block bg-accent hover:bg-accent-hover text-primary-dark px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-all"
            >
              📝 Apply for Hajj 2025
            </a>
          </div>
        </div>
      </section>
    </>
  );
}