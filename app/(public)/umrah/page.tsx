import PackageCard from '@/components/PackageCard';

export const metadata = {
  title: 'Best Umrah Packages 2025 Pakistan | Starting PKR 185,000 | Dar Al Salam',
  description: 'Book affordable Umrah packages. Economy PKR 185,000, Premium PKR 295,000, VIP PKR 450,000. 100% visa approval.',
};

export default function UmrahPage() {
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
      reviews: '⭐⭐⭐⭐⭐ 487 travelers booked this',
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
        'Full Board Meals',
        'Complete Ziyarat Tours',
        'Expert Group Coordinator',
        '24/7 Support Team'
      ],
      popular: true,
      seatsLeft: 5,
      installment: 'Or 8 Monthly Installments of PKR 37,000',
      reviews: '⭐⭐⭐⭐⭐ 1,234 travelers booked',
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
        '5-Star Clock Tower Hotels',
        'Private GMC/Coaster Transport',
        'Full Board Premium Meals',
        'VIP Ziyarat Tours',
        'Personal Assistant 24/7',
        'Fast Track Airport',
        'Laundry Services'
      ],
      seatsLeft: 3,
      installment: 'Or 10 Monthly Installments of PKR 45,000',
      reviews: '⭐⭐⭐⭐⭐ 289 travelers booked',
      whatsappText: "I'm interested in VIP Package (PKR 450,000)"
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20 bg-[url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1920&q=80')] bg-cover bg-center bg-blend-multiply">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            🕋 Best Umrah Packages 2025
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Economy, Premium & VIP packages with 100% visa approval guarantee
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            
             <a href="https://wa.me/923313954965?text=I%20want%20Umrah%20quote"
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
              Umrah Packages 2025 - All Inclusive
            </h2>
            <p className="text-xl text-gray-600">
              Choose the package that suits your budget
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
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
            
              <a href="https://wa.me/923313954965?text=Help%20me%20choose%20package"
              target="_blank"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-all"
            >
              💬 Chat with Expert
            </a>
          </div>
        </div>
      </section>
    </>
  );
}