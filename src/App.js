import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './LoginSignUpPage/Login';
import SignUp from './LoginSignUpPage/SignUp';
import Dashboard from './Pages/Dashboard';
import AddListing from './Pages/AddListing';



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/addlisting" element={<AddListing />} />
      </Routes>
    </Router>
  );
}