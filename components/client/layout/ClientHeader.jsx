'use client'

import Link from 'next/link'
import { useAtom } from 'jotai'
import { Fragment } from 'react'
import React, { useState } from 'react'
import { countAtom } from '../../../atom'
import { redirect } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

const ClientHeader = () => {
  const navigation = [
    { name: 'Product', href: '/products' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
    { name: 'About', href: '/about' }
  ]
  const [count] = useAtom(countAtom)
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  const closeMenu = () => {
    setIsOpen(false)
  }

  const handleLogout = () => {
    signOut()
    redirect('/auth/login')
  }
  const session = useSession()

  return (
    <nav className='sticky top-0 bg-white z-100 border-b shadow'>
      <div className='max-w-[1440px] mx-auto'>
        <div className='flex justify-between items-center px-4 sm:px-6 lg:px-8 xl:px-20 h-16'>
          <div className='flex gap-3 items-center'>
            <div>
              <div className='flex md:hidden'>
                <button type='button' className='' onClick={toggleMenu}>
                  <Bars3Icon
                    className='h-5 w-5 text-gray-500'
                    aria-hidden='true'
                  />
                </button>
              </div>
              <Dialog
                as='div'
                className='lg:hidden'
                open={isOpen}
                onClose={setIsOpen}
              >
                <div className='fixed inset-0 z-50' />
                <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white sm:max-w-sm'>
                  <div className='flex items-center justify-between shadow h-16 px-4'>
                    <Link
                      onClick={closeMenu}
                      href='/'
                      className='text-md font-bold text-indigo-600'
                    >
                      Your Logo
                    </Link>
                    <button
                      type='button'
                      className='-m-2.5 rounded-md p-2.5 text-gray-700'
                      onClick={toggleMenu}
                    >
                      <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                    </button>
                  </div>
                  <div className='mt-4 flow-root px-4'>
                    <div className=''>
                      <div className='space-y-2'>
                        {navigation.map(item => (
                          <Link
                            onClick={closeMenu}
                            key={item.name}
                            href={item.href}
                            className='block text-sm font-medium leading-5 text-gray-900 hover:text-indigo-600'
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      <div className='my-4 space-y-2 border-t pt-4'>
                        {session.status === 'authenticated' ? (
                          <div className='font-semibold'>
                            <p>{session?.data?.user?.name}</p>
                            <p className='font-normal'>
                              {session?.data?.user?.email}
                            </p>
                          </div>
                        ) : (
                          <Fragment>
                            <Link
                              onClick={closeMenu}
                              href='/auth/login'
                              className='block text-sm font-medium leading-5 text-gray-900 hover:text-indigo-600'
                            >
                              Log in
                            </Link>
                            <Link
                              onClick={closeMenu}
                              href='/auth/registration'
                              className='block text-sm font-medium leading-5 text-gray-900 hover:text-indigo-600'
                            >
                              Registration
                            </Link>
                          </Fragment>
                        )}
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Dialog>
            </div>
            <Link href='/' className='text-lg font-bold text-indigo-500 '>
              Your Logo
            </Link>
          </div>
          <div className='hidden sm:block text-sm'>
            <ul className='flex space-x-4'>
              {navigation.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className=''>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex gap-4 items-center'>
            <Link
              href='/cart'
              className='text-sm hidden md:flex gap-0.5 items-center'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
                />
              </svg>
              <span> ({count})</span>
            </Link>

            {session.status === 'authenticated' ? (
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
                            type='submit'
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
            ) : (
              <Fragment>
                <Link href='/auth/login' className='text-sm hidden md:block'>
                  Log in
                </Link>
                <Link
                  href='/auth/registration'
                  className='text-sm hidden md:block'
                >
                  Registration
                </Link>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default ClientHeader
