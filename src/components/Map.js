import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '60vw',
  height: '60vh',
};

const center = {
  lat: -1.8681661,
  lng: 30.0841532,
};

const CurrentLocation = () => {
  return (
    <LoadScript
      googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      ></GoogleMap>
    </LoadScript>
  );
};

const MapView = () => {
  return (
    <div className='flex flex-col items-center justify-center border-t-2 border-black w-[60%] mx-auto'>
      <span className='font-sans italic font-medium text-[1.5rem] text-center my-5'>
        Currently residing in
      </span>
      <span className='font-sans italic font-bold text-[2rem] text-center mb-5'>
        Gasabo, Kigali, Rwanda
      </span>
      <div className='w-full min-h-[60vh] my-10'>
        <CurrentLocation />
      </div>
    </div>
  );
};

export default MapView;
