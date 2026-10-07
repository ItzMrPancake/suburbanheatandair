import React, { useState } from 'react';
import { SERVICES_DATA, ServiceDetail } from '../data/servicesData';
import { Wind, Flame, Globe2, Hammer, ClipboardCheck, Building2, Check, ArrowRight, Phone } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForEstimate: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForEstimate,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('air-conditioning');
  const [detailModalService, setDetailModalService] = useState<ServiceDetail | null>(null);

  const serviceIcons: Record<string, React.ElementType> = {
    'air-conditioning': Wind,
    'heating': Flame,
    'geothermal': Globe2,
    'metal-shop': Hammer,
    'service-agreement': ClipboardCheck,
    'commercial-hvac': Building2,
  };

  const currentService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Complete HVAC Engineering</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1 font-display">
            Residential & Commercial HVAC Services
          </h2>
          <p className="text-slate-600 mt-3 text-base leading-relaxed">
            For all your residential and commercial HVAC service needs, trust Suburban Heating & Air Conditioning Co. With about 50 skilled professionals, an in-house metal fabrication shop, and Carrier® Factory Authorized systems, no job is too complex.
          </p>
        </div>

        {/* Service Category Buttons (Interactive Segmented Bar) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
          {SERVICES_DATA.map((service) => {
            const Icon = serviceIcons[service.id] || Wind;
            const isSelected = selectedServiceId === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className={`flex flex-col items-center justify-center p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-sky-600 text-white border-sky-600 shadow-md scale-102'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-5 h-5 mb-1.5 ${isSelected ? 'text-white' : 'text-sky-600'}`} />
                <span className="text-xs font-semibold leading-tight line-clamp-2">
                  {service.title.split('&')[0].trim()}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Service Detailed Showcase Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Content (7 cols) */}
            <div className="p-6 sm:p-10 lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-700 mb-2">
                  <span>Carrier® Authorized & In-House Shop</span>
                  <span>·</span>
                  <span>Dallas, TX</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                  {currentService.title}
                </h3>
                
                <p className="text-sm font-medium text-sky-800 mt-1">
                  {currentService.tagline}
                </p>

                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                  {currentService.shortDescription}
                </p>

                {/* Key Bullet Points */}
                <div className="mt-6 space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Key Capabilities & Features:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {currentService.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Callouts & Action Buttons */}
              <div className="pt-8 mt-8 border-t border-slate-100 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onSelectServiceForEstimate(currentService.title)}
                  className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-sky-600 rounded-lg hover:bg-sky-700 active:scale-98 transition-all shadow-xs cursor-pointer"
                >
                  <span>Request Quote for {currentService.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setDetailModalService(currentService)}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  View Full Specifications
                </button>

                <a
                  href="tel:2143811127"
                  className="ml-auto flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-sky-600 py-2"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-600" />
                  <span>24/7 Dispatch: (214) 381-1127</span>
                </a>
              </div>
            </div>

            {/* Right Visual Image (5 cols) */}
            <div className="lg:col-span-5 flex flex-col bg-slate-100 border-t lg:border-t-0 lg:border-l border-slate-200">
              <div className="relative min-h-64 sm:min-h-80 flex-1">
                <img
                  src={currentService.image}
                  alt={currentService.title}
                  className="w-full h-full object-cover object-center block"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 bg-slate-900 text-white text-xs">
                <div className="flex items-center gap-1.5 text-sky-400 font-bold mb-0.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Suburban Standard</span>
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  {currentService.highlight}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Marquee Sub-Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h4 className="text-sm font-bold text-slate-900 mb-1">Wine Cellar Conditioning</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tailored cooling and humidity units designed for delicate wine rooms in premier Dallas residences. Constant 55°F stabilization with vibration-isolated coils.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h4 className="text-sm font-bold text-slate-900 mb-1">Custom In-House Ductwork</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our lead sheet metal fabricator with 16+ years experience builds custom fittings directly in our Dallas shop, ensuring optimal airflow and zero project delays.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h4 className="text-sm font-bold text-slate-900 mb-1">Smart Thermostats & Remote Access</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Carrier Infinity Touch and Wi-Fi thermostats that allow full smartphone temperature monitoring and energy tracking from anywhere in the world.
            </p>
          </div>
        </div>

      </div>

      {/* Full Specifications Modal */}
      {detailModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">Service Overview</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1 font-display">
                  {detailModalService.title}
                </h3>
              </div>
              <button
                onClick={() => setDetailModalService(null)}
                className="text-slate-400 hover:text-slate-600 text-lg font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              {detailModalService.shortDescription}
            </p>

            <div className="mt-6 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">In-Depth Department Capabilities</h4>
              {detailModalService.features.map((feat, i) => (
                <div key={i} className="p-3.5 rounded-lg bg-slate-50 border border-slate-100">
                  <h5 className="text-xs font-bold text-slate-900">{feat.title}</h5>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setDetailModalService(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const title = detailModalService.title;
                  setDetailModalService(null);
                  onSelectServiceForEstimate(title);
                }}
                className="px-5 py-2.5 text-xs font-bold text-white bg-sky-600 rounded-lg hover:bg-sky-700 cursor-pointer"
              >
                Book Free Estimate
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
