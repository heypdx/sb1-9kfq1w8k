import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-card border-t border-dark-lighter mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Shop With Local CRM</h3>
            <p className="text-gray-400">Empowering local businesses with powerful tools for growth.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary">Dashboard</Link></li>
              <li><Link to="/contacts" className="text-gray-400 hover:text-primary">Contacts</Link></li>
              <li><Link to="/social" className="text-gray-400 hover:text-primary">Social Media</Link></li>
              <li><Link to="/marketplace" className="text-gray-400 hover:text-primary">Marketplace</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">Support</a></li>
              <li><Link to="/admin" className="text-gray-400 hover:text-primary">Admin Login</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-dark-lighter mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shop With Local CRM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;