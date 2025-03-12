'use client';

import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex h-screen bg-[#e0f2f1] items-center justify-center px-4">
      {/* Left Section - Logo */}
      <div className="w-1/3 flex flex-col justify-center items-center">
        <img src="/logo.png" alt="FinAnalyz Logo" className="w-80 mb-3" />
      </div>

      {/* Right Section - Adjusted Form */}
      <div className="w-1/3 bg-white shadow-lg p-7 rounded-2xl h-auto flex flex-col justify-center border border-gray-300 ml-70">
        <h2 className="text-xl font-semibold mb-4 text-center">Create Account</h2>

        <form className="space-y-4">
          <div>
            <label className="block font-bold text-gray-700 text-sm">Username</label>
            <input type="text" className="w-full px-3 py-2 border rounded-lg text-sm" />
          </div>
          <div>
            <label className="block font-bold text-gray-700 text-sm">Phone Number</label>
            <input type="text" className="w-full px-3 py-2 border rounded-lg text-sm" />
          </div>
          <div>
            <label className="block font-bold text-gray-700 text-sm">Work Email</label>
            <input type="email" className="w-full px-3 py-2 border rounded-lg text-sm" />
          </div>

          <div className="relative">
            <label className="block font-bold text-gray-700 text-sm">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-3 py-2 border rounded-lg text-sm"
            />
            <span
              className="absolute right-3 top-9 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="relative">
            <label className="block font-bold text-gray-700 text-sm">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="w-full px-3 py-2 border rounded-lg text-sm"
            />
            <span
              className="absolute right-3 top-9 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700 transition duration-300">
            Create Account
          </button>
        </form>

        {/* <div className="mt-4 flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500 text-xs">or</span>
          <hr className="flex-grow border-gray-300" />
        </div> */}

        {/* <button className="mt-4 flex items-center px-4 py-2 border rounded-lg shadow-md hover:bg-gray-100 w-full transition duration-300 text-sm">
          <img src="/google-icon.png" alt="Google" className="w-4 h-4 mr-2" />
          Signup with Google
        </button> */}
      </div>
    </div>
  );
}
