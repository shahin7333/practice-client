'use client'

import toast from 'react-hot-toast'
import { useState, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import axiosInstance from '../../../services/axiosInstance'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

const Orders = ({ orders }) => {
  const [allOrders, setAllOrders] = useState(orders)

  const handleUpdate = (type, id) => {
    axiosInstance
      .patch(`/order/${id}`, { status: type })
      .then(res => {
        toast.success(res.data.message)
        setAllOrders(res.data.payload.orders)
      })
      .catch(err => {
        toast.error(err.response.data.message)
      })
  }

  return (
    <div className='p-4 md:p-6'>
      <div>
        <div className='sm:flex justify-between items-center'>
          <div className='sm:flex-auto'>
            <h1 className='text-lg font-semibold leading-6 text-gray-900'>
              Product List
            </h1>
            <p className='mt-2 text-sm text-gray-700'>A list of all order.</p>
          </div>
        </div>
        <div className='mt-4 flow-root'>
          <div className='overflow-x-auto border'>
            <div className='inline-block min-w-full align-middle'>
              <table className='min-w-full divide-y divide-gray-300'>
                <thead className='bg-gray-100'>
                  <tr>
                    <th
                      scope='col'
                      className='py-3 px-4 text-left text-sm font-medium text-gray-900'
                    >
                      Customer Name
                    </th>
                    <th
                      scope='col'
                      className='py-3 px-4 text-left text-sm font-medium text-gray-900'
                    >
                      Email
                    </th>
                    <th
                      scope='col'
                      className='py-3 px-4 text-left text-sm font-medium text-gray-900'
                    >
                      Total Price
                    </th>
                    <th
                      scope='col'
                      className='py-3 px-4 text-left text-sm font-medium text-gray-900'
                    >
                      Status
                    </th>
                    <th
                      scope='col'
                      className='py-3 px-4 text-left text-sm font-medium text-gray-900'
                    >
                      Date
                    </th>
                    <th
                      scope='col'
                      className='font-medium text-gray-900 py-3.5 px-4'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className=''>
                  {allOrders?.map(order => (
                    <tr key={order._id} className='even:bg-gray-50'>
                      <td className='whitespace-nowrap py-2.5 px-4 text-sm font-medium text-gray-900 capitalize'>
                        {order.customer.name}
                      </td>
                      <td className='whitespace-nowrap py-2.5 px-4 text-sm font-medium text-gray-900'>
                        {order.customer.email}
                      </td>
                      <td className='whitespace-nowrap py-2.5 px-4 text-sm font-medium text-gray-900'>
                        {order.totalPrice.toFixed(2)}
                      </td>
                      <td className='whitespace-nowrap py-2.5 px-4 text-sm font-medium text-gray-900 capitalize '>
                        <span
                          className={`px-3 py-1 rounded-full text-xs ${
                            order.status === 'pending'
                              ? 'bg-orange-100'
                              : order.status === 'delivered'
                              ? 'bg-green-400 text-white'
                              : 'bg-red-500 text-white'
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className='whitespace-nowrap py-2.5 px-4 text-sm font-medium text-gray-900'>
                        {new Date(order.createdAt).toISOString().split('T')[0]}
                      </td>
                      <td>
                        <Menu as='div' className='inline-block text-left'>
                          <div>
                            <Menu.Button className='flex items-center rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 focus:outline-none p-1'>
                              <span className='sr-only'>Open options</span>
                              <EllipsisVerticalIcon
                                className='h-5 w-5'
                                aria-hidden='true'
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
                            <Menu.Items className='absolute right-0 z-50 mt-2 w-56 origin-bottom-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                              <div className='py-1'>
                                <Menu.Item>
                                  <span
                                    className='block px-4 py-2 text-sm cursor-pointer'
                                    role='button'
                                    onClick={() =>
                                      handleUpdate('delivered', order._id)
                                    }
                                  >
                                    Accept
                                  </span>
                                </Menu.Item>
                                <Menu.Item>
                                  <span
                                    className='block px-4 py-2 text-sm cursor-pointer'
                                    role='button'
                                    onClick={() =>
                                      handleUpdate('cancelled', order._id)
                                    }
                                  >
                                    Cancelled
                                  </span>
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders
