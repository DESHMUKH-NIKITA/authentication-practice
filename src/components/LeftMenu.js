'use client';
import Link from 'next/link';


export default function LeftMenu() {
  return (
    <div className="w-1/4 bg-white rounded-lg shadow p-4 mr-6 ml-60">
      <ul className="space-y-4">
        <li className="text-blue-500 font-semibold">Organization</li>
        <li className="text-gray-600 cursor-pointer hover:text-blue-500">User Management</li>
        <Link href="/loan-stages"><li className="text-gray-600 cursor-pointer hover:text-blue-500">Loan Stages</li></Link>
        <li className="text-gray-600 cursor-pointer hover:text-blue-500">Communication Template</li>
        <li className="text-gray-600 cursor-pointer hover:text-blue-500">APIs</li>
      </ul>
    </div>
  );
}
