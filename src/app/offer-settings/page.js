'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Layout from '@/components/Layout';
import SettingsSidebar from '@/components/SettingsSidebar';

const LabelInput = ({ label, placeholder, ...props }) => (
  <div className="space-y-1 w-full">
    <label className="block text-xs font-medium text-gray-700">{label}</label>
    <input
      {...props}
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded-md px-2.5 py-1.5 text-sm placeholder-gray-400 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

const LabelSelect = ({ label, children, ...props }) => (
  <div className="space-y-1 w-full">
    <label className="block text-xs font-medium text-gray-700">{label}</label>
    <select
      {...props}
      className="w-full border border-gray-300 rounded-md px-2.5 py-1.5 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {children}
    </select>
  </div>
);

const CriteriaToggle = ({ enabled, onClick }) => (
  <div className="flex justify-between items-center pt-1">
    <span className="text-xs font-medium text-gray-700">Add Criteria</span>
    <button
      onClick={onClick}
      className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors ${
        enabled ? 'bg-blue-500' : 'bg-gray-300'
      }`}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full transform transition-transform ${
          enabled ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  </div>
);

export default function OfferSettings() {
  const [criteria, setCriteria] = useState({
    fees: false,
    loanAmount: false,
    loanTenure: false,
    interestRate: false,
  });

  const handleToggle = (key) => {
    setCriteria((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const Section = ({ title, keyName, children }) => (
    <div className="bg-white rounded-xl shadow-sm p-5 space-y-4 text-sm">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

      {children}

      <CriteriaToggle enabled={criteria[keyName]} onClick={() => handleToggle(keyName)} />

      {criteria[keyName] && (
        <>
          {title !== 'Fees' && (
            <LabelSelect label="Employment Type">
              <option>Individual</option>
              <option>Salaried</option>
              <option>Self-Employed</option>
            </LabelSelect>
          )}
          <div className="flex gap-2">
            <LabelInput label="Age Min" placeholder="Min" />
            <LabelInput label="Age Max" placeholder="Max" />
          </div>
          <div className="flex gap-2">
            <LabelInput label="Income Min" placeholder="Min" />
            <LabelInput label="Income Max" placeholder="Max" />
          </div>
          <div className="flex gap-2">
            <LabelInput label="Credit Score Min" placeholder="Min" />
            <LabelInput label="Credit Score Max" placeholder="Max" />
          </div>
        </>
      )}

      <button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded-lg text-sm font-medium">
        Add {title}
      </button>
    </div>
  );

  return (
    <Layout>
      {/* Topbar */}
      <div className="w-full h-16 bg-white flex items-center justify-between px-6 shadow-sm">
        <h5 className="text-sm font-medium text-gray-600">
          Product &gt; Settings &gt;{' '}
          <span className="text-gray-900 font-semibold">Offer Settings</span>
        </h5>
        <div className="flex items-center gap-2">
          <img src="/Username.png" alt="User Icon" className="w-9 h-9 rounded-full object-cover" />
          <span className="text-sm font-medium text-gray-800">Username</span>
        </div>
      </div>

      {/* Main */}
      <div className="flex min-h-[calc(100vh-4rem)] bg-[#f5f7fb]">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 border-r border-gray-200 bg-white">
          <SettingsSidebar />
        </aside>

        {/* Content */}
        <div className="flex-1 bg-[#f5f7fb] p-6">
          <Link href="/lead-dashboard" className="inline-flex items-center text-blue-600 text-sm mb-4">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Leads
          </Link>

          <h4 className="text-2xl font-semibold mb-6">Offer Settings</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-start">
            <Section title="Fees" keyName="fees">
              <LabelInput label="Fee Name" placeholder="Enter Fee Name" />
              <LabelInput label="Fee %" placeholder="Enter Fee %" />
              <LabelSelect label="Type">
                <option>Fixed</option>
                <option>Percentage</option>
              </LabelSelect>
              <LabelInput label="GST %" placeholder="Enter GST %" />
            </Section>

            <Section title="Loan Amount" keyName="loanAmount">
              <LabelInput label="Min Amount" placeholder="Enter min amount" />
              <LabelInput label="Max Amount" placeholder="Enter max amount" />
            </Section>

            <Section title="Loan Tenure" keyName="loanTenure">
              <LabelInput label="Min Tenure (Months)" placeholder="Enter min tenure" />
              <LabelInput label="Max Tenure (Months)" placeholder="Enter max tenure" />
            </Section>

            <Section title="Interest Rate" keyName="interestRate">
              <LabelInput label="Interest Rate %" placeholder="Enter rate %" />
              <LabelSelect label="Duration">
                <option>Monthly</option>
                <option>Quarterly</option>
                <option>Yearly</option>
              </LabelSelect>
            </Section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
