import React, { useState } from 'react';
import { Layout, Mail, Clock, CheckCircle } from 'lucide-react';
import { Card } from '../ui/Card';
import { Link } from 'react-router-dom';

export const EmailTemplates = () => {
  const [activeSection, setActiveSection] = useState('all');
  const templates = [
    {
      id: 1,
      name: 'Welcome Email',
      type: 'Automated',
      status: 'active',
      lastModified: '2024-03-15'
    },
    {
      id: 2,
      name: 'Newsletter Template',
      type: 'Manual',
      status: 'draft',
      lastModified: '2024-03-10'
    }
  ];

  const filteredTemplates = templates.filter(template => {
    if (activeSection === 'all') return true;
    return template.status === activeSection;
  });

  return (
    <Card>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white">Email Templates</h2>
      </div>

      <div className="flex space-x-4 mb-6 border-b border-dark-lighter">
        <button
          onClick={() => setActiveSection('all')}
          className={`px-4 py-2 ${
            activeSection === 'all'
              ? 'text-primary border-b-2 border-primary'
              : 'text-gray-400 hover:text-primary'
          }`}
        >
          All Emails
        </button>
        <button
          onClick={() => setActiveSection('draft')}
          className={`px-4 py-2 ${
            activeSection === 'draft'
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

      <div className="space-y-4">
        {filteredTemplates.map(template => (
          <div
            key={template.id}
            className="flex items-center justify-between p-4 bg-dark-lighter rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Layout className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-white">{template.name}</h3>
                <p className="text-sm text-gray-400">{template.type}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">Last modified</p>
              <p className="text-sm text-gray-300">{template.lastModified}</p>
            </div>
          </div>
        ))}

        {filteredTemplates.length === 0 && (
          <div className="text-center py-8">
            <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-400">No templates found in this section</p>
          </div>
        )}
      </div>
    </Card>
  );
};