import React from 'react';
import { ProfileLayout } from '../../components/profile/ProfileLayout';
import { Settings, Globe, Moon } from 'lucide-react';

const SettingsPage = () => {
  return (
    <ProfileLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Settings</h1>
          <p className="text-gray-400">Customize your account preferences</p>
        </div>

        <div className="space-y-6">
          <div className="bg-dark-lighter p-6 rounded-xl border border-dark-lighter">
            <div className="flex items-center space-x-3 mb-6">
              <Globe className="h-6 w-6 text-primary" />
              <h2 className="text-lg font-semibold text-white">Language & Region</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Language
                </label>
                <select className="w-full px-4 py-2 bg-dark border border-dark-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white">
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Time Zone
                </label>
                <select className="w-full px-4 py-2 bg-dark border border-dark-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white">
                  <option value="utc">UTC</option>
                  <option value="est">Eastern Time</option>
                  <option value="pst">Pacific Time</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-dark-lighter p-6 rounded-xl border border-dark-lighter">
            <div className="flex items-center space-x-3 mb-6">
              <Settings className="h-6 w-6 text-primary" />
              <h2 className="text-lg font-semibold text-white">Preferences</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white">Dark Mode</p>
                  <p className="text-sm text-gray-400">Toggle dark mode theme</p>
                </div>
                <button className="w-12 h-6 bg-primary rounded-full">
                  <div className="w-4 h-4 translate-x-7 rounded-full bg-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default SettingsPage;