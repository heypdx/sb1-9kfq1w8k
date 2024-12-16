import { hubspotClient } from './config';

export const createDeal = async (dealData: {
  name: string;
  amount: number;
  stage: string;
  contactId: string;
}) => {
  try {
    const response = await hubspotClient.crm.deals.basicApi.create({
      properties: {
        dealname: dealData.name,
        amount: dealData.amount.toString(),
        dealstage: dealData.stage,
        pipeline: 'default'
      },
      associations: [
        {
          to: { id: dealData.contactId },
          types: [{ category: 'HUBSPOT_DEFINED', typeId: 'contact_to_deal' }]
        }
      ]
    });
    return response;
  } catch (error) {
    console.error('Error creating HubSpot deal:', error);
    throw error;
  }
};