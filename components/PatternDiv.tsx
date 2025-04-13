import React from 'react'

const PatternDiv = ({ label }: { label: string }) => {
  return (
    <div className='flex items-center justify-start gap-4 text-red-500'>
      <div className='h-[40px] w-[20px] bg-red-500 rounded-sm'></div>
      <div>{label}</div>
    </div>
  )
}

export default PatternDiv
