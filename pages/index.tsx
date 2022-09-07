import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import { useContract, useMetamask, useAddress, useDisconnect, useContractData, useContractCall } from "@thirdweb-dev/react";
import Login from '../components/Login';
import PropagateLoader from 'react-spinners/PropagateLoader'
import Logo from '../assets/babypenguin.png';

const Home: NextPage = () => {
  const address = useAddress();
  const { contract, isLoading } = useContract(process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS);
  //console.log(process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS)
  if (isLoading) return (
    <div className='bg-[#091B18] h-screen flex flex-col items-center justify-center '>
      <div className='flex items-center space-x-2 mb-10 '>
        <img className='rounded-full h-20 w-20' src={Logo.src} alt="" />
        <h1 className='text-lg text-white font-bold '>Loading contract</h1>
      </div>
      <PropagateLoader color="white" size={30} />
    </div>
  )
  if(!address) return < Login />


  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col">
      <Head>
        <title>Lottery App</title>
      </Head>
      <Header />
    </div>
  )
}

export default Home
