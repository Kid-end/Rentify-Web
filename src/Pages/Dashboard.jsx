import React from 'react';
import { FiMessageSquare, FiUser } from 'react-icons/fi';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 px-4 md:px-16 py-6">
      {/* Header with message and profile buttons */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-sm text-gray-500">Current location</p>
          <h2 className="text-xl font-bold text-violet-600">Sample Location</h2>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-violet-100 transition">
            <FiMessageSquare className="text-violet-600 text-xl" />
          </button>
          <button className="p-2 rounded-full hover:bg-violet-100 transition">
            <FiUser className="text-violet-600 text-xl" />
          </button>
        </div>
      </div>

  
      {/* Welcome box */}
      <div className="bg-white p-4 rounded-xl shadow-md mb-6 flex flex-col md:flex-row justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-700 mb-2 md:mb-0">
          Welcome to Rentify
        </h3>
            {/* Search bar */}
      <input
        type="text"
        placeholder="Search rentals, city, location..."
        className="w-full md:w-96 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-violet-400 ml-auto mr-6"
      />
      
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700">
            Book Now
          </button>
          <button className="px-4 py-2 border border-violet-600 text-violet-600 rounded-md hover:bg-violet-50">
            Add a Listing
          </button>
        </div>
      </div>

      {/* Sample Nearby Listings */}  
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-lg font-semibold text-gray-700">Near your location</h4>
          <span className="text-sm text-violet-600 hover:underline cursor-pointer">See all</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
          <div className="bg-white p-4 rounded-xl shadow-md">
            <img src="/placeholder.jpg" alt="Sample Rental Img" className="rounded-lg mb-3 h-40 w-full object-cover" />
            <h5 className="font-semibold text-gray-800">Sample Info</h5>
            <p className="text-sm text-gray-500 mb-2">Sample Address</p>
            <p className="font-bold text-violet-600">$$$$$</p>
          </div>

       
          <div className="bg-white p-4 rounded-xl shadow-md">
            <img src="/placeholder.jpg" alt="Sample Rental Img" className="rounded-lg mb-3 h-40 w-full object-cover" />
            <h5 className="font-semibold text-gray-800">Sample Info</h5>
            <p className="text-sm text-gray-500 mb-2">Sample Address</p>
            <p className="font-bold text-violet-600">$$$$$</p>
          </div>
        </div>
      </div>

      {/* Trends */}
      <div className="mb-10">
        <h4 className="text-lg font-semibold text-gray-700 mb-3">Trending Searches</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    
          <div className="bg-white p-2 rounded-xl shadow-md">
            <img src="/placeholder.jpg" alt="Sample Trending Img" className="rounded-lg h-28 w-full object-cover" />
            <p className="text-sm text-center mt-1">Ateneo Boarding</p>
          </div>
          <div className="bg-white p-2 rounded-xl shadow-md">
            <img src="/placeholder.jpg" alt="Sample Trending Img" className="rounded-lg h-28 w-full object-cover" />
            <p className="text-sm text-center mt-1">Balatas Rentals</p>
          </div>
          <div className="bg-white p-2 rounded-xl shadow-md">
            <img src="/placeholder.jpg" alt="Sample Trending Img" className="rounded-lg h-28 w-full object-cover" />
            <p className="text-sm text-center mt-1">Bedspaces Naga</p>
          </div>
          <div className="bg-white p-2 rounded-xl shadow-md">
            <img src="/placeholder.jpg" alt="Sample Trending Img" className="rounded-lg h-28 w-full object-cover" />
            <p className="text-sm text-center mt-1">Cheap Studios</p>
          </div>
        </div>
      </div>


      <div className="bg-gradient-to-r from-violet-500 to-purple-400 text-white p-6 rounded-xl shadow-md text-center">
        <h4 className="text-lg font-bold mb-2">Want to host your place?</h4>
        <p className="text-sm mb-4">Join Rentify and list your property in a few clicks.</p>
        <button className="bg-white text-violet-600 font-medium px-4 py-2 rounded-md hover:bg-gray-100">List a Room
        </button>
      </div>
    </div>
  );
}
