import React from 'react';
import { Users, ShoppingBag, CreditCard, TrendingUp } from 'lucide-react';

export const AdminMetricsGrid = () => {
  const metrics = [
    {
      title: 'Total Users',
      value: '1,234',
      change: '+12.5%',
      icon: <Users className="h-6 w-6 text-primary" />
    },
    {
      title: 'Active Products',
      value: '45',
      change: '+8.2%',
      icon: <ShoppingBag className="h-6 w-6 text-primary" />
    },
    {
      title: 'Revenue',
      value: '$45,234',
      change: '+15.3%',
      icon: <CreditCard className="h-6 w-6 text-primary" />
    },
    {
      title: 'Growth Rate',
      value: '24.8%',
      change: '+4.3%',
      icon: <TrendingUp className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <div key={index} className="bg-dark-card p-6 rounded-lg shadow-sm border border-dark-lighter hover:border-primary/30 transition-all duration-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-dark-lighter">
              {metric.icon}
            </div>
            <span className="text-primary text-sm font-semibold">{metric.change}</span>
          </div>
          <h3 className="text-gray-400 text-sm">{metric.title}</h3>
          <p className="text-2xl font-bold text-white">{metric.value}</p>
        </div>
      ))}
    </div>
  );
};