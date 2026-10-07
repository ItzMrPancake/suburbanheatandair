import React, { useState } from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, CheckCircle2, ArrowRight, Truck } from 'lucide-react';

export interface RegionData {
  id: string;
  name: string;
  quadrant: string;
  zipCodes: string[];
  neighborhoods: string[];
  avgArrival: string;
  trucksAssigned: number;
  popularServices: string[];
  description: string;
  svgPath: string;
  labelX: number;
  labelY: number;
  highlightColor: string;
}

export const REGIONS_DATA: RegionData[] = [
  {
    id: 'peachtree-hq',
    name: 'East Dallas & Mesquite (HQ Hub)',
    quadrant: 'Headquarters Territory',
    zipCodes: ['75227', '75149', '75150', '75181', '75217'],
    neighborhoods: ['Peachtree St Corridor', 'Mesquite', 'Sunnyvale', 'Piedmont Addition', 'Urbandale'],
    avgArrival: '15 - 30 minutes',
    trucksAssigned: 3,
    popularServices: ['Emergency AC Diagnostics', 'In-House Custom Duct Orders', 'Biannual Maintenance'],
    description: 'Home of our dispatch office and in-house sheet metal fabrication shop at 3918 Peachtree St. Direct local dispatch across Dallas County.',
    svgPath: 'M 460 270 L 590 270 L 630 350 L 580 430 L 450 410 L 440 330 Z',
    labelX: 520,
    labelY: 345,
    highlightColor: '#0284c7'
  },
  {
    id: 'lakewood-east',
    name: 'Lakewood & White Rock Lake',
    quadrant: 'East Dallas',
    zipCodes: ['75214', '75218', '75223', '75228'],
    neighborhoods: ['Lakewood', 'White Rock Lake', 'Forest Hills', 'Hollywood/Santa Monica', 'Lochwood'],
    avgArrival: '25 - 40 minutes',
    trucksAssigned: 2,
    popularServices: ['Historic Home Duct Rebuilding', 'Carrier High-Efficiency Heat Pumps', 'Wine Cellars'],
    description: 'Specialized in older Dallas residences requiring custom sheet metal transitions fabricated in our Peachtree St shop to fit unique framing.',
    svgPath: 'M 360 210 L 460 200 L 490 260 L 460 320 L 370 310 L 350 250 Z',
    labelX: 420,
    labelY: 260,
    highlightColor: '#0ea5e9'
  },
  {
    id: 'park-cities',
    name: 'Park Cities & Central Dallas',
    quadrant: 'Central Corridor',
    zipCodes: ['75205', '75225', '75201', '75204', '75219'],
    neighborhoods: ['Highland Park', 'University Park', 'Uptown', 'Downtown Dallas', 'Oak Lawn'],
    avgArrival: '30 - 45 minutes',
    trucksAssigned: 2,
    popularServices: ['Carrier Infinity Multi-Zone Installs', 'Wine Room Refrigeration', 'Chilled Water Systems'],
    description: 'Prestigious residential estates and mid-rise mechanical systems. Whisper-quiet operation and precision temperature control.',
    svgPath: 'M 260 230 L 350 220 L 360 300 L 290 350 L 230 300 Z',
    labelX: 295,
    labelY: 280,
    highlightColor: '#38bdf8'
  },
  {
    id: 'preston-north',
    name: 'Preston Hollow & North Dallas',
    quadrant: 'North Corridor',
    zipCodes: ['75220', '75229', '75230', '75240', '75244'],
    neighborhoods: ['Preston Hollow', 'Northwood Hills', 'Melshire Estates', 'Bluffview', 'Midway Hollow'],
    avgArrival: '35 - 50 minutes',
    trucksAssigned: 2,
    popularServices: ['Geothermal Heat Pumps', 'Multi-System Replacement', 'Smart Air Quality Controls'],
    description: 'Spacious properties with multi-unit Carrier configurations and specialized geothermal ground-loop heat pump systems.',
    svgPath: 'M 240 120 L 360 110 L 360 200 L 260 210 L 220 160 Z',
    labelX: 295,
    labelY: 160,
    highlightColor: '#0284c7'
  },
  {
    id: 'lake-highlands-richardson',
    name: 'Lake Highlands & Richardson',
    quadrant: 'Northeast Corridor',
    zipCodes: ['75231', '75238', '75243', '75080', '75081'],
    neighborhoods: ['Lake Highlands', 'Richardson Telecom', 'Town Creek', 'Royal Highlands', 'Arapaho'],
    avgArrival: '30 - 45 minutes',
    trucksAssigned: 2,
    popularServices: ['Biannual Service Agreement', 'AC Coil Replacements', 'Heat Load Manual J Sizing'],
    description: 'Established residential neighborhoods with families who have maintained seasonal maintenance agreements with Suburban for decades.',
    svgPath: 'M 360 110 L 480 100 L 480 190 L 370 200 Z',
    labelX: 420,
    labelY: 150,
    highlightColor: '#0369a1'
  },
  {
    id: 'garland-rowlett',
    name: 'Garland, Rowlett & Sachse',
    quadrant: 'Northeast Metro',
    zipCodes: ['75040', '75041', '75042', '75044', '75088', '75089'],
    neighborhoods: ['Firewheel', 'Downtown Garland', 'Lake Ray Hubbard Shoreline', 'Rowlett', 'Centerville'],
    avgArrival: '25 - 40 minutes',
    trucksAssigned: 2,
    popularServices: ['Complete AC Changeouts', 'Gas Furnace Safety Checks', 'Ductless Mini-Splits'],
    description: 'Fast highway access from our Peachtree St facility via I-635 and I-30 for rapid residential and commercial emergency dispatch.',
    svgPath: 'M 490 100 L 610 90 L 630 180 L 510 210 L 480 180 Z',
    labelX: 550,
    labelY: 145,
    highlightColor: '#0284c7'
  },
  {
    id: 'plano-collin',
    name: 'Plano & Far North Dallas',
    quadrant: 'Far North Metro',
    zipCodes: ['75023', '75024', '75025', '75074', '75075', '75093'],
    neighborhoods: ['Legacy West Area', 'West Plano', 'Willow Bend', 'Downtown Plano', 'Kings Ridge'],
    avgArrival: '40 - 55 minutes',
    trucksAssigned: 1,
    popularServices: ['Commercial Rooftop RTUs', 'Carrier Infinity Inverter Systems', 'Energy Audits'],
    description: 'Corporate business facilities and modern residences seeking maximum SEER2 seasonal efficiency and commercial maintenance agreements.',
    svgPath: 'M 250 30 L 480 20 L 480 90 L 250 100 Z',
    labelX: 360,
    labelY: 60,
    highlightColor: '#075985'
  },
  {
    id: 'rockwall-heath',
    name: 'Rockwall & Heath',
    quadrant: 'East Lake District',
    zipCodes: ['75087', '75032'],
    neighborhoods: ['The Harbor Rockwall', 'Heath Lakefront', 'Buffalo Creek', 'McLendon-Chisholm'],
    avgArrival: '30 - 45 minutes',
    trucksAssigned: 1,
    popularServices: ['Geothermal Loops', 'Custom New Construction Ducts', 'Carrier Multi-Zone'],
    description: 'Custom estate homes and lakeside properties. Ground-source geothermal loops and architectural sheet metal installations.',
    svgPath: 'M 620 170 L 730 160 L 720 280 L 620 260 Z',
    labelX: 670,
    labelY: 215,
    highlightColor: '#0369a1'
  }
];

