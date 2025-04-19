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
    <div className='min-h-[calc(100vh-64px)] flex flex-col justify-center bg-foreground text-background '>
      <PaymentForm nameUser={user?.name || ''} />
    </div>
  )
}
export default Payment