import React from "react";
import { FaTwitter, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import Logo from "../assests/logo.svg"; // Import your logo image from the assets folder

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 md:py-8"> {/* Increased padding for height */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left Section: Rights Reserved */}
        <div className="text-sm md:text-base text-center md:text-left">
          © All Rights Reserved 2023
        </div>

        {/* Center Section: Logo */}
        <div className="flex justify-center items-center">
          <img src={Logo} alt="Company Logo" className="h-10 md:h-12" /> {/* Adjusted height */}
        </div>

        {/* Right Section: Social Media Links */}
        <div className="flex justify-center md:justify-end space-x-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaTwitter size={24} /> {/* Increased icon size */}
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub size={24} /> {/* Increased icon size */}
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaFacebook size={24} /> {/* Increased icon size */}
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaLinkedin size={24} /> {/* Increased icon size */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
