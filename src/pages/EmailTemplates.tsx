import React, { useState } from 'react';
import { EmailTemplateCreator } from '../components/email/EmailTemplateCreator';
import { EmailTemplateList } from '../components/email/EmailTemplateList';
import { useEmailMarketing } from '../hooks/useEmailMarketing';

const EmailTemplates = () => {
  const { createTemplate, loading, error } = useEmailMarketing();
  const [templates, setTemplates] = useState([
    {
      id: '1',
      name: 'Welcome Email',
      subject: 'Welcome to Shop With Local!',
      createdAt: '2024-03-15'
    }
  ]);

  const handleSaveTemplate = async (template) => {
    try {
      await createTemplate(template);
      // Update templates list
      setTemplates(prev => [...prev, { ...template, id: Date.now().toString(), createdAt: new Date().toISOString() }]);
    } catch (err) {
      console.error('Error saving template:', err);
    }
  };

  const handleEditTemplate = (id: string) => {
    // Implement edit functionality
  };

  const handleDeleteTemplate = (id: string) => {
    setTemplates(prev => prev.filter(template => template.id !== id));
  };

  const handleDuplicateTemplate = (id: string) => {
    const template = templates.find(t => t.id === id);
    if (template) {
      setTemplates(prev => [
        ...prev,
        {
          ...template,
          id: Date.now().toString(),
          name: `${template.name} (Copy)`,
          createdAt: new Date().toISOString()
        }
      ]);
    }
  };

  return (
    <div className="space-y-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white">Email Templates</h1>
        <p className="text-gray-400">Create and manage your email templates using AI</p>
      </header>

      <EmailTemplateCreator onSave={handleSaveTemplate} />

      <EmailTemplateList
        templates={templates}
        onEdit={handleEditTemplate}
        onDelete={handleDeleteTemplate}
        onDuplicate={handleDuplicateTemplate}
      />

      {error && (
        <div className="p-4 bg-red-900/50 border border-red-500/50 rounded-lg">
          <p className="text-red-300">{error.message}</p>
        </div>
      )}
    </div>
  );
};

export default EmailTemplates;