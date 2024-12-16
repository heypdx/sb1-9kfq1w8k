export interface EmailTemplate {
  id?: string;
  name: string;
  subject: string;
  content: string;
  prompt: string;
  createdAt?: string;
}

export interface EmailCampaign {
  id: string;
  name: string;
  subject: string;
  status: 'draft' | 'scheduled' | 'sent';
  sentAt?: string;
  scheduledFor?: string;
  stats?: {
    sent: number;
    opened: number;
    clicked: number;
  };
}

export interface EmailSubscriber {
  id: string;
  email: string;
  name: string;
  status: 'active' | 'unsubscribed';
  joinedAt: string;
  lastEmailSent?: string;
}