import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";




const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Detect current route

  const navLinks = ["Home", "About", "Menu", "Chefs", "Blog", "Element", "Contact"];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 transition duration-300">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-orange-500 hidden sm:inline animate-pulse">Foodies</span>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-700 focus:outline-none transition-transform duration-200 hover:scale-110"
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`${
            isOpen ? "block animate-slideDown" : "hidden"
          } lg:flex lg:items-center lg:space-x-6 absolute top-full left-0 w-full lg:static lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-6 px-4 py-4 lg:p-0 text-gray-800 font-medium text-md">
            {navLinks.map((item, index) => {
              const path = `/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`;
              const isActive = location.pathname === path;

              return (
                <li key={index}>
                  <Link
                    to={path}
                    className={`relative group transition duration-300 p-1 ${
                      isActive ? "text-orange-500" : "text-gray-800"
                    }`}
                  >
                    <span className="transition duration-200">{item}</span>
                    <span
                      className={`absolute bottom-0 left-0 h-0.5   bg-orange-500 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full "
                      }`}
                    ></span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden lg:block">
         <Link
  to="/booktable"
  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition transform hover:scale-105 duration-200 shadow-md"
>
  Book a Table
</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
