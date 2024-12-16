import React from 'react';
import { Plus, Edit, Trash } from 'lucide-react';
import { products } from '../../data/products';

export const AdminProducts = () => {
  return (
    <div className="bg-dark-card rounded-lg shadow-sm border border-dark-lighter">
      <div className="p-4 border-b border-dark-lighter flex justify-between items-center">
        <h2 className="text-lg font-semibold text-white">Products</h2>
        <button className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light">
          <Plus className="h-5 w-5" />
          <span>Add Product</span>
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-dark-lighter">
              <th className="text-left p-4 text-gray-400">Product</th>
              <th className="text-left p-4 text-gray-400">Price</th>
              <th className="text-left p-4 text-gray-400">Category</th>
              <th className="text-left p-4 text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id} className="border-b border-dark-lighter last:border-0">
                <td className="p-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-12 w-12 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-medium text-white">{product.name}</p>
                      <p className="text-sm text-gray-400">{product.id}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-white">${product.price}</td>
                <td className="p-4">
                  <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                    {product.category}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex space-x-2">
                    <button className="p-1 text-gray-400 hover:text-primary">
                      <Edit className="h-5 w-5" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-red-500">
                      <Trash className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};