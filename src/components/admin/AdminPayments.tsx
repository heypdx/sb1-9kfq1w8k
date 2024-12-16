import React from 'react';
import { DollarSign } from 'lucide-react';

export const AdminPayments = () => {
  const payments = [
    {
      id: 1,
      user: 'John Doe',
      amount: 299.99,
      status: 'completed',
      date: '2024-03-15'
    },
    {
      id: 2,
      user: 'Jane Smith',
      amount: 499.99,
      status: 'completed',
      date: '2024-03-14'
    }
  ];

  return (
    <div className="bg-dark-card rounded-lg shadow-sm border border-dark-lighter">
      <div className="p-4 border-b border-dark-lighter">
        <h2 className="text-lg font-semibold text-white">Recent Payments</h2>
      </div>
      <div className="p-4 space-y-4">
        {payments.map(payment => (
          <div key={payment.id} className="flex items-center justify-between p-3 bg-dark-lighter rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <DollarSign className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-white">{payment.user}</p>
                <p className="text-sm text-gray-400">{payment.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-white">${payment.amount}</p>
              <p className="text-sm text-green-400">{payment.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};