import Image from 'next/image'
import React from 'react'
import Heading from '../common/Heading'

const Project = () => {
  return (
    <section className='container mx-auto py-10 px-4'>
      <Heading title='Projects' />
      <div className='grid grid-cols-3 gap-4'>
        <div className='row-span-2 relative group'>
          <Image src='/Login.png' width={300} height={400} />
          <div className='bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white'>
            Project Title
          </div>
        </div>
        <div className='relative group'>
          <Image src='/Login.png' width={300} height={400} />
          <div className='bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white'>
            Project Title
          </div>
        </div>
        <div className='relative group'>
          <Image src='/Login.png' width={300} height={400} />
          <div className='bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white'>
            Project Title
          </div>
        </div>
        <div className='relative group'>
          <Image src='/Login.png' width={300} height={400} />
          <div className='bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white'>
            Project Title
          </div>
        </div>
        <div className='relative group'>
          <Image src='/Login.png' width={300} height={400} />
          <div className='bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white'>
            Project Title
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project