'use client';

import { Search, Pencil, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import Layout from '@/components/Layout';     // Layout wrapper
import Sidebar from '@/components/Sidebar';   // Sidebar component
import LeftMenu from '@/components/LeftMenu'; // Left menu component

export default function CommunicationTemplate() {
  const [showForm, setShowForm] = useState(false);
  const [templatePreview, setTemplatePreview] = useState('');
  const [formData, setFormData] = useState({
    templateName: '',
    templateId: '',
    approvedTemplate: 'SMS',
    templatePreview: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePreview = () => {
    setTemplatePreview(formData.templatePreview);
  };

  const handleBack = () => {
    setShowForm(false);
    setTemplatePreview('');
  };

  return (
    <Layout>
      <div className="flex h-screen overflow-x-hidden">
        
        <div className="flex flex-col w-full">
          <div className="w-full bg-white shadow-md flex justify-between items-center px-6 py-3 h-14 ml-0.3">
            <h4 className="text-lg font-semibold text-gray-800">Account Settings</h4>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-600 font-bold">
                <img src="Username.png" alt="Icon" className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium text-gray-700 mr-0.5">Username</span>
            </div>
          </div>
          <div className="flex-grow p-6 bg-gray-100 overflow-y-auto">
            <div className="flex">
              <LeftMenu />
              <div className="flex-grow bg-white rounded-lg shadow p-6">

                {!showForm && !templatePreview && (
                  <>
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h3 className="text-2xl font-bold">Communication Template</h3>
                        <p className="text-gray-500">
                          Manage and create communication templates easily.
                        </p>
                      </div>
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
                        onClick={() => setShowForm(true)}
                      >
                        Create Template
                      </button>
                    </div>

                    <hr className="border-gray-300 mb-4" />

                    <div className="relative mb-4">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="w-full p-2 pl-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <Search className="absolute right-3 top-3 text-gray-400" size={20} />
                    </div>

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
                              <td className="px-4 py-2">Template {index + 1}</td>
                              <td className="px-4 py-2">Template Content {index + 1}</td>
                              <td className="px-4 py-2">Officer Name</td>
                              <td className="px-4 py-2">28/03/2025</td>
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
                  </>
                )}

                {showForm && !templatePreview && (
                  <div className="bg-white p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <button onClick={handleBack} className="text-gray-700 hover:text-black transition">
                        <ArrowLeft size={24} className="cursor-pointer" />
                      </button>
                      <h4 className="text-xl font-bold ml-4">Create Template</h4>
                    </div>

                    <p className="text-gray-500 mb-6">
                      Fill out the form to create a new communication template.
                    </p>

                    <form className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Template Name</label>
                        <input
                          type="text"
                          name="templateName"
                          value={formData.templateName}
                          onChange={handleChange}
                          className="w-full p-2 border border-gray-300 rounded-lg"
                          placeholder="Template Name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">Template ID</label>
                        <input
                          type="text"
                          name="templateId"
                          value={formData.templateId}
                          onChange={handleChange}
                          className="w-full p-2 border border-gray-300 rounded-lg"
                          placeholder="Template ID"
                        />
                      </div>

                      <div className="flex justify-end">
                        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg">Save</button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
