import React, { useState, useId } from 'react';
import { Calculator, ArrowRight, Gauge, DollarSign, CheckCircle2 } from 'lucide-react';

interface SavingsCalculatorProps {
  onQuoteWithSpecs: (details: string) => void;
}

export const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({
  onQuoteWithSpecs,
}) => {
  const [sqFootage, setSqFootage] = useState<number>(2400);
  const [currentSeer, setCurrentSeer] = useState<number>(10);
  const [systemType, setSystemType] = useState<string>('central-ac-heatpump');
  const [homeAge, setHomeAge] = useState<string>('1980-2005');

  const sqFtId = useId();
  const seerId = useId();
  const typeId = useId();
  const ageId = useId();

  // Load calculation approximation for Dallas climate (approx 500-600 sq ft per ton depending on age/insulation)
  const insulationFactor = homeAge === 'pre-1980' ? 450 : homeAge === '1980-2005' ? 550 : 650;
  const estimatedTons = Math.max(1.5, Math.min(6.0, Math.round((sqFootage / insulationFactor) * 2) / 2));
  
  // Carrier upgraded SEER2 baseline is 16-20 SEER2
  const targetSeer = 18;
  const efficiencyImprovementPct = Math.round(((targetSeer - currentSeer) / targetSeer) * 100);
  const estimatedAnnualSavings = Math.round(sqFootage * 0.42 * (efficiencyImprovementPct / 100));
  const tenYearSavings = estimatedAnnualSavings * 10;

  const handleBookEstimate = () => {
    const summary = `${sqFootage} sq ft home, est. ${estimatedTons} Ton system, currently ~${currentSeer} SEER`;
    onQuoteWithSpecs(summary);
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Context */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">Dallas Climate Sizing Tool</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white font-display">
              Scientific Heat Load & Energy Efficiency Estimator
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              No more guessing at the size of the unit you need. In the Texas heat, an oversized system causes clammy humidity, while an undersized unit runs continuously and burns out compressors.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Suburban’s design engineers perform in-house Manual J load calculations accounting for your ductwork, window solar gain, and insulation. Use this quick estimator to gauge your system sizing and potential utility bill reduction.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Carrier® Factory Authorized high-efficiency matching</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Custom in-house duct transitions for optimal static pressure</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Interactive Form & Output Card */}
          <div className="lg:col-span-7 bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
              
              {/* Home Square Footage */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor={sqFtId} className="text-xs font-semibold text-slate-300">Home Living Area</label>
                  <span className="text-xs font-mono tabular-nums text-sky-400 font-bold">{sqFootage.toLocaleString()} sq ft</span>
                </div>
                <input
                  id={sqFtId}
                  type="range"
                  min="800"
                  max="6000"
                  step="100"
                  value={sqFootage}
                  onChange={(e) => setSqFootage(Number(e.target.value))}
                  className="w-full accent-sky-500 cursor-pointer"
                />
              </div>

              {/* Existing System Efficiency */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor={seerId} className="text-xs font-semibold text-slate-300">Current Unit SEER</label>
                  <span className="text-xs font-mono tabular-nums text-sky-400 font-bold">~{currentSeer} SEER</span>
                </div>
                <select
                  id={seerId}
                  value={currentSeer}
                  onChange={(e) => setCurrentSeer(Number(e.target.value))}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-hidden focus:border-sky-500"
                >
                  <option value={8}>8 - 10 SEER (Installed before 2006)</option>
                  <option value={12}>12 - 13 SEER (Installed 2006-2014)</option>
                  <option value={14}>14 - 15 SEER (Installed 2015-2022)</option>
                </select>
              </div>

              {/* Construction Age / Insulation */}
              <div>
                <label htmlFor={ageId} className="block text-xs font-semibold text-slate-300 mb-1">Home Age & Insulation</label>
                <select
                  id={ageId}
                  value={homeAge}
                  onChange={(e) => setHomeAge(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-hidden focus:border-sky-500"
                >
                  <option value="pre-1980">Pre-1980 (Original insulation / Single pane)</option>
                  <option value="1980-2005">1980 - 2005 (Standard North Texas insulation)</option>
                  <option value="post-2005">2006+ (Modern high-performance insulation)</option>
                </select>
              </div>

              {/* Preferred System Type */}
              <div>
                <label htmlFor={typeId} className="block text-xs font-semibold text-slate-300 mb-1">System of Interest</label>
                <select
                  id={typeId}
                  value={systemType}
                  onChange={(e) => setSystemType(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-hidden focus:border-sky-500"
                >
                  <option value="central-ac-heatpump">Carrier® High-Efficiency Heat Pump / AC</option>
                  <option value="geothermal">Geothermal Ground-Source Heat Pump</option>
                  <option value="ductless-minisplit">Multi-Zone Ductless Mini-Split</option>
                  <option value="custom-duct">Complete System + Re-engineered Ductwork</option>
                </select>
              </div>

            </div>

            {/* Calculations Output Banner */}
            <div className="bg-slate-900/90 rounded-xl p-5 border border-slate-700/80 mb-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                
                <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700/60">
                  <div className="flex items-center justify-center gap-1 text-slate-400 text-xs mb-1">
                    <Gauge className="w-3.5 h-3.5 text-sky-400" />
                    <span>Est. Sizing</span>
                  </div>
                  <span className="text-2xl font-black text-white font-mono tabular-nums">{estimatedTons} Tons</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Approx. {Math.round(estimatedTons * 12000).toLocaleString()} BTU/hr</span>
                </div>

                <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700/60">
                  <div className="flex items-center justify-center gap-1 text-slate-400 text-xs mb-1">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Est. Annual Savings</span>
                  </div>
                  <span className="text-2xl font-black text-emerald-400 font-mono tabular-nums">${estimatedAnnualSavings.toLocaleString()}</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">~{efficiencyImprovementPct}% electrical drop</span>
                </div>

                <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700/60">
                  <div className="flex items-center justify-center gap-1 text-slate-400 text-xs mb-1">
                    <Calculator className="w-3.5 h-3.5 text-amber-400" />
                    <span>10-Yr Savings</span>
                  </div>
                  <span className="text-2xl font-black text-amber-400 font-mono tabular-nums">${tenYearSavings.toLocaleString()}</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Plus equipment rebate eligibility</span>
                </div>

              </div>
            </div>

            {/* Action Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] text-slate-400">
                Official load calculations are calculated during your free in-home consultation.
              </span>
              <button
                onClick={handleBookEstimate}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-sky-600 rounded-lg hover:bg-sky-500 active:scale-98 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Request Bid with These Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
