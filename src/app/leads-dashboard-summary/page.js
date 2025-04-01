// import Sidebarnew from "@/components/sidebarnew";
import CustomerLoanDetails from "@/components/CustomerLoanDetails";
import CustomerLoanTabs from "@/components/CustomerLoanTabs";
import Link from "next/link";

export default function LeadsDashboard() {
  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      {/* <Sidebarnew /> */}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="w-full bg-white shadow-md flex justify-between items-center px-6 py-3 h-14">
          {/* Title */}
          <h4 className="text-lg font-semibold text-gray-800">
            <Link href="/products" className="text-black no-underline-custom"> Products </Link>
            &gt; Leads Dashboard
          </h4>

          {/* User Section */}
          <div className="flex items-center space-x-2">
            <img src="/Username.png" alt="User Icon" className="w-6 h-6 rounded-full" />
            <span className="text-sm font-medium text-gray-700">Username</span>
          </div>
        </div>

        {/* Action Buttons with Hover Tooltip */}
        <div className="flex justify-end items-center gap-2 bg-gray-100 pt-3">
          {/* Button - Documents */}
          <div className="relative flex flex-col items-center group">
            <button className="bg-white p-2 !rounded-md border border-gray-300 hover:bg-blue-500">
              <img src="Sanction_letter_blue.png" alt="Documents" className="w-4 h-4" />
            </button>
            <span className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs rounded px-2 py-1">
              Sanction Letter
            </span>
          </div>

          {/* Button - Save */}
          <div className="relative flex flex-col items-center group">
            <button className="bg-white p-2 !rounded-md border border-gray-300 hover:bg-blue-500">
              <img src="agreement_letter_blue.png" alt="Save" className="w-4 h-4" />
            </button>
            <span className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs rounded px-2 py-1">
              Agreement Letter
            </span>
          </div>

          {/* Button - Reports */}
          <div className="relative flex flex-col items-center group">
            <button className="bg-white p-2 !rounded-md border border-gray-300 hover:bg-blue-500">
              <img src="Customer_report_blue.png" alt="Reports" className="w-4 h-4" />
            </button>
            <span className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs rounded px-2 py-1">
              Customer Report
            </span>
          </div>

          {/* Navigation Buttons */}
          <button className="px-3 py-1 text-sm font-semibold !rounded-md border border-gray-300 bg-white hover:bg-gray-100">
          <span> &lt;</span> Previous
          </button>
          <button className="px-3 py-1 text-sm font-semibold !rounded-md border border-gray-300 bg-white hover:bg-gray-100">
          Next <span> &gt;</span>
          </button>

          {/* Reject Button */}
          <button className="px-3 py-1 text-sm !rounded-md bg-red-500 text-white hover:bg-red-600">
            Reject
          </button>

        </div>



        {/* Main Content Section */}
        <div className="flex flex-col space-y-0 p-0">
          <CustomerLoanDetails />
          <CustomerLoanTabs />
        </div>
      </div>
    </div>

  );
}
