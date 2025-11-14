import React from 'react';
    import HeroSection from '../components/HeroSection';
    import AboutPreview from '../components/AboutPreview';
    import ServicesOverview from '../components/ServicesOverview';
    import WhyChooseDoctor from '../components/WhyChooseDoctor';
    import Awards from '../components/Awards';
    import Testimonials from '../components/Testimonials';
    import Publications from '../components/Publications';
    import ContactPreview from '../components/ContactPreview';
    import CTASection from '../components/CTASection';

    const Homepage = () => {
      return (
        <div className="min-h-screen bg-white font-inter">
          {/* Hero Section - Light gradient background */}
          <HeroSection />

          {/* Services Overview - Different gradient */}
          <ServicesOverview />

          {/* Why Choose Doctor - Light gray background */}
          <WhyChooseDoctor />

          {/* Awards - White to light gradient */}
          <Awards />

          {/* Testimonials - Colored background */}
          <Testimonials />

          {/* Publications - White background */}
          <Publications />

          {/* CTA Section - Bold gradient */}
          <CTASection />

          {/* Contact Preview - Final section with colored background */}
          <ContactPreview />
        </div>
      );
    };

    export default Homepage;