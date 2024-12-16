import React from 'react';
import { Bell, CheckCircle, AlertCircle } from 'lucide-react';
import { Card } from '../ui/Card';

export const AdAlerts = () => {
  const alerts = [
    {
      id: 1,
      type: 'success',
      message: 'Spring Promotion materials approved for printing',
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      type: 'info',
      message: 'New distribution date available for Summer campaign',
      timestamp: '1 day ago'
    }
  ];

  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Updates & Alerts</h2>
        <Bell className="h-5 w-5 text-primary" />
      </div>

      <div className="space-y-4">
        {alerts.map(alert => (
          <div
            key={alert.id}
            className="flex items-start space-x-4 p-4 bg-dark-lighter rounded-lg"
          >
            {alert.type === 'success' ? (
              <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
            ) : (
              <AlertCircle className="h-5 w-5 text-primary flex-shrink-0" />
            )}
            <div>
              <p className="text-white">{alert.message}</p>
              <p className="text-sm text-gray-400 mt-1">{alert.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};