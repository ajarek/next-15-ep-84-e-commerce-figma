import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import type {Product} from '@/lib/api'
import Link from "next/link"
import { Eye, Heart, ShoppingCart } from "lucide-react"

 type ProductsProps={
  products: Product[]
 }

const  CarouselFull = ({products}:ProductsProps)=> {
  return (
    <div className='w-full  flex justify-center items-center flex-wrap  gap-4'>
    <Carousel className="w-full max-w-5xl ">
      <CarouselContent className="">
        {products.map((product) => (
          <CarouselItem key={product.id} className="pl-1  basis-1/4 max-xl:basis-1/3 max-lg:basis-1/2 max-sm:basis-1/1">
            <div className="p-1">
              <Card>
                <CardContent className="relative flex flex-col aspect-square  p-2">
                  <div className="absolute top-1 left-2 bg-red-500 text-white px-4 py-1 rounded-sm">-20%</div>
                  <div className="absolute top-1 right-2 flex flex-col gap-4   px-2 py-1 rounded-sm">
                   <Link href='/' className='hover:text-red-500'><Heart /></Link>
                   <Link href='/' className='hover:text-blue-500'><Eye /></Link>
                   <Link href='/' className='hover:text-green-500'><ShoppingCart /></Link>
                  </div>
                  <Image src={product.thumbnail || ''} alt={product.title ||""} width={200} height={200} />
                   <h1>{product.title}</h1>  
                   <div className="flex items center gap-4">
                   <p className="text-red-500 font-semibold ">${(product.price*0.8).toFixed(2)}</p>
                   <p className='line-through text-gray-700'>${product.price}</p>

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