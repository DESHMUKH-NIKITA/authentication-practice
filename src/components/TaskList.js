export default function FunnelChart() {
  const tasks = [
    { title: "Pending Approval", count: 50, color: "bg-teal-400", border: "border-teal-400", text: "text-teal-400", width: "280px", height: "70px", shadow: "0px 8px 15px rgba(0, 128, 128, 0.5)" },
    { title: "Document Review", count: 15, color: "bg-blue-400", border: "border-blue-400", text: "text-blue-400", width: "220px", height: "65px", shadow: "0px 8px 15px rgba(0, 0, 255, 0.5)" },
    { title: "Follow-ups", count: 14, color: "bg-yellow-400", border: "border-yellow-400", text: "text-yellow-400", width: "180px", height: "75px", shadow: "0px 8px 15px rgba(255, 204, 0, 0.5)" },
    { title: "Escalation", count: 12, color: "bg-purple-400", border: "border-purple-400", text: "text-purple-400", width: "130px", height: "70px", shadow: "0px 8px 15px rgba(128, 0, 128, 0.5)" },
  ];

  return (
    <div className="flex flex-col items-center p-8 bg-white shadow-md rounded-lg w-[350px]">
      <h3 className="text-xl font-semibold mb-6 text-left w-full">Task Lists</h3>

      <div className="flex flex-col items-center w-full">
        {tasks.map((task, index) => (
          <div key={index} className="relative w-full flex justify-center items-center my-0.5">
            {/* Funnel Shape with Outer Shadow */}
            <div
              className={`text-white px-12 py-4 font-semibold ${task.color} flex items-center justify-center text-center relative`}
              style={{
                width: task.width,
                height: task.height,
                clipPath: "polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)",
                boxShadow: task.shadow, // Outer shadow effect
              }}
            >
              <span className="text-center">{task.title}</span>
            </div>

            {/* Connector Line + Circle + Count */}
            <div className="flex items-center -ml-6">
              {/* Horizontal Line */}
              <div className={`h-[2px] w-24 ${task.color}`}></div>

              {/* Circle Indicator */}
              <div className={`w-5 h-5 border-2 ${task.border} rounded-full flex items-center justify-center bg-white`}></div>

              {/* Task Count */}
              <span className={`ml-3 text-xl font-semibold ${task.text}`}>{task.count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
