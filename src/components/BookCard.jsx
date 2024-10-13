// src/components/BookCard.jsx
import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img src={book.image} alt={book.title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-bold">{book.title}</h3>
      <p className="text-sm">Author: {book.author}</p>
      <p className="text-sm">ISBN: {book.isbn}</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
        Request Book
      </button>
    </div>
  );
};

export default BookCard;
