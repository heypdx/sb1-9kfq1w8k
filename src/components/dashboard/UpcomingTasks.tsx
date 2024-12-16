import React from 'react';
import { Card } from '../ui/Card';
import { TaskItem } from './TaskItem';

export const UpcomingTasks = () => {
  const tasks = [
    {
      title: "Review Social Media Strategy",
      due: "Today",
      priority: "high" as const
    },
    {
      title: "Follow up with Leads",
      due: "Tomorrow",
      priority: "medium" as const
    },
    {
      title: "Prepare Monthly Report",
      due: "In 2 days",
      priority: "low" as const
    }
  ];

  return (
    <Card>
      <h2 className="text-xl font-semibold mb-4 text-white">Upcoming Tasks</h2>
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <TaskItem key={index} {...task} />
        ))}
      </div>
    </Card>
  );
};