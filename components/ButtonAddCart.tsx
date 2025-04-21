'use client'
import React from 'react'
import { useCartStore } from '@/store/cartStore'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import type {Product} from '@/lib/api'
import { toast } from "sonner"

const ButtonAddCart = ({ product, quantity, label, className }: { product: Product; quantity: number; label:string; className:string }) => {
   const router = useRouter()
   const { addItemToCart, items } = useCartStore()
  return (
     <button
            
            onClick={() => {
              if (items.some((i) => i.id === product?.id)) {
                toast('This item is already in your cart')
                router.push('/products')
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
              router.push('/products')
            }}
            aria-label='Add to cart'
            className={className}
          >
           {label}
          </button> 
  )
}

export default ButtonAddCart