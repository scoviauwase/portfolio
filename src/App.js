import React, { useState } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './components/Landing';
import MapView from './components/Map';

import ThemeContext from './context/theme';
import LanguageContext from './context/language';

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);
  const handleSetDark = () => setIsDark(!isDark);
  const handleSetEnglish = () => setIsEnglish(!isEnglish);
  return (
    <LanguageContext.Provider value={{ isEnglish, handleSetEnglish }}>
      <ThemeContext.Provider value={{ isDark, handleSetDark }}>
        <Header />
        <Landing />
        <MapView />
        <Footer />
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
};

export default App;
