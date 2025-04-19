'use client'
import React from 'react'
import { useCartStore } from '@/store/cartStore'

const LengthCart = () => {
  const { items } = useCartStore()
  const lengthCart = items.reduce((acc, item) => acc + item.quantity, 0)
  console.log(lengthCart)
  return (
    <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 flex justify-center items-center text-white' >{lengthCart}</div>
  )
}

export default LengthCart