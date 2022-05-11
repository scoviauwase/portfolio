/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { socialMedia } from '../stub_data/social_media';

const Header = () => {
  return (
    <div className='flex flex-col items-start justify-between w-full px-10 py-10 md:flex-row md:items-center md:px-20'>
      <a
        href='/'
        className='font-sans font-extrabold text-[1.5rem] md:text-[3rem]'
      >
        Scovia Uwase
      </a>
      <ul className='flex flex-row items-center justify-around'>
        {socialMedia
          .filter((media) => media.type === 'dark')
          .map((media) => (
            <li key={media.id} className='mr-3'>
              <a href={media.url} target='_blank' rel='noreferrer'>
                <img src={media.src} alt={media.id} />
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Header;
