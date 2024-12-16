import React, { useState } from 'react';
import { CartSection } from '../../components/profile/CartSection';
import { ProfileLayout } from '../../components/profile/ProfileLayout';
import { CheckoutModal } from '../../components/marketplace/CheckoutModal';
import type { CartItem } from '../../types/marketplace';

const CartPage = () => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'ad-flyer-standard',
      name: 'Standard Ad Space on Shop With Local 9×12 Flyer',
      description: 'Premium advertising space in our widely distributed 9×12 flyer.',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80',
      category: 'advertisement',
      quantity: 1
    }
  ]);

  const handleRemoveFromCart = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const handleStripeCheckout = async () => {
    // Implement Stripe checkout logic
    console.log('Processing Stripe payment');
    setShowCheckout(false);
  };

  const handlePayPalCheckout = async () => {
    // Implement PayPal checkout logic
    console.log('Processing PayPal payment');
    setShowCheckout(false);
  };

  return (
    <ProfileLayout>
      <CartSection
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
    </ProfileLayout>
  );
};

export default CartPage;