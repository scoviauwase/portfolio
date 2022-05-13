/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import Profile from '../assets/images/profile.png';

import ThemeContext from '../context/theme';

const Landing = () => {
  return (
    <ThemeContext.Consumer>
      {({ isDark }) => (
        <div
          className={`flex flex-col px-10 py-10 md:flex-row md:justify-between md:items-start md:px-20 ${
            isDark ? 'bg-[#121212] text-white' : 'bg-white'
          }`}
        >
          <div className='w-full md:w-[26%] min-h-full md:min-h-[70vh]'>
            <img src={Profile} className='w-full h-full' />
          </div>
          <div
            className={`border-t-2 ${
              isDark ? 'border-white' : 'border-black'
            } w-full  md:w-[60%] min-h-[75vh] md:min-h-[70vh] flex flex-col items-start justify-around`}
          >
            <p className='font-sans font-light text-[1.5rem] md:text-[3rem] w-full md:w-[60%]'>
              Nyacyonga Based Full stack Software Developer.
            </p>
            <p className='font-sans font-light text-[0.75rem] md:text-[1.5rem] w-[60%]'>
              My timeless, humble and clever approach to design and
              implementation helps me constantly find new ways to solve
              problems.
            </p>
            <p className='font-sans font-light text-[0.625rem] md:text-[1.25rem] w-full md:w-[60%]'>
              I’m currently working as freelancer full stack Software Developer
            </p>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Landing;
