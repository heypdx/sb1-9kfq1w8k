import React, { useState } from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { Card } from '../components/ui/Card';
import { EmailTemplateForm } from '../components/email/EmailTemplateForm';
import { EmailPreview } from '../components/email/EmailPreview';
import { useEmailTemplate } from '../hooks/useEmailTemplate';
import type { EmailTemplate } from '../types/email';

const EmailTemplateCreator = () => {
  const { generateContent, saveTemplate, loading, error } = useEmailTemplate();
  const [template, setTemplate] = useState<EmailTemplate>({
    name: '',
    subject: '',
    content: '',
    prompt: ''
  });

  const handleGenerate = async () => {
    try {
      const content = await generateContent(template.prompt);
      setTemplate(prev => ({ ...prev, content }));
    } catch (error) {
      console.error('Error generating content:', error);
    }
  };

  const handleSave = async () => {
    try {
      await saveTemplate(template);
      // Handle successful save
    } catch (error) {
      console.error('Error saving template:', error);
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Create Email Template"
        description="Design your email template with AI assistance"
        backTo="/email-marketing"
        backLabel="Back to Email Marketing"
      />

      {error && (
        <div className="p-4 bg-red-900/50 border border-red-500/50 rounded-lg">
          <p className="text-red-300">{error.message}</p>
        </div>
      )}

      <Card className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <EmailTemplateForm
            template={template}
            onChange={setTemplate}
            onGenerate={handleGenerate}
            onSave={handleSave}
            loading={loading}
          />
          <EmailPreview content={template.content} />
        </div>
      </Card>
    </div>
  );
};

export default EmailTemplateCreator;