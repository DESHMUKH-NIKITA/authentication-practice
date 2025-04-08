'use client';

import Layout from '@/components/Layout';  // ✅ Import Layout
import LeftMenu from '@/components/LeftMenu';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AddNewUser() {
  const router = useRouter();

  const handleAddUserM = () => {
    router.push('/user-management');
  };

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',        // ✅ Added password field
    role: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <Layout>  {/* ✅ Wrapped in Layout */}
      <div className="flex h-screen">
        <div className="flex flex-col w-full">
          {/* Navbar */}
          <div className="bg-white shadow-md flex justify-between items-center px-6 py-3 h-14">
            <h4 className="text-lg font-semibold text-gray-800">Account Settings</h4>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-600 font-bold">
                <img src="/Username.png" alt="Icon" className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium text-gray-700">Username</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-grow p-6 bg-gray-100">
            <div className="flex">
              {/* Left Menu */}
              <LeftMenu />

              {/* Form Section */}
              <section
                className="bg-white rounded-lg shadow-md p-8 max-w-xl w-full mx-8 h-[689px]"
                //style={{ margin: '205px', height:'723px', position: 'relative', bottom: '202px', right: '192px' }}
              >
                {/* Back button */}
                <div
                  className="flex items-center text-black-600 hover:text-gray-900 cursor-pointer mb-6"
                  onClick={() => router.back()}
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  <span className="text-base font-semibold scale-120 tracking-tight ml-1.5">
                    Add a New User
                  </span>
                </div>

                <p className="text-gray-500 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

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

                  <div>
                    <label className="block text-gray-700 font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* ✅ Added Password Field */}
                  <div>
                    <label className="block text-gray-700 font-medium">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter password"
                      className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium">Role</label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      placeholder="Administrator"
                      className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      onClick={handleAddUserM}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                      style={{borderRadius:'10px'}}
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
    </Layout>
  );
}
