// import React from "react";
// import TestOne from "../assests/Test.svg";

// const Testimonal = () => {
//   const testimonials = [
//     {
//       name: "Rowhan Smith",
//       position: "CEO, Foreclosure",
//       image: TestOne,
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
//     },
//     {
//       name: "Shipra Kayak",
//       position: "Brand Designer",
//       image: "./assets/user2.jpg",
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
//     },
//     {
//       name: "John Lepore",
//       position: "CEO, Foreclosure",
//       image: "./assets/user3.jpg",
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
//     },
//     {
//       name: "Marry Freeman",
//       position: "Marketing Manager at Mixit",
//       image: "./assets/user4.jpg",
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
//     },
//     {
//       name: "Lucy",
//       position: "Sales Rep at Alibaba",
//       image: "./assets/user5.jpg",
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
//     },
//   ];

//   return (
//     <div className="bg-gray-50 py-16 px-6">
//       <h2 className="text-4xl font-bold text-blue-600 text-center mb-8">
//         Happy Clients
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//         {testimonials.map((testimonial, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-md rounded-lg p-6 text-center"
//           >
//             <div className="flex justify-center mb-4">
//               <img
//                 src={testimonial.image}
//                 alt={testimonial.name}
//                 className="w-16 h-16 rounded-full object-cover"
//               />
//             </div>
//             <p className="text-gray-500 text-sm mb-4">{testimonial.text}</p>
//             <h3 className="text-blue-600 font-semibold text-lg">{testimonial.name}</h3>
//             <p className="text-gray-400 text-sm">{testimonial.position}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Testimonal;







import React, { useEffect, useState } from "react";
import axios from "axios";

const Testimonal = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchReviews = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/v1/review/get-review");
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
