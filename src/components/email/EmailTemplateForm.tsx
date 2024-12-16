import React from 'react';
import { Wand2, Send } from 'lucide-react';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import type { EmailTemplate } from '../../types/email';

interface EmailTemplateFormProps {
  template: EmailTemplate;
  onChange: (template: EmailTemplate) => void;
  onGenerate: () => void;
  onSave: () => void;
  loading: boolean;
}

export const EmailTemplateForm: React.FC<EmailTemplateFormProps> = ({
  template,
  onChange,
  onGenerate,
  onSave,
  loading
}) => {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Template Name
        </label>
        <input
          type="text"
          value={template.name}
          onChange={(e) => onChange({ ...template, name: e.target.value })}
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
          onChange={(e) => onChange({ ...template, subject: e.target.value })}
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
          onChange={(e) => onChange({ ...template, prompt: e.target.value })}
          className="w-full h-32 px-4 py-2 bg-dark-lighter border border-dark-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white resize-none"
          placeholder="Describe what you want the AI to generate..."
        />
      </div>

      <div className="flex space-x-4">
        <button
          onClick={onGenerate}
          disabled={loading}
          className="flex-1 flex items-center justify-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light disabled:opacity-50"
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
        <button
          onClick={onSave}
          className="flex-1 flex items-center justify-center space-x-2 bg-dark-lighter text-white px-4 py-2 rounded-lg hover:bg-primary/10 hover:text-primary"
        >
          <Send className="h-5 w-5" />
          <span>Save Template</span>
        </button>
      </div>
    </div>
  );
};