import Link from 'next/link'
import React from 'react'
import { Input } from './ui/input'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='h-16 flex items-center justify-center border-b'>
      <nav className='w-[1170px] h-[38px] flex  items-center justify-between'>
        <div className='w-[675px] h-[24px] flex items-center justify-between'>
          <h1 className='w-[118px] text-[24px] text-[#00BA88] stroke-black stroke-2 font-bold '>Exclusive</h1>
          <div className='w-[367px] h-[24px] text-[16px] flex items-center justify-between '>
            <Link href='/'>Home</Link>
            <Link href='/'>Contact</Link>
            <Link href='/'>About</Link>
            <Link href='/'>Sign Up</Link>
          </div>
        </div>
        <div className='w-[347px] h-[38px] flex items-center justify-between'>
          <div className='relative flex items-center'>
          <Input className=' w-[243px] h-[38px] bg-secondary rounded-none text-[12px] focus-visible:ring-[3px]' placeholder='What are you looking for?'/>
             <Image src='/images/Vector.png' alt='Vector ' width={18} height={18} className='absolute top-1/2 translate-y-[-50%] right-2' />
          </div>
          <div className='w-[80px] h-[32px] flex items-center justify-between '>
            <Link href='/heart'>
          <Image src='/images/heart.png' alt='Vector ' width={22} height={20} className='  ' />
          </Link>
          <Link href='/cart'>
          <Image src='/images/cart.png' alt='Vector ' width={24} height={24} className='  ' />
          </Link>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default Header