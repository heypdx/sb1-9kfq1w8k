import React from 'react';

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ icon, title, value, change }) => {
  return (
    <div className="bg-dark-card p-6 rounded-lg shadow-sm border border-dark-lighter hover:border-primary/30 transition-all duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 rounded-lg bg-dark-lighter">
          {icon}
        </div>
        <span className="text-primary text-sm font-semibold">{change}</span>
      </div>
      <h3 className="text-gray-400 text-sm">{title}</h3>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
};