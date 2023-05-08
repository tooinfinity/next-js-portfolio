import Link from 'next/link'
import React from 'react'
import { HiDownload } from 'react-icons/hi'
import { FiMenu } from 'react-icons/fi'
 
const NavBar = ({toggleSidebar}) => {
  
  return (
      <div className="fixed top-0 w-full z-10 border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30
      md:static md:w-auto md:rounded-xl md:border md:bg-gray-200 md:p-4 md:dark:bg-zinc-800/30">
        <div className='container mx-auto flex justify-between items-center py-4 px-4 
        '>
          <div className='text-[24px]'>Too Infinity</div>
          <div className='hidden md:flex gap-6'>
            <Link href='/' className='hover:text-[#ff4D41]' >Home</Link>
            <Link href='/' className='hover:text-[#ff4D41]' >About</Link>
            <Link href='/' className='hover:text-[#ff4D41]' >Skill</Link>
            <Link href='/' className='hover:text-[#ff4D41]' >Service</Link>
            <Link href='/' className='hover:text-[#ff4D41]' >Project</Link>
            <Link href='/' className='hover:text-[#ff4D41]' >Contact</Link>
          </div>
          <a href="#" className='hidden md:flex border border-[#ff4D41] px-4 py-1 text-[#ff4D41] rounded-[5px] items-center gap-2 hover:bg-[#ff4D41] hover:text-white transition duration-200'>Download CV
            <HiDownload />
          </a>
          <div className='md:hidden text-[24px]' onClick={toggleSidebar}>
            <FiMenu />
          </div>
        </div>
      </div>
  )
}

export default NavBar