//app/books/page.js

'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from '../../components/BookCard';
import NavBar from '../../components/NavBar';

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    // Get the token from localStorage on the client side
    const storedToken = localStorage.getItem('token');
    setToken(storedToken || '');

    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/books`, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });
        setBooks(response.data);
        setFilteredBooks(response.data); // Set filteredBooks to show all books initially
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    if (storedToken) {
      fetchBooks();
    }
  }, []); // Empty dependency array ensures this runs once on component mount

  const toggleFavorite = async (id) => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/books/toggle-favorite`,
        { id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBooks((prevBooks) =>
        prevBooks.map((book) =>
          book._id === id
            ? { ...book, isFavorite: !book.isFavorite }
            : book
        )
      );

      setFilteredBooks((prevBooks) =>
        prevBooks.map((book) =>
          book._id === id
            ? { ...book, isFavorite: !book.isFavorite }
            : book
        )
      );
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  const handleSearch = (searchQuery) => {
    if (!searchQuery) {
      setFilteredBooks(books);
    } else {
      const filtered = books.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredBooks(filtered);
    }
  };

  return (
    <div>
      <NavBar onSearch={handleSearch} showSearch={true} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mt-16">
        {filteredBooks.map((book) => (
          <BookCard key={book._id} book={book} onToggleFavorite={toggleFavorite} />
        ))}
      </div>
    </div>
  );
}
