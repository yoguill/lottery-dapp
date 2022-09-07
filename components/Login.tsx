import { useMetamask } from '@thirdweb-dev/react';
import React from 'react'
import Logo from '../assets/babypenguin.png';

function Login() {
    const connectWithMetamask = useMetamask();
  return (
    <div className='bg-[#091B18] min-h-screen flex flex-col items-center justify-center text-center'>
        <div className='flex flex-col items-center mb-10'>
            <img className="rounded-full h-56 w-56 mb-10" src={Logo.src} alt="" />
            <h1 className='text-6xl text-white font-bold'>Lottery</h1>
            <h2 className='text-white'>Get started by loggin in with your metamask</h2>
            <button onClick={connectWithMetamask} className='bg-white px-8 py05 mt-10 rounded-lg shadow-lg font-bold'>
                Login with Metamask
            </button>
        </div>
    </div>
  )
}

export default Login