export interface PlaceResult extends google.maps.places.PlaceResult {
  place_id: string;
  name: string;
  formatted_address?: string;
  rating?: number;
  user_ratings_total?: number;
  geometry: {
    location: google.maps.LatLng;
  };
}

export interface SearchFilters {
  type?: string[];
  radius?: number;
  minRating?: number;
  openNow?: boolean;
}