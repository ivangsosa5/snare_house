import React, { useContext } from "react"
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { Link } from "react-router-dom"
import { cartContext } from "../../context/cartContext"
import ReactImageMagnify from 'react-image-magnify';
import { ImageMagnifier } from "../Magnifier/Magnifier"


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

  const ProductDetail= ({producto})=>{

    const {addItem} = useContext(cartContext)

    let modelos = []
    

    if('variantes' in producto){
      for(const propiedad in producto.variantes){
       modelos.push(producto.variantes[propiedad])
      }
   
    }
  
    const [selectedVariant, setSelectedVariant] = useState({url: null, color: null, colorName: null})
    
    
    return (
      <div className="bg-white flex justify-center">
      <div className="pt-[134px] px-16">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl ">
              <li>
                <div className="flex items-center">
                    <Link to={'/shop'} className="mr-2 text-sm font-medium text-gray-900">
                      SHOP
                    </Link>
                    <svg
                      width={16}
                      height={20}
                      viewBox="0 0 16 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-4 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                    
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <Link to={`/${producto.brand}`} className="mr-2 text-sm font-medium text-gray-900">
                    {producto.brand}
                  </Link>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                  
                </div>
              </li>
              
              <li>
                <div className="flex items-center">
                  <Link to={`/${producto.brand}/${producto.category}`} className="mr-2 text-sm font-medium text-gray-900">
                    {producto.series}
                  </Link>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li className="text-sm">
              <Link to='#' aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {producto.name}
              </Link>
              
              </li>
          </ol>
        </nav>

        {/* Product info */}
   
        <div className=" max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-full md:grid-cols-[1fr,1fr,1fr] lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:pb-24 lg:pt-7 sm:grid-cols-2">
            
          <div className="aspect-[1/1] px-2 lg:w-[500px] flex items-center contrast-[92%] bg-white overflow-hidden">
          {/* <ImageMagnifier smallImage={producto.pictureUrl} largeImage={'https://www.dwdrums.com/_next/image/?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0621%2F5027%2F9317%2Fproducts%2FDDSD6514BNCR.jpg%3Fv%3D1707178243&w=1920&q=75'} /> */}

              <img src={selectedVariant.url != null? selectedVariant.url : producto.pictureUrl} alt="" className="w-full object-cover"/>

          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:col-span-2 lg:pl-6 lg:mt-0">
            <div className="pb-5">
              <h1 className="lg:text-5xl font-bold tracking-tight text-gray-800 sm:text-3xl text-3xl">{producto.name}</h1>
              <br/>
              <p className="text-lg font-medium text-gray-900">{producto.shortDescription}</p>
              <br/>
              <div className="grid grid-cols-3">
                <div>
                  <h3 className="text-sm font-normal text-gray-900">Series</h3>
                  <h3 className="text-sm font-medium text-gray-900">{producto.brand}: {producto.series}</h3>
                  
                </div>
                <div>
                <h3 className="text-sm font-normal text-gray-900">Size</h3>
                <h3 className="text-sm font-medium text-gray-900">{producto.size}</h3>
                </div>
              </div>
            </div>
          

            <div>
              {/* Colors */}
              {'variantes' in producto ? 
                <div className="mb-8">
                  
                  <h3 className="text-sm font-medium text-gray-900">Finish</h3>
                
                  <RadioGroup className="mt-4">
                    <RadioGroup.Label className="sr-only">Choose a finish</RadioGroup.Label>
                    <div className="flex items-center space-x-3">

                          {modelos.map((variant) => (
                            <RadioGroup.Option
                              onClick={()=>setSelectedVariant({url: variant[2], color: variant[1], colorName: variant[0]})}
                              key={variant[0]}
                              value={variant}
                              className={({ active, checked }) =>
                                classNames(
                                  'ring-gray-400',
                                  active && checked ? 'ring ring-offset-1' : '',
                                  !active && checked ? 'ring-2' : '',
                                  'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                                )
                              }
                            >
                              <RadioGroup.Label as="span" className="sr-only">
                                {variant[0]}
                              </RadioGroup.Label>
                              <span
                                aria-hidden="true"
                                className={classNames(
                                  `bg-[${variant[1]}]` ,
                                  'h-8 w-8 rounded-full border border-black border-opacity-10'
                                )}
                              />
                            </RadioGroup.Option>
                          ))}
                    </div>
                  </RadioGroup>
              </div>: '' }
              
              <h3 className="text-sm font-medium text-gray-900 mb-4">Price</h3>
              <p className="text-3xl tracking-tight text-gray-900">${producto.price}</p>

              <div className="flex justify-center lg:justify-start">
              <button
                onClick={'variantes' in producto ? selectedVariant.url != null? ()=>addItem({id:producto.id, name:producto.name, price:producto.price, quantity:1, pictureUrl:selectedVariant.url, colorName: selectedVariant.colorName}) : ()=> alert('Por favor selecciona un color') : ()=>addItem({id:producto.id, name:producto.name, price:producto.price, quantity:1, pictureUrl:producto.pictureUrl, colorName: producto.colorName})}
                className="mt-10 flex w-80 items-center justify-center rounded-full border border-gray bg-gray-800 px-8 py-3 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                ADD TO CART
              </button>
              </div>
            </div>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:pb-16 lg:pr-8 lg:pt-6">

            {/* Description and details */}
            {/* <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{producto.shortDescription}</p>
              </div>
            </div> */}

            <div className="mt-10">
              <h3 className="text-base font-medium text-gray-900">Highlights</h3>

              {/* <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-base">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>

            <div className="mt-10">
              <h2 className="text-base font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-base text-gray-600">{producto.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }

  export {ProductDetail};