import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import { Card } from '../../components/ui/Card';

const ContactProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - replace with actual data fetching
  const contact = {
    id: Number(id),
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 234 567 890',
    location: 'New York, USA',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    company: 'Tech Corp',
    role: 'CEO',
    notes: 'Key decision maker for enterprise accounts',
    lastContact: '2024-03-15',
    tags: ['VIP', 'Enterprise', 'Tech']
  };

  return (
    <div className="space-y-6">
      <button
        onClick={() => navigate('/contacts')}
        className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back to Contacts</span>
      </button>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-1">
          <Card>
            <div className="text-center">
              <img
                src={contact.avatar}
                alt={contact.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h2 className="text-xl font-bold text-white mb-1">{contact.name}</h2>
              <p className="text-gray-400">{contact.role} at {contact.company}</p>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-center space-x-2 text-gray-300">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>{contact.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-300">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>{contact.phone}</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-300">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{contact.location}</span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {contact.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>

        <div className="col-span-2 space-y-6">
          <Card>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Notes</label>
                <textarea
                  className="w-full px-4 py-2 bg-dark-lighter border border-dark-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
                  rows={4}
                  defaultValue={contact.notes}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Last Contact</label>
                <p className="text-white">{contact.lastContact}</p>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-white mb-4">Activity History</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary"></div>
                <div>
                  <p className="text-white">Email sent: Monthly Newsletter</p>
                  <p className="text-sm text-gray-400">March 15, 2024</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary"></div>
                <div>
                  <p className="text-white">Added to VIP segment</p>
                  <p className="text-sm text-gray-400">March 10, 2024</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactProfile;