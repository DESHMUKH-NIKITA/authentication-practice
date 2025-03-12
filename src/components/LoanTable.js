export default function LoanTable() {
    return (
      <div className="bg-white p-5 rounded-lg shadow-lg border border-gray-300">
        <h3 className="text-lg font-semibold mb-4">Loan Application Summary</h3>
        <div className="flex gap-3 mb-4">
          <select className="border rounded-lg px-3 py-2 text-sm">
            <option>By Loan Type</option>
          </select>
          <select className="border rounded-lg px-3 py-2 text-sm">
            <option>By Status</option>
          </select>
          <select className="border rounded-lg px-3 py-2 text-sm">
            <option>By Date</option>
          </select>
        </div>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-3 py-2 text-left text-sm">SN</th>
              <th className="border border-gray-300 px-3 py-2 text-left text-sm">Application ID</th>
              <th className="border border-gray-300 px-3 py-2 text-left text-sm">Borrower Name</th>
              <th className="border border-gray-300 px-3 py-2 text-left text-sm">Loan Type</th>
              <th className="border border-gray-300 px-3 py-2 text-left text-sm">Loan Amount</th>
              <th className="border border-gray-300 px-3 py-2 text-left text-sm">Status</th>
              <th className="border border-gray-300 px-3 py-2 text-left text-sm">Assigned Officer</th>
              <th className="border border-gray-300 px-3 py-2 text-left text-sm">Last Updated Date</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4].map((row, index) => (
              <tr key={index} className="text-sm">
                <td className="border border-gray-300 px-3 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-3 py-2">1234568</td>
                <td className="border border-gray-300 px-3 py-2">xxxxxxxxxxxxx</td>
                <td className="border border-gray-300 px-3 py-2">Personal Loan (S)</td>
                <td className="border border-gray-300 px-3 py-2">₹ 2,00,000.00</td>
                <td className="border border-gray-300 px-3 py-2">Initiated</td>
                <td className="border border-gray-300 px-3 py-2">Officer Name</td>
                <td className="border border-gray-300 px-3 py-2">15 Oct 2024</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  