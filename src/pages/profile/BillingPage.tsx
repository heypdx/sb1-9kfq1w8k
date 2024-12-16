import React from 'react';
import { ProfileLayout } from '../../components/profile/ProfileLayout';
import { CreditCard, Plus } from 'lucide-react';

const BillingPage = () => {
  return (
    <ProfileLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">Billing & Payments</h1>
            <p className="text-gray-400">Manage your payment methods and billing history</p>
          </div>
          <button className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-xl hover:bg-primary-light transition-colors">
            <Plus className="h-5 w-5" />
            <span>Add Payment Method</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-dark-lighter p-6 rounded-xl border border-dark-lighter">
            <h2 className="text-lg font-semibold text-white mb-4">Payment Methods</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-dark rounded-lg border border-primary/30">
                <div className="flex items-center space-x-3">
                  <CreditCard className="h-6 w-6 text-primary" />
                  <div>
                    <p className="text-white">•••• •••• •••• 4242</p>
                    <p className="text-sm text-gray-400">Expires 12/24</p>
                  </div>
                </div>
                <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">Default</span>
              </div>
            </div>
          </div>

          <div className="bg-dark-lighter p-6 rounded-xl border border-dark-lighter">
            <h2 className="text-lg font-semibold text-white mb-4">Billing History</h2>
            <div className="space-y-4">
              <div className="p-4 bg-dark rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white">Standard Ad Space</p>
                    <p className="text-sm text-gray-400">Mar 15, 2024</p>
                  </div>
                  <span className="text-white font-medium">$299.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default BillingPage;