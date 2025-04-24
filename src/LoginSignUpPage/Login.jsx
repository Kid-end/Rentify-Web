import React from 'react';

export default function Login() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-4"
      style={{ backgroundImage: "url('/your-background-image.jpg')" }} // change this later
    >
      <div className="w-full max-w-lg bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-2xl p-10 space-y-8">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <img src="/title-logo.png" alt="Rentify Logo" className="h-20 mb-2" />
          <h1 className="text-3xl font-bold text-violet-600">Rentify</h1>
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <div className="flex items-center border rounded-lg px-4 py-3 bg-white">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Password</label>
          <div className="flex items-center border rounded-lg px-4 py-3 bg-white">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Login Button */}
        <button className="w-full bg-violet-600 text-white py-3 rounded-lg font-semibold hover:bg-violet-700 transition">Login
        </button>

        {/* Footer */}
        <div className="text-center text-sm text-gray-600">Don’t have an account?{' '}
          <span className="text-blue-600 cursor-pointer hover:underline">Sign up</span>
        </div>
      </div>
    </div>
  );
}
