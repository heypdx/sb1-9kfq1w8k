import React from 'react';
import { AdminHeader } from '../../components/admin/dashboard/AdminHeader';
import { MetricsGrid } from '../../components/admin/dashboard/MetricsGrid';
import { ActivityFeed } from '../../components/admin/dashboard/ActivityFeed';
import { QuickActions } from '../../components/admin/dashboard/QuickActions';
import { AdminUsersList } from '../../components/admin/AdminUsersList';
import { AdminPayments } from '../../components/admin/AdminPayments';
import { AdminProducts } from '../../components/admin/AdminProducts';

const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      <AdminHeader
        title="Admin Dashboard"
        description="Manage your platform and users"
      />

      <MetricsGrid />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ActivityFeed />
        <QuickActions />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AdminUsersList />
        <AdminPayments />
      </div>

      <AdminProducts />
    </div>
  );
};

export default AdminDashboard;