import React from 'react'
import {BsGithub, BsTwitter, BsFacebook, BsLinkedin} from 'react-icons/bs'
const Social = () => {
  return (
      <div className="flex justify-center item-center mx-auto mt-3 py-4">
        <a className='text-center text-[#171515] cursor-pointer'><BsGithub color='#171515' className='mx-6' fontSize="2em"/>Github</a>
        <a className='text-center text-[#00acee] cursor-pointer'><BsTwitter color='#00acee' className='mx-6' fontSize="2em"/>Twitter</a>
        <a className='text-center text-[#3b5998] cursor-pointer'><BsFacebook color='#3b5998' className='mx-6' fontSize="2em"/>Facebook</a>
        <a className='text-center text-[#0072b1] cursor-pointer'><BsLinkedin color='#0072b1' className='mx-6' fontSize="2em"/>Linkedin</a>
      </div>

  )
}

export default Social