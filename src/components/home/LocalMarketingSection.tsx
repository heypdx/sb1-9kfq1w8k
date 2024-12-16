import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Layout, CheckSquare } from 'lucide-react';
import { Button } from '../ui/Button';

export const LocalMarketingSection = () => {
  const steps = [
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Market Research",
      description: "We identify the best neighborhoods for your ad campaign. Targeted marketing made easy—maximize your reach with expert insights!"
    },
    {
      icon: <Layout className="h-8 w-8 text-primary" />,
      title: "Choose Your Ad Size",
      description: "Customizable advertising options to fit your budget and goals. From compact spaces to full-page features!"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Submit Your Details",
      description: "Provide your logo, contact info, and offer. We'll handle the rest with our professional design team!"
    },
    {
      icon: <CheckSquare className="h-8 w-8 text-primary" />,
      title: "Payment & Launch",
      description: "Checkout and watch as your business reaches thousands of potential customers. We'll provide proof every step of the way!"
    }
  ];

  const benefits = [
    "Guaranteed Visibility: Exclusive distribution to high-income households",
    "Affordable Pricing: Only $500 per ad space for 10,000 postcards",
    "Stress-Free Process: We handle everything from print to delivery",
    "Professional Design: We can handle everything with just your logo and photos"
  ];

  return (
    <section className="py-20 bg-dark-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Feature Your Business Today!</h2>
          <p className="text-xl text-primary mb-2">Reach Up To 10,000 Households & Businesses Locally</p>
          <p className="text-gray-400">Affordable advertising that delivers results to Portland's top neighborhoods.</p>
          <Link to="/marketplace">
            <Button variant="primary" className="mt-8 text-lg">
              Secure Your Spot Today
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="bg-dark p-6 rounded-xl border border-dark-lighter hover:border-primary/30 transition-all duration-300">
              <div className="mb-4 p-3 bg-primary/10 rounded-lg inline-block">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Step {index + 1}</h3>
              <h4 className="text-lg font-medium mb-2 text-primary">{step.title}</h4>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-dark via-dark to-primary/10 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Shop With Local?</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckSquare className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link to="/marketplace" className="inline-block mt-8">
                <Button variant="primary">View All Services</Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80"
                alt="Local Marketing"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};