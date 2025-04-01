"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function Layout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar with collapse functionality */}
      <Sidebar onToggle={toggleSidebar} isCollapsed={isCollapsed} />

      <div className="flex-1 flex flex-col transition-all duration-300">
        {/* Main Content */}
        <div
          className={`p-1 bg-gray-100 min-h-screen transition-all duration-300
            ${isCollapsed ? "ml-20" : "ml-64"}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
