import React from 'react'

const Card = ({icon,title,description}) => {
  return (
    <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4D41] text-white'>
          {icon}
          <h2 className='font-medium text-[20px]'>{title}</h2>
          <p>{description}</p>
        </div>
  )
}

export default Card