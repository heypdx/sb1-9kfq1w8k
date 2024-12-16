import React from 'react';

interface AnalyticsCardProps {
  title: string;
  icon: React.ReactNode;
  chart: React.ReactNode;
}

export const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ title, icon, chart }) => {
  return (
    <div className="bg-dark-card p-6 rounded-lg shadow-sm border border-dark-lighter">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <div className="text-primary">{icon}</div>
      </div>
      {chart}
    </div>
  );
};