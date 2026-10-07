import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  onRequestEstimate: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigate,
  onRequestEstimate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'why-choose-us', label: 'Why Choose Us' },
    { id: 'services', label: 'Services' },
    { id: 'service-map', label: 'Service Map' },
    { id: 'about', label: 'About Us' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      {/* Top 24/7 Dispatch Utility Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-medium text-emerald-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              24/7 Live Emergency Dispatch
            </span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-300">Carrier® Factory Authorized Dealer</span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-300">License: TACLA17853E</span>
          </div>

          <div className="flex items-center gap-4 ml-auto text-xs">
            <span className="text-slate-400 hidden lg:inline">A+ BBB Accredited · Serving Dallas Since 1967</span>
            <a
              href="tel:2143811127"
              className="flex items-center gap-1.5 font-semibold text-white hover:text-sky-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>(214) 381-1127</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Following Strict 3-Zone Contract */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          
          {/* Zone 1: Brand Title (Single text element wordmark in display face) */}
          <button
            onClick={() => handleLinkClick('top')}
            className="text-left group cursor-pointer focus:outline-hidden"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-600 to-blue-800 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 group-hover:text-sky-700 transition-colors font-display">
                  Suburban Heating & Air
                </span>
                <span className="text-[11px] font-medium text-slate-500 -mt-1 tracking-wider uppercase">
                  Dallas, TX · Est. 1967
                </span>
              </div>
            </div>
          </button>

          {/* Zone 2: 4-6 Clean Text Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="py-1 hover:text-sky-600 transition-colors cursor-pointer focus:outline-hidden whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:2143811127"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-800 hover:text-sky-600 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              <span className="whitespace-nowrap">(214) 381-1127</span>
            </a>
            <button
              onClick={onRequestEstimate}
              className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-sky-600 rounded-lg hover:bg-sky-700 active:scale-98 transition-all shadow-xs cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              <span>Free Estimate</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onRequestEstimate}
              className="px-3 py-1.5 text-xs font-medium text-white bg-sky-600 rounded-md sm:hidden"
            >
              Estimate
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="w-full text-left py-2 px-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="tel:2143811127"
                className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-slate-900 text-white text-xs font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                Call (214) 381-1127 (24/7)
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestEstimate();
                }}
                className="w-full py-2 px-4 rounded-lg bg-sky-600 text-white text-xs font-medium"
              >
                Request Free Estimate
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
