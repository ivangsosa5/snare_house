
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import './NavBar.css'
import logo from '../../assets/logo.png'
import ludwig from '../../assets/img/categoriesImg/ludwig.png'
import Ludwig1 from '../../assets/img/categoriesImg/Ludwig1.jpg'
import Ludwig2 from '../../assets/img/categoriesImg/Ludwig2.jpg'
import Ludwig4 from '../../assets/img/categoriesImg/Ludwig4.jpg'
import Ludwig5 from '../../assets/img/categoriesImg/Ludwig5.jpg'
import Ludwig6 from '../../assets/img/categoriesImg/Ludwig6.jpg'
import Ludwig7 from '../../assets/img/categoriesImg/Ludwig7.jpg'
import dw from '../../assets/img/categoriesImg/dw.jpg'
import dw1 from '../../assets/img/categoriesImg/dw1.jpg'
import dw2 from '../../assets/img/categoriesImg/dw2.jpg'
import dw3 from '../../assets/img/categoriesImg/dw3.jpg'
import dw5 from '../../assets/img/categoriesImg/dw5.jpg'
import Tama from '../../assets/img/categoriesImg/tama.jpg'
import Tama1 from '../../assets/img/categoriesImg/Tama1.jpg'
import Tama2 from '../../assets/img/categoriesImg/Tama2.jpg'
import Tama3 from '../../assets/img/categoriesImg/Tama3.jpg'
import Tama4 from '../../assets/img/categoriesImg/Tama4.jpg'
import Tama5 from '../../assets/img/categoriesImg/Tama5.jpg'
import sonor from '../../assets/img/categoriesImg/sonor.jpg'
import { Link } from 'react-router-dom'
import OffCanvasCart from '../OffCanvasCart/OffCanvasCart'



