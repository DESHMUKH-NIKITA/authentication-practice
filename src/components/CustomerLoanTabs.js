"use client";

import { useState } from "react";

export default function CustomerLoanTabs() {
    const [activeTab, setActiveTab] = useState("Summary");

    const tabs = [
        "Summary",
        "Pre-approved",
        "Profile",
        "Documents",
        "Timeline",
        "Notes",
        "Enquiry",
        "BRE Checks",
    ];

    return (
        <div className="p-0 m-0 bg-gray-100">
            {/* Tabs Section */}
            <div className="bg-gray-100 sticky top-0 z-8">
                <div className="flex space-x-6 px-8 border-b border-gray-200">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`pb-3 px-4 text-lg font-medium transition-all ${activeTab === tab
                                ? "text-blue-600 border-b-2 border-blue-600"
                                : "text-gray-500 hover:text-blue-600"
                                }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Section */}
            <div className="mt-3 p-6 bg-gray-100">
                {activeTab === "Summary" && <SummaryContent />}
                {activeTab === "Pre-approved" && <PreApprovedContent />}
                {activeTab === "Profile" && <ProfileContent />}
                {activeTab === "Documents" && <DocumentsContent />}
                {activeTab === "Timeline" && <TimelineContent />}
                {activeTab === "Notes" && <NotesContent />}
                {activeTab === "Enquiry" && <EnquiryContent />}
                {activeTab === "BRE Checks" && <BREChecksContent />}
            </div>
        </div>
    );
}

function SummaryContent() {
    return (
        <div className="bg-gray-100 p-6 space-y-6">
            {/* Customer & Credit Details (2 Columns) */}
            <div className="grid grid-cols-2 gap-6">
                {/* Customer Details */}
                <div className="bg-white p-6 rounded-lg border">
                    <h4 className="text-lg font-semibold mb-4">Customer Details</h4>
                    <div className="space-y-3">
                        {[
                            { label: "Customer ID", value: "12345" },
                            { label: "Customer Name", value: "Anna Bella Cruz" },
                            { label: "DOB", value: "21/03/1993" },
                            { label: "Phone Number", value: "1234567890" },
                            { label: "Email Address", value: "email123@gmail.com" },
                        ].map((item, index) => (
                            <div key={index} className="flex justify-between">
                                <p className="text-gray-600">{item.label}:</p>
                                <p className="font-medium text-gray-900">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Credit & Eligibility */}
                <div className="bg-white p-6 rounded-lg border">
                    <h4 className="text-lg font-semibold mb-4">Credit & Eligibility</h4>
                    <div className="space-y-3">
                        {[
                            { label: "Income", value: "₹ 20,000" },
                            { label: "Credit Score", value: "670" },
                            { label: "Status", value: "Average" },
                            { label: "Debt to Income Ratio", value: "35%" },
                            { label: "Approval Status", value: "Pending" },
                        ].map((item, index) => (
                            <div key={index} className="flex justify-between">
                                <p className="text-gray-600">{item.label}:</p>
                                <p className="font-medium text-gray-900">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Loan, Application & Guarantor Details (2 Columns) */}
            <div className="grid grid-cols-2 gap-6">
                {/* Loan Details (Left Side, Full Height) */}
                <div className="bg-white p-6 rounded-lg border row-span-2">
                    <h3 className="text-lg font-semibold mb-4">Loan Details</h3>
                    <div className="space-y-3">
                        {[
                            { label: "Product Name", value: "Personal Loan" },
                            { label: "Loan Amount", value: "₹ 2,00,000" },
                            { label: "EMI", value: "₹ 2,000" },
                            { label: "Loan Tenure", value: "1 year" },
                            { label: "Interest Rate", value: "7%" },
                            { label: "Applied On", value: "11/03/2025" },
                            { label: "Updated On", value: "22/03/2025" },
                            { label: "Loan Owner", value: "Bank Official name" },
                            { label: "Loan Purpose", value: "Medical Emergency" },
                        ].map((item, index) => (
                            <div key={index} className="flex justify-between">
                                <p className="text-gray-600">{item.label}:</p>
                                <p className="font-medium text-gray-900">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Application Details (Right Side, Top) */}
                <div className="bg-white p-6 rounded-lg border">
                    <h3 className="text-lg font-semibold mb-4">Application Details</h3>
                    <div className="space-y-3">
                        {[
                            { label: "Loan Status", value: "Under Review" },
                            { label: "Current Stage", value: "Document Verification" },
                            { label: "Next Action Required", value: "Submit Income Proof" },
                        ].map((item, index) => (
                            <div key={index} className="flex justify-between">
                                <p className="text-gray-600">{item.label}:</p>
                                <p className="font-medium text-gray-900">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Guarantor Details (Right Side, Bottom) */}
                <div className="bg-white p-6 rounded-lg border">
                    <h3 className="text-lg font-semibold mb-4">Guarantor Details</h3>
                    <div className="space-y-3">
                        {[
                            { label: "Guarantor Name", value: "John Doe" },
                            { label: "Relationship", value: "Father" },
                            { label: "Phone Number", value: "1234567890" },
                        ].map((item, index) => (
                            <div key={index} className="flex justify-between">
                                <p className="text-gray-600">{item.label}:</p>
                                <p className="font-medium text-gray-900">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
}

// Placeholder content components
function PreApprovedContent() { return<p className="text-gray-600">Pre-Approved Content</p>;}
function ProfileContent() { return <p className="text-gray-600">Profile Content</p>; }
function DocumentsContent() { return <p className="text-gray-600">Documents Content</p>; }
function TimelineContent() { return <p className="text-gray-600">Timeline Content</p>; }
function NotesContent() { return <p className="text-gray-600">Notes Content</p>; }
function EnquiryContent() { return <p className="text-gray-600">Enquiry Content</p>; }
function BREChecksContent() { return <p className="text-gray-600">BRE Checks Content</p>; }
