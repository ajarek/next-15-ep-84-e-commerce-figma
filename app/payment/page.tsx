import PaymentForm from '@/components/FormPayment'
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'
import { Session } from 'next-auth'

const Payment = async () => {
  const session = await auth()
  const { user } = (session as Session) || {}

  if (!user) {
    redirect('/register')
  }

  return (
    <div className='min-h-[calc(100vh-64px)] flex flex-col justify-center'>
      <div className='container mx-auto px-4'>
        <div className=' rounded-lg shadow-md p-6 max-sm:p-2 max-w-2xl mx-auto'>
          <h1 className='text-2xl font-bold mb-6 text-center'>
            Payment Details
          </h1>
          <PaymentForm nameUser={user?.name || ''} />
        </div>
      </div>
    </div>
  )
}
export default Payment
