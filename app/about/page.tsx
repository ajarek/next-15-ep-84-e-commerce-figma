'use client'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className='min-h-screen flex items-center justify-center  py-12 px-4 max-sm:px-2 '>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full  p-8 max-sm:p-2 '>
        <div className='relative w-[400px] max-lg:w-full  h-[400px] max-lg:h-300px flex flex-col shadow-lg overflow-hidden  '>
          <Image
            src='/images/about.png'
            alt='O nas'
            fill
            className='object-cover w-full h-auto rounded-lg'
            sizes='(max-width: 768px) 100vw, 33vw'
          />
        </div>

        <div className='flex flex-col justify-center'>
          <h1 className='text-3xl font-bold text-center md:text-left mb-6'>
          About us
          </h1>
          <p className=' mb-4'>
          Our team is a passionate group of professionals dedicated to bringing you the best online shopping experience. From product sourcing and quality control to customer support and logistics, each team member plays a vital role in making sure you receive top-quality products with exceptional service.
          </p>
          <p className=' mb-4'>
          We’re a small but mighty team of creatives, techies, and customer-first thinkers working together to build a store we’re proud of. We believe in quality, transparency, and making your shopping experience smooth and enjoyable
          </p>
          <p className=' mb-4'>
          Our team shares a common mission: to make high-quality [products] accessible to everyone. From our warehouse staff to our marketing crew, every team member is committed to delivering value, sustainability, and great service. 
          </p>
          <p className=''>
          We invite you to familiarize yourself with our offer and join the group of satisfied customers! 
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage