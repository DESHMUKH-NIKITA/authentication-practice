'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function LeftMenu() {
  const router = useRouter();
  const pathname = usePathname(); // Get current route

  // Function to handle navigation
  const navigateTo = (path) => {
    router.push(path);
  };

  // Menu items array
  const menuItems = [
    { name: 'Source Links', path: '/source-link-page' },
    { name: 'Roles', path: '/role' },
    { name: 'Access', path: '/AccessManagement' },
    { name: 'Offer Settings', path: '/offer-settings' },
    { name: 'Sanction Letter', path: '/sanction-letter' },
    { name: 'Loan Agreement', path: '/loan-agreement' },
    { name: 'BRE Checks', path: '/bre-check' },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-2 mr-2 ml-2 w-[240px] h-[687px]">
      <ul className="space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <li
              key={item.path}
              onClick={() => navigateTo(item.path)}
              className={`cursor-pointer px-4 py-2 rounded-lg transition whitespace-nowrap ${
                isActive
                  ? 'bg-blue-100 text-black font-semibold'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
              }`}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
