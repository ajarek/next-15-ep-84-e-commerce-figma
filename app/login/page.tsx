import { SignIn } from '@/components/SignIn'
import Image from 'next/image'
import React from 'react'

const Login = () => {
  return (
    <div className='w-full min-h-screen grid grid-cols-2 max-lg:grid-cols-1 gap-8 '>
    <div className='flex items-center justify-end'>
      <Image src='/images/beatsnoop.png' alt='beatsnoop' width={500} height={500} className='rounded-sm' />
    </div>
    <div className='flex items-center justify-start '>
    
    <SignIn />


    </div>
  </div>
  )
}

export default Login
