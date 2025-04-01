"use client";

import { useState } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";




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
                    <h4 className="text-lg text-sm text-gray-600 mb-4">Customer Details</h4>
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
                    <h4 className="text-lg text-sm text-gray-600 mb-4">Credit & Eligibility</h4>
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
                    <h3 className="text-lg text-sm text-gray-600 mb-4">Loan Details</h3>
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
                    <h3 className="text-lg text-sm text-gray-600 mb-4">Application Details</h3>
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
                    <h3 className="text-lg text-sm text-gray-600 mb-4">Guarantor Details</h3>
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
function PreApprovedContent() {
    const approvals = [
        { role: "Manager's Name", approver: "Loan Officer", approvedOn: "23/03/2025", status: "Approved", remarks: "-", pendingAction: "-" },
        { role: "Branch Manager", approver: "Manager's Name", approvedOn: "24/03/2025", status: "Rejected", remarks: "Insufficient income proof", pendingAction: "Awaiting document submission (from applicant)" },
        { role: "Credit Head", approver: "Manager's Name", approvedOn: "-", status: "Pending", remarks: "-", pendingAction: "Reason why pending" }
    ];

    return (
        <div className="bg-white border p-6 rounded-lg">
            <h3 className="text-lg text-sm text-gray-600 mb-4">Authorization Levels</h3>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-white border rounded-lg text-gray-700">
                            <th className="p-3 text-left">Role</th>
                            <th className="p-3 text-left">Approver’s Name</th>
                            <th className="p-3 text-left">Approved On</th>
                            <th className="p-3 text-left">Status</th>
                            <th className="p-3 text-left">Remarks</th>
                            <th className="p-3 text-left">Pending Action</th>
                            {/* <th className="p-3 text-left">Actions</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {approvals.map((approval, index) => (
                            <tr key={index} className="border rounded-lg">
                                <td className="p-3">{approval.role}</td>
                                <td className="p-3">{approval.approver}</td>
                                <td className="p-3">{approval.approvedOn}</td>
                                <td className={`p-3 text-sm text-gray-600 ${approval.status === "Approved" ? "text-green-600" : approval.status === "Rejected" ? "text-red-600" : "text-yellow-600"}`}>{approval.status}</td>
                                <td className="p-3">{approval.remarks}</td>
                                <td className="p-3">{approval.pendingAction}</td>
                                <td className="p-3 flex space-x-2">
                                    <button className="text-green-600 hover:text-green-800">
                                        <CheckCircleIcon className="h-6 w-6" />
                                    </button>
                                    <button className="text-red-600 hover:text-red-800">
                                        <XCircleIcon className="h-6 w-6" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function ProfileContent() {
    return (
        <div className="p-10 bg-white rounded-lg shadow-md">
            {/* Basic Details */}
            <h4 className="text-lg text-sm text-gray-600 mb-4">Basic Details</h4>
            <div className="grid grid-cols-3 gap-6 text-gray-700 mb-6">
                <div>
                    <label className="text-sm text-gray-600">Name</label>
                    <span className="text-lg block font-semibold">Customer Name</span>
                </div>
                <div>
                    <label className="text-sm text-gray-600">DOB</label>
                    <span className="text-lg block font-semibold">21/03/1993</span>
                </div>
                <div>
                    <label className="text-sm text-gray-600">Phone Number</label>
                    <span className="text-lg block font-semibold">1234567890</span>
                </div>
                <div>
                    <label className="text-sm text-gray-600">PAN Number</label>
                    <span className="text-lg block font-semibold">xxxxxxx</span>
                </div>
                <div>
                    <label className="text-sm text-gray-600">Aadhaar Number</label>
                    <span className="text-lg block font-semibold">xxxxxxxxxx</span>
                </div>
                <div>
                    <label className="text-sm text-gray-600">Email</label>
                    <span className="text-lg block font-semibold">email123@gmail.com</span>
                </div>
            </div>

            {/* Professional Details */}
            <h4 className="text-lg text-sm text-gray-600 mb-4">Professional Details</h4>
            <div className="grid grid-cols-3 gap-6 text-gray-700 mb-6">
                <div>
                    <label className="text-sm text-gray-600">Employment Type</label>
                    <span className="text-lg block font-semibold">Individual / Business</span>
                </div>
                <div>
                    <label className="text-sm text-gray-600">Company Name</label>
                    <span className="text-lg block font-semibold">ABC Company</span>
                </div>
                <div>
                    <label className="text-sm text-gray-600">Monthly Income</label>
                    <span className="text-lg block font-semibold">₹ 2,00,000.00</span>
                </div>
                <div>
                    <label className="text-sm text-gray-600">Total Work Experience</label>
                    <span className="text-lg block font-semibold">6 years</span>
                </div>
                <div>
                    <label className="text-sm text-gray-600">Company Email</label>
                    <span className="text-lg block font-semibold">company123@gmail.com</span>
                </div>
            </div>

            {/* Address Details */}
            <h4 className="text-lg text-sm text-gray-600 mb-4">Address Details</h4>
            <div className="grid grid-cols-3 gap-6 text-gray-700">
                <div>
                    <label className="text-sm text-gray-600">Permanent Address</label>
                    <span className="text-lg block font-semibold">
                        Flat No. 12B, ABC Apartments<br />
                        MG Road, Near City Mall<br />
                        Bengaluru, Karnataka - 560001<br />
                        India
                    </span>
                </div>
                <div>
                    <label className="text-sm text-gray-600">Corresponding Address</label>
                    <span className="text-lg block font-semibold">
                        Flat No. 12B, ABC Apartments<br />
                        MG Road, Near City Mall<br />
                        Bengaluru, Karnataka - 560001<br />
                        India
                    </span>
                </div>
                <div>
                    <label className="text-sm text-gray-600">Work Address</label>
                    <span className="text-lg block font-semibold">
                        Flat No. 12B, ABC Apartments<br />
                        MG Road, Near City Mall<br />
                        Bengaluru, Karnataka - 560001<br />
                        India
                    </span>
                </div>
            </div>
        </div>
    );

}
function DocumentsContent() { return <p className="text-gray-600">Documents Content</p>; }

function TimelineContent() {
    const eventLogs = [
        {
            date: "21/03/2025",
            time: "10:12",
            stage: "Application Submitted",
            inputBy: "User",
            details: "Form filled via portal",
            status: "Completed",
        },
        {
            date: "21/03/2025",
            time: "17:12",
            stage: "KYC Verification",
            inputBy: "Credit Manager",
            details: "KYC documents uploaded",
            status: "In-progress",
        },
        {
            date: "21/03/2025",
            time: "17:12",
            stage: "Document Submission",
            inputBy: "User",
            details: "ID proof, Income Proof uploaded",
            status: "Pending",
        },
        {
            date: "21/03/2025",
            time: "10:12",
            stage: "Application Submitted",
            inputBy: "User",
            details: "Form filled via portal",
            status: "Completed",
        },
        {
            date: "21/03/2025",
            time: "17:12",
            stage: "KYC Verification",
            inputBy: "Credit Manager",
            details: "KYC documents uploaded",
            status: "In-progress",
        },
        {
            date: "21/03/2025",
            time: "17:12",
            stage: "Document Submission",
            inputBy: "User",
            details: "ID proof, Income Proof uploaded",
            status: "Pending",
        },
    ];

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-4">Detailed Event Log</h4>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-white border text-left text-gray-700 font-semibold rounded-lg">
                            <th className="p-3">Date</th>
                            <th className="p-3">Time</th>
                            <th className="p-3">Stage</th>
                            <th className="p-3">Input By</th>
                            <th className="p-3">Details</th>
                            <th className="p-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eventLogs.map((event, index) => (
                            <tr key={index} className="border rounded-lg"> 
                                <td className="p-3">{event.date}</td>
                                <td className="p-3">{event.time}</td>
                                <td className="p-3">{event.stage}</td>
                                <td className="p-3">{event.inputBy}</td>
                                <td className="p-3">{event.details}</td>
                                <td className="p-3">{event.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
function NotesContent() { return <p className="text-gray-600">Notes Content</p>; }
function EnquiryContent() { return <p className="text-gray-600">Enquiry Content</p>; }
function BREChecksContent() { return <p className="text-gray-600">BRE Checks Content</p>; }
