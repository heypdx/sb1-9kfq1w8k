import React, { useState } from 'react';
import { Send, Wand2 } from 'lucide-react';
import { Card } from '../ui/Card';
import { LoadingSpinner } from '../ui/LoadingSpinner';

export const LeadForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    businessType: '',
    targetAudience: '',
    location: '',
    budget: '',
    message: '',
    prompt: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
  };

  const generateContent = async () => {
    setLoading(true);
    // Simulate AI content generation
    await new Promise(resolve => setTimeout(resolve, 1500));
    setFormData(prev => ({
      ...prev,
      message: 'Generated marketing message would appear here...'
    }));
    setLoading(false);
  };

  return (
    <Card>
      <h2 className="text-xl font-semibold text-white mb-6">Create Lead Campaign</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Business Type
            </label>
            <select
              value={formData.businessType}
              onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
              className="w-full px-4 py-2 bg-dark-lighter border border-dark-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
            >
              <option value="">Select type</option>
              <option value="retail">Retail</option>
              <option value="restaurant">Restaurant</option>
              <option value="service">Service</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Target Audience
            </label>
            <select
              value={formData.targetAudience}
              onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
              className="w-full px-4 py-2 bg-dark-lighter border border-dark-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
            >
              <option value="">Select audience</option>
              <option value="local">Local Residents</option>
              <option value="tourists">Tourists</option>
              <option value="business">Business Professionals</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Location
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-4 py-2 bg-dark-lighter border border-dark-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
              placeholder="e.g., Portland, OR"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Budget Range
            </label>
            <select
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              className="w-full px-4 py-2 bg-dark-lighter border border-dark-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
            >
              <option value="">Select budget</option>
              <option value="small">$500 - $1,000</option>
              <option value="medium">$1,000 - $5,000</option>
              <option value="large">$5,000+</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            AI Prompt
          </label>
          <textarea
            value={formData.prompt}
            onChange={(e) => setFormData({ ...formData, prompt: e.target.value })}
            className="w-full h-32 px-4 py-2 bg-dark-lighter border border-dark-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white resize-none"
            placeholder="Describe your ideal lead generation message..."
          />
          <button
            type="button"
            onClick={generateContent}
            className="mt-2 flex items-center space-x-2 text-primary hover:text-primary-light"
          >
            <Wand2 className="h-4 w-4" />
            <span>Generate with AI</span>
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Campaign Message
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full h-48 px-4 py-2 bg-dark-lighter border border-dark-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white resize-none"
            placeholder="Your lead generation message..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-light disabled:opacity-50"
        >
          {loading ? (
            <LoadingSpinner size="sm" />
          ) : (
            <>
              <Send className="h-5 w-5" />
              <span>Launch Campaign</span>
            </>
          )}
        </button>
      </form>
    </Card>
  );
};