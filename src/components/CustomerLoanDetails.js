"use client";

import { useEffect, useState } from "react";
import React from "react";
import { PieChart, Pie, Cell } from "recharts";

export default function CustomerLoanDetails() {
  const COLORS = ["#22c55e", "#ffcc00", "#ff7300", "#ff0000"];
  const data = [
    { name: "Excellent", value: 60, color: "#22c55e" },
    { name: "Good", value: 30, color: "#ffcc00" },
    { name: "Fair", value: 30, color: "#ff7300" },
    { name: "Poor", value: 30, color: "#ff0000" },
  ];

  const creditScore = 670;
  const totalScore = 900;
  const scoreAngle = (creditScore / totalScore) * 180;

  // Add state to track client-side rendering
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="p-6 flex gap-8 bg-gray-100">
      <div className="w-1/4 bg-white border rounded-lg flex flex-col justify-center items-center p-6 h-[340px] text-center">
        <div className="w-20 h-20 bg-gray-300 rounded-full mb-3"></div>
        <p className="text-gray-500 text-sm">(Photo of Customer)</p>
      </div>

      <div className="w-3/4 bg-white border rounded-lg p-6 flex justify-between h-[340px]">
        <div className="grid grid-cols-3 gap-x-10">
          <div>
            <p className="text-sm text-gray-500 mb-0">Customer ID:</p>
            <p className="font-semibold text-sm text-gray-800 mt-1">1234</p>

            <p className="text-sm text-gray-500 mb-0">Customer Name:</p>
            <p className="font-semibold text-sm text-gray-800 mt-1">
              Anna Bella Cruz
            </p>

            <p className="text-sm text-gray-500 mb-0">DOB:</p>
            <p className="font-semibold text-sm text-gray-800 mt-1">
              21/03/1983
            </p>

            <p className="text-sm text-gray-500 mb-0">Income:</p>
            <p className="font-semibold text-sm text-gray-800 mt-1">
              ₹ 20,000/month
            </p>

            <p className="text-sm text-gray-500 mb-0">Phone Number:</p>
            <p className="font-semibold text-sm text-gray-800 mt-1">
              1234567890
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-0">Product Name:</p>
            <p className="font-semibold text-sm text-gray-800 mt-1">
              Product Name1
            </p>

            <p className="text-sm text-gray-500 mb-0">Loan Amount:</p>
            <p className="font-semibold text-sm text-gray-800 mt-1">
              ₹ 20,000
            </p>

            <p className="text-sm text-gray-500 mb-0">Loan Tenure:</p>
            <p className="font-semibold text-sm text-gray-800 mt-1">1 Year</p>

            <p className="text-sm text-gray-500 mb-0">Interest Rate:</p>
            <p className="font-semibold text-sm text-gray-800 mt-1">7%</p>

            <p className="text-sm text-gray-500 mb-0">EMI:</p>
            <p className="font-semibold text-sm text-gray-800 mt-1">₹ 2,000</p>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-0">Owner:</p>
            <p className="font-semibold text-sm text-gray-800 mt-1">
              Bank Official Name
            </p>

            <p className="text-sm text-gray-500 mb-0">Guarantor Name:</p>
            <p className="font-semibold text-sm text-gray-800 mt-1">John Doe</p>

            <p className="text-sm text-gray-500 mb-0">Applied on:</p>
            <p className="font-semibold text-sm text-gray-800 mt-1">
              11/03/2025
            </p>

            <p className="text-sm text-gray-500 mb-0">Updated on:</p>
            <p className="font-semibold text-sm text-gray-800 mt-1">
              11/03/2025
            </p>

            <p className="text-sm text-gray-500 mb-0">Purpose of Loan:</p>
            <p className="font-semibold text-sm text-gray-800 mt-1">
              Medical Emergency Expense
            </p>
          </div>
        </div>

          <div className="flex flex-col items-center w-1/3 -mt-0">
          {/* Render PieChart only on the client */}
          {isClient && (
            <PieChart width={300} height={160}>
              <Pie
                data={data}
                startAngle={180}
                endAngle={0}
                cx="50%"
                cy="100%"
                innerRadius={50}
                outerRadius={70}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          )}
          <p className="text-lg font-bold text-gray-800">{creditScore}</p>
          <p className="text-sm text-gray-500">Credit score is average</p>
          <p className="text-sm text-gray-400">Last check on 11/03/2025</p>
        </div>
      </div>
    </div>
  );
}
