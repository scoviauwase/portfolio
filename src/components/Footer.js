/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import Copyright from '../assets/icons/copyright_light.png';
import CopyrightDark from '../assets/icons/copyright_dark.png';
import { socialMedia } from '../stub_data/social_media';

import ThemeContext from '../context/theme';

const Footer = () => {
  return (
    <ThemeContext.Consumer>
      {({ isDark }) => (
        <div
          className={`flex flex-col items-start justify-between w-full px-10 py-10 md:flex-row md:items-center md:px-20 ${
            isDark ? 'bg-[#121212] text-white' : 'bg-white text-[#121212]'
          } `}
        >
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
          <a
            href='#'
            className='font-sans font-extrabold text-[1.5rem] md:text-[3rem] flex items-center'
          >
            <img src={!isDark ? CopyrightDark : Copyright} alt='copyright' />
            <span className='font-sans font-medium text-[1.5rem] ml-2'>
              Scovia Uwase
            </span>
          </a>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Footer;
