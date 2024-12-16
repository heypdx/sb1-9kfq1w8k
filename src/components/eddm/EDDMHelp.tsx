import React from 'react';
import { HelpCircle, MapPin, DollarSign, Truck } from 'lucide-react';
import { Card } from '../ui/Card';

export const EDDMHelp = () => {
  const helpItems = [
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Select Your Routes",
      description: "Choose delivery routes by drawing on the map or searching for an address"
    },
    {
      icon: <DollarSign className="h-5 w-5 text-primary" />,
      title: "Calculate Costs",
      description: "Get instant pricing based on your selected routes and mailing options"
    },
    {
      icon: <Truck className="h-5 w-5 text-primary" />,
      title: "Schedule Delivery",
      description: "Choose your preferred delivery dates and prepare your mailing"
    }
  ];

  return (
    <Card>
      <div className="flex items-center space-x-2 mb-4">
        <HelpCircle className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold text-white">Quick Help Guide</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {helpItems.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-primary/10">
                {item.icon}
              </div>
              <h3 className="font-medium text-white">{item.title}</h3>
            </div>
            <p className="text-sm text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};