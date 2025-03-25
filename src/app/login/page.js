'use client';

import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  // ✅ Handle Login API Request
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // ✅ Send POST request to your Next.js API route
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      console.log('✅ Response Status:', response.status);

      if (!response.ok) {
        const errorBody = await response.text();
        // console.error('❌ Login failed:', errorBody);
        throw new Error(`Login failed: ${errorBody}`);
      }

      const data = await response.json();
      // console.log('✅ Login successful:', data);

      // ✅ Store token and role in localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role);

      setMessage('Login successful!');
      router.push('/dashboard'); // ✅ Redirect to dashboard
    } catch (error) {
      console.error('❌ Error:', error.message);
      setMessage(error.message);
    }
  };

  return (
    <div className="flex h-screen bg-[#e0f2f1] items-center justify-center px-4">
      {/* Left Section - Logo */}
      <div className="w-1/3 flex flex-col justify-center items-center">
        <img src="/logo.png" alt="FinAnalyz Logo" className="w-80 mb-3" />
      </div>

      {/* Right Section - Login Form */}
      <div className="w-1/3 bg-white shadow-lg p-10 rounded-2xl h-auto flex flex-col justify-center border border-gray-300 ml-70">
        <h2 className="text-xl font-semibold mb-4 text-center">Welcome Back!</h2>

        {/* ✅ Form */}
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block font-bold text-gray-700 text-sm">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // ✅ Controlled Input
              className="w-full px-3 py-2 border rounded-lg text-sm"
              required
            />
          </div>

          <div className="relative">
            <label className="block font-bold text-gray-700 text-sm">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)} // ✅ Controlled Input
              className="w-full px-3 py-2 border rounded-lg text-sm"
              required
            />
            <span
              className="absolute right-3 top-9 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="text-right">
            <a href="#" className="text-blue-600 text-xs hover:underline">Forgot Password?</a>
          </div>

          {/* ✅ Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* ✅ Show Message */}
        {message && <p className="text-center text-green-500 mt-2">{message}</p>}

        <div className="mt-4 flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500 text-xs">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button className="mt-4 flex items-center px-4 py-2 border rounded-lg shadow-md hover:bg-gray-100 w-full transition duration-300 text-sm">
          <img src="/google-icon.png" alt="Google" className="w-6 h-6 mr-2" />
          Login with Google
        </button>

        <div className="text-center text-sm mt-4">
          Don't have an account? <a href="#" className="text-blue-600 hover:underline">Signup</a>
        </div>
      </div>
    </div>
  );
}
