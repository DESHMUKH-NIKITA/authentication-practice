'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { MoreVertical } from 'lucide-react';
import Layout from '@/components/Layout';
import Link from "next/link";
import { ArrowLeft } from 'lucide-react';


const RoleManagement = () => {
  const roles = new Array(12).fill('');
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { name: 'Source Links', path: '/source-link-page' },
    { name: 'Roles', path: '/role' },
    { name: 'Access', path: '/access' },
    { name: 'Offer Settings', path: '/offer-settings' },
    { name: 'Sanction Letter', path: '/sanction-letter' },
    { name: 'Loan Agreement', path: '/loan-agreement' },
    { name: 'BRE Checks', path: '/bre-check' },
  ];

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <Layout>
      {/* Top Navbar */}
      <div className="w-full h-16 bg-white flex items-center justify-between px-6">
        <h5 className="text-sm font-semibold text-gray-800">Product &gt; Settings &gt; Roles</h5>
        <div className="flex items-center gap-2">
          <img src="/Username.png" alt="User Icon" className="w-9 h-9 rounded-full" />
          <span className="text-sm font-medium text-gray-700">Username</span>
        </div>
      </div>

      {/* Body */}
      <div className="flex h-[calc(100vh-72px)] bg-white">
        {/* Sidebar */}
        <aside className="w-[240px] bg-white rounded-lg shadow p-2 mr-2 ml-2">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li
                  key={item.path}
                  onClick={() => navigateTo(item.path)}
                  className={`cursor-pointer px-4 py-2 rounded-lg transition whitespace-nowrap ${
                    isActive
                      ? 'bg-blue-100 text-black font-semibold'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-gray-50 overflow-auto p-6">
        <Link href="/lead-dashboard" className="inline-flex items-center text-blue-600 text-sm mb-4 hover:underline">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Leads
          </Link>
          <h1 className="text-xs font-semibold text-gray-800" style={{ fontSize: '25px' }}>
  Role Management
</h1>



          {/* adding search icon */}
{/* Search and Assign Roles */}
<div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
  {/* Search Bar */}
  <div className="relative flex items-center w-full bg-white border border-gray-300 rounded-md px-3 py-2 shadow-sm">

    <input
      type="text"
      placeholder="Search by Role"
      className="flex-1 outline-none bg-transparent text-gray-700 pl-1"  // Added padding on left for icon space
    />
    
    {/* Search Icon */}
    <span className="absolute right-6 top-2 text-gray-400">🔍</span>
  </div>

  {/* Assign Roles Button */}
  <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition whitespace-nowrap" style={{ borderRadius: "10px" }}>
    Assign Roles
  </button>
</div>




          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {roles.map((_, index) => (
              <Card key={index} className="relative text-center py-6">
                {/*<div className="absolute top-2 right-2">
                  <MoreVertical className="w-4 h-4 text-gray-400" />
                </div>*/}
                <CardContent className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gray-200 mb-4"></div>
                  <div className="text-sm font-medium">Role Name</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RoleManagement;
