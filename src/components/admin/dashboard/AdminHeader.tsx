import React from 'react';

interface AdminHeaderProps {
  title: string;
  description: string;
}

export const AdminHeader: React.FC<AdminHeaderProps> = ({ title, description }) => {
  return (
    <header className="mb-8">
      <h1 className="text-3xl font-bold text-white">{title}</h1>
      <p className="text-gray-400">{description}</p>
    </header>
  );
};