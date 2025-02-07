// src/components/Profile/LocationInfo.tsx
import React from 'react';
import { MapPin } from 'lucide-react';

const LocationInfo = () => {
  return (
    <div className="flex items-center gap-2">
      <MapPin className="w-5 h-5 text-red-500" />
      <span>Current location: <span className="font-medium">San Francisco</span></span>
    </div>
  );
};

export default LocationInfo;