import { HubspotClient } from '@hubspot/api-client';

export const hubspotClient = new HubspotClient({ 
  accessToken: import.meta.env.VITE_HUBSPOT_ACCESS_TOKEN 
});

export const HUBSPOT_TRACKING_ID = import.meta.env.VITE_HUBSPOT_TRACKING_ID;