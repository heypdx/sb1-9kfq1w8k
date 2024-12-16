import React from 'react';
import { useHubspot } from '../../hooks/useHubspot';
import { LoadingSpinner } from '../ui/LoadingSpinner';

export const ContactForm = () => {
  const { createContact, loading, error } = useHubspot();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    location: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createContact(formData);
      // Reset form or show success message
    } catch (err) {
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Form fields */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-light transition-colors"
      >
        {loading ? <LoadingSpinner size="sm" /> : 'Create Contact'}
      </button>
      {error && (
        <p className="text-red-500 text-sm">{error.message}</p>
      )}
    </form>
  );
};