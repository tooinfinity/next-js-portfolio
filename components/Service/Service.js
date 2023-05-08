import React from 'react'
import Heading from '../common/Heading'
import { AiOutlineApi , AiOutlineGlobal } from 'react-icons/ai'
import { FaLaravel } from 'react-icons/fa'
import Card from './Card'

const Service = () => {
  return (
    <section className='container mx-auto py-10 px-4'>
      <Heading title='Service' />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <Card icon={<AiOutlineApi  className='text-[28px]' />} 
          title='API Designs'
          description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam minima accusamus omnis est consequuntur error numquam tenetur, quos vero voluptate beatae nemo voluptatibus eum itaque laboriosam sed illum deserunt quis?'
        />
        <Card icon={<FaLaravel  className='text-[28px]' />} 
          title='Laravel Framework'
          description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam minima accusamus omnis est consequuntur error numquam tenetur, quos vero voluptate beatae nemo voluptatibus eum itaque laboriosam sed illum deserunt quis?'
        />
        <Card icon={<AiOutlineGlobal  className='text-[28px]' />} 
          title='Web Development'
          description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam minima accusamus omnis est consequuntur error numquam tenetur, quos vero voluptate beatae nemo voluptatibus eum itaque laboriosam sed illum deserunt quis?'
        />
      </div>
    </section>
  )
}

export default Service