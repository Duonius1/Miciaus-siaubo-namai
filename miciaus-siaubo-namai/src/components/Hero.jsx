import React from 'react';
import styles from '../style';
import { catLogoNoTitle } from '../assets';
import { Countdown } from '../components';

const Hero = () => {

  return (
    <section id='home' className={`flex flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 py-16`} style={{ position: 'relative' }}>
        <div className="flex flex-col justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-bold ss:text-[72px] mb-20 text-[#ed7607] dark:text-dark-primary text-[52px] text-center ss:leading-[100.8px] leading-[75px] spooky-title">
            Miciaus Siaubo Namai
          </h1>
          <div className='flex flex-col flex-1 justify-center items-center mt-10' style={{ position: 'relative' }}>
            <img src={catLogoNoTitle} alt="logo" className='mb-2 ss:mb-7 w-[100%] h-[100%] sm:w-[60%] sm:h-[60%] ss:w-[50%] ss:h-[50%] object-contain' style={{ filter: 'drop-shadow(4px 4px 6px rgba(0, 0, 255, 0.5)' }} />
            <Countdown />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
