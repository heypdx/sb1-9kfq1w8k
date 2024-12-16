import React from 'react';

interface AnalyticsChartProps {
  type: 'line' | 'bar';
}

export const AnalyticsChart: React.FC<AnalyticsChartProps> = ({ type }) => {
  return (
    <div className="h-64 bg-dark-lighter rounded-lg flex items-center justify-center">
      <p className="text-gray-400">Chart placeholder ({type})</p>
    </div>
  );
};