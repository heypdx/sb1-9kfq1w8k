import React from 'react';
import { Plus, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ContactsHeader = () => {
  return (
    <header className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold text-white">Contacts</h1>
        <p className="text-gray-400">Manage your customer relationships</p>
      </div>
      <div className="flex space-x-3">
        <Link
          to="/email-marketing"
          className="flex items-center space-x-2 bg-dark-lighter text-white px-4 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
        >
          <Mail className="h-5 w-5" />
          <span>Email Marketing</span>
        </Link>
        <button className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light">
          <Plus className="h-5 w-5" />
          <span>Add Contact</span>
        </button>
      </div>
    </header>
  );
};