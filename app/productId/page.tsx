

import React ,{use} from 'react'
import { fetchProducts } from '@/lib/api'
import Image from 'next/image'
 import SelectQuantity from '@/components/SelectQuantity'
import ButtonAddCart from '@/components/ButtonAddCart'
import type { Product } from '@/lib/api'
import { Truck } from 'lucide-react'


const ProductId = ({searchParams}:{ searchParams: Promise<{ id: string;  quantity: string }>}) => {

  const { id, quantity } = use(searchParams)
  const { products } = use (fetchProducts(30))
  const product = products.find((product) => product.id === +id) as Product
  
 
  return (
    <div className='w-full min-h-screen grid grid-cols-2 max-lg:grid-cols-1 gap-4 '>
      <div className=''>
        <Image
          src={product?.thumbnail || ''} 
          width={500}
          height={500}
          alt={product?.title || ''}
        />  
      </div>
      <div className='flex flex-col gap-6 p-4'>
        <h1 className='text-2xl font-semibold'>{product?.title}</h1>
        <p className='flex items-center gap-2'>⭐⭐⭐⭐⭐ (150 Reviews)  | 
          <span className={product && product.stock>0?'text-green-500':'text-red-500'}>{product && product.stock>0?'In Stock':'Out Of Stock' }</span>
        </p>       
         <p className='text-2xl'>${product?.price.toFixed(2) }</p>
         <p className='capitalize'>Category: <span className='font-semibold'>{product?.category}</span></p>
         <p>{product?.description}</p>
         <div className='flex items-center gap-6'>
          <SelectQuantity query='quantity'/>
          <ButtonAddCart quantity={+quantity} product={product} label='Add to cart' className='rounded-[2px] w-36 h-9 bg-[#DB4444] text-white hover:bg-[#E07575]/90' />
         </div>
         <div className='flex items-center gap-6 p-4 border border-gray-500'>
         <Truck size={48} strokeWidth={1} />
         <div >
          <h1 className='text-xl font-semibold'>Free Delivery</h1>
          <p>Enter your postal code for Delivery Availability</p>
         </div>
         </div>
      </div>
    </div>
  )
}

export default ProductId