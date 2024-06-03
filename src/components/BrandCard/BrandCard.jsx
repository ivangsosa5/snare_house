import { Link } from "react-router-dom";

export default function BrandCard({imgSrc, title, description, brand}) {
    return (
      <div className="bg-white">
        <div className='mx-auto sm:py-0'>
          <div className="relative overflow-hidden px-6 pt-16 md:flex md:gap-x-20 md:px-24 md:pt-0">
            <div className="mx-auto max-w-md text-center pb-6 md:mx-0 md:flex-auto md:py-40 md:text-left">
              <p className="text-sm text-slate-700">{brand}</p>
              <h2 className="animate-fade-left animate-once text-3xl font-bold tracking-tight text-gray-800 sm:text-5xl">
              {title}
              </h2>
              <p className="animate-fade-left animate-once mt-6 text-xl leading-8 text-gray-700">
              {description}
              </p>
              
              <div className="mt-10 flex items-center justify-center gap-x-6 md:justify-start">
                <Link
                  to={`/${brand}`}
                  className="rounded-full bg-transparent border border-gray-900 px-3.5 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-800 hover:text-white "
                >
                  SHOP NOW!
                </Link>
                {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-800">
                  Learn more <span aria-hidden="true">→</span>
                </a> */}
              </div>
            </div>
            <div className="relative h-80 contrast-75 ">
              <img
                className=" absolute left-0 top-0 h-[560px] max-w-none rounded-xl bg-white/5"
                src={imgSrc}
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  