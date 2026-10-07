import React from 'react';
import { Phone, Calendar, Star, ShieldCheck, Wrench, Clock, Award, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onRequestEstimate: () => void;
  onExploreServices: () => void;
  onViewReviews: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onRequestEstimate,
  onExploreServices,
  onViewReviews,
}) => {
  return (
    <section className="relative bg-white text-slate-900 py-12 lg:py-16 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Authentic Dallas HVAC Contractor Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Trust Kicker - Clean, Unboxed Contractor Credentials */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600">
              <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-900 border border-blue-200 px-3 py-1 rounded-sm font-semibold">
                <Award className="w-3.5 h-3.5 text-blue-700" />
                Serving Dallas Since 1967
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-800 font-semibold">Carrier® Factory Authorized Dealer</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 font-mono">TACLA17853E</span>
            </div>

            {/* Main Headline - Bold, Grounded, Real Business Prose */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 font-display leading-[1.15]">
              Dallas Heating & Air Conditioning Since 1967.
            </h1>

            {/* Clear, Honest Subhead */}
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl leading-relaxed">
              Suburban Heating & Air Conditioning Co. is an independent, customer-focused team of about 50 local specialists. Founded by Don Hamilton over 58 years ago, we provide dependable Carrier® installations, 24/7 emergency service, and custom in-house sheet metal ductwork from our Peachtree Street shop.
            </p>

            {/* 3 Grounded Service Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs mb-1">
                  <Clock className="w-4 h-4 text-blue-700 shrink-0" />
                  <span>24/7 Live Human Response</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-normal">
                  A real person answers day and night. Never an automated robot.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs mb-1">
                  <Wrench className="w-4 h-4 text-blue-700 shrink-0" />
                  <span>In-House Metal Shop</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-normal">
                  Custom ductwork built in our Dallas shop. Zero 3rd-party wait.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>BBB A+ Accredited</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-normal">
                  Honest diagnostics. Salaried technicians, not salespeople.
                </p>
              </div>
            </div>

            {/* Call To Action Buttons - Solid, Accessible, High Contrast */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onRequestEstimate}
                className="flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded-md transition-colors shadow-sm cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Free Estimate</span>
              </button>

              <a
                href="tel:2143811127"
                className="flex items-center gap-2 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-900 bg-white border-2 border-slate-300 hover:border-blue-700 hover:text-blue-700 rounded-md transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-700" />
                <span>(214) 381-1127 (24/7)</span>
              </a>

              <button
                onClick={onViewReviews}
                className="flex items-center gap-1.5 text-xs text-slate-700 hover:text-blue-700 px-2 py-2 cursor-pointer font-medium"
              >
                <div className="flex text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                </div>
                <span className="font-semibold underline underline-offset-4">4.9 / 5 Stars (180+ Reviews)</span>
              </button>
            </div>

          </div>

          {/* Right Column: Clean, Unobstructed Real Photography Frame (No Floating Glass Cards) */}
          <div className="lg:col-span-5">
            <div className="bg-slate-100 p-2 sm:p-3 rounded-xl border border-slate-300 shadow-sm">
              
              {/* Image Container - Completely Unobstructed */}
              <div className="relative rounded-lg overflow-hidden bg-slate-200 border border-slate-300">
                <img
                  src="./images/hero_suburban_technician.jpg"
                  alt="Suburban Heating & Air Conditioning technician servicing a Carrier system in Dallas, TX"
                  className="w-full h-80 sm:h-96 object-cover object-center block"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>

              {/* Clean Grounded Caption Strip Underneath the Photo (Replaces the AI floating glass card) */}
              <div className="mt-3 p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-700">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Suburban Heating & Air Conditioning Co</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-mono">TACLA17853E</span>
                </div>
                
                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-600">
                  <span>3918 Peachtree St. Dallas, TX 75227</span>
                  <span className="font-semibold text-blue-700">7 Service Trucks · 24/7 On-Call</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
