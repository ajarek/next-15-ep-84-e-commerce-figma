'use client'

import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { useCartStore } from '@/store/cartStore'
import Image from 'next/image'

const FormPayment = ({ nameUser }: { nameUser: string }) => {
  const { items, total, removeAll } = useCartStore()
  const router = useRouter()

  const toastAlert = () => {
    toast(
      'Paid ' +
        total().toLocaleString('us', { style: 'currency', currency: 'USD' }) +
        ' ' +
        nameUser.toUpperCase() +
        ' Thank you for shopping'
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toastAlert()
    removeAll()
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }

  return (
    <div className=' w-full min-h-[calc(100vh-194px)]  flex flex-col justify-center max-sm:justify-start px-8 py-4 items-center  '>
      {items.length > 0 ? (
        <form
          onSubmit={handleSubmit}
          className=' w-full flex flex-col gap-4  p-4  rounded-lg border-2 border-gray-400  shadow-sm shadow-gray-400'
        >
          <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-4 max-lg:gap-2'>
            <div>
              <div className='w-100% flex flex-col  gap-2'>
                <Label
                  htmlFor='fullName'
                  aria-label='Full name'
                >
                  Full name
                </Label>
                <Input
                  type='text'
                  placeholder='Ethan Bennett'
                  required
                  pattern='^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+ [A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+$'
                  title="Enter your name and surname"
                />
              </div>
              <div className='w-100% flex flex-col gap-2'>
                <Label
                  htmlFor='address'
                  aria-label='address'
                >
                  Country and place of residence
                </Label>
                <Input
                  type='text'
                  placeholder='United States, Billings '
                  required
                  title='Enter country and place of residence'
                />
              </div>
              <div className='w-100% flex flex-col gap-2'>
                <Label
                  htmlFor='street'
                  aria-label='street'
                >Street and number
                </Label>
                <Input
                  type='text'
                  placeholder='Valwood Pkwy 8929/25'
                  required
                  title='Enter street and number'
                />
              </div>
              <div className='w-100% flex flex-col gap-2'>
                <Label
                  htmlFor='postcode'
                  aria-label='postcode'
                >
                 Postcode
                </Label>
                <Input
                  type='text'
                  placeholder='63104'
                  required
                  pattern='^[0-9]{5}$'
                  title='Enter postcode'
                />
              </div>
            </div>
            <div>
              <div className='w-100% flex flex-col gap-2'>
                <Label
                  htmlFor='cardNumber'
                  aria-label='To be paid'
                >
                  To be paid
                </Label>
                <Input
                  type='text'
                  value={total().toLocaleString('us', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                  readOnly
                  required
                />
              </div>

              <div className='w-100% flex flex-col gap-2'>
                <Label
                  htmlFor='cardNumber'
                  aria-label='Card number'
                >
                  Card number
                </Label>
                <Input
                  type='text'
                  placeholder='1234 5678 9012 3456'
                  required
                  pattern='^(?:\d{4} ){3}\d{4}$'
                  title='Enter card number'
                />
              </div>
              <div className='w-100% flex flex-col gap-2 '>
                <Label
                  htmlFor='expiryDate'
                  aria-label='Expiration date'
                >
                  Expiration date
                </Label>
                <Input
                  type='text'
                  placeholder='MM/YYYY'
                  required
                  pattern='^(0[1-9]|1[0-2])\/20[2-9][5-9]$'
                  title='Enter expiration date'
                />
              </div>

              <div className='w-100% flex flex-col gap-2'>
                <Label
                  htmlFor='cvv'
                  aria-label='CVV'
                >
                  CVV
                </Label>
                <Input
                  type='text'
                  placeholder='123'
                  required
                  pattern='^[0-9]{3}$'
                  title='Enter your CVW code'
                />
              </div>
            </div>
          </div>
          <div className='w-full flex items-center justify-between '>
            <div className='flex items-center gap-4'>
              <Image
                src='/images/image 30.png'
                alt='payment card'
                width={38}
                height={12}
              />
              <Image
                src='/images/image 31.png'
                alt='payment card'
                width={40}
                height={26}
              />
              <Image
                src='/images/image 32.png'
                alt='payment card'
                width={38}
                height={18}
              />
              <Image
                src='/images/image 33.png'
                alt='payment card'
                width={40}
                height={20}
              />
            </div>
            <Button
              type='submit'
              aria-label='I order and pay'
              className='rounded-[2px] bg-red-500 text-white hover:bg-green-600 cursor-pointer '
            >
              I order and pay
            </Button>
          </div>
        </form>
      ) : (
        <Button
          onClick={() => router.push('/')}
          aria-label='Produkty'
          className=' hover:bg-green-500 hover:white'
        >
          Items
        </Button>
      )}
    </div>
  )
}

export default FormPayment
