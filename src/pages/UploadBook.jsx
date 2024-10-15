// src/pages/UploadBook.jsx
import React, { useState } from 'react';

const UploadBook = () => {
  const [title, setTitle] = useState('');
  const [isbn, setIsbn] = useState('');
  const [author, setAuthor] = useState('');
  const [publisher, setPublisher] = useState('');
  const [description, setDescription] = useState('');
  const [bookType, setBookType] = useState('');
  const [image, setImage] = useState(null);
  const [ownerName, setOwnerName] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [membershipId, setMembershipId] = useState('');

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
      publisher,
      description,
      bookType,
      image: image ? URL.createObjectURL(image) : 'https://via.placeholder.com/150', // Use image preview or placeholder
      ownerDetails: {
        ownerName,
        city,
        pincode,
        mobile,
        email: email || currentUser.email, // Default to logged-in user's email
        membershipId,
      },
    };

    // Add the new book to the list and update local storage
    allBooks.push(newBook);
    localStorage.setItem('books', JSON.stringify(allBooks));

    alert('Book uploaded successfully!');
    // Reset the form after submission
    setTitle('');
    setIsbn('');
    setAuthor('');
    setPublisher('');
    setDescription('');
    setBookType('');
    setImage(null);
    setOwnerName('');
    setCity('');
    setPincode('');
    setMobile('');
    setEmail('');
    setMembershipId('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleUpload} className="w-full max-w-lg p-8 shadow-lg rounded-lg bg-white">
        <h2 className="text-2xl font-bold mb-6">Upload Book / Manual / Proceedings</h2>

        {/* Book Details Section */}
        <h3 className="font-semibold mb-4">Book Details:</h3>
        <input
          type="text"
          placeholder="Title"
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
        <input
          type="text"
          placeholder="Publisher Name"
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg"
          required
        />
        <textarea
          placeholder="Book Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg resize-none"
          rows={3}
        />
        <select
          value={bookType}
          onChange={(e) => setBookType(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg"
          required
        >
          <option value="" disabled hidden>
            Select Type of Book
          </option>
          <option value="Automation">Automation</option>
          <option value="IOT">IOT</option>
          <option value="ITOT">ITOT</option>
          <option value="Healthcare">Healthcare</option>
        </select>

        <label className="block mb-2 font-semibold">Upload Book Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full mb-4"
        />

        {/* Owner Details Section */}
        <h3 className="font-semibold mb-4">Owner Details:</h3>
        <input
          type="text"
          placeholder="Book Owner Name"
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg"
          required
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg"
          required
        />
        <input
          type="text"
          placeholder="Pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg"
          required
        />
        <input
          type="text"
          placeholder="Mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg"
        />
        <input
          type="text"
          placeholder="Membership ID"
          value={membershipId}
          onChange={(e) => setMembershipId(e.target.value)}
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
