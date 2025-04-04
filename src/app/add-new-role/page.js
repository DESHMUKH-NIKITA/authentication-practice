'use client';

import Layout from '@/components/Layout';  // ✅ Import Layout
import LeftMenu from '@/components/LeftMenu';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AddNewRole() {
  const router = useRouter();

  // Navigation handler
  const handleBack = () => {
    router.push('/user-management');
  };

  // Form state
  const [formData, setFormData] = useState({
    parentRole: '',
    roleName: '',
    description: ''
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
    // Add API call or further logic here
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
          <div className="flex-grow p-6 bg-gray-100 flex">
            {/* Left Menu */}
            <LeftMenu />

            {/* Form Section */}
            <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl w-full mx-8">
              <div className="flex items-center mb-6">
                <button onClick={handleBack} className="flex items-center text-gray-600 hover:text-gray-800">
                  <ArrowLeft size={20} />
                </button>
                <h2 className="text-base font-semibold scale-65 tracking-tight -ml-5">Add a New Role</h2>
              </div>

              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <form onSubmit={handleSubmit}>
                {/* Parent Role */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">Choose a Parent Role</label>
                  <select
                    name="parentRole"
                    value={formData.parentRole}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                  >
                    <option value="Super Admin">Super Admin</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                  </select>
                </div>

                {/* Role Name */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">Role Name</label>
                  <input
                    type="text"
                    name="roleName"
                    value={formData.roleName}
                    onChange={handleChange}
                    placeholder="Role name"
                    className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                    required
                  />
                </div>

                {/* Description */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                    rows="4"
                  />
                </div>

                {/* Submit button */}
                <div className="text-right">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 btn-user"
                    style={{ borderRadius: "10px" }}
                  >
                    Add New Role
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
