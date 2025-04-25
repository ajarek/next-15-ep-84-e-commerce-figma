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
    <div className=' flex items-center gap-2 '>
      {session ? (
        <>
          <LogoutBtn />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className=''>
                <Image
                  src={session.user?.image || ''}
                  width={34}
                  height={34}
                  alt='user'
                  className='rounded-full'
                />
              </TooltipTrigger>
              <TooltipContent>
                <p className='capitalize'>{session.user?.name || 'User'}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </>
      ) : (
        <Link
          href='/login'
          className=''
          aria-label='Login'
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {' '}
                <KeyRound
                  size={24}
                  strokeWidth={1}
                  aria-label='Login'
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Login</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>
      )}
    </div>
  )
}

export default Logout
