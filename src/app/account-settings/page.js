'use client';

import Sidebar from '@/components/Sidebar';
import LeftMenu from '@/components/LeftMenu';

export default function AccountSettings() {
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

            {/* Right Content */}
            <div className="flex-grow bg-white rounded-lg shadow p-6">
              {/* Organization Section */}
              <h3 className="text-xl font-semibold mb-2">Organization</h3>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
                <hr/>
              {/* Basic Details */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-medium">Basic Details</h4>
                  <button className="text-blue-500 hover:underline border border-blue-800 rounded px-3 py-1">Edit</button>

                </div>
                <div className="grid grid-cols-2 gap-4">
                  <p><strong>Address:</strong> No.1, 8th building</p>
                  <p><strong>City:</strong> Cityname</p>
                  <p><strong>State:</strong> State name</p>
                  <p><strong>Country:</strong> India</p>
                  <p><strong>Pincode:</strong> 1234567</p>
                </div>
              </div>

              {/* Authorized User */}
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-2">Authorized User</h4>
                <div className="grid grid-cols-2 gap-4">
                  <p><strong>User Name:</strong> Username1</p>
                  <p><strong>Email:</strong> emailname@gmail.com</p>
                  <p><strong>Mobile Number:</strong> 1234567890</p>
                </div>
              </div>

              {/* Logo Upload */}
              <div>
                <h4 className="text-lg font-medium mb-2">Logo</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p>Upload Organization Logo</p>
                    <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg">Upload</button>
                  </div>
                  <div>
                    <p>Upload Favicon</p>
                    <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg">Upload</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
