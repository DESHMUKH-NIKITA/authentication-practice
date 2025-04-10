"use client";

import Layout from "@/components/Layout";
import { FaSearch, FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CustomerPage() {
    const router = useRouter();
    const [search, setSearch] = useState("");

    const handleCreateCustomer = () => {
        router.push("/create-customer");
    };

    return (
        <Layout>
            <div className="bg-gray-100 min-h-screen">
                {/* Header */}
                <div className="w-full top-0 bg-white shadow-md flex justify-between items-center px-6 py-3 h-14">
                    <h4 className="text-lg font-semibold text-gray-800">Customer</h4>
                    <div className="flex items-center space-x-2">
                        <img src="/Username.png" alt="user" className="w-6 h-6 rounded-full" />
                        <span className="text-sm font-medium text-gray-700">Username</span>
                    </div>
                </div>

                {/* Search & Button */}
                <div className="flex items-center bg-white p-2 shadow-md rounded-lg mt-10 mb-4 gap-x-4">
                    <div className="flex items-center flex-grow bg-white-100 p-2 rounded-lg border border-gray-300">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-transparent outline-none text-sm px-3"
                        />
                        <FaSearch className="text-gray-500 mx-2" />
                    </div>

                    <button
                        onClick={handleCreateCustomer}
                        className="flex items-center bg-blue-600 text-white px-4 py-2 text-sm hover:bg-blue-700 transition rounded-lg"
                        style={{ borderRadius: "8px" }}
                    >
                        <FaPlus className="mr-2" />
                        Create Customer
                    </button>
                </div>

                {/* Customer Data Table */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4">Customer Data</h2>
                    <div className="flex gap-4 mb-4">
                        <select className="border rounded-lg px-3 py-2 text-sm">
                            <option>By Customer Type</option>
                            <option>Individual</option>
                            <option>Corporate</option>
                        </select>
                        <select className="border rounded-lg
                         px-3 py-2 text-sm">
                            <option>By Date</option>
                            <option>Newest First</option>
                            <option>Oldest First</option>
                        </select>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm border rounded">
                            <thead>
                                <tr className="bg-white-100 text-gray-700 text-left">
                                    <th className="px-4 py-2 ">S.No</th>
                                    <th className="px-4 py-2 ">Customer ID</th>
                                    <th className="px-4 py-2 ">Customer Type</th>
                                    <th className="px-4 py-2 ">Name</th>
                                    <th className="px-4 py-2 ">PAN Number</th>
                                    <th className="px-4 py-2 ">Phone Number</th>
                                    <th className="px-4 py-2 ">Created At</th>
                                    <th className="px-4 py-2 ">Updated At</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[...Array(7)].map((_, idx) => (
                                    <tr key={idx} className="text-white-700 border-t">
                                        <td className="px-4 py-2 ">1</td>
                                        <td className="px-4 py-2 ">xxxxxxxxx</td>
                                        <td className="px-4 py-2 ">Individual</td>
                                        <td className="px-4 py-2 ">xxxxxxxxxxxxxxxx</td>
                                        <td className="px-4 py-2 ">xxxxxx</td>
                                        <td className="px-4 py-2 ">1234567890</td>
                                        <td className="px-4 py-2 ">18/03/2025</td>
                                        <td className="px-4 py-2 ">18/03/2025</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
