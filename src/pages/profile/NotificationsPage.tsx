import React from 'react';
import { ProfileLayout } from '../../components/profile/ProfileLayout';
import { Bell, Mail, MessageSquare, ShoppingBag } from 'lucide-react';

const NotificationsPage = () => {
  return (
    <ProfileLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Notification Settings</h1>
          <p className="text-gray-400">Manage how you receive notifications</p>
        </div>

        <div className="space-y-6">
          <div className="bg-dark-lighter p-6 rounded-xl border border-dark-lighter">
            <div className="flex items-center space-x-3 mb-6">
              <Mail className="h-6 w-6 text-primary" />
              <h2 className="text-lg font-semibold text-white">Email Notifications</h2>
            </div>
            <div className="space-y-4">
              <NotificationToggle
                label="Marketing emails"
                description="Receive updates about new features and promotions"
              />
              <NotificationToggle
                label="Order confirmations"
                description="Get notified when your orders are processed"
              />
            </div>
          </div>

          <div className="bg-dark-lighter p-6 rounded-xl border border-dark-lighter">
            <div className="flex items-center space-x-3 mb-6">
              <Bell className="h-6 w-6 text-primary" />
              <h2 className="text-lg font-semibold text-white">Push Notifications</h2>
            </div>
            <div className="space-y-4">
              <NotificationToggle
                label="Order updates"
                description="Get real-time updates about your orders"
              />
              <NotificationToggle
                label="New messages"
                description="Receive notifications for new messages"
              />
            </div>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

const NotificationToggle = ({ label, description }) => {
  const [enabled, setEnabled] = React.useState(true);

  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-white">{label}</p>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      <button
        onClick={() => setEnabled(!enabled)}
        className={`w-12 h-6 rounded-full transition-colors ${
          enabled ? 'bg-primary' : 'bg-dark'
        }`}
      >
        <div
          className={`w-4 h-4 rounded-full bg-white transition-transform transform ${
            enabled ? 'translate-x-7' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
};

export default NotificationsPage;