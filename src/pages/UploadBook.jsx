// src/pages/UploadBook.jsx
import React, { useState } from 'react';

const UploadBook = () => {
  const [title, setTitle] = useState('');
  const [isbn, setIsbn] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  
  const handleUpload = (e) => {
    e.preventDefault();
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};

    // Fetch existing books or initialize an empty array
    const allBooks = JSON.parse(localStorage.getItem('books')) || [];

    const newBook = {
      id: allBooks.length + 1, // Generate a unique ID
      title,
      isbn,
      author,
      description,
      owner: currentUser.email, // Store the current user as owner
      image: imageUrl || 'https://via.placeholder.com/150', // Placeholder if no image provided
    };

    // Add the new book to the list and update local storage
    allBooks.push(newBook);
    localStorage.setItem('books', JSON.stringify(allBooks));

    alert('Book uploaded successfully!');
    // Reset the form after submission
    setTitle('');
    setIsbn('');
    setAuthor('');
    setDescription('');
    setImageUrl('');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleUpload} className="w-full max-w-md p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Upload Book</h2>

        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg"
          required
        />

        <input
          type="text"
          placeholder="ISBN Number"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg"
          required
        />

        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg"
          required
        />

        <textarea
          placeholder="Book Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg resize-none"
          rows={4}
        />

        <input
          type="text"
          placeholder="Image URL (optional)"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg"
        />

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg">
          Upload Book
        </button>
      </form>
    </div>
  );
};

export default UploadBook;
