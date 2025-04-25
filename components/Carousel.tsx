'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CarouselProps {
  images: string[]
  autoSlideInterval?: number
  names?: string[]
}

const Carousel = ({
  images,
  autoSlideInterval = 5000,
  names,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, autoSlideInterval)

    return () => clearInterval(interval)
  }, [images.length, autoSlideInterval])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className='relative w-[892px]   flex flex-col gap-4'>
      <div className='relative h-[344px] overflow-hidden rounded-lg bg-[#14142B]'>
        {images.map((image, index) => (
          <div key={index}>
            <h2 className='absolute top-10 left-2 z-10  px-2 py-1  text-lg text-white font-semibold'>
              {names && names[currentIndex]}
            </h2>
            <h2 className='absolute top-20 left-2 z-10  px-2 py-1  text-2xl text-white font-bold'>
              Up to 10% off Voucher
            </h2>
            <Link
              href='/'
              className='absolute top-30 left-2 z-10 flex items-center gap-4 px-2 py-1  text-lg text-white font-semibold '
            >
              <span className='pb-1 border-b'>Shop Now</span> <ArrowRight />
            </Link>
            <div
              className={`absolute w-full h-[300px] transition-opacity duration-500 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                sizes='(max-width: 768px) 100vw, 33vw'
                className='object-contain'
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>

      <div className='absolute bottom-4 left-0 right-0 flex justify-center space-x-2'>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
