import React from 'react';
import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

interface PlatformSelectorProps {
  selected: string[];
  onChange: (platforms: string[]) => void;
}

export const PlatformSelector: React.FC<PlatformSelectorProps> = ({
  selected,
  onChange
}) => {
  const platforms = [
    { id: 'instagram', name: 'Instagram', icon: <Instagram /> },
    { id: 'twitter', name: 'Twitter', icon: <Twitter /> },
    { id: 'facebook', name: 'Facebook', icon: <Facebook /> },
    { id: 'linkedin', name: 'LinkedIn', icon: <Linkedin /> }
  ];

  const togglePlatform = (platformId: string) => {
    if (selected.includes(platformId)) {
      onChange(selected.filter(id => id !== platformId));
    } else {
      onChange([...selected, platformId]);
    }
  };

  return (
    <div className="flex space-x-4">
      {platforms.map(platform => (
        <button
          key={platform.id}
          type="button"
          onClick={() => togglePlatform(platform.id)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
            selected.includes(platform.id)
              ? 'bg-primary text-white'
              : 'bg-dark-lighter text-gray-400 hover:text-primary'
          }`}
        >
          {platform.icon}
          <span>{platform.name}</span>
        </button>
      ))}
    </div>
  );
};