import React, { useState } from 'react';
import { ImagePlus, Wand2, Calendar, Send } from 'lucide-react';
import { Card } from '../ui/Card';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { PlatformSelector } from './PlatformSelector';
import { PostPreview } from './PostPreview';
import { useNavigate } from 'react-router-dom';

export const NewPostForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({
    content: '',
    prompt: '',
    platforms: [] as string[],
    image: '',
    scheduledDate: '',
    scheduledTime: ''
  });

  const generateContent = async () => {
    setLoading(true);
    try {
      // Simulate AI content generation
      await new Promise(resolve => setTimeout(resolve, 1500));
      setPost(prev => ({
        ...prev,
        content: `Check out our latest collection! 🛍️\n\nDiscover amazing local products and support your community.\n\n#ShopLocal #Community #SmallBusiness`
      }));
    } catch (error) {
      console.error('Error generating content:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle post creation
    navigate('/social');
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                AI Prompt
              </label>
              <textarea
                value={post.prompt}
                onChange={(e) => setPost({ ...post, prompt: e.target.value })}
                className="w-full h-32 px-4 py-2 bg-dark-lighter border border-dark-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white resize-none"
                placeholder="Describe what you want the AI to generate..."
              />
              <button
                type="button"
                onClick={generateContent}
                disabled={loading}
                className="mt-2 w-full flex items-center justify-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light disabled:opacity-50"
              >
                {loading ? (
                  <LoadingSpinner size="sm" />
                ) : (
                  <>
                    <Wand2 className="h-5 w-5" />
                    <span>Generate with AI</span>
                  </>
                )}
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Post Content
              </label>
              <textarea
                value={post.content}
                onChange={(e) => setPost({ ...post, content: e.target.value })}
                className="w-full h-32 px-4 py-2 bg-dark-lighter border border-dark-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white resize-none"
                placeholder="Write your post content..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Select Platforms
              </label>
              <PlatformSelector
                selected={post.platforms}
                onChange={(platforms) => setPost({ ...post, platforms })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Schedule Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="date"
                    value={post.scheduledDate}
                    onChange={(e) => setPost({ ...post, scheduledDate: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 bg-dark-lighter border border-dark-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Schedule Time
                </label>
                <input
                  type="time"
                  value={post.scheduledTime}
                  onChange={(e) => setPost({ ...post, scheduledTime: e.target.value })}
                  className="w-full px-4 py-2 bg-dark-lighter border border-dark-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Preview
              </label>
              <PostPreview post={post} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Add Image
              </label>
              <div className="border-2 border-dashed border-dark-lighter rounded-lg p-8 text-center">
                <ImagePlus className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-400">
                  Drag and drop an image here, or click to select
                </p>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = (e) => {
                        setPost({ ...post, image: e.target?.result as string });
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/social')}
            className="px-6 py-2 bg-dark-lighter text-gray-300 rounded-lg hover:text-primary transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex items-center space-x-2 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors"
          >
            <Send className="h-5 w-5" />
            <span>Create Post</span>
          </button>
        </div>
      </form>
    </Card>
  );
};