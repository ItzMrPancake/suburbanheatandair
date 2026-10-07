export interface ReviewItem {
  id: string;
  name: string;
  neighborhood: string;
  date: string;
  rating: number;
  serviceCategory: 'ac-replacement' | 'heating' | 'ductwork' | 'emergency' | 'maintenance' | 'commercial';
  title: string;
  text: string;
  verifiedCustomer: boolean;
  yearsWithSuburban?: string;
}

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Robert & Sarah M.',
    neighborhood: 'Lakewood, Dallas',
    date: 'February 2026',
    rating: 5,
    serviceCategory: 'ductwork',
    title: 'Rebuilt return air ductwork and complete Carrier system upgrade',
    text: 'Suburban provided a thorough bid with experienced perspectives on the appropriate Carrier systems for our older home. The team replaced all aspects of our systems and even rebuilt our return air ductwork in-house. Having their own metal shop made all the difference—the custom transitions fit like a glove. Outstanding craftsmanship and clean work.',
    verifiedCustomer: true,
    yearsWithSuburban: 'Customer since 2014'
  },
  {
    id: 'rev-2',
    name: 'Mrs. Evelyn Thornton',
    neighborhood: 'East Dallas',
    date: 'January 2026',
    rating: 5,
    serviceCategory: 'heating',
    title: 'Our family has trusted Suburban since the 1970s',
    text: 'My late husband and I first hired Don Hamilton back in 1974 when our furnace gave out in January. Now Denise, Charles and their crew continue that exact same honesty. They never push equipment you don’t need. When our heater needed a blower capacitor last month, their service tech had the part right on the truck and was done in 45 minutes.',
    verifiedCustomer: true,
    yearsWithSuburban: 'Customer since 1974'
  },
  {
    id: 'rev-3',
    name: 'Marcus Vance',
    neighborhood: 'Preston Hollow, Dallas',
    date: 'October 2025',
    rating: 5,
    serviceCategory: 'ac-replacement',
    title: 'Precision multi-zone Carrier installation with wine cellar cooling',
    text: 'We had complex requirements for a multi-zone Carrier Infinity system plus a dedicated wine cellar climate control system. Most HVAC contractors in Dallas looked confused or proposed sloppy workarounds. Suburban’s design department handled the heat load calculations in-house and executed the installation flawlessly. Extremely neat conduit runs and whisper-quiet operation.',
    verifiedCustomer: true,
    yearsWithSuburban: 'Customer since 2018'
  },
  {
    id: 'rev-4',
    name: 'David G. Sterling',
    neighborhood: 'Highland Park, TX',
    date: 'August 2025',
    rating: 5,
    serviceCategory: 'emergency',
    title: 'Saved us during 105° August heat wave at 9:30 PM',
    text: 'AC died on a Sunday evening with house guests visiting. Called Suburban’s 24-hour line expecting an answering machine, but an actual courteous human answered the phone! Technician arrived within 80 minutes with a fully equipped truck, diagnosed a fried dual run capacitor and fan motor, replaced them on the spot, and our home was cool by midnight. Cannot thank them enough.',
    verifiedCustomer: true,
    yearsWithSuburban: 'First-time emergency call, now customer for life'
  },
  {
    id: 'rev-5',
    name: 'Greg Holcomb',
    neighborhood: 'Mesquite, TX',
    date: 'July 2025',
    rating: 5,
    serviceCategory: 'ac-replacement',
    title: 'Honest technicians who don’t try to sell you what you don’t need',
    text: 'Another large Dallas company told me my 12-year-old system was totally dead and tried to pressure me into a $14,000 financing contract on the spot. I called Suburban for a second opinion. Their tech discovered a simple contactor short, repaired it for a few hundred dollars, and said the compressor still has several years of life left. That level of integrity is rare.',
    verifiedCustomer: true,
    yearsWithSuburban: 'Customer since 2021'
  },
  {
    id: 'rev-6',
    name: 'Patricia & Daniel K.',
    neighborhood: 'University Park, Dallas',
    date: 'May 2025',
    rating: 5,
    serviceCategory: 'maintenance',
    title: 'Service Agreement gives complete peace of mind',
    text: 'We have been on their seasonal maintenance agreement for 6 years. Every spring and fall they inspect both units, wash the condenser coils, check the refrigerant levels, flush condensate lines, and test the heat exchanger. We haven’t had a single surprise breakdown since signing up.',
    verifiedCustomer: true,
    yearsWithSuburban: 'Customer since 2019'
  },
  {
    id: 'rev-7',
    name: 'Tom W. - Operations Director',
    neighborhood: 'Dallas Design District',
    date: 'March 2025',
    rating: 5,
    serviceCategory: 'commercial',
    title: 'Commercial rooftop units and custom sheet metal fabrication',
    text: 'Managing a 28,000 sq ft commercial facility requires contractors who show up on schedule and do it right the first time. Suburban’s commercial division installed two 15-ton rooftop Carrier package units. Because they fabricate all their own ductwork on Peachtree Street, custom curb transitions were made in 24 hours without delay.',
    verifiedCustomer: true,
    yearsWithSuburban: 'Commercial client since 2012'
  },
  {
    id: 'rev-8',
    name: 'Katherine Bryan',
    neighborhood: 'Lake Highlands, Dallas',
    date: 'November 2024',
    rating: 5,
    serviceCategory: 'heating',
    title: 'Geothermal heating expertise you cannot find anywhere else',
    text: 'When we renovated our home with a closed-loop geothermal heat pump system, Suburban Heating & Air was one of the few contractors in North Texas with genuine certified geothermal knowledge. They understand ground loop hydraulics and heat transfer inside out.',
    verifiedCustomer: true,
    yearsWithSuburban: 'Customer since 2016'
  },
  {
    id: 'rev-9',
    name: 'Arthur P. Jenkins',
    neighborhood: 'White Rock Lake area, Dallas',
    date: 'August 2024',
    rating: 5,
    serviceCategory: 'emergency',
    title: 'We literally leave them the house key when we are out of town',
    text: 'When you find a contractor you can trust completely, you hold on to them. We travel frequently in the summer and had an AC condensation overflow alert while in Colorado. Suburban sent a technician out that afternoon, resolved the drain line blockage, and locked up safely. You simply cannot buy that peace of mind.',
    verifiedCustomer: true,
    yearsWithSuburban: 'Customer since 1998'
  }
];

export const REVIEW_CATEGORIES = [
  { id: 'all', label: 'All Reviews' },
  { id: 'ac-replacement', label: 'AC & Carrier Installs' },
  { id: 'heating', label: 'Heating & Heat Pumps' },
  { id: 'ductwork', label: 'Custom Ductwork' },
  { id: 'emergency', label: '24/7 Emergency Repairs' },
  { id: 'maintenance', label: 'Service Agreements' },
  { id: 'commercial', label: 'Commercial HVAC' },
] as const;
