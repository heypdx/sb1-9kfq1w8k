import React from 'react';
import { Layout, Edit, Trash, Copy } from 'lucide-react';
import { Card } from '../ui/Card';

interface Template {
  id: string;
  name: string;
  subject: string;
  createdAt: string;
}

interface EmailTemplateListProps {
  templates: Template[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onDuplicate: (id: string) => void;
}

export const EmailTemplateList: React.FC<EmailTemplateListProps> = ({
  templates,
  onEdit,
  onDelete,
  onDuplicate
}) => {
  return (
    <Card>
      <h2 className="text-xl font-semibold text-white mb-6">Saved Templates</h2>
      <div className="space-y-4">
        {templates.map(template => (
          <div
            key={template.id}
            className="flex items-center justify-between p-4 bg-dark-lighter rounded-lg hover:border-primary/30 transition-all duration-200"
          >
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Layout className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-white">{template.name}</h3>
                <p className="text-sm text-gray-400">{template.subject}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onEdit(template.id)}
                className="p-2 text-gray-400 hover:text-primary"
                title="Edit template"
              >
                <Edit className="h-5 w-5" />
              </button>
              <button
                onClick={() => onDuplicate(template.id)}
                className="p-2 text-gray-400 hover:text-primary"
                title="Duplicate template"
              >
                <Copy className="h-5 w-5" />
              </button>
              <button
                onClick={() => onDelete(template.id)}
                className="p-2 text-gray-400 hover:text-red-500"
                title="Delete template"
              >
                <Trash className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};