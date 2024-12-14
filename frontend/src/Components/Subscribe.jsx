import React, { useEffect, useState } from 'react'; 
import axios from 'axios';

const Subscribe = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/subscribers/getSubscriber`); 
        setSubscribers(response.data.subs);
      } catch (err) {
        setError(err.response?.data?.message || 'Error fetching subscribers');
      } finally {
        setLoading(false);
      }
    };

    fetchSubscribers();
  }, []);

  if (loading) return <div className="text-center text-lg font-semibold">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Subscribers List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border">Email</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((subscriber, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-2 border">{subscriber.subscriber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Subscribe;
