import Image from 'next/image';

interface PackageCardProps {
  title: string;
  price: string;
  duration: string;
  image: string;
  features: string[];
  popular?: boolean;
  badgeLabel?: string;
  seatsLeft?: number;
  installment?: string;
  reviews?: string;
  whatsappText: string;
}

export default function PackageCard({
  title,
  price,
  duration,
  image,
  features,
  popular = false,
  badgeLabel = '⭐ MOST POPULAR',
  seatsLeft,
  installment,
  reviews,
  whatsappText
}: PackageCardProps) {
  return (
    <div className={`h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl border-2 ${popular ? 'border-accent scale-105' : 'border-transparent'} relative`}>
      {popular && (
        <div className="absolute top-5 right-5 bg-accent text-primary-dark px-5 py-2 rounded-full text-xs font-extrabold z-10 shadow-lg">
          {badgeLabel}
        </div>
      )}
      {seatsLeft && (
        <div className="absolute top-5 left-5 bg-red-600 text-white px-4 py-2 rounded-full text-xs font-bold z-10">
          🔥 Only {seatsLeft} Seats Left
        </div>
      )}

      <div className="h-56 overflow-hidden relative shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-2xl font-extrabold text-primary-dark mb-4">{title}</h3>

        <div className="text-primary text-3xl font-extrabold mb-2">
          {price}
          <small className="block text-sm text-gray-500 font-normal mt-1">
            {duration}
          </small>
        </div>

        {installment && (
          <div className="bg-emerald-50 text-primary px-4 py-2 rounded-lg text-sm font-semibold inline-block mt-3 mb-5 self-start">
            💳 {installment}
          </div>
        )}

        {/* flex-1 makes this list absorb the leftover space, so whatever
            comes after it (button + reviews) lands at the same height
            across every card regardless of how many features are listed */}
        <ul className="space-y-3 my-6 flex-1">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm border-b border-gray-100 pb-3">
              <span className="text-primary text-lg font-bold mt-0.5">✓</span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <a href={`https://wa.me/923322352945?text=${encodeURIComponent(whatsappText)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-4 rounded-full font-bold transition-all hover:scale-105 shadow-lg"
        >
          Book This Package
        </a>

        {reviews && (
          <div className="mt-5 bg-gray-50 text-center py-3 rounded-lg text-sm text-gray-600">
            {reviews}
          </div>
        )}
      </div>
    </div>
  );
}