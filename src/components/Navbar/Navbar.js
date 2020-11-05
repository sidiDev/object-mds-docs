import React, { useState, useEffect } from 'react';
import { FaCode } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [isOpen,setIsOpen] = useState(false)
    
    useEffect(() => {
        window.onscroll = () => {
            setIsOpen(false)
        }
    })

  return (
    <>
        <div className="relative py-3 px-4 sm:px-6 lg:px-8 shadow-md bg-white">
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                <a href="/" aria-label="Home" className="flex items-center text-xl">
                    <FaCode className="text-indigo-500 text-2xl"/>
                    <span className="ml-2">Object-Mds</span>
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                    <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" id="main-menu" aria-label="Main menu" aria-haspopup="true"
                        onClick={() => setIsOpen(true)}
                    >
                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    </button>
                </div>
                </div>
            </div>
            <div className="hidden md:block md:ml-10 md:pr-4">
                <NavLink to="/docs/find" className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Find</NavLink>
                <NavLink to="/docs/sort" className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Sort</NavLink>
                <NavLink to="/docs/limit" className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Limit</NavLink>
                <NavLink to="/docs/reverse" className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Reverse</NavLink>
                <NavLink to="/docs/skip" className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Skip</NavLink>
                <a href="mailto:sididev3@gmail.com" target="_blank" className="ml-8 font-medium text-indigo-600 hover:text-indigo-900 transition duration-150 ease-in-out">Contact us</a>
            </div>
            </nav>
        </div>


        <div className={`absolute top-0 inset-x-0 py-3 bg-white shadow-md transition transform origin-top-right md:hidden ${isOpen ? '' : 'hidden'}`}>
            <div className="rounded-lg">
            <div className="rounded-lg overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <div>
                    <a href="/" aria-label="Home" className="flex items-center text-xl">
                        <FaCode className="text-indigo-500 text-2xl"/>
                        <span className="ml-2">Object-Mds</span>
                    </a>
                </div>
                <div className="-mr-2">
                    <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Close menu"
                        onClick={() => setIsOpen(false)}
                    >
                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
                </div>
                <div className="py-3 px-4 sm:px-6 lg:px-8">
                    <NavLink to="/docs/find" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem" onClick={() => setIsOpen(false)}>Find</NavLink>
                    <NavLink to="/docs/Sort" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem" onClick={() => setIsOpen(false)}>Sort</NavLink>
                    <NavLink to="/docs/Limit" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem" onClick={() => setIsOpen(false)}>Limit</NavLink>
                    <NavLink to="/docs/Reverse" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem" onClick={() => setIsOpen(false)}>Reverse</NavLink>
                    <NavLink to="/docs/skip" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem" onClick={() => setIsOpen(false)}>Skip</NavLink>
                </div>
                <div>
                <a href="mailto:sididev3@gmail.com" target="_blank" className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-100 hover:bg-gray-200 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out" role="menuitem" onClick={() => setIsOpen(false)}>
                    Contact us
                </a>
                </div>
            </div>
            </div>
        </div>
  </>
  )
}

export default Navbar;