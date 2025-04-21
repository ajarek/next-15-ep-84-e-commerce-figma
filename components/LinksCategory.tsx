import Link from 'next/link'
import React from 'react'
const categories=[
  {name:'beauty',icon:'🧴'}, 
  {name:'medicine',icon:'⚕️'},
  {name:'electronics',icon:'📺'},
  {name:'sport',icon:'🏀'},
  {name:'furniture',icon:'🛋️'},
  {name:'groceries',icon:'🍎'},
]
const LinksCategory = () => { 
  return (
    <div className='flex justify-center items-center flex-wrap  gap-4'>
      {categories.map(cat=>
        <Link href={`/productsSearch?category=${cat.name}`} key={cat.name} className='flex flex-col items-center justify-center gap-4 w-[170px] h-[145px] rounded-sm border-2 hover:bg-green-200 transition-all delay-200'>
          <div className='text-4xl'>{cat.icon}</div>
          <span className='capitalize'>{cat.name}</span>
          </Link>
      )}
    </div>
  )
}

export default LinksCategory