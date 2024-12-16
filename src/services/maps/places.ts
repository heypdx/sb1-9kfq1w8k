import type { PlaceResult, SearchFilters } from '../../types/maps';

// Prevent multiple script loads
let placesService: google.maps.places.PlacesService | null = null;

const PORTLAND_BOUNDS = {
  north: 45.6373,
  south: 45.4375,
  east: -122.4753,
  west: -122.8367
};

const initPlacesService = () => {
  if (!placesService) {
    const div = document.createElement('div');
    placesService = new google.maps.places.PlacesService(div);
  }
  return placesService;
};

export const searchPlaces = async (
  query: string,
  filters: SearchFilters = {}
): Promise<PlaceResult[]> => {
  const service = initPlacesService();

  return new Promise((resolve, reject) => {
    const request = {
      query,
      bounds: new google.maps.LatLngBounds(
        { lat: PORTLAND_BOUNDS.south, lng: PORTLAND_BOUNDS.west },
        { lat: PORTLAND_BOUNDS.north, lng: PORTLAND_BOUNDS.east }
      ),
      ...filters
    };

    service.textSearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        const filteredResults = results.filter(place => {
          if (filters.minRating && place.rating) {
            return place.rating >= filters.minRating;
          }
          return true;
        });
        resolve(filteredResults as PlaceResult[]);
      } else {
        reject(new Error(`Places search failed with status: ${status}`));
      }
    });
  });
};