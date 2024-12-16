import { hubspotClient } from './config';

export const getEmailCampaigns = async () => {
  try {
    const response = await hubspotClient.marketing.transactional.singleSendApi.getPage();
    return response;
  } catch (error) {
    console.error('Error fetching email campaigns:', error);
    throw error;
  }
};

export const getEmailMetrics = async (campaignId: string) => {
  try {
    const response = await hubspotClient.marketing.transactional.statisticsApi.getById(campaignId);
    return response;
  } catch (error) {
    console.error('Error fetching email metrics:', error);
    throw error;
  }
};

export const createEmailTemplate = async (template: {
  name: string;
  content: string;
  subject: string;
}) => {
  try {
    const response = await hubspotClient.marketing.transactional.singleSendApi.createDraft({
      name: template.name,
      content: {
        html: template.content
      },
      settings: {
        subject: template.subject
      }
    });
    return response;
  } catch (error) {
    console.error('Error creating email template:', error);
    throw error;
  }
};