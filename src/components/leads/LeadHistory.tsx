import React from 'react';
import { Calendar, Users, ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';

export const LeadHistory = () => {
  const campaigns = [
    {
      id: 1,
      name: 'Summer Promotion',
      audience: 'Local Residents',
      date: '2024-03-15',
      leads: 234,
      status: 'active'
    },
    {
      id: 2,
      name: 'Business Network',
      audience: 'Business Professionals',
      date: '2024-03-10',
      leads: 156,
      status: 'completed'
    }
  ];

  return (
    <Card>
      <h2 className="text-xl font-semibold text-white mb-6">Campaign History</h2>
      <div className="space-y-4">
        {campaigns.map(campaign => (
          <div
            key={campaign.id}
            className="flex items-center justify-between p-4 bg-dark-lighter rounded-lg hover:bg-primary/10 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-white">{campaign.name}</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Users className="h-4 w-4" />
                  <span>{campaign.audience}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white font-medium">{campaign.leads} leads</p>
              <p className="text-sm text-gray-400">{campaign.date}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};