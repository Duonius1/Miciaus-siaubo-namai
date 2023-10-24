import React from 'react';
import styles from '../style';
import { leaders } from '../constants';

const Card = ({ index, image, name, role }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5">
      <div className="flex flex-col justify-center items-center text-center">
        {/* Profile picture */}
        <div className={`w-[100%] h-[100%] ${styles.flexCenter}`}>
          <div className="w-[200px] h-[200px] rounded-full overflow-hidden">
            <img
              src={image}
              alt="profilePicture"
              className="w-full h-full object-contain transform scale-105"
            />
          </div>
        </div>
        {/* Name */}
        <h4 className="font-poppins font-semibold text-[#ed7607] text-[30px] leading-[50px] mt-10 mb-2 spooky-title">{name}</h4>
        {/* Position */}
        <p className={`font-Nosifer font-normal text-[#ed7607] text-[18px] leading-[30.8px] spooky-title`}>{role}</p>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <section id='team' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='flex flex-col h-full'>
        <h1 className="flex-1 font-poppins font-bold md:text-[89px] ss:text-[58px] sm:text-[60px] text-[45px] mt-10 pb-10 text-[#ed7607] dark:text-dark-primary text-center ss:leading-[100.8px] leading-[75px] spooky-title">
          Vadovai
        </h1>
        <div className='flex flex-wrap items-center justify-center w-full relative mt-10 pt-16'>
          {leaders.map((leader) => (
            <Card key={leader.id} {...leader}/>
          ))}
        </div>
      </div>   
    </section>
  )
}

export default Team