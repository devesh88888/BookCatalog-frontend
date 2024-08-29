"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Correct API endpoint for signup
      await axios.post(`https://book-catalog-backend-red-eight.vercel.app/api/auth/signup`, { email, password });
      // Redirect to login page on successful signup
      router.push('/auth/login');
    } catch (error) {
      console.error('Signup failed:', error);
      alert('Signup failed');
    }
  };

  const handleLoginRedirect = () => {
    router.push('/auth/login');
  };
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
      <form onSubmit={handleSignup}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
      <div className="mt-4">
        <p className="text-gray-700">Already have an account?</p>
        <button
          onClick={handleLoginRedirect}
          className="mt-2 bg-gray-500 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600"
        >
          Login
        </button>
      </div>
    </div>
  );
}
