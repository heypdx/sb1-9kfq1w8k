import React from 'react';
import { AdMetrics } from '../components/ad-portal/AdMetrics';
import { AdSchedule } from '../components/ad-portal/AdSchedule';
import { LocalBusinessMap } from '../components/ad-portal/LocalBusinessMap';
import { AdAlerts } from '../components/ad-portal/AdAlerts';
import { PageHeader } from '../components/ui/PageHeader';

const AdPortal = () => {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Ad Portal"
        description="Track your advertising campaigns and local business insights"
        backTo="/dashboard"
        backLabel="Back to Dashboard"
      />

      <AdMetrics />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AdSchedule />
        <AdAlerts />
      </div>

      <LocalBusinessMap />
    </div>
  );
};

export default AdPortal;