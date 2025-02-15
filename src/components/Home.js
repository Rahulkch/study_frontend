import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
const Home = () => {
    
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center p-4">
    {/* Heading */}
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 animate-bounce">
      Welcome to My App
    </h1>

    {/* Choices Container */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
      {/* Study Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Study</h2>
        <p className="text-gray-700">
          Explore resources and tools to enhance your learning.
        </p>
        <Link to="/dis" state={{ temp: 'study' }}>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
          Study
        </button>
      </Link>
      </div>

      {/* Not Study Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Not Study</h2>
        <p className="text-gray-700">
          Take a break and relax with fun activities.
        </p>
              {/* Not Study Button */}
      <Link to="/dis" state={{ temp: 'not study' }}>
        <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-300">
          Not Study
        </button>
      </Link>

      </div>

      {/* Post Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-bold text-purple-600 mb-4">Post</h2>
        <p className="text-gray-700">
          Share your thoughts and ideas with the community.
        </p>
        <Link to="/inp">
        <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300">
          Create Post
        </button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Home
