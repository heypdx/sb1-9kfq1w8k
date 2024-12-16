import React from 'react';
import { Edit, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Contact } from '../../types';

interface ContactActionsProps {
  contact: Contact;
}

export const ContactActions: React.FC<ContactActionsProps> = ({ contact }) => {
  return (
    <div className="flex space-x-2">
      <button className="text-primary hover:text-primary-light transition-colors">
        <Edit className="h-4 w-4" />
      </button>
      <Link
        to="/email-marketing"
        className="flex items-center space-x-1 text-gray-400 hover:text-primary transition-colors"
      >
        <Send className="h-4 w-4" />
        <span>Email</span>
      </Link>
    </div>
  );
};