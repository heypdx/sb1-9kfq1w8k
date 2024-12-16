import React, { useState } from 'react';
import { Lock } from 'lucide-react';

interface AdminLoginProps {
  onLogin: (credentials: { email: string; password: string }) => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark">
      <div className="bg-dark-card p-8 rounded-lg shadow-lg w-full max-w-md border border-dark-lighter">
        <div className="flex justify-center mb-6">
          <div className="p-3 rounded-full bg-primary/10">
            <Lock className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center text-white mb-6">Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-dark-lighter border border-dark-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-dark-lighter border border-dark-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-light transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};