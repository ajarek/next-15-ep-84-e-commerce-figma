'use client'
import React from 'react'
import { useCartStore } from '@/store/cartStore'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import type {Product} from '@/lib/api'


const ButtonAddCart = ({ product, quantity }: { product: Product; quantity: number }) => {
   const router = useRouter()
   const { addItemToCart, items } = useCartStore()
  return (
     <Button
            
            onClick={() => {
              if (items.some((i) => i.id === product?.id)) {
                // toast({
                //   variant: 'destructive',
                //   title: 'Ta waluta jest już w Twoim koszyku',
                // })
                router.push('/')
                return
              }
              addItemToCart({
                id: Number(product?.id) ,
                title: product?.title || '',
                thumbnail: product?.thumbnail || '',
                discountPercentage: Number(product?.discountPercentage) ,
                price: Number(product?.price),             
                quantity: Number(quantity) || 1,
               
              })
              router.push('/cryptoList')
            }}
            aria-label='Add to cart'
            className='rounded-[2px] w-36 bg-[#DB4444] text-white hover:bg-[#E07575]/90'
          >
           Buy Now
          </Button> 
  )
}

export default ButtonAddCart