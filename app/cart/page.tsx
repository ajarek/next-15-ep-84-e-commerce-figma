'use client'

import React from 'react'
import { useCartStore } from '@/store/cartStore'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const Cart = () => {
  const { items, increment, decrement, removeItemFromCart, total, removeAll } =
    useCartStore()
  const router = useRouter()

  return (
    <div className='min-h-[calc(100vh-64px)] container mx-auto px-8 py-16  max-sm:px-1 '>
      {items.length > 0 ? (
        <>
          <div className=' w-full  max-h-[260px] overflow-y-auto scrollbar max-sm:max-h-[400px]  p-1 '>
            {items.map((item) => (
              <div
                key={item.id}
                className='w-full grid grid-cols-6 max-sm:grid-cols-4 items-center justify-start  border-b border-gray-500 gap-4 p-4 '
              >
                <div className='w-fit flex relative max-sm:hidden '>
                  <Image
                    src={item.thumbnail || ''}
                    alt={item.title.slice(0, 10)}
                    width={40}
                    height={40}
                    className=' self-start'
                  />
                </div>
                <div className='w-full text-start'>{item.title}</div>

                <div className=' max-sm:hidden'>${item.price.toFixed(2)}</div>

                <div className='flex items-center gap-1'>
                  <button
                    onClick={() => decrement(item.id)}
                    aria-label='decrement'
                  >
                    ➖
                  </button>
                  <div className='flex items-center justify-center  w-[30px] h-[30px] rounded-full border-2 border-gray-500'>
                    {item.quantity}
                  </div>
                  <button
                    onClick={() => increment(item.id)}
                    aria-label='increment'
                  >
                    ➕
                  </button>
                </div>
                <div> ${(item.price * (item.quantity || 1)).toFixed(2)}</div>
                <div className=' flex items-center justify-center'>
                  <button
                    onClick={() => removeItemFromCart(item.id.toString())}
                    aria-label='remove item'
                  >
                    ❌
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className='w-full flex items-center justify-end text-xl mt-4 px-4'>
            Total: ${total().toFixed(2)}
          </div>
          <div className='flex w-full justify-end gap-8 mt-8 px-4 '>
            <Button
              variant='destructive'
              onClick={() => removeAll()}
              aria-label='remove all'
            >
              Delete all
            </Button>
            <Button
              onClick={() => router.push('/payment')}
              aria-label='go to payment'
              className='bg-green-600 hover:bg-green-500 '
            >
              I buy and pay
            </Button>
          </div>
        </>
      ) : (
        <div className='flex flex-col gap-4'>
          <h1 className='text-2xl text-center py-8'>
          Your cart is empty!
          </h1>
          <Button
            className='w-fit mx-auto bg-background text-foreground hover:bg-green-600 hover:text-background'
            onClick={() => router.push('/products')}
            aria-label='go to products'
          >
            Return to products
          </Button>
        </div>
      )}
    </div>
  )
}

export default Cart
