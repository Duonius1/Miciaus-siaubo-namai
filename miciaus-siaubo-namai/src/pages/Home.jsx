import React from 'react';
import styles from '../style';
import { Hero, Countdown, Sponsors, Team } from '../components';

const Home = () => {
  return (
    <div className='w-full bg-primary overflow-hidden'>
        <div className={`${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Hero />
            </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Countdown />
                <Team />
                <Sponsors />
            </div>
        </div>
    </div>
  )
}

export default Home;