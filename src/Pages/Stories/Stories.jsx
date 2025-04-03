import React from 'react'
import { Link } from 'react-router-dom'

const Stories = () => {
  return (
    <div className='lg:max-w-[41vw] md:mx-w-[70vw]  sm:max-w-full max-w-full h-auto flex items-center gap-x-3.5 overflow-x-scroll'>
      <Link to="/" className='flex items-center flex-col flex-shrink-0'>
      <div className='w-16 h-16 rounded-full object-cover p-[2px] bg-green-600'>
        <img src="/images/foodTray.jpeg" alt="" className='rounded-full w-full h-full object-cover p[2.5px] bg-black'/>
      </div>
      </Link>
    </div>
  )
}

export default Stories
