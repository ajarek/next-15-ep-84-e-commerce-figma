import Link from 'next/link'
import React from 'react'
import { Input } from './ui/input'
import Image from 'next/image'
import MobileNav from './MobileNav'
import Logout from './Logout'
import { auth } from '@/app/api/auth/auth'

const Header = async () => {
  const session = await auth()
  return (
    <div className='w-full h-16 flex items-center justify-between border-b px-4'>
      <div className=' h-[24px] flex items-center justify-between'>
        <h1 className='w-[118px] text-[24px] text-[#00BA88] stroke-black stroke-2 font-bold '>
          Exclusive
        </h1>
        <div className='w-[600px] h-[24px] text-[16px] flex items-center  justify-between max-lg:hidden '>
          <Link href='/'>Home</Link>
          <Link href='/'>Contact</Link>
          <Link href='/'>About</Link>
          <div className='relative flex items-center'>
            <Input
              className=' w-[243px] h-[38px] bg-secondary rounded-none text-[12px] focus-visible:ring-[3px]'
              placeholder='What are you looking for?'
            />
            <Image
              src='/images/Vector.png'
              alt='Vector '
              width={18}
              height={18}
              className='absolute top-1/2 translate-y-[-50%] right-2'
            />
          </div>
        </div>
      </div>
      <div className='w-[347px] h-[38px] flex items-center gap-4 px-4   '>
        
          <Link href='/heart'>
            <Image
              src='/images/heart.png'
              alt='Vector '
              width={22}
              height={20}
              className='  '
            />
          </Link>
          <Link href='/cart'>
            <Image
              src='/images/cart.png'
              alt='Vector '
              width={24}
              height={24}
              className='  '
            />
          </Link>
          <Logout session={session} />
        
      </div>
      <div className=' lg:hidden'>
        <MobileNav />
      </div>
    </div>
  )
}

export default Header
