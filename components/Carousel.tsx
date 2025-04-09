'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface CarouselProps {
  images: string[]
  autoSlideInterval?: number
  names?: string[] // Dodany opcjonalny parametr name
}

const Carousel = ({ images, autoSlideInterval = 5000, names }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Automatyczne przesuwanie slajdów
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, autoSlideInterval)

    return () => clearInterval(interval)
  }, [images.length, autoSlideInterval])

  // Przejście do konkretnego slajdu
  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative w-[450px]  mx-auto flex flex-col gap-4">
      <div className="relative h-[400px] overflow-hidden rounded-lg bg-green-300">
        
        {images.map((image, index) => (
          <>
          <h2 className="absolute top-2 left-2 z-10 bg-white/70 px-2 py-1 rounded text-lg font-semibold">{names && names[currentIndex]}</h2>
          <div
            key={index}
            className={`absolute w-full h-[300px] transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-contain"
              priority={index === 0}
            />
          </div>
          </>
        ))}
      </div>
      
      {/* Kropki nawigacyjne */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
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