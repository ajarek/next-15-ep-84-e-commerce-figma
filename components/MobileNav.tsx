'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet'
import { Input } from './ui/input'
import Image from 'next/image'

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu size={36} />
      </SheetTrigger>
      <SheetContent
        side='left'
        className='border-none bg-card text-card-foreground p-4 shadow-none lg:hidden '
      >
        <SheetTitle className='text-xl font-semibold uppercase italic '>
          <Link
            href='/'
            className='text-[#00BA88] stroke-black stroke-2 font-bold'
          >
            Exclusive
          </Link>
        </SheetTitle>
        <div className='flex flex-col gap-4 mt-4 '>
          <Link
            href='/'
            className={`  text-xl hover:text-primary focus:text-primary `}
            aria-label='Home'
          >
            Home
          </Link>
          <Link
            href='/contact'
            className={`  text-xl hover:text-primary focus:text-primary `}
            aria-label='Contact'
          >
            Contact
          </Link>

          <Link
            href='/about-us'
            className={`  text-xl hover:text-primary focus:text-primary `}
            aria-label='Shop'
          >
            About
          </Link>

          <div className='relative flex items-center  w-[243px]'>
            <Input
              className=' w-[243px] h-[38px] bg-secondary rounded-sm text-[12px] focus-visible:ring-[3px]'
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
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