const navigation = {
  categories: [
    {
      id: 'ludwig',
      name: 'LUDWIG',
      img: ludwig,
      models: [
        {
          name: 'BRONZE PHONIC',
          href: '/ludwig/bronzePhonic',
          imageSrc: Ludwig1,
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          description: 'Your new snare'
        },
        {
          name: 'UNIVERSAL',
          href: '/ludwig/universal',
          imageSrc: Ludwig2,
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          description: 'Your new snare'
        },
        {
          name: 'BLACK BEAUTY',
          href: '/categoria/blackBeauty',
          imageSrc: Ludwig4,
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          description: 'Your new snare'
        },
        {
          name: 'SUPRAPHONIC',
          href: '/ludwig/supraphonic',
          imageSrc: Ludwig5,
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          description: 'Your new snare'
        },
        {
          name: 'JAZZ FEST',
          href: '/ludwig/jazzFest',
          imageSrc: Ludwig6,
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          description: 'Your new snare'
        },
        {
          name: 'SPECIAL EDITIONS',
          href: '/ludwig/specialEdition',
          imageSrc: Ludwig7,
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          description: 'Your new snare'
        }
      ]
    },
    {
      id: 'dw',
      name: 'DW',
      img: dw,
      models: [
        {
          name: 'COLLECTORS SERIES',
          href: '/dw/collectors',
          imageSrc: dw1,
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'PERFORMANCE SERIES',
          href: '/dw/performance',
          imageSrc: dw2,
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
        {
          name: 'DESIGN SERIES',
          href: '/dw/designSeries',
          imageSrc: dw5,
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
        {
          name: 'DW ICON SNARES',
          href: '/dw/dwIconSnares',
          imageSrc: dw3,
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ]
    },
    {
      id: 'tama',
      name: 'TAMA',
      img: Tama,
      models: [
        {
          name: 'SIGNATURE SNARE DRUM',
          href: '/tama/signature',
          imageSrc: Tama1,
          imageAlt: 'tamaSignature',
        },
        {
          name: 'STAR',
          href: '/tama/star',
          imageSrc: Tama2,
          imageAlt: 'tamaStar',
        },
        {
          name: 'STAR RESERVE',
          href: '/tama/starReserve',
          imageSrc: Tama3,
          imageAlt: 'tamaStarReserve',
        },
        {
          name: 'WOODWORKS',
          href: '/tama/woodWorks',
          imageSrc: Tama4,
          imageAlt: 'tamaWoodworks',
        },
        {
          name: 'S.L.P',
          href: '/tama/slp',
          imageSrc: Tama5,
          imageAlt: 'tamaSlp',
        }
      ]
    },
    // {
    //   id: 'pearl',
    //   name: 'PEARL',
    //   models: [
    //     {
    //       name: 'SENSITONE',
    //       href: '/categoria/sensitone',
    //       imageSrc: 'https://pearldrum.com/sites/default/files/image_folder/PRODUCTS/SNARES/SENSITONE/HERITAGE%20ALLOY/STEEL/805x500%20STH1465S%2014x6.5%20SensiTone%20Heritage%20Alloy%20Beaded%20Steel%20Snare%20Drum.jpg',
    //       imageAlt: 'pearlSensitone',
    //     },
    //     {
    //       name: 'HYBRID EXOTIC',
    //       href: '/categoria/hybridExotic',
    //       imageSrc: 'https://pearldrum.com/sites/default/files/styles/acret_golden_ratio_384/public/image_folder/PRODUCTS/SNARES/HYBRID_EXOTIC/CAST_ALUMINUM/1920x1440%20HEAL1450.jpg?itok=FFjk4fRK',
    //       imageAlt: 'pearlHybrid',
    //     },
    //   ]
    // },
    {
      id: 'sonor',
      name: 'SONOR',
      img: sonor,
      models: [
        {
          name: 'PHONIC SERIES',
          href: '/sonor/phonicSeries',
          imageSrc: 'https://www.sonor.com/import/_processed_/c/b/csm_Phonic_D_515_PA_046590919c.jpg',
          imageAlt: 'sonorPhonicSeries',
        },
        {
          name: 'ARTIST SERIES',
          href: '/sonor/artistSeries',
          imageSrc: 'https://www.sonor.com/import/_processed_/c/3/csm_AS_1406_CM_SDWD_69a974fbf4.jpg',
          imageAlt:
            'sonorArtistSeries',
        },
        {
          name: 'KOMPRESSOR SERIES',
          href: '/sonor/kompressor',
          imageSrc: 'https://www.sonor.com/import/_processed_/8/e/csm_11171101_KS1406SDW_front_93601afd34.jpg',
          imageAlt:
            'sonorKompressor',
        },
        {
          name: 'SIGNATURE SERIES',
          href: '/sonor/signatureSeries',
          imageSrc: 'https://www.sonor.com/import/_processed_/9/1/csm_SO_GH_ProTean_SD12_12_7622cbce35.jpg',
          imageAlt:
            'sonorSignature',
        }
       
      ]
    },
  ],
  pages: [
    { name: 'SHOP NOW!', href: '/shop' }, 
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-sm flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'border-gray-600' : 'border-transparent',
                              'text-gray-900 flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.models.map((item) => (
                            <div key={item.name} className="group relative text-sm">
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                              </div>
                              <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                <span className="absolute inset-0 z-10" aria-hidden="true" />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                      Sign in
                    </a>
                  </div>
                  <div className="flow-root">
                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                      Create account
                    </a>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="top-8 fixed z-20 bg-white shadow-md w-full">
        <div className='absolute w-full inset-0'>
          <div className='relative flex justify-center items-center text-3xl sm:text-4xl  text-gray-800 font-semibold h-20'>
            {/* <p className='absolute blur-[5px] opacity-40'>SNARE HOUSE</p>
            <p className='absolute blur-[20px] opacity-90'>SNARE HOUSE</p> */}
            <Link to={'/home'} className='relative' >SNARE HOUSE
              <span className='animation aria-hidden '>SNARE HOUSE</span>
            </Link>
            
          </div>
        </div>
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="">
            <div className="flex h-20 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 sm:flex lg:ml-0 z-40 hidden">
                <Link to={'/home'}>
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-9 w-auto"
                    src={logo}
                    alt=""
                  />
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="z-40 hidden lg:ml-8 lg:block lg:self-stretch ">
                <div className="flex h-full space-x-8 ">
                  {navigation.categories.map((category) => (
                    
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex ">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-gray-600'
                                  : 'border-transparent hover:text-gray-800',
                                'text-gray-700 relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium duration-200 ease-out focus-visible:outline focus-visible:outline-transparent focus-visible:'
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            {/* <Popover.Panel className="absolute inset-x-0 inset-y-12 text-sm text-gray-500 ">
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl">
                                  <CategoriesPreview props={category.models}></CategoriesPreview>
                                </div>
                              </div>
                            </Popover.Panel> */}
                            <Popover.Panel className="absolute left-24 top-full text-sm text-gray-500 w-1/2 ">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div className="absolute inset-0 top-3 bg-[#f9f9f9] shadow rounded-xl " aria-hidden="true" />

                              <div className="relative  rounded-b-lg contrast-[95%]">
                                <div className="mx-16 max-w-7xl h-80 flex items-center">
                                  <div className="relative grid grid-cols-3">
                                    <div className="text-sm flex items-center ">
                                      <div className='animate-fade-up animate-once'>
                                        {category.models.map((item) => (
                                          <div key={item.name}>
                                            <ul
                                              role="list"
                                              aria-labelledby={`${item.name}-heading`}
                                              
                                            >
                                                <li key={item.name} className='my-4 ' >
                                                  <a href={item.href} className="hover:text-gray-800 text-gray-500 font-medium">
                                                    {item.name}
                                                  </a>
                                                </li>                                           
                                            </ul>
                                          </div>
                                          
                                        ))}
                                      </div>
                                    </div>
                                    <div className='animate-fade-up animate-once flex items-center col-span-2'>
                                      <a href={`/${category.name}`}>
                                        <img src={category.img} alt="" className=' object-cover '/>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                      
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <div className= 'flex items-center justify-center'>
                      {/* <a
                        key={page.name}
                        href={page.href}
                        className="rounded-md text-sm font-medium shadow-sm px-1.5 py-1.5 text-gray-100 hover:text-gray-300 bg-gray-800 hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white "
                      > */}
                      {/* <Link key={page.name} to={page.href} className="rounded-md text-sm font-medium shadow-sm px-1.5 py-1.5 text-gray-100 hover:text-gray-300 bg-gray-800 hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ">
                        {page.name}
                      </Link> */}
                      
                    </div>
                    
                      )
                    )
                  }
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center z-40">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Sign in
                  </a>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Create account
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  
                  <OffCanvasCart></OffCanvasCart>
                  
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
