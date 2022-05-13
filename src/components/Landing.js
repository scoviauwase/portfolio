/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import Profile from '../assets/images/profile.png';

import ThemeContext from '../context/theme';
import LanguageContext from '../context/language';

const Landing = () => {
  return (
    <LanguageContext.Consumer>
      {({ isEnglish }) => (
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
                <p
                  className={`font-sans font-light text-[1.5rem] md:text-[3rem] w-full ${
                    isEnglish ? 'md:w-[60%]' : 'md:w-[70%]'
                  }`}
                >
                  {isEnglish
                    ? 'Nyacyonga Based Full stack Software Developer.'
                    : 'Umu Full stack Software Developer Wa Nyacyonga'}
                </p>
                <p
                  className={`font-sans font-light text-[0.75rem] md:text-[1.5rem]  ${
                    isEnglish ? 'md:w-[60%]' : 'md:w-[70%]'
                  }`}
                >
                  {isEnglish
                    ? 'My timeless, humble and clever approach to design and implementation helps me constantly find new ways to solve problems.'
                    : 'Uburyo bwanjye butajegajega, bwicisha bugufi kandi bwubwenge muburyo bwo gushushanya no kubishyira mubikorwa bimfasha guhora mbona inzira nshya zo gukemura ibibazo.'}
                </p>
                <p className='font-sans font-light text-[0.625rem] md:text-[1.25rem] w-full md:w-[60%]'>
                  {isEnglish
                    ? 'I’m currently working as freelancer full stack Software Developer'
                    : 'Ubu ndimo gukora nka Freelancer yuzuye stack Software'}
                </p>
              </div>
            </div>
          )}
        </ThemeContext.Consumer>
      )}
    </LanguageContext.Consumer>
  );
};

export default Landing;
