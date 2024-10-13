// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    setBooks(storedBooks);
    setFilteredBooks(storedBooks);
  }, []);

  const handleSearch = (query) => {
    const filtered = books.filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <div className="p-8">
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
