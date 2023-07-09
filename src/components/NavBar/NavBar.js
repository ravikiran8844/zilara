"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="main_navbar navbar-bg py-6 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-4 lg:hidden">
            <Link href="/">
              <div className="text-white text-lg font-semibold">
                <Image alt='logo' width={185} height={58} src="/zillara_logo.png"/>
              </div>
            </Link>
          </div>
          <div className="hidden lg:flex">
            <Link href="/link1">
              <div className="navbar-links mr-5">Our Story</div>
            </Link>
            <Link href="/link2">
              <div className="navbar-links mr-5">Zilara Siver</div>
            </Link>
            <Link href="/link2">
              <div className="navbar-links mr-5">Contact Us</div>
            </Link>
          </div>
        </div>
        <div className="lg:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={toggleDropdown}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isDropdownOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden lg:block">
          <Link href="/">
            <div className="text-white text-lg font-semibold">
            <Image className='nav_logo-center' alt='logo' width={225} height={58} src="/zillara_logo.png"/>
            </div>
          </Link>
        </div>
        <div className="hidden lg:flex">
          <Link href="/link3">
            <div className="text-gray-300 hover:text-white mr-4">
                <div className='flex items-center justify-center'>
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_1019_178" maskUnits="userSpaceOnUse" x="0" y="0" width="35" height="35">
<path d="M35 0H0V35H35V0Z" fill="white"/>
</mask>
<g mask="url(#mask0_1019_178)">
<path d="M29.13 15.2549H15.255V30.1299H29.13V15.2549Z" stroke="#2D2D2D" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M30.63 9.75488V15.1299H4.38V9.75488L8.755 4.37988H26.255L30.63 9.75488Z" stroke="#2D2D2D" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M10.505 14.8799V10.0049" stroke="#2D2D2D" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M17.505 14.8799V10.0049" stroke="#2D2D2D" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M24.505 14.8799V10.0049" stroke="#2D2D2D" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M5.88 14.8799V30.6299" stroke="#2D2D2D" stroke-width="1.5" stroke-linejoin="round"/>
</g>
</svg>

                </div>
                <div className='navbar-links'>
                STORES
                </div>
            </div>
          </Link>
          <Link href="/link4">
            <div className="text-gray-300 hover:text-white mr-4">
                <div  className='flex items-center justify-center'>
                <svg width="35" height="35" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1019_105)">
<path d="M16 14.5059C19.0376 14.5059 21.5 12.0434 21.5 9.00586C21.5 5.96829 19.0376 3.50586 16 3.50586C12.9624 3.50586 10.5 5.96829 10.5 9.00586C10.5 12.0434 12.9624 14.5059 16 14.5059Z" stroke="#2D2D2D" stroke-width="1.5"/>
<path d="M4.18254 27.4917C3.8812 27.4917 5.04387 24.0997 5.1412 23.857C6.8812 19.521 10.3159 19.541 15.9892 19.541C21.6625 19.541 25.5359 19.5224 27.2772 23.857C27.3745 24.0997 28.0972 27.489 27.7945 27.489H4.18254V27.4917Z" stroke="#2D2D2D" stroke-width="1.5"/>
</g>
<defs>
<clipPath id="clip0_1019_105">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>

                </div>
                <div className='navbar-links'>
                ACCOUNT
                </div>
            </div>
          </Link>
        </div>
      </div>
      {isDropdownOpen && (
        <div className="lg:hidden">
          <div className="mt-2 pb-3">
            <Link href="/link1">
              <div className="block text-gray-300 hover:text-white px-4 py-2">
                Link 1
              </div>
            </Link>
            <Link href="/link2">
              <div className="block text-gray-300 hover:text-white px-4 py-2">
                Link 2
              </div>
            </Link>
            <Link href="/link3">
              <div className="block text-gray-300 hover:text-white px-4 py-2">
                Link 3
              </div>
            </Link>
            <Link href="/link4">
              <div className="block text-gray-300 hover:text-white px-4 py-2">
                Link 4
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
