'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const NotFoundPage = () => {
  const router = useRouter()
  return (
    <div className='w-full min-h-[calc(100vh-32px)] flex flex-col items-center justify-start gap-4 p-2'>
      <Image
        src='/notfound.jpeg'
        alt='404'
        width={400}
        height={266}
        priority
      />
      <h1 className='text-center text-xl font-semibold'>
        Nie znaleziono podanej strony.
      </h1>
      <p className='text-center'>
        Strona, której szukasz, mogła zostać usunięta, jej nazwa uległa zmianie
        lub jest tymczasowo niedostępna.
      </p>
      <div className=''>
        <Button
          onClick={() => {
            router.push('/')
          }}
          aria-label='Go tony głównej'
          className='hover:bg-red-200'
        >
          Powrót do strony głównej
        </Button>
      </div>
    </div>
  )
}
export default NotFoundPage
