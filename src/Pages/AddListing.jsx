import React from 'react';

export default function AddListing() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg space-y-6">
        <h1 className="text-4xl font-bold text-violet-600 mb-2 text-center">List New Property</h1>
        <p className="text-m text-gray-500 text-center mb-6">List it in the market where renters are waiting!</p>

 
        <input
          type="text"
          placeholder="Property Title"
          className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400"
        />

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Type"
            className="flex-1 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
          <input
            type="text"
            placeholder="Price"
            className="flex-1 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
        </div>


        <input
          type="text"
          placeholder="Address and Location"
          className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400"
        />

   
        <textarea
          placeholder="Description"
          rows="4"
          className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none"
        ></textarea>

        <div className="border-dashed border-2 border-gray-300 rounded-md p-4 text-center text-gray-500 cursor-pointer hover:border-violet-400 hover:text-violet-600 transition">
          Upload Property Pictures
        </div>

        <button className="w-full bg-violet-600 text-white py-3 rounded-md hover:bg-violet-700 transition">
          SUBMIT
        </button>
      </div>
    </div>
  );
}
