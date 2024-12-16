import React from 'react';
import { Card } from '../ui/Card';
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
      title: "Social Post Published",
      description: "New product announcement posted on Twitter",
      time: "Yesterday"
    }
  ];

  return (
    <Card>
      <h2 className="text-xl font-semibold mb-4 text-white">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <ActivityItem key={index} {...activity} />
        ))}
      </div>
    </Card>
  );
};