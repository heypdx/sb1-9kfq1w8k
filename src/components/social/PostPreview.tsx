import React from 'react';
import { User } from 'lucide-react';

interface PostPreviewProps {
  post: {
    content: string;
    image?: string;
  };
}

export const PostPreview: React.FC<PostPreviewProps> = ({ post }) => {
  return (
    <div className="bg-dark-lighter rounded-lg p-4">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <User className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="font-medium text-white">Shop With Local</p>
          <p className="text-sm text-gray-400">@shopwithlocal</p>
        </div>
      </div>

      <p className="text-white whitespace-pre-wrap mb-4">{post.content}</p>

      {post.image && (
        <img
          src={post.image}
          alt="Post preview"
          className="w-full h-48 object-cover rounded-lg"
        />
      )}

      <div className="mt-4 flex items-center space-x-4 text-gray-400">
        <span>0 Likes</span>
        <span>0 Comments</span>
        <span>0 Shares</span>
      </div>
    </div>
  );
};