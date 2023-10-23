import React, { useState, useEffect } from 'react'
import styles from "../style";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2023-10-26T18:00:00+03:00");
    const currentDate = new Date();
    const difference = targetDate - currentDate;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);

    return {
      days,
      hours,
      minutes,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  });

  return (
    <section id='countdown' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <p>
        <span>{timeLeft.days} : </span>
        <span>{timeLeft.hours} : </span>
        <span>{timeLeft.minutes}</span>
      </p>
    </section>
  )
}

export default Countdown