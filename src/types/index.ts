// Common Types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  avatar: string;
}

export interface SocialMetrics {
  platform: string;
  followers: string;
  engagement: string;
}

export interface AnalyticsMetric {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}