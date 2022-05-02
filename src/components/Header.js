/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { socialMedia } from '../stub_data/social_media';

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row items-start md:items-center justify-between py-10 px-10 md:px-20 w-full md:w-screen'>
      <a
        href='#'
        className='font-sans font-extrabold text-[1.5rem] md:text-[3rem]'
      >
        Scovia Uwase
      </a>
      <ul className='flex justify-around items-center flex-row'>
        {socialMedia
          .filter((media) => media.type === 'dark')
          .map((media) => (
            <li key={media.id} className='md:mx-3 mr-3'>
              <a href={media.url}>
                <img src={media.src} alt={media.id} />
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Header;
