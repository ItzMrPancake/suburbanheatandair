import React from 'react';
import { Phone, MapPin, Mail, ShieldCheck, Award, CreditCard } from 'lucide-react';

interface FooterProps {
  onNavClick: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      
      {/* Upper Brand / Partner Trust Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14">
        
        {/* Partners & Accreditations Banner */}
        <div className="pb-10 mb-10 border-b border-slate-800/80">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400">Partners in Success</span>
              <p className="text-sm font-semibold text-white mt-0.5">
                Authorized Manufacturers & Accredited Industry Organizations
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-slate-300 text-xs">
              <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-lg">
                <Award className="w-4 h-4 text-sky-400" />
                <span className="font-semibold text-white">Carrier® Factory Authorized</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold text-white">BBB Accredited A+ Business</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-lg">
                <span className="font-mono text-amber-400 font-bold">TACLA17853E</span>
                <span className="text-slate-400">State HVAC License</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Company Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="text-lg font-bold text-white tracking-tight font-display block">
                Suburban Heating & Air Conditioning Co
              </span>
              <span className="text-xs text-sky-400 font-medium">Suburban Heating and Air, TX · Est. 1967</span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Founded in 1967 by Don Hamilton and today owned and operated by Denise Roberts, Charles Owens, and Gaylann Hamilton. Providing trusted residential and commercial HVAC services to the greater Dallas area for over 58 years.
            </p>

            <div className="space-y-1.5 pt-1 text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>3918 Peachtree St., Dallas, TX 75227</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href="tel:2143811127" className="hover:text-white font-semibold">
                  (214) 381-1127 (24/7 Emergency Line)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href="mailto:charles@suburbanheatandair.com" className="hover:text-white">
                  charles@suburbanheatandair.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavClick('home')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About Us (Since 1967)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Air Conditioning Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Heating & Heat Pumps
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Geothermal Applications
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('service-agreement')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  HVAC Service Agreement
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('reviews')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Customer Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact & Free Estimate
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Payment Options (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-1">
                Hours of Operation
              </h4>
              <p className="text-xs text-emerald-400 font-semibold">
                Monday – Sunday: 24/7 Emergency Service
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                Our service technicians and 7 on-call trucks don&apos;t mind the long hours to solve your heating or air emergency.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-2">
                Payment Options Accepted
              </h4>
              <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-300">
                <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded">Visa</span>
                <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded">Mastercard</span>
                <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded">American Express</span>
                <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded">Discover</span>
                <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded">Check / Cash</span>
                <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded">Financing Available</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-500">
              State HVAC License: <span className="font-mono text-slate-400">TACLA17853E</span>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Legal Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            Copyright © 2026 Suburban Heating & Air Conditioning Co. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Dallas, Texas</span>
            <span>·</span>
            <span>Carrier® Factory Authorized</span>
            <span>·</span>
            <a href="#root" className="hover:text-slate-300 transition-colors">Back to Top ↑</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
