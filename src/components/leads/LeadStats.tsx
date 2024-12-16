import React from 'react';
import { Users, Target, BarChart2 } from 'lucide-react';
import { Card } from '../ui/Card';

export const LeadStats = () => {
  const stats = [
    {
      icon: <Users className="h-5 w-5 text-primary" />,
      label: 'Total Leads',
      value: '1,234'
    },
    {
      icon: <Target className="h-5 w-5 text-primary" />,
      label: 'Conversion Rate',
      value: '12.5%'
    },
    {
      icon: <BarChart2 className="h-5 w-5 text-primary" />,
      label: 'Growth',
      value: '+15.2%'
    }
  ];

  return (
    <Card>
      <h2 className="text-xl font-semibold text-white mb-6">Lead Statistics</h2>
      <div className="space-y-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="p-3 rounded-lg bg-primary/10">
              {stat.icon}
            </div>
            <div>
              <p className="text-sm text-gray-400">{stat.label}</p>
              <p className="text-xl font-bold text-white">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};