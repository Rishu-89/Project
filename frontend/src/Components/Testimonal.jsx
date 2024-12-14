

import React, { useEffect, useState } from "react";
import axios from "axios";

const Testimonal = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchReviews = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/review/get-review`);
      setReviews(data.reviews); // Assuming `reviews` is an array in the API response
      setLoading(false);
    } catch (err) {
      setError("Error fetching reviews");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="bg-gray-50 py-16 px-6">
      <h2 className="text-4xl font-bold text-blue-600 text-center mb-8">
        Happy Clients 
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading ? (
          <p className="text-center text-blue-600">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              {/* Reviewer Photo */}
              <div className="flex justify-center mb-4">
                {review.photo ? (
                  <img
                    src={review.photo}
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
              </div>

              {/* Review Details */}
              <p className="text-gray-500 text-sm mb-4">{review.description}</p>
              <h3 className="text-blue-600 font-semibold text-lg">{review.name}</h3>
              <p className="text-gray-400 text-sm">{review.destination}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Testimonal;
