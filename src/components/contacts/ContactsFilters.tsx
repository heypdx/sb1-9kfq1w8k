import React from 'react';
import { Search, Filter, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';

export const ContactsFilters = () => {
  return (
    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search contacts..."
          className="w-full pl-10 pr-4 py-2 bg-dark-card border border-dark-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-gray-400"
        />
      </div>
      <div className="flex space-x-2">
        <Link
          to={ROUTES.EMAIL_TEMPLATE_CREATOR}
          className="flex items-center space-x-2 px-4 py-2 border border-dark-lighter rounded-lg hover:border-primary/30 text-gray-300 hover:text-primary"
        >
          <Plus className="h-5 w-5" />
          <span>New Template</span>
        </Link>
        <button className="flex items-center space-x-2 px-4 py-2 border border-dark-lighter rounded-lg hover:border-primary/30 text-gray-300">
          <Filter className="h-5 w-5" />
          <span>Filters</span>
        </button>
      </div>
    </div>
  );
};