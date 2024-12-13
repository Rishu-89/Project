



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Navbar from "./Navbar";

// const AdminLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Send POST request to the backend
//       const response = await axios.post(
//         "http://localhost:8080/api/v1/auth/adminRoutes",
//         { email, password },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const { success, token } = response.data;

//       if (success) {
//         // Save the token in localStorage or context (if needed)
//         localStorage.setItem("token", token);
//         axios.defaults.headers.common["Authorization"]=token;

//         alert("Login Successful!");
//         navigate("/dashboard"); // Redirect to the Admin Dashboard
//       } else {
//         setErrorMessage("Invalid Credentials!");
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//       setErrorMessage(
//         error.response?.data?.message || "Something went wrong. Please try again."
//       );
//     }
//   };

//   return (
//     <>
//     <Navbar />
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full sm:w-96 md:w-1/3 lg:w-1/4 bg-white rounded-lg shadow-lg p-8">
//         <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
//           Admin Login
//         </h2>
//         <form onSubmit={handleSubmit}>
//           {errorMessage && (
//             <p className="text-red-500 text-center mb-4">{errorMessage}</p>
//           )}
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Email Address</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-3 border rounded"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-3 border rounded"
//               required
//             />
//           </div>
//           <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//     </>
//   );
// };

// export default AdminLogin;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/adminRoutes",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { success, token } = response.data;

      if (success) {
        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = token;

        alert("Login Successful!");
        navigate("/dashboard");
      } else {
        setErrorMessage("Invalid Credentials!");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage(
        error.response?.data?.message || "Something went wrong. Please try again."
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 min-h-screen flex items-center justify-center">
        <div className="w-full sm:w-96 md:w-1/3 lg:w-1/4 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
            Admin Login
          </h2>

          {/* Admin Note */}
          <p className="text-sm text-gray-500 text-center mb-4">
            <strong>Admin credentials:</strong>
            <br />
            Email: <strong>admin@gmail.com</strong>
            <br />
            Password: <strong>54321</strong>
          </p>

          <form onSubmit={handleSubmit}>
            {errorMessage && (
              <p className="text-red-500 text-center mb-4">{errorMessage}</p>
            )}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
