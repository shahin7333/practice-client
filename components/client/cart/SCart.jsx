'use client'

import Link from 'next/link'
import toast from 'react-hot-toast'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import axiosInstance from '../../../services/axiosInstance'
import { XMarkIcon as XMarkIconMini } from '@heroicons/react/20/solid'

const SCart = ({ cartData }) => {
    const session = useSession()
  const [carts, setCarts] = useState(cartData)
  let subtotalPrice = 0

  useEffect(() => {
    setCarts(cartData)
  }, [cartData])

  const handleDeleteCart = id => {
    axiosInstance.delete(`/cart/${id}`).then(res => {
      toast.success(res.data.message)
      setCarts(res.data.payload.carts)
    })
  }

  const handleUpdateQty = (value, id) => {
    axiosInstance
      .patch(`/cart/${id}`, { quantity: value, customerId: session?.data?.user?._id })
      .then(res => {
        toast.success(res.data.message)
        setCarts(res.data.payload.carts)
      })
  }

  carts.forEach(cart => {
    subtotalPrice += cart.totalPrice
  })

  return (
    <div className='mx-auto px-4 pb-24 pt-16 sm:px-6 max-w-[1440px] lg:px-20'>
      <h1 className='text-xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
        Shopping Cart
      </h1>
      <p className='text-sm mt-2'>Items in your shopping cart</p>
      <form className='mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16'>
        <section aria-labelledby='cart-heading' className='lg:col-span-7'>
          <ul
            role='list'
            className='divide-y divide-gray-200 border-t border-gray-200'
          >
            {carts?.length > 0 ? (
              carts.map(item => (
                <li
                  key={item._id}
                  className='grid grid-cols-12 items-center py-4'
                >
                  <div className='col-span-6 flex items-start gap-4'>
                    <img
                      src={'/assets/default-image.jpg'}
                      alt={item.product.product_name}
                      className='h-24 w-24 object-cover object-center'
                    />
                    <div>
                      <div className='flex justify-between'>
                        <h3 className='text-sm'>
                          <Link
                            href=''
                            className='font-medium text-gray-700 hover:text-gray-800'
                          >
                            {item.product.product_name}
                          </Link>
                        </h3>
                      </div>
                      <p className='mt-1 text-sm font-medium text-indigo-600'>
                        {item.product.price}
                      </p>
                    </div>
                  </div>

                  <div className='col-span-6 flex justify-between items-center gap-5'>
                    <select
                      value={item.quantity}
                      onChange={e => handleUpdateQty(e.target.value, item._id)}
                      className='rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm'
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                    </select>

                    <p>{item.totalPrice}</p>

                    <button
                      type='button'
                      className='-m-2 inline-flex p-2 text-red-600'
                      onClick={() => handleDeleteCart(item._id)}
                    >
                      <span className='sr-only'>Remove</span>
                      <XMarkIconMini className='h-5 w-5' aria-hidden='true' />
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <p className='py-24 text-center'>There is no cart items</p>
            )}
          </ul>
        </section>

        <section
          aria-labelledby='summary-heading'
          className='mt-16 bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'
        >
          <h2
            id='summary-heading'
            className='text-lg font-medium text-gray-900'
          >
            Order summary
          </h2>

          <dl className='mt-6 space-y-4'>
            <div className='flex items-center justify-between'>
              <dt className='text-sm text-gray-600'>Subtotal</dt>
              <dd className='text-sm font-medium text-gray-900'>
                {subtotalPrice}
              </dd>
            </div>
            <div className='flex items-center justify-between border-t border-gray-200 pt-4'>
              <dt className='flex text-sm text-gray-600'>
                <span>Tax estimate</span>
                <p className='ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500'>
                  <span className='text-xs'>20%</span>
                </p>
              </dt>
              <dd className='text-sm font-medium text-gray-900'>
                {subtotalPrice * 0.2}
              </dd>
            </div>
            <div className='flex items-center justify-between border-t border-gray-200 pt-4'>
              <dt className='text-base font-medium text-gray-900'>
                Order total
              </dt>
              <dd className='text-base font-medium text-gray-900'>
                {subtotalPrice * 1.2}
              </dd>
            </div>
          </dl>

          <div className='mt-6'>
            <button
              type='submit'
              className='w-full border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50'
            >
              Checkout
            </button>
          </div>
        </section>
      </form>
    </div>
  )
}

export default SCart
