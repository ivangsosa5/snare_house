import { Fragment, useContext, useEffect, useState, useRef } from 'react'; 
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import {ShoppingBagIcon} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/cartContext';


export default function OffCanvasCart() {

  const {cartList, removeItem , subTotal, cartCount, clearItems}= useContext(cartContext)

  const isMounted = useRef(false)

  const [open, setOpen] = useState(false)

  useEffect(()=>{
    if(!isMounted.current){
        const timeOutId = setTimeout(()=>{
           isMounted.current = true
        },6000)  
        return()=>clearTimeout(timeOutId)
    }else{
        setOpen(true)
    }
  },[cartList])

  

  return (
    <>  
        <button onClick={()=>setOpen(true)} className="group -m-2 flex p-2 justify-center items-end">
            <ShoppingBagIcon
                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
            />
            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{cartCount}</span>
            <span className="sr-only">items in cart, view bag</span>
        </button>
        <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpen}>
            <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                >
                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                            <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                            <div className="ml-3 flex h-7 items-center">
                            <button
                                type="button"
                                className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                onClick={() => setOpen(false)}
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                            </div>
                        </div>

                        <div className="mt-8">
                            <div className="flow-root">
                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                {cartList.map((product) => (
                                <li key={product.id} className="flex py-6">
                                    <div className="flex items-center h-24 w-24 flex-shrink-0  overflow-hidden rounded-md border border-gray-200">
                                    <img
                                        src={product.pictureUrl}
                                        alt={product.name}
                                        className="w-full object-cover "
                                    />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                            <Link to='#' >{product.name}</Link>
                                        </h3>
                                        <p className="ml-4">${product.price}</p>
                                        </div>
                                         <p className="mt-1 text-sm text-gray-500">Color: {product.colorName}</p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                        <p className="text-gray-500">Qty {product.quantity}</p>

                                        <div className="flex">
                                        <button
                                            onClick={()=>removeItem({id: product.id, quantity: product.quantity, price: product.price})}
                                            type="button"
                                            className="font-medium text-gray-800 hover:text-gray-500"
                                        >
                                            Remove
                                        </button>
                                        </div>
                                    </div>
                                    </div>
                                </li>
                                ))}
                            </ul>
                            </div>
                            {/* <div className="flex">
                                <button
                                    onClick={()=>clearItems()}
                                    type="button"
                                    className="font-medium text-gray-800 hover:text-gray-500 text-sm"
                                >
                                    Clear Cart
                                </button>
                            </div> */}
                        </div>
                        </div>

                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>$ {subTotal}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                        <div className="mt-6">
                            <Link
                            to="/checkout"
                            className="flex items-center justify-center rounded-full border border-transparent bg-gray-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900"
                            onClick={() => setOpen(false)}
                            >
                            Checkout
                            </Link>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>
                            or{' '}
                            <button
                                type="button"
                                className="font-medium text-gray-900 hover:text-gray-600"
                                onClick={() => setOpen(false)}
                            >
                                Continue Shopping
                                <span aria-hidden="true"> &rarr;</span>
                            </button>
                            </p>
                        </div>
                        </div>
                    </div>
                    </Dialog.Panel>
                </Transition.Child>
                </div>
            </div>
            </div>
        </Dialog>
        </Transition.Root>
    </>
  )
}
