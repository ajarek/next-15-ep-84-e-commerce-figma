import React from 'react'
const categories=[
  {name:'Beauty',icon:'🧴'},
  {name:'Medicine',icon:'⚕️'},
  {name:'Electronics',icon:'📺'},
  {name:'Sport',icon:'🏀'},
  {name:'Furniture',icon:'🛋️'},
  {name:'Groceries',icon:'🍎'},
]
const LinksCategory = () => { 
  return (
    <div className='flex items center gap-4'>
      {categories.map(cat=>
        <div key={cat.name} className='flex flex-col items-center justify-center gap-4 w-[170px] h-[145px] rounded-sm border-2 hover:bg-green-200 transition-all delay-200'>
          <div className='text-4xl'>{cat.icon}</div>
          <span>{cat.name}</span>
          </div>
      )}
    </div>
  )
}

export default LinksCategory