'use client'

import { useState, useEffect } from 'react'
import TimePanel from './TimePanel'

interface TimerProps {
  endDate: Date | string
  title?: string
}

const Timer = ({ endDate, title = 'Sale Ends In:' }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date(endDate).getTime()

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference <= 0) {
        // Sale has ended
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }

    
    calculateTimeLeft()

    
    const timer = setInterval(calculateTimeLeft, 1000)

   
    return () => clearInterval(timer)
  }, [endDate])

  return (
    <div className='w-full flex flex-wrap items-center gap-4 pl-10 '>
      <h3 className='text-2xl font-semibold text-center mt-4'>{title}</h3>
      <div className='flex justify-center  gap-4'>
        <TimePanel
          value={timeLeft.days}
          label='Days'
        />
        <TimePanel
          value={timeLeft.hours}
          label='Hours'
        />
        <TimePanel
          value={timeLeft.minutes}
          label='Minutes'
        />
        <TimePanel
          value={timeLeft.seconds}
          label='Seconds'
        />
      </div>
    </div>
  )
}

export default Timer
