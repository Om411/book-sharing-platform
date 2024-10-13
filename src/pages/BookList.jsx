// src/pages/BookList.jsx
import React from 'react';
import BookCard from '../components/BookCard';

const sampleBooks = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', owner: 'user1@example.com', image: 'https://via.placeholder.com/150' },
  { id: 2, title: '1984', author: 'George Orwell', owner: 'user2@example.com', image: 'https://via.placeholder.com/150' },
];

const BookList = () => {
  const handleRequestBook = (book) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
      alert('Please login to request books.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const owner = users.find((user) => user.email === book.owner);

    if (owner) {
      owner.requests.push({ book, requester: currentUser.email });
      localStorage.setItem('users', JSON.stringify(users));
      alert('Request sent to the owner!');
    }
  };

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sampleBooks.map((book) => (
          <BookCard key={book.id} book={book} onRequest={handleRequestBook} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
