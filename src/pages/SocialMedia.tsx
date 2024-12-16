import React from 'react';
import { Calendar, Instagram, Twitter, Facebook, Linkedin, Plus, Megaphone, BarChart2, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const SocialMedia = () => {
  return (
    <div className="space-y-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white">Social Media Management</h1>
        <p className="text-gray-400">Schedule and manage your social media presence</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SocialCard
          platform="Instagram"
          icon={<Instagram className="h-8 w-8 text-primary" />}
          followers="12.5K"
          engagement="4.2%"
          featured={true}
        />
        <SocialCard
          platform="Twitter"
          icon={<Twitter className="h-8 w-8 text-gray-400" />}
          followers="8.3K"
          engagement="3.8%"
        />
        <SocialCard
          platform="Facebook"
          icon={<Facebook className="h-8 w-8 text-gray-400" />}
          followers="15.2K"
          engagement="2.9%"
        />
        <SocialCard
          platform="LinkedIn"
          icon={<Linkedin className="h-8 w-8 text-gray-400" />}
          followers="5.7K"
          engagement="5.1%"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-dark-card rounded-lg shadow-sm border border-dark-lighter">
            <div className="p-6 border-b border-dark-lighter flex justify-between items-center">
              <h2 className="text-xl font-semibold text-white">Scheduled Posts</h2>
              <Link 
                to="/social/new-post"
                className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light"
              >
                <Plus className="h-5 w-5" />
                <span>New Post</span>
              </Link>
            </div>
            <div className="p-6 space-y-4">
              <ScheduledPost
                platforms={['instagram', 'twitter']}
                content="Check out our latest collection! 🛍️ #ShopLocal #NewArrivals"
                date="2024-03-20"
                time="14:30"
                image="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
              />
              <ScheduledPost
                platforms={['facebook', 'linkedin']}
                content="Join us for our upcoming webinar on sustainable local shopping practices!"
                date="2024-03-22"
                time="16:00"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-dark-card p-6 rounded-lg shadow-sm border border-dark-lighter">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Stats</h3>
            <div className="space-y-4">
              <StatItem
                icon={<Users className="h-5 w-5 text-primary" />}
                label="Total Followers"
                value="41.7K"
              />
              <StatItem
                icon={<Megaphone className="h-5 w-5 text-primary" />}
                label="Posts This Month"
                value="45"
              />
              <StatItem
                icon={<BarChart2 className="h-5 w-5 text-primary" />}
                label="Avg. Engagement"
                value="3.8%"
              />
            </div>
          </div>

          <div className="bg-dark-card p-6 rounded-lg shadow-sm border border-dark-lighter">
            <h3 className="text-lg font-semibold mb-4 text-white">Upcoming</h3>
            <Calendar className="w-full text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialCard = ({ platform, icon, followers, engagement, featured = false }) => (
  <div className={`bg-dark-card p-6 rounded-lg shadow-sm border transition-all duration-200 ${
    featured 
      ? 'border-primary/50 hover:border-primary shadow-primary/20' 
      : 'border-dark-lighter hover:border-gray-600'
  }`}>
    <div className="flex items-center justify-between mb-4">
      <div className={`p-2 rounded-lg ${featured ? 'bg-primary/10' : 'bg-dark-lighter'}`}>
        {icon}
      </div>
    </div>
    <h3 className={`text-lg font-semibold mb-2 ${featured ? 'text-primary' : 'text-white'}`}>
      {platform}
    </h3>
    <div className="space-y-2">
      <div>
        <p className="text-sm text-gray-400">Followers</p>
        <p className="text-xl font-bold text-white">{followers}</p>
      </div>
      <div>
        <p className="text-sm text-gray-400">Engagement Rate</p>
        <p className="text-xl font-bold text-white">{engagement}</p>
      </div>
    </div>
  </div>
);

const ScheduledPost = ({ platforms, content, date, time, image }) => (
  <div className="border border-dark-lighter rounded-lg p-4">
    <div className="flex items-start justify-between">
      <div className="space-y-3">
        <div className="flex space-x-2">
          {platforms.map(platform => (
            <PlatformIcon key={platform} platform={platform} />
          ))}
        </div>
        <p className="text-gray-300">{content}</p>
        {image && (
          <img
            src={image}
            alt="Post preview"
            className="w-32 h-32 object-cover rounded-lg"
          />
        )}
      </div>
      <div className="text-right">
        <p className="text-sm text-gray-400">{date}</p>
        <p className="text-sm text-gray-400">{time}</p>
      </div>
    </div>
  </div>
);

const PlatformIcon = ({ platform }) => {
  const icons = {
    instagram: <Instagram className="h-5 w-5 text-pink-400" />,
    twitter: <Twitter className="h-5 w-5 text-blue-400" />,
    facebook: <Facebook className="h-5 w-5 text-blue-500" />,
    linkedin: <Linkedin className="h-5 w-5 text-blue-600" />
  };

  return icons[platform] || null;
};

const StatItem = ({ icon, label, value }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-3">
      <div className="p-2 rounded-lg bg-dark-lighter">
        {icon}
      </div>
      <span className="text-gray-400">{label}</span>
    </div>
    <span className="text-white font-semibold">{value}</span>
  </div>
);

export default SocialMedia;