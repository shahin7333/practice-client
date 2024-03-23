'use client'

import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import SCart from '../../components/client/cart/SCart'
import axiosInstance from '../../services/axiosInstance'

const page = () => {
  const session = useSession()
  const [cartData, setCartsData] = useState([])

  if (
    session?.status === 'unauthenticated' ||
    session?.data?.user?.role === 'superAdmin'
  ) {
    redirect('/auth/login')
  }

  useEffect(() => {
    session?.data?.user?._id &&
      axiosInstance.get(`/cart/${session?.data?.user?._id}`).then(res => {
        setCartsData(res.data.payload.carts)
      })
  }, [session?.data?.user?._id])

  return <SCart cartData={cartData} />
}

export default page
