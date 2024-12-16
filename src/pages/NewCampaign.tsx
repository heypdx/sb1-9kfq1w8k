import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { NewCampaignForm } from '../components/email/NewCampaignForm';

const NewCampaign = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Create New Campaign"
        description="Design and schedule your email marketing campaign"
        backTo="/email-marketing"
        backLabel="Back to Email Marketing"
      />
      <NewCampaignForm />
    </div>
  );
};

export default NewCampaign;