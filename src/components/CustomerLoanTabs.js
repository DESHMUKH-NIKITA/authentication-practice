"use client";

import { useState } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { MoreHorizontal } from "lucide-react";


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


// 📌 **Documents Table UI (Exactly as Image)**
const DocumentsContent = () => {
    const documents = [
        { name: "Photograph", uploadedOn: "21/03/2025", status: "Submitted", remarks: "Verified" },
        { name: "PAN Card", uploadedOn: "21/03/2025", status: "Pending", remarks: "Not Verified" }
    ];

    return (
        <div className="bg-white p-6 rounded-lg ">
            <h4 className="text-xl font-semibold mb-4">Document Submission</h4>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="border-b text-left text-black-600">
                        <th className="py-2 px-4">Document</th>
                        <th className="py-2 px-4">Uploaded On</th>
                        <th className="py-2 px-4">Status</th>
                        <th className="py-2 px-4">Remarks</th>
                        <th className="py-2 px-4 text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {documents.map((doc, index) => (
                        <tr key={index} className="border-b text-gray-700">
                            <td className="py-3 px-4">{doc.name}</td>
                            <td className="py-3 px-4">{doc.uploadedOn}</td>
                            <td className="py-3 px-4">{doc.status}</td>
                            <td className="py-3 px-4">{doc.remarks}</td>
                            <td className="py-3 px-4 text-center">
                                <button className="bg-blue-500 text-white px-3 py-1 rounded mr-3">Request Upload</button>
                                <button className="bg-gray-200 px-3 py-1 rounded border">View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};



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
//import { useState } from "react";

function NotesContent() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [notes, setNotes] = useState([]);
    const [activeDropdown, setActiveDropdown] = useState(null);

    // Function to Add a New Note
    const addNewNote = () => {
        const newNote = {
            id: notes.length + 1,
            author: "Manager Name / Role",
            date: new Date().toLocaleString(),
            message: "Reviewed the applicant’s income documents. Salary slips verified for the last 3 months. The bank statement shows consistent deposits, but there is a recent large withdrawal. Need clarification from the applicant on the purpose of this transaction before final approval.",
            comments: [],
            showComments: false,
        };
        setNotes([newNote, ...notes]);
    };

    // Function to toggle dropdown
    const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    return (
        <div className="border-2 border-gray-300 shadow-lg rounded-xl p-4 flex bg-white relative h-[903px] overflow-hidden">
            {/* Sidebar */}
            <div 
                className={`bg-[#d0ddea] p-6 border-r border-gray-300 rounded-md h-full transition-all duration-300 ${isCollapsed ? 'w-0 overflow-hidden' : 'w-[470px]'}`}
            >
                {!isCollapsed && (
                    <>
                        {/* Search Bar */}
                        <div className="mb-4 relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full p-2 pl-10 border rounded-xl shadow-sm bg-white"
                            />
                            <span className="absolute right-6 top-2 text-gray-400">🔍</span>
                        </div>

                        {/* New Note Button */}
                        <button 
                            className="w-[130px] bg-blue-600 text-white py-2 rounded flex items-center justify-center mb-6"
                            onClick={addNewNote}
                        >
                            ✎ New Note
                        </button>

                        {/* Inbox Section */}
                        <div className="flex justify-between items-center mb-4 mt-5">
                            <h2 style={{ fontSize: "1.2rem", fontWeight: "600", position: "relative", right: "5px" }}>
                                Inbox
                            </h2>

                            <select className="bg-transparent cursor-pointer text-sm border p-1 rounded-md">
                                <option>All</option>
                            </select>
                        </div>

                        {/* Inbox Messages */}
                        <div className="mb-4 -mt-5 overflow-y-auto">
                            {[...Array(3)].map((_, index) => (
                                <div key={index} className="border p-3 bg-white mb-2 shadow-md border-blue-500 rounded-md">
                                    <div className="flex justify-between text-sm">
                                        <span>Manager Name</span>
                                        <span>March {21 - index}, 2025</span>
                                    </div>
                                    <p className="text-gray-600 text-sm mt-1">
                                        Reviewed the applicant’s income documents. Salary slips verified for the last 3 months.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col p-6 relative overflow-hidden">
                {/* Notes Section */}
                <div className="overflow-y-auto flex-1 max-h-[700px]">
                    {notes.length === 0 ? (
                        <p className="text-gray-500 text-center mb-4">
                            <span className="font-bold">You don’t have any notes yet</span><br />
                            Start typing your notes below
                        </p>
                    ) : (
                        notes.map((note, index) => (
                            <div key={note.id} className="mb-6 relative">
                                {/* Note Box */}
                                <div className="border p-4 bg-gray-100 shadow-md rounded-lg">
                                    <div className="flex justify-between text-sm">
                                        <span className="font-bold">{note.author}</span>
                                        <span>{note.date}</span>
                                    </div>
                                    <p className="text-gray-600 text-sm mt-2">{note.message}</p>
                                </div>

                                {/* More Options (Dropdown Button) */}
                                <div className="absolute top-2 right-2">
                                    <MoreHorizontal
                                        className="w-5 h-5 text-gray-500 cursor-pointer hover:text-blue-600"
                                        onClick={() => toggleDropdown(index)}
                                    />

                                    {/* Dropdown Menu */}
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
                                </div>

                                {/* Add Comments Button */}
                                <div className="flex justify-end">
                                    <button 
                                        className="w-[130px] bg-gray-600 text-white py-2 rounded flex items-center justify-center mb-6 mt-2"
                                        onClick={addNewNote} 
                                    >
                                        Add Comments
                                    </button>
                                </div>

                            </div>
                        ))
                    )}
                </div>

                {/* Input Field */}
                <div className="relative w-full mt-6 pt-4 bg-white sticky bottom-0">
                    <input 
                        type="text" 
                        placeholder="Type your notes here..." 
                        className="w-full p-3 border rounded-xl shadow-sm bg-white pr-12"
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">📎</span>
                </div>
            </div>
        </div>
    );
}



  
  
function EnquiryContent() { return <p className="text-gray-600">Enquiry Content</p>; }
function BREChecksContent() { return <p className="text-gray-600">BRE Checks Content</p>; }
