import React from 'react';
import { sponsors } from '../constants'; 
import styles from '../style';

const Card = ({ index, image, link }) => {
  return (
    <div className='flex md:mx-20 my-20'>
      <a href={link} className="w-[300px] object-contain card-hover" target="_blank">
        <img src={image} alt="logo"/>
      </a>
    </div>
  )
}

const Sponsors = () => {
  return (
    <section id='team' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='flex flex-col h-full'>
        <h1 className="flex-1 font-poppins font-bold md:text-[89px] ss:text-[58px] sm:text-[60px] text-[45px] mb-10 pb-20 text-[#ed7607] dark:text-dark-primary text-center ss:leading-[100.8px] leading-[75px] spooky-title">
          Renginio rėmėjai
        </h1>
        <div className='flex flex-col md:flex-row items-center justify-center w-full relative'>
          {sponsors.map((card) => {
            return (
              <Card key={card.id} {...card} image={card.image} />
            )
          })}
        </div>
      </div>   
    </section>
  )
}

export default Sponsors