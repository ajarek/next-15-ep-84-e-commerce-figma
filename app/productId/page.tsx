import React ,{use} from 'react'
import { fetchProducts } from '@/lib/api'
import Image from 'next/image'
const ProductId = ({searchParams}:{searchParams:{id:string}}) => {
  const { products } = use (fetchProducts())
  const product = products.find((product) => product.id === +searchParams.id)
  return (
    <div className='w-full min-h-screen grid grid-cols-2 max-lg:grid-cols-1 gap-4 '>
      <div className=''>
        <Image
          src={product?.images[0] || ''}
          width={500}
          height={500}
          alt={product?.title || ''}
        />  
      </div>
      <div className='flex flex-col gap-4 p-4'>
        <h1 className='text-2xl font-semibold'>{product?.title}</h1>
        <p className='flex items-center gap-2'>⭐⭐⭐⭐⭐ (150 Reviews)  | 
          <span className={product && product.stock>0?'text-green-500':'text-red-500'}>{product && product.stock>0?'In Stock':'Out Of Stock' }</span>
        </p>       
         <p className='text-2xl'>${product?.price.toFixed(2) }</p>
         <p>{product?.description}</p>
      </div>
    </div>
  )
}

export default ProductId