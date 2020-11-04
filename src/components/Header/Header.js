import React from 'react';

const Header = () => {

    let handleGetStarted = () => {
      document.getElementById('installation').scrollIntoView({behavior: 'smooth'})
    }

    let handleWhy = () => {
      document.getElementById('why').scrollIntoView({behavior: 'smooth'})
    }


  return (
    <main class="mx-auto max-w-screen-xl px-4 pb-16 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div class="sm:text-center lg:text-left mt-10 sm:mt-12 xl:mt-28 lg:mt-20">
        <h2 class="text-2xl sm:text-4xl tracking-tight leading-10 font-extrabold text-gray-700 sm:leading-none">
          JavaScript object methods
        </h2>
        <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Now you can use object-mds package to help you easily in dealing with object in javaScript.
        </p>
        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div class="rounded-md">
            <a class="cursor-pointer w-full flex items-center justify-center px-5 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:px-10"
              onClick={handleGetStarted}
            >
              Get started
            </a>
          </div>
          <div class="ml-0 mt-3 sm:ml-3 sm:mt-0">
            <a class="cursor-pointer w-full flex items-center justify-center px-5 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out"
              onClick={handleWhy}
            >
              Why Object-Mds ?
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Header;