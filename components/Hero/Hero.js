import Image from 'next/image'
import React, { Component } from 'react'
import Typewriter from 'typewriter-effect'
import Button from '../common/Button'
import Social from '@/components/common/Social'

export class Hero extends Component {
  render() {
    return (
      <div className='bg-[#e5e7eb] h-screen flex flex-row  flex-wrap items-center'>
        <div className='container flex justify-between flex-col md:flex-row mx-auto px-4 py-4 gap-5'>
          <div>
            <div className='max-w-[450px] text-white flex flex-col gap-[40px]'>
              <div>
                <h1 className='text-5xl text-black'>TouwfiQ Meghlaoui</h1>
                <h4 className='text-2xl mt-3 text-black'>
                  <Typewriter
                    options={{
                      strings: [
                        'Laravel Developer',
                        'Frontend Developer'
                      ],
                      changeDelay: 3,
                      changeDeleteSpeed: 2,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h4>
              </div>
              <div className='bg-[#ff4D41] rounded-sm h-[4px] w-[40px]'></div>
              <div className="">
                    <p className='text-black'>
                    I create better websites looking good and function.  I try to do the best
                    </p>
                  </div>
            </div>
            <Button className='flex justify-center' text={'Hire Me'} link='#' />
            </div>
            <div className=''>
          <Image
          src="/182.jpg"
          alt="TouwfiQ Meghlaoui"
          width={300}
          height={300}
          className='shadow-[inset_0_0_0_9px_rgb(255,255,255 / 30%)]  justify-self-center too-image'
          />
          <Social />
        </div>
          
        </div>
        
        

      </div>
    )
  }
}

export default Hero