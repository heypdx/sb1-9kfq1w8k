import React from 'react';

interface TaskItemProps {
  title: string;
  due: string;
  priority: 'high' | 'medium' | 'low';
}

export const TaskItem: React.FC<TaskItemProps> = ({ title, due, priority }) => {
  const priorityColors = {
    high: 'bg-red-900/50 text-red-300',
    medium: 'bg-yellow-900/50 text-yellow-300',
    low: 'bg-green-900/50 text-green-300'
  };

  return (
    <div className="flex items-center justify-between p-3 bg-dark-lighter rounded-lg">
      <div className="flex items-center space-x-3">
        <input type="checkbox" className="rounded bg-dark border-dark-lighter text-primary" />
        <span className="text-gray-300">{title}</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-400">{due}</span>
        <span className={`text-xs px-2 py-1 rounded-full ${priorityColors[priority]}`}>
          {priority}
        </span>
      </div>
    </div>
  );
};