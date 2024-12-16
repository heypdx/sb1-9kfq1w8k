import React, { useState } from 'react';
import { Plus, Mail, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CampaignSections } from '../components/email/CampaignSections';
import { EmailAnalytics } from '../components/email/EmailAnalytics';
import { EmailTemplates } from '../components/email/EmailTemplates';
import { EmailSubscribers } from '../components/email/EmailSubscribers';

const EmailMarketing = () => {
  const [activeSection, setActiveSection] = useState<'all' | 'drafts' | 'scheduled' | 'sent'>('all');

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Email Marketing</h1>
          <p className="text-gray-400">Create and manage your email campaigns</p>
        </div>
        <div className="flex space-x-3">
          <Link
            to="/email-marketing/template/create"
            className="flex items-center space-x-2 bg-dark-lighter text-white px-4 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
          >
            <Plus className="h-5 w-5" />
            <span>New Template</span>
          </Link>
          <Link
            to="/email-marketing/campaign/new"
            className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light"
          >
            <Mail className="h-5 w-5" />
            <span>New Campaign</span>
          </Link>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveSection('all')}
            className={`px-4 py-2 ${
              activeSection === 'all'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-400 hover:text-primary'
            }`}
          >
            All Campaigns
          </button>
          <button
            onClick={() => setActiveSection('drafts')}
            className={`px-4 py-2 ${
              activeSection === 'drafts'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-400 hover:text-primary'
            }`}
          >
            Drafts
          </button>
          <button
            onClick={() => setActiveSection('scheduled')}
            className={`px-4 py-2 ${
              activeSection === 'scheduled'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-400 hover:text-primary'
            }`}
          >
            Scheduled
          </button>
          <button
            onClick={() => setActiveSection('sent')}
            className={`px-4 py-2 ${
              activeSection === 'sent'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-400 hover:text-primary'
            }`}
          >
            Sent
          </button>
        </div>
        <button className="flex items-center space-x-2 text-gray-400 hover:text-primary">
          <Filter className="h-5 w-5" />
          <span>Filter</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CampaignSections activeSection={activeSection} />
        <EmailAnalytics />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <EmailTemplates />
        <EmailSubscribers />
      </div>
    </div>
  );
};

export default EmailMarketing;