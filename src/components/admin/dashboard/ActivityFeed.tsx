import React from 'react';
import { ActivityItem } from './ActivityItem';

export const ActivityFeed = () => {
  const activities = [
    {
      title: "New Contact Added",
      description: "John Doe was added to your contacts",
      time: "2 hours ago"
    },
    {
      title: "Campaign Completed",
      description: "Summer Sale campaign ended with 85% success rate",
      time: "5 hours ago"
    },
    {
      title: "Ad Campaign Launched",
      description: "New local advertising campaign started",
      time: "Yesterday"
    }
  ];

  return (
    <div className="bg-dark-card p-6 rounded-lg shadow-sm border border-dark-lighter">
      <h2 className="text-xl font-semibold mb-4 text-white">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <ActivityItem key={index} {...activity} />
        ))}
      </div>
    </div>
  );
};