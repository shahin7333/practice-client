'use client'

import Link from 'next/link'
import { Fragment } from 'react'
import React, { useState } from 'react'
import { redirect } from 'next/navigation'
import { Menu, Transition } from '@headlessui/react'
import { signOut, useSession } from 'next-auth/react'

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

const AdminHeader = () => {
  const session = useSession()
  const navigation = [
    { name: 'Product', href: '/products' },
    { name: 'FAQ', href: '/' },
    { name: 'Contact', href: '/contact' }
  ]
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleLogout = () => {
    signOut()
    redirect('/admin/login')
  }

  return (
    <nav className='max-w-[1440px] mx-auto sticky top-0 bg-white z-100'>
      <div className='flex justify-between items-center px-4 sm:px-6 h-16 border-b shadow'>
        <h1 className='text-2xl font-semibold'>Admin Panel</h1>
        <div className='flex gap-4 items-center'>
          <Menu as='div' className='relative inline-block text-left'>
            <div>
              <Menu.Button className='flex h-full items-center justify-center'>
                <img
                  className='h-8 w-8 rounded-full'
                  src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt=''
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg'>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm font-bold border-b'
                        )}
                      >
                        <p>{session?.data?.user?.name}</p>
                        <p className='font-normal'>
                          {session?.data?.user?.email}
                        </p>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type='button'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block w-full px-4 py-2 text-left text-sm'
                        )}
                        onClick={handleLogout}
                      >
                        Sign out
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <div className='sm:hidden'>
            <button onClick={toggleMenu} className='block focus:outline-none'>
              <svg
                className='h-6 w-6'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                {isOpen ? (
                  <path
                    d='M6 18L18 6M6 6l12 12'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                ) : (
                  <path
                    d='M4 6h16M4 12h16m-7 6h7'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='sm:hidden mt-4 text-sm px-4'>
          <ul className='flex flex-col space-y-2'>
            {navigation.map((item, index) => (
              <li onClick={toggleMenu} key={index}>
                <Link href={item.href} className='block'>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default AdminHeader
