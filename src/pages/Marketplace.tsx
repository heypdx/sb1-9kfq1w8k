import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Bot, Megaphone, MessageSquare } from 'lucide-react';
import { ProductCard } from '../components/marketplace/ProductCard';
import { Cart } from '../components/marketplace/Cart';
import { CheckoutModal } from '../components/marketplace/CheckoutModal';
import { products } from '../data/products';
import type { Product, CartItem } from '../types/marketplace';

// Initialize Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const Marketplace = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCartItems(items => {
      const existingItem = items.find(item => item.id === product.id);
      if (existingItem) {
        return items.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...items, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const handleStripeCheckout = async () => {
    const stripe = await stripePromise;
    if (!stripe) return;

    // Here you would typically make an API call to your backend to create a Stripe checkout session
    // For demo purposes, we'll just log the cart items
    console.log('Processing Stripe payment for:', cartItems);
  };

  const handlePayPalCheckout = async () => {
    // Here you would typically initialize PayPal checkout
    // For demo purposes, we'll just log the cart items
    console.log('Processing PayPal payment for:', cartItems);
  };

  return (
    <div className="space-y-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white">Marketplace</h1>
        <p className="text-gray-400">Enhance your business with powerful add-ons and services</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      <Cart
        items={cartItems}
        onRemove={handleRemoveFromCart}
        onCheckout={() => setShowCheckout(true)}
      />

      {showCheckout && (
        <CheckoutModal
          items={cartItems}
          onClose={() => setShowCheckout(false)}
          onStripeCheckout={handleStripeCheckout}
          onPayPalCheckout={handlePayPalCheckout}
        />
      )}
    </div>
  );
};

export default Marketplace;