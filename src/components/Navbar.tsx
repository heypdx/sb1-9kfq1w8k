import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, Share2, ShoppingBag, BarChart2, Menu, Target } from 'lucide-react';
import { UserProfile } from './UserProfile';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  // Mock user data - replace with actual user data from your auth system
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
  };

  const handleLogout = () => {
    // Handle logout logic
    console.log('Logging out...');
  };

  if (isLandingPage) {
    return (
      <nav className="bg-dark-card/50 backdrop-blur-lg border-b border-dark-lighter absolute w-full z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-24">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="https://shopwithlocal-com.preview-domain.com/wp-content/uploads/2024/12/Shop-With-Local-Logo-2-edited.png"
                alt="Shop With Local"
                className="h-40 w-auto"
              />
            </Link>
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/dashboard" className="text-gray-300 hover:text-primary px-4 py-2">
                Dashboard
              </Link>
              <Link to="/dashboard" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-dark-card border-b border-dark-lighter">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="https://shopwithlocal-com.preview-domain.com/wp-content/uploads/2024/12/Shop-With-Local-Logo-2-edited.png"
              alt="Shop With Local"
              className="h-40 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/dashboard" icon={<LayoutDashboard />} text="Dashboard" />
            <NavLink to="/contacts" icon={<Users />} text="Contacts" />
            <NavLink to="/social" icon={<Share2 />} text="Social Media" />
            <NavLink to="/marketplace" icon={<ShoppingBag />} text="Marketplace" />
            <NavLink to="/analytics" icon={<BarChart2 />} text="Analytics" />
            <NavLink to="/ad-portal" icon={<Target />} text="Ad Portal" />
            <UserProfile user={user} onLogout={handleLogout} />
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6 text-gray-300" />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <MobileNavLink to="/dashboard" icon={<LayoutDashboard />} text="Dashboard" />
            <MobileNavLink to="/contacts" icon={<Users />} text="Contacts" />
            <MobileNavLink to="/social" icon={<Share2 />} text="Social Media" />
            <MobileNavLink to="/marketplace" icon={<ShoppingBag />} text="Marketplace" />
            <MobileNavLink to="/analytics" icon={<BarChart2 />} text="Analytics" />
            <MobileNavLink to="/ad-portal" icon={<Target />} text="Ad Portal" />
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, text }) => (
  <Link
    to={to}
    className="flex items-center space-x-1 text-gray-400 hover:text-primary transition-colors"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

const MobileNavLink = ({ to, icon, text }) => (
  <Link
    to={to}
    className="flex items-center space-x-2 px-4 py-2 text-gray-400 hover:text-primary"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;