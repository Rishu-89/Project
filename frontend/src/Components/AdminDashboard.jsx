// import React, { useState } from "react";

// const AdminDashboard = () => {
//   const [selectedTab, setSelectedTab] = useState("ProductManagement");
//   const [productImage, setProductImage] = useState(null); // State for product image
//   const [clientImage, setClientImage] = useState(null); // State for client image

//   const handleProductImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setProductImage(URL.createObjectURL(file)); // Preview the uploaded image
//     }
//   };

//   const handleClientImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setClientImage(URL.createObjectURL(file)); // Preview the uploaded image
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row h-screen">
//       {/* Sidebar */}
//       <div className="w-full md:w-64 bg-blue-900 text-white">
//         <h2 className="text-2xl font-bold text-center py-6">Admin Dashboard</h2>
//         <nav className="mt-6">
//           <ul>
//             <li
//               className={`px-6 py-3 hover:bg-blue-700 cursor-pointer ${selectedTab === "ProductManagement" ? "bg-blue-700" : ""}`}
//               onClick={() => setSelectedTab("ProductManagement")}
//             >
//               Product Management
//             </li>
//             <li
//               className={`px-6 py-3 hover:bg-blue-700 cursor-pointer ${selectedTab === "ClientManagement" ? "bg-blue-700" : ""}`}
//               onClick={() => setSelectedTab("ClientManagement")}
//             >
//               Client Management
//             </li>
//             <li
//               className={`px-6 py-3 hover:bg-blue-700 cursor-pointer ${selectedTab === "ContactDetail" ? "bg-blue-700" : ""}`}
//               onClick={() => setSelectedTab("ContactDetail")}
//             >
//               Contact Form Detail
//             </li>
//             <li
//               className={`px-6 py-3 hover:bg-blue-700 cursor-pointer ${selectedTab === "SubscribedEmails" ? "bg-blue-700" : ""}`}
//               onClick={() => setSelectedTab("SubscribedEmails")}
//             >
//               Subscribed Emails
//             </li>
//           </ul>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 bg-gray-100 p-8">
//         {selectedTab === "ProductManagement" && (
//           <div>
//             <h1 className="text-2xl font-bold mb-4">Product Management</h1>
//             <form className="mt-4">
//               <div className="mb-4">
//                 <label className="block text-gray-700 mb-2">Project's Image</label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleProductImageUpload}
//                   className="w-full p-3 border rounded"
//                 />
//                 {productImage && (
//                   <img
//                     src={productImage}
//                     alt="Preview"
//                     className="mt-4 h-32 w-32 object-cover border rounded"
//                   />
//                 )}
//               </div>
//               <input
//                 type="text"
//                 placeholder="Project's Name"
//                 className="w-full p-3 mb-4 border rounded"
//               />
//               <textarea
//                 placeholder="Project's Description"
//                 className="w-full p-3 mb-4 border rounded"
//               ></textarea>
//               <button className="w-full bg-orange-500 text-white py-3 rounded">Save</button>
//             </form>
//           </div>
//         )}
//         {selectedTab === "ClientManagement" && (
//           <div>
//             <h1 className="text-2xl font-bold mb-4">Client Management</h1>
//             <form className="mt-4">
//               <div className="mb-4">
//                 <label className="block text-gray-700 mb-2">Client's Image</label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleClientImageUpload}
//                   className="w-full p-3 border rounded"
//                 />
//                 {clientImage && (
//                   <img
//                     src={clientImage}
//                     alt="Preview"
//                     className="mt-4 h-32 w-32 object-cover border rounded"
//                   />
//                 )}
//               </div>
//               <input
//                 type="text"
//                 placeholder="Client's Name"
//                 className="w-full p-3 mb-4 border rounded"
//               />
//               <textarea
//                 placeholder="Client's Description"
//                 className="w-full p-3 mb-4 border rounded"
//               ></textarea>
//               <input
//                 type="text"
//                 placeholder="Client's Designation (e.g., CEO)"
//                 className="w-full p-3 mb-4 border rounded"
//               />
//               <button className="w-full bg-orange-500 text-white py-3 rounded">Save</button>
//             </form>
//           </div>
//         )}
//         {selectedTab === "ContactDetail" && (
//           <div>
//             <h1 className="text-2xl font-bold mb-4">Contact Form Details</h1>
//             <p>Contact form data will be displayed here.</p>
//           </div>
//         )}
//         {selectedTab === "SubscribedEmails" && (
//           <div>
//             <h1 className="text-2xl font-bold mb-4">Subscribed Email Addresses</h1>
//             <p>Subscribed emails will be displayed here.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;






