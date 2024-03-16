import AdminSidebar from "@/components/admin/Sidebar";

export default async function AboutLayout({ children }) {
  return (
    <section>
      <div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col lg:w-[240px] border-r mt-16'>
        <AdminSidebar />
      </div>
      <main className='mt-8 lg:pl-[240px]'>
        <div className='px-4 sm:px-6 pb-9'>{children}</div>
      </main>
    </section>
  )
}
