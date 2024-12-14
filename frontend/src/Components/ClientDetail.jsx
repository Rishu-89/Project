import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClientDetail = () => {
  const [clients, setClients] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);     

  // Fetch data when component mounts
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/auth/getUsers`);  // API endpoint to get all users
        if (response.data.success) {
          setClients(response.data.users); 
        } else {
          setError("Error fetching clients.");
        }
      } catch (err) {
        console.error("Error fetching clients:", err);
        setError("Error fetching clients.");
      } finally {
        setLoading(false);  
      }
    };

    fetchClients();
  }, []);

  if (loading) {
    return <div>Loading...</div>;  
  }

  if (error) {
    return <div>{error}</div>;  
  }

  return (
    <div className="client-detail">
      <h1 className="text-2xl font-bold mb-4">Client Details</h1>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Phone</th>
            <th className="border px-4 py-2">City</th>
          </tr>
        </thead>
        <tbody>
          {clients.length > 0 ? (
            clients.map((client, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{client.name}</td>
                <td className="border px-4 py-2">{client.email}</td>
                <td className="border px-4 py-2">{client.phone}</td>
                <td className="border px-4 py-2">{client.city}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="border px-4 py-2 text-center">No clients found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ClientDetail;
