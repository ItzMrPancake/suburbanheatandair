import React, { useState } from 'react';
import { Users, Truck, Wrench, PhoneCall, Compass, CheckCircle2, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeDepartment, setActiveDepartment] = useState<number>(0);

  const departments = [
    {
      name: 'Installation Department',
      icon: Wrench,
      leader: 'Led by Co-Owner · Supervised by 2 Leads (45 Combined Years Experience)',
      summary: 'Our largest department handles comprehensive residential and commercial installations, multi-system replacements, and complex ductwork re-engineering.',
      points: [
        'Supervised by two industry veterans with a combined 45 years of hands-on installation experience',
        'Direct owner oversight on site setups, duct routing, and equipment positioning',
        'Capable of handling large multi-system commercial projects down to tidy residential retrofits',
        'Strict cleanliness standard: protective shoe coverings, drop cloths, and spotless cleanup'
      ]
    },
    {
      name: 'Service Department',
      icon: Truck,
      leader: 'Led by Co-Owner & Service Dispatcher · 7 Trucks & 8 Seasoned Techs',
      summary: 'A responsive fleet on call 24 hours a day, 7 days a week, ready to troubleshoot and repair broken cooling and heating systems across Dallas.',
      points: [
        'Dedicated crew of seven trucks and eight experienced technicians ready 24/7',
        'Fully stocked mobile inventory with universal capacitors, contactors, motors, and controls',
        'High first-visit completion rate so Dallas families don’t spend nights in the Texas heat',
        'Honest diagnostic approach: our technicians are true craftsmen, not commission-hungry salesmen'
      ]
    },
    {
      name: 'Metal Fabrication Shop',
      icon: Users,
      leader: 'Led by Lead Fabricator with 16+ Years Experience',
      summary: 'Our custom sheet metal shop operates on Peachtree Street, crafting custom plenums, transitions, and fittings in-house with precision tolerances.',
      points: [
        'Lead fabricator with over 16 years of specialized sheet metal shaping expertise',
        'Eliminates the multi-week supply chain delays common with third-party duct suppliers',
        'Custom fittings crafted to exact millimeter dimensions for historic and modern Dallas homes',
        'Ensures optimal static pressure and airtight duct seals for peak Carrier system performance'
      ]
    },
    {
      name: 'Office & Dispatch',
      icon: PhoneCall,
      leader: 'Led by Co-Owner · Real Live Human Support 24/7',
      summary: 'When you call Suburban, you will always be greeted by an actual human voice ready to understand your issue and dispatch immediate help.',
      points: [
        'No endless automated phone trees or recorded robots',
        'Attentive Dallas-based dispatchers who know local neighborhoods and traffic corridors',
        'Seamless coordination between emergency callers and on-duty mobile service technicians',
        'Transparent scheduling windows with courtesy confirmation calls'
      ]
    },
    {
      name: 'Sales & Design Department',
      icon: Compass,
      leader: 'In-House Mechanical Engineering & Plan/Spec Pricing',
      summary: 'Equipped to price plan and spec jobs, custom architectural applications, and complete in-house mechanical design for flawless job coordination.',
      points: [
        'In-house mechanical load calculations (Manual J & D) preventing oversized or undersized units',
        'Commercial plan and spec estimating for general contractors, architects, and business owners',
        'Clear mechanical drawings that bridge customer goals with field installers seamlessly',
        'Carrier® system efficiency modeling to maximize rebates and lifetime energy savings'
      ]
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Story Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Established in Dallas, 1967</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Built on 58+ Years of Craftsmanship, Honesty, and Real Relationships.
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Founded in 1967 by Don Hamilton, Suburban Heating & Air Conditioning Co. upholds the exact same principles of customer service and uncompromising quality that brought the company into existence.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              The company has since transitioned to current owners Denise Roberts, Charles Owens, and Gaylann Hamilton. As a close-knit company of approximately 50 employees, we are intentionally sized to provide personal attention while maintaining the industrial capacity to execute complex commercial installations.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3 border-t border-slate-100">
              <div>
                <span className="text-2xl font-black text-slate-900 font-display block">1967</span>
                <span className="text-xs text-slate-500">Year Founded by Don Hamilton</span>
              </div>
              <div>
                <span className="text-2xl font-black text-sky-700 font-display block">~50</span>
                <span className="text-xs text-slate-500">Dedicated HVAC Employees</span>
              </div>
              <div>
                <span className="text-2xl font-black text-emerald-700 font-display block">7 Trucks</span>
                <span className="text-xs text-slate-500">24/7 Mobile Service Fleet</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-sky-600 text-white flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Current Leadership</h3>
                <span className="text-xs text-slate-500">Continuing the Hamilton Family Legacy</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Our owners Denise Roberts, Charles Owens, and Gaylann Hamilton remain actively involved in daily operations. They oversee job sites, lead technical training, and ensure every technician honors our core promise: prompt, courteous, and honest solutions.
            </p>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Carrier® Factory Authorized Quality Standards</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>A+ Better Business Bureau Accredited Business</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Licensed Texas Contractor #TACLA17853E</span>
              </div>
            </div>
          </div>
        </div>

        {/* Five Departments Interactive Showcase */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Operational Excellence</span>
            <h3 className="text-2xl font-extrabold text-slate-900 mt-1 font-display">
              Our Five Specialized Departments
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              What keeps our business running smoothly and allows us to deliver dependable service across Dallas.
            </p>
          </div>

          {/* Department Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {departments.map((dept, idx) => {
              const Icon = dept.icon;
              const isSelected = activeDepartment === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveDepartment(idx)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{dept.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Department Details Card */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-slate-200 gap-2">
              <div>
                <h4 className="text-xl font-bold text-slate-900 font-display">
                  {departments[activeDepartment].name}
                </h4>
                <p className="text-xs text-sky-700 font-medium mt-0.5">
                  {departments[activeDepartment].leader}
                </p>
              </div>
              <span className="text-xs text-slate-500 font-medium">
                3918 Peachtree St. Dallas, TX 75227
              </span>
            </div>

            <p className="text-sm text-slate-700 mt-4 leading-relaxed">
              {departments[activeDepartment].summary}
            </p>

            <div className="mt-6">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Key Highlights:</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-700">
                {departments[activeDepartment].points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
