

import React from "react";
import FooterImage from "../assests/Rectangle.svg"; // Import the image from the assets folder

const HeaderSection = () => {
  return (
    <div
      className="relative h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${FooterImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for transparency */}
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Adjust opacity here */}
      
      <div className="relative z-10 bg-black bg-opacity-50 p-6 rounded-lg">
        <h1 className="text-2xl md:text-4xl font-semibold mb-4">
          Learn more about our listing process, as well as our additional staging and design work.
        </h1>
        <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-blue-600">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HeaderSection;
