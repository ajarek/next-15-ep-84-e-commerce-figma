'use client'

import React, { useState, useEffect } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChevronRight } from 'lucide-react'

interface SearchProps {
  query: string
}

const SelectCategory = ({ query }: SearchProps) => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()
  const [selectedValue, setSelectedValue] = useState<string | null>(null)

  useEffect(() => {
    setSelectedValue(searchParams.get(query) || null)
  }, [searchParams, query])

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set(`${query}`, term)
    } else {
      params.delete(`${query}`)
    }
    try {
      replace(`/productsSearch?${params.toString()}`)
    } catch (error) {
      console.error('Failed to replace URL parameters:', error)
    }
    setSelectedValue(term)
  }

  return (
    <div className="w-full bg-background ">
      <div className="px-3 py-2 text-sm font-medium">
        {selectedValue ? selectedValue.charAt(0).toUpperCase() + selectedValue.slice(1) : 'Select Category'}
      </div>
      
      <div className=" p-1 rounded-b-md">
        <div 
          className={`px-2 py-1.5  flex items-center justify-between ju text-sm rounded cursor-pointer hover:bg-accent hover:text-accent-foreground ${selectedValue === 'beauty' ? 'bg-accent text-accent-foreground' : ''}`}
          onClick={() => handleSearch('beauty')}
        >
          Beauty <ChevronRight />
        </div>
        <div 
          className={`px-2 py-1.5  flex items-center justify-between  text-sm rounded cursor-pointer hover:bg-accent hover:text-accent-foreground ${selectedValue === 'fragrances' ? 'bg-accent text-accent-foreground' : ''}`}
          onClick={() => handleSearch('fragrances')}
        >
          Fragrances <ChevronRight />
        </div>
        <div 
          className={`px-2 py-1.5  flex items-center justify-between  text-sm rounded cursor-pointer hover:bg-accent hover:text-accent-foreground ${selectedValue === 'furniture' ? 'bg-accent text-accent-foreground' : ''}`}
          onClick={() => handleSearch('furniture')}
        >
          Furniture <ChevronRight />
        </div>
        <div 
          className={`px-2 py-1.5  flex items-center justify-between  text-sm rounded cursor-pointer hover:bg-accent hover:text-accent-foreground ${selectedValue === 'groceries' ? 'bg-accent text-accent-foreground' : ''}`}
          onClick={() => handleSearch('groceries')}
        >
          Groceries <ChevronRight />
        </div>
        <div 
          className={`px-2 py-1.5  flex items-center justify-between  text-sm rounded cursor-pointer hover:bg-accent hover:text-accent-foreground ${selectedValue === 'medicine' ? 'bg-accent text-accent-foreground' : ''}`}
          onClick={() => handleSearch('medicine')}
        >
          Medicine <ChevronRight />
        </div>
        <div 
          className={`px-2 py-1.5  flex items-center justify-between  text-sm rounded cursor-pointer hover:bg-accent hover:text-accent-foreground ${selectedValue === 'electronics' ? 'bg-accent text-accent-foreground' : ''}`}
          onClick={() => handleSearch('electronics')}
        >
          Electronics <ChevronRight />
        </div>
        <div 
          className={`px-2 py-1.5  flex items-center justify-between  text-sm rounded cursor-pointer hover:bg-accent hover:text-accent-foreground ${selectedValue === 'sports' ? 'bg-accent text-accent-foreground' : ''}`}
          onClick={() => handleSearch('sports')}
        >
          Sports <ChevronRight />
        </div>
        <div 
          className={`px-2 py-1.5  flex items-center justify-between  text-sm rounded cursor-pointer hover:bg-accent hover:text-accent-foreground ${selectedValue === 'pets' ? 'bg-accent text-accent-foreground' : ''}`}
          onClick={() => handleSearch('pets')}
        >
          Pets <ChevronRight />
        </div>
      </div>
    </div>
  )
}

export default SelectCategory