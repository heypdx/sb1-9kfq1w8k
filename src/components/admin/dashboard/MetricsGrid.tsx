import React from 'react';
import { Users, MessageSquare, BarChart2, Target } from 'lucide-react';
import { MetricCard } from './MetricCard';

export const MetricsGrid = () => {
  const metrics = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Total Users",
      value: "1,234",
      change: "+12%"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: "Active Campaigns",
      value: "23",
      change: "+5%"
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-primary" />,
      title: "Social Engagement",
      value: "89%",
      change: "+7%"
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Ad Performance",
      value: "95%",
      change: "+15%"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
};