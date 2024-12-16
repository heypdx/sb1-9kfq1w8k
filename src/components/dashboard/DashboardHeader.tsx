import React from 'react';
import { useUser } from '../../contexts/UserContext';

export const DashboardHeader = () => {
  const { user } = useUser();

  return (
    <header className="mb-8">
      <h1 className="text-3xl font-bold text-white">
        Welcome back, {user?.firstName || 'Guest'}
      </h1>
      <p className="text-gray-400">Here's what's happening with your business today.</p>
    </header>
  );
};