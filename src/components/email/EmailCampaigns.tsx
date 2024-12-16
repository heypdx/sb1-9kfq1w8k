import React from 'react';
import { Mail, Clock, CheckCircle } from 'lucide-react';
import { Card } from '../ui/Card';

interface Campaign {
  id: string;
  name: string;
  status: 'draft' | 'scheduled' | 'sent';
  subject: string;
  scheduledFor?: string;
  sentAt?: string;
  stats?: {
    opened: number;
    clicked: number;
    total: number;
  };
}

export const EmailCampaigns = () => {
  const campaigns: Campaign[] = [
    {
      id: '1',
      name: 'Welcome Series',
      status: 'draft',
      subject: 'Welcome to Shop With Local!',
      stats: { opened: 0, clicked: 0, total: 0 }
    },
    {
      id: '2',
      name: 'Monthly Newsletter',
      status: 'scheduled',
      subject: 'March Updates & Offers',
      scheduledFor: '2024-03-25 10:00',
      stats: { opened: 0, clicked: 0, total: 0 }
    },
    {
      id: '3',
      name: 'Special Promotion',
      status: 'sent',
      subject: 'Limited Time Offer!',
      sentAt: '2024-03-15 14:30',
      stats: { opened: 450, clicked: 123, total: 1000 }
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'draft':
        return <Mail className="h-4 w-4 text-gray-400" />;
      case 'scheduled':
        return <Clock className="h-4 w-4 text-blue-400" />;
      case 'sent':
        return <CheckCircle className="h-4 w-4 text-green-400" />;
      default:
        return null;
    }
  };

  return (
    <Card>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white">Email Campaigns</h2>
      </div>

      <div className="space-y-4">
        {campaigns.map(campaign => (
          <div
            key={campaign.id}
            className="p-4 bg-dark-lighter rounded-lg hover:border-primary/30 transition-all duration-200"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="flex items-center space-x-2">
                  {getStatusIcon(campaign.status)}
                  <h3 className="font-medium text-white">{campaign.name}</h3>
                </div>
                <p className="text-sm text-gray-400 mt-1">{campaign.subject}</p>
              </div>
              <div className="text-right">
                {campaign.status === 'scheduled' && (
                  <p className="text-sm text-blue-400">
                    Scheduled for {campaign.scheduledFor}
                  </p>
                )}
                {campaign.status === 'sent' && (
                  <div>
                    <p className="text-sm text-gray-400">Sent {campaign.sentAt}</p>
                    <p className="text-sm text-green-400 mt-1">
                      {campaign.stats?.opened} opens • {campaign.stats?.clicked} clicks
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {campaigns.length === 0 && (
          <div className="text-center py-8">
            <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-400">No campaigns found</p>
          </div>
        )}
      </div>
    </Card>
  );
};