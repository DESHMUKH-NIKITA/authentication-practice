'use client';
import { useRouter, usePathname } from 'next/navigation';

import { useState, useEffect } from 'react';

export default function LeftMenu() {
  const router = useRouter();
  const pathname = usePathname();  // Get current route

  // Function to handle navigation
  const navigateTo = (path) => {
    router.push(path);
  };

  // Menu items array
  const menuItems = [
    { name: 'Organization', path: '/account-settings' },
    { name: 'User Management', path: '/user-management' },
    { name: 'Loan Stages', path: '/loan-stages' },
    { name: 'Communication Template', path: '/communication-template' },
    { name: 'APIs', path: '/apis' },
  ];

  const userManagementRoutes = ['/user-management', '/add-new-user', '/add-new-role'];

  return (
    <div className="w-1/1.8 bg-white rounded-lg shadow p-4 mr-6 container-left">
      <ul className="space-y-2">
        {menuItems.map((item) => {
          const isActive = 
            pathname === item.path || 
            (item.path === '/user-management' && userManagementRoutes.includes(pathname));

          return (
            <li
              key={item.path}
              onClick={() => navigateTo(item.path)}
              className={`cursor-pointer transition px-4 py-2 rounded-lg ${
                isActive
                  ? 'bg-blue-100 text-black-600 font-semibold'  // Active item with blue background
                  : 'text-gray-600 hover:text-blue-600 hover:bg-black-50 transition'  // Inactive with hover effect
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
