'use client'

import React, { useEffect } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Button } from './ui/button'
import { Minus, Plus } from 'lucide-react'

interface SearchProps {
  query: string
}

const SelectQuantity = ({ query }: SearchProps) => {
  const [quantity, setQuantity] = React.useState(1)
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleQuantity = (term: string) => {
      const params = new URLSearchParams(searchParams)

      if (term) {
        params.set(`${query}`, term)
      } else {
        params.delete(`${query}`)
      }
      try {
        replace(`${pathname}?${params.toString()}`)
      } catch (error) {
        console.error('Failed to replace URL parameters:', error)
      }
    }

    handleQuantity(quantity.toString())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity])

  return (
    <div className='flex items-center '>
      <Button
        size={'icon'}
        className=' border border-gray-500 rounded-none  hover:bg-red-500 hover:text-white'
        onClick={() =>
          quantity <= 1 ? setQuantity(1) : setQuantity(quantity - 1)
        }
        aria-label='remove'
      >
        <Minus />
      </Button>
      <div className='w-18 h-9 flex items-center justify-center border border-gray-500'>
        {quantity}
      </div>
      <Button
        size={'icon'}
        className=' border border-gray-500 rounded-none  hover:bg-green-500 hover:text-white'
        onClick={() => setQuantity(quantity + 1)}
        aria-label='add'
      >
        <Plus />
      </Button>
    </div>
  )
}

export default SelectQuantity
