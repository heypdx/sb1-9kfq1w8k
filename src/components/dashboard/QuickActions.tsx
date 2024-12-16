import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, BarChart2, MessageSquare, Mail, ArrowRight, UserPlus } from 'lucide-react';
import { Card } from '../ui/Card';

export const QuickActions = () => {
  const actions = [
    {
      icon: <UserPlus className="h-5 w-5" />,
      label: "Lead Generator",
      path: "/leads",
      color: "text-green-500"
    },
    {
      icon: <Target className="h-5 w-5" />,
      label: "Ad Portal",
      path: "/ad-portal",
      color: "text-purple-500"
    },
    {
      icon: <Users className="h-5 w-5" />,
      label: "Contacts",
      path: "/contacts",
      color: "text-blue-500"
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      label: "Campaigns",
      path: "/email-marketing",
      color: "text-orange-500"
    }
  ];

  return (
    <Card>
      <h2 className="text-xl font-semibold mb-4 text-white">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <Link
            key={index}
            to={action.path}
            className="flex items-center space-x-3 p-4 bg-dark-lighter rounded-lg hover:bg-primary/10 transition-colors group"
          >
            <div className={`p-2 rounded-lg bg-dark ${action.color}`}>
              {action.icon}
            </div>
            <span className="text-gray-300 group-hover:text-primary">{action.label}</span>
          </Link>
        ))}
      </div>
    </Card>
  );
};