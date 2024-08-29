// components/NavBar.js
"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NavBar({ onSearch, showSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (onSearch) {
      onSearch(value); // Pass the search query to the parent component if the function is provided
    }
  };

  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem('token');
    // Redirect to the login page
    router.push('/');
  };

  return (
    <nav className="bg-blue-600 p-4 shadow-lg fixed top-0 left-0 right-0">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-lg font-bold">
          <Link href="/">Book Catalog</Link>
        </div>

        {showSearch && (
          <div className="flex-grow flex justify-center">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="px-3 py-1 rounded bg-white text-gray-700 focus:outline-none w-1/2"
            />
          </div>
        )}

        <div className="flex space-x-4">
          <Link href="/books" className="text-white hover:text-gray-300">Home</Link>
          <Link href="/favorites" className="text-white hover:text-gray-300">Favorite List</Link>
          <Link href="/books/add" className="text-white hover:text-gray-300">Add a Book</Link>
          <button
            onClick={handleLogout}
            className="text-white hover:text-gray-300"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
