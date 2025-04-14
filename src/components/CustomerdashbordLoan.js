"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { MoreHorizontal } from "lucide-react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

const StatusDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState("Change Status");

    const statuses = [
        { label: "Under Review", color: "text-yellow-500" },
        { label: "Approved", color: "text-green-500" },
        { label: "Rejected", color: "text-red-500" },
        { label: "Pending Document", color: "text-orange-500" },
        { label: "Disbursed", color: "text-black" },
    ];

    const handleSelect = (status) => {
        setSelectedStatus(status.label);
        setIsOpen(false);
    };

    return (
        <div className="relative w-48">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md flex justify-between items-center"
            >
                <span>{selectedStatus}</span>
                <span>▼</span>
            </button>

            {isOpen && (
                <ul className="absolute w-full mt-1 border border-gray-300 bg-white rounded-md shadow-md z-10">
                    {statuses.map((status) => (
                        <li
                            key={status.label}
                            onClick={() => handleSelect(status)}
                            className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${status.color}`}
                        >
                            {status.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default function CustomerLoanTabs() {
    const [activeTab, setActiveTab] = useState("Summary");

    const tabs = [
        "Profile",
        "Leads",
        "Documents",
        "Timeline",
        "Notes",
        "Enquiry",
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
                {activeTab === "Profile" && <ProfileContent />}
                {activeTab === "Leads" && <LeadsContent />}
                {activeTab === "Documents" && <DocumentsContent />}
                {activeTab === "Timeline" && <TimelineContent />}
                {activeTab === "Notes" && <NotesContent />}
                {activeTab === "Enquiry" && <EnquiryContent />}
            </div>
        </div>
    );
}

function LeadsContent() {
    return (
      <div className="p-6">
        <div className="border rounded-xl bg-white shadow-sm p-4">
          <h2 className="text-xl font-semibold mb-4">Leads Summary</h2>
          <div className="bg-white border rounded-lg overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-6 py-4 font-medium text-gray-900">Lead ID</th>
                  <th className="px-6 py-4 font-medium text-gray-900">Product Name</th>
                  <th className="px-6 py-4 font-medium text-gray-900">Requested Loan Amount</th>
                  <th className="px-6 py-4 font-medium text-gray-900">Approved Loan Amount</th>
                  <th className="px-6 py-4 font-medium text-gray-900">Status</th>
                  <th className="px-6 py-4 font-medium text-gray-900">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  "Approved",
                  "Registered",
                  "Disbursed",
                  "Rejected",
                  "Registered",
                  "Disbursed",
                  "Rejected",
                ].map((status, index) => (
                  <tr className="border-b" key={index}>
                    <td className="px-6 py-4 text-gray-700">1001</td>
                    <td className="px-6 py-4 text-gray-700">Personal Loan Secured</td>
                    <td className="px-6 py-4 text-gray-700">₹5,00,000</td>
                    <td className="px-6 py-4 text-gray-700">₹4,00,000</td>
                    <td className="px-6 py-4 text-gray-700">{status}</td>
                    <td className="px-6 py-4 text-gray-600 cursor-pointer hover:underline">
                      View Details
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
                    <span className="text-[15px] block font-semibold">Customer Name</span>
                </div>
                <div>
                    <label className="text-sm text-gray-600">DOB</label>
                    <span className="text-[15px] block font-semibold">21/03/1993</span>
                </div>
                <div>
                    <label className="text-sm text-gray-600">Phone Number</label>
                    <span className="text-[15px] block font-semibold">1234567890</span>
                </div>
                <div>
                    <label className="text-sm text-gray-600">PAN Number</label>
                    <span className="text-[15px] block font-semibold">xxxxxxx</span>
                </div>
                <div>
                    <label className="text-sm text-gray-600">Aadhaar Number</label>
                    <span className="text-[15px] block font-semibold">xxxxxxxxxx</span>
                </div>
                <div>
                    <label className="text-sm text-gray-600">Email</label>
                    <span className="text-[15px] block font-semibold">email123@gmail.com</span>
                </div>
            </div>

            {/* Professional Details */}
            <h4 className="text-lg text-sm text-gray-600 mb-4">Professional Details</h4>
            <div className="grid grid-cols-3 gap-6 text-gray-700 mb-6">
                <div>
                    <label className="text-sm text-gray-600">Employment Type</label>
                    <span className="text-[15px] block font-semibold">Individual / Business</span>
                </div>
                <div>
                    <label className="text-sm text-gray-600">Company Name</label>
                    <span className="text-[15px] block font-semibold">ABC Company</span>
                </div>
                <div>
                    <label className="text-sm text-gray-600">Monthly Income</label>
                    <span className="text-[15px] block font-semibold">₹ 2,00,000.00</span>
                </div>
                <div>
                    <label className="text-sm text-gray-600">Total Work Experience</label>
                    <span className="text-[15px] block font-semibold">6 years</span>
                </div>
                <div>
                    <label className="text-sm text-gray-600">Company Email</label>
                    <span className="text-[15px] block font-semibold">company123@gmail.com</span>
                </div>
            </div>

            {/* Address Details */}
            <h4 className="text-lg text-sm text-gray-600 mb-4">Address Details</h4>
            <div className="grid grid-cols-3 gap-6 text-gray-700">
                <div>
                    <label className="text-sm text-gray-600">Permanent Address</label>
                    <span className="text-[15px] block font-semibold">
                        Flat No. 12B, ABC Apartments<br />
                        MG Road, Near City Mall<br />
                        Bengaluru, Karnataka - 560001<br />
                        India
                    </span>
                </div>
                <div>
                    <label className="text-sm text-gray-600">Corresponding Address</label>
                    <span className="text-[15px] block font-semibold">
                        Flat No. 12B, ABC Apartments<br />
                        MG Road, Near City Mall<br />
                        Bengaluru, Karnataka - 560001<br />
                        India
                    </span>
                </div>
                <div>
                    <label className="text-sm text-gray-600">Work Address</label>
                    <span className="text-[15px] block font-semibold">
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

function DocumentsContent() {
    // 📌 **Documents Table UI (Exactly as Image)**
   
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
}

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
        <div className="mt-6 bg-white border rounded-lg p-3">
            <h4 className="text-lg font-semibold mb-4 ">Detailed Event Log</h4>

            <div className="overflow-x-auto bg-white border rounded-lg">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-white text-gray-700 font-semibold border rounded-lg">
                            <th className="p-3 text-left">Date</th>
                            <th className="p-3 text-left">Time</th>
                            <th className="p-3 text-left">Stage</th>
                            <th className="p-3 text-left">Input By</th>
                            <th className="p-3 text-left">Details</th>
                            <th className="p-3 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eventLogs.map((event, index) => (
                            <tr key={index} className="border bg-white transition rounded-lg">
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

function EnquiryContent() {

    const [search, setSearch] = useState("");
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="p-6 bg-white min-h-screen border rounded-lg">
            {/* Header */}
            <h4 className="text-xl font-semibold mb-4">Enquiry Tracking & Resolution</h4>

            {/* Show Enquiry Table OR Form based on state */}
            {showForm ? (
                // Enquiry Form
                <div className="bg-white p-3 border rounded-lg  w-3/7 mx-auto">
                    {/* Back Button */}
                    <button
                        onClick={() => setShowForm(false)}
                        className="mb-4 text-blue-600 flex items-center"
                    >
                        ← Back
                    </button>

                    <h4 className="text-2xl font-bold text-center mb-4">Loan Enquiry Form</h4>

                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <label className="block font-medium">First Name</label>
                            <input type="text" className="w-full border px-3 py-2 rounded-md" placeholder="First Name" />
                        </div>
                        <div>
                            <label className="block font-medium">Last Name</label>
                            <input type="text" className="w-full border px-3 py-2 rounded-md" placeholder="Last Name" />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="block font-medium">Phone Number</label>
                        <input type="text" className="w-full border px-3 py-2 rounded-md" placeholder="1234567890" />
                    </div>

                    <div className="mt-4">
                        <label className="block font-medium">URL</label>
                        <input type="text" className="w-full border px-3 py-2 rounded-md" placeholder="url to upload the data/document" />
                    </div>

                    <div className="mt-4">
                        <label className="block font-medium">Subject</label>
                        <input type="text" className="w-full border px-3 py-2 rounded-md" placeholder="Income Proof Submission" />
                    </div>

                    <div className="mt-4">
                        <label className="block font-medium">Description</label>
                        <textarea className="w-full border px-3 py-2 rounded-md" placeholder="Enter description"></textarea>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                            Submit Enquiry
                        </button>
                    </div>
                </div>
            ) : (
                // Enquiry Table
                <>
                    {/* Search & Create Enquiry */}
                    <div className="flex items-center justify-between w-full mb-4">
                        {/* Search Bar */}
                        <div className="relative w-2/3">
                            <input
                                type="text"
                                placeholder="Search by Request ID, Action or by who approved"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
                        </div>

                        {/* Create Enquiry Button */}
                        <button
                            onClick={() => setShowForm(true)}
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 ml-4"
                        >
                            Create Enquiry
                        </button>
                    </div>

                    {/* Table */}
                    <div className="bg-white shadow-md rounded-md overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white text-gray-700 border rounded-lg">
                                    <th className="px-4 py-3">Req.ID</th>
                                    <th className="px-4 py-3">Date</th>
                                    <th className="px-4 py-3">Reason</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3">Action</th>
                                    <th className="px-4 py-3">Approved By</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array(6)
                                    .fill()
                                    .map((_, index) => (
                                        <tr key={index} className="border text-sm text-gray-600">
                                            <td className="px-4 py-3">Req001</td>
                                            <td className="px-4 py-3">21/03/2025</td>
                                            <td className="px-4 py-3">Income proof required</td>
                                            <td className="px-4 py-3">Pending from user</td>
                                            <td className="px-4 py-3">
                                                <StatusDropdown />
                                            </td>
                                            <td className="px-4 py-3">Manager Name</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    );
}

