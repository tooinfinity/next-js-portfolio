import Image from 'next/image'
import React from 'react'
import Heading from '../common/Heading'

import { BsGlobe2 } from 'react-icons/bs'
import { FiBookOpen } from 'react-icons/fi'
import { TbPacman } from 'react-icons/tb'
import { IoLocationOutline } from 'react-icons/io5'
import { AiOutlineGift } from 'react-icons/ai'
import Button from '../common/Button'



const About = () => {
  return (
    <section className='container mx-auto py-10 px-4'>
      <Heading title='About Me' />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
        <div>
          <Image
            src="/182.jpg"
            alt="TouwfiQ Meghlaoui"
            width={400}
            height={400}
          />
        </div>
        <div>
          <div className="flex items-center justify-between w-[300px]">
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-center font-medium">
                <AiOutlineGift className='text-[#ff4D41] text-[22px]' />
                  Birthday
              </div>
              <div className="flex gap-4 items-center font-medium">
                <FiBookOpen className='text-[#ff4D41] text-[22px]' />
                  Study
              </div>
              <div className="flex gap-4 items-center font-medium">
                <BsGlobe2 className='text-[#ff4D41] text-[22px]' />
                  Website
              </div>
              <div className="flex gap-4 items-center font-medium">
                <TbPacman className='text-[#ff4D41] text-[22px]' />
                  Interest
              </div>
              <div className="flex gap-4 items-center font-medium">
                <IoLocationOutline className='text-[#ff4D41] text-[22px]' />
                  Location
              </div>
            </div>
            <div className='flex flex-col gap-6 text-gray-600'>
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
            </div>
            <div className='flex flex-col gap-6 text-gray-600'>
              <div>25.03.1992</div>
              <div>University Centre Mila</div>
              <div>www.tooinfinitydev.xyz</div>
              <div>develop, IT, Technology</div>
              <div>Mila, Algeria</div>
            </div>
          
          </div> 
          <div className='max-w-[800px]'>
            <h2 className='font-bold mt-16 mb-10'>
              I'm TouwfiQ Laravel Developer
            </h2>
            <p>Hi! My name is TouwfiQ Meghlaoui. I'm a web Developer and very passionate and dedi my work. With three years of experience as professional. </p>
            <Button link='#' text='Hire Me' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About