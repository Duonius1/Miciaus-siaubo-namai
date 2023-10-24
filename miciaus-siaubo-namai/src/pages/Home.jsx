import React from 'react';
import styles from '../style';
import { Hero, Countdown, Sponsors, Team } from '../components';

const Home = () => {
  return (
      <div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Team />
            <Sponsors />
          </div>
        </div>
      </div>
  );
};

export default Home;
