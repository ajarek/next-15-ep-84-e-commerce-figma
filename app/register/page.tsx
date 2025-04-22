import RegisterForm from '@/components/RegisterForm'
import Image from 'next/image'

const Register = () => {
  return (
    <div className='w-full min-h-screen grid grid-cols-2 max-lg:grid-cols-1 gap-8 '>
      <div className='flex items-center justify-end'>
        <Image src='/images/beatsnoop.png' alt='beatsnoop' width={500} height={500} className='rounded-sm' />
      </div>
      <div className='flex items-center justify-start '>
      
      <RegisterForm />


      </div>
    </div>
  )
}

export default Register
