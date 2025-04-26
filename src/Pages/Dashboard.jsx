import React, { useState } from 'react';
import { FiMessageSquare, FiUser } from 'react-icons/fi';

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [selectedRental, setSelectedRental] = useState(null);

  const rentals = [
    {
      id: 1,
      title: 'Sample Info 1',
      address: 'Sample Address 1',
      price: '$$$$',
      img: '/placeholder.jpg',
    },
    {
      id: 2,
      title: 'Sample Info 2',
      address: 'Sample Address 2',
      price: '$$$$$',
      img: '/placeholder.jpg',
    },
  ];

  const openModal = (rental) => {
    setSelectedRental(rental);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedRental(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 px-4 md:px-16 py-6">
      {/* Header */}
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

      {/* Nearby Listings */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-lg font-semibold text-gray-700">Near your location</h4>
          <span className="text-sm text-violet-600 hover:underline cursor-pointer">See all</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rentals.map((rental) => (
            <div
              key={rental.id}
              className="bg-white p-4 rounded-xl shadow-md cursor-pointer hover:shadow-lg transition"
              onClick={() => openModal(rental)}
            >
              <img
                src={rental.img}
                alt={rental.title}
                className="rounded-lg mb-3 h-40 w-full object-cover"
              />
              <h5 className="font-semibold text-gray-800">{rental.title}</h5>
              <p className="text-sm text-gray-500 mb-2">{rental.address}</p>
              <p className="font-bold text-violet-600">{rental.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedRental && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              ✖
            </button>
            <img
              src={selectedRental.img}
              alt={selectedRental.title}
              className="rounded-lg mb-4 h-48 w-full object-cover"
            />
            <h3 className="text-lg font-bold mb-2">{selectedRental.title}</h3>
            <p className="text-sm text-gray-600 mb-1">{selectedRental.address}</p>
            <p className="text-lg font-semibold text-violet-600">{selectedRental.price}</p>
            <div className="mt-4 flex justify-end">
              <button
                className="px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
