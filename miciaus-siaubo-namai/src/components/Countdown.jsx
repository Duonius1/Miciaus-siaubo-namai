import React, { useState, useEffect } from "react";
import styles from "../style";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2023-10-26T20:00:00+03:00");
    const currentDate = new Date();
    const difference = targetDate - currentDate;

    if (difference <= 0) {
      return "00 : 00 : 00 : 00";
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return `${days.toString().padStart(2, "0")} : ${hours
      .toString()
      .padStart(2, "0")} : ${minutes.toString().padStart(2, "0")} : ${seconds
      .toString()
      .padStart(2, "0")}`;
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
    <section
      id="countdown"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col`}
    >
      <div className="flex flex-1 items-center justify-center flex-col my-10 py-20">
        <h1 className="flex-1 font-poppins font-bold md:text-[36px] ss:text-[25px] sm:text-[30px] text-[18px] dark:text-dark-primary spooky-title">
          Iki renginio pradžios liko
        </h1>
        <p>
          <span className="flex-1 font-poppins font-bold md:text-[89px] ss:text-[58px] sm:text-[60px] text-[45px] dark:text-dark-primary spooky-title">
            {timeLeft}
          </span>
        </p>
      </div>
    </section>
  );
};

export default Countdown;
