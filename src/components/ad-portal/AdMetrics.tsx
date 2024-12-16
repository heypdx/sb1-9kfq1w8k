import React from 'react';
import { ShoppingBag, Users, Target, TrendingUp } from 'lucide-react';
import { Card } from '../ui/Card';

export const AdMetrics = () => {
  const metrics = [
    {
      title: 'Active Ads',
      value: '3',
      change: '+1 this month',
      icon: <ShoppingBag className="h-6 w-6 text-primary" />
    },
    {
      title: 'Total Reach',
      value: '30,000',
      change: 'Households',
      icon: <Users className="h-6 w-6 text-primary" />
    },
    {
      title: 'Target Areas',
      value: '5',
      change: 'Portland Districts',
      icon: <Target className="h-6 w-6 text-primary" />
    },
    {
      title: 'ROI Estimate',
      value: '287%',
      change: '+12.5% vs last month',
      icon: <TrendingUp className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <Card key={index}>
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              {metric.icon}
            </div>
            <span className="text-primary text-sm">{metric.change}</span>
          </div>
          <h3 className="text-gray-400 text-sm">{metric.title}</h3>
          <p className="text-2xl font-bold text-white">{metric.value}</p>
        </Card>
      ))}
    </div>
  );
};