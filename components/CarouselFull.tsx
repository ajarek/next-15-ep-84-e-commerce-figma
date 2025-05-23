import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import type { Product } from '@/lib/api'
import Link from 'next/link'
import ButtonAddCart from './ButtonAddCart'

type ProductsProps = {
  products: Product[]
}

const CarouselFull = ({ products }: ProductsProps) => {
  return (
    <div className='w-full  flex justify-center items-center flex-wrap  gap-4'>
      <Carousel className='w-full max-w-5xl '>
        <CarouselContent className=''>
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className='pl-1  basis-1/4 max-xl:basis-1/3 max-lg:basis-1/2 max-sm:basis-1/1'
            >
              <div className='p-1'>
                <Card>
                  <CardContent className='relative flex flex-col aspect-square  p-2 cursor-grab'>
                    <div className='absolute top-1 left-2 bg-red-500 text-white px-4 py-1 rounded-sm'>
                      -{product.discountPercentage}%
                    </div>
                    <div className='absolute top-1 right-2 flex flex-col gap-4   px-2 py-1 rounded-sm'>
                      <Link
                        href='/'
                        className='text-2xl '
                      >
                        ❤
                      </Link>
                      <Link
                        href={`/productId?id=${product.id}`}
                        className='text-2xl '
                      >
                        👁
                      </Link>
                      <ButtonAddCart
                        quantity={1}
                        product={product}
                        label='&#128092;'
                        className='cursor-pointer className=" text-2xl'
                      />
                    </div>
                    <Image
                      src={product.thumbnail || ''}
                      alt={product.title || ''}
                      width={200}
                      height={200}
                    />
                    <h1>{product.title}</h1>
                    <div className='flex items center gap-4'>
                      <p className='text-red-500 font-semibold '>
                        ${product.price.toFixed(2)}
                      </p>
                      <p className='line-through text-gray-700'>
                        $
                        {(
                          product.price *
                          (1 + product.discountPercentage / 100)
                        ).toFixed(2)}
                      </p>
                    </div>
                    <p>⭐⭐⭐⭐⭐ (88)</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
export default CarouselFull
