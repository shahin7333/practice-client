'use client'

import { redirect } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Login from '../../../components/client/auth/Login'

const page = () => {
  const session = useSession()
  if (session?.status === 'authenticated') {
    redirect('/')
  }

  return <Login />
}

export default page
