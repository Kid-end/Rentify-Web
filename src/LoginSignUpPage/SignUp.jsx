import React, { useState } from 'react';

export default function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'tenant',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); 
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm your password';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.userType) {
      newErrors.userType = 'Please select user type';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {

      alert("Account created successfully!");
      console.log('Submitted:', formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 space-y-6">
    
        <div className="flex justify-center">
          <img src="/title-logo.png" alt="Rentify Logo" className="h-16" />
        </div>

        <h1 className="text-2xl font-bold text-violet-600 text-center mb-8">Create an Account
        </h1>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 outline-none"
          />
          {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
        </div>


        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 outline-none"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>


        <div>
          <label className="block text-gray-700 font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 outline-none"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

     
        <div>
          <label className="block text-gray-700 font-medium mb-1">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Re-enter your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 outline-none"
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
        </div>

    
        <div>
          <label className="block text-gray-700 font-medium mb-1">I am a:</label>
          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 outline-none"
          >
            <option value="tenant">Tenant</option>
            <option value="landlord">Landlord</option>
          </select>
          {errors.userType && <p className="text-red-500 text-sm mt-1">{errors.userType}</p>}
        </div>


        <button
          onClick={handleSubmit}
          className="w-full bg-violet-600 text-white py-2 rounded-md hover:bg-violet-700 transition">Sign Up
        </button>


        <div className="text-center text-sm text-gray-600">Already have an account?{' '}
        <span className="text-blue-600 cursor-pointer hover:underline">Login</span>
        </div>
      </div>
    </div>
  );
}
