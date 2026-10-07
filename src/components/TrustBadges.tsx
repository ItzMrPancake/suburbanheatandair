import React from 'react';
import { Award, ShieldCheck, Factory, Clock, CheckCircle2 } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const badges = [
    {
      title: 'Carrier® Factory Authorized',
      subtitle: 'Premium residential & commercial installations with factory warranties',
      icon: Award,
    },
    {
      title: 'BBB A+ Rated & Accredited',
      subtitle: 'Highest Better Business Bureau ethical standard maintained in Dallas',
      icon: ShieldCheck,
    },
    {
      title: 'In-House Metal Shop',
      subtitle: 'Lead fabricator with 16+ years craft — custom ducts built on Peachtree St.',
      icon: Factory,
    },
    {
      title: '24/7 Live Human Response',
      subtitle: 'Never a pre-recorded machine. Direct access to dispatch at all hours.',
      icon: Clock,
    },
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Subtle Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Local Integrity & Certifications</span>
            <h2 className="text-lg font-bold text-slate-900 font-display">Why North Texas Entrusts Its Comfort to Suburban</h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>State Mechanical License #TACLA17853E</span>
          </div>
        </div>

        {/* 4-Column Metric / Trust Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:shadow-xs transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-100/80 text-sky-700 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">{b.title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{b.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
