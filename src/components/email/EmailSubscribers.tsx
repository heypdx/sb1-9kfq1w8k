import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Card } from '../ui/Card';

export const EmailSubscribers = () => {
  const subscribers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      status: 'active',
      joinDate: '2024-02-15'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      status: 'active',
      joinDate: '2024-02-20'
    }
  ];

  return (
    <Card>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white">Subscribers</h2>
        <div className="flex space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-9 pr-4 py-2 bg-dark-lighter border border-dark-lighter rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button className="p-2 text-gray-400 hover:text-primary">
            <Filter className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-dark-lighter">
              <th className="text-left p-4 text-gray-400">Name</th>
              <th className="text-left p-4 text-gray-400">Email</th>
              <th className="text-left p-4 text-gray-400">Status</th>
              <th className="text-left p-4 text-gray-400">Join Date</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map(subscriber => (
              <tr key={subscriber.id} className="border-b border-dark-lighter last:border-0">
                <td className="p-4 text-white">{subscriber.name}</td>
                <td className="p-4 text-gray-300">{subscriber.email}</td>
                <td className="p-4">
                  <span className="px-2 py-1 text-xs rounded-full bg-green-900/50 text-green-300">
                    {subscriber.status}
                  </span>
                </td>
                <td className="p-4 text-gray-300">{subscriber.joinDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};