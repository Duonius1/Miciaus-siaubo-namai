import React from 'react';
import { sponsors } from '../constants'; 
import styles from '../style';

const Card = ({ image }) => {
  return (
    <div>
      <img src={image} alt="logo" className="h-[60%] w-[60%]"/>
    </div>
  )
}

const Sponsors = () => {
  return (
    <section id='team' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='flex flex-wrap items-center justify-center w-full feedback-container relative'>
        {sponsors.map((card, index) => {
          return (
            <Card key={index} image={card.icon} />
          )
        })}
      </div>
    </section>
  )
}

export default Sponsors