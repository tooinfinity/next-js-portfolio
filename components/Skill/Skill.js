import React from 'react'
import Heading from '../common/Heading'

const Skill = () => {
  return (
    <section className='container mx-auto py-10 px-4'>
      <Heading title='Skills' />
      <p className='text-gray-600 -mt-10 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quas iusto, natus explicabo veritatis quidem praesentium dicta. Nisi officia debitis porro sequi necessitatibus omnis vero non iusto, ab soluta quam.</p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div>
          <p>ReactJs</p>
          <div className='relative bg-gray-400 h-[4px] mt-2'>
            <div className='bg-[#ff4D41] absolute h-[4px] w-[90%]'></div>
          </div>
        </div>
        <div>
          <p>NextJs</p>
          <div className='relative bg-gray-400 h-[4px] mt-2'>
            <div className='bg-[#ff4D41] absolute h-[4px] w-[70%]'></div>
          </div>
        </div>
        <div>
          <p>Laravel</p>
          <div className='relative bg-gray-400 h-[4px] mt-2'>
            <div className='bg-[#ff4D41] absolute h-[4px] w-[60%]'></div>
          </div>
        </div>
        <div>
          <p>PHP</p>
          <div className='relative bg-gray-400 h-[4px] mt-2'>
            <div className='bg-[#ff4D41] absolute h-[4px] w-[60%]'></div>
          </div>
        </div>
        <div>
          <p>VueJs</p>
          <div className='relative bg-gray-400 h-[4px] mt-2'>
            <div className='bg-[#ff4D41] absolute h-[4px] w-[40%]'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill