



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
