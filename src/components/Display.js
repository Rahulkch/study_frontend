import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom'; // Import Link
import { FaHome } from 'react-icons/fa'; // Import the home icon

const Display = () => {
  // State to store the list of items
  const [items, setItems] = useState([]);
  const location = useLocation();
  const { temp } = location.state || { temp: 'study' };

  // Fetch data from the backend (or use mock data)
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the backend API
        const response = await fetch('http://localhost:7000/route/get');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        // Parse the JSON response
        const data = await response.json();
        console.log('data is ', data.data);

        // Set the fetched data to the items state
        setItems(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to fetch data. Please try again later.');
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      // Send a delete request to the backend
      const deleteResponse = await fetch(`http://localhost:7000/route/del/${id}`, {
        method: 'DELETE',
      });

      if (!deleteResponse.ok) {
        throw new Error('Failed to delete item');
      }

      const deleteData = await deleteResponse.json();
      console.log('Delete Response:', deleteData);
      alert(deleteData.message);

      // Re-fetch the updated list of items
      const fetchResponse = await fetch('http://localhost:7000/route/get');
      if (!fetchResponse.ok) {
        throw new Error('Failed to fetch updated data');
      }

      const updatedData = await fetchResponse.json();
      console.log('Updated Data:', updatedData.data);

      // Update the items state with the new data
      setItems(updatedData.data);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to delete item or fetch updated data.');
    }
  };

  const filter = items.filter((item) => item.contentType === temp);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center p-4">
      {/* Home Icon */}
      <Link to="/" className="self-start mb-4 text-white hover:text-gray-200">
        <FaHome className="text-3xl" /> {/* Home icon */}
      </Link>

      {/* List Container */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-blue-600 mb-6">Content List</h1>

        {/* List of Items */}
        {Array.isArray(items) && items.length > 0 ? (
          filter.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center border-b border-gray-200 py-4"
            >
              {/* Link and Heading */}
              <div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {item.link.slice(0, 20)}...
                </a>
                <p className="text-gray-700">{item.heading}</p>
              </div>

              {/* Delete Icon */}
              <button
                onClick={() => handleDelete(item._id)}
                className="text-red-600 hover:text-red-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-700">No items found.</p>
        )}
      </div>
    </div>
  );
};

export default Display;