import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-extrabold tracking-tight text-indigo-400 hover:text-indigo-300 transition duration-300">
              TaskMaster
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6">
            <li>
              <Link
                to="/"
                className="text-sm font-medium hover:text-indigo-400 transition duration-300 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="text-sm font-medium hover:text-indigo-400 transition duration-300 ease-in-out"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className=" coaxs-sm font-medium hover:text-indigo-400 transition duration-300 ease-in-out"
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="text-sm font-medium hover:text-indigo-400 transition duration-300 ease-in-out"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/task"
                className="text-sm font-medium hover:text-indigo-400 transition duration-300 ease-in-out"
              >
                Task
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none p-2 rounded-md hover:bg-gray-800 transition duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
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
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-gray-800 px-4 pb-4 space-y-3 animate-slide-down">
          <li>
            <Link
              to="/"
              className="block text-sm font-medium text-white hover:text-indigo-400 hover:bg-gray-700 px-3 py-2 rounded-md transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="block text-sm font-medium text-white hover:text-indigo-400 hover:bg-gray-700 px-3 py-2 rounded-md transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="block text-sm font-medium text-white hover:text-indigo-400 hover:bg-gray-700 px-3 py-2 rounded-md transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="block text-sm font-medium text-white hover:text-indigo-400 hover:bg-gray-700 px-3 py-2 rounded-md transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/task"
              className="block text-sm font-medium text-white hover:text-indigo-400 hover:bg-gray-700 px-3 py-2 rounded-md transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Task
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;