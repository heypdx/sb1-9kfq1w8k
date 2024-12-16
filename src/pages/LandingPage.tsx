import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { FeatureSection } from '../components/home/FeatureSection';
import { LocalMarketingSection } from '../components/home/LocalMarketingSection';
import { CTASection } from '../components/home/CTASection';
import { TestimonialSection } from '../components/home/TestimonialSection';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeatureSection />
      <LocalMarketingSection />
      <CTASection />
      <TestimonialSection />
    </div>
  );
};

export default LandingPage;