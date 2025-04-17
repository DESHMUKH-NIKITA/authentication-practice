'use client';

import Sidebar from "@/components/Sidebar";
import Layout from "@/components/Layout";
import { useRouter } from 'next/navigation'; // <-- App Router

export default function TopNavbarWithLayout() {
  const router = useRouter();
  const cards = [
    {
      title: "Source Links",
      description: "Configure custom links for user-initiated actions and interactions.",
      path: "/source-link-page",
    },
    {
      title: "Roles",
      description: "Create and manage user roles to regulate permissions and responsibilities.",
    },
    {
      title: "Access",
      description: "Control access based on loan templates and stages.",
      path: "/AccessManagement",
    },
    {
      title: "Offer Settings",
      description: "Configure ROI, tenure, and loan amount limits.",
      path: "/offer-settings",
    },
    {
      title: "Sanction Letter",
      description: "Upload and manage sample sanction letter templates.",
    },
    {
      title: "Loan Agreement",
      description: "Upload and manage sample loan agreement templates.",
    },
    {
      title: "BRE Checks",
      description: "Define and manage business rule conditions.",
    },
  ];

  return (
    <Layout>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        {/*<Sidebar />*/}

        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-gray-50">
          {/* Top Navbar */}
          <div className="flex items-center justify-between bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
            {/* Breadcrumb */}
            <div className="text-gray-800 font-semibold text-[18px]">
              Products <span className="text-gray-400 mx-1">›</span> <span className="text-gray-800">Settings</span>
            </div>

            {/* User Profile */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-600 font-bold">
                <img src="Username.png" alt="Icon" className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium text-gray-700 -ml-2">Username</span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {cards.map((card, index) => (
                <div key={index} className="bg-white border rounded-lg shadow p-3 flex flex-col justify-between">
                  <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gray-100 p-2 rounded-100">
                <img src="/Approved_loan_icons.png" alt="Icon" className="w-6 h-6 object-contain" />
                </div>

                    <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 flex-1">{card.description}</p>
                  <hr className="w-full border-t border-gray-200 my-4" />

                  <div className="-mt-2 flex justify-end" >
                <button
                  onClick={() => router.push(card.path)}
                  className="text-blue-500 text-sm font-medium hover:underline"
                >
                  View
                </button>
              </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
