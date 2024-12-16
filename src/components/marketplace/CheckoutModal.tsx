import React from 'react';
import { X } from 'lucide-react';
import type { CartItem } from '../../types/marketplace';
import { formatCurrency } from '../../utils/formatters';

interface CheckoutModalProps {
  items: CartItem[];
  onClose: () => void;
  onStripeCheckout: () => void;
  onPayPalCheckout: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  items,
  onClose,
  onStripeCheckout,
  onPayPalCheckout
}) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-dark-card rounded-lg shadow-lg w-full max-w-md">
        <div className="p-4 border-b border-dark-lighter flex justify-between items-center">
          <h2 className="text-xl font-semibold text-white">Checkout</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-primary">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-4">
          <div className="space-y-4 mb-6">
            {items.map(item => (
              <div key={item.id} className="flex justify-between">
                <div>
                  <h4 className="text-white">{item.name}</h4>
                  <p className="text-sm text-gray-400">Quantity: {item.quantity}</p>
                </div>
                <span className="text-white">{formatCurrency(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-dark-lighter pt-4 mb-6">
            <div className="flex justify-between">
              <span className="text-white">Total:</span>
              <span className="text-xl font-bold text-white">{formatCurrency(total)}</span>
            </div>
          </div>
          <div className="space-y-3">
            <button
              onClick={onStripeCheckout}
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-light transition-colors"
            >
              Pay with Stripe
            </button>
            <button
              onClick={onPayPalCheckout}
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Pay with PayPal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};