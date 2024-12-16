import { useState, useEffect } from 'react';

const GOOGLE_MAPS_API_KEY = 'AIzaSyARdIl0Jm3d-Iu90CtAdxn64HHN6klZENw';
const GOOGLE_MAPS_LIBRARIES = ['places'];
const SCRIPT_ID = 'google-maps-script';

interface GoogleMapsState {
  isLoaded: boolean;
  loadError: Error | null;
}

let scriptPromise: Promise<void> | null = null;

const loadGoogleMapsScript = (): Promise<void> => {
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve, reject) => {
    if (window.google) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=${GOOGLE_MAPS_LIBRARIES.join(',')}`;
    script.async = true;
    script.defer = true;

    script.addEventListener('load', () => resolve());
    script.addEventListener('error', (error) => reject(error));

    document.head.appendChild(script);
  });

  return scriptPromise;
};

export const useGoogleMaps = () => {
  const [state, setState] = useState<GoogleMapsState>({
    isLoaded: !!window.google,
    loadError: null
  });

  useEffect(() => {
    if (window.google) {
      setState({ isLoaded: true, loadError: null });
      return;
    }

    loadGoogleMapsScript()
      .then(() => setState({ isLoaded: true, loadError: null }))
      .catch((error) => setState({ isLoaded: false, loadError: error as Error }));
  }, []);

  return state;
};