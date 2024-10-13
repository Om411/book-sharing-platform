// src/pages/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <Link 
        to="/books" 
        className="text-blue-500 hover:underline"
      >
        Explore Books
      </Link>
    </div>
  );
};

export default Dashboard;
