import React from "react"
import Slider from "../Swiper/Swiper"
import './HomePage.css'
import { Link } from "react-router-dom"
import back from '../../assets/back.png'

const HomePage = ()=>{

  return (
    <div className="relative">
      <div className="background"></div>
      <div className="absolute top-0 inset-0">
        <div className="relative isolate px-6 lg:px-8">
          {/* <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80acff] to-[#110b5a] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div> */}
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Announcing our next round of funding.{' '}
                <a href="#" className="font-semibold text-indigo-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div> */}
            <div className="text-center mt-16">
              <div className="relative w-full h-20">
                <div className="absolute inset-0">
                  <div className="flex justify-center space-x-4">
                    <h1 className="text-5xl font-bold  text-white sm:text-6xl">
                    FIND YOUR
                    </h1>
                    <h1 className="text-5xl font-bold text-white sm:text-6xl reflect">
                      SOUND
                    </h1>
                  </div>
                
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    The best place to find your perfect snare. TOP World brands in the palm of your hand. From America to the entire world
                  </p>
                  
                  <div className="mt-10 flex items-center justify-center gap-x-6 ">
                    <Link
                    to="/shop"
                    className="relative rounded-full bg-transparent border px-8 py-2 text-xl font-semibold text-white hover:text-gray-950 hover:bg-white hover:font-semibold "
                    >
                      SHOP NOW!
                    </Link>
                
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#80acff] to-[#110b5a] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div> */}
        </div>
      </div>
      <Slider></Slider>
    </div>
  )
}

export {HomePage}