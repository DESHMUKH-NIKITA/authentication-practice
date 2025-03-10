'use client';

import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex h-screen bg-[#e0f2f1] overflow-hidden">
  {/* Left Section */}
  <div className="hidden lg:flex w-1/2 flex-col justify-center items-center p-10">
    <img src="/logo.enc" alt="FinAnalyz Logo" className="w-48 mb-4" />
  </div>
  
  {/* Right Section */}
  <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center shadow-lg p-6 sm:p-8 rounded-lg overflow-auto max-h-screen">
    <h2 className="text-2xl font-semibold mb-4">Create Account</h2>
    
    <form className="w-full max-w-sm">
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700">Username</label>
          <input type="text" className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div>
          <label className="block text-gray-700">Phone Number</label>
          <input type="text" className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div>
          <label className="block text-gray-700">Work Email</label>
          <input type="email" className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div>
          <label className="block text-gray-700">Organization Name</label>
          <input type="text" className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="relative">
          <label className="block text-gray-700">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            className="w-full px-3 py-2 border rounded-lg"
          />
          <span
            className="absolute right-3 top-9 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <div className="relative">
          <label className="block text-gray-700">Confirm Password</label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            className="w-full px-3 py-2 border rounded-lg"
          />
          <span
            className="absolute right-3 top-9 cursor-pointer"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
      </div>
      
      <button className="w-full bg-blue-700 text-white py-2 rounded-lg mt-4 hover:bg-blue-800">
        Create Account
      </button>
    </form>
    
    <div className="mt-4 flex items-center w-full max-w-sm">
      <hr className="flex-grow border-gray-300" />
      <span className="px-2 text-gray-500">or</span>
      <hr className="flex-grow border-gray-300" />
    </div>
    
    <button className="mt-4 flex items-center px-4 py-2 border rounded-lg shadow-md hover:bg-gray-100">
      <img src="/google-icon.png" alt="Google" className="w-5 h-5 mr-2" />
      Signup with Google
    </button>
  </div>
</div>
  );
}
