import React from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useFilters } from '../../hooks/useFilters'


export default function Filters(){

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

    const {setSortBy, setFilter, filter} = useFilters()

   console.log(filter)
    return(
        <div>
                <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 bg-white px-3 py-2 text-base  text-gray-900 ">
                                Sort by
                                <ChevronDownIcon className=" h-6 w-6 text-gray-400" aria-hidden="true" />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute mt-2 w-48 -start-24 rounded-md bg-white shadow-lg focus:outline-none" >
                                <div className="py-1">
                                    <Menu.Item onClick={()=>setSortBy('recommended')}>
                                    {({ active }) => (
                                        <a
                                        href='#'
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm w-full text-start'
                                        )}
                                        >
                                        Recommended
                                        </a>
                                    )}
                                    </Menu.Item>
                                    <Menu.Item onClick={()=>setSortBy('decreasing')}>
                                    {({ active }) => (
                                        <a
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                        >
                                        Price High-Low
                                        </a>
                                    )}
                                    </Menu.Item>
                                    <Menu.Item onClick={()=>setSortBy('increasing')}>
                                    {({ active }) => (
                                        <a
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                        >
                                        Price Low-High
                                        </a>
                                    )}
                                    </Menu.Item>
                                    <form method="POST" action="#">
                                    {/* <Menu.Item>
                                        {({ active }) => (
                                        <button
                                            type="submit"
                                            className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block w-full px-4 py-2 text-left text-sm'
                                            )}
                                        >
                                            Top rated
                                        </button>
                                        )}
                                    </Menu.Item> */}
                                    </form>
                                </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 bg-white px-3 py-2 text-base  text-gray-900 ">
                                Filter
                                <ChevronDownIcon className=" h-6 w-6 text-gray-400" aria-hidden="true" />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute mt-2 w-48 -start-24 rounded-md bg-white shadow-lg focus:outline-none" >
                                <div className="py-1">
                                    <Menu.Item onClick={()=>setFilter('wood')}>
                                    {({ active }) => (
                                        <a
                                        href='#'
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm w-full text-start'
                                        )}
                                        >
                                        Wood Snares
                                        </a>
                                    )}
                                    </Menu.Item>
                                    <Menu.Item onClick={()=>setFilter('metal')}>
                                    {({ active }) => (
                                        <a
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                        >
                                        Metal Snares
                                        </a>
                                    )}
                                    </Menu.Item>
                                    <Menu.Item onClick={()=>setFilter('acrylic')}>
                                    {({ active }) => (
                                        <a
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                        >
                                        Acrylic Snares
                                        </a>
                                    )}
                                    </Menu.Item>
                                </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
        </div>
    )
}


 
