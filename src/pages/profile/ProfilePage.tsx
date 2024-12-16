import React from 'react';
import { Camera, Mail, Phone, MapPin, Link as LinkIcon } from 'lucide-react';
import { ProfileLayout } from '../../components/profile/ProfileLayout';

const ProfilePage = () => {
  return (
    <ProfileLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">Profile Settings</h1>
            <p className="text-gray-400">Manage your account settings and preferences</p>
          </div>
          <button className="bg-primary text-white px-4 py-2 rounded-xl hover:bg-primary-light transition-colors">
            Save Changes
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                alt="Profile"
                className="w-full h-48 object-cover rounded-xl"
              />
              <button className="absolute bottom-4 right-4 p-2 bg-primary rounded-full text-white hover:bg-primary-light transition-colors">
                <Camera className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="col-span-2 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-dark-lighter border border-dark-lighter rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-white"
                  defaultValue="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-dark-lighter border border-dark-lighter rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-white"
                  defaultValue="Doe"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 bg-dark-lighter rounded-xl">
                <Mail className="h-5 w-5 text-primary" />
                <input
                  type="email"
                  className="flex-1 bg-transparent border-none focus:outline-none text-white"
                  defaultValue="john@example.com"
                />
              </div>
              <div className="flex items-center space-x-4 p-3 bg-dark-lighter rounded-xl">
                <Phone className="h-5 w-5 text-primary" />
                <input
                  type="tel"
                  className="flex-1 bg-transparent border-none focus:outline-none text-white"
                  defaultValue="+1 234 567 890"
                />
              </div>
              <div className="flex items-center space-x-4 p-3 bg-dark-lighter rounded-xl">
                <MapPin className="h-5 w-5 text-primary" />
                <input
                  type="text"
                  className="flex-1 bg-transparent border-none focus:outline-none text-white"
                  defaultValue="New York, USA"
                />
              </div>
              <div className="flex items-center space-x-4 p-3 bg-dark-lighter rounded-xl">
                <LinkIcon className="h-5 w-5 text-primary" />
                <input
                  type="url"
                  className="flex-1 bg-transparent border-none focus:outline-none text-white"
                  defaultValue="https://example.com"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default ProfilePage;