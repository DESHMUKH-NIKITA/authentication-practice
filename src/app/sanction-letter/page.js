'use client';

import { useRef, useState } from 'react';
import Layout from '@/components/Layout';
import SettingsSidebar from '@/components/SettingsSidebar';
import Link from 'next/link'; // Ensure Link is imported
import { ArrowLeft } from 'lucide-react';
export default function FileUploadScreen() {
  const [files, setFiles] = useState([
    { id: 1, name: 'File Name1', size: '3mb', date: '13/03/2025' },
    { id: 2, name: 'File Name1', size: '3mb', date: '13/03/2025' },
    { id: 3, name: 'File Name1', size: '3mb', date: '13/03/2025' },
    { id: 4, name: 'File Name1', size: '3mb', date: '13/03/2025' },
    { id: 5, name: 'File Name1', size: '3mb', date: '13/03/2025' },
    { id: 6, name: 'File Name1', size: '3mb', date: '13/03/2025' },
    { id: 7, name: 'File Name1', size: '3mb', date: '13/03/2025' },
    { id: 8, name: 'File Name1', size: '3mb', date: '13/03/2025' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const fileInputRef = useRef(null);

  const handleDelete = (id) => {
    setFiles(files.filter(file => file.id !== id));
  };

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const filteredFiles = files.filter(file =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      {/* Top Navbar */}
      <div className="w-full h-16 bg-white flex items-center justify-between px-6 shadow-md">
        <h5 className="text-sm font-semibold text-gray-800">
          Product &gt; Settings &gt; Sanction Letter
        </h5>
        <div className="flex items-center gap-2">
          <img src="/Username.png" alt="User Icon" className="w-9 h-9 rounded-full" />
          <span className="text-sm font-medium text-gray-700">Username</span>
        </div>
      </div>

      {/* Sidebar + Main Content */}
      <div className="flex mt-6">
        <div className="w-64">
          <SettingsSidebar />
        </div>

        <div className="flex-1 flex flex-col bg-gray-50 overflow-auto p-6">
          {/* Back to Leads Link */}
          <Link
            href="/lead-dashboard"
            className="inline-flex items-center text-blue-600 text-sm mb-4 hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Leads
          </Link>

          {/* Title */}
          <h1 className="text-xs font-semibold text-gray-800" style={{ fontSize: '25px' }}>
            Sanction Letter
          </h1>

          {/* File Upload Box */}
          <div className="border-dashed border-2 border-blue-300 bg-white rounded-lg p-10 flex flex-col items-center justify-center mb-8">
            {/*<div className="text-4xl text-blue-600 mb-4">⬆️</div>*/}
            <img src="/upload_b.png" alt="Upload Icon" className="w-16 h-16 mb-4" />
            <p className="text-gray-400 text-sm text-center">
              <span className="text-blue-600 underline cursor-pointer" onClick={handleFileClick}>
                click here
              </span>{' '}
              to upload your file
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Supported format: jpg, jpeg, png and pdf format
            </p>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={(e) => {
                console.log(e.target.files);
              }}
            />
          </div>

          {/* Uploaded Files Section */}
        {/* Outer border */}
<div className="mt-6 bg-white border rounded-lg p-3">
  {/* Header section */}
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-2xl font-semibold">
      Uploaded Files <span className="text-sm text-gray-500">• {files.length} files</span>
    </h2>
    <div className="relative">
      <input
        type="text"
        placeholder="Search.."
        className="pl-2 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <img
        src="/search.png"
        alt="Upload Icon"
        className="w-4 h-4 mb-4 absolute right-2 top-4"
      />
    </div>
  </div>

  {/* Inner border (table only) */}
  <div className="overflow-x-auto bg-white border rounded-lg">
    <table className="w-full border-collapse">
      <thead className="bg-gray-100">
        <tr className="border-b-4 border-gray-400">
          <th className="px-4 py-2 text-left text-sm font-bold text-gray-600">SN</th>
          <th className="px-4 py-2 text-left text-sm font-bold text-gray-600">File Name</th>
          <th className="px-4 py-2 text-left text-sm font-bold text-gray-600">File Size</th>
          <th className="px-4 py-2 text-left text-sm font-bold text-gray-600">Uploaded On</th>
          <th className="px-4 py-2 text-left text-sm font-bold text-gray-600">Actions</th>
        </tr>
      </thead>
      <tbody>
        {filteredFiles.map((file, index) => (
          <tr
            className={`border-b-2 border-gray-400 ${index === filteredFiles.length - 1 ? 'rounded-b-lg' : ''}`}
            key={file.id}
          >
            <td className="px-4 py-2">{index + 1}</td>
            <td className="px-4 py-2">{file.name}</td>
            <td className="px-4 py-2">{file.size}</td>
            <td className="px-4 py-2">{file.date}</td>
            <td
              className="px-4 py-2 text-gray-600 cursor-pointer"
              onClick={() => handleDelete(file.id)}
            >
              Delete
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

        </div>
      </div>
    </Layout>
  );
}
