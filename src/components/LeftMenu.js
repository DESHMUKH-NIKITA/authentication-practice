'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function LeftMenu() {
  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState(pathname);

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  const handleNavigation = (path) => {
    router.push(path);
    setActive(path);
  };

  const menuItems = [
    { name: 'Organization', path: '/account-settings' },
    { name: 'User Management', path: '/user-management' },
    { name: 'Loan Stages', path: '/loan-stages' },
    { name: 'Communication Template', path: '/communication-template' },
    { name: 'APIs', path: '/apis' },
  ];

  return (
    <div className="w-1/3 bg-white rounded-lg shadow p-4 mr-6 ml-60">
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li
            key={item.path}
            onClick={() => handleNavigation(item.path)}
            className={`cursor-pointer ${
              active === item.path
                ? 'text-blue-500 font-bold'
                : 'text-gray-600 hover:text-blue-500'
            }`}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
