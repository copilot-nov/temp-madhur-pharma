/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react';
import { Link, Navigate } from "react-router-dom";

const navigation = [
    { name: 'Dashboard', href: '#', current: false },
    { name: 'Production', href: '/production', current: true },
    // { name: 'Reports', href: '#', current: false },
    { name: 'Admin', href: '/home', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar(props) {
    // const [route, setRoute] = useState("/production")

    // const handlePages = (item) => {
    //     console.log(item)
    //     setRoute(item?.href)
    // }
    const handleLogout = () => {
        localStorage.clear()
        window.location.href = '/login'
    }
    // useEffect(()=> {
        
    // }, [])
    // console.log(route)
    return (
        <Disclosure as="nav">
            {({ open }) => (
                <>
                    <div className="bg-white border-b-2 border-gray-500 mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center justify-between sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <img src={'/logo.png'} alt='logo' className='w-14' />
                                </div>
                                <div className="hidden sm:block sm:ml-6 sm:flex sm:items-center ">
                                    <div className="flex items-center  space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                to={`${item?.href}`}
                                                // onClick={() => handlePages(item)}
                                                key={item.name}
                                                // href={item.href}
                                                className={classNames(
                                                    item.href === props.current ? 'border-b-2 border-green-800 text-green-800' : 'text-gray-900',
                                                    'px-3 py-2 text-sm font-medium font-bold'
                                                )}
                                                // aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-start'>
                                <div className="inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-green-900 hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <button
                                        onClick={handleLogout}
                                        className="hidden lg:block cursor-pointer p-1 rounded-full text-green-800"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden shadow-md rounded-2">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Transition
                                enter="transition duration-1000 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-1000 opacity-1000"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-1000 opacity-1000"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'border-b-2 border-green-800 text-green-800' : 'text-gray-900 hover:bg-gray-700 hover:text-white',
                                            'block px-3 py-2 text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </Transition>


                            <button
                                title='👋 Logout'
                                // onClick={handleLogout}
                                className="flex items-center justify-start px-3 py-2 cursor-pointer p-1 text-gray-900"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                                <span className='ml-2'> Logout </span>
                            </button>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
