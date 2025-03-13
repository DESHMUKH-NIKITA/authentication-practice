export default function TaskList() {
  const tasks = [
    { title: 'Pending Approval', count: 50, color: 'bg-green-500' },
    { title: 'Document Review', count: 15, color: 'bg-blue-500' },
    { title: 'Follow-ups', count: 10, color: 'bg-yellow-500' },
    { title: 'Escalation', count: 12, color: 'bg-purple-500' }
  ];

  return (
    <div className="bg-white p-4 rounded-md shadow-md border border-gray-300">
      <h3 className="text-md font-semibold mb-3">Task Lists</h3>
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li key={index} className={`p-2 rounded-md text-white flex justify-between ${task.color}`}>
            <span>{task.title}</span>
            <span className="font-bold">{task.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
