import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

import ThemeContext from '../context/theme';

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
    <ThemeContext.Consumer>
      {({ isDark }) => (
        <div
          className={`${
            isDark
              ? 'border-white bg-[#121212] text-white'
              : 'border-black bg-white'
          }`}
        >
          <div
            className={`flex flex-col items-center justify-center border-t-2 ${
              isDark ? 'border-white' : 'border-black'
            }  w-[60%] mx-auto`}
          >
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
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default MapView;
