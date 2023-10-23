import React from 'react';
import styles from '../style';


const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 py-16 my-10`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-black dark:text-dark-primary text-[52px] ss:leading-[100.8px] leading-[75px]">
            Miciaus siaubo namai
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Hero