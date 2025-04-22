import Link from 'next/link'
import React from 'react'
import { Input } from './ui/input'
import Image from 'next/image'
import MobileNav from './MobileNav'
import Logout from './Logout'
import { auth } from '@/app/api/auth/auth'
import { Heart, ShoppingCart } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import LengthCart from './LengthCart'

const Header = async () => {
  const session = await auth()
  return (
    <div className='w-full h-16 flex items-center justify-between border-b px-4'>
      <div className='w-full  flex items-center justify-between'>
        <h1 className=' text-xl text-[#00BA88] stroke-black stroke-2 font-bold '>
          Exclusive
        </h1>
        <div className=' text-lg flex items-center  justify-between gap-4  max-lg:hidden '>
          <Link href='/'>Home</Link>
          <Link href='/products'>Products</Link>
          <Link href='/about'>About</Link>
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
      <div className='w-[260px] flex items-center justify-center gap-4  '>
        <Link
          href='/heart'
          className=''
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className=''>
                <Heart
                  size={24}
                  strokeWidth={1}
                  aria-label='heart'
                />
              </TooltipTrigger>
              <TooltipContent>
                <p className='capitalize'>Like</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>
        <Link
          href='/cart'
          className=''
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className=''>
                <div className='relative  '>
                <ShoppingCart
                  size={24}
                  strokeWidth={1}
                  aria-label='Cart'
                />
               <LengthCart />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className='capitalize'>Cart</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
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
