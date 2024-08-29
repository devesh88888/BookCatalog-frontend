//app
'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import NavBar from '../../../components/NavBar';

export default function AddBookPage() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [token, setToken] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Get the token from localStorage on the client side
    const storedToken = localStorage.getItem('token');
    setToken(storedToken || '');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `https://book-catalog-backend-red-eight.vercel.app/api/books`,
        { title, author },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert('Book added successfully!');
      router.push('/books');
    } catch (error) {
      console.error('Error adding book:', error);
      alert('Failed to add book.');
    }
  };

  return (
    <div className="mt-20">
      <NavBar showSearch={false} />
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Add a New Book</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}
