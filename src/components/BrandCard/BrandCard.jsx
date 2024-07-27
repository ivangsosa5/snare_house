import { Link } from "react-router-dom";


export default function BrandCard({imgSrc, title, description, brand}) {
    return (
      <div className="bg-white overflow-hidden mx-auto">
          <div className="mx-auto relative pt-52 grid grid-cols-1 lg:grid-cols-2 md:gap-x-20 md:px-24 md:pt-0 lg:h-[545px]">
            
            <div className="pb-40 mx-10 px-12 md:px-0 md:max-w-md text-center md:mx-0 md:flex-auto md:py-[123px] md:text-left ">
              <p className="text-lg font-medium text-[rgb(121,98,63)]">{brand}</p>            
              <h2 className="animate-fade-left animate-once text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl">
              {title}
              </h2>
              <p className="animate-fade-left animate-once mt-6 text-lg leading-8 text-gray-700 hidden md:block ">
              {description}
              </p>
              
              <div className="mt-10 flex items-center justify-center gap-x-6 md:justify-start">
                <Link
                  to={`/${brand}`}
                  className="rounded-full bg-transparent border-[1.5px] border-gray-900 px-3.5 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-800 hover:text-white "
                >
                  SHOP COLLECTION!
                </Link>
              </div>
            </div>
            <div className="relative contrast-75 ml-3 md:ml-0">
              <img
                className="lg:absolute left-0 top-0 md:h-[545px] md:w-auto md:max-w-none bg-white/5 md:rounded-2xl lg:rounded-none"
                src={imgSrc}
                alt="App screenshot"
              />
               
            </div>
          </div>
      </div>
    )
  }
  