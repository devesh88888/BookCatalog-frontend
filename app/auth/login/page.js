//app/auth/login
"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/login`, { email, password });
      localStorage.setItem('token', response.data.token); // Save token to local storage
      router.push('/books');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed');
    }
  };

  const handleSignupRedirect = () => {
    router.push('/auth/signup');
  };
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
        >
          Login
        </button>
      </form>
      <div className="mt-4">
        <p className="text-gray-700">New User</p>
        <button
          onClick={handleSignupRedirect}
          className="mt-2 bg-gray-500 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600"
        >
          Signup
        </button>
      </div>
    </div>
  );
}
