import React from 'react';
import { Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const EDDMHeader = () => {
  return (
    <div className="space-y-4">
      <Link 
        to="/admin/dashboard"
        className="inline-flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back to Dashboard</span>
      </Link>
      
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-white">USPS Every Door Direct Mail</h1>
          </div>
          <p className="text-gray-400">Plan and manage your direct mail campaigns with USPS EDDM tool</p>
        </div>
      </div>
    </div>
  );
};