import type { Session } from 'next-auth'
import Link from 'next/link'
import LogoutBtn from '@/components/LogoutBtn'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { KeyRound } from 'lucide-react'
import 'next-auth'
import Image from 'next/image'

const Logout = async ({ session }: { session: Session | null }) => {
  return (
    <div className='flex flex-col gap-6  '>
      {session ? (
        <LogoutBtn />
      ) : (
        <Link
          href='/login'
          className='bg-secondary w-8 h-8 rounded-full flex justify-center items-center hover:border-2 border-primary  transition-all delay-200 '
          aria-label='Logowanie'
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {' '}
                <KeyRound
                  size={24}
                  strokeWidth={1}
                  aria-label='Logowanie'
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Logowanie</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>
      )}
      {session && (
        <>
          <Link
            href='/my-courses'
            className='bg-secondary w-8 h-8 rounded-full flex justify-center items-center secondary-foreground  transition-all delay-200 border-2 border-green-500 lg:hidden'
            aria-label='Moje kursy'
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className='text-2xl'>
                  <Image
                    src={session.user?.image || ''}
                    width={30}
                    height={30}
                    alt='user'
                    className='rounded-full'
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p className='capitalize'>
                    {' '}
                    {session.user?.name || 'Użytkownik'}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
          <Link
            href='/'
            className='bg-secondary w-8 h-8 rounded-full flex justify-center items-center secondary-foreground  transition-all delay-200 border-2 border-green-500 max-lg:hidden'
            aria-label='Moje kursy'
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className='text-xl'>
                  <Image
                    src={session.user?.image || ''}
                    width={30}
                    height={30}
                    alt='user'
                    className='rounded-full'
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p className='capitalize'>
                    {' '}
                    {session.user?.name || 'Użytkownik'}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
        </>
      )}
    </div>
  )
}

export default Logout
