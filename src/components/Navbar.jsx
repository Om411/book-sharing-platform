// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    setIsAuthenticated(!!currentUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setIsAuthenticated(false);
    setIsDropdownOpen(false); // Close the dropdown on logout
    navigate('/login');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Home Link */}
        <Link to="/" className="text-white font-bold text-xl">Book Sharing</Link>

        {/* Navbar Links */}
        <div className="flex space-x-6 items-center">
          {!isAuthenticated ? (
            <>
              <Link to="/login" className="text-white hover:underline">Login</Link>
              <Link to="/signup" className="text-white hover:underline">Sign Up</Link>
            </>
          ) : (
            <div className="relative">
              {/* Profile Button */}
              <button
                className="text-white hover:underline"
                onClick={toggleDropdown}
              >
                Profile
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div
                  className="absolute bg-white text-black rounded shadow-lg mt-2 w-48"
                  onMouseLeave={closeDropdown}
                >
                  <Link
                    to="/upload-book"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={closeDropdown}
                  >
                    Upload Book
                  </Link>
                  <Link
                    to="/requested-books"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={closeDropdown}
                  >
                    Requested Books
                  </Link>
                  <Link
                    to="/history"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={closeDropdown}
                  >
                    History
                  </Link>
                  <Link
                    to="/notifications"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={closeDropdown}
                  >
                    Notifications
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-red-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
