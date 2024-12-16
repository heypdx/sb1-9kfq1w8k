import React, { useState } from 'react';
import { Calendar, Users, Clock, Send } from 'lucide-react';
import { Card } from '../ui/Card';
import { useNavigate } from 'react-router-dom';

export const NewCampaignForm = () => {
  const navigate = useNavigate();
  const [campaign, setCampaign] = useState({
    name: '',
    subject: '',
    template: '',
    audience: '',
    scheduledDate: '',
    scheduledTime: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle campaign creation
    navigate('/email-marketing');
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Campaign Name
            </label>
            <input
              type="text"
              value={campaign.name}
              onChange={(e) => setCampaign({ ...campaign, name: e.target.value })}
              className="w-full px-4 py-2 bg-dark-lighter border border-dark-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
              placeholder="Enter campaign name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Subject
            </label>
            <input
              type="text"
              value={campaign.subject}
              onChange={(e) => setCampaign({ ...campaign, subject: e.target.value })}
              className="w-full px-4 py-2 bg-dark-lighter border border-dark-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
              placeholder="Enter email subject"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Select Template
            </label>
            <select
              value={campaign.template}
              onChange={(e) => setCampaign({ ...campaign, template: e.target.value })}
              className="w-full px-4 py-2 bg-dark-lighter border border-dark-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
            >
              <option value="">Select a template</option>
              <option value="welcome">Welcome Email</option>
              <option value="newsletter">Newsletter Template</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Select Audience
            </label>
            <select
              value={campaign.audience}
              onChange={(e) => setCampaign({ ...campaign, audience: e.target.value })}
              className="w-full px-4 py-2 bg-dark-lighter border border-dark-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
            >
              <option value="">Select audience</option>
              <option value="all">All Subscribers</option>
              <option value="active">Active Users</option>
              <option value="new">New Subscribers</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Schedule Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="date"
                  value={campaign.scheduledDate}
                  onChange={(e) => setCampaign({ ...campaign, scheduledDate: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 bg-dark-lighter border border-dark-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Schedule Time
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="time"
                  value={campaign.scheduledTime}
                  onChange={(e) => setCampaign({ ...campaign, scheduledTime: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 bg-dark-lighter border border-dark-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/email-marketing')}
            className="px-6 py-2 bg-dark-lighter text-gray-300 rounded-lg hover:text-primary transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex items-center space-x-2 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors"
          >
            <Send className="h-5 w-5" />
            <span>Create Campaign</span>
          </button>
        </div>
      </form>
    </Card>
  );
};