//app/favorites/page.js
'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';  
import BookCard from '../../components/BookCard';
import NavBar from '../../components/NavBar';

export default function FavoritesPage() {
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    // Get the token from localStorage on the client side
    const storedToken = localStorage.getItem('token');
    setToken(storedToken || '');

    const fetchFavoriteBooks = async () => {
      if (storedToken) {
        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/books/favorite`, {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          });
          setFavoriteBooks(response.data);
        } catch (error) {
          console.error('Error fetching favorite books:', error);
        }
      }
    };

    fetchFavoriteBooks();
  }, []); // Empty dependency array ensures this runs once on component mount

  return (
    <div>
      <NavBar showSearch={false} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mt-16">
        {favoriteBooks.length > 0 ? (
          favoriteBooks.map((book) => (
            <BookCard key={book._id} book={book} showFavoriteButton={false} />
          ))
        ) : (
          <p>No favorite books found.</p>
        )}
      </div>
    </div>
  );
}
