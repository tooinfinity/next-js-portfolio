import React from 'react'
import Heading from '../common/Heading'

const Contact = () => {
  return (
    <section className='container mx-auto py-10 px-4'>
      <Heading title='Contact Me' /> 
      <form className='flex flex-col gap-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <input type='text' placeholder='Name' className='inputStyle' required />
          <input type='email' placeholder='Email' className='inputStyle' required />
        </div>
        <input type='text' placeholder='Subject' className='inputStyle' required />
        <textarea placeholder='Message' className='inputStyle' rows="6" required></textarea>
        <div>
          <button className='btn' type='submit1'>Send Message</button>
        </div>
      </form>
    </section>
  )
}

export default Contact