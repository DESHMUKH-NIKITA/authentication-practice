import Layout from '@/components/Layout';
import DashboardCards from '@/components/DashboardCards';
import LoanTable from '@/components/LoanTable';
import TaskList from '@/components/TaskList';

export default function Dashboard() {
  return (
    <Layout>
      {/* Cards + Task List in a single row */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="col-span-2">
          <DashboardCards />
        </div>
        <div>
          <TaskList />
        </div>
      </div>
      {/* Loan Table Below */}
      <LoanTable />
    </Layout>
  );
}
