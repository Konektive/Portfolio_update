import React from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api';

const Map = () => {
    const mapContainerStyle = {
      width: '100%',
      height: '100%',
    };
  
    const center = {
      lat: 51.10243202600638,
      lng: 17.037140410441395,
    };
  
    return (
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    );
  };

export default Map;