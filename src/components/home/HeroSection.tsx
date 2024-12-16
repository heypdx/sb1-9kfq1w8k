import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-primary/10 z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Grow Your Local Business with{' '}
            <span className="text-primary">Powerful CRM</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300">
            All-in-one platform for managing customer relationships, social media, and local advertising. Built specifically for local businesses.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button variant="primary" className="text-lg px-8 py-4">
              Start Free Trial
            </Button>
            <Button variant="outline" className="text-lg px-8 py-4">
              Watch Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <p className="mt-6 text-gray-400">
            No credit card required • Free 14-day trial
          </p>
        </div>
      </div>
    </section>
  );
};