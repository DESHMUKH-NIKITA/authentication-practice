'use client';

import { useState } from 'react';
import Layout from "@/components/Layout";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import SettingsSidebar from "@/components/SettingsSidebar";

const loanStages = ['Lead', 'Registered', 'Approved', 'Disbursed', 'Rejected'];

export default function AccessManagement() {
  const [accessList, setAccessList] = useState(
    loanStages.map(stage => ({
      stage,
      role: '',
      template: '',
      saved: false,
    }))
  );

  const handleChange = (index, key, value) => {
    const updated = [...accessList];
    updated[index][key] = value;
    setAccessList(updated);
  };

  return (
    <Layout>
      {/* Top Navbar */}
      <div className="w-full h-16 bg-white flex items-center justify-between px-6">
        <h5 className="text-sm font-medium text-gray-600">
          Product &gt; Settings &gt; <span className="text-gray-900 font-semibold">Access</span>
        </h5>
        <div className="flex items-center gap-2">
          <img src="/Username.png" alt="User Icon" className="w-9 h-9 rounded-full object-cover" />
          <span className="text-sm font-medium text-gray-800">Username</span>
        </div>
      </div>

      {/* Page Layout */}
      <div className="flex min-h-[calc(100vh-4rem)] bg-[#f5f7fb]">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 bg-[#f5f7fb]">
          <SettingsSidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-auto">
        <Link href="/lead-dashboard" className="inline-flex items-center text-blue-600 text-sm mb-4 !no-underline">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Leads
          </Link>

          <h4 className="text-2xl font-bold text-gray-800 mb-6">Accesss Management</h4>

          <div className="bg-white rounded-xl border overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-white text-gray-700 font-semibold border-b">
                <tr>
                  <th className="py-4 px-6">Loan Stage</th>
                  <th className="py-4 px-6">Roles</th>
                  <th className="py-4 px-6">Communication Template</th>
                  <th className="py-4 px-6 text-center">Saved</th>
                </tr>
              </thead>
              <tbody>
                {accessList.map((item, idx) => (
                  <tr key={idx} className="border transition">
                    <td className="py-4 px-6 font-medium text-gray-500">{item.stage}</td>
                    <td className="py-4 px-6">
                      <select
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:ring focus:ring-blue-100 outline-none"
                        value={item.role}
                        onChange={(e) => handleChange(idx, 'role', e.target.value)}
                      >
                        <option value="">Select Roles</option>
                        <option value="Role 1">Role 1</option>
                        <option value="Role 2">Role 2</option>
                      </select>
                    </td>
                    <td className="py-4 px-6">
                      <select
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:ring focus:ring-blue-100 outline-none"
                        value={item.template}
                        onChange={(e) => handleChange(idx, 'template', e.target.value)}
                      >
                        <option value="">Select Template</option>
                        <option value="Template A">Template A</option>
                        <option value="Template B">Template B</option>
                      </select>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <input
                        type="checkbox"
                        checked={item.saved}
                        onChange={(e) => handleChange(idx, 'saved', e.target.checked)}
                        className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </Layout>
  );
}
