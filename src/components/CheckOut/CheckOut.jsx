import { useContext } from 'react'; 
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/cartContext';
import { Dialog } from '@headlessui/react';

const CheckOut = () => {

    const {cartList, removeItem , subTotal, cartCount}= useContext(cartContext)

  return (
    <>  
        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl pt-24 px-16 ">
            <div className="flex items-start justify-between py-8 px-4 sm:px-6">
                 <h1 className="text-4xl font-medium text-gray-900">SHOPPING CART</h1>
            </div>
            <div className='lg:grid sm:grid-cols-3 gap-6 mb-6'>
                
                <div className="col-span-2 border border-gray-200 rounded-lg flex-1 overflow-y-auto px-4 pb-8 sm:px-6 ">
                    <div className='text-2xl font-medium text-gray-900 mt-8'>
                        <p>ITEMS</p>
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
                    </div>
                </div>

                <div className="border border-gray-200 rounded-lg px-4 sm:px-6 h-fit">
                    <div className='text-2xl font-medium text-gray-900 mb-4 mt-8'>
                        <p>PURCHASE ORDER</p>
                    </div>
                    <div className='text-base font-normal text-gray-900'>
                        <div className='flex justify-between mb-1'>
                            <p>Products</p>
                            <p>$ {subTotal}</p>
                        </div>
                        <div className='flex justify-between mb-1'>
                        <p>Shipping</p>
                        <p>$ 1500</p>
                        </div>
                    </div>
                    <div className="flex justify-between text-base font-semibold text-gray-900 mt-8">
                        <p>TOTAL</p>
                        <p>$ {subTotal}</p>
                    </div>
                        <div className="mt-6">
                            <a
                                href="#"
                                className="flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900"
                            >
                                Checkout
                            </a>
                        </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500 mb-8">
                        <p>
                            or{' '}
                            <button
                                type="button"
                                className="font-medium text-gray-900 hover:text-gray-600"
                            >
                                Continue Shopping
                                <span aria-hidden="true"> &rarr;</span>
                            </button>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export {CheckOut}