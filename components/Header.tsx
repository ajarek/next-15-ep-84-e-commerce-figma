import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import Logout from './Logout'
import { auth } from '@/app/api/auth/auth'
import { ShoppingCart } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import LengthCart from './LengthCart'
import { ModeToggle } from './ModeToggle'
import SelectName from './SelectName'

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
          <SelectName query='name' />
        </div>
      </div>
      <div className='w-[280px] flex items-center justify-center gap-4  '>
        <ModeToggle />

        <Link
          href='/cart'
          className=''
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className=''>
                <div className='relative  '>
                  <ShoppingCart
                    size={26}
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
