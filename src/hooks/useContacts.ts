import { useState, useEffect } from 'react';
import type { Contact } from '../types';

export const useContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Simulated API call
    const fetchContacts = async () => {
      try {
        setLoading(true);
        // Replace with actual API call
        const response = await Promise.resolve([]);
        setContacts(response);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch contacts'));
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  return { contacts, loading, error };
};