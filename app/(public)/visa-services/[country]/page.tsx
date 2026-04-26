import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

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
  ogImage?: string;
  schemaKeywords?: string[];
  introParagraph: string;
  rejectionReasons: string[];
  applySteps: string[];
  approvalTips: string[];
  whoShouldNotApply: string[];
  faqs: { q: string; a: string }[];
}> = {
  'saudi-arabia': {
    name: 'Saudi Arabia',
    flag: '🇸🇦',
    types: ['Tourist Visa', 'Business Visa', 'Umrah Visa', 'Work Visa'],
    fee: 'PKR 12,000 – 20,000',
    processing: '3–7 working days',
    validity: '1 year (multiple entry)',
    ogImage: 'https://images.pexels.com/photos/15839821/pexels-photo-15839821.jpeg?w=1200',
    schemaKeywords: ['Saudi Arabia visa Pakistan', 'Saudi tourist visa', 'Umrah visa Pakistan', 'Saudi work visa'],
    introParagraph: `Pakistani nationals can apply for a Saudi Arabia visa for tourism, Umrah, business, or work purposes. The Saudi tourist visa allows multiple entries and is valid for one year, with each stay up to 90 days. Processing typically takes 3 to 7 working days — making it one of the faster options for Pakistani passport holders. HasbeRabbi Travels in Karachi assists applicants with document preparation, application filling, and submission to avoid delays or rejection.`,
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
    rejectionReasons: [
      'Incomplete or inconsistent documents — missing bank statement pages or unclear scans',
      'Bank balance too low or showing sudden large deposits just before applying',
      'No proof of employment or business — cannot verify ties to Pakistan',
      'Previously overstayed a Saudi or any GCC country visa',
      'Criminal record or travel history to restricted countries',
      'No confirmed hotel or return flight booking at time of application',
      'For Umrah visa — applying without an authorized travel agent',
    ],
    applySteps: [
      'Gather all documents — passport, CNIC, photos, bank statement, employment letter',
      'Book return flights and hotel (required before applying)',
      'Purchase travel insurance',
      'For tourist visa: apply online through official Saudi visa portal or contact HasbeRabbi Travels',
      'For Umrah visa: apply through an authorized travel agent (legally required)',
      'Pay visa fee online during application',
      'Wait 3–7 working days for processing',
      'Download and print your visa — carry it when traveling',
    ],
    approvalTips: [
      'Bank statement should show consistent balance for at least 3 months — avoid sudden large deposits',
      'Employment letter should mention salary, designation, and years of service',
      'Book refundable tickets and hotels so you can cancel if visa is refused',
      'Apply at least 2–3 weeks before your travel date',
      'Passport must have at least 6 months validity and blank pages for stamps',
      'If previously refused, improve your financial documents before reapplying',
    ],
    whoShouldNotApply: [
      'People with a previous overstay history in Saudi Arabia or any GCC country',
      'Applicants who cannot show stable income or employment',
      'Those with a criminal record',
      'Applicants whose passport has less than 6 months remaining validity',
    ],
    notes: [
      'Saudi Arabia Tourist Visa can be applied online through the official portal.',
      'For Umrah Visa, an authorized travel agent is required by law.',
      'Business visa applicants must provide an invitation letter from a Saudi company.',
      'Work visa requires employer sponsorship from Saudi Arabia.',
    ],
    faqs: [
      { q: 'How can Pakistani nationals apply for a Saudi Arabia visa?', a: 'Pakistani nationals can apply for a Saudi Arabia tourist visa online through the official Saudi visa portal. For Umrah visa, application must be made through an authorized travel agent. Business and work visas require an invitation letter and sponsorship from a Saudi entity.' },
      { q: 'What is the Saudi Arabia visa fee for Pakistani applicants?', a: 'The approximate fee for a Saudi Arabia visa from Pakistan ranges from PKR 12,000 to PKR 20,000 depending on the visa type and service charges.' },
      { q: 'How long does Saudi Arabia visa processing take from Pakistan?', a: 'Saudi Arabia visa processing typically takes 3 to 7 working days when all documents are complete and correct.' },
      { q: 'Can I get a multiple entry Saudi Arabia visa from Pakistan?', a: 'Yes. The Saudi Arabia tourist visa issued to Pakistani passport holders is typically a 1-year multiple entry visa, allowing stays of up to 90 days per visit.' },
      { q: 'What is the most common reason for Saudi Arabia visa rejection for Pakistanis?', a: 'The most common reasons are insufficient bank balance, sudden large deposits in the bank statement, no proof of employment, and missing hotel or flight bookings.' },
      { q: 'How much bank balance is required for Saudi Arabia visa from Pakistan?', a: 'There is no fixed minimum, but your bank statement should show a healthy and consistent balance for at least 3 months that covers your planned trip expenses.' },
      { q: 'Can I apply for Saudi Arabia visa from Karachi?', a: 'Yes. Pakistani nationals including those in Karachi can apply for Saudi Arabia tourist visa online. HasbeRabbi Travels in Karachi also provides full application assistance.' },
      { q: 'Is travel insurance mandatory for Saudi Arabia visa?', a: 'Yes. Travel insurance is a required document for the Saudi Arabia visa application.' },
    ],
    whatsappMsg: 'I need help with Saudi Arabia visa',
    seoTitle: 'Saudi Arabia Visa from Pakistan 2025 – Documents, Fee & Approval Tips',
    seoDescription: 'Complete guide to Saudi Arabia visa for Pakistani nationals. Tourist, Umrah, Business, Work visa — documents, fee PKR 12,000–20,000, rejection reasons, step-by-step process. HasbeRabbi Travels Karachi.',
  },

  'uae-dubai': {
    name: 'UAE / Dubai',
    flag: '🇦🇪',
    types: ['Tourist Visa (30 days)', 'Tourist Visa (60 days)', 'Visit Visa', 'Work Visa'],
    fee: 'PKR 45,000 – 65,000',
    processing: '2–4 working days',
    validity: '30 or 60 days',
    ogImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80',
    schemaKeywords: ['UAE visa Pakistan', 'Dubai visa Pakistan', 'Dubai tourist visa', 'UAE work visa'],
    introParagraph: `Pakistani nationals require a visa to travel to the UAE — Dubai, Abu Dhabi, or Sharjah. The UAE tourist visa is available in 30-day and 60-day options, with processing as fast as 2 to 4 working days. Visa on arrival is not available for Pakistani passport holders — the visa must be arranged before departure through an airline, a UAE-based sponsor, or a registered travel agency. HasbeRabbi Travels handles the complete UAE visa process for applicants across Pakistan.`,
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
    rejectionReasons: [
      'Low or inconsistent bank balance — less than PKR 50,000 average over 3 months',
      'Unexplained large cash deposits just before applying — looks suspicious to immigration',
      'No employment letter or proof of income',
      'Previous UAE visa overstay or deportation history',
      'Passport with less than 6 months validity',
      'Incomplete application or missing documents',
      'Previous visa refusal from UAE or another Gulf country without explanation',
      'No hotel booking or UAE host invitation letter',
    ],
    applySteps: [
      'Confirm travel dates and book return flight (refundable if possible)',
      'Book hotel accommodation in UAE for entire stay',
      'Get employment letter from employer (mentioning salary, designation, leave approval)',
      'Prepare bank statements for last 3 months showing consistent balance',
      'Contact HasbeRabbi Travels or apply through a UAE airline or sponsor',
      'Submit all documents — our team reviews and submits the application',
      'Receive visa approval by email within 2–4 working days',
      'Print visa and carry it with passport when traveling',
    ],
    approvalTips: [
      'Maintain a minimum PKR 50,000 balance consistently for 3 months — not just before applying',
      'Employment letter on company letterhead with stamp and HR signature works best',
      'Book refundable return ticket — shows genuine intent to return to Pakistan',
      'If self-employed, provide business registration and last 6 months bank statement',
      'Apply at least 1 week before travel — do not apply at the last minute',
      'Avoid overstay issues — check your UAE entry/exit history if unsure',
    ],
    whoShouldNotApply: [
      'Applicants with a UAE deportation or immigration blacklist history',
      'Those with less than PKR 30,000 average monthly balance',
      'Applicants who cannot provide any employment or income proof',
      'Those with a confirmed UAE visa overstay on record',
    ],
    notes: [
      'UAE visa can be applied through any Dubai-based airline or a registered sponsor.',
      'A 30-day visa is suitable for short trips while a 60-day visa is ideal for extended stays.',
      'Work visa requires a verified employment offer and sponsorship from a UAE employer.',
      'Visa on arrival is not available for Pakistani passport holders.',
    ],
    faqs: [
      { q: 'Can Pakistani passport holders get a UAE visa on arrival?', a: 'No. Pakistani passport holders cannot get a UAE visa on arrival. The visa must be obtained before travel through an airline, UAE-based sponsor, or registered travel agency.' },
      { q: 'What is the Dubai tourist visa fee for Pakistanis in 2025?', a: 'The UAE/Dubai tourist visa fee for Pakistani applicants ranges from PKR 45,000 to PKR 65,000 total, covering the visa fee, service charges, and related costs.' },
      { q: 'What is the difference between a 30-day and 60-day UAE visa?', a: 'The 30-day UAE tourist visa allows a stay of up to 30 days. The 60-day visa allows a longer stay and is better for extended family visits or business trips.' },
      { q: 'How long does UAE visa processing take for Pakistani applicants?', a: 'UAE visa processing typically takes 2 to 4 working days when all documents are correctly submitted.' },
      { q: 'What bank balance is required for UAE visa from Pakistan?', a: 'Applicants typically need a minimum average balance of PKR 50,000 over the last 3 months shown in bank statements.' },
      { q: 'Why is my Dubai visa rejected from Pakistan?', a: 'Common reasons include low bank balance, no employment proof, previous overstay history, incomplete documents, or sudden large deposits in the bank statement shortly before applying.' },
      { q: 'Can I apply for UAE visa from Karachi?', a: 'Yes. Pakistani applicants from Karachi can apply through HasbeRabbi Travels or a UAE airline. The process is fully handled online.' },
      { q: 'Do I need a hotel booking for UAE visa application?', a: 'Yes. A confirmed hotel booking or invitation letter from a UAE host is required for the UAE tourist visa application.' },
    ],
    whatsappMsg: 'I need help with UAE Dubai visa',
    seoTitle: 'UAE Dubai Visa from Pakistan 2025 – Requirements, Rejection Reasons & Approval Tips',
    seoDescription: 'Complete guide to UAE Dubai tourist visa for Pakistani nationals. 30 and 60 day visa, documents, fee PKR 45,000–65,000, common rejection reasons, step-by-step process. HasbeRabbi Travels.',
  },

  'united-kingdom': {
    name: 'United Kingdom',
    flag: '🇬🇧',
    types: ['Standard Visitor Visa', 'Student Visa', 'Work Visa', 'Family Visa'],
    fee: 'PKR 35,000 – 55,000',
    processing: '15–21 working days',
    validity: '6 months (standard visitor)',
    ogImage: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?w=1200',
    schemaKeywords: ['UK visa Pakistan', 'UK visitor visa', 'Britain visa Pakistan', 'UK student visa Pakistan'],
    introParagraph: `Applying for a UK Standard Visitor Visa from Pakistan requires careful preparation. The rejection rate for Pakistani applicants is relatively high — you must demonstrate strong financial ties to Pakistan and genuine intent to return after your visit. Applications are submitted through VFS Global offices in Karachi, Lahore, or Islamabad. HasbeRabbi Travels provides professional guidance on document preparation — a well-prepared file significantly improves your approval chances.`,
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
    rejectionReasons: [
      'Weak financial profile — low or inconsistent bank balance over 6 months',
      'No proof of strong ties to Pakistan — no stable job, no property, no family responsibility',
      'Purpose of visit not clearly explained or lacking supporting documents',
      'Previously refused a UK visa without significantly improving the application',
      'Inconsistency between documents — salary in letter does not match bank credits',
      'No previous travel history — first-time travelers face higher scrutiny',
      'Overstay history in UK or any other country',
      'Invitation letter from UK host without supporting documents proving host status',
    ],
    applySteps: [
      'Create an account on the UK Visas and Immigration online portal at gov.uk',
      'Fill the online visa application form carefully — every field matters',
      'Pay the visa fee online (approximately GBP 115 for standard visitor)',
      'Book VFS Global appointment in Karachi, Lahore, or Islamabad',
      'Gather all documents — bank statements (6 months), employment letter, property proof, tax returns',
      'Attend VFS appointment — submit documents and provide biometrics (fingerprints and photo)',
      'Wait 15–21 working days for a decision',
      'Collect passport from VFS Global or opt for courier delivery',
    ],
    approvalTips: [
      'Bank statement should show 6 months of healthy consistent balance — not just recent deposits',
      'Write a clear cover letter explaining your purpose, itinerary, and ties to Pakistan',
      'Attach property documents, vehicle ownership, or family details — anything proving you will return',
      'If invited by a UK resident, ask them to provide immigration status proof, payslips, and utility bill',
      'Previous travel history to UAE, Saudi Arabia, Schengen greatly helps your application',
      'First-time travelers should apply with an extra-strong financial profile',
      'Professional document preparation is strongly recommended — UK visa is complex',
    ],
    whoShouldNotApply: [
      'Applicants with a previous UK visa refusal who have not significantly improved their documents',
      'Those with no stable income, employment, or assets in Pakistan',
      'Applicants with overstay history in any country',
      'Those whose purpose of visit cannot be clearly supported with documents',
    ],
    notes: [
      'UK visa applications are submitted through VFS Global offices in Pakistan.',
      'Applicants must demonstrate strong financial ties to Pakistan to prove intent to return.',
      'The rejection rate for Pakistani applicants is relatively high — professional assistance is strongly recommended.',
      'A well-prepared application with clear documentation significantly improves approval chances.',
    ],
    faqs: [
      { q: 'How do Pakistani nationals apply for a UK visitor visa?', a: 'Pakistani nationals apply online through the UK government visa portal, then submit biometrics and documents at VFS Global offices in Karachi, Lahore, or Islamabad.' },
      { q: 'What is the UK visa fee for Pakistani applicants in 2025?', a: 'The UK Standard Visitor Visa fee is GBP 115 (approximately PKR 40,000), plus VFS service charges. Total cost including our service ranges from PKR 35,000 to 55,000.' },
      { q: 'How long does UK visa processing take from Pakistan?', a: 'UK visa processing typically takes 15 to 21 working days from the date of biometric submission at VFS Global.' },
      { q: 'Why is UK visa rejected for Pakistani applicants?', a: 'Common reasons are weak financial profile, no proof of ties to Pakistan, inconsistent documents, unclear purpose of visit, and no previous travel history.' },
      { q: 'What bank balance is required for UK visa from Pakistan?', a: 'There is no fixed minimum, but applicants must show 6 months of consistent statements demonstrating they can comfortably fund their trip without working in the UK.' },
      { q: 'Does previous travel history help for UK visa from Pakistan?', a: 'Yes. Previous travel history to UAE, Saudi Arabia, Schengen countries, or the US significantly strengthens a UK visa application.' },
      { q: 'Where to apply for UK visa in Karachi?', a: 'UK visa applications for Karachi applicants are submitted at the VFS Global office in Karachi after completing the online application on the UK government portal.' },
      { q: 'Can I reapply after UK visa rejection from Pakistan?', a: 'Yes, but you must first address the rejection reasons — improve financial documents, strengthen your ties to Pakistan, and get professional help before reapplying.' },
    ],
    whatsappMsg: 'I need help with UK visa',
    seoTitle: 'UK Visa from Pakistan 2025 – Requirements, Rejection Reasons & Approval Tips',
    seoDescription: 'Complete guide to UK visitor visa for Pakistani nationals. Documents, fee PKR 35,000–55,000, rejection reasons, step-by-step process, VFS Global Karachi. HasbeRabbi Travels.',
  },

  'schengen-europe': {
    name: 'Schengen (Europe)',
    flag: '🇪🇺',
    types: ['Tourist Visa', 'Business Visa', 'Transit Visa'],
    fee: 'PKR 45,000 – 65,000 (including service charges & insurance)',
    feeBreakdown: [
      'Adult (12+ years): EUR 90 (approx PKR 31,000) + VFS Global service charges',
      'Children (6–11 years): EUR 45',
      'Children under 6 years: Free',
      'VFS Service Charge: Approx PKR 5,500 – 12,000 (depending on embassy)',
    ],
    feeNote: 'Exact amount varies based on current exchange rate and selected Schengen country. Always confirm final fee on VFS Global or embassy website.',
    processing: '15–30 working days (apply at least 6–8 weeks before travel)',
    validity: '90 days within any 180-day period',
    ogImage: 'https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?w=1200',
    schemaKeywords: ['Schengen visa Pakistan', 'Europe visa Pakistan', 'Schengen visa Karachi', 'Europe tourist visa Pakistan'],
    eligibilityNote: 'Pakistani applicants must book a VFS Global appointment in Karachi, Lahore, or Islamabad. The application is submitted through the embassy of your main destination country. You must demonstrate strong ties to Pakistan — employment, business proof, family ties, and bank statements. Always check exact requirements for your chosen Schengen country on the official VFS Global website.',
    introParagraph: `A Schengen visa allows Pakistani passport holders to visit up to 26 European countries with a single visa — including France, Germany, Italy, Spain, Netherlands, and Switzerland. The visa allows stays of up to 90 days within any 180-day period. Pakistani applicants must apply through VFS Global at the embassy of their main destination country. The rejection rate is significant — careful document preparation is essential. HasbeRabbi Travels guides applicants through every step of the Schengen visa process from Karachi.`,
    documents: [
      'Valid Pakistani passport (minimum 6 months validity beyond planned stay)',
      'Recent passport size photos (as per Schengen specifications)',
      'Completed Schengen visa application form',
      'Confirmed return flight booking or travel itinerary',
      'Hotel booking or accommodation proof for entire stay',
      'Travel health insurance (minimum EUR 30,000 coverage — mandatory)',
      'Bank statements and financial proof (last 3 to 6 months)',
      'Employment or business proof, or NOC from employer',
      'Invitation letter (if visiting someone in the Schengen area)',
    ],
    rejectionReasons: [
      'Insufficient bank balance — not enough funds to cover the entire trip',
      'No clear itinerary — embassy cannot determine which countries you will visit or where you will stay',
      'Missing or invalid travel insurance — must be EUR 30,000 minimum and cover all Schengen countries',
      'No employment proof or NOC — cannot demonstrate ties to Pakistan',
      'Previous Schengen visa overstay or refusal without improvement in application',
      'Inconsistency between documents — stated income does not match bank deposits',
      'Applying at the wrong embassy — must apply at main destination country embassy',
      'Applying too close to travel date — less than 15 days before departure',
    ],
    applySteps: [
      'Decide your main destination country — the country where you will spend the most time',
      'Book VFS Global appointment for that country\'s embassy (Karachi, Lahore, or Islamabad)',
      'Book return flights and hotel accommodation for entire stay',
      'Purchase Schengen travel insurance (EUR 30,000 minimum) — this is mandatory',
      'Prepare all documents: bank statement, employment letter, NOC, invitation letter if applicable',
      'Fill the Schengen visa application form carefully — no errors or blanks',
      'Attend VFS Global appointment — submit documents and pay fee',
      'Wait 15–30 working days for processing',
      'Collect passport from VFS Global or via courier',
    ],
    approvalTips: [
      'Apply to the correct embassy — the country where you will spend the most days',
      'Show a detailed day-by-day itinerary with hotel bookings for each city',
      'Travel insurance must clearly state EUR 30,000 coverage valid for all Schengen countries',
      'Bank statement should show 3–6 months of stable balance — approximately PKR 5,000 per day of travel',
      'NOC or employment letter should be on company letterhead with stamp and signature',
      'Previous travel history to UAE, UK, or USA greatly helps your Schengen application',
      'Apply at least 6–8 weeks before travel — never wait until the last month',
    ],
    whoShouldNotApply: [
      'Applicants with a previous Schengen refusal who have not addressed the rejection reasons',
      'Those who cannot demonstrate financial stability through consistent bank statements',
      'Applicants with no employment, business, or strong family ties in Pakistan',
      'Those applying with less than 15 days to their travel date',
    ],
    notes: [
      'Schengen visa is issued for tourist, business, visit, or transit purposes only.',
      'Our team will guide you through document preparation, form filling, and VFS appointment process.',
      'For official requirements, visit www.vfsglobal.com or your destination country embassy website.',
    ],
    disclaimer: 'This information is provided for general guidance only. Final requirements, fee, and visa decision depend on the concerned Schengen embassy and VFS Global. We do not guarantee visa approval.',
    faqs: [
      { q: 'Which countries can I visit with a Schengen visa from Pakistan?', a: 'A Schengen visa allows entry into 26 European countries including France, Germany, Italy, Spain, Netherlands, Belgium, Austria, Switzerland, Greece, and Portugal.' },
      { q: 'What is the Schengen visa fee for Pakistani applicants in 2025?', a: 'The Schengen visa fee is EUR 90 (approximately PKR 31,000) for adults, plus VFS Global service charges of PKR 5,500 to 12,000. Total cost including our service is PKR 45,000 to 65,000.' },
      { q: 'How long does Schengen visa processing take from Pakistan?', a: 'Processing takes a minimum of 15 calendar days but can take 30 to 60 days during peak season. Apply at least 6 to 8 weeks before travel.' },
      { q: 'Why is Schengen visa rejected for Pakistani applicants?', a: 'Common reasons are insufficient bank balance, missing travel insurance, no employment proof, applying at the wrong embassy, unclear itinerary, and previous overstay.' },
      { q: 'Is travel insurance mandatory for Schengen visa?', a: 'Yes. Travel health insurance with a minimum coverage of EUR 30,000 valid across all Schengen countries is mandatory and must be purchased before applying.' },
      { q: 'Which Schengen embassy should I apply to from Pakistan?', a: 'Apply to the embassy of the country where you will spend the most time. If spending equal time in multiple countries, apply to the embassy of your first entry point.' },
      { q: 'How much bank balance is required for Schengen visa from Pakistan?', a: 'A commonly used guideline is approximately EUR 50 to 100 per day of planned stay. You should show 3 to 6 months of consistent bank statements.' },
      { q: 'Can I apply for Schengen visa from Karachi?', a: 'Yes. VFS Global has offices in Karachi for most Schengen country embassies. HasbeRabbi Travels in Karachi also provides complete Schengen visa assistance.' },
    ],
    whatsappMsg: 'I need help with Schengen Europe visa',
    seoTitle: 'Schengen Visa from Pakistan 2025 – Documents, Rejection Reasons & Approval Tips',
    seoDescription: 'Complete guide to Schengen Europe visa for Pakistani nationals. Fee EUR 90, mandatory travel insurance, VFS Global process, rejection reasons and approval tips. HasbeRabbi Travels Karachi.',
  },

  'malaysia': {
    name: 'Malaysia',
    flag: '🇲🇾',
    types: ['eVisa (Tourist)', 'Single Entry Visit Visa', 'Social Visit Visa'],
    fee: 'PKR 15,000 – 25,000',
    processing: '5–10 working days',
    validity: 'Up to 30 days stay (visa usually valid for 3 months)',
    ogImage: 'https://images.pexels.com/photos/1538177/pexels-photo-1538177.jpeg?w=1200',
    schemaKeywords: ['Malaysia visa Pakistan', 'Malaysia eVisa Pakistan', 'Malaysia tourist visa', 'KL visa Pakistan'],
    introParagraph: `Pakistani passport holders must obtain a Malaysia eVisa before traveling — visa on arrival is not available. The eVisa is applied online through the official Malaysian Immigration portal and is typically processed within 5 to 10 working days. It allows a stay of up to 30 days and is generally single entry. After visa approval, travelers must also complete the Malaysia Digital Arrival Card (MDAC) online — this is mandatory and free. HasbeRabbi Travels assists Pakistani applicants with the full Malaysia eVisa process.`,
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
    rejectionReasons: [
      'Incomplete or incorrect online application form',
      'Passport photo not meeting specifications — wrong size, background, or quality',
      'Low bank balance — insufficient funds to cover Malaysia trip',
      'No hotel booking or return flight at time of application',
      'Previous overstay in Malaysia',
      'Application details inconsistent with passport information',
      'Traveling with a damaged or near-expiry passport',
    ],
    applySteps: [
      'Go to the official Malaysia eVisa portal: malaysiavisa.imi.gov.my',
      'Create an account and start a new visa application',
      'Upload your passport photo (white background, correct dimensions — 35mm x 50mm)',
      'Fill in all personal and travel details accurately — match exactly with passport',
      'Upload supporting documents — bank statement, flight booking, hotel booking',
      'Pay the eVisa fee online',
      'Wait 5–10 working days for approval email',
      'After approval, complete Malaysia Digital Arrival Card (MDAC) online before your flight',
      'Print or save eVisa to show at immigration on arrival',
    ],
    approvalTips: [
      'Passport photo must exactly meet Malaysia specifications — many rejections are due to photo issues',
      'Have a confirmed hotel booking for every night of your stay before applying',
      'Bank statement should show enough funds — approximately PKR 10,000–15,000 per day of stay',
      'Complete MDAC after visa approval but before boarding — do not forget this step',
      'Apply at least 2 weeks before your travel date to allow time for any delays',
      'Double-check all personal details — name, passport number, date of birth must match passport exactly',
    ],
    whoShouldNotApply: [
      'Applicants with a previous Malaysia overstay record',
      'Those with insufficient funds to cover their trip',
      'Applicants who cannot provide confirmed hotel and return flight bookings',
    ],
    notes: [
      'Pakistani passport holders must apply for Malaysia eVisa online before travel. Visa on arrival is not available.',
      'eVisa is usually single entry and allows up to 30 days stay.',
      'After approval, fill Malaysia Digital Arrival Card (MDAC) online — it is mandatory and free.',
      'For longer or multiple entries, embassy route may be required.',
    ],
    faqs: [
      { q: 'Do Pakistani passport holders need a visa for Malaysia?', a: 'Yes. Pakistani passport holders require a Malaysia eVisa before travel. Visa on arrival is not available for Pakistani nationals.' },
      { q: 'What is the Malaysia eVisa fee for Pakistani applicants?', a: 'The total cost of Malaysia eVisa for Pakistani applicants ranges from PKR 15,000 to PKR 25,000, including the government visa fee and service charges.' },
      { q: 'How long does Malaysia eVisa processing take?', a: 'Malaysia eVisa processing typically takes 5 to 10 working days, though it can sometimes take longer depending on application volume.' },
      { q: 'What is the Malaysia Digital Arrival Card (MDAC)?', a: 'MDAC is a mandatory online form all travelers must complete before arriving in Malaysia. It is free and must be submitted after your visa is approved and before you board your flight.' },
      { q: 'Why is Malaysia eVisa rejected for Pakistani applicants?', a: 'Common reasons include incorrect passport photo, incomplete application form, low bank balance, no hotel booking, and previous overstay history in Malaysia.' },
      { q: 'Can I extend my Malaysia eVisa or stay longer than 30 days?', a: 'The standard eVisa allows up to 30 days. For longer stays or multiple entries, you need to apply through the Malaysian embassy route instead.' },
      { q: 'Where to apply for Malaysia eVisa from Pakistan?', a: 'Apply online at the official portal malaysiavisa.imi.gov.my. HasbeRabbi Travels in Karachi also provides full assistance with the Malaysia eVisa application.' },
      { q: 'Is hotel booking required for Malaysia eVisa?', a: 'Yes. A confirmed hotel booking for your entire stay is required when applying for Malaysia eVisa from Pakistan.' },
    ],
    whatsappMsg: 'I need help with Malaysia visa',
    seoTitle: 'Malaysia eVisa from Pakistan 2025 – Requirements, Process & Approval Tips',
    seoDescription: 'Complete guide to Malaysia eVisa for Pakistani nationals. Documents, fee PKR 15,000–25,000, MDAC guide, rejection reasons, step-by-step apply process. HasbeRabbi Travels.',
  },

  'turkey': {
    name: 'Turkey',
    flag: '🇹🇷',
    types: ['e-Visa (Tourist & Business)', 'Sticker Tourist Visa (Embassy Route)'],
    fee: 'PKR 25,000 – 75,000 (depending on visa type)',
    feeBreakdown: [
      'e-Visa (if eligible): Approx PKR 15,000 – 25,000',
      'Sticker Tourist Visa (Embassy route): Approx PKR 22,000 – 35,000',
    ],
    feeNote: 'Exact government fee is shown at evisa.gov.tr during application. Our service charges are separate.',
    processing: '1–3 working days for e-Visa. Sticker visa may take longer.',
    validity: '30–90 days (depending on approval type)',
    ogImage: 'https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg?w=1200',
    schemaKeywords: ['Turkey visa Pakistan', 'Turkey eVisa Pakistan', 'Istanbul visa Pakistan', 'Turkey tourist visa'],
    eligibilityNote: 'Pakistani ordinary passport holders are eligible for Turkey e-Visa only if they hold a valid Schengen Visa, USA Visa, UK Visa, Ireland Visa, or a valid residence permit from any of these countries. Without this, applicants must apply for a Sticker Tourist Visa through the Turkish Embassy. Always verify eligibility at www.evisa.gov.tr before applying.',
    introParagraph: `Pakistani passport holders can visit Turkey for tourism or business — but the visa route depends on eligibility. If you hold a valid Schengen, US, UK, or Ireland visa or residence permit, you qualify for the fast Turkey e-Visa online — often approved within 24 to 72 hours. Without these, you must apply for a Sticker Tourist Visa through the Turkish Embassy in Islamabad or an authorized visa center. HasbeRabbi Travels helps Pakistani applicants determine the correct route and prepare all required documents.`,
    documents: [
      'Valid Pakistani passport (minimum 6 months validity recommended)',
      'Passport must have at least 60 days validity beyond duration of stay (official requirement)',
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
    rejectionReasons: [
      'Applying for e-Visa without a valid Schengen, US, UK, or Ireland visa — most common mistake',
      'Passport validity less than 60 days beyond planned stay',
      'Incorrect or expired supporting visa submitted for e-Visa application',
      'Inconsistent personal details between passport and application form',
      'No hotel booking or return flight proof',
      'Previous overstay in Turkey',
      'Low bank balance or no financial proof for Sticker Visa route',
    ],
    applySteps: [
      'First check your eligibility — do you hold a valid Schengen, US, UK, or Ireland visa?',
      'If YES: go to evisa.gov.tr and start the e-Visa application online',
      'If NO: contact HasbeRabbi Travels to apply for Sticker Visa through Turkish Embassy',
      'For e-Visa: upload passport, copy of supporting visa, and pay fee online',
      'Receive e-Visa by email within 1–3 working days',
      'For Sticker Visa: submit full document set at authorized center and wait for processing',
      'Print e-Visa or carry it digitally — show at immigration on arrival in Turkey',
    ],
    approvalTips: [
      'For e-Visa: ensure your supporting visa (Schengen/US/UK) is valid at time of Turkey travel — not expired',
      'Double-check all passport details match application form exactly — no typos',
      'Book refundable tickets before applying — easier to cancel if visa is delayed',
      'Travel insurance covering Turkey is strongly recommended',
      'Apply for e-Visa at least 1 week before travel to allow for any delays',
      'For Sticker Visa route: prepare strong bank statements and clear purpose of visit letter',
    ],
    whoShouldNotApply: [
      'Pakistani passport holders trying to apply for e-Visa without a valid Schengen, US, UK, or Ireland visa',
      'Applicants with previous Turkey overstay record',
      'Those whose passport has less than 60 days validity beyond planned stay',
    ],
    notes: [
      'Turkey e-Visa is applied online through the official portal at www.evisa.gov.tr.',
      'e-Visa is issued for tourist and business purposes only.',
      'Our team will guide you through the complete process — from eligibility check to final submission.',
    ],
    disclaimer: 'This information is provided for general guidance only. Final visa requirements depend on official Turkish government rules. We do not guarantee visa approval.',
    faqs: [
      { q: 'Can Pakistani passport holders get Turkey e-Visa?', a: 'Pakistani passport holders can get Turkey e-Visa only if they hold a valid Schengen, USA, UK, or Ireland visa or residence permit. Without this, they must apply for a Sticker Tourist Visa through the Turkish Embassy.' },
      { q: 'What is the Turkey visa fee for Pakistani applicants in 2025?', a: 'Turkey e-Visa costs approximately PKR 15,000 to 25,000. The Sticker Tourist Visa through the embassy route costs approximately PKR 22,000 to 35,000, plus our service charges.' },
      { q: 'How long does Turkey visa processing take from Pakistan?', a: 'Turkey e-Visa processing takes 1 to 3 working days (often within 24–72 hours). Sticker visa through the embassy may take longer.' },
      { q: 'Why is Turkey e-Visa rejected for Pakistani applicants?', a: 'Most common reasons are not meeting e-Visa eligibility (no Schengen/US/UK visa), expired supporting visa, passport validity issue, or incorrect personal details in the application.' },
      { q: 'Can I apply for Turkey visa without Schengen visa?', a: 'Yes, but you must apply for a Sticker Tourist Visa through the Turkish Embassy in Islamabad or an authorized visa center — not the e-Visa portal.' },
      { q: 'How long can I stay in Turkey on tourist visa from Pakistan?', a: 'Turkish tourist visas for Pakistani nationals typically allow stays of 30 to 90 days depending on the visa type approved.' },
      { q: 'Where to apply for Turkey Sticker Visa from Pakistan?', a: 'Sticker Tourist Visa applications can be submitted at the Turkish Embassy in Islamabad or through authorized visa application centers. HasbeRabbi Travels provides full assistance.' },
      { q: 'Do I need travel insurance for Turkey visa from Pakistan?', a: 'Travel insurance is strongly recommended for Turkey. For the Sticker Visa route some embassies may require it as part of the application.' },
    ],
    whatsappMsg: 'I need help with Turkey visa',
    seoTitle: 'Turkey Visa from Pakistan 2025 – e-Visa Eligibility, Rejection Reasons & Process',
    seoDescription: 'Complete guide to Turkey e-Visa and Sticker Tourist Visa for Pakistani nationals. Eligibility check, documents, fee, rejection reasons and approval tips. HasbeRabbi Travels Karachi.',
  },

  'canada': {
    name: 'Canada',
    flag: '🇨🇦',
    types: ['Visitor Visa (TRV)', 'Student Visa', 'Work Permit', 'PR Application'],
    fee: 'PKR 50,000 – 90,000',
    processing: '6–12 weeks (varies by case)',
    validity: 'Usually 1–5 years multiple entry (up to 10 years or passport expiry)',
    ogImage: 'https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?w=1200',
    schemaKeywords: ['Canada visa Pakistan', 'Canada visitor visa TRV', 'Canada student visa Pakistan', 'Canada PR Pakistan'],
    introParagraph: `Pakistani nationals can apply for a Canada Visitor Visa (Temporary Resident Visa / TRV) for tourism, family visits, or business. The application is submitted online through the IRCC portal and biometrics enrollment at VFS Global is mandatory. Processing times range from 6 to 12 weeks and can vary. Applicants should apply at least 3 months before their intended travel date. A strong file demonstrating financial stability and ties to Pakistan is essential. HasbeRabbi Travels provides consultation and document preparation support for Canada visa applicants.`,
    documents: [
      'Valid passport + all previous passports',
      '2 passport size photos (IRCC specifications: 35mm x 45mm)',
      'CNIC copy (front and back)',
      'Bank statements (last 6 months with strong balance)',
      'Proof of assets in Pakistan (property documents, etc.)',
      'Employment letter / NOC with salary details',
      'Income tax returns (last 2–3 years)',
      'Detailed travel itinerary / purpose of visit',
      'Confirmed return flight booking (recommended)',
      'Hotel booking or invitation letter from Canadian host',
      'Previous travel history / visas (if any)',
      'Biometrics enrollment at VFS Global (mandatory)',
    ],
    rejectionReasons: [
      'Insufficient funds — bank balance not convincing enough for the trip and return',
      'Weak ties to Pakistan — no stable job, no property, no strong family responsibility',
      'Inconsistent documents — tax returns do not match bank statements or employment letter',
      'No clear purpose of visit or vague travel itinerary',
      'Previous refusal of Canada or US visa without improvement in application profile',
      'Sponsor in Canada cannot provide sufficient proof of their status or relationship',
      'Criminal record or security concerns',
      'Applicant appears to have immigration intent rather than temporary visit intent',
    ],
    applySteps: [
      'Create an account on the IRCC portal at ircc.canada.ca',
      'Complete the online visa application forms carefully — answer all questions honestly',
      'Upload all required documents — bank statements, employment letter, tax returns, travel itinerary',
      'Pay the visa fee (CAD 100) and biometrics fee (CAD 85) online',
      'Book VFS Global biometrics appointment in Karachi, Lahore, or Islamabad',
      'Attend biometrics appointment and submit any required documents',
      'Wait 6–12 weeks for processing — check IRCC website for current processing times',
      'If approved, receive Visa Approval Letter — passport stamp is given at Canadian port of entry',
    ],
    approvalTips: [
      'Bank statement is the most important document — show 6 months of consistent healthy balance',
      'Tax returns for 2–3 years should match your stated income — any inconsistency causes rejection',
      'Write a clear purpose of visit letter — who you are visiting, what you will do, when you return',
      'If visiting family in Canada, ask them to provide PR or citizenship proof, bank statement, and formal invitation',
      'Strong previous travel history (UAE, UK, Schengen) improves your profile significantly',
      'Apply at least 3 months before planned travel — processing times can exceed 12 weeks',
      'Never book non-refundable flights before visa approval',
    ],
    whoShouldNotApply: [
      'Applicants with no stable income, employment, or assets in Pakistan',
      'Those with a previous Canada or US visa refusal who have not meaningfully improved their profile',
      'Applicants whose sponsor in Canada cannot provide proper documentation',
      'Those with criminal records or immigration violations in any country',
    ],
    notes: [
      'Canada Visitor Visa (TRV) applications are submitted online through the IRCC portal.',
      'Biometrics are mandatory for almost all Pakistani applicants at VFS Global.',
      'Processing times vary greatly — check current times on the IRCC website before applying.',
      'Our team helps with document preparation and consultation only. We do not guarantee visa approval.',
    ],
    faqs: [
      { q: 'How can Pakistani nationals apply for a Canada visitor visa?', a: 'Pakistani nationals apply online through the IRCC portal at ircc.canada.ca and then submit biometrics at VFS Global offices in Karachi, Lahore, or Islamabad.' },
      { q: 'What is the Canada visa fee for Pakistani applicants in 2025?', a: 'The Canada visitor visa fee is CAD 100 (approximately PKR 20,000), plus biometrics fee of CAD 85. Total cost including our service ranges from PKR 50,000 to 90,000.' },
      { q: 'How long does Canada visa processing take from Pakistan?', a: 'Canada visitor visa processing currently takes 6 to 12 weeks on average. Check the official IRCC website for current processing times before applying.' },
      { q: 'Why is Canada visa rejected for Pakistani applicants?', a: 'Common reasons are insufficient funds, weak ties to Pakistan, inconsistent documents, no clear purpose of visit, and previous visa refusal without improvement.' },
      { q: 'What bank balance is needed for Canada visa from Pakistan?', a: 'There is no fixed minimum, but you should show 6 months of strong and consistent bank statements demonstrating financial stability and ability to fund the trip.' },
      { q: 'Is biometrics required for Canada visa from Pakistan?', a: 'Yes. Biometrics (fingerprints and photo) are mandatory for almost all Pakistani applicants and must be submitted at a VFS Global office in Pakistan.' },
      { q: 'Can I apply for Canada visa from Karachi?', a: 'Yes. The online application is completed from anywhere. Biometrics are submitted at the VFS Global office in Karachi.' },
      { q: 'How many years of bank statement and tax returns are required for Canada visa?', a: 'You need bank statements for the last 6 months, and income tax returns for the last 2 to 3 years as part of the Canada visitor visa application.' },
    ],
    whatsappMsg: 'I need help with Canada visa',
    seoTitle: 'Canada Visa from Pakistan 2025 – TRV Requirements, Rejection Reasons & Tips',
    seoDescription: 'Complete guide to Canada Visitor Visa (TRV) for Pakistani nationals. Documents, fee PKR 50,000–90,000, biometrics, rejection reasons, step-by-step process. HasbeRabbi Travels.',
  },

  'australia': {
    name: 'Australia',
    flag: '🇦🇺',
    types: ['Tourist Visa (Subclass 600)', 'Student Visa', 'Work Visa', 'Business Visa'],
    fee: 'PKR 50,000 – 85,000',
    processing: '4–8 weeks (can be longer in complex cases)',
    validity: 'Usually 3–12 months (stay duration decided by case officer)',
    ogImage: 'https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?w=1200',
    schemaKeywords: ['Australia visa Pakistan', 'Australia tourist visa subclass 600', 'Australia student visa Pakistan', 'Australia work visa'],
    introParagraph: `Pakistani nationals can apply for an Australia Tourist Visa (Subclass 600) for tourism or family visits. Applications are submitted online through the ImmiAccount portal and biometrics are required at VFS Global. Processing typically takes 4 to 8 weeks — apply at least 2 to 3 months before your travel date. Applicants must demonstrate strong ties to Pakistan to show genuine intention to return. A medical examination may also be required. HasbeRabbi Travels provides professional document preparation and consultation for Australian visa applicants.`,
    documents: [
      'Valid passport (minimum 6 months validity from date of travel)',
      'Recent passport size photos (35mm x 45mm, white background)',
      'CNIC copy (front and back)',
      'Bank statements (last 6 months with sufficient funds)',
      'Proof of assets in Pakistan (property documents, etc.)',
      'Employment letter / NOC with salary slips',
      'Income tax returns (last 2–3 years)',
      'Detailed travel itinerary and purpose of visit',
      'Confirmed return flight booking',
      'Hotel booking or sponsor invitation letter',
      'Health / travel insurance coverage',
      'Medical examination results (if required)',
      'Biometrics at VFS Global (mandatory)',
    ],
    rejectionReasons: [
      'Insufficient financial evidence — bank balance not convincing for the intended stay',
      'Weak ties to Pakistan — no stable job, no property, no compelling reason to return',
      'Inconsistency between documents — employment letter salary does not match bank credits',
      'No clear travel itinerary or vague purpose of visit',
      'Failed medical examination',
      'Previous Australian visa refusal without addressing the rejection reasons',
      'Criminal record or security concerns',
      'Sponsor in Australia cannot provide sufficient proof of relationship or residency status',
    ],
    applySteps: [
      'Create an ImmiAccount at immi.homeaffairs.gov.au',
      'Lodge Tourist Visa (Subclass 600) application online — fill all sections carefully',
      'Upload all documents — passport, bank statements, employment letter, tax returns, itinerary',
      'Pay the visa application fee (AUD 190)',
      'Book VFS Global biometrics appointment in Karachi, Lahore, or Islamabad',
      'Attend biometrics appointment and submit supporting documents',
      'Complete medical examination if requested by case officer',
      'Wait 4–8 weeks for a decision',
      'Receive visa grant notice by email if approved',
    ],
    approvalTips: [
      'Ties to Pakistan are the most critical factor — job, property, and family responsibility must be documented clearly',
      'Employment letter should state your position, salary, length of service, and that leave has been approved',
      'Bank statement should show 6 months of consistent deposits matching your stated salary',
      'If visiting family in Australia, ask them to provide their visa or PR copy and a formal invitation letter with their documents',
      'Previous travel history to UAE, UK, or Schengen strengthens your profile',
      'Apply at least 2 to 3 months before your travel date — do not leave it last minute',
      'Never book non-refundable flights before visa approval',
    ],
    whoShouldNotApply: [
      'Applicants with no stable employment, income, or assets in Pakistan',
      'Those with a previous Australia visa refusal who have not improved their profile',
      'Applicants with criminal records or security concerns',
      'Those who cannot pass the required medical examination if requested',
    ],
    notes: [
      'Australia visa applications are submitted online through ImmiAccount at immi.homeaffairs.gov.au.',
      'Biometrics and sometimes medical examination are required.',
      'Apply at least 2 to 3 months before travel.',
      'Our team provides consultation and document preparation support only. We do not guarantee visa approval.',
    ],
    faqs: [
      { q: 'How do Pakistani nationals apply for an Australia tourist visa?', a: 'Pakistani nationals apply for Australia Tourist Visa (Subclass 600) online through ImmiAccount at immi.homeaffairs.gov.au, then submit biometrics at VFS Global in Pakistan.' },
      { q: 'What is the Australia visa fee for Pakistani applicants in 2025?', a: 'The Australia tourist visa (Subclass 600) fee is AUD 190. Total cost including biometrics, VFS charges, and our service ranges from PKR 50,000 to 85,000.' },
      { q: 'How long does Australia visa processing take from Pakistan?', a: 'Australia visa processing typically takes 4 to 8 weeks. Apply at least 2 to 3 months before your intended travel date.' },
      { q: 'Why is Australia visa rejected for Pakistani applicants?', a: 'Common reasons are weak ties to Pakistan, insufficient funds, inconsistent documents, unclear purpose of visit, failed medical examination, and previous refusal without improvement.' },
      { q: 'Is medical examination required for Australia visa from Pakistan?', a: 'A medical examination may be required depending on your intended stay and other factors. The case officer will request it during processing if needed.' },
      { q: 'What documents show ties to Pakistan for Australia visa?', a: 'Employment letter with salary slips, property ownership documents, income tax returns, business registration, and family details all demonstrate strong ties to Pakistan.' },
      { q: 'Can I apply for Australia visa from Karachi?', a: 'Yes. The online application is lodged from anywhere. Biometrics are submitted at VFS Global Karachi. HasbeRabbi Travels in Karachi provides complete assistance.' },
      { q: 'How much bank balance is required for Australia visa from Pakistan?', a: 'There is no fixed minimum, but 6 months of consistent bank statements showing stable income and sufficient funds for your trip are required.' },
    ],
    whatsappMsg: 'I need help with Australia visa',
    seoTitle: 'Australia Visa from Pakistan 2025 – Subclass 600 Requirements, Rejection Reasons & Tips',
    seoDescription: 'Complete guide to Australia Tourist Visa (Subclass 600) for Pakistani nationals. Documents, fee PKR 50,000–85,000, biometrics, rejection reasons, approval tips. HasbeRabbi Travels.',
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

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country: slug } = await params;
  const data = countriesData[slug];
  if (!data) return {};
  return {
    title: data.seoTitle,
    description: data.seoDescription,
    keywords: data.schemaKeywords,
    alternates: { canonical: `https://hasberabbi.com/visa-services/${slug}` },
    openGraph: {
      title: data.seoTitle,
      description: data.seoDescription,
      url: `https://hasberabbi.com/visa-services/${slug}`,
      siteName: 'HasbeRabbi Travels',
      images: data.ogImage ? [{ url: data.ogImage, width: 1200, height: 630 }] : [],
      locale: 'en_PK',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: data.seoTitle,
      description: data.seoDescription,
      images: data.ogImage ? [data.ogImage] : [],
    },
  };
}

export default async function CountryVisaPage({ params }: { params: Promise<{ country: string }> }) {
  const { country: slug } = await params;
  const country = countriesData[slug];
  if (!country) notFound();

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `https://hasberabbi.com/visa-services/${slug}/#service`,
        name: `${country.name} Visa from Pakistan`,
        provider: {
          '@type': 'LocalBusiness',
          name: 'HasbeRabbi Visa & Travel Services',
          url: 'https://hasberabbi.com',
          telephone: '+923313954965',
          address: { '@type': 'PostalAddress', addressLocality: 'Karachi', addressCountry: 'PK' },
        },
        description: country.seoDescription,
        offers: { '@type': 'Offer', price: country.fee, priceCurrency: 'PKR' },
        areaServed: { '@type': 'Country', name: 'Pakistan' },
        keywords: country.schemaKeywords?.join(', '),
      },
      {
        '@type': 'FAQPage',
        mainEntity: country.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hasberabbi.com' },
          { '@type': 'ListItem', position: 2, name: 'Visa Services', item: 'https://hasberabbi.com/visa-services' },
          { '@type': 'ListItem', position: 3, name: `${country.name} Visa`, item: `https://hasberabbi.com/visa-services/${slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      {/* Hero */}
      <section className="relative text-white py-24" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${country.ogImage?.replace('w=1200', 'w=1600') ?? 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?w=1600'})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div className="container mx-auto px-4">
          <nav aria-label="Breadcrumb" className="text-sm text-white/60 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span aria-hidden="true">›</span>
            <Link href="/visa-services" className="hover:text-white transition">Visa Services</Link>
            <span aria-hidden="true">›</span>
            <span className="text-white" aria-current="page">{country.name} Visa</span>
          </nav>
          <div className="flex items-center gap-4 md:gap-6">
            <span className="text-5xl md:text-7xl" role="img" aria-label={`${country.name} flag`}>{country.flag}</span>
            <div>
              <h1 className="text-2xl md:text-5xl font-extrabold mb-3">{country.name} Visa from Pakistan</h1>
              <div className="flex flex-wrap gap-2">
                {country.types.map((type) => (
                  <span key={type} className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">{type}</span>
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
                      <span className="text-primary mt-0.5 flex-shrink-0">•</span><span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {country.feeNote && <p className="mt-3 text-xs text-gray-400 italic border-t border-gray-100 pt-2">{country.feeNote}</p>}
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

      {/* Intro */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-extrabold text-primary-dark mb-4">{country.name} Visa for Pakistani Nationals — Overview</h2>
          <p className="text-gray-700 leading-relaxed text-base">{country.introParagraph}</p>
        </div>
      </section>

      {/* Eligibility Note */}
      {country.eligibilityNote && (
        <section className="py-8 bg-yellow-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="border-l-4 border-yellow-400 bg-white rounded-r-2xl p-6 shadow-sm">
              <h2 className="text-lg font-extrabold text-yellow-700 mb-2">⚠️ Important Eligibility Information for Pakistani Passport Holders</h2>
              <p className="text-gray-700 leading-relaxed text-sm">{country.eligibilityNote}</p>
            </div>
          </div>
        </section>
      )}

      {/* Documents + Notes + CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-extrabold text-primary-dark mb-6">{country.name} Visa — Required Documents for Pakistani Applicants</h2>
              <ul className="space-y-3">
                {country.documents.map((doc, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="text-green-500 font-bold mt-0.5 flex-shrink-0">✓</span><span>{doc}</span>
                  </li>
                ))}
              </ul>
              {country.extraDocuments && (
                <div className="mt-6 pt-5 border-t-2 border-dashed border-gray-200">
                  <h3 className="font-extrabold text-primary-dark mb-3 text-sm uppercase tracking-wide">{country.extraDocuments.heading}</h3>
                  <ul className="space-y-2">
                    {country.extraDocuments.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <span className="text-yellow-500 font-bold mt-0.5 flex-shrink-0">★</span><span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-6">
              <div className="bg-accent/10 border-l-4 border-accent rounded-r-2xl p-6">
                <h2 className="text-xl font-extrabold text-primary-dark mb-4">Important Notes — {country.name} Visa Application</h2>
                <ul className="space-y-3">
                  {country.notes.map((note, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                      <span className="text-primary font-bold mt-0.5 flex-shrink-0">→</span><span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {country.disclaimer && (
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <p className="text-xs text-gray-500 italic"><span className="font-bold text-gray-600">Disclaimer: </span>{country.disclaimer}</p>
                </div>
              )}
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-md">
                <h3 className="font-extrabold text-gray-800 mb-2 text-lg">Get Free Consultation</h3>
                <p className="text-gray-600 text-sm mb-5">Our team will guide you through the entire {country.name} visa process — from document checking to final submission.</p>
                <a href={`https://wa.me/923313954965?text=${encodeURIComponent(country.whatsappMsg)}`} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition-all">
                  <WhatsAppIcon /><span className="truncate">Apply — {country.name} Visa</span>
                </a>
                <a href="tel:+923313954965"
                  className="flex items-center justify-center gap-2 w-full mt-3 border-2 border-primary text-primary py-4 rounded-xl font-bold hover:bg-primary hover:text-white transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0" aria-hidden="true">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span className="whitespace-nowrap">+92 331 3954965</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Rejection Reasons + Apply Steps + Approval Tips + Who Should Not Apply */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-extrabold text-primary-dark mb-10 text-center">
            {country.name} Visa — Full Guide for Pakistani Applicants
          </h2>
          <div className="grid md:grid-cols-2 gap-8">

            {/* Rejection Reasons */}
            <div className="bg-white rounded-2xl p-6 border-2 border-red-100 shadow-sm">
              <h3 className="text-lg font-extrabold text-red-700 mb-4">❌ Common Rejection Reasons</h3>
              <ul className="space-y-3">
                {country.rejectionReasons.map((reason, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-red-400 font-bold mt-0.5 flex-shrink-0">•</span><span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step by Step */}
            <div className="bg-white rounded-2xl p-6 border-2 border-blue-100 shadow-sm">
              <h3 className="text-lg font-extrabold text-blue-700 mb-4">📋 How to Apply — Step by Step</h3>
              <ol className="space-y-3">
                {country.applySteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                    <span className="bg-blue-100 text-blue-700 font-extrabold text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Approval Tips */}
            <div className="bg-white rounded-2xl p-6 border-2 border-green-100 shadow-sm">
              <h3 className="text-lg font-extrabold text-green-700 mb-4">✅ Approval Tips</h3>
              <ul className="space-y-3">
                {country.approvalTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-green-500 font-bold mt-0.5 flex-shrink-0">✓</span><span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who Should Not Apply */}
            <div className="bg-white rounded-2xl p-6 border-2 border-orange-100 shadow-sm">
              <h3 className="text-lg font-extrabold text-orange-700 mb-4">⚠️ Who Should Not Apply</h3>
              <ul className="space-y-3">
                {country.whoShouldNotApply.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-orange-400 font-bold mt-0.5 flex-shrink-0">•</span><span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-extrabold text-primary-dark mb-8 text-center">
            Frequently Asked Questions — {country.name} Visa from Pakistan
          </h2>
          <div className="space-y-4">
            {country.faqs.map((faq, i) => (
              <details key={i} className="bg-gray-50 border-2 border-gray-100 rounded-2xl shadow-sm group">
                <summary className="flex justify-between items-center px-6 py-5 cursor-pointer font-semibold text-gray-800 text-sm md:text-base list-none">
                  <span>{faq.q}</span>
                  <span className="text-primary text-xl ml-4 flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-200 pt-4">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other Countries */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-primary-dark mb-8 text-center">Explore Other Visa Services</h2>
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
                <Link key={c.slug} href={`/visa-services/${c.slug}`}
                  className="flex items-center gap-2 bg-white border-2 border-gray-200 hover:border-primary hover:text-primary px-5 py-3 rounded-full font-semibold text-gray-700 transition-all shadow-sm"
                  aria-label={`${c.name} visa requirements for Pakistani nationals`}>
                  <span role="img" aria-label={`${c.name} flag`}>{c.flag}</span>
                  <span>{c.name}</span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}