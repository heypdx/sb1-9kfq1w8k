import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { NewPostForm } from '../components/social/NewPostForm';

const NewPost = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Create New Post"
        description="Create and schedule your social media content with AI assistance"
        backTo="/social"
        backLabel="Back to Social Media"
      />
      <NewPostForm />
    </div>
  );
};

export default NewPost;