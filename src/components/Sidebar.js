import Link from 'next/link';
import { FaHome, FaBox, FaSignOutAlt } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-[#0A1128] text-white fixed flex flex-col p-4">

      {/* Logo */}
      <div className="flex items-center justify-center mb-6">
        <img src="/logo.png" alt="FinAnalyz" className="w-15" />
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-2">
        <Link href="/dashboard" className="flex items-center p-3 rounded-lg hover:bg-gray-600 transition text-white !no-underline">
          <img src="Dashboard.png" alt="Dashboard Icon" className="w-4 h-4 mr-3 text-white" /> Dashboard
        </Link>
        <Link href="/products" className="flex items-center p-3 rounded-lg hover:bg-gray-600 transition text-white !no-underline">
          <img src="Product_Dashboard.png" alt="Product Icon" className="w-4 h-4 mr-3" /> Products
        </Link>
        <Link href="/customers" className="flex items-center p-3 rounded-lg hover:bg-gray-600 transition text-white !no-underline">
          <img src="customers.png" alt="Customers Icon" className="w-6 h-6 mr-2 -ml-2" /> Customers
        </Link>
        <Link href="/rule_engine" className="flex items-center p-3 rounded-lg hover:bg-gray-600 transition text-white !no-underline">
          <img src="ruleEngine.png" alt="Rule Engine Icon" className="w-6 h-6 mr-2 -ml-2" /> Rule Engine
        </Link>
        <Link href="/account-settings" className="flex items-center p-3 rounded-lg hover:bg-gray-600 transition text-white !no-underline">
          <img src="setting.png" alt="Settings Icon" className="w-6 h-6 mr-2 -ml-2" /> Settings
        </Link>
      </nav>


      {/* Logout */}
      <button className="mt-auto flex items-center p-3 rounded-lg transition">
        <img src="Logout.png" alt="Logout Icon" className="w-4 h-4 mr-3" /> Logout
      </button>
    </div>
  );
}
