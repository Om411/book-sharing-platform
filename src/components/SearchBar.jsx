// src/components/SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 border rounded-l-lg"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
