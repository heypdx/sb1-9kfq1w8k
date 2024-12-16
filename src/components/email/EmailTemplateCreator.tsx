import React, { useState } from 'react';
import { Wand2, Send, Save } from 'lucide-react';
import { Card } from '../ui/Card';
import { LoadingSpinner } from '../ui/LoadingSpinner';

interface EmailTemplateCreatorProps {
  onSave: (template: { name: string; subject: string; content: string }) => void;
}

export const EmailTemplateCreator: React.FC<EmailTemplateCreatorProps> = ({ onSave }) => {
  const [loading, setLoading] = useState(false);
  const [template, setTemplate] = useState({
    name: '',
    subject: '',
    content: '',
    prompt: ''
  });

  const generateEmailContent = async () => {
    setLoading(true);
    try {
      // Here you would integrate with ChatGPT API
      const response = await fetch('YOUR_CHATGPT_ENDPOINT', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `Create a marketing email with the following details:
            Template Name: ${template.name}
            Subject: ${template.subject}
            Additional Context: ${template.prompt}`
        })
      });
      
      const data = await response.json();
      setTemplate(prev => ({ ...prev, content: data.content }));
    } catch (error) {
      console.error('Error generating email content:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = () => {
    onSave({
      name: template.name,
      subject: template.subject,
      content: template.content
    });
  };

  return (
    <Card className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-white">Create Email Template</h2>
        <div className="flex space-x-2">
          <button
            onClick={handleSave}
            className="flex items-center space-x-2 px-4 py-2 bg-dark-lighter rounded-lg text-gray-300 hover:text-primary"
          >
            <Save className="h-5 w-5" />
            <span>Save Template</span>
          </button>
          <button
            onClick={() => {}} // Implement send test email
            className="flex items-center space-x-2 px-4 py-2 bg-dark-lighter rounded-lg text-gray-300 hover:text-primary"
          >
            <Send className="h-5 w-5" />
            <span>Send Test</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Template Name
            </label>
            <input
              type="text"
              value={template.name}
              onChange={(e) => setTemplate(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-2 bg-dark-lighter border border-dark-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
              placeholder="e.g., Welcome Email"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Subject Line
            </label>
            <input
              type="text"
              value={template.subject}
              onChange={(e) => setTemplate(prev => ({ ...prev, subject: e.target.value }))}
              className="w-full px-4 py-2 bg-dark-lighter border border-dark-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
              placeholder="Enter email subject"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              AI Prompt
            </label>
            <textarea
              value={template.prompt}
              onChange={(e) => setTemplate(prev => ({ ...prev, prompt: e.target.value }))}
              className="w-full h-32 px-4 py-2 bg-dark-lighter border border-dark-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white resize-none"
              placeholder="Describe what you want the AI to generate..."
            />
          </div>

          <button
            onClick={generateEmailContent}
            disabled={loading}
            className="w-full flex items-center justify-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light disabled:opacity-50"
          >
            {loading ? (
              <LoadingSpinner size="sm" />
            ) : (
              <>
                <Wand2 className="h-5 w-5" />
                <span>Generate with AI</span>
              </>
            )}
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Preview
          </label>
          <div className="h-[400px] p-4 bg-dark-lighter border border-dark-lighter rounded-lg overflow-y-auto">
            <div 
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: template.content || 'AI-generated content will appear here...' }}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};