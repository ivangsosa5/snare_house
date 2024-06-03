import { Link } from 'react-router-dom'
import './styles.css'



export default function CategoriesPreview({props}) {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 ">
          <div className="mx-auto max-w-2xl py-6 sm:py-24 lg:max-w-none lg:py-6">
            <h2 className="text-2xl font-bold text-gray-800">SERIES</h2>
  
            <div className="my-10 space-y-12 lg:grid lg:grid-cols-5 lg:gap-x-1 lg:space-y-0 bg-white ">
              {props.map((prop) => (
                <div key={prop.name} className="group">
                  <Link to={prop.href}>
                    <div className="w-full overflow-hidden flex items-center bg-white contrast-[90%] aspect-[1/1]">
                      <img
                        src={prop.imageSrc}
                        alt={prop.imageAlt}
                        className="animate-fade-up animate-once w-full object-cover"
                      />
                      <div className='image__overlay image__overlay--blur text-wrap'>
                          <h1 className="font-bold text-start text-3xl mt-3 mb-3 mx-4 text-gray-700 ">
                              {prop.name}
                          </h1>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }