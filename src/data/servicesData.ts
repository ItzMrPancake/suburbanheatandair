export interface ServiceDetail {
  id: string;
  title: string;
  shortDescription: string;
  tagline: string;
  image: string;
  bullets: string[];
  features: { title: string; desc: string }[];
  highlight: string;
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'air-conditioning',
    title: 'Air Conditioning Installation & Repair',
    tagline: 'Carrier® Factory Authorized Cooling Solutions Built for the Texas Heat',
    shortDescription: 'From high-efficiency multi-stage Carrier systems and mini-splits to custom wine cellar refrigeration and chilled water systems, Suburban keeps Dallas cool since 1967.',
    image: '/src/assets/images/carrier_ac_system_1791385474174.jpg',
    bullets: [
      'Carrier Factory Authorized Dealer installations with factory-backed warranties',
      '24/7 emergency AC repair with fully stocked service trucks',
      'High-efficiency inverter & multi-stage condenser systems',
      'Ductless mini-split systems for additions, garages & zoned cooling',
      'Specialized wine room & luxury wine cellar climate conditioning',
      'Smart thermostats, Wi-Fi remote access & zoning controls',
      'Chilled water systems for larger residential and commercial estates'
    ],
    features: [
      {
        title: 'Factory Authorized Carrier® Partner',
        desc: 'We install industry-leading Carrier Infinity, Performance, and Comfort series systems engineered for optimal SEER2 efficiency and ultra-quiet decibel levels.'
      },
      {
        title: 'First-Visit Repair Readiness',
        desc: 'Our 7 service trucks carry capacitors, contactors, motors, fan blades, TXV valves, and universal refrigerants so most repairs are resolved on the first visit.'
      },
      {
        title: 'Wine Cellar Climate Engineering',
        desc: 'Precision temperature and humidity regulation systems designed specifically to protect and age fine wine collections without vibration or moisture swings.'
      },
      {
        title: 'Chilled Water & Hydronics',
        desc: 'Advanced hydronic cooling infrastructure for expansive estates and commercial footprints requiring modular, zoned chillers.'
      }
    ],
    highlight: '24/7 Live Emergency AC Dispatch — Real humans on the phone 24 hours a day.'
  },
  {
    id: 'heating',
    title: 'Heating Repair & Installation',
    tagline: 'Reliable Winter Warmth, Heat Pumps & Precision Load Calculations',
    shortDescription: 'Comprehensive heating repair, energy-efficient Carrier heat pumps, furnace replacements, and precision heat load engineering to keep your family warm when winter snaps strike.',
    image: '/src/assets/images/hero_suburban_technician_1791385459299.jpg',
    bullets: [
      'Energy-efficient Carrier® heat pumps & high-efficiency gas furnaces',
      'Precision Manual J & D heat load calculations (never guess unit sizing)',
      '24/7 emergency furnace & heating diagnostics',
      'Duct heating, heat strips & secondary electric backup systems',
      'Custom sheet metal duct transitions fabricated in our Dallas shop',
      'Heat exchanger inspection & carbon monoxide safety checks',
      'Preventive heating maintenance & seasonal tune-ups'
    ],
    features: [
      {
        title: 'Scientific Heat Load Calculations',
        desc: 'We never guess sizing. Our sales and design team performs thorough manual heat load calculations taking square footage, insulation, windows, and orientation into account.'
      },
      {
        title: 'Advanced Heat Pump Technology',
        desc: 'Modern dual-fuel and cold-climate heat pump systems that transfer heat with maximum seasonal efficiency, reducing electrical consumption during chilly winter snaps.'
      },
      {
        title: 'Same-Day Winter Repair',
        desc: 'Our 8 service technicians are on call 24/7 with diagnostic instruments and replacement parts ready to resolve ignition lockouts, bad blowers, and safety switches.'
      },
      {
        title: 'Ductwork Re-engineering',
        desc: 'We eliminate cold spots and static air pressure imbalances by designing and crafting proper plenum transitions in our in-house sheet metal shop.'
      }
    ],
    highlight: 'State License #TACLA17853E — Fully licensed, insured, and A+ BBB accredited.'
  },
  {
    id: 'geothermal',
    title: 'Geothermal HVAC Systems',
    tagline: 'Earth-Coupled Renewable Heating & Cooling with Maximum Energy Efficiency',
    shortDescription: 'Harness the steady underground temperature of the Earth for ultra-efficient, environmentally friendly heating and cooling with whisper-quiet indoor units and immense utility savings.',
    image: '/src/assets/images/carrier_ac_system_1791385474174.jpg',
    bullets: [
      'Closed-loop and open-loop ground-source geothermal heat pumps',
      'Up to 70% reduction in heating and cooling energy expenditures',
      'Exceptional system longevity: 20-25 year indoor units, 50+ year ground loops',
      'Zero outdoor equipment noise or unsightly condenser rust',
      'Significant federal clean energy tax credits and utility rebates',
      'Specialized geothermal diagnostics, loop flushing & maintenance'
    ],
    features: [
      {
        title: 'Unmatched Thermal Efficiency',
        desc: 'Geothermal systems exchange thermal energy with the stable 60-70°F underground temperature instead of fluctuating outside air, delivering unparalleled COP and EER ratings.'
      },
      {
        title: 'Decades of Geothermal Field Experience',
        desc: 'Suburban has designed and serviced geothermal installations across the Dallas area for decades, possessing the hydraulic and thermodynamic mastery required.'
      },
      {
        title: 'Clean, Quiet & Rust-Free',
        desc: 'With no outdoor fan motor or coils exposed to hail, rain, and debris, geothermal units provide whisper-quiet operation and extreme architectural elegance.'
      },
      {
        title: 'Federal Tax Credits',
        desc: 'Qualifies for 30% Residential Clean Energy federal tax credits, drastically reducing upfront capital investment.'
      }
    ],
    highlight: 'Over 58 Years of Specialized HVAC Engineering in the Greater Dallas Metroplex.'
  },
  {
    id: 'metal-shop',
    title: 'In-House Sheet Metal Fabrication Shop',
    tagline: 'Custom Ductwork Built in Dallas with 16+ Years Fabricator Mastery',
    shortDescription: 'Unlike most HVAC companies that wait weeks for third-party duct orders, Suburban operates its own complete sheet metal fabrication shop on Peachtree Street, crafting custom duct orders in-house.',
    image: '/src/assets/images/sheet_metal_fabrication_1791385488338.jpg',
    bullets: [
      'Headed by our lead metal fabricator with over 16 years of specialized craftsmanship',
      'Zero delays: custom plenums, transitions, and fittings built on-site',
      'Superior static pressure optimization and leak-free airtight seams',
      'Custom architectural return air boxes and acoustic dampening',
      'Precision fit for historic Dallas homes and complex commercial footprints',
      'Heavy-gauge galvanized steel and custom aluminum fabrication'
    ],
    features: [
      {
        title: 'Zero Third-Party Bottlenecks',
        desc: 'When an installation encounters unexpected architectural framing or framing obstacles, our metal shop builds the exact custom duct transition immediately on Peachtree St.'
      },
      {
        title: '16+ Years Master Craftsmanship',
        desc: 'Our lead fabricator bends, shears, seams, and solders duct systems with microscopic attention to airflow dynamics, preventing whistle noise and static drag.'
      },
      {
        title: 'Enhanced Airflow & Energy Savings',
        desc: 'Properly dimensioned transitions allow Carrier blower motors to operate at intended static pressures, extending motor longevity and ensuring balanced room temperatures.'
      },
      {
        title: 'Commercial & Residential Capabilities',
        desc: 'From custom residential filter return grilles to multi-story commercial trunk lines, we fabricate all gauges to exact mechanical specifications.'
      }
    ],
    highlight: 'Our In-House Shop Eliminates Third-Party Lead Times and Guarantees Flawless Fit.'
  },
  {
    id: 'service-agreement',
    title: 'Comprehensive HVAC Service Agreement',
    tagline: 'Biannual Preventative Tune-Ups, Priority Dispatch & Warranty Preservation',
    shortDescription: 'Routine spring and fall maintenance keep your HVAC systems operating at peak efficiency, lowers energy bills, extends equipment lifespan, and gives you priority dispatch status year-round.',
    image: '/src/assets/images/hero_suburban_technician_1791385459299.jpg',
    bullets: [
      'Spring cooling tune-up & Fall heating comprehensive safety inspection',
      'Deep cleaning of outdoor condenser coils & debris removal',
      'Precision electrical connection testing, voltage & amperage measurement',
      'Operating refrigerant pressure and subcooling/superheat checks',
      'Complete start-up and shutdown cycles to verify safety controls',
      'Outdoor unit power wash & condensate drain line flushing',
      'Motor lubrication, blower assembly inspection & filter replacements',
      'Preserves original manufacturer warranty coverage and lowers monthly utility bills',
      'Priority scheduling status during peak summer heat waves and winter freezes'
    ],
    features: [
      {
        title: 'Priority 24/7 Scheduling',
        desc: 'Service Agreement members move to the front of the dispatch queue when extreme weather strikes Dallas and demand surges.'
      },
      {
        title: 'Manufacturer Warranty Compliance',
        desc: 'Most major equipment manufacturers like Carrier require documented annual maintenance to honor warranty replacement claims on compressors and heat exchangers.'
      },
      {
        title: 'Prevent Costly Mid-Season Breakdowns',
        desc: '90% of emergency HVAC failures originate from neglected dirt on coils, failing capacitors, or clogged condensate drain pans that tune-ups catch early.'
      },
      {
        title: 'Optimized Energy Consumption',
        desc: 'Clean coils and properly tuned refrigerant charges reduce electric motor load, noticeably lowering your summer electricity bills in North Texas.'
      }
    ],
    highlight: 'Biannual Spring & Fall Visits — Complete Peace of Mind for Dallas Homeowners.'
  },
  {
    id: 'commercial-hvac',
    title: 'Commercial HVAC Solutions & Rooftop Units',
    tagline: 'Plan & Spec Pricing, Mechanical Engineering & Multi-System Installations',
    shortDescription: 'Turnkey commercial HVAC solutions for retail centers, corporate offices, warehouses, and industrial facilities with in-house mechanical design and rooftop unit deployment.',
    image: '/src/assets/images/commercial_hvac_system_1791385502824.jpg',
    bullets: [
      'Packaged rooftop units (RTU) & split commercial systems',
      'Plan and spec bidding with in-house mechanical CAD design',
      'Chilled water air handling systems & commercial boiler integration',
      'Custom curbs and heavy-gauge ductwork fabricated in our Dallas metal shop',
      'Dedicated commercial maintenance contracts and emergency response',
      'Economizer controls, ventilation code compliance & indoor air quality'
    ],
    features: [
      {
        title: 'In-House Mechanical Design',
        desc: 'Our sales and design department creates detailed mechanical layouts and airflow coordination plans, ensuring clear communication between clients, engineers, and installers.'
      },
      {
        title: 'Crane & Rigging Coordination',
        desc: 'Experienced in rapid rooftop unit replacements with complete crane logistics, minimal downtime for commercial tenants, and code-compliant tie-ins.'
      },
      {
        title: 'Commercial Service Agreements',
        desc: 'Tailored quarterly and biannual preventive maintenance schedules for property managers and business owners to safeguard tenant comfort and lease agreements.'
      },
      {
        title: 'Rapid Emergency Response',
        desc: 'On-call commercial technicians ready 24/7 to safeguard server rooms, retail operations, and critical building environments.'
      }
    ],
    highlight: 'Over 5 Decades of Dallas Commercial HVAC Contracting Excellence.'
  }
];

export const SERVICE_AREAS = [
  { name: 'Dallas (Central)', desc: 'Downtown, Uptown, Oak Lawn, Lower Greenville, Bishop Arts' },
  { name: 'Lakewood & East Dallas', desc: 'White Rock Lake, Forest Hills, Hollywood/Santa Monica' },
  { name: 'Highland Park & University Park', desc: 'Park Cities premium residential estates and renovations' },
  { name: 'Preston Hollow & North Dallas', desc: 'Luxury multi-system residences and wine room installations' },
  { name: 'Lake Highlands & Richardson', desc: 'Residential Carrier replacements and ductwork upgrades' },
  { name: 'Mesquite & Sunnyvale', desc: 'Fast local dispatch from our Peachtree St. headquarters' },
  { name: 'Garland & Rowlett', desc: 'Complete residential and commercial HVAC services' },
  { name: 'Plano & Far North Dallas', desc: 'Energy-efficient Carrier Infinity heat pumps and AC systems' },
  { name: 'Rockwall & Heath', desc: 'Custom duct transitions, geothermal, and new home construction' },
];
