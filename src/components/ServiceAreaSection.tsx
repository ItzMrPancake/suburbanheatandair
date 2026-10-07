import React from 'react';
import { SERVICE_AREAS } from '../data/servicesData';
import { MapPin, Phone, ShieldCheck } from 'lucide-react';

export const ServiceAreaSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Local Presence</span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1 font-display">
            Proudly Serving the Greater Dallas Metroplex
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
            Headquartered at 3918 Peachtree St. in Dallas, our fleet of seven mobile service trucks provides rapid response times across Dallas County and surrounding North Texas communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICE_AREAS.map((area, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">{area.name}</h3>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{area.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Territory Callout Bar */}
        <div className="mt-8 p-4 rounded-xl bg-sky-50 border border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-sky-900">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sky-700 shrink-0" />
            <span>Don&apos;t see your specific Dallas suburb listed? Call our office dispatcher directly.</span>
          </div>
          <a
            href="tel:2143811127"
            className="flex items-center gap-1.5 font-bold text-sky-700 hover:text-sky-900"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>(214) 381-1127</span>
          </a>
        </div>

      </div>
    </section>
  );
};
