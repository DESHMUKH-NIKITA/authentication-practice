'use client';
import { FaPencilAlt } from 'react-icons/fa';
import Sidebar from '@/components/Sidebar';
import LeftMenu from '@/components/LeftMenu';
import { PlusCircle, MoreHorizontal } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AccountSettings() {
  
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('users');
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleAddUser = () => {
    router.push('/add-new-user');
  };

  const handleAddRole = () => {
    router.push('/add-new-role');  // Navigate to Add Role page
  };

  const toggleDropdown = (index) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <div className="bg-white shadow-md flex justify-between items-center px-6 py-3 h-14 ml-60">
          <h4 className="text-lg font-semibold text-gray-800">Account Settings</h4>

          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-600 font-bold">
              <img src="Username.png" alt="Icon" className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium text-gray-700">Username</span>
          </div>
        </div>

        <div className="flex-grow p-6 bg-gray-100">
          <div className="flex">
            <LeftMenu />

            <section className="flex-1 bg-white shadow-lg rounded-lg p-8 border border-gray-200">
              
              {/* Header Section */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h1 style={{ fontSize: '29px', fontWeight: 'bold', color: '#1F2937' }}>User Management</h1>
                  <p className="text-md text-gray-500 text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.
                  </p>
                </div>

                {/* Conditional Button */}
                {activeTab === 'users' ? (
                  <button onClick={handleAddUser} className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition flex items-center btn-user">
                    <PlusCircle className="w-5.2 h-5 mr-2" />
                    <span className="whitespace-nowrap">Add User</span>  
                  </button>
                ) : (
                  <button onClick={handleAddRole} className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition flex items-center btn-user">
                    <PlusCircle className="w-5.2 h-5 mr-2" />
                    <span className="whitespace-nowrap">Add Role</span>  
                  </button>
                )}
              </div>

              {/* Tabs */}
              <div className="flex border-b mb-4">
                <button 
                  onClick={() => setActiveTab('users')}
                  className={`px-4 py-2 ${activeTab === 'users' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600 transition'}`}
                >
                  Users
                </button>
                <button 
                  onClick={() => setActiveTab('roles')}
                  className={`px-4 py-2 ${activeTab === 'roles' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600 transition'}`}
                >
                  Roles
                </button>
              </div>

              {/* Table Section */}
              <div className="bg-white  ">
                {activeTab === 'users' ? (
                  <table className="min-w-full text-sm">
                    <thead className="bg-gray-100 text-gray-700">
                      <tr>
                        <th className="px-6 py-3 text-left">Full Name</th>
                        <th className="px-6 py-3 text-left">Phone Number</th>
                        <th className="px-6 py-3 text-left">Email</th>
                        <th className="px-6 py-3 text-left">Role</th>
                        <th className="px-6 py-3 text-left">Status</th>
                        <th className="px-6 py-3"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.from({ length: 7 }).map((_, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50 transition">
                          <td className="px-6 py-4 text-gray-500">Full Name {index + 1}</td>
                          <td className="px-6 py-4 text-gray-500">1234567890</td>
                          <td className="px-6 py-4 text-gray-500">email{index + 1}@gmail.com</td>
                          <td className="px-6 py-4 text-gray-500">Role {index + 1}</td>
                          <td className="px-6 py-4 text-gray-500">Active</td>
                          <td className="px-6 py-4 text-right relative">
                            <MoreHorizontal 
                              className="w-5 h-5 text-gray-500 cursor-pointer hover:text-blue-600"
                              onClick={() => toggleDropdown(index)} 
                            />

                            {activeDropdown === index && (
                              <div className="absolute right-0 mt-2 w-28 bg-white shadow-lg rounded-md border border-gray-200 z-10">
                                <button 
                                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                  onClick={() => {
                                    alert(`Edit User ${index + 1}`);
                                    setActiveDropdown(null);
                                  }}
                                >
                                  Edit
                                </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <table className="min-w-full text-sm">
                    <thead className="bg-gray-100 text-gray-700">
                      <tr>
                        <th className="px-6 py-3 text-left">S.No</th>
                        <th className="px-6 py-3 text-left">Role Name</th>
                        <th className="px-6 py-3 text-left">Description</th>
                        <th className="px-6 py-3 text-left">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50 transition">
                          <td className="px-6 py-4 text-gray-500">{index + 1}</td>
                          <td className="px-6 py-4 text-gray-500">Super Admin</td>
                          <td className="px-6 py-4 text-gray-500">Owner</td>
                          <td className="px-6 py-4 text-right">
                            <button 
                              className="flex flex-col items-center text-gray-500 hover:text-gray-700 transition"
                              onClick={() => alert('Edit Clicked')}
                            >
                              <FaPencilAlt className="w-3 h-3 font-bold" /> 
                              <span className="block w-5 h-[2px] bg-gray-500 mt-1" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
