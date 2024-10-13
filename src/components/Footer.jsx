// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <p>&copy; 2024 Book Sharing Platform. All rights reserved.</p>
      <p>
        <a href="/terms" className="text-blue-400 hover:underline">
          Terms & Conditions
        </a>
        {" | "}
        <a href="/privacy" className="text-blue-400 hover:underline">
          Privacy Policy
        </a>
      </p>
    </footer>
  );
};

export default Footer;