interface InteractiveServiceMapProps {
  onRequestQuoteInArea: (regionName: string) => void;
}

export const InteractiveServiceMap: React.FC<InteractiveServiceMapProps> = ({
  onRequestQuoteInArea,
}) => {
  const [selectedRegionId, setSelectedRegionId] = useState<string>('peachtree-hq');
  const [hoveredRegionId, setHoveredRegionId] = useState<string | null>(null);

  const selectedRegion = REGIONS_DATA.find((r) => r.id === selectedRegionId) || REGIONS_DATA[0];

  return (
    <section id="service-map" className="py-14 sm:py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
            <Navigation className="w-3.5 h-3.5" />
            <span>North Texas Service Territory</span>
            <span>|</span>
            <span>7 Mobile Trucks On-Call 24/7</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-display">
            Dallas & Surrounding Service Boundaries
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
            Headquartered at 3918 Peachtree St in Dallas, Suburban Heating & Air Conditioning Co. dispatches fully stocked trucks across North Texas. Click any zone on the map below to check local response times and assigned trucks.
          </p>
        </div>

        {/* Region Selector Segmented Buttons */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {REGIONS_DATA.map((region) => {
            const isSelected = selectedRegionId === region.id;
            return (
              <button
                key={region.id}
                onClick={() => setSelectedRegionId(region.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-blue-700 text-white border-blue-700 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                }`}
              >
                <span>{region.name.split('(')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Map Layout: Vector Map + Detail Side Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Cartographic Vector Map (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-xl p-4 sm:p-5 border border-slate-300 shadow-sm relative">
            
            {/* Map Header Legend */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3 text-xs text-slate-700 pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                <span className="font-bold text-slate-900 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  HQ: 3918 Peachtree St. Dallas, TX 75227
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium">
                Click a sector to view local arrival time
              </span>
            </div>

            {/* SVG Interactive Canvas - Clean Cartographic Finish */}
            <div className="relative w-full aspect-4/3 sm:aspect-16/11 bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
              
              <svg
                viewBox="200 10 550 430"
                className="w-full h-full select-none"
              >
                {/* Major Dallas Highways / Freeways (Clean Municipal Lines) */}
                <g stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3,3" fill="none">
                  {/* I-635 Loop */}
                  <ellipse cx="420" cy="220" rx="190" ry="140" />
                  {/* I-35E */}
                  <line x1="280" y1="20" x2="330" y2="430" />
                  {/* I-30 */}
                  <line x1="210" y1="310" x2="710" y2="280" />
                  {/* US-75 / Central Expy */}
                  <line x1="390" y1="20" x2="350" y2="290" />
                </g>

                {/* Freeway Labels */}
                <text x="390" y="70" fill="#64748b" fontSize="8" fontWeight="bold">I-635</text>
                <text x="245" y="305" fill="#64748b" fontSize="8" fontWeight="bold">I-30</text>
                <text x="290" y="80" fill="#64748b" fontSize="8" fontWeight="bold">I-35E</text>
                <text x="375" y="160" fill="#64748b" fontSize="8" fontWeight="bold">US-75</text>

                {/* Service Regions Boundaries */}
                {REGIONS_DATA.map((region) => {
                  const isSelected = selectedRegionId === region.id;
                  const isHovered = hoveredRegionId === region.id;
                  const isHQ = region.id === 'peachtree-hq';

                  return (
                    <g key={region.id} className="cursor-pointer">
                      <path
                        d={region.svgPath}
                        fill={
                          isSelected
                            ? '#2563eb'
                            : isHovered
                            ? '#93c5fd'
                            : isHQ
                            ? '#dbeafe'
                            : '#ffffff'
                        }
                        fillOpacity={isSelected ? 0.9 : isHovered ? 0.8 : 0.85}
                        stroke={isSelected ? '#1d4ed8' : isHovered ? '#3b82f6' : '#cbd5e1'}
                        strokeWidth={isSelected ? 2.5 : 1.2}
                        onClick={() => setSelectedRegionId(region.id)}
                        onMouseEnter={() => setHoveredRegionId(region.id)}
                        onMouseLeave={() => setHoveredRegionId(null)}
                        className="transition-all duration-150"
                      />
                      
                      {/* Region Text Labels */}
                      <text
                        x={region.labelX}
                        y={region.labelY}
                        textAnchor="middle"
                        fill={isSelected ? '#ffffff' : '#1e293b'}
                        fontSize="10"
                        fontWeight={isSelected ? 'bold' : '600'}
                        pointerEvents="none"
                      >
                        {region.name.split('&')[0].trim()}
                      </text>
                    </g>
                  );
                })}

                {/* Headquarters Pin at 3918 Peachtree St. */}
                <g transform="translate(485, 305)" pointerEvents="none">
                  <circle cx="0" cy="0" r="8" fill="#d97706" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="0" cy="0" r="3" fill="#ffffff" />
                  {/* Pin Flag */}
                  <rect x="10" y="-12" width="105" height="18" rx="3" fill="#0f172a" fillOpacity="0.9" />
                  <text x="15" y="1" fill="#fef08a" fontSize="8.5" fontWeight="bold">
                    HQ: 3918 Peachtree
                  </text>
                </g>

                {/* White Rock Lake */}
                <path
                  d="M 430 220 Q 445 240 435 265 Q 425 280 430 295"
                  stroke="#38bdf8"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
                <text x="445" y="255" fill="#0284c7" fontSize="7.5" fontStyle="italic" fontWeight="600">
                  White Rock Lake
                </text>
              </svg>

              {/* Bottom Municipal Label */}
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[11px] text-slate-600 bg-white/95 px-3 py-1.5 rounded border border-slate-200">
                <span>Dallas, Collin & Rockwall Counties</span>
                <span className="font-semibold text-blue-700">License #TACLA17853E</span>
              </div>
            </div>

          </div>

          {/* Region Detailed Inspector Panel (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-xl p-6 sm:p-7 border border-slate-300 shadow-sm flex flex-col justify-between">
            <div>
              
              <div className="flex items-center justify-between mb-1 pb-2 border-b border-slate-100">
                <span className="text-xs font-bold text-blue-800 uppercase tracking-wider">
                  {selectedRegion.quadrant}
                </span>
                <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Active Service Area
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-950 font-display mt-2">
                {selectedRegion.name}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed mt-2">
                {selectedRegion.description}
              </p>

              {/* Key Service Metrics */}
              <div className="grid grid-cols-2 gap-3 my-4">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-1.5 text-slate-600 text-[11px] mb-0.5">
                    <Clock className="w-3.5 h-3.5 text-blue-700" />
                    <span>Average Arrival</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900 block">
                    {selectedRegion.avgArrival}
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-1.5 text-slate-600 text-[11px] mb-0.5">
                    <Truck className="w-3.5 h-3.5 text-blue-700" />
                    <span>Mobile Trucks</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900 block">
                    {selectedRegion.trucksAssigned} On-Call Fleet
                  </span>
                </div>
              </div>

              {/* Neighborhoods & ZIPs */}
              <div className="space-y-2.5 text-xs">
                <div>
                  <span className="font-bold text-slate-800 block mb-1">Key Neighborhoods:</span>
                  <div className="flex flex-wrap gap-1 text-slate-700">
                    {selectedRegion.neighborhoods.map((n, i) => (
                      <span key={i} className="bg-slate-100 px-2 py-0.5 rounded text-[11px] border border-slate-200">
                        {n}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-bold text-slate-800 block mb-0.5">Zip Codes Served:</span>
                  <span className="text-[11px] text-slate-600 font-mono">
                    {selectedRegion.zipCodes.join(', ')}
                  </span>
                </div>

                <div className="pt-1">
                  <span className="font-bold text-slate-800 block mb-1">Common Calls in this Sector:</span>
                  <ul className="space-y-1 text-[11px] text-slate-700">
                    {selectedRegion.popularServices.map((svc, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>{svc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

            {/* Direct CTA */}
            <div className="pt-5 mt-5 border-t border-slate-200 space-y-2.5">
              <button
                onClick={() => onRequestQuoteInArea(selectedRegion.name)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded-md transition-colors cursor-pointer shadow-xs"
              >
                <span>Request Service in {selectedRegion.name.split('(')[0].trim()}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  No extra mileage surcharge in Dallas County
                </span>
                <a href="tel:2143811127" className="text-blue-700 hover:underline font-bold">
                  (214) 381-1127
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
