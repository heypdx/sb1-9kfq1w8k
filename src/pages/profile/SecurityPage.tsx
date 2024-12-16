import React from 'react';
import { ProfileLayout } from '../../components/profile/ProfileLayout';
import { Shield, Key, Smartphone } from 'lucide-react';

const SecurityPage = () => {
  return (
    <ProfileLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Security Settings</h1>
          <p className="text-gray-400">Manage your account security and authentication methods</p>
        </div>

        <div className="space-y-6">
          <div className="bg-dark-lighter p-6 rounded-xl border border-dark-lighter">
            <div className="flex items-center space-x-3 mb-6">
              <Key className="h-6 w-6 text-primary" />
              <h2 className="text-lg font-semibold text-white">Password</h2>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 bg-dark border border-dark-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 bg-dark border border-dark-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
                />
              </div>
              <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light transition-colors">
                Update Password
              </button>
            </form>
          </div>

          <div className="bg-dark-lighter p-6 rounded-xl border border-dark-lighter">
            <div className="flex items-center space-x-3 mb-6">
              <Smartphone className="h-6 w-6 text-primary" />
              <h2 className="text-lg font-semibold text-white">Two-Factor Authentication</h2>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white">Protect your account with 2FA</p>
                <p className="text-sm text-gray-400">
                  Add an extra layer of security to your account
                </p>
              </div>
              <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light transition-colors">
                Enable 2FA
              </button>
            </div>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default SecurityPage;