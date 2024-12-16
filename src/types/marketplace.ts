export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'advertisement' | 'service';
  features?: string[];
  details?: {
    dimensions?: string;
    duration?: string;
    format?: string;
    reach?: string;
  };
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CheckoutSession {
  id: string;
  url: string;
}