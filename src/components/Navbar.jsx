import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent font-head">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-b-gray-200">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white text-lg">$BOJE</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 ">
                <a href="#" className="text-white  rounded-md text-sm font-medium">Home</a>
                <a href="#about" className="text-white  rounded-md text-sm font-medium">About</a>
                <a href="#token" className="text-white  rounded-md text-sm font-medium">Tokenmoics</a>
                <a href="https://t.me/BookofJeetss" className="text-white  rounded-md text-sm font-medium">Join</a>
            
              </div>
            </div>
            
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-black focus:text-white transition duration-150 ease-in-out" aria-controls="mobile-menu" aria-expanded="false">
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden flex flex-col justify-center items-center" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 text-center pb-3 space-y-1 sm:px-3">
              <a href="#" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="#about" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
              <a href="#token" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Tokenomics</a>
              <a href="https://t.me/BookofJeetss" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Join</a>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Navbar;
