import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBadges } from './components/TrustBadges';
import { WhyChooseUs } from './components/WhyChooseUs';
import { InteractiveServiceMap } from './components/InteractiveServiceMap';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { SavingsCalculator } from './components/SavingsCalculator';
import { ReviewsSection } from './components/ReviewsSection';
import { ServiceAgreementSection } from './components/ServiceAgreementSection';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EstimateModal } from './components/EstimateModal';
import { Phone, Calendar } from 'lucide-react';

export default function App() {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState<boolean>(false);
  const [selectedServiceForEstimate, setSelectedServiceForEstimate] = useState<string>(
    'Air Conditioning Installation & Service'
  );
  const [calculatorNotes, setCalculatorNotes] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenEstimate = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedServiceForEstimate(serviceTitle);
    }
    setIsEstimateModalOpen(true);
  };

  const handleCalculatorSpecs = (specs: string) => {
    setCalculatorNotes(specs);
    setSelectedServiceForEstimate('Air Conditioning Installation & Service');
    setIsEstimateModalOpen(true);
  };

  const handleAreaQuote = (regionName: string) => {
    setCalculatorNotes(`Service requested in: ${regionName}`);
    setIsEstimateModalOpen(true);
  };

  return (
    <div id="top" className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-sky-600 selection:text-white">
      {/* Sleek 3-Zone Header */}
      <Header
        onNavigate={scrollToSection}
        onRequestEstimate={() => handleOpenEstimate()}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onRequestEstimate={() => handleOpenEstimate()}
          onExploreServices={() => scrollToSection('services')}
          onViewReviews={() => scrollToSection('reviews')}
        />

        {/* 2. Trust Credentials Banner */}
        <TrustBadges />

        {/* 3. Compelling Why Choose Us Section */}
        <WhyChooseUs
          onRequestEstimate={() => handleOpenEstimate()}
          onExploreServices={() => scrollToSection('services')}
        />

        {/* 4. Interactive Dallas Service Area Map & Regional Boundaries */}
        <InteractiveServiceMap
          onRequestQuoteInArea={handleAreaQuote}
        />

        {/* 5. Complete HVAC Services Showcase */}
        <ServicesSection
          onSelectServiceForEstimate={(serviceTitle) => handleOpenEstimate(serviceTitle)}
        />

        {/* 6. About Us & 5 Specialized Departments */}
        <AboutSection />

        {/* 7. Heat Load & Energy Savings Calculator */}
        <SavingsCalculator
          onQuoteWithSpecs={handleCalculatorSpecs}
        />

        {/* 8. Dedicated Dallas Customer Reviews Hub */}
        <ReviewsSection />

        {/* 9. Biannual Service Agreement Details */}
        <ServiceAgreementSection
          onRequestAgreement={() => handleOpenEstimate('Biannual Service Agreement')}
        />

        {/* 10. Neighborhood Service Directory */}
        <ServiceAreaSection />

        {/* 11. Contact & Free Estimate Form */}
        <ContactSection
          initialService={selectedServiceForEstimate}
          prefillMessage={calculatorNotes}
        />
      </main>

      {/* Floating 24/7 Mobile Quick-Action Drawer */}
      <div className="sm:hidden fixed bottom-3 left-3 right-3 z-30 flex items-center gap-2 bg-slate-900/95 backdrop-blur-md p-2 rounded-xl border border-slate-700 shadow-xl">
        <a
          href="tel:2143811127"
          className="flex-1 flex items-center justify-center gap-2 py-2 px-3 text-xs font-bold text-white bg-slate-800 rounded-lg"
        >
          <Phone className="w-3.5 h-3.5 text-sky-400" />
          <span>(214) 381-1127</span>
        </a>
        <button
          onClick={() => handleOpenEstimate()}
          className="flex-1 flex items-center justify-center gap-2 py-2 px-3 text-xs font-bold text-white bg-sky-600 rounded-lg cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Free Estimate</span>
        </button>
      </div>

      {/* Quiet Footer */}
      <Footer onNavClick={scrollToSection} />

      {/* Universal Estimate Request Modal */}
      <EstimateModal
        isOpen={isEstimateModalOpen}
        onClose={() => setIsEstimateModalOpen(false)}
        preselectedService={selectedServiceForEstimate}
      />
    </div>
  );
}
