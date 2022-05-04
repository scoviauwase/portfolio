import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './components/Landing';
import MapView from './components/Map';

const App = () => {
  return (
    <>
      <Header />
      <Landing />
      <MapView />
      <Footer />
    </>
  );
};

export default App;
