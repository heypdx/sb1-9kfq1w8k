import React from 'react';
import { MapPin } from 'lucide-react';
import { GoogleMap } from '../maps/GoogleMap';

export const LocalBusinessMap = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-white">Portland Business Map</h2>
          <p className="text-gray-400">View local businesses in your target areas</p>
        </div>
        <MapPin className="h-5 w-5 text-primary" />
      </div>

      <GoogleMap />
    </div>
  );
};