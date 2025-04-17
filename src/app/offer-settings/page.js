'use client';

import SettingsSidebar from '@/components/SettingsSidebar';
import Layout from '@/components/Layout';
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from 'react';

export default function OfferSettings() {
  const [fees, setFees] = useState({
    feeName: '',
    feePercent: '',
    type: 'Fixed',
    gst: '',
    employmentType: 'Individual',
    ageMin: '',
    ageMax: '',
    incomeMin: '',
    incomeMax: '',
    creditMin: '',
    creditMax: '',
    criteria: false,
  });

  const [criteriaLoanAmountEnabled, setCriteriaLoanAmountEnabled] = useState(false);
  const [criteriaLoanTenureEnabled, setCriteriaLoanTenureEnabled] = useState(false);

  const LabelInput = ({ label, placeholder, ...props }) => (
    <div className="space-y-1 w-full">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        {...props}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );

  const LabelSelect = ({ label, children, ...props }) => (
    <div className="space-y-1 w-full">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <select
        {...props}
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {children}
      </select>
    </div>
  );

  const CriteriaToggle = ({ enabled, onClick }) => (
    <div className="flex justify-between items-center pt-2">
      <label className="text-sm font-medium text-gray-700">Criteria</label>
      <button
        onClick={onClick}
        className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors ${
          enabled ? 'bg-blue-500' : 'bg-gray-300'
        }`}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full transform transition-transform ${
            enabled ? 'translate-x-4' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );

  return (
    <Layout>
      {/* Topbar */}
      <div className="w-full h-16 bg-white flex items-center justify-between px-6">
        <h5 className="text-sm font-medium text-gray-600">
          Product &gt; Settings &gt; <span className="text-gray-900 font-semibold">Offer Settings</span>
        </h5>
        <div className="flex items-center gap-2">
          <img src="/Username.png" alt="User Icon" className="w-9 h-9 rounded-full object-cover" />
          <span className="text-sm font-medium text-gray-800">Username</span>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex min-h-[calc(100vh-4rem)] bg-[#f5f7fb]">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 bg-[#f5f7fb]">
          <SettingsSidebar />
        </aside>

        {/* Content */}
        <div className="flex-1 bg-gray-50 p-6">
          <Link href="/lead-dashboard" className="inline-flex items-center text-blue-600 text-sm mb-4">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Leads
          </Link>

          <h4 className="text-2xl font-semibold mb-6">Offer Settings</h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Fees */}
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Fees</h2>
              <div className="space-y-4 text-sm">
                <LabelInput label="Fee Name" placeholder="Enter Fee Name" />
                <LabelInput label="Fee %" placeholder="Enter Fee Percentage" />
                <LabelSelect label="Type">
                  <option>Fixed</option>
                  <option>Percentage</option>
                </LabelSelect>
                <LabelInput label="GST %" placeholder="Enter GST %" />

                <CriteriaToggle
                  enabled={fees.criteria}
                  onClick={() => setFees((prev) => ({ ...prev, criteria: !prev.criteria }))}
                />

                {fees.criteria && (
                  <>
                    <LabelSelect label="Employment Type">
                      <option>Individual</option>
                      <option>Business</option>
                    </LabelSelect>

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

                <button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded-md mt-4">
                  Add Fees
                </button>
              </div>
            </div>

            {/* Loan Amount */}
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Loan Amount</h2>
              <div className="space-y-4 text-sm">
                <LabelInput label="Min Amount" placeholder="Enter minimum amount" />
                <LabelInput label="Max Amount" placeholder="Enter maximum amount" />

                <CriteriaToggle
                  enabled={criteriaLoanAmountEnabled}
                  onClick={() => setCriteriaLoanAmountEnabled((prev) => !prev)}
                />

                {criteriaLoanAmountEnabled && (
                  <>
                    <LabelSelect label="Employment Type">
                      <option>Individual</option>
                      <option>Salaried</option>
                      <option>Self-Employed</option>
                    </LabelSelect>
                    <div className="flex gap-2">
                      <LabelInput label="Age Min" />
                      <LabelInput label="Age Max" />
                    </div>
                    <div className="flex gap-2">
                      <LabelInput label="Income Min" />
                      <LabelInput label="Income Max" />
                    </div>
                    <div className="flex gap-2">
                      <LabelInput label="Credit Score Min" />
                      <LabelInput label="Credit Score Max" />
                    </div>
                  </>
                )}

                <button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded-md mt-4">
                  Add Loan Amount
                </button>
              </div>
            </div>

            {/* Loan Tenure */}
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Loan Tenure</h2>
              <div className="space-y-4 text-sm">
                <LabelInput label="Min Tenure (Months)" placeholder="Enter minimum tenure" />
                <LabelInput label="Max Tenure (Months)" placeholder="Enter maximum tenure" />

                <CriteriaToggle
                  enabled={criteriaLoanTenureEnabled}
                  onClick={() => setCriteriaLoanTenureEnabled((prev) => !prev)}
                />

                {criteriaLoanTenureEnabled && (
                  <>
                    <LabelSelect label="Employment Type">
                      <option>Individual</option>
                    </LabelSelect>
                    <div className="flex gap-2">
                      <LabelInput label="Age Min" />
                      <LabelInput label="Age Max" />
                    </div>
                    <div className="flex gap-2">
                      <LabelInput label="Income Min" />
                      <LabelInput label="Income Max" />
                    </div>
                    <div className="flex gap-2">
                      <LabelInput label="Credit Score Min" />
                      <LabelInput label="Credit Score Max" />
                    </div>
                  </>
                )}

                <button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded-md mt-4">
                  Add Loan Tenure
                </button>
              </div>
            </div>
            {/* Interest Rate */}
<div className="bg-white rounded-xl shadow p-6">
  <h2 className="text-lg font-semibold mb-4">Interest Rate</h2>
  <div className="space-y-4 text-sm">
    <LabelInput label="Interest Rate %" placeholder="Enter interest rate %" />
    <LabelSelect label="Duration">
      <option>Monthly</option>
      <option>Quarterly</option>
      <option>Yearly</option>
    </LabelSelect>

    <CriteriaToggle
      enabled={fees.criteria}
      onClick={() => setFees((prev) => ({ ...prev, criteria: !prev.criteria }))}
    />

    {fees.criteria && (
      <>
        <LabelInput label="Min Loan Amount" placeholder="Min amount" />
        <LabelInput label="Max Loan Amount" placeholder="Max amount" />

        <LabelSelect label="Employment Type">
          <option>Individual</option>
          <option>Salaried</option>
          <option>Self-Employed</option>
        </LabelSelect>

        <div className="flex gap-2">
          <LabelInput label="Age Min" placeholder="Min" />
          <LabelInput label="Age Max" placeholder="Max" />
        </div>

        <div className="flex gap-2">
          <LabelInput label="Monthly Income Min" placeholder="Min" />
          <LabelInput label="Monthly Income Max" placeholder="Max" />
        </div>

        <div className="flex gap-2">
          <LabelInput label="Credit Score Min" placeholder="Min" />
          <LabelInput label="Credit Score Max" placeholder="Max" />
        </div>
      </>
    )}

    <button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded-md mt-4">
      Add Interest Rate
    </button>
  </div>
</div>

          </div>
        </div>
      </div>
    </Layout>
  );
}
