import React, { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';

function Input() {
  // State to manage form inputs
  const [link, setLink] = useState('');
  const [heading, setHeading] = useState('');
  const [contentType, setContentType] = useState('study');
  const navigate=useNavigate();
 // Validation function
 const validate = (data) => {
    const { link, heading, contentType } = data;
    if (!link || !heading || !contentType) {
      alert('Please fill all the fields');
      return false;
    }
    return true;
  };

  // Submit function
  const submitData = async (e) => {
    e.preventDefault(); // Prevent page refresh

    const data = {
      link,
      heading,
      contentType,
    };

    if (validate(data)) {
      console.log(data); // Log the data for debugging

      // Send data to the backend
      fetch('http://localhost:7000/route/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((response) => {
          console.log('Response:', response);
          alert(response.message); // Show success or error message

          if (response.success) {
            // Clear the form fields
            setLink('');
            setHeading('');
            setContentType('study');

            // Navigate to another page (optional)
            navigate('/'); // Redirect to the home page
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('An error occurred while submitting the data.');
        });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center p-4">
      {/* Form Container */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-600 mb-6">Add New Content</h1>

        {/* Form */}
        <form onSubmit={submitData}>
          {/* Link Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="link">
              Link
            </label>
            <input
              type="url"
              id="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter link"
              required
            />
          </div>

          {/* Heading Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="heading">
              Heading
            </label>
            <input
              type="text"
              id="heading"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter heading"
              required
            />
          </div>

          {/* Content Type Dropdown */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contentType">
              Content Type
            </label>
            <select
              id="contentType"
              value={contentType}
              onChange={(e) => setContentType(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="study">Study</option>
              <option value="not study">Not Study</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Input;