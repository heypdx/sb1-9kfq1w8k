import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Dashboard from './pages/Dashboard';
import Contacts from './pages/Contacts';
import ContactProfile from './pages/contacts/ContactProfile';
import SocialMedia from './pages/SocialMedia';
import NewPost from './pages/NewPost';
import Marketplace from './pages/Marketplace';
import ProductPage from './pages/ProductPage';
import Analytics from './pages/Analytics';
import EmailMarketing from './pages/EmailMarketing';
import EmailTemplateCreator from './pages/EmailTemplateCreator';
import NewCampaign from './pages/NewCampaign';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import EDDM from './pages/admin/EDDM';
import LeadGenerator from './pages/LeadGenerator';
import ProfilePage from './pages/profile/ProfilePage';
import CartPage from './pages/profile/CartPage';
import BillingPage from './pages/profile/BillingPage';
import SettingsPage from './pages/profile/SettingsPage';
import NotificationsPage from './pages/profile/NotificationsPage';
import SecurityPage from './pages/profile/SecurityPage';
import LandingPage from './pages/LandingPage';
import AdPortal from './pages/AdPortal';

import { ROUTES } from './utils/constants';

const App = () => {
  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <UserProvider>
      <Router>
        <ErrorBoundary>
          <div className="min-h-screen bg-gradient-dark text-gray-200">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
              <Routes>
                <Route path={ROUTES.HOME} element={<LandingPage />} />
                <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
                <Route path={ROUTES.CONTACTS} element={<Contacts />} />
                <Route path={ROUTES.CONTACT_PROFILE} element={<ContactProfile />} />
                <Route path={ROUTES.SOCIAL} element={<SocialMedia />} />
                <Route path={ROUTES.SOCIAL_NEW_POST} element={<NewPost />} />
                <Route path={ROUTES.MARKETPLACE} element={<Marketplace />} />
                <Route path={ROUTES.PRODUCT} element={<ProductPage />} />
                <Route path={ROUTES.ANALYTICS} element={<Analytics />} />
                <Route path={ROUTES.EMAIL_MARKETING} element={<EmailMarketing />} />
                <Route path={ROUTES.EMAIL_TEMPLATE_CREATOR} element={<EmailTemplateCreator />} />
                <Route path={ROUTES.NEW_CAMPAIGN} element={<NewCampaign />} />
                <Route path={ROUTES.ADMIN} element={<AdminLogin />} />
                <Route path={ROUTES.ADMIN_DASHBOARD} element={<AdminDashboard />} />
                <Route path={ROUTES.ADMIN_EDDM} element={<EDDM />} />
                <Route path={ROUTES.LEADS} element={<LeadGenerator />} />
                <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
                <Route path={ROUTES.PROFILE_CART} element={<CartPage />} />
                <Route path={ROUTES.PROFILE_BILLING} element={<BillingPage />} />
                <Route path={ROUTES.PROFILE_SETTINGS} element={<SettingsPage />} />
                <Route path={ROUTES.PROFILE_NOTIFICATIONS} element={<NotificationsPage />} />
                <Route path={ROUTES.PROFILE_SECURITY} element={<SecurityPage />} />
                <Route path={ROUTES.AD_PORTAL} element={<AdPortal />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </ErrorBoundary>
      </Router>
    </UserProvider>
  );
};

export default App;