import React from 'react';
import { ShoppingBag, X, CreditCard } from 'lucide-react';
import type { CartItem } from '../../types/marketplace';
import { formatCurrency } from '../../utils/formatters';

interface CartSectionProps {
  items: CartItem[];
  onRemove: (id: string) => void;
  onCheckout: () => void;
}

export const CartSection: React.FC<CartSectionProps> = ({ items, onRemove, onCheckout }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Shopping Cart</h2>
        <span className="text-gray-400">{items.length} items</span>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-8">
          <ShoppingBag className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-400">Your cart is empty</p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {items.map(item => (
              <div key={item.id} className="flex items-start space-x-4 bg-dark-lighter p-4 rounded-xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-medium text-white">{item.name}</h3>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="text-gray-400 hover:text-primary"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">Quantity: {item.quantity}</p>
                  <p className="text-primary font-medium mt-2">
                    {formatCurrency(item.price * item.quantity)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-dark-lighter pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-400">Total:</span>
              <span className="text-2xl font-bold text-white">{formatCurrency(total)}</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full bg-primary text-white py-3 rounded-xl hover:bg-primary-light transition-colors flex items-center justify-center space-x-2"
            >
              <CreditCard className="h-5 w-5" />
              <span>Proceed to Checkout</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};