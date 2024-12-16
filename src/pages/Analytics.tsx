import React from 'react';
import { LineChart, BarChart, PieChart, TrendingUp } from 'lucide-react';
import { AnalyticsCard } from '../components/analytics/AnalyticsCard';
import { AnalyticsChart } from '../components/analytics/AnalyticsChart';
import { MetricsGrid } from '../components/analytics/MetricsGrid';

const Analytics = () => {
  return (
    <div className="space-y-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
        <p className="text-gray-600">Track your business performance and growth</p>
      </header>

      <MetricsGrid />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AnalyticsCard
          title="Revenue Growth"
          icon={<TrendingUp className="h-6 w-6 text-green-600" />}
          chart={<AnalyticsChart type="line" />}
        />
        <AnalyticsCard
          title="Customer Acquisition"
          icon={<BarChart className="h-6 w-6 text-blue-600" />}
          chart={<AnalyticsChart type="bar" />}
        />
      </div>
    </div>
  );
};

export default Analytics;