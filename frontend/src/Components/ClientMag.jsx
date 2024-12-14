import React, { useState } from "react";
import axios from "axios";

const ClientMag = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [destination, setDestination] = useState("");
  const [photo, setPhoto] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 5000000) {
      setPhoto(file);
    } else {
      setErrorMessage("Image should be less than 5MB");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    setErrorMessage("");
    setSuccessMessage("");

    if (!name || !description || !destination) {
      setErrorMessage("All fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("destination", destination);
    if (photo) {
      formData.append("photo", photo);
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/review/create-review`, 
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
         
          },
        }
      );

      if (response.data.success) {
        setSuccessMessage("Review created successfully.");
      }
    } catch (error) {
      setErrorMessage("Error creating review: " + error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white border rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Client Management</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Client Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Client's Name"
            className="w-full p-3 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="w-full p-3 border rounded"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Destination</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Destination"
            className="w-full p-3 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Client Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-3 border rounded"
          />
          {photo && (
            <img
              src={URL.createObjectURL(photo)}
              alt="Preview"
              className="mt-4 h-32 w-32 object-cover border rounded"
            />
          )}
        </div>

        {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
        {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}

        <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded">
          Save Review
        </button>
      </form>
    </div>
  );
};

export default ClientMag;
