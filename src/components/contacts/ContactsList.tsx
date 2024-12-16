import React from 'react';
import { Mail, Phone, MapPin, Send, UserCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../ui/Card';
import { ContactActions } from './ContactActions';
import type { Contact } from '../../types';

export const ContactsList = () => {
  const contacts = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 234 567 890',
      location: 'New York, USA',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+1 234 567 891',
      location: 'Los Angeles, USA',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
    }
  ];

  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-dark-lighter">
              <th className="text-left p-4 text-gray-400">Name</th>
              <th className="text-left p-4 text-gray-400">Contact</th>
              <th className="text-left p-4 text-gray-400">Location</th>
              <th className="text-left p-4 text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <tr key={contact.id} className="border-b border-dark-lighter last:border-0">
                <td className="p-4">
                  <Link 
                    to={`/contacts/profile/${contact.id}`}
                    className="flex items-center space-x-3 hover:bg-dark-lighter rounded-lg p-2 transition-colors group"
                  >
                    <img
                      src={contact.avatar}
                      alt={contact.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <span className="font-medium text-white group-hover:text-primary transition-colors">
                        {contact.name}
                      </span>
                      <div className="flex items-center space-x-1 text-xs text-gray-400">
                        <UserCircle className="h-3 w-3" />
                        <span>View Profile</span>
                      </div>
                    </div>
                  </Link>
                </td>
                <td className="p-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-300">{contact.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-300">{contact.phone}</span>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-300">{contact.location}</span>
                  </div>
                </td>
                <td className="p-4">
                  <ContactActions contact={contact} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};