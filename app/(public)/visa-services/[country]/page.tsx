import { notFound } from 'next/navigation';
import Link from 'next/link';

const countriesData: Record<string, {
  name: string;
  flag: string;
  types: string[];
  fee: string;
  feeBreakdown?: string[];
  feeNote?: string;
  processing: string;
  validity: string;
  documents: string[];
  extraDocuments?: { heading: string; items: string[] };
  eligibilityNote?: string;
  notes: string[];
  disclaimer?: string;
  whatsappMsg: string;
  seoTitle: string;
  seoDescription: string;
}> = {
  'saudi-arabia': {
    name: 'Saudi Arabia',
    flag: '🇸🇦',
    types: ['Tourist Visa', 'Business Visa', 'Umrah Visa', 'Work Visa'],
    fee: 'PKR 12,000 – 20,000',
    processing: '3–7 working days',
    validity: '1 year (multiple entry)',
    documents: [
      'Valid passport (minimum 6 months remaining validity)',
      '2 passport size photos (white background)',
      'CNIC copy (front and back)',
      'Bank statement (last 3 months)',
      'Employment letter or business registration proof',
      'Confirmed return flight booking',
      'Hotel booking confirmation',
      'Travel insurance',
    ],
    notes: [
      'Saudi Arabia Tourist Visa can be applied online through the official portal.',
      'For Umrah Visa, an authorized travel agent is required by law.',
      'Business visa applicants must provide an invitation letter from a Saudi company.',
      'Work visa requires employer sponsorship from Saudi Arabia.',
    ],
    whatsappMsg: 'I need help with Saudi Arabia visa',
    seoTitle: 'Saudi Arabia Visa from Pakistan – Requirements, Fee & Process | Hasb-e-Rabbi',
    seoDescription: 'Complete Saudi Arabia visa guide for Pakistani applicants. Tourist, Umrah, Business & Work visa requirements, documents, fee and processing time. Apply with Hasb-e-Rabbi Travels.',
  },
  'uae-dubai': {
    name: 'UAE / Dubai',
    flag: '🇦🇪',
    types: ['Tourist Visa (30 days)', 'Tourist Visa (60 days)', 'Visit Visa', 'Work Visa'],
    fee: 'PKR 15,000 – 25,000',
    processing: '2–4 working days',
    validity: '30 or 60 days',
    documents: [
      'Valid passport (minimum 6 months remaining validity)',
      '2 passport size photos (white background)',
      'CNIC copy (front and back)',
      'Bank statement (last 3 months, minimum balance PKR 50,000)',
      'Employment letter with monthly salary details',
      'Confirmed return flight booking',
      'Hotel booking or host invitation letter',
      'Travel insurance',
    ],
    notes: [
      'UAE visa can be applied through any Dubai-based airline or a registered sponsor.',
      'A 30-day visa is suitable for short trips while a 60-day visa is ideal for extended stays.',
      'Work visa requires a verified employment offer and sponsorship from a UAE employer.',
      'Visa on arrival is not available for Pakistani passport holders.',
    ],
    whatsappMsg: 'I need help with UAE Dubai visa',
    seoTitle: 'UAE Dubai Visa from Pakistan – Requirements, Fee & Process | Hasb-e-Rabbi',
    seoDescription: 'Complete UAE Dubai visa guide for Pakistani applicants. Tourist, Visit & Work visa requirements, documents, fee and processing time. Apply with Hasb-e-Rabbi Travels.',
  },
  'united-kingdom': {
    name: 'United Kingdom',
    flag: '🇬🇧',
    types: ['Standard Visitor Visa', 'Student Visa', 'Work Visa', 'Family Visa'],
    fee: 'PKR 35,000 – 55,000',
    processing: '15–21 working days',
    validity: '6 months (standard visitor)',
    documents: [
      'Valid passport along with all previous passports',
      '2 passport size photos (as per UK specifications)',
      'CNIC copy (front and back)',
      'Bank statement (last 6 months with strong balance)',
      'Property documents or proof of assets in Pakistan',
      'Employment letter with recent salary slips',
      'Confirmed return flight booking',
      'Hotel booking or invitation letter from UK host',
      'Travel insurance',
      'Income tax returns (required for self-employed applicants)',
    ],
    notes: [
      'UK visa applications are submitted through VFS Global offices in Pakistan.',
      'Applicants must demonstrate strong financial ties to Pakistan to prove intent to return.',
      'The rejection rate for Pakistani applicants is relatively high — professional assistance is strongly recommended.',
      'A well-prepared application with clear documentation significantly improves approval chances.',
    ],
    whatsappMsg: 'I need help with UK visa',
    seoTitle: 'UK Visa from Pakistan – Requirements, Fee & Process | Hasb-e-Rabbi',
    seoDescription: 'Complete UK visa guide for Pakistani applicants. Visitor, Student & Work visa requirements, documents, fee and processing time. Apply with Hasb-e-Rabbi Travels.',
  },
  'schengen-europe': {
    name: 'Schengen (Europe)',
    flag: '🇪🇺',
    types: ['Tourist Visa', 'Business Visa', 'Transit Visa'],
    fee: 'PKR 35,000 – 55,000 (including service charges & insurance)',
    feeBreakdown: [
      'Adult (12+ years): EUR 90 (approx PKR 31,000) + VFS Global service charges',
      'Children (6–11 years): EUR 45',
      'Children under 6 years: Free',
      'VFS Service Charge: Approx PKR 5,500 – 12,000 (depending on embassy)',
    ],
    feeNote: 'Exact amount varies based on current exchange rate and selected Schengen country VFS charges. Our service charges are separate. Always confirm final fee on VFS Global or embassy website. Fee is subject to change.',
    processing: '15–30 working days (official minimum 15 calendar days). During peak season (June–August, December–January) it can take 30–60 days. Recommended: Apply at least 6–8 weeks before your trip.',
    validity: '90 days within any 180-day period (Short-stay Type C Schengen Visa)',
    eligibilityNote: 'Pakistani applicants must book a VFS Global appointment (available in Karachi, Lahore, and Islamabad). The application is submitted through the embassy or consulate of your main destination country. You must demonstrate strong ties to Pakistan — employment letter, business proof, family ties, and bank statements — otherwise the risk of rejection is very high. Always check the exact requirements for your chosen Schengen country on the official VFS Global website before applying.',
    documents: [
      'Valid Pakistani passport (minimum 6 months validity beyond your planned stay)',
      'Recent passport size photos (as per Schengen specifications)',
      'Completed Schengen visa application form',
      'Confirmed return flight booking or travel itinerary',
      'Hotel booking or accommodation proof for entire stay',
      'Travel health insurance (minimum EUR 30,000 coverage — mandatory)',
      'Bank statements and financial proof (last 3 to 6 months)',
      'Employment or business proof, or NOC from employer',
      'Invitation letter (if visiting someone in the Schengen area)',
    ],
    notes: [
      'Schengen visa is issued for tourist, business, visit, or transit purposes only.',
      'Our team will guide you through document preparation, form filling, and VFS appointment process.',
      'For official requirements, visit the VFS Global website at www.vfsglobal.com or your destination country embassy website.',
    ],
    disclaimer: 'This information is provided for general guidance only. Final requirements, fee, and visa decision depend on the concerned Schengen embassy and VFS Global. We do not guarantee visa approval.',
    whatsappMsg: 'I need help with Schengen Europe visa',
    seoTitle: 'Schengen Visa from Pakistan – Requirements, Fee & Process | Hasb-e-Rabbi',
    seoDescription: 'Complete Schengen visa guide for Pakistani applicants. Tourist and Business visa fee PKR 35,000–55,000, VFS Global appointment process, required documents and processing time 15–30 working days.',
  },
  'malaysia': {
    name: 'Malaysia',
    flag: '🇲🇾',
    types: ['eVisa (Tourist)', 'Single Entry Visit Visa', 'Social Visit Visa'],
    fee: 'PKR 12,000 – 20,000',
    processing: '5–10 working days (sometimes longer)',
    validity: 'Up to 30 days stay (visa usually valid for 3 months)',
    documents: [
      'Valid passport (minimum 6 months validity from date of travel)',
      'Recent passport size photo (35mm x 50mm, white background)',
      'CNIC copy (front and back)',
      'Bank statement (last 3–6 months with sufficient balance)',
      'Confirmed return flight booking',
      'Hotel booking confirmation for entire stay',
      'Travel insurance (recommended)',
      'Employment letter / NOC (if employed)',
    ],
    notes: [
      'Pakistani passport holders must apply for Malaysia eVisa online before travel. Visa on arrival is not available.',
      'Most applicants use the official eVisa system at malaysiavisa.imi.gov.my',
      'eVisa is usually single entry and allows up to 30 days stay.',
      'After approval, fill Malaysia Digital Arrival Card (MDAC) online — it is mandatory and free.',
      'For longer or multiple entries, embassy route may be required.',
    ],
    whatsappMsg: 'I need help with Malaysia visa',
    seoTitle: 'Malaysia Visa from Pakistan – eVisa Requirements, Fee & Process 2026 | Hasb-e-Rabbi',
    seoDescription: 'Complete guide for Pakistani citizens applying for Malaysia eVisa / Tourist Visa. Documents, fees, processing time and application process with Hasb-e-Rabbi Travels.',
  },
  'turkey': {
    name: 'Turkey',
    flag: '🇹🇷',
    types: ['e-Visa (Tourist & Business)', 'Sticker Tourist Visa (Embassy Route)'],
    fee: 'PKR 15,000 – 35,000 (including service charges)',
    feeBreakdown: [
      'e-Visa (if eligible): Approx PKR 15,000 – 25,000',
      'Sticker Tourist Visa (Embassy route): Approx PKR 22,000 – 35,000',
    ],
    feeNote: 'Exact government fee is shown at evisa.gov.tr during application. Our service charges are separate. Fee is subject to change.',
    processing: '1–3 working days for e-Visa (usually 24–72 hours). Sticker visa may take longer.',
    validity: '30–90 days (depending on approval type)',
    eligibilityNote: 'Pakistani ordinary passport holders are eligible for Turkey e-Visa only if they hold a valid Schengen Visa, USA Visa, UK Visa, Ireland Visa, or a valid residence permit from any of these countries. Without this, applicants must apply for a Sticker Tourist Visa through the Turkish Embassy, Consulate, or an authorized visa application center such as Anatolia Travel Services. Always verify your eligibility at www.evisa.gov.tr before applying.',
    documents: [
      'Valid Pakistani passport (minimum 6 months validity recommended)',
      'Passport must have at least 60 days of validity beyond the duration of stay (official requirement)',
      'Recent passport size photo',
      'Confirmed return flight booking',
      'Hotel booking or accommodation proof',
      'Bank statement (last 3 months)',
      'Travel insurance (strongly recommended)',
    ],
    extraDocuments: {
      heading: 'Additional Requirement for e-Visa Applicants',
      items: [
        'Clear copy of valid Schengen, USA, UK, or Ireland visa — or valid residence permit from any of these countries (mandatory for e-Visa eligibility)',
      ],
    },
    notes: [
      'Turkey e-Visa is applied online through the official portal at www.evisa.gov.tr. The process is straightforward but eligibility criteria must be fully met.',
      'e-Visa is issued for tourist and business purposes only.',
      'Our team will guide you through the complete process — from document preparation to final submission.',
    ],
    disclaimer: 'This information is provided for general guidance only. Final visa requirements depend on the official rules of the Turkish government. We do not guarantee visa approval.',
    whatsappMsg: 'I need help with Turkey visa',
    seoTitle: 'Turkey Visa from Pakistan – e-Visa & Tourist Visa Requirements | Hasb-e-Rabbi',
    seoDescription: 'Complete Turkey visa guide for Pakistani applicants. e-Visa eligibility, Sticker Tourist Visa requirements, documents, fee PKR 15,000–35,000 and processing time. Apply with Hasb-e-Rabbi Travels.',
  },
  'canada': {
    name: 'Canada',
    flag: '🇨🇦',
    types: ['Visitor Visa (TRV)', 'Student Visa', 'Work Permit', 'PR Application'],
    fee: 'PKR 50,000 – 90,000',
    processing: '6–12 weeks (can take longer depending on case)',
    validity: 'Usually 1–5 years multiple entry (maximum up to 10 years or passport expiry)',
    documents: [
      'Valid passport + all previous passports',
      '2 passport size photos (as per IRCC specifications: 35mm x 45mm)',
      'CNIC copy (front and back)',
      'Bank statements (last 6 months with strong balance)',
      'Proof of assets in Pakistan (property documents, etc.)',
      'Employment letter / NOC with salary details (if employed)',
      'Income tax returns (last 2–3 years)',
      'Detailed travel itinerary / purpose of visit',
      'Confirmed return flight booking (recommended)',
      'Hotel booking or invitation letter from Canadian host (with host proof)',
      'Previous travel history / visas (if any)',
      'Biometrics enrollment at VFS Global (mandatory for Pakistani applicants)',
    ],
    notes: [
      'Canada Visitor Visa (TRV) applications are submitted online through the official IRCC portal (ircc.canada.ca).',
      'Biometrics (fingerprints + photo) is mandatory for almost all Pakistani applicants at VFS Global.',
      'Processing time varies greatly — check current times on IRCC website. Apply at least 3 months before travel.',
      'Strong ties to Pakistan (job, family, property, business) must be clearly demonstrated to show intent to return.',
      'Our team helps with document preparation, form filling and consultation only. We do not guarantee visa approval.',
    ],
    whatsappMsg: 'I need help with Canada visa',
    seoTitle: 'Canada Visitor Visa from Pakistan – Requirements, Fee & Process 2026 | Hasb-e-Rabbi',
    seoDescription: 'Complete guide for Pakistani applicants for Canada Visitor (TRV), Student & Work Visa. Documents, fees, processing time, biometrics and strong ties tips with Hasb-e-Rabbi Travels.',
  },
  'australia': {
    name: 'Australia',
    flag: '🇦🇺',
    types: ['Tourist Visa (Subclass 600)', 'Student Visa', 'Work Visa', 'Business Visa'],
    fee: 'PKR 50,000 – 85,000',
    processing: '4–8 weeks (can take longer in peak periods or complex cases)',
    validity: 'Usually 3–12 months (stay duration decided by case officer)',
    documents: [
      'Valid passport (minimum 6 months validity from date of travel)',
      'Recent passport size photos (35mm x 45mm, white background)',
      'CNIC copy (front and back)',
      'Bank statements (last 6 months with sufficient funds)',
      'Proof of assets in Pakistan (property documents, etc.)',
      'Employment letter / NOC with salary slips (if employed)',
      'Income tax returns (last 2–3 years)',
      'Detailed travel itinerary and purpose of visit',
      'Confirmed return flight booking',
      'Hotel booking or sponsor invitation letter (with sponsor details)',
      'Health / travel insurance coverage',
      'Medical examination results (if required)',
      'Biometrics (mandatory for Pakistani applicants at VFS Global)',
    ],
    notes: [
      'Australia visa applications are submitted online through the ImmiAccount portal at immi.homeaffairs.gov.au.',
      'Pakistani applicants must provide strong evidence of ties to Pakistan (job, family, property, business) to show genuine visitor intent.',
      'Biometrics and sometimes medical examination are required.',
      'Processing times vary significantly — check current times on the official website. Apply well in advance (at least 2–3 months before travel).',
      'Our team provides consultation and document preparation support only. We do not guarantee visa approval.',
    ],
    whatsappMsg: 'I need help with Australia visa',
    seoTitle: 'Australia Visitor Visa (Subclass 600) from Pakistan – Requirements, Fee & Process 2026 | Hasb-e-Rabbi',
    seoDescription: 'Complete guide for Pakistani applicants for Australia Tourist Visa (Subclass 600), Student & Work Visa. Documents, fees, processing time and strong ties tips with Hasb-e-Rabbi Travels.',
  },
};

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" className="flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export async function generateStaticParams() {
  return Object.keys(countriesData).map((slug) => ({ country: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }) {
  const { country: slug } = await params;
  const data = countriesData[slug];
  if (!data) return {};
  return {
    title: data.seoTitle,
    description: data.seoDescription,
    alternates: { canonical: `https://hasberabbi.com/visa-services/${slug}` },
    openGraph: {
      title: data.seoTitle,
      description: data.seoDescription,
      url: `https://hasberabbi.com/visa-services/${slug}`,
    },
  };
}

export default async function CountryVisaPage({ params }: { params: Promise<{ country: string }> }) {
  const { country: slug } = await params;
  const country = countriesData[slug];

  if (!country) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative text-white py-24" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${
          slug === 'saudi-arabia' ? 'https://images.pexels.com/photos/15839821/pexels-photo-15839821.jpeg?w=1600' :
          slug === 'uae-dubai' ? 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80' :
          slug === 'united-kingdom' ? 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?w=1600' :
          slug === 'schengen-europe' ? 'https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?w=1600' :
          slug === 'malaysia' ? 'https://images.pexels.com/photos/1538177/pexels-photo-1538177.jpeg?w=1600' :
          slug === 'turkey' ? 'https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg?w=1600' :
          slug === 'canada' ? 'https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?w=1600' :
          slug === 'australia' ? 'https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?w=1600' :
          'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?w=1600'
        })`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="container mx-auto px-4">
          <div className="text-sm text-white/60 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>›</span>
            <Link href="/visa-services" className="hover:text-white transition">Visa Services</Link>
            <span>›</span>
            <span className="text-white">{country.name}</span>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <span className="text-5xl md:text-7xl">{country.flag}</span>
            <div>
              <h1 className="text-2xl md:text-5xl font-extrabold mb-3">
                {country.name} Visa
              </h1>
              <div className="flex flex-wrap gap-2">
                {country.types.map((type) => (
                  <span key={type} className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-gray-100">
              <div className="text-3xl mb-2 text-center">💰</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide mb-1 text-center">Approximate Fee</div>
              <div className="font-extrabold text-primary text-lg text-center">{country.fee}</div>
              {country.feeBreakdown && (
                <ul className="mt-3 space-y-1">
                  {country.feeBreakdown.map((item, i) => (
                    <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                      <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {country.feeNote && (
                <p className="mt-3 text-xs text-gray-400 italic border-t border-gray-100 pt-2">{country.feeNote}</p>
              )}
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-md border-2 border-gray-100">
              <div className="text-3xl mb-2">⏱</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Processing Time</div>
              <div className="font-extrabold text-primary text-lg">{country.processing}</div>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-md border-2 border-gray-100">
              <div className="text-3xl mb-2">📅</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Visa Validity</div>
              <div className="font-extrabold text-primary text-lg">{country.validity}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Note */}
      {country.eligibilityNote && (
        <section className="py-8 bg-yellow-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="border-l-4 border-yellow-400 bg-white rounded-r-2xl p-6 shadow-sm">
              <h2 className="text-lg font-extrabold text-yellow-700 mb-2 flex items-center gap-2">
                ⚠️ Important Eligibility Information for Pakistani Passport Holders
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm">{country.eligibilityNote}</p>
            </div>
          </div>
        </section>
      )}

      {/* Documents + Notes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

            {/* Documents */}
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-extrabold text-primary-dark mb-6">
                📄 Required Documents
              </h2>
              <ul className="space-y-3">
                {country.documents.map((doc, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="text-green-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>

              {country.extraDocuments && (
                <div className="mt-6 pt-5 border-t-2 border-dashed border-gray-200">
                  <h3 className="font-extrabold text-primary-dark mb-3 text-sm uppercase tracking-wide">
                    {country.extraDocuments.heading}
                  </h3>
                  <ul className="space-y-2">
                    {country.extraDocuments.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <span className="text-yellow-500 font-bold mt-0.5 flex-shrink-0">★</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Notes + CTA */}
            <div className="flex flex-col gap-6">
              <div className="bg-accent/10 border-l-4 border-accent rounded-r-2xl p-6">
                <h2 className="text-xl font-extrabold text-primary-dark mb-4">
                  💡 Important Notes
                </h2>
                <ul className="space-y-3">
                  {country.notes.map((note, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                      <span className="text-primary font-bold mt-0.5 flex-shrink-0">→</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {country.disclaimer && (
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <p className="text-xs text-gray-500 italic">
                    <span className="font-bold text-gray-600">Disclaimer: </span>
                    {country.disclaimer}
                  </p>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-md">
                <h3 className="font-extrabold text-gray-800 mb-2 text-lg">Get Free Consultation</h3>
                <p className="text-gray-600 text-sm mb-5">
                  Our team will guide you through the entire {country.name} visa process — from document checking and application filling to final submission.
                </p>

                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/923313954965?text=${encodeURIComponent(country.whatsappMsg)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition-all"
                >
                  <WhatsAppIcon />
                  <span className="truncate">Apply — {country.name} Visa</span>
                </a>

                {/* Call Button */}
                <a
                  href="tel:+923313954965"
                  className="flex items-center justify-center gap-2 w-full mt-3 border-2 border-primary text-primary py-4 rounded-xl font-bold hover:bg-primary hover:text-white transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span className="whitespace-nowrap">📞 +92 331 3954965</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Countries */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-primary-dark mb-8 text-center">
            Explore Other Countries
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'Saudi Arabia', slug: 'saudi-arabia', flag: '🇸🇦' },
              { name: 'UAE / Dubai', slug: 'uae-dubai', flag: '🇦🇪' },
              { name: 'United Kingdom', slug: 'united-kingdom', flag: '🇬🇧' },
              { name: 'Schengen', slug: 'schengen-europe', flag: '🇪🇺' },
              { name: 'Malaysia', slug: 'malaysia', flag: '🇲🇾' },
              { name: 'Turkey', slug: 'turkey', flag: '🇹🇷' },
              { name: 'Canada', slug: 'canada', flag: '🇨🇦' },
              { name: 'Australia', slug: 'australia', flag: '🇦🇺' },
            ]
              .filter((c) => c.slug !== slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/visa-services/${c.slug}`}
                  className="flex items-center gap-2 bg-white border-2 border-gray-200 hover:border-primary hover:text-primary px-5 py-3 rounded-full font-semibold text-gray-700 transition-all shadow-sm"
                >
                  <span>{c.flag}</span>
                  <span>{c.name}</span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}