//components/BookCard.js

"use client";

export default function BookCard({ book, onToggleFavorite, showFavoriteButton = true }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">{book.title}</h3>
      <p className="text-gray-700 mb-4">{book.author}</p>
      {showFavoriteButton && (
        <button
          onClick={() => onToggleFavorite(book._id)}
          className={`px-4 py-2 rounded text-white ${
            book.isFavorite ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {book.isFavorite ? 'Unfavorite' : 'Favorite'}
        </button>
      )}
    </div>
  );
}
