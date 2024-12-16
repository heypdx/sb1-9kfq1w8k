import React from 'react';
import { X, ShoppingCart } from 'lucide-react';
import type { CartItem } from '../../types/marketplace';
import { formatCurrency } from '../../utils/formatters';

interface CartProps {
  items: CartItem[];
  onRemove: (id: string) => void;
  onCheckout: () => void;
}

export const Cart: React.FC<CartProps> = ({ items, onRemove, onCheckout }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-8 right-8 w-96 bg-dark-card rounded-lg shadow-lg border border-dark-lighter">
      <div className="p-4 border-b border-dark-lighter">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingCart className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold text-white">Cart</h3>
          </div>
          <span className="text-sm text-gray-400">{items.length} items</span>
        </div>
      </div>
      <div className="p-4 max-h-96 overflow-y-auto">
        {items.map(item => (
          <div key={item.id} className="flex items-center justify-between py-2">
            <div>
              <h4 className="text-white font-medium">{item.name}</h4>
              <p className="text-sm text-gray-400">{formatCurrency(item.price)} × {item.quantity}</p>
            </div>
            <button
              onClick={() => onRemove(item.id)}
              className="text-gray-400 hover:text-primary"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-dark-lighter">
        <div className="flex items-center justify-between mb-4">
          <span className="text-white">Total:</span>
          <span className="text-xl font-bold text-white">{formatCurrency(total)}</span>
        </div>
        <button
          onClick={onCheckout}
          className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-light transition-colors"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};