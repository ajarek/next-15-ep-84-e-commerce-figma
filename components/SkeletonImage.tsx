'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Skeleton } from '@/components/ui/skeleton'
import clsx from 'clsx'

type Props = {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

const SkeletonImage=({
  src,
  alt,
  width,
  height,
  className,
}: Props)=> {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative" style={{ width, height }}>
      {isLoading && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-xl" />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setIsLoading(false)}
        className={clsx(
          'transition-opacity duration-500 rounded-xl object-cover',
          isLoading ? 'opacity-0' : 'opacity-100',
          className
        )}
      />
    </div>
  )
}
export default SkeletonImage