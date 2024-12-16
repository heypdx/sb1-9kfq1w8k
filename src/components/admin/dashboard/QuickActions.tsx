import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, BarChart2, MessageSquare, Mail, ArrowRight } from 'lucide-react';

export const QuickActions = () => {
  const actions = [
    {
      icon: <Target className="h-5 w-5" />,
      label: "Ad Portal",
      path: "/ad-portal",
      color: "text-purple-500"
    },
    {
      icon: <Users className="h-5 w-5" />,
      label: "Manage Users",
      path: "/admin/users",
      color: "text-blue-500"
    },
    {
      icon: <BarChart2 className="h-5 w-5" />,
      label: "Analytics",
      path: "/analytics",
      color: "text-green-500"
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      label: "Campaigns",
      path: "/email-marketing",
      color: "text-orange-500"
    }
  ];

  return (
    <div className="bg-dark-card p-6 rounded-lg shadow-sm border border-dark-lighter">
      <h2 className="text-xl font-semibold mb-4 text-white">Quick Actions</h2>
      
      {/* Featured EDDM Button */}
      <Link
        to="/admin/eddm"
        className="flex items-center justify-between p-4 mb-6 bg-primary/10 rounded-lg border border-primary/20 hover:bg-primary/20 transition-all group"
      >
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-primary/20">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <span className="text-primary font-semibold">USPS EDDM Tool</span>
            <p className="text-sm text-gray-400">Plan your direct mail campaigns</p>
          </div>
        </div>
        <ArrowRight className="h-5 w-5 text-primary transform group-hover:translate-x-1 transition-transform" />
      </Link>

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
    </div>
  );
};