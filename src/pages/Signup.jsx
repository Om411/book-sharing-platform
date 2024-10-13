// src/pages/Signup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ email, password, requests: [] }); // Store requests per user
    localStorage.setItem('users', JSON.stringify(users));
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSignup} className="w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg"
          required
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