import React, { useState } from "react";
import axios from "axios";
import ClientMag from "./ClientMag";
import ClientDetail from "./ClientDetail";
import Subscribe from "./Subscribe";

const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("ProductManagement");
  const [formData, setFormData] = useState({
    name: "",
    projectName: "",
    location: "",
    photo: null,
  });

  const [productImagePreview, setProductImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, photo: file });
    if (file) {
      setProductImagePreview(URL.createObjectURL(file));
    }
  };

  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem("token");
    // Redirect user to the login page
    window.location.href = "/login"; // Adjust the route to your login page
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post("http://localhost:8080/api/v1/project/create-project", form, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      alert(response.data.message);
      setFormData({ name: "", projectName: "", location: "", photo: null });
      setProductImagePreview(null);
    } catch (error) {
      console.error("Error submitting form:", error.response?.data?.error || error.message);
      alert(error.response?.data?.error || "An error occurred.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-blue-900 text-white">
        <h2 className="text-2xl font-bold text-center py-6">Admin Dashboard</h2>
        <nav className="mt-6">
          <ul>
            <li
              className={`px-6 py-3 hover:bg-blue-700 cursor-pointer ${
                selectedTab === "ProductManagement" ? "bg-blue-700" : ""
              }`}
              onClick={() => setSelectedTab("ProductManagement")}
            >
              Product Management
            </li>
            <li
              className={`px-6 py-3 hover:bg-blue-700 cursor-pointer ${
                selectedTab === "ClientManagement" ? "bg-blue-700" : ""
              }`}
              onClick={() => setSelectedTab("ClientManagement")}
            >
              Client Management
            </li>
            <li
              className={`px-6 py-3 hover:bg-blue-700 cursor-pointer ${
                selectedTab === "ContactDetail" ? "bg-blue-700" : ""
              }`}
              onClick={() => setSelectedTab("ContactDetail")}
            >
              Contact Form Detail
            </li>
            <li
              className={`px-6 py-3 hover:bg-blue-700 cursor-pointer ${
                selectedTab === "SubscribedEmails" ? "bg-blue-700" : ""
              }`}
              onClick={() => setSelectedTab("SubscribedEmails")}
            >
              Subscribed Emails
            </li>
            


           




          </ul>
        </nav>
        <div className="mt-6 px-6">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded"
          >
            Logout
          </button>
        </div>

      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-8">
        {selectedTab === "ProductManagement" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Product Management</h1>
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Project's Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full p-3 border rounded"
                />
                {productImagePreview && (
                  <img
                    src={productImagePreview}
                    alt="Preview"
                    className="mt-4 h-32 w-32 object-cover border rounded"
                  />
                )}
              </div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 mb-4 border rounded"
              />
              <input
                type="text"
                name="projectName"
                placeholder="Project Name"
                value={formData.projectName}
                onChange={handleInputChange}
                className="w-full p-3 mb-4 border rounded"
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full p-3 mb-4 border rounded"
              />
              <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded">
                Submit
              </button>
            </form>
          </div>
        )}
        {selectedTab === "ClientManagement" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Client Management</h1>
         <ClientMag/>
          </div>
        )}
        {selectedTab === "ContactDetail" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Contact Form Details</h1>
            <ClientDetail/>
          </div>
        )}
        {selectedTab === "SubscribedEmails" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Subscribed Email Addresses</h1>
            <Subscribe/>
          </div>
        )}



      </div>
    </div>
  );
};

export default AdminDashboard;