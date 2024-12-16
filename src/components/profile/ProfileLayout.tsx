import React from 'react';
import { User, CreditCard, Settings, Bell, Shield, LogOut, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { icon: <User className="h-5 w-5" />, label: 'Profile', path: '/profile' },
  { icon: <ShoppingBag className="h-5 w-5" />, label: 'Cart', path: '/profile/cart' },
  { icon: <CreditCard className="h-5 w-5" />, label: 'Billing', path: '/profile/billing' },
  { icon: <Settings className="h-5 w-5" />, label: 'Settings', path: '/profile/settings' },
  { icon: <Bell className="h-5 w-5" />, label: 'Notifications', path: '/profile/notifications' },
  { icon: <Shield className="h-5 w-5" />, label: 'Security', path: '/profile/security' },
];

export const ProfileLayout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const handleMenuClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark to-dark-card">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="col-span-3">
            <div className="bg-dark-card rounded-2xl p-6 border border-dark-lighter">
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                    alt="Profile"
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-dark-card"></div>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-white">John Doe</h2>
                  <p className="text-sm text-gray-400">john@example.com</p>
                </div>
              </div>

              <nav className="space-y-2">
                {menuItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleMenuClick(item.path)}
                    className="w-full flex items-center space-x-3 p-3 rounded-xl text-gray-400 hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                ))}
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-3 p-3 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-500 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-9">
            <div className="bg-dark-card rounded-2xl p-8 border border-dark-lighter">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};