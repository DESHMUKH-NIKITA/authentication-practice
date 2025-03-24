"use client";

import Sidebar from '@/components/Sidebar';
import LeftMenu from '@/components/LeftMenu';
import { Search, Pencil } from 'lucide-react';

export default function CommunicationTemplate() {
  return (
    <div className="flex h-screen overflow-x-hidden">
      <Sidebar />
      <div className="flex flex-col w-full">
        <div className="w-full bg-white shadow-md flex justify-between items-center px-6 py-3 h-14 ml-60">
          <h4 className="text-lg font-semibold text-gray-800">Account Settings</h4>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-600 font-bold">
              <img src="Username.png" alt="Icon" className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium text-gray-700 mr-60">Username</span>
          </div>
        </div>
        <div className="flex-grow p-6 bg-gray-100 overflow-y-auto">
          <div className="flex">
            <LeftMenu />

            <div className="flex-grow bg-white rounded-lg shadow p-6 mr-6">
              {/* Header Section */}
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="text-2xl font-bold">Communication Template</h3>
                  <p className="text-gray-500 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
                <button className="bg-blue-500 text-white px-2 py-1 text-xs rounded whitespace-nowrap">
                  Create Template
                </button>


              </div>

              {/* Horizontal Line */}
              <hr className="border-gray-300" />

              {/* Search Bar */}
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search.."
                  className="w-full p-2 pl-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute right-3 top-3 text-gray-400" size={20} />
              </div>

              {/* Table Section */}
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-2 text-left text-sm font-medium">S.No</th>
                      <th className="px-4 py-2 text-left text-sm font-medium">Template Name</th>
                      <th className="px-4 py-2 text-left text-sm font-medium">Template</th>
                      <th className="px-4 py-2 text-left text-sm font-medium">Created By</th>
                      <th className="px-4 py-2 text-left text-sm font-medium">Created On</th>
                      <th className="px-4 py-2 text-left text-sm font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(5)].map((_, index) => (
                      <tr key={index} className="border-t">
                        <td className="px-4 py-2">{index + 1}</td>
                        <td className="px-4 py-2">Template Name{index + 1}</td>
                        <td className="px-4 py-2">Template{index + 1}</td>
                        <td className="px-4 py-2">Officer Name</td>
                        <td className="px-4 py-2">17/03/2025</td>
                        <td className="px-4 py-2 flex items-center space-x-2">
                          <button className="text-blue-500 hover:underline flex items-center">
                            Edit <Pencil size={16} className="ml-1" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}