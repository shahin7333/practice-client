"use client"

import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import AdminSidebar from "../../components/admin/Sidebar";

export default function AboutLayout({ children }) {
  const session = useSession()
  const pathname = usePathname()

  return (
    <section>
      {session?.data?.user?.role === 'superAdmin' &&
        <div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col lg:w-[240px] border-r mt-16'>
          <AdminSidebar />
        </div>
      }
      <main className={`mt-8 ${!pathname.includes('/admin/login') && 'lg:pl-[240px]'}`}>
        <div className='px-4 sm:px-6 pb-9'>{children}</div>
      </main>
    </section>
  )
}
