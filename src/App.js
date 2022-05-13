import React, { useState } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './components/Landing';
import MapView from './components/Map';

import ThemeContext from './context/theme';

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const handleSetDark = () => setIsDark(!isDark);
  return (
    <ThemeContext.Provider value={{ isDark, handleSetDark }}>
      <Header />
      <Landing />
      <MapView />
      <Footer />
    </ThemeContext.Provider>
  );
};

export default App;
