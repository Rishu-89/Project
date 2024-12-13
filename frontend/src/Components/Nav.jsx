// // import React, { useState } from "react";

// // const Nav = () => {
// //   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State to manage mobile menu toggle

// //   return (
// //     <nav className="bg-blue-600 text-white h-24 flex items-center">
// //       <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
// //         {/* Left Section: Navigation Links */}
// //         <div className="flex space-x-6 text-lg">
// //           <ul className="flex space-x-6">
// //             <li className="hover:underline cursor-pointer">Home</li>
// //             <li className="hover:underline cursor-pointer">Services</li>
// //             <li className="hover:underline cursor-pointer">Projects</li>
// //             <li className="hover:underline cursor-pointer">Testimonials</li>
// //             <li className="hover:underline cursor-pointer">Contact</li>
// //           </ul>
// //         </div>

// //         {/* Right Section: Subscribe */}
// //         <div className="hidden md:flex items-center space-x-4">
// //           <div className="flex items-center space-x-4 bg-white text-blue-600 px-6 py-3 rounded-md">
// //             <div className="text-sm font-semibold">Subscribed Us</div>
// //             <input
// //               type="email"
// //               placeholder="Enter Email Address"
// //               className="px-4 py-3 rounded-md text-black focus:outline-none"
// //             />
// //             <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600">
// //               Subscribe
// //             </button>
// //           </div>
// //         </div>

// //         {/* Mobile Menu Button */}
// //         <div className="md:hidden">
// //           <button
// //             className="text-white focus:outline-none"
// //             onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
// //           >
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               className="h-6 w-6"
// //               fill="none"
// //               stroke="currentColor"
// //               viewBox="0 0 24 24"
// //               strokeWidth="2"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 d="M4 6h16M4 12h16M4 18h16"
// //               />
// //             </svg>
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       {isMobileMenuOpen && (
// //         <div className="md:hidden bg-blue-700 p-4">
// //           <ul className="space-y-4 text-lg">
// //             <li className="hover:underline cursor-pointer">Home</li>
// //             <li className="hover:underline cursor-pointer">Services</li>
// //             <li className="hover:underline cursor-pointer">Projects</li>
// //             <li className="hover:underline cursor-pointer">Testimonials</li>
// //             <li className="hover:underline cursor-pointer">Contact</li>
// //           </ul>

// //           {/* Mobile Subscribe Section */}
// //           <div className="mt-6 flex flex-col items-center">
// //             <div className="text-sm font-semibold text-white mb-2">Subscribed Us</div>
// //             <div className="flex items-center w-full bg-white text-blue-600 px-6 py-3 rounded-md">
// //               <input
// //                 type="email"
// //                 placeholder="Enter Email Address"
// //                 className="px-4 py-3 rounded-md text-black w-full focus:outline-none"
// //               />
// //               <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 ml-2">
// //                 Subscribe
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // };

// // export default Nav;



// import React, { useState } from "react";
// import axios from "axios";

// const Nav = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State to manage mobile menu toggle
//   const [email, setEmail] = useState(""); // State to capture the subscriber email
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   // Function to handle form submission
//   const handleSubscribe = async (e) => {
//     e.preventDefault();
//     setSuccessMessage("");
//     setErrorMessage("");

//     try {
//       const response = await axios.post("http://localhost:8080/api/v1/subscribers/uplordSubscribe", { subscriber: email });
//       setSuccessMessage("Thank you for subscribing!");
//       setEmail(""); // Clear the email input
//     } catch (err) {
//       setErrorMessage(err.response?.data?.message || "Failed to subscribe. Please try again.");
//     }
//   };

//   return (
//     <nav className="bg-blue-600 text-white h-24 flex items-center">
//       <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
//         {/* Left Section: Navigation Links */}
//         <div className="flex space-x-6 text-lg">
//           <ul className="flex space-x-6">
//             <li className="hover:underline cursor-pointer">Home</li>
//             <li className="hover:underline cursor-pointer">Services</li>
//             <li className="hover:underline cursor-pointer">Projects</li>
//             <li className="hover:underline cursor-pointer">Testimonials</li>
//             <li className="hover:underline cursor-pointer">Contact</li>
//           </ul>
//         </div>

//         {/* Right Section: Subscribe */}
//         <div className="hidden md:flex items-center space-x-4">
//           <form
//             onSubmit={handleSubscribe}
//             className="flex items-center space-x-4 bg-white text-blue-600 px-6 py-3 rounded-md"
//           >
//             <div className="text-sm font-semibold">Subscribe to Us</div>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter Email Address"
//               className="px-4 py-3 rounded-md text-black focus:outline-none"
//               required
//             />
//             <button
//               type="submit"
//               className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             className="text-white focus:outline-none"
//             onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               strokeWidth="2"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-blue-700 p-4">
//           <ul className="space-y-4 text-lg">
//             <li className="hover:underline cursor-pointer">Home</li>
//             <li className="hover:underline cursor-pointer">Services</li>
//             <li className="hover:underline cursor-pointer">Projects</li>
//             <li className="hover:underline cursor-pointer">Testimonials</li>
//             <li className="hover:underline cursor-pointer">Contact</li>
//           </ul>
//           <form
//             onSubmit={handleSubscribe}
//             className="mt-6 flex flex-col items-center bg-white text-blue-600 px-6 py-3 rounded-md"
//           >
//             <div className="text-sm font-semibold text-white mb-2">Subscribe to Us</div>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter Email Address"
//               className="px-4 py-3 rounded-md text-black w-full focus:outline-none"
//               required
//             />
//             <button
//               type="submit"
//               className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 mt-2"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>
//       )}

//       {/* Success/Error Messages */}
//       <div className="absolute top-28 w-full text-center">
//         {successMessage && <p className="text-green-400">{successMessage}</p>}
//         {errorMessage && <p className="text-red-400">{errorMessage}</p>}
//       </div>
//     </nav>
//   );
// };

// export default Nav;







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
        "http://localhost:8080/api/v1/subscribers/uplordSubscribe",
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

