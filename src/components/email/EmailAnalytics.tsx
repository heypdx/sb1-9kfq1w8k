import React from 'react';
import { TrendingUp, Mail, MousePointerClick, Users } from 'lucide-react';
import { Card } from '../ui/Card';

export const EmailAnalytics = () => {
  const metrics = [
    {
      title: 'Open Rate',
      value: '45.8%',
      change: '+5.2%',
      icon: <Mail className="h-5 w-5 text-primary" />
    },
    {
      title: 'Click Rate',
      value: '12.3%',
      change: '+2.1%',
      icon: <MousePointerClick className="h-5 w-5 text-primary" />
    },
    {
      title: 'Subscribers',
      value: '2,543',
      change: '+123',
      icon: <Users className="h-5 w-5 text-primary" />
    },
    {
      title: 'Growth Rate',
      value: '8.7%',
      change: '+1.2%',
      icon: <TrendingUp className="h-5 w-5 text-primary" />
    }
  ];

  return (
    <Card>
      <h2 className="text-xl font-semibold text-white mb-6">Email Analytics</h2>
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-dark-lighter p-4 rounded-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 rounded-lg bg-primary/10">
                {metric.icon}
              </div>
              <span className="text-primary text-sm">{metric.change}</span>
            </div>
            <p className="text-sm text-gray-400">{metric.title}</p>
            <p className="text-xl font-bold text-white">{metric.value}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};