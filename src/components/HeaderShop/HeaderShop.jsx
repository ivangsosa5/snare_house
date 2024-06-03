import React from 'react'
import Filters from '../Filters/Filters'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const HeaderShop = () => {

  const {brand} = useParams()
  const {categoryId} = useParams()
      
  return (
    <div className='sticky top-24 z-10 flex flex-col bg-white lg:top-28'>
          <div className='flex h-16 w-full items-center bg-white mb-1'>
          <nav aria-label="Breadcrumb">
            <ol role="list" className="flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl ">
                {brand !== undefined? <li>
                  <div className="flex items-center">
                      <Link to={'/shop'} className='mx-2 text-sm font-medium text-gray-900'>SHOP</Link>
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
                    <Link to={`/${brand.toUpperCase()}`} className='mx-2 text-sm font-medium text-gray-900'>{brand.toUpperCase()}</Link>
                    {categoryId !== undefined? <svg
                      width={16}
                      height={20}
                      viewBox="0 0 16 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-4 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg> : ''}
                    
                  </div>
                </li> : '' }
                
                {categoryId !== undefined? <li>
                  <div className="flex items-center">
                    <Link to={`/${brand}/${categoryId}`} className="text-sm font-medium text-gray-500 hover:text-gray-600">
                      {categoryId.toUpperCase()}
                    </Link>
                  </div>
                </li> : '' }
                {/* <li className="text-sm">
                <Link to='#' aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                  Hola
                </Link>
                
                </li> */}
            </ol>
          </nav>
              <div className='w-1/2 lg:w-auto lg:ml-auto lg:pr-15 flex justify-center lg:justify-left relative pr-14'>
                <Filters/>
              </div>
          </div>
        
    </div>
  )
}

export default HeaderShop