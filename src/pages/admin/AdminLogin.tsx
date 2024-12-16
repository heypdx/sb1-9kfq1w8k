import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminLogin as AdminLoginComponent } from '../../components/admin/AdminLogin';

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleLogin = (credentials: { email: string; password: string }) => {
    // Here you would typically handle authentication
    console.log('Login attempt:', credentials);
    navigate('/admin/dashboard');
  };

  return <AdminLoginComponent onLogin={handleLogin} />;
};

export default AdminLogin;