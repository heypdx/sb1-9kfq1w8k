import React, { useState } from 'react';
import { LoadingSpinner } from '../ui/LoadingSpinner';

export const EDDMFrame = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-dark-card rounded-lg border border-dark-lighter overflow-hidden">
      {isLoading && (
        <div className="flex items-center justify-center h-96">
          <LoadingSpinner size="lg" />
        </div>
      )}
      
      <iframe
        src="https://eddm.usps.com/eddm/select-routes.htm"
        className={`w-full min-h-[800px] border-0 transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        title="USPS EDDM Tool"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};