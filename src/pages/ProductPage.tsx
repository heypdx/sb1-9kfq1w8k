import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ProductDetails } from '../components/marketplace/ProductDetails';
import { products } from '../data/products';
import type { Product } from '../types/marketplace';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);

  const handleAddToCart = (product: Product) => {
    // Here you would typically dispatch to a cart context/store
    console.log('Adding to cart:', product);
    navigate('/marketplace');
  };

  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-white mb-4">Product Not Found</h2>
        <button
          onClick={() => navigate('/marketplace')}
          className="text-primary hover:text-primary-light"
        >
          Return to Marketplace
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <button
          onClick={() => navigate('/marketplace')}
          className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Marketplace</span>
        </button>
      </div>
      <ProductDetails product={product} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default ProductPage;