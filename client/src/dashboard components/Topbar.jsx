import { BellIcon, ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';

const Topbar = ({ sidebarOpen }) => (
  <header className="bg-white shadow-sm z-10">
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 mr-2" />
        <input type="text" placeholder="Search..." className="border-0 focus:ring-0 focus:outline-none" />
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative p-1 text-gray-500 hover:text-gray-700">
          <BellIcon className="h-6 w-6" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <div className="flex items-center">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?...256&q=80"
            alt="User profile"
            className="h-8 w-8 rounded-full"
          />
          {sidebarOpen && (
            <div className="ml-2 flex items-center">
              <span className="text-sm font-medium">John Doe</span>
              <ChevronDownIcon className="h-4 w-4 ml-1" />
            </div>
          )}
        </div>
      </div>
    </div>
  </header>
);

export default Topbar;
