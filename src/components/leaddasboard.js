'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation';
import { FaSearch, FaUser, FaCheckCircle, FaClipboardList } from "react-icons/fa";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";


export default function LeadDashboard() {
    const router = useRouter();

    const [leads, setLeads] = useState([
        { id: 1, date: "11/03/2025 14:30", name: "xxxxxxxxx", customerType: "Individual", income: "₹ 20,000", loanAmount: "₹ 2,00,000.00", creditScore: 750, phone: "1234567890", source: "xxxxxx", loanStage: "Initiated", actions: "Active" },
        { id: 2, date: "12/03/2025 14:30", name: "xxxxxxxxx", customerType: "Individual", income: "₹ 20,000", loanAmount: "₹ 2,00,000.00", creditScore: 750, phone: "1234567890", source: "xxxxxx", loanStage: "Initiated", actions: "Active" },
        { id: 3, date: "13/03/2025 14:30", name: "xxxxxxxxx", customerType: "Individual", income: "₹ 20,000", loanAmount: "₹ 2,00,000.00", creditScore: 750, phone: "1234567890", source: "xxxxxx", loanStage: "Initiated", actions: "Active" },
        { id: 4, date: "14/03/2025 14:30", name: "xxxxxxxxx", customerType: "Individual", income: "₹ 20,000", loanAmount: "₹ 2,00,000.00", creditScore: 750, phone: "1234567890", source: "xxxxxx", loanStage: "Initiated", actions: "Active" },
        { id: 5, date: "15/03/2025 14:30", name: "xxxxxxxxx", customerType: "Individual", income: "₹ 20,000", loanAmount: "₹ 2,00,000.00", creditScore: 750, phone: "1234567890", source: "xxxxxx", loanStage: "Initiated", actions: "Active" },
        { id: 6, date: "16/03/2025 14:30", name: "xxxxxxxxx", customerType: "Individual", income: "₹ 20,000", loanAmount: "₹ 2,00,000.00", creditScore: 750, phone: "1234567890", source: "xxxxxx", loanStage: "Initiated", actions: "Active" },
        { id: 7, date: "18/03/2025 14:30", name: "xxxxxxxxx", customerType: "Individual", income: "₹ 20,000", loanAmount: "₹ 2,00,000.00", creditScore: 750, phone: "1234567890", source: "xxxxxx", loanStage: "Initiated", actions: "Active" },


    ]);

    return (
        <Layout>
        <div className="flex min-h-screen">
            {/*<Sidebar />*/}
            <div className="flex-1 flex flex-col">
                {/* Navbar */}
                <div className="w-full top-0 left-0 right-0 bg-white shadow-md flex justify-between items-center px-6 py-3 h-14">
                    <h4 className="text-xl font-semibold text-gray-800">Leads Dashboard </h4>
                    <div className="flex items-center space-x-3">
                        <span className="text-sm font-medium text-gray-700">Username</span>
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold">
                            N
                        </div>
                    </div>
                </div>                <div className="p-4 bg-gray-100 flex-1">
                    {/* Summary Cards */}
                    <div className="grid grid-cols-4 gap-4 mb-8">
                        {[
                            { label: "Total Leads", count: 4, icon: <FaUser /> },
                            { label: "Qualified Leads", count: 4, icon: <FaUser /> },
                            { label: "Approved Loans", count: 4, icon: <FaCheckCircle /> },
                            { label: "Disbursed Loans", count: 4, icon: <FaClipboardList /> },
                        ].map((card, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow flex items-center">
                                <div className="text-2xl p-3 bg-gray-200 rounded-full mr-4">{card.icon}</div>
                                <div>
                                    <p className="text-lg font-semibold">{card.count}</p>
                                    <p className="text-gray-500 text-sm">{card.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="flex items-center flex-grow bg-white p-2 mb-3 rounded-lg border border-gray-300">
                        <input
                            type="text"
                            placeholder="Search by Customer Name"
                            className="w-full bg-transparent outline-none text-sm px-3"
                        />
                        <FaSearch className="text-gray-500 mx-2" />
                    </div>

                    {/* Lead Summary */}
                    <div className="p-4 bg-gray-100 flex-1">
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-lg font-semibold mb-4">Lead Summary</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse border border-gray-200">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            {["ID", "Date & Time", "Name", "Customer Type", "Income", "Loan Amount", "Credit Score", "Phone Number", "Source", "Loan Stage", "Actions"].map((heading, index) => (
                                                <th key={index} className="p-2 border border-gray-200 text-left">{heading}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {leads.map((lead) => (
                                            <tr key={lead.id} className="border border-gray-200">
                                                {Object.keys(lead).map((key, index) => (
                                                    <td
                                                        key={index}
                                                        className={`p-2 border border-gray-200 ${key === "date" ? "text-blue-500 underline cursor-pointer" : ""}`}
                                                        onClick={() => key === "date" && router.push("/leads-dashboard-summary")}
                                                    >
                                                        {lead[key]}
                                                    </td>
                                                ))}
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
        </Layout>
    );
}
