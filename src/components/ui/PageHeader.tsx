import React from 'react';
import { BackButton } from './BackButton';

interface PageHeaderProps {
  title: string;
  description?: string;
  backTo?: string;
  backLabel?: string;
  actions?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  backTo,
  backLabel,
  actions
}) => {
  return (
    <div className="mb-8">
      {(backTo || backLabel) && (
        <BackButton to={backTo} label={backLabel} />
      )}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-white">{title}</h1>
          {description && (
            <p className="text-gray-400 mt-2">{description}</p>
          )}
        </div>
        {actions && (
          <div className="flex items-center space-x-4">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};