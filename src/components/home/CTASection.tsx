import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '../ui/Button';

export const CTASection = () => {
  const benefits = [
    "Free 14-day trial",
    "No credit card required",
    "Cancel anytime",
    "24/7 support"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-dark via-dark to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Local Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of local businesses already using our platform to grow their customer base and increase revenue.
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-primary" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
          <Button variant="primary" className="text-lg px-8 py-4">
            Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};