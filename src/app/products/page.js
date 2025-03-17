'use client';

import Sidebar from '@/components/Sidebar';
import { FaSearch, FaPlus, FaCog, FaEllipsisV } from 'react-icons/fa';
import { useRouter } from 'next/navigation'; // ✅ Import the Next.js router

export default function Products() {
  const router = useRouter(); // ✅ Initialize the router

  const handleCreateProduct = () => {
    router.push('/create-product'); // ✅ Redirect to the create product page
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64 bg-gray-100 h-screen">
        {/* Navbar */}
        <div className="w-full top-0 left-0 right-0 bg-white shadow-md flex justify-between items-center px-6 py-3 h-14">
          <h4 className="text-lg font-semibold text-gray-800">Products</h4>
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium text-gray-700">Username</span>
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold">
              N
            </div>
          </div>
        </div>

        {/* Search & Create Product Section */}
        <div className="flex items-center bg-white p-2 shadow-md rounded-lg mt-10 mb-4">
          <div className="flex items-center flex-grow bg-gray-100 p-2 rounded-lg">
            <FaSearch className="text-gray-500 mx-2" />
            <input
              type="text"
              placeholder="Search by product name, loan type or status"
              className="w-full bg-transparent outline-none text-sm"
            />
          </div>

          {/* ✅ Redirect on button click */}
          <button
            onClick={handleCreateProduct}
            className="ml-2 flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
          >
            <FaPlus className="mr-2" /> Create New Product
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white p-6 ml-2 rounded-lg shadow-md relative">
              <div className="absolute top-4 right-4 cursor-pointer">
                <FaEllipsisV className="text-gray-500" />
              </div>
              <h4 className="text-lg font-bold">Personal Loan</h4>
              <p className="text-gray-500 text-sm">Unsecured loan up to 3 lakhs</p>

              <div className="grid grid-cols-2 gap-2 mt-3">
                <div className="bg-blue-100 p-3 text-center rounded-lg">
                  <p className="text-xl font-bold">100</p>
                  <p className="text-gray-600 text-xs">Total Leads</p>
                </div>
                <div className="bg-blue-100 p-3 text-center rounded-lg">
                  <p className="text-xl font-bold">100</p>
                  <p className="text-gray-600 text-xs">Sources</p>
                </div>
                <div className="bg-blue-100 p-3 text-center rounded-lg">
                  <p className="text-xl font-bold">100</p>
                  <p className="text-gray-600 text-xs">Credit Managers</p>
                </div>
                <div className="bg-blue-100 p-3 text-center rounded-lg">
                  <p className="text-xl font-bold">100</p>
                  <p className="text-gray-600 text-xs">DSA</p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                <div>
                  <p>Created On: <span className="text-blue-600">27-Feb-2025</span></p>
                  <p>Loan Stage: <span className="text-blue-600">Default Template</span></p>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="bg-gray-200 p-2 m-2 rounded hover:bg-gray-300 transition">
                    <FaCog className="text-gray-600" />
                  </button>
                  <button className="bg-gray-200 px-3 py-1 rounded-lg text-sm text-gray-700 hover:bg-gray-300 transition">
                    Leads
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
