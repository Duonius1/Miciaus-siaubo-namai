import React from 'react';
import { sponsors } from '../constants'; 
import styles from '../style';

const Card = ({ image }) => {
  return (
    <div className='flex mt-20'>
      <img src={image} alt="logo" className="w-[300px] object-contain card-hover"/>
    </div>
  )
}

const Sponsors = () => {
  return (
    <section id='team' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='flex flex-col h-full'>
        <h1 className="flex-1 font-poppins font-bold ss:text-[72px] mb-10 text-[#ed7607] dark:text-dark-primary text-[52px] text-center ss:leading-[100.8px] leading-[75px] spooky-title">
          Renginio rėmėjai
        </h1>
        <div className='flex flex-col items-center justify-center w-full relative'>
          {sponsors.map((card, index) => {
            return (
              <Card key={index} image={card.icon} />
            )
          })}
        </div>
      </div>   
    </section>
  )
}

export default Sponsors