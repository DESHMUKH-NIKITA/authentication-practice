"use client";

import Layout from '@/components/Layout';  // ✅ Import Layout
import LeftMenu from '@/components/LeftMenu';
import { useState } from 'react';
import { X } from 'lucide-react';
import Button from "@/components/ui/button";

export default function AccountSettings() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    address: 'No.1, 8th building',
    city: 'Cityname',
    state: 'State name',
    country: 'India',
    pincode: '1234567',
    userName: 'Username1',
    email: 'emailname@gmail.com',
    mobileNumber: '1234567890',
    orgLogo: null,
    favicon: null
  });

  const handleEditClick = () => setIsEditing(!isEditing);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData({ ...formData, [type]: event.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveFile = (type) => {
    setFormData({ ...formData, [type]: null });
  };

  return (
    <Layout> 
      {/* ✅ Navbar */}
      <div className="bg-white shadow-md flex justify-between items-center px-6 py-3 h-14">
        <h4 className="text-lg font-semibold text-gray-800">Account Settings</h4>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-600 font-bold">
            <img src="Username.png" alt="Icon" className="w-6 h-6" />
          </div>
          <span className="text-sm font-medium text-gray-700">Username</span>
        </div>
      </div>

      <div className="flex-grow p-6 bg-gray-100 overflow-y-auto">
        <div className="flex">
          <LeftMenu />

          <div className="flex-grow bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold">Organization</h3>
            </div>

            <p className="text-gray-500 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <hr className="border-gray-300" />

            <div className="flex justify-end">
              <button
                onClick={handleEditClick}
                className="text-blue-500 hover:underline border border-blue-800 rounded px-3 py-1 flex items-center space-x-2"
              >
                <span>{isEditing ? 'Save' : 'Edit'}</span>
                {!isEditing && (
                  <img src="/Edit-Blue.png" alt="Edit Icon" className="w-4 h-4" />
                )}
              </button>
            </div>

            <div className="mb-3 -mt-5 ml-5">
              <h5 className="text-lg font-medium mb-2">Basic Details</h5>
              <div className="grid grid-cols-2 gap-x-10 gap-y-4">
                {['address', 'city', 'state', 'country', 'pincode'].map((field) => (
                  <div key={field}>
                    <p className="text-gray-500"><strong>{field.charAt(0).toUpperCase() + field.slice(1)}:</strong></p>
                    {isEditing ? (
                      <input
                        name={field}
                        value={formData[field]}
                        onChange={handleInputChange}
                        className="border p-1 rounded w-full"
                      />
                    ) : (
                      <p>{formData[field]}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-3 ml-5">
              <h5 className="text-lg font-medium mb-2">Authorized User</h5>
              <div className="grid grid-cols-2 gap-x-10 gap-y-4">
                {['userName', 'email', 'mobileNumber'].map((field) => (
                  <div key={field}>
                    <p className="text-gray-500"><strong>{field.charAt(0).toUpperCase() + field.slice(1)}:</strong></p>
                    {isEditing ? (
                      <input
                        name={field}
                        value={formData[field]}
                        onChange={handleInputChange}
                        className="border p-1 rounded w-full"
                      />
                    ) : (
                      <p>{formData[field]}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2 ml-5">Logo</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 ml-5">Upload Organization Logo</p>
                  {isEditing ? (
                    formData.orgLogo ? (
                      <div className="relative bg-gray-200 p-2 rounded-lg flex flex-col items-center">
                        <span className="text-sm m-1">Organization Logo</span>
                        <X className="absolute top-0 right-0 text-red-500 cursor-pointer" onClick={() => handleRemoveFile('orgLogo')} />
                      </div>
                    ) : (
                      <div className="ml-5">
                        <Button className="mt-2 relative flex items-center space-x-2">
                          <input
                            type="file"
                            onChange={(e) => handleFileChange(e, 'orgLogo')}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                          />
                          <img src="/Upload.png" alt="Upload Icon" className="w-4 h-4" />
                          <span>Upload</span>
                        </Button>
                      </div>
                    )
                  ) : (
                    <div className="ml-5">
                      <Button className="mt-2 flex items-center space-x-2">
                        <img src="/Upload.png" alt="Upload Icon" className="w-4 h-4" />
                        <span>Upload</span>
                      </Button>
                    </div>
                  )}
                </div>

                <div>
                  <p className="text-sm text-gray-500">Upload Favicon</p>
                  {isEditing ? (
                    formData.favicon ? (
                      <div className="relative bg-gray-200 p-2 rounded-lg flex flex-col items-center">
                        <span className="text-sm mt-1">Favicon</span>
                        <X className="absolute top-0 right-0 text-red-500 cursor-pointer" onClick={() => handleRemoveFile('favicon')} />
                      </div>
                    ) : (
                      <Button className="mt-2 relative flex items-center space-x-2">
                        <input
                          type="file"
                          onChange={(e) => handleFileChange(e, 'favicon')}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <img src="/Upload.png" alt="Upload Icon" className="w-4 h-4" />
                        <span>Upload</span>
                      </Button>
                    )
                  ) : (
                    <Button className="mt-2 flex items-center space-x-2">
                      <img src="/Upload.png" alt="Upload Icon" className="w-4 h-4" />
                      <span>Upload</span>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
