import React from 'react';
import styles from '../style';
import { Hero, Countdown, Sponsors, Team, DiscordLink } from '../components';

const Home = () => {
  return (
      <div className='w-full overflow-hidden background-primary'>
        <Hero />
        <div className={`${styles.paddingX} ${styles.flexCenter} `}>
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
