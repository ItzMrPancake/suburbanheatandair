import React from 'react';
import { ShieldCheck, CheckCircle2, Zap, Calendar, Phone, Sparkles } from 'lucide-react';

interface ServiceAgreementProps {
  onRequestAgreement: () => void;
}

export const ServiceAgreementSection: React.FC<ServiceAgreementProps> = ({
  onRequestAgreement,
}) => {
  const checklist = [
    {
      title: 'Cleaning Condenser Coils',
      desc: 'Removes baked-on Dallas dust, cottonwood, and grass clippings to restore heat transfer.',
    },
    {
      title: 'Evaluating Thermostats & Electrical Voltage',
      desc: 'Tests contactors, capacitors, relays, and loose connections to prevent sudden motor burnouts.',
    },
    {
      title: 'Checking Operating Refrigerant Pressure',
      desc: 'Measures subcooling and superheat to catch tiny micro-leaks before the compressor suffers damage.',
    },
    {
      title: 'Start-Up & Shutdown Cycle Safety Checks',
      desc: 'Simulates full heating and cooling ignition cycles to ensure high-limit switches and safety cutoffs engage.',
    },
    {
      title: 'Washing Outdoor HVAC Units',
      desc: 'Low-pressure coil wash to clear outdoor grime without bending delicate aluminum heat fins.',
    },
    {
      title: 'Flushing Condensate Drain Lines',
      desc: 'Clears algae and sludge buildup to prevent ceiling water damage and float-switch shutdowns.',
    },
    {
      title: 'Lubricating Motors & Bearings',
      desc: 'Reduces mechanical friction, lowers electrical draw, and silences motor squeaks.',
    },
    {
      title: 'Evaluating Blower Components',
      desc: 'Inspects blower wheel balance, belt tension, and static airflow balance across duct plenums.',
    },
    {
      title: 'Inspecting & Replacing Air Filters',
      desc: 'Maintains optimal cubic feet per minute (CFM) airflow and protects indoor air quality.',
    },
  ];

  return (
    <section id="service-agreement" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Peace of Mind Protection</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1 font-display">
            HVAC Service Agreements Keep Systems Running Smoothly
          </h2>
          <p className="text-slate-600 mt-3 text-base leading-relaxed">
            At Suburban Heating & Air Conditioning Co., routine biannual checks make HVAC maintenance simple and cost-effective. Our Service Agreement ensures your systems are prioritized regardless of how busy things get during extreme Texas heat waves or sudden winter freezes.
          </p>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-sky-50/60 border border-sky-100 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-sky-600 text-white flex items-center justify-center mb-3">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Priority VIP Dispatch</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                When temperatures spike to 105° in Dallas, service queues fill rapidly. Service Agreement customers automatically get first priority on our 7 on-call service trucks.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-sky-700 mt-4 block">24/7 Emergency Priority</span>
          </div>

          <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Preserve Manufacturer Warranties</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Carrier® and major manufacturers stipulate annual maintenance to honor warranty claims. We provide complete signed inspection records that keep your coverage fully valid.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-emerald-700 mt-4 block">100% Factory Compliance</span>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Lower Monthly Energy Bills</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                A clean condenser coil and dialed-in refrigerant charge reduces your compressor’s electrical workload by up to 20%, noticeably lowering monthly utility bills.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-slate-700 mt-4 block">Maximum Efficiency Year-Round</span>
          </div>
        </div>

        {/* 9-Point Inspection Checklist */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-10 border border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-2 mb-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 font-display">
                What’s Included in Our Biannual Tune-Up
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Performed once in Spring (cooling preparation) and once in Fall (heating safety).
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 bg-sky-100/60 px-3 py-1.5 rounded-lg">
              <Calendar className="w-4 h-4" />
              <span>Recommended Spring & Fall</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {checklist.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                  <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-600">
              <span className="font-bold text-slate-900">Customized for Both Residential & Commercial Properties.</span>
              <span className="block text-slate-500">Applicable to heat pumps, mini-splits, conventional central air, and geothermal systems.</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onRequestAgreement}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-white bg-sky-600 rounded-lg hover:bg-sky-700 transition-colors shadow-xs cursor-pointer"
              >
                Inquire About Agreement Pricing
              </button>
              <a
                href="tel:2143811127"
                className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-sky-600 py-2"
              >
                <Phone className="w-3.5 h-3.5 text-sky-600" />
                <span>(214) 381-1127</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
