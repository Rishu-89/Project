
import React, { useEffect, useState } from "react";
import axios from "axios";

const OurProject = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getAllProjects = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/project/getProjects`);
      setProjects(data.projects); 
      setLoading(false);
    } catch (err) {
      setError("Error fetching projects");
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div className="bg-blue-50 py-12 px-6">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-600">Our Projects</h2>
        <p className="mt-2 text-gray-500 max-w-md mx-auto text-sm">
          We know what buyers are looking for and suggest projects that will bring
          clients top dollar for the sale of their homes.
        </p>
      </div>

      {/* Projects Section */}
      {loading ? (
        <p className="text-center text-blue-600">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-white shadow-md rounded-lg p-3 flex flex-col justify-between transition-transform duration-300 hover:scale-105"
            >
              {/* Project Image */}
              {project.photo ? (
                <img
                  src={project.photo}
                  alt={project.name}
                  className="rounded-lg w-full h-28 object-cover mb-2"
                />
              ) : (
                <div className="bg-gray-200 rounded-lg w-full h-28 flex items-center justify-center text-gray-500 text-xs">
                  No Image
                </div>
              )}

              {/* Project Details */}
              <div className="text-center">
                <h3 className="text-sm font-semibold text-blue-600">{project.name}</h3>
                <p className="text-gray-500 text-xs mt-1">
                  {project.projectName} · {project.location}
                </p>
              </div>

              {/* Read More Button */}
              <button className="mt-3 px-3 py-1 bg-orange-500 text-white text-xs rounded-md hover:bg-orange-600">
                READ MORE
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OurProject;
