import React from 'react';
import { Users, Globe2, BarChart2, ShoppingBag, Mail, MessageSquare } from 'lucide-react';
import { Card } from '../ui/Card';

const features = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Contact Management",
    description: "Organize and track all your customer interactions in one place. Build stronger relationships with detailed customer profiles."
  },
  {
    icon: <Globe2 className="h-8 w-8 text-primary" />,
    title: "Social Media Management",
    description: "Schedule and manage posts across all platforms. Engage with your audience and track performance metrics."
  },
  {
    icon: <ShoppingBag className="h-8 w-8 text-primary" />,
    title: "Local Advertising",
    description: "Promote your business with targeted local advertising. Reach customers in your community effectively."
  },
  {
    icon: <Mail className="h-8 w-8 text-primary" />,
    title: "Email Marketing",
    description: "Create and send personalized email campaigns. Nurture leads with automated workflows and tracking."
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-primary" />,
    title: "Analytics & Insights",
    description: "Make data-driven decisions with comprehensive analytics. Track ROI and measure campaign success."
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    title: "AI Chatbot",
    description: "Engage with customers 24/7 using our intelligent chatbot. Automate responses and qualify leads."
  }
];

export const FeatureSection = () => {
  return (
    <section id="features" className="py-20 bg-dark-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Everything You Need to Succeed</h2>
          <p className="text-xl text-gray-400">Powerful tools designed specifically for local businesses</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:scale-105 transition-transform duration-300">
              <div className="p-6">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};