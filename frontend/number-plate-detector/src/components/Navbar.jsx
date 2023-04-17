import React, { useState, useEffect } from 'react';
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri';
import { Link } from 'react-scroll';

function Navbar() {
  const [nav, setNav] = useState(false);
  const [navColor, setNavColor] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClick = () => {
    setNav(false);
  };


  return (
    <div
      className={`w-full top-0 sticky z-20 bg-[#35055B] rounded-md`}
    >
      <div className='text-white flex justify-between items-center h-20 mx-auto max-w-[1240px] px-4'>
        <h1 className='text-3xl font-bold text-pink-500 cursor-not-allowed'>
          Plate<span className='text-white'>Seeker</span>
          <span className='text-yellow-300'>.</span>
        </h1>
        <ul className='hidden md:flex md:items-center'>
          <Link
            to='home'
            activeClass='text-yellow-300 border-b-4 border-yellow-300'
            className='hover:text-yellow-300'
          >
            <li className='p-4 cursor-pointer'>Home</li>
          </Link>
          <Link
            to='service'
            activeClass='text-yellow-300 border-b-4 border-yellow-300'
            className='hover:text-yellow-300'
          >
            <li className='p-4 cursor-pointer'>Service</li>
          </Link>
          <Link
            to='newsletter'
            activeClass='text-yellow-300 border-b-4 border-yellow-300'
            className='hover:text-yellow-300'
          >
            <li className='p-4 cursor-pointer'>About</li>
          </Link>
          <li className='p-4 cursor-pointer'>
            <button className='px-6 h-10 bg-gradient-to-r from-violet-800 to-pink-600 rounded-md font-semibold border border-pink-500 hover:shadow-lg hover:shadow-pink-500 text-yellow-300'>
              Admin Login
            </button>
          </li>
        </ul>
        <div onClick={handleNav} className='md:hidden'>
          {!nav ? (
            <RiMenu3Fill size={20} className='ease-in-out duration-500' />
          ) : (
            <RiCloseFill size={20} className='ease-in-out duration-500' />
          )}
        </div>
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-2/3 border-r-gray-700 h-full border-r bg-[#000300] ease-in-out duration-1000 md:hidden'
              : 'fixed hidden'
          }
        >
          <h1 className='text-3xl font-semibold text-green-400 m-4'>Menu</h1>
          <ul className='pt-5 uppercase'>
            <Link
              activeClass='hover:text-yellow-300 text-yellow-300'
              className='hover:text-green-400'
              to='home'
              onClick={handleClick}
            >
              <li className='p-4 border-b border-gray-500 cursor-pointer'>
                Home
              </li>
            </Link>
            <Link
              activeClass='hover:text-yellow-300 text-yellow-300'
              className='hover:text-green-400'
              to='service'
              onClick={handleClick}
            >
              <li className='p-4 border-b border-gray-500 cursor-pointer'>
                Service
              </li>
            </Link>
            <Link
              activeClass='hover:text-yellow-300 text-yellow-300'
              className='hover:text-green-400'
              to='newsletter'
              onClick={handleClick}
            >
              <li className='p-4 border-b border-gray-500 cursor-pointer'>
                Newsletter
              </li>
            </Link>
            <li className='p-4'>
              <button className='px-6 h-10 '>
                Admin Login
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className='bg-violet-800 h-[0.01vh]'>

      </div>
    </div>
  );
}

export default Navbar;