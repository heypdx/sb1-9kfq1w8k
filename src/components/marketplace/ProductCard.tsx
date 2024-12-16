import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Check } from 'lucide-react';
import type { Product } from '../../types/marketplace';
import { formatCurrency } from '../../utils/formatters';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-dark-card rounded-lg shadow-sm border border-dark-lighter hover:border-primary/30 transition-all duration-200">
      <Link to={`/marketplace/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </Link>
      <div className="p-6">
        <Link 
          to={`/marketplace/product/${product.id}`}
          className="block hover:text-primary transition-colors"
        >
          <h3 className="text-xl font-semibold mb-2 text-white hover:text-primary">{product.name}</h3>
        </Link>
        <p className="text-gray-400 mb-4">{product.description}</p>
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-primary mb-2">Features:</h4>
          <ul className="space-y-2">
            {product.features?.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center space-x-2 text-gray-300">
                <Check className="h-4 w-4 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-white">
            {formatCurrency(product.price)}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light transition-colors"
          >
            <ShoppingBag className="h-5 w-5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};