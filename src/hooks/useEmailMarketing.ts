import { useState, useCallback } from 'react';
import * as EmailService from '../services/hubspot/email';

export const useEmailMarketing = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const getCampaigns = useCallback(async () => {
    try {
      setLoading(true);
      const response = await EmailService.getEmailCampaigns();
      return response;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch campaigns'));
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const getMetrics = useCallback(async (campaignId: string) => {
    try {
      setLoading(true);
      const response = await EmailService.getEmailMetrics(campaignId);
      return response;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch metrics'));
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const createTemplate = useCallback(async (template: {
    name: string;
    content: string;
    subject: string;
  }) => {
    try {
      setLoading(true);
      const response = await EmailService.createEmailTemplate(template);
      return response;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to create template'));
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    getCampaigns,
    getMetrics,
    createTemplate,
    loading,
    error
  };
};