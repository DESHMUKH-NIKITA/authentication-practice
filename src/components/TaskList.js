export default function FunnelChart() {
  const tasks = [
    { title: "Pending Approval",count: 50,
      color: "bg-teal-400",
      border: "border-teal-400",
      text: "text-teal-400",
      width: "80%",
    },
    {
      title: "Document Review",
      count: 15,
      color: "bg-blue-400",
      border: "border-blue-400",
      text: "text-blue-400",
      width: "60%",
    },
    {
      title: "Follow-ups",
      count: 14,
      color: "bg-yellow-400",
      border: "border-yellow-400",
      text: "text-yellow-400",
      width: "45%",
    },
    {
      title: "Escalation",
      count: 12,
      color: "bg-purple-400",
      border: "border-purple-400",
      text: "text-purple-400",
      width: "32%",
    },
  ];

  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg min-w-[350px]">
      <h3 className="text-lg font-semibold mb-6">Task Lists</h3>
      <div className="flex flex-col items-center w-full">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="relative w-full flex justify-center items-center my-0.5"
          >
            {/* Funnel Shape with Shadow */}
            <div
              className={`text-white px-6 py-3 font-semibold ${task.color} flex items-center justify-center text-center relative shadow-lg`}
              style={{
                width: task.width,
                clipPath: "polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)",
              }}
            >
              <span className="w-full text-center">{task.title}</span>
            </div>

            {/* Line + Circle + Count */}
            <div className="right-12 flex items-center">
              {/* Horizontal Line */}
              <div className={`h-[2px] w-18 ${task.color}`}></div>

              {/* Circle */}
              <div
                className={`w-4 h-4 border-2 ${task.border} rounded-full flex items-center justify-center bg-white -ml-2`}
              ></div>

              {/* Count */}
              <span className={`text-lg font-semibold ${task.text} ml-2`}>{task.count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
