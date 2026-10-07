import React, { useState } from 'react';
import { Award, Clock, ShieldCheck, HeartHandshake, Building2, Home, CheckCircle2, XCircle, ArrowRight, Phone } from 'lucide-react';

interface WhyChooseUsProps {
  onRequestEstimate: () => void;
  onExploreServices: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  onRequestEstimate,
  onExploreServices,
}) => {
  const [activeClientType, setActiveClientType] = useState<'residential' | 'commercial'>('residential');

  const corePillars = [
    {
      title: '50+ Years of Dallas Heritage',
      subtitle: 'Founded in 1967 by Don Hamilton',
      desc: 'Over 58 years of continuous service under the Hamilton family legacy. We know North Texas heat waves and sudden freezes because we’ve kept Dallas comfortable across six decades.',
      icon: HeartHandshake,
      badge: 'Est. 1967'
    },
    {
      title: 'Carrier® Factory Authorized',
      subtitle: 'Elite Dealer Recognition',
      desc: 'Suburban has earned Carrier Factory Authorized Dealer distinction. Our technicians undergo strict factory training, offering top-tier Carrier warranties and precision installations.',
      icon: Award,
      badge: 'Factory Backed'
    },
    {
      title: '24/7 Live Emergency Service',
      subtitle: 'Real Humans Answering All Hours',
      desc: 'Our 7 service trucks and 8 experienced technicians are on-call 24 hours a day, 7 days a week. When an HVAC failure strikes, you talk to an actual person, never a pre-recorded machine.',
      icon: Clock,
      badge: '24/7/365 On-Call'
    },
    {
      title: 'BBB A+ Rated & Accredited',
      subtitle: 'Highest Ethical Business Standard',
      desc: 'We are proud of our pristine A+ rating with the Better Business Bureau. We quote honestly, never oversell equipment you don’t need, and stand behind every single repair.',
      icon: ShieldCheck,
      badge: 'A+ BBB'
    },
  ];

  const comparisonData = [
    {
      feature: 'Emergency Response Contact',
      suburban: 'Live local human dispatcher answers 24/7/365',
      others: 'Voicemail loop, call center, or next-day callback',
    },
    {
      feature: 'Custom Sheet Metal & Ductwork',
      suburban: 'Built in-house in Dallas by our 16+ yr lead fabricator',
      others: 'Ordered from 3rd parties with 2-3 week delays',
    },
    {
      feature: 'Technician Motivation',
      suburban: 'Salaried craftsmen focused on repairing and solving issues',
      others: 'High-commission salesmen pushing costly replacements',
    },
    {
      feature: 'Equipment Authorization',
      suburban: 'Carrier® Factory Authorized with full factory warranty',
      others: 'Standard uncertified resellers with limited warranties',
    },
    {
      feature: 'Local Track Record',
      suburban: 'Serving Dallas continuously since 1967 (58+ years)',
      others: 'Franchise operators or recently rebranded entities',
    },
    {
      feature: 'Workplace Cleanliness & Courtesy',
      suburban: 'Protective shoe coverings, floor tarps, spotless cleanup',
      others: 'Inconsistent cleanup, rushed departure',
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600">The Suburban Difference</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1 font-display">
            Why North Texas Chooses Suburban Heating & Air
          </h2>
          <p className="text-slate-600 mt-3 text-base leading-relaxed">
            Since 1967, our small, customer-oriented team of about 50 employees has prioritized honesty, prompt arrival, and true craftsmanship over high-pressure sales. Here is what sets us apart for homeowners and commercial property managers alike.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {corePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-sky-800 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-sky-700 mt-0.5 mb-2">
                    {pillar.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Client Type Deep-Dive: Residential vs Commercial */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 mb-16 border border-slate-800 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-8">
            <div>
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">Tailored Solutions</span>
              <h3 className="text-2xl font-bold text-white font-display mt-0.5">
                Commitment to Prompt, Courteous & Professional Service
              </h3>
            </div>
            
            {/* Toggle Segmented Controls */}
            <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveClientType('residential')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeClientType === 'residential'
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Residential Homeowners</span>
              </button>
              <button
                onClick={() => setActiveClientType('commercial')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeClientType === 'commercial'
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Commercial & Industrial</span>
              </button>
            </div>
          </div>

          {activeClientType === 'residential' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700/80">
                <div className="text-sky-400 font-bold text-sm mb-1">Honest In-Home Diagnostics</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  When you contact us, you are not getting a salesman. If a capacitor or contactor can repair your system safely, we replace the part instead of pushing an unnecessary $12,000 unit.
                </p>
                <span className="text-[11px] text-emerald-400 font-semibold block mt-3">✓ Zero Pressure Guarantee</span>
              </div>

              <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700/80">
                <div className="text-sky-400 font-bold text-sm mb-1">Custom In-House Metal Fabrication</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Dallas homes often suffer from undersized return plenums and noisy airflow. Our lead fabricator custom builds ductwork to fit your exact closets and attic framing.
                </p>
                <span className="text-[11px] text-emerald-400 font-semibold block mt-3">✓ Perfect Airtight Fit</span>
              </div>

              <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700/80">
                <div className="text-sky-400 font-bold text-sm mb-1">Respect for Your Home</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our technicians wear shoe coverings, protect hardwood floors and carpeting with heavy drop cloths, and leave your mechanical room cleaner than they found it.
                </p>
                <span className="text-[11px] text-emerald-400 font-semibold block mt-3">✓ Courteous & Spotless</span>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700/80">
                <div className="text-sky-400 font-bold text-sm mb-1">In-House Mechanical CAD Design</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our sales and design department prepares comprehensive plan-and-spec mechanical calculations, coordinating seamlessly with architects, general contractors, and engineers.
                </p>
                <span className="text-[11px] text-emerald-400 font-semibold block mt-3">✓ Complete Plan & Spec Bidding</span>
              </div>

              <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700/80">
                <div className="text-sky-400 font-bold text-sm mb-1">Rapid Rooftop Unit (RTU) Turnaround</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  With custom curb adapters fabricated directly in our Dallas metal shop, we execute rooftop crane lifts and unit replacements with minimal downtime for retail tenants.
                </p>
                <span className="text-[11px] text-emerald-400 font-semibold block mt-3">✓ Zero Supply Chain Delays</span>
              </div>

              <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700/80">
                <div className="text-sky-400 font-bold text-sm mb-1">Commercial Preventative Contracts</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Protect server rooms, office comfort, and commercial refrigeration with scheduled quarterly maintenance agreements and 24/7 priority emergency dispatch.
                </p>
                <span className="text-[11px] text-emerald-400 font-semibold block mt-3">✓ Guaranteed VIP Dispatch</span>
              </div>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-300">
              <span className="font-bold text-white">Licensed Texas Mechanical Contractor:</span> TACLA17853E
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={onRequestEstimate}
                className="px-5 py-2.5 text-xs font-bold text-white bg-sky-600 rounded-lg hover:bg-sky-500 transition-colors cursor-pointer"
              >
                Request Free Consultation
              </button>
              <a
                href="tel:2143811127"
                className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-lg border border-slate-700"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>(214) 381-1127</span>
              </a>
            </div>
          </div>
        </div>

        {/* The Suburban Standard Comparison Table */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Transparent Standards</span>
            <h3 className="text-2xl font-bold text-slate-900 font-display mt-0.5">
              The Suburban Standard vs. Typical Contractors
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Why our Dallas customers stay with us for decades instead of shopping around every season.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                    <th className="py-3.5 px-4 sm:px-6 font-bold">HVAC Standard</th>
                    <th className="py-3.5 px-4 sm:px-6 font-bold text-sky-700 bg-sky-50/70">Suburban Heating & Air</th>
                    <th className="py-3.5 px-4 sm:px-6 font-semibold text-slate-500">Typical Dallas Contractors</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900">
                        {row.feature}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-800 bg-sky-50/30">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="font-medium">{row.suburban}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-500">
                        <div className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                          <span>{row.others}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
