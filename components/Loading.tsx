import React from 'react'
import PropagateLoader from 'react-spinners/PropagateLoader'
import Logo from '../assets/babypenguin.png';

function Loading() {
  return (
    <div className='bg-[#091B18] h-screen flex flex-col items-center justify-center '>
      <div className='flex items-center space-x-2 mb-10 '>
        <img className='rounded-full h-20 w-20' src={Logo.src} alt="" />
        <h1 className='text-lg text-white font-bold '>Loading contract</h1>
      </div>
      <PropagateLoader color="white" size={30} />
    </div>
  )
}

export default Loading