

import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import LogoImage from "../assests/logo.svg"; 

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu toggle

  return (
    <nav className="bg-gradient-to-r from-white via-gray-100 to-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={LogoImage} alt="Logo" className="w-32 h-auto mr-3" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/"
                className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300"
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link
                to="/about-products"
                className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300"
              >
                ABOUT PRODUCTS
              </Link>
            </li>
            <li>
              <Link
                to="/testimonials"
                className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300"
              >
                TESTIMONIALS
              </Link>
            </li>
          </ul>
          <button className="px-5 py-2 bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition duration-300 shadow-md rounded-lg">
            CONTACT
          </button>
          <Link
            to="/admin-login"
            className="px-5 py-2 bg-gray-800 text-white text-lg font-bold hover:bg-gray-900 transition duration-300 shadow-md rounded-lg"
          >
            Admin Login
          </Link>
        </div>

        {/* Mobile Menu Toggle (Hamburger Icon) */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-6">
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link
                to="/about-products"
                className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT PRODUCTS
              </Link>
            </li>
            <li>
              <Link
                to="/testimonials"
                className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                TESTIMONIALS
              </Link>
            </li>
            <li>
              <button
                className="w-full px-5 py-2 bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition duration-300 shadow-md rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT
              </button>
            </li>
            <li>
              <Link
                to="/admin-login"
                className="w-full px-5 py-2 bg-gray-800 text-white text-lg font-bold hover:bg-gray-900 transition duration-300 shadow-md rounded-lg block text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Admin Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
