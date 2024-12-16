import React from 'react';
import { MoreVertical } from 'lucide-react';

export const AdminUsersList = () => {
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      status: 'active',
      joinDate: '2024-01-15'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      status: 'active',
      joinDate: '2024-02-01'
    }
  ];

  return (
    <div className="bg-dark-card rounded-lg shadow-sm border border-dark-lighter">
      <div className="p-4 border-b border-dark-lighter">
        <h2 className="text-lg font-semibold text-white">Recent Users</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-dark-lighter">
              <th className="text-left p-4 text-gray-400">User</th>
              <th className="text-left p-4 text-gray-400">Status</th>
              <th className="text-left p-4 text-gray-400">Join Date</th>
              <th className="text-left p-4 text-gray-400"></th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-b border-dark-lighter last:border-0">
                <td className="p-4">
                  <div>
                    <p className="font-medium text-white">{user.name}</p>
                    <p className="text-sm text-gray-400">{user.email}</p>
                  </div>
                </td>
                <td className="p-4">
                  <span className="px-2 py-1 text-xs rounded-full bg-green-900/50 text-green-300">
                    {user.status}
                  </span>
                </td>
                <td className="p-4 text-gray-300">{user.joinDate}</td>
                <td className="p-4">
                  <button className="text-gray-400 hover:text-primary">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};