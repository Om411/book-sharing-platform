// src/pages/RequestedBooks.jsx
import React, { useState, useEffect } from 'react';

const RequestedBooks = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    const allRequests = JSON.parse(localStorage.getItem('requests')) || [];
    const userRequests = allRequests.filter((req) => req.owner === currentUser.email);
    setRequests(userRequests);
  }, []);

  const handleLendBook = (requestId) => {
    alert(`You have lent the book for request ID: ${requestId}`);
    // Logic for lending the book can be added here
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Requested Books</h2>
      {requests.map((req) => (
        <div key={req.id} className="border p-4 rounded-lg shadow-md mb-4">
          <h3 className="text-lg font-bold">{req.bookTitle}</h3>
          <p className="text-sm">Requested by: {req.requester}</p>
          <button
            onClick={() => handleLendBook(req.id)}
            className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Lend Book
          </button>
        </div>
      ))}
    </div>
  );
};

export default RequestedBooks;
