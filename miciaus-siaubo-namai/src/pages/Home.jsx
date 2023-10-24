import React from 'react';
import styles from '../style';
import { Hero, Countdown, Sponsors, Team, DiscordLink } from '../components';

const Home = () => {
  return (
      <div className='bg-primary w-full overflow-hidden'>
        <Hero />
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Countdown />
            <Team />
            <DiscordLink />
            <Sponsors />
          </div>
        </div>
      </div>
  );
};

export default Home;
