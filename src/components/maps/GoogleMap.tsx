import React, { useEffect, useRef, useState } from 'react';
import { Card } from '../ui/Card';
import { useGoogleMaps } from '../../hooks/useGoogleMaps';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { darkMapStyle } from '../../services/maps/mapStyles';
import { searchPlaces } from '../../services/maps/places';
import { PlacesSearch } from './PlacesSearch';
import { PlacesFilters } from './PlacesFilters';
import type { SearchFilters } from '../../types/maps';

interface GoogleMapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
}

export const GoogleMap: React.FC<GoogleMapProps> = ({
  center = { lat: 45.5155, lng: -122.6789 }, // Portland coordinates
  zoom = 12
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const [filters, setFilters] = useState<SearchFilters>({});
  const { isLoaded, loadError } = useGoogleMaps();

  useEffect(() => {
    if (!isLoaded || !mapRef.current) return;

    // Initialize map only once
    if (!mapInstanceRef.current) {
      mapInstanceRef.current = new google.maps.Map(mapRef.current, {
        center,
        zoom,
        styles: darkMapStyle,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false
      });
    }
  }, [isLoaded, center, zoom]);

  const handlePlaceSelect = (place: google.maps.places.PlaceResult) => {
    if (place.geometry?.location && mapInstanceRef.current) {
      mapInstanceRef.current.setCenter(place.geometry.location);
      mapInstanceRef.current.setZoom(15);
    }
  };

  if (loadError) {
    return (
      <Card>
        <div className="h-96 flex items-center justify-center">
          <p className="text-red-400">Error loading Google Maps</p>
        </div>
      </Card>
    );
  }

  if (!isLoaded) {
    return (
      <Card>
        <div className="h-96 flex items-center justify-center">
          <LoadingSpinner size="lg" />
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-1 space-y-4">
          <PlacesSearch onPlaceSelect={handlePlaceSelect} />
          <PlacesFilters filters={filters} onFilterChange={setFilters} />
        </div>
        <div className="lg:col-span-2">
          <Card>
            <div ref={mapRef} className="h-96 w-full rounded-lg" />
          </Card>
        </div>
      </div>
    </div>
  );
};