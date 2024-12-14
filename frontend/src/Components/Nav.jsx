

import React, { useState } from "react";
import axios from "axios";

const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/subscribers/uplordSubscribe`,
        { subscriber: email }
      );
      setSuccessMessage("Thank you for subscribing!");
      setEmail(""); // Clear the input
    } catch (err) {
      setErrorMessage(
        err.response?.data?.message || "Failed to subscribe. Please try again."
      );
    }
  };

  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto flex justify-between items-center px-4 py-4 md:px-8">
        {/* Left Section: Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">Services</li>
          <li className="hover:underline cursor-pointer">Projects</li>
          <li className="hover:underline cursor-pointer">Testimonials</li>
          <li className="hover:underline cursor-pointer">Contact</li>
        </ul>

        {/* Right Section: Subscribe Form */}
        <form
          onSubmit={handleSubscribe}
          className="hidden md:flex items-center space-x-4 bg-white text-blue-600 px-4 py-2 rounded-md"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email Address"
            className="px-4 py-2 rounded-md text-black focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-orange-600"
          >
            Subscribe
          </button>
        </form>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-blue-700 p-4 md:hidden">
          <ul className="space-y-4 text-lg text-white">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Services</li>
            <li className="hover:underline cursor-pointer">Projects</li>
            <li className="hover:underline cursor-pointer">Testimonials</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>

          {/* Mobile Subscribe Section */}
          <form
            onSubmit={handleSubscribe}
            className="mt-4 bg-white text-blue-600 p-4 rounded-md flex flex-col"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
              className="mb-2 px-4 py-2 rounded-md text-black focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-orange-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      )}

      {/* Feedback Messages */}
      <div className="text-center absolute w-full mt-4">
        {successMessage && <p className="text-green-400">{successMessage}</p>}
        {errorMessage && <p className="text-red-400">{errorMessage}</p>}
      </div>
    </nav>
  );
};

export default Nav;

