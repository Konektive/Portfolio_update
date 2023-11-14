import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const Map = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: 51.107883,
    lng: 17.038538,
  };

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
       <GoogleMap
        
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
        options={{
          zoomControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
          streetViewControl: false,
        }}
      >
      <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
