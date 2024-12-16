import React from 'react';

interface EmailPreviewProps {
  content: string;
}

export const EmailPreview: React.FC<EmailPreviewProps> = ({ content }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        Preview
      </label>
      <div className="h-[500px] p-6 bg-white border border-dark-lighter rounded-lg overflow-y-auto">
        {content ? (
          <div dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          <div className="text-gray-400 text-center mt-8">
            AI-generated content will appear here...
          </div>
        )}
      </div>
    </div>
  );
};