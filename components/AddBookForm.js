//components/AddBookForm.js
"use client"
import { useState } from 'react'

export default function AddBookForm() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Implement the logic to add the book to the database
    console.log({ title, author })
  }

  return (
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
  )
}
