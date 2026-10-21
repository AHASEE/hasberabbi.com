import Link from 'next/link';
import type { ReactNode } from 'react';

const HARAMAIN_GUIDES = new Set([
  'complete-guide-to-haramain-high-speed-railway-hhr-train-fares-2026',
  'haramain-train-ticket-prices-2026-rates-table-hinglish-urduhindi',
]);

export function isReviewedGuide(slug: string) {
  return (
    HARAMAIN_GUIDES.has(slug) ||
    slug === 'hajj-2027-registration-dates-cost-guide' ||
    slug === 'solo-female-umrah-from-pakistan-2026'
  );
}

export const GUIDE_REVIEW_DATE = '2026-10-22T00:00:00+05:00';

/**
 * The original Tiptap content remains in the database. Avoid multiple H1s on
 * these guides, repair a misleading booking link, and correct an old redirect
 * target in editorial cross-links. No price or legal claims are rewritten here.
 */
export function improveGuideHtml(slug: string, html: string) {
  if (!isReviewedGuide(slug)) return html;

  let updated = html
    .replace(/<(\/?)h1(?=\s|>)/gi, '<$1h2')
    .replace(/<h([2-6])\b[^>]*>\s*(?:&nbsp;\s*)*<\/h\1>/gi, '');

  if (HARAMAIN_GUIDES.has(slug)) {
    updated = updated.replace(
      /<a\b[^>]*>\s*HHR Online Booking Portal\s*<\/a>/gi,
      '<a href="https://sar.hhr.sa/" target="_blank" rel="noopener noreferrer">Official Haramain booking (Saudi Arabia Railways)</a>'
    );
  }

  return updated.replace(
    /\/blog\/haramain-train-ticket-prices-2026-rates-table(?!-hinglish-urduhindi)/g,
    '/blog/haramain-train-ticket-prices-2026-rates-table-hinglish-urduhindi'
  );
}

const sourceClass = 'font-semibold text-emerald-800 underline underline-offset-4 hover:text-emerald-950';

function SourceLink({ href, children }: { href: string; children: ReactNode }) {
  return <a className={sourceClass} href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
}

