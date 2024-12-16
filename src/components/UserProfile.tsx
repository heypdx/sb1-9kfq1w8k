import React from 'react';
import { Link } from 'react-router-dom';
import { User, Settings, CreditCard, LogOut } from 'lucide-react';

interface UserProfileProps {
  user: {
    name: string;
    email: string;
    avatar?: string;
  };
  onLogout: () => void;
}

export const UserProfile: React.FC<UserProfileProps> = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-dark-lighter"
      >
        {user.avatar ? (
          <img
            src={user.avatar}
            alt={user.name}
            className="h-8 w-8 rounded-full object-cover"
          />
        ) : (
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="h-5 w-5 text-primary" />
          </div>
        )}
        <span className="text-gray-300">{user.name}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-dark-card rounded-lg shadow-lg border border-dark-lighter z-50">
          <div className="p-4 border-b border-dark-lighter">
            <p className="font-medium text-white">{user.name}</p>
            <p className="text-sm text-gray-400">{user.email}</p>
          </div>
          <div className="p-2">
            <Link
              to="/profile"
              className="w-full flex items-center space-x-3 p-2 text-gray-300 hover:bg-dark-lighter rounded-lg"
            >
              <User className="h-5 w-5" />
              <span>Account</span>
            </Link>
            <Link
              to="/profile/billing"
              className="w-full flex items-center space-x-3 p-2 text-gray-300 hover:bg-dark-lighter rounded-lg"
            >
              <CreditCard className="h-5 w-5" />
              <span>Billing</span>
            </Link>
            <Link
              to="/profile/settings"
              className="w-full flex items-center space-x-3 p-2 text-gray-300 hover:bg-dark-lighter rounded-lg"
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
            <button
              onClick={onLogout}
              className="w-full flex items-center space-x-3 p-2 text-red-400 hover:bg-red-500/10 hover:text-red-500 rounded-lg"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};