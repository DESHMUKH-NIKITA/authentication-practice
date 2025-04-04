"use client";

import Link from "next/link";

export default function Sidebar({ onToggle, isCollapsed }) {
  return (
    <div
      className={`h-screen bg-[#0A1128] text-white fixed flex flex-col transition-all duration-300 
      ${isCollapsed ? "w-20" : "w-64"}`}
    >
      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className="p-2 m-2 rounded-full bg-gray-600 hover:bg-gray-700 transition self-end"
      >
        {/* SVG Arrow */}
        {isCollapsed ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        )}
      </button>

      {/* Logo */}
      <div className={`flex items-center justify-center mb-6 ${isCollapsed ? "p-1" : "p-2"}`}>
        <img src="/logo.png" alt="FinAnalyz" className={`transition ${isCollapsed ? "w-8" : "w-20"}`} />
        {!isCollapsed && <span className="ml-2 text-lg">FinAnalyz</span>}
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-8">
        <Link href="/dashboard" className="flex items-center p-3 rounded-lg hover:bg-gray-600 transition text-white !no-underline">
          <img src="/Dashboard.png" alt="Dashboard Icon" className="w-6 h-6" />
          {!isCollapsed && <span className="ml-2">Dashboard</span>}
        </Link>

        <Link href="/products" className="flex items-center p-3 rounded-lg hover:bg-gray-600 transition text-white !no-underline">
          <img src="/Product_Dashboard.png" alt="Product Icon" className="w-6 h-6" />
          {!isCollapsed && <span className="ml-2">Products</span>}
        </Link>

        <Link href="/customers" className="flex items-center p-3 rounded-lg hover:bg-gray-600 transition text-white !no-underline">
          <img src="/customers.png" alt="Customers Icon" className="w-6 h-6" />
          {!isCollapsed && <span className="ml-2">Customers</span>}
        </Link>

        <Link href="/rule_engine" className="flex items-center p-3 rounded-lg hover:bg-gray-600 transition text-white !no-underline">
          <img src="/ruleEngine.png" alt="Rule Engine Icon" className="w-6 h-6" />
          {!isCollapsed && <span className="ml-2">Rule Engine</span>}
        </Link>

        <Link href="/account-settings" className="flex items-center p-3 rounded-lg hover:bg-gray-600 transition text-white !no-underline">
          <img src="/setting.png" alt="Settings Icon" className="w-6 h-6" />
          {!isCollapsed && <span className="ml-2">Settings</span>}
        </Link>
      </nav>

      {/* Logout */}
      <button className="mt-auto flex items-center p-2 rounded-lg transition hover:bg-gray-600">
        <img src="/Logout.png" alt="Logout Icon" className="w-6 h-6" />
        {!isCollapsed && <span className="ml-2">Logout</span>}
      </button>
    </div>
  );
}
