import React from 'react'
import Social from '../common/Social'

const Footer = () => {
  return (
    <div className='border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit h-[200px] text-black grid place-items-center'>
      <div className='text-center'>
        <Social />
        <p>Made with <span className='text-[#ff4D41] font-bold text-[17px]'>❤️</span> by <span className='font-bold text-[17px]'>TouwfiQ Meghlaoui</span></p>
        <p>&copy; 2023 <span className='text-[#ff4D41] font-bold text-[17px]'>TooInfinity</span></p>
      </div>
    </div>
  )
}

export default Footer