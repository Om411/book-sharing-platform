// src/pages/BookDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = ({ books }) => {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return <p>Book not found!</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
      <img 
        src={book.image} 
        alt={book.title} 
        className="w-48 h-72 object-cover mb-6" 
      />
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>ISBN:</strong> {book.isbn}</p>
      <p className="mt-4">{book.description}</p>
      <button 
        className="mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Request Book
      </button>
    </div>
  );
};

export default BookDetail;
