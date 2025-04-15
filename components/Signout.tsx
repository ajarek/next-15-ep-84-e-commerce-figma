import { signOut, auth } from '@/app/api/auth/auth'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'

const Signout = async () => {
  const session = await auth()
  const userImage = session?.user?.image
  return (
    <form
      action={async () => {
        'use server'
        await signOut()
      }}
      className='p-4  flex flex-col items-center rounded-lg border-2 shadow-xl gap-4 min-w-[300px]'
    >
      <div className='flex justify-center p-2'>
        <Link
          href='/'
          aria-label='Logo'
        >
          <Image
            src={userImage ? userImage : '/images/user.png'}
            alt='logo'
            width={60}
            height={60}
            className='w-full h-full object-cover rounded-full  '
          />
        </Link>
      </div>
      <p>Jesteś pewien, że chcesz się wylogować?</p>
      <Button
        type='submit'
        className='w-full bg-red-500 text-white hover:bg-red-600'
        aria-label='Wyloguj się'
      >
        Wyloguj się
      </Button>
    </form>
  )
}

export default Signout
