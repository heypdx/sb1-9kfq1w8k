import React, { useState, useRef, useEffect } from 'react';
import { Search, MapPin, Star } from 'lucide-react';
import { Card } from '../ui/Card';
import { useGoogleMaps } from '../../hooks/useGoogleMaps';
import { searchPlaces } from '../../services/maps/places';
import type { PlaceResult } from '../../types/maps';

interface PlacesSearchProps {
  onPlaceSelect: (place: google.maps.places.PlaceResult) => void;
}

export const PlacesSearch: React.FC<PlacesSearchProps> = ({ onPlaceSelect }) => {
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState<PlaceResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { isLoaded } = useGoogleMaps();

  useEffect(() => {
    if (isLoaded && searchInputRef.current) {
      const autocomplete = new google.maps.places.Autocomplete(searchInputRef.current, {
        types: ['establishment'],
        bounds: {
          north: 45.6373,
          south: 45.4375,
          east: -122.4753,
          west: -122.8367
        },
        strictBounds: true
      });

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (place.geometry) {
          onPlaceSelect(place);
        }
      });
    }
  }, [isLoaded, onPlaceSelect]);

  const handleSearch = async () => {
    if (!searchValue.trim()) return;
    
    setIsLoading(true);
    try {
      const places = await searchPlaces(searchValue);
      setResults(places);
    } catch (error) {
      console.error('Error searching places:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="p-4">
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            ref={searchInputRef}
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Search local businesses..."
            className="w-full pl-10 pr-4 py-2 bg-dark-lighter border border-dark-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-gray-400"
          />
        </div>

        {results.length > 0 && (
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {results.map((place) => (
              <button
                key={place.place_id}
                onClick={() => onPlaceSelect(place)}
                className="w-full p-3 bg-dark-lighter rounded-lg hover:bg-primary/10 transition-colors text-left"
              >
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{place.name}</h3>
                    <p className="text-sm text-gray-400">{place.formatted_address}</p>
                    {place.rating && (
                      <div className="flex items-center space-x-1 mt-1">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span className="text-sm text-gray-400">
                          {place.rating} ({place.user_ratings_total} reviews)
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};