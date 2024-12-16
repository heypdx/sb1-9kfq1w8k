import React from 'react';
import { Users, MessageSquare, BarChart2, Calendar } from 'lucide-react';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { StatCard } from '../components/dashboard/StatCard';
import { ActivityFeed } from '../components/dashboard/ActivityFeed';
import { UpcomingTasks } from '../components/dashboard/UpcomingTasks';

const Dashboard = () => {
  const stats = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Total Contacts",
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
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "Scheduled Posts",
      value: "45",
      change: "+18%"
    }
  ];

  return (
    <div className="space-y-8">
      <DashboardHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ActivityFeed />
        <UpcomingTasks />
      </div>
    </div>
  );
};

export default Dashboard;