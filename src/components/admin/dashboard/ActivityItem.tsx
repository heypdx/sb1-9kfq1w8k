import React from 'react';

interface ActivityItemProps {
  title: string;
  description: string;
  time: string;
}

export const ActivityItem: React.FC<ActivityItemProps> = ({ title, description, time }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="w-2 h-2 mt-2 rounded-full bg-primary"></div>
      <div>
        <h4 className="font-medium text-white">{title}</h4>
        <p className="text-sm text-gray-400">{description}</p>
        <span className="text-xs text-gray-500">{time}</span>
      </div>
    </div>
  );
};