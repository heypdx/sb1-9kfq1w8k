import { useState, useCallback } from 'react';
import type { EmailTemplate } from '../types/email';

export const useEmailTemplate = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const generateContent = useCallback(async (prompt: string): Promise<string> => {
    setLoading(true);
    try {
      // Simulated AI response for demo
      const aiContent = `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>Welcome to Shop With Local!</h2>
          <p>Thank you for joining our community of local businesses.</p>
          <p>Here's what you can expect:</p>
          <ul>
            <li>Access to powerful marketing tools</li>
            <li>Local business networking opportunities</li>
            <li>Exclusive promotional offers</li>
          </ul>
          <p>Best regards,<br>The Shop With Local Team</p>
        </div>
      `;
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      return aiContent;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to generate content');
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  const saveTemplate = useCallback(async (template: EmailTemplate): Promise<void> => {
    setLoading(true);
    try {
      // Here you would typically make an API call to save the template
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to save template');
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    generateContent,
    saveTemplate,
    loading,
    error
  };
};