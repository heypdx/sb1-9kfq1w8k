import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-dark-card p-6 rounded-lg border border-dark-lighter hover:border-primary/30 transition-colors ${className}`}>
      {children}
    </div>
  );
};