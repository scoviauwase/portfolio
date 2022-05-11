/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import Copyright from '../assets/icons/copyright_light.png';
import { socialMedia } from '../stub_data/social_media';

const Footer = () => {
  return (
    <div className='flex flex-col items-start justify-between w-full px-10 py-10 md:flex-row md:items-center md:px-20 bg-[#121212]'>
      <ul className='flex flex-row items-center justify-around'>
        {socialMedia
          .filter((media) => media.type === 'light')
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
        <img src={Copyright} alt='copyright' />
        <span className='font-sans font-medium text-[1.5rem] text-white ml-2'>
          Scovia Uwase
        </span>
      </a>
    </div>
  );
};

export default Footer;
