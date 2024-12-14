
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";

// Import components
import Navbar from "./Components/Navbar.jsx";
import Herosection from "./Components/Herosection";
import NotYourAverageRealtor from "./Components/NotYourAverageRealtor.jsx";
import WhyChooseUs from "./Components/WhyChooseUs.jsx";
import OurProject from "./Components/OurProject.jsx";
import Testimonal from "./Components/Testimonal.jsx";
import Header from "./Components/Header.jsx";
import AboutUs from "./Components/AboutUs.jsx";
import HeaderSection from "./Components/HeaderSection.jsx";
import Nav from "./Components/Nav.jsx";
import Footer from "./Components/Footer.jsx";
import AdminLogin from "./Components/AdminLogin.jsx";
import AdminDashboard from "./Components/AdminDashboard.jsx";

// ProtectedRoute Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); 
  if (!token) {
    return <Navigate to="/admin-login" />; 
  }
  return children;
};

const App = () => {
  const location = useLocation(); 

  const isAdminPage = location.pathname === "/admin-login" || location.pathname === "/dashboard";

  return (
    <>
     
    

      <Routes>
       
        <Route path="/admin-login" element={<AdminLogin />} />
    
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        
       
       
      </Routes>

      {!isAdminPage && (
        <>
        <Navbar/>
        <Herosection/>
          <NotYourAverageRealtor />
          <WhyChooseUs />
          <Header />
          <AboutUs />
          <OurProject />
          <Testimonal />
          <HeaderSection />
          <Nav />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;