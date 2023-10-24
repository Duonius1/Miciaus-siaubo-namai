import React from 'react'
import styles from '../style'
import { discordLogo } from '../assets'

const Link = () => {
  return (
    <section id='link' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='flex flex-col h-full'>
        <h1 className="flex-1 font-poppins font-bold md:text-[89px] ss:text-[58px] sm:text-[60px] text-[45px] mb-10 pb-20 text-[#ed7607] dark:text-dark-primary text-center ss:leading-[100.8px] leading-[75px] spooky-title">
          Discord
        </h1>
        <div className='flex flex-1 justify-center items-center'>
          <a href="https://discord.gg/uq2Drjtf" className="w-[35%] h-[35%] overflow-hidden" target="_blank">
            <img src={discordLogo} alt="discord"/>
          </a>
        </div>
      </div>   
    </section>
  )
}

export default Link