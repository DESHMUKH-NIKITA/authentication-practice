import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

export default function Layout({ children }) {
  return (
    <div className="flex">
      {/* Sidebar (Full Height) */}
      <Sidebar />

      <div className="flex-1">
        {/* Navbar */}
        <Navbar />

      {/* Main Content (Takes Remaining Space) */}
      <div className="ml-64 flex-1 p-6 bg-gray-100 min-h-screen">
        {children}
      </div>
    </div>
    </div>
  );
}
