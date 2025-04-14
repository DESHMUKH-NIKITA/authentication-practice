'use client';

import Layout from '@/components/Layout';
import LeftMenu from '@/components/LeftMenu';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AddNewUser() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: '',
    phoneNo: '',
    email: '',
    password: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Get CSRF Token
      let csrfRes = await fetch('/api/csrf/token', { credentials: 'include' });
      let csrfToken =
        csrfRes.headers.get('X-CSRF-TOKEN') ||
        document.cookie
          .split('; ')
          .find((row) => row.startsWith('XSRF-TOKEN='))
          ?.split('=')[1];

      if (!csrfToken) throw new Error('Failed to retrieve CSRF token.');

      // Step 2: Login as Admin
      const loginRes = await fetch('/api/Auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrfToken,
        },
        credentials: 'include',
        body: JSON.stringify({
          email: 'admin@admin.com',
          password: 'admin',
        }),
      });

      if (!loginRes.ok) throw new Error('Admin login failed.');
      const { token } = await loginRes.json();

      // Step 3: Get New CSRF Token After Login
      csrfRes = await fetch('/api/csrf/token', { credentials: 'include' });
      csrfToken =
        csrfRes.headers.get('X-CSRF-TOKEN') ||
        document.cookie
          .split('; ')
          .find((row) => row.startsWith('XSRF-TOKEN='))
          ?.split('=')[1];

      if (!csrfToken) throw new Error('Failed to retrieve CSRF token post-login.');

      // Step 4: Register New User
      const registerRes = await fetch('/api/Auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'X-CSRF-TOKEN': csrfToken,
        },
        credentials: 'include',
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          role: formData.role,
          phoneNo: formData.phoneNo,
        }),
      });

      if (!registerRes.ok) {
        const errorData = await registerRes.json();
        throw new Error(errorData.message || 'User registration failed.');
      }

      const responseData = await registerRes.json();
      console.log('User registered:', responseData);

      router.push('/user-management');
    } catch (error) {
      console.error('Error:', error.message);
      alert(`Something went wrong: ${error.message}`);
    }
  };

  return (
    <Layout>
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
              <LeftMenu />

              {/* Form Section */}
              <section className="bg-white rounded-lg shadow-md p-8 max-w-xl w-full mx-8 h-[689px]">
                {/* Back Button */}
                <div
                  className="flex items-center text-gray-600 hover:text-gray-900 cursor-pointer mb-6"
                  onClick={() => router.back()}
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  <span className="text-base font-semibold ml-1.5">Add a New User</span>
                </div>

                <p className="text-gray-500 mb-8">
                  Fill in the details below to add a new user to the system.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium">Full Name</label>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium">Phone Number</label>
                    <input
                      type="text"
                      name="phoneNo"
                      value={formData.phoneNo}
                      onChange={handleChange}
                      placeholder="1234567890"
                      className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
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
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter password"
                      className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
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
                      required
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
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
