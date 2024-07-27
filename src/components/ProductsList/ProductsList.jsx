import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useFilters } from '../../hooks/useFilters'

// const products = [
//     {
//       id: 1,
//       name: 'Earthen Bottle',
//       href: '#',
//       price: '$48',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
//       imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
//     },
//     {
//       id: 2,
//       name: 'Nomad Tumbler',
//       href: '#',
//       price: '$35',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
//       imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
//     },
//     {
//       id: 3,
//       name: 'Focus Paper Refill',
//       href: '#',
//       price: '$89',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
//       imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
//     },
//     {
//       id: 4,
//       name: 'Machined Mechanical Pencil',
//       href: '#',
//       price: '$35',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
//       imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
//     },
//     // More products...
//   ]


  
  export default function ProductsList({productos}) {


      return (
        
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-28 lg:max-w-full ">
            
            <div className="grid grid-cols-1 gap-x-1 gap-y-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-1">
              {typeof productos !== 'string'? productos.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`} className="group">
                  <div className='h-full bg-[#f5f5f5] pb-4 '>
                    <div className=" w-full flex items-center aspect-[1/1] px-2 overflow-hidden bg-white contrast-[92%]">
                      <img
                        src={product.pictureUrl}
                        alt={product.imageAlt}
                        className=" w-full object-cover group-hover:opacity-75"
                      />
                    </div>
                    <div className='p-5'>
                      <h3 className=" text-lg text-gray-800">{product.name}</h3>
                      <p className=" mt-1 text-base font-medium text-gray-900">${product.price}</p>
                    </div>
                    
                  </div>
                </Link>
              )): <h1>{productos}</h1>}
            </div>
          </div>
        </div>
      )
    
  }