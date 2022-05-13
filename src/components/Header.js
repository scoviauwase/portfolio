/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';

import { socialMedia } from '../stub_data/social_media';

import RwandaFlag from '../assets/icons/rwanda.png';
import USAFlag from '../assets/icons/united_states.png';

import ThemeContext from '../context/theme';
import LanguageContext from '../context/language';

const Header = () => {
  return (
    <LanguageContext.Consumer>
      {({ isEnglish, handleSetEnglish }) => (
        <ThemeContext.Consumer>
          {({ isDark, handleSetDark }) => (
            <div
              className={`flex flex-col items-start justify-between w-full px-10 py-10 md:flex-row md:items-center md:px-20 ${
                isDark ? 'bg-[#121212] text-white' : 'bg-white'
              }`}
            >
              <a
                href='/'
                className='font-sans font-extrabold text-[1.5rem] md:text-[3rem]'
              >
                Scovia Uwase
              </a>
              <button
                onClick={handleSetDark}
                className={`w-[2rem] h-[1rem] border-2 ${
                  !isDark ? 'border-black' : 'border-white'
                } flex items-center justify-center`}
              >
                {!isDark ? <ToggleOffIcon /> : <ToggleOnIcon />}
              </button>
              <button
                onClick={handleSetEnglish}
                className='w-[1.5rem] h-auto  flex items-center justify-center'
              >
                {isEnglish ? <img src={RwandaFlag} /> : <img src={USAFlag} />}
              </button>
              <ul className='flex flex-row items-center justify-around'>
                {socialMedia
                  .filter((media) => (media.type === isDark ? 'dark' : 'light'))
                  .map((media) => (
                    <li key={media.id} className='mr-3'>
                      <a href={media.url} target='_blank' rel='noreferrer'>
                        <img src={media.src} alt={media.id} />
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </ThemeContext.Consumer>
      )}
    </LanguageContext.Consumer>
  );
};

export default Header;
