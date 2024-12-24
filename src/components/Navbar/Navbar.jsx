import React from 'react';
import { IoMdSearch } from "react-icons/io";
import { IoBasketSharp } from "react-icons/io5";

const MenuLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Shop", link: "/#shop" },
  { id: 3, name: "About", link: "/#about" },
  { id: 4, name: "Blogs", link: "/#blog" },
];

const Navbar = ({ cartCount }) => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'> 
      <div className='py-4'>
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <div className='flex items-center gap-4'>
            <a href="#" className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>Eshop</a>
          </div>
          
          {/* Menu Items */}
          <div className='hidden lg:block'>
            <ul className='flex items-center gap-4'>
              {MenuLinks.map((data, index) => (
                <li key={index}>
                  <a
                    href={data.link}
                    className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
  
          {/* Right Section */}
          <div className='flex items-center gap-4'>
            {/* Search */}
            <div className="group flex items-center">
              <div className="flex items-center">
                <IoMdSearch className="text-xl text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors duration-200" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-0 overflow-hidden bg-transparent text-sm border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none dark:placeholder-gray-500 group-hover:w-40 transition-all duration-200"
                />
              </div>
            </div>

            {/* Basket Icon */}
            <div className="relative">
              <IoBasketSharp className="text-2xl text-gray-600 dark:text-gray-400" />
              <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center dark:bg-primary-light">
                {cartCount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
