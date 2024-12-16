import { useState, useCallback } from 'react';
import * as HubspotService from '../services/hubspot';
import type { Contact } from '../types';

export const useHubspot = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const createContact = useCallback(async (contact: Contact) => {
    try {
      setLoading(true);
      const response = await HubspotService.contacts.createContact(contact);
      return response;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to create contact'));
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const createDeal = useCallback(async (dealData: {
    name: string;
    amount: number;
    stage: string;
    contactId: string;
  }) => {
    try {
      setLoading(true);
      const response = await HubspotService.deals.createDeal(dealData);
      return response;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to create deal'));
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    createContact,
    createDeal,
    loading,
    error
  };
};