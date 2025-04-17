'use client';

import { Card } from "@/components/ui/card";
import Button from "@/components/ui/button";
import { ArrowLeft, Trash2, QrCode, FileText } from "lucide-react";
import Link from "next/link";
import Layout from "@/components/Layout";
import SettingsSidebar from "@/components/SettingsSidebar";

export default function SourceLinksPage() {
  const sourceLinks = new Array(7).fill({
    linkName: "Link Name1",
    businessName: "Business Name1",
    createdBy: "Officer Name1",
    createdOn: "12/03/2025",
  });

  return (
    <Layout>
      {/* Top Navbar */}
      <div className="w-full h-16 bg-white flex items-center justify-between px-6">
        <h5 className="text-sm font-semibold text-gray-800">Product &gt; Settings &gt; Source Links</h5>
        <div className="flex items-center gap-2">
          <img src="/Username.png" alt="User Icon" className="w-9 h-9 rounded-full" />
          <span className="text-sm font-medium text-gray-700">Username</span>
        </div>
      </div>

      {/* Sidebar + Content */}
      <div className="flex min-h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <div className="hidden md:block w-64 bg-white">
          <SettingsSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gray-50 p-6">
          <Link href="/lead-dashboard" className="inline-flex items-center text-blue-600 text-sm mb-4 !no-underline">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Leads
          </Link>

          <h4 className="text-2xl font-bold text-gray-800 mb-4">Source Links</h4>

          <Card className="p-4 rounded-2xl bg-white shadow">
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700 border-b">S.No</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700 border-b">Link Name</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700 border-b">Business Name</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700 border-b">Created By</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700 border-b">Created On</th>
                    <th className="text-center px-4 py-3 text-sm font-semibold text-gray-700 border-b">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sourceLinks.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b text-sm">{index + 1}</td>
                      <td className="px-4 py-3 border-b text-sm">{item.linkName}</td>
                      <td className="px-4 py-3 border-b text-sm">{item.businessName}</td>
                      <td className="px-4 py-3 border-b text-sm">{item.createdBy}</td>
                      <td className="px-4 py-3 border-b text-sm">{item.createdOn}</td>
                      <td className="px-4 py-3 border-b text-center">
                        <div className="flex justify-center gap-2">
                          <Button size="icon" variant="ghost" className="bg-white">
                            <FileText className="w-4 h-4 text-gray-600" />
                          </Button>
                          <Button size="icon" variant="ghost" className="bg-white">
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </Button>
                          <Button size="icon" variant="ghost" className="bg-white">
                            <QrCode className="w-4 h-4 text-gray-600" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
