







// import React, { useState } from "react";
// import axios from "axios";

// const ConsultationForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     mobile: "",
//     areaCity: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Submitting form with data:", formData);
  
//     try {
//       const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/auth/register`, formData);
//       alert("Form submitted successfully!");
//       console.log("Response:", response.data);
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert(error.response?.data?.message || "An error occurred while submitting the form.");
//     }
//   };
  
//   return (
//     <div className="bg-blue-900 bg-opacity-80 p-5 rounded-lg w-full sm:w-96 md:w-1/2 lg:w-1/3 text-white shadow-lg">
//       <h3 className="text-2xl font-semibold mb-4 text-center">Get a Free Consultation</h3>
//       <form className="space-y-4" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="fullName"
//           value={formData.fullName}
//           onChange={handleChange}
//           placeholder="Full Name"
//           className="w-full px-4 py-2 rounded bg-white text-gray-800 focus:outline-none"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Enter Email Address"
//           className="w-full px-4 py-2 rounded bg-white text-gray-800 focus:outline-none"
//           required
//         />
//         <input
//           type="text"
//           name="mobile"
//           value={formData.mobile}
//           onChange={handleChange}
//           placeholder="Mobile Number"
//           className="w-full px-4 py-2 rounded bg-white text-gray-800 focus:outline-none"
//           required
//         />
//         <input
//           type="text"
//           name="areaCity"
//           value={formData.areaCity}
//           onChange={handleChange}
//           placeholder="Area, City"
//           className="w-full px-4 py-2 rounded bg-white text-gray-800 focus:outline-none"
//           required
//         />
//         <button
//           type="submit"
//           className="w-full px-4 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600"
//         >
//           Get Quick Quote
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ConsultationForm;













import React, { useState } from 'react'

import axios from 'axios'



const ConsultationForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
 
  const [phone, setPhone] = useState("");
  
  const [city, setCity] = useState("");


  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/auth/register`,{
        name,
        email,
        
        phone,
        
        city
      });
      if (res && res.data.sucess) {
        
        console.log('suil ')
        
        
       
      } else {
        
       console.log("sunil l")
      }
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <Layout title="Register - Ecommer App">
    <div className="form-container" style={{ minHeight: "90vh" }}>
      <form onSubmit={handleSubmit}>
        <h4 className="title">REGISTER FORM</h4>
        <div className="mb-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Name"
            required
            autoFocus
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail2"
            placeholder="Enter Your Email "
            required
          />
        </div>
        
        <div className="mb-3">
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control"
            id="exampleInputEmail3"
            placeholder="Enter Your Phone"
            required
          />
        </div>
       
        <div className="mb-3">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="form-control"
            id="exampleInputEmail5"
            placeholder="What is Your Favorite sports"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          REGISTER
        </button>
      </form>
    </div>
  </Layout>
);
};

export default ConsultationForm;