export default function VerifiedGuideUpdate({ slug }: { slug: string }) {
  if (!isReviewedGuide(slug)) return null;

  return (
    <section aria-label="Updated official guidance" className="mb-9 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 sm:p-7 text-slate-800">
      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
        Editorial update · Sources checked 22 October 2026
      </p>

      {slug === 'hajj-2027-registration-dates-cost-guide' ? (
        <>
          <h2 className="mb-3 text-2xl font-bold text-emerald-950">Hajj 2027 Pakistan: latest official update</h2>
          <p className="mb-4 leading-7">
            <strong>Quick answer:</strong> Hajj 2027 pre-registration began on 22 June 2026.
            Since the original July article, Pakistan has issued a Hajj Policy and Plan for
            2027–2030 and published government/private scheme application and payment
            notices. Pre-registration by itself does not mean a confirmed Hajj place.
          </p>
          <h3 className="mb-2 text-lg font-bold text-emerald-950">Have application and payment dates changed?</h3>
          <p className="mb-3 leading-7">
            Yes. The Ministry published a government scheme <strong>second-instalment
            window of 5–20 October 2026</strong>. That published deadline has now passed;
            check the Ministry for any newer extension, payment or refund notice rather
            than relying on the older text below.
          </p>
          <h3 className="mb-2 text-lg font-bold text-emerald-950">Where should pilgrims verify their status?</h3>
          <p className="mb-3 leading-7">
            Use the official <SourceLink href="https://hajj.mora.gov.pk/login">Hajj Management
            System</SourceLink> or Pak Hajj app. For policy, scheme changes, medical
            certificate instructions and instalments, consult the{' '}
            <SourceLink href="https://www.mora.gov.pk/LatestNews">Ministry's latest notices</SourceLink>
            {' '}and <SourceLink href="https://www.mora.gov.pk/Detail/N2YzYjlmM2UtZTQxNi00ZDBlLTllNjQtMTZiMDYyYzhhNzlk">2027–2030 policy listing</SourceLink>.
            Never make payments through an unverified agent or social-media account.
          </p>
          <p className="text-sm text-emerald-950">
            <strong>Reading note:</strong> The original guide below was published in July 2026.
            Its descriptions of future announcements may be outdated; use the linked
            government notices for current deadlines.
          </p>
        </>
      ) : slug === 'solo-female-umrah-from-pakistan-2026' ? (
        <>
          <h2 className="mb-3 text-2xl font-bold text-emerald-950">Can women travel for Umrah without a mahram?</h2>
          <p className="mb-4 leading-7">
            <strong>Quick answer:</strong> Saudi Arabia permits women to perform Umrah
            without a male guardian under its entry and Umrah procedures. This is a
            statement about Saudi travel rules, not a ruling on every school of Islamic
            jurisprudence. Visa eligibility and pilgrimage requirements still depend
            on the individual traveller's documents and current rules.
          </p>
          <h3 className="mb-2 text-lg font-bold text-emerald-950">What should a Pakistani traveller check first?</h3>
          <p className="mb-3 leading-7">
            Confirm which Saudi visa route you qualify for before booking flights. A
            tourist eVisa is <strong>not automatically available to every Pakistani
            passport holder</strong>. Check entry eligibility through official Saudi
            services and use <SourceLink href="https://www.nusuk.sa/">Nusuk</SourceLink>
            {' '}for available Umrah/Rawdah services and any permit requirements
            applicable to your journey.
          </p>
          <h3 className="mb-2 text-lg font-bold text-emerald-950">Practical solo travel checklist</h3>
          <p className="mb-3 leading-7">
            Choose well-reviewed accommodation, plan your arrival transfer, keep copies
            of bookings, share your itinerary with a trusted contact, and check
            Haramain train times and luggage rules before purchasing.
          </p>
          <p className="mb-3 text-sm">
            <strong>Sources:</strong> <SourceLink href="https://www.spa.gov.sa/en/d9a1b8c2a8m">Saudi Press Agency's official mahram-policy announcement</SourceLink>
            {' '}and <SourceLink href="https://www.nusuk.sa/umrah">Nusuk Umrah information</SourceLink>.
          </p>
          <p className="text-sm text-emerald-950">The earlier article below contains general planning advice; recheck operational requirements close to your departure date.</p>
        </>
      ) : (
        <>
          <h2 className="mb-3 text-2xl font-bold text-emerald-950">Haramain train fares: check the live quote</h2>
          <p className="mb-4 leading-7">
            <strong>Quick answer:</strong> Haramain High-Speed Railway fares depend on
            route, date, departure, seat class, and availability. The SAR amounts in
            the earlier guide below are <strong>illustrative estimates, not today's
            confirmed ticket prices</strong>. Compare the live fare for your specific
            journey before making a travel budget.
          </p>
          <h3 className="mb-2 text-lg font-bold text-emerald-950">Where can I book the official train?</h3>
          <p className="mb-3 leading-7">
            Use <SourceLink href="https://sar.hhr.sa/">Saudi Arabia Railways' official
            Haramain website</SourceLink> and check the{' '}
            <SourceLink href="https://sar.hhr.sa/timetable">current timetable</SourceLink>.
            Select your stations, date, number of travellers, and class to check available
            trains and the actual checkout total.
          </p>
          <h3 className="mb-2 text-lg font-bold text-emerald-950">What about luggage, discounts and refunds?</h3>
          <p className="mb-3 leading-7">
            The published Haramain baggage rules describe one large item up to 25 kg,
            within specified dimensions, plus an additional small personal bag.
            Verify the rules shown on your booking and check current child discounts,
            amendments, and cancellations directly with the railway; these are not
            guaranteed fixed rates for every ticket.
          </p>
          <p className="mb-3 text-sm">
            <strong>Official references:</strong> <SourceLink href="https://sar.hhr.sa/documents/20143/156950/luggageconditions.pdf/62844975-102a-1dec-82f4-b03d51ab33e8">HHR luggage conditions</SourceLink>
            {' '}and <SourceLink href="https://sar.hhr.sa/documents/20143/156971/HHR_PASSENGER_CHARTER.pdf/">HHR passenger charter</SourceLink>.
          </p>
          <p className="text-sm text-emerald-950">
            <strong>Planning tip:</strong> A train ticket covers station-to-station travel;
            check the cost of getting from each station to your hotel.
          </p>
        </>
      )}
      <div className="mt-5 border-t border-emerald-200 pt-4 text-sm">
        <strong>Related reading:</strong>{' '}
        {slug === 'hajj-2027-registration-dates-cost-guide' ? (
          <Link className={sourceClass} href="/blog/solo-female-umrah-from-pakistan-2026">Solo Female Umrah</Link>
        ) : (
          <Link className={sourceClass} href="/blog/hajj-2027-registration-dates-cost-guide">Hajj 2027 registration</Link>
        )}
        {' · '}
        {HARAMAIN_GUIDES.has(slug) ? (
          <Link className={sourceClass} href="/blog/solo-female-umrah-from-pakistan-2026">Solo Female Umrah</Link>
        ) : (
          <Link className={sourceClass} href="/blog/complete-guide-to-haramain-high-speed-railway-hhr-train-fares-2026">Haramain train guide</Link>
        )}
      </div>
    </section>
  );
}
