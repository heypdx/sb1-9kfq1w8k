import React from 'react';
import { Filter, Star } from 'lucide-react';
import type { SearchFilters } from '../../types/maps';

interface PlacesFiltersProps {
  filters: SearchFilters;
  onFilterChange: (filters: SearchFilters) => void;
}

export const PlacesFilters: React.FC<PlacesFiltersProps> = ({
  filters,
  onFilterChange
}) => {
  const businessTypes = [
    { value: 'restaurant', label: 'Restaurants' },
    { value: 'store', label: 'Retail Stores' },
    { value: 'service', label: 'Services' }
  ];

  return (
    <div className="bg-dark-card p-4 rounded-lg border border-dark-lighter">
      <div className="flex items-center space-x-2 mb-4">
        <Filter className="h-5 w-5 text-primary" />
        <h3 className="font-medium text-white">Filters</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Business Type
          </label>
          <div className="space-y-2">
            {businessTypes.map(type => (
              <label key={type.value} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filters.type?.includes(type.value)}
                  onChange={(e) => {
                    const types = filters.type || [];
                    onFilterChange({
                      ...filters,
                      type: e.target.checked
                        ? [...types, type.value]
                        : types.filter(t => t !== type.value)
                    });
                  }}
                  className="rounded bg-dark border-dark-lighter text-primary"
                />
                <span className="text-gray-300">{type.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Minimum Rating
          </label>
          <div className="flex items-center space-x-2">
            {[1, 2, 3, 4, 5].map(rating => (
              <button
                key={rating}
                onClick={() => onFilterChange({ ...filters, minRating: rating })}
                className={`p-2 rounded-lg ${
                  filters.minRating === rating
                    ? 'bg-primary text-white'
                    : 'bg-dark-lighter text-gray-400 hover:text-primary'
                }`}
              >
                <Star className="h-4 w-4" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={filters.openNow}
              onChange={(e) => onFilterChange({ ...filters, openNow: e.target.checked })}
              className="rounded bg-dark border-dark-lighter text-primary"
            />
            <span className="text-gray-300">Open Now</span>
          </label>
        </div>
      </div>
    </div>
  );
};