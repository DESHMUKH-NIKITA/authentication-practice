'use client';

import React, { useState } from 'react';
import { MoreVertical } from 'lucide-react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Layout from '@/components/Layout';
import SettingsSidebar from '@/components/SettingsSidebar';

const RoleManagement = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const roles = new Array(12).fill('Role Name');

  const toggleDropdown = (index) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  return (
    <Layout>
      {/* Top Navbar */}
      <div className="w-full h-16 bg-white flex items-center justify-between px-6 shadow-md">
        <h5 className="text-sm font-semibold text-gray-800">Product &gt; Settings &gt; Roles</h5>
        <div className="flex items-center gap-2">
          <img src="/Username.png" alt="User Icon" className="w-9 h-9 rounded-full" />
          <span className="text-sm font-medium text-gray-700">Username</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex mt-4">
        {/* Sidebar */}
        <div className="w-64">
          <SettingsSidebar />
        </div>

        {/* Main Content Section */}
        <div className="flex-1 flex flex-col bg-gray-50 overflow-auto p-6">
          <Link
            href="/lead-dashboard"
            className="inline-flex items-center text-blue-600 text-sm mb-4 hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Leads
          </Link>

          <h1 className="text-xs font-semibold text-gray-800" style={{ fontSize: '25px' }}>
            Role Management
          </h1>

          {/* Search and Assign Roles */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Search Bar */}
            <div className="relative flex items-center w-full bg-white border border-gray-300 rounded-md px-3 py-2 shadow-sm">
              <input
                type="text"
                placeholder="Search by Role"
                className="flex-1 outline-none bg-transparent text-gray-700 pl-1"
              />
              <span className="absolute right-6 top-2 text-gray-400">🔍</span>
            </div>

            {/* Assign Roles Button */}
            <button
              className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition whitespace-nowrap"
              style={{ borderRadius: '10px' }}
            >
              Assign Roles
            </button>
          </div>

          {/* Roles Grid */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {roles.map((role, index) => (
              <div key={index} className="relative bg-white border rounded-lg shadow-md p-4">
                {/* More Button in top-right */}
                <div className="absolute top-2 right-2">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="text-gray-500 hover:text-black"
                  >
                    <MoreVertical className="w-5 h-5" />
                  </button>

                  {openDropdown === index && (
                    <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded shadow p-2 z-20">
                      <button
                        onClick={() => {
                          alert(`Delete role at index ${index}`);
                          setOpenDropdown(null);
                        }}
                        className="text-red-600 text-sm hover:underline"
                      >
                        Delete Role
                      </button>
                    </div>
                  )}
                </div>

                {/* Avatar */}
                <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mt-4"></div>
                {/* Role name */}
                <div className="text-center mt-4 text-sm font-medium">{role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RoleManagement;
