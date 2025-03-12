import { FaUsers, FaBuilding, FaChartLine, FaMoneyBill } from 'react-icons/fa';

export default function DashboardCards() {
  const cards = [
    { title: 'Total Loan Products', count: '4', icon: <FaBuilding /> },
    { title: 'Total Customers', count: '4', icon: <FaUsers /> },
    { title: 'Total Branches', count: '4', icon: <FaChartLine /> },
    { title: 'Total Leads', count: '4', icon: <FaMoneyBill /> },
    { title: 'Total Amount Disbursed', count: '₹ 2,00,000.00', icon: <FaMoneyBill /> },
    { title: 'NPA Ratio', count: 'x.x%', icon: <FaChartLine /> }
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {cards.map((card, index) => (
        <div key={index} className="bg-white p-2 rounded-md shadow-md flex items-center border border-gray-300 font-bold">
          <div className="text-xl text-blue-500">{card.icon}</div>
          <div className="ml-3">
            <p className="text-sm text-gray-500">{card.title}</p>
            <p className="text-lg font-semibold">{card.count}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
