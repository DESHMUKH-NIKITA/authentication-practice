export default function Navbar() {
    return (
      <div className="w-full top-0 left-0 right-0 bg-white shadow-md flex justify-between items-center px-6 py-3 h-14">
        {/* Title */}
        <h4 className="text-xl ml-67 font-semibold text-gray-800">Dashboard</h4>
  
        {/* User Section */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-600 font-bold">
            <img src="Username.png" alt="Icon" className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium text-gray-700">Username</span>
            
          </div>
        </div>
    );
  }
  