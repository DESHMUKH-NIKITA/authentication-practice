'use client';

import Sidebar from '@/components/Sidebar';
import LeftMenu from '@/components/LeftMenu';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AddNewUser() {
  //using routing
  const router = useRouter();

  // Handle navigation to add-new-user page
  const handleAddUserM = () => {
    router.push('/user-management');
  };
  

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    role: ''
  });

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Add form submission logic here (e.g., API call)
  };




  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex flex-col w-full">
        {/* Navbar */}
        <div className="bg-white shadow-md flex justify-between items-center px-6 py-3 h-14 ml-60">
          {/* Title */}
          <h4 className="text-lg font-semibold text-gray-800">Account Settings</h4>

          {/* User Section */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-600 font-bold">
              <img src="Username.png" alt="Icon" className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium text-gray-700">Username</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow p-6 bg-gray-100">
          <div className="flex">
            {/* Left Menu */}
            <LeftMenu />

            {/* Form Section */}
            <section className="flex-1 bg-white shadow-lg rounded-lg p-5 border border-gray-200  h-[690px] form">
              {/* Back button */}
              <div
                className="flex items-center text-black-600 hover:text-gray-900 cursor-pointer mb-6"
                onClick={() => router.back()}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span className="text-base font-semibold scale-120 tracking-tight ml-1.5 ">Add a New User</span>

              </div>

              <p className="text-gray-500 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-gray-700 font-medium">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="full name1"
                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-gray-700 font-medium">Phone Number</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="1234567890"
                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email123@gmail.com"
                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Role */}
                <div>
                  <label className="block text-gray-700 font-medium">Role</label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="Role name1"
                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    onClick={handleAddUserM}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition new-user"
                  >
                    Add New User
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
