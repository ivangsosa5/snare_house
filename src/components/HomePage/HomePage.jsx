import React from "react"
import Slider from "../Swiper/Swiper"
import './HomePage.css'
import { Link } from "react-router-dom"
import logo from '../../assets/logo.svg'
import SnareHouseLogo from "../Icons/SnareHouseLogo"

const HomePage = ()=>{

  return (
    <div className="relative">
        <div className="hero overlay ">
            <div className="mx-auto max-w-2xl my-[112px]">
                    <div className="flex justify-center mb-10 sm:hidden">
                    <img src={logo} className="w-[70px]"></img>
                    {/* <SnareHouseLogo fill='white'/> */}
                    </div>
                    <div className="sm:flex justify-center sm:space-x-4">
                      <h1 className="text-6xl font-bold  text-white mb-1">
                      FIND YOUR
                      </h1>
                      <h1 className="text-6xl font-bold text-white reflect">
                        SOUND
                      </h1>
                    </div>
                  <div className="flex justify-center">
                    <p className="mt-6 text-lg leading-7 md:leading-8 text-gray-300 w-3/4 md:w-full">
                      The best place to find your perfect snare. TOP World brands in the palm of your hand. From America to the entire world
                    </p>
                  </div>
                    <div className="mt-10 flex items-center justify-center gap-x-6 ">
                      <Link
                      to="/shop"
                      className="relative rounded-full bg-transparent border-[1.5px] px-8 py-2 text-2xl sm:text-xl font-semibold text-white hover:text-gray-950 hover:bg-white hover:font-semibold "
                      >
                        SHOP NOW!
                      </Link>
                  
                    </div>
            </div>
        </div>
      
      <Slider></Slider>
    </div>
  )
}

export {HomePage}