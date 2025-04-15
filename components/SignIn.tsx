import { signIn } from '@/app/api/auth/auth'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export function SignIn() {
  return (
    <form
      action={async (formData) => {
        'use server'
        const username = formData.get('username') as string
        const password = formData.get('password') as string
        try {
          await signIn('credentials', {
            redirect: false,
            username,
            password,
          })
        } catch (error) {
          console.error(error)
        } finally {
          redirect('/cryptoList')
        }
      }}
      className='p-4  flex flex-col items-center rounded-lg border-2 shadow-xl gap-4 min-w-[300px]'
    >
      <div className='flex justify-center p-2'>
        <Link
          href='/'
          aria-label='Logo'
        >
          <Image
            src='/images/user.png'
            alt='logo'
            width={60}
            height={60}
            className='w-full h-full object-cover  '
          />
        </Link>
      </div>
      <Label className='w-full'>
        Imię
        <Input
          name='username'
          type='text'
          className='mt-2'
          required
        />
      </Label>
      <Label className='w-full'>
        Hasło
        <Input
          name='password'
          type='password'
          className='mt-2'
          required
        />
      </Label>
      <Button
        type='submit'
        className='w-full bg-[#0E78F9] text-white hover:bg-[#0E78F9]/90'
        aria-label='Zaloguj'
      >
        Zaloguj
      </Button>
      <Link
        href='/register'
        className=''
        aria-label='Nie masz konta? Zarejestruj się'
      >
        Nie masz konta? <b className='text-[#0E78F9]'>Zarejestruj się</b>
      </Link>
    </form>
  )
}
