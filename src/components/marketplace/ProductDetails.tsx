import React from 'react';
import { ShoppingBag, Check, Printer, Calendar, Layout, Users } from 'lucide-react';
import type { Product } from '../../types/marketplace';
import { formatCurrency } from '../../utils/formatters';

interface ProductDetailsProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-dark-card rounded-lg shadow-lg overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
        
        <div className="p-8 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">{product.name}</h1>
            <p className="text-gray-400">{product.description}</p>
          </div>

          <div className="border-t border-dark-lighter pt-6">
            <div className="grid grid-cols-2 gap-4">
              {product.details?.dimensions && (
                <DetailItem icon={<Printer />} label="Size" value={product.details.dimensions} />
              )}
              {product.details?.duration && (
                <DetailItem icon={<Calendar />} label="Duration" value={product.details.duration} />
              )}
              {product.details?.format && (
                <DetailItem icon={<Layout />} label="Format" value={product.details.format} />
              )}
              {product.details?.reach && (
                <DetailItem icon={<Users />} label="Reach" value={product.details.reach} />
              )}
            </div>
          </div>

          <div className="border-t border-dark-lighter pt-6">
            <h3 className="text-lg font-semibold text-white mb-4">Features</h3>
            <ul className="space-y-3">
              {product.features?.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3 text-gray-300">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-dark-lighter pt-6">
            <div className="flex items-center justify-between mb-6">
              <span className="text-3xl font-bold text-white">
                {formatCurrency(product.price)}
              </span>
              <span className="text-sm text-gray-400">per month</span>
            </div>
            <button
              onClick={() => onAddToCart(product)}
              className="w-full bg-primary text-white py-4 rounded-lg hover:bg-primary-light transition-colors flex items-center justify-center space-x-2"
            >
              <ShoppingBag className="h-5 w-5" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailItem = ({ icon, label, value }) => (
  <div className="flex items-start space-x-3">
    <div className="p-2 rounded-lg bg-dark-lighter text-primary">
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-400">{label}</p>
      <p className="text-white font-medium">{value}</p>
    </div>
  </div>
);