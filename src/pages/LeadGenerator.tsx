import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { LeadForm } from '../components/leads/LeadForm';
import { LeadStats } from '../components/leads/LeadStats';
import { LeadHistory } from '../components/leads/LeadHistory';

const LeadGenerator = () => {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Lead Generator"
        description="Generate and manage potential leads for your business"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <LeadForm />
        </div>
        <div>
          <LeadStats />
        </div>
      </div>

      <LeadHistory />
    </div>
  );
};

export default LeadGenerator;