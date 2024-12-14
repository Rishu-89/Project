


import React from "react";
import CardOne from "../assests/Card2.svg"; 
import CardOne2 from "../assests/card-2.svg"; 
import CardOne3 from "../assests/card-3.svg"; 


const Header = () => {
  return (
    <div className="bg-white flex flex-wrap justify-center items-center gap-6 p-6">
      {/* First Card */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <img
          src={CardOne}
          alt="Image 1"
          className="rounded-lg shadow-lg object-cover w-full h-60 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2"
        />
      </div>
      {/* Second Card */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <img
          src={CardOne2}
          alt="Image 2"
          className="rounded-lg shadow-lg object-cover w-full h-60 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2"
        />
      </div>
      {/* Third Card */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <img
          src={CardOne3}
          alt="Image 3"
          className="rounded-lg shadow-lg object-cover w-full h-60 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2"
        />
      </div>
    </div>
  );
};

export default Header;
