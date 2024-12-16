import { hubspotClient } from './config';

export const createEmailCampaign = async (campaign: {
  name: string;
  subject: string;
  content: string;
  listId: string;
}) => {
  try {
    const response = await hubspotClient.marketing.transactional.singleSendApi.send({
      emailId: campaign.listId,
      message: {
        to: campaign.listId,
        subject: campaign.subject,
        html: campaign.content
      }
    });
    return response;
  } catch (error) {
    console.error('Error creating email campaign:', error);
    throw error;
  }
};