'use client'

import { Fragment } from 'react'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import AdminHeader from '../client/layout/AdminHeader'
import ClientHeader from '../client/layout/ClientHeader'

function AppNavbar() {
  const session = useSession()
  const pathname = usePathname()

  return !pathname.includes('/admin') ? (
    <Fragment>
      <ClientHeader />
    </Fragment>
  ) : (
    <Fragment>
        {session?.data?.user?.role === 'superAdmin' && <AdminHeader />}
    </Fragment>
    )
}

export default AppNavbar
