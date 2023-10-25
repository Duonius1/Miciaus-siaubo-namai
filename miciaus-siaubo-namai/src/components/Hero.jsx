import React from "react";
import { background } from "../assets";

const Hero = () => {
  return (
    <section id="home" className="relative">
      <div className="relative">
        <img src={background} alt="background" className="w-full h-auto" />
        <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-50 "></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 gradient-overlay"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="flex-1 font-poppins font-extrabold uppercase md:text-[130px] ss:text-[80px] sm:text-[80px] text-[46px] text-[#ed7607] dark:text-dark-primary text-center text-shadow">
            Miciaus
          </h1>
          <h1 className="flex-1 font-poppins font-extrabold uppercase md:text-[130px] ss:text-[80px] sm:text-[90px] text-[46px] text-[#ed7607] dark-text-dark-primary text-center text-shadow">
            Siaubo
          </h1>
          <h1 className="flex-1 font-poppins font-extrabold uppercase md:text-[130px] ss:text-[80px] sm:text-[90px] text-[41px] text-[#ed7607] dark-text-dark-primary text-center text-shadow">
            Namai
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
