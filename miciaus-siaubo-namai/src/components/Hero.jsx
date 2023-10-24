import React from "react";
import styles from "../style";
import { catLogoNoTitle, background } from "../assets";
import { Countdown } from "../components";

const Hero = () => {
  return (
    <section id="home" className="relative">
      <div className="flex flex-1 flex-col justify-center items-center">
        <img src={background} alt="background" className="w-full h-auto" />
        <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="flex-1 font-poppins font-extrabold uppercase md:text-[130px] ss:text-[80px] sm:text-[80px] text-[46px] text-[#ed7607] dark:text-dark-primary text-center text-shadow">
            Miciaus
          </h1>
          <h1 className="flex-1 font-poppins font-extrabold uppercase md:text-[130px] ss:text-[80px] sm:text-[90px] text-[46px] text-[#ed7607] dark-text-dark-primary text-center text-shadow">
            Siaubo
          </h1>
          <h1 className="flex-1 font-poppins font-extrabold uppercase md:text-[130px] ss:text-[80px] sm:text-[90px] text-[46px] text-[#ed7607] dark-text-dark-primary text-center text-shadow">
            Namai
          </h1>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-1/2"
        style={{
          background: "linear-gradient(to bottom, rgba(31, 2, 50, 0), #03051b)",
        }}
      ></div>
    </section>
  );
};

export default Hero;
