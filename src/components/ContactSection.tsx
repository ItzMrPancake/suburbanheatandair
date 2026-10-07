import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2, Send, AlertCircle } from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
  prefillMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = 'Air Conditioning Installation & Service',
  prefillMessage = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: initialService,
    propertyType: 'Residential',
    preferredTiming: 'Flexible / Next Available',
    message: prefillMessage,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      setErrorMsg('Please enter a valid telephone number.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceInterest: 'Air Conditioning Installation & Service',
      propertyType: 'Residential',
      preferredTiming: 'Flexible / Next Available',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Info, Locations, Direct Staff Emails */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400">Reach Our Dallas Team</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1 font-display">
                Contact Suburban Heating & Air
              </h2>
              <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                Whether you need a free estimate for a new Carrier® installation, an emergency repair dispatch, or regular seasonal maintenance, our local team is ready to help 24/7.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              
              {/* Phone Card */}
              <a
                href="tel:2143811127"
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-sky-500 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-600/20 text-sky-400 flex items-center justify-center shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Phone Line (24/7 Live Human Response)</span>
                  <span className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                    (214) 381-1127
                  </span>
                  <span className="text-[11px] text-emerald-400 block mt-0.5">Monday – Sunday, 24 Hours a Day</span>
                </div>
              </a>

              {/* Address Card */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <div className="w-10 h-10 rounded-lg bg-sky-600/20 text-sky-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Headquarters & In-House Metal Shop</span>
                  <span className="text-sm font-bold text-white">Suburban Heating & Air Conditioning Co</span>
                  <span className="text-xs text-slate-300 block">3918 Peachtree St. Dallas, TX 75227</span>
                  <span className="text-[11px] text-slate-400 block mt-1">State License: TACLA17853E</span>
                </div>
              </div>

              {/* Email Directory Card */}
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 pb-2 border-b border-slate-700">
                  <Mail className="w-4 h-4 text-sky-400" />
                  <span>Direct Department Contacts</span>
                </div>
                <div className="grid grid-cols-1 gap-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Charles Owens (Sales / Design):</span>
                    <a href="mailto:charles@suburbanheatandair.com" className="text-sky-300 hover:underline">
                      charles@suburbanheatandair.com
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Tracy (Office / Dispatch):</span>
                    <a href="mailto:tracy@suburbanheatandair.com" className="text-sky-300 hover:underline">
                      tracy@suburbanheatandair.com
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Stacy (Accounts & Billing):</span>
                    <a href="mailto:stacy@suburbanheatandair.com" className="text-sky-300 hover:underline">
                      stacy@suburbanheatandair.com
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* BBB Trust Callout */}
            <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 flex items-center gap-3 text-xs text-slate-300">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
              <span>A+ Rated & Accredited with the Better Business Bureau. Serving North Texas since 1967.</span>
            </div>

          </div>

          {/* Right Column: Interactive Estimate & Booking Form */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-2xl p-6 sm:p-10 shadow-2xl border border-slate-200">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-display">
                  Estimate Request Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. A member of our Dallas office will review your request and contact you at <span className="font-semibold text-slate-900">{formData.phone}</span> shortly.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 max-w-md mx-auto text-left space-y-1">
                  <div><span className="font-semibold">Service:</span> {formData.serviceInterest}</div>
                  <div><span className="font-semibold">Property:</span> {formData.propertyType}</div>
                  <div><span className="font-semibold">Urgency:</span> {formData.preferredTiming}</div>
                </div>
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={handleReset}
                    className="px-5 py-2 text-xs font-semibold text-sky-700 bg-sky-50 rounded-lg hover:bg-sky-100 cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                  <a
                    href="tel:2143811127"
                    className="px-5 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800"
                  >
                    Call Now (214) 381-1127
                  </a>
                </div>
              </div>
            ) : (
              <div>
                <div className="pb-4 mb-6 border-b border-slate-100">
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">Fast Online Booking</span>
                  <h3 className="text-2xl font-bold text-slate-900 font-display mt-0.5">
                    Request a Free Estimate or Service Visit
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Book a complimentary estimate for your next HVAC installation or schedule a prompt service call.
                  </p>
                </div>

                {errorMsg && (
                  <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Michael Anderson"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(214) 555-0199"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                      />
                    </div>
                  </div>

                  {/* Email and Property Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Property Type</label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                      >
                        <option value="Residential">Residential Single-Family</option>
                        <option value="Commercial">Commercial / Office / Retail</option>
                        <option value="Wine Room">Wine Cellar Specialty System</option>
                      </select>
                    </div>
                  </div>

                  {/* Interested In */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Interested In</label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    >
                      <option value="Air Conditioning Installation & Service">Air Conditioning Installation & Service</option>
                      <option value="Heating Repair & Installation">Heating Repair & Installation</option>
                      <option value="24/7 Emergency AC or Heating Repair">24/7 Emergency AC or Heating Repair</option>
                      <option value="Geothermal Applications">Geothermal Heating & Cooling</option>
                      <option value="Custom In-House Sheet Metal & Ductwork">Custom In-House Sheet Metal & Ductwork</option>
                      <option value="Biannual Service Agreement (Spring/Fall)">Biannual Service Agreement (Spring/Fall Maintenance)</option>
                      <option value="Commercial HVAC & Plan/Spec Jobs">Commercial HVAC & Plan/Spec Jobs</option>
                      <option value="Wine Cellar Climate Control">Wine Cellar Climate Control</option>
                    </select>
                  </div>

                  {/* Timing Preference */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Timing</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Emergency (Today)', 'Next 24-48 Hours', 'Flexible Planning'].map((timing) => (
                        <button
                          key={timing}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredTiming: timing })}
                          className={`py-2 px-2 text-[11px] font-medium rounded-lg border transition-colors cursor-pointer text-center ${
                            formData.preferredTiming === timing
                              ? 'bg-sky-50 border-sky-600 text-sky-800 font-bold'
                              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          {timing}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Message / Project Details</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about the issue, age of current system, or special requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    />
                  </div>

                  {/* reCAPTCHA disclaimer from prompt */}
                  <div className="text-[10px] text-slate-400 leading-normal">
                    This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-sky-600 rounded-lg hover:bg-sky-700 active:scale-98 transition-all shadow-md cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Free Estimate Request</span>
                  </button>

                </form>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
