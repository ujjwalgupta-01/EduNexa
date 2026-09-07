import { ArrowRight, CalendarDays } from "lucide-react";

const tasks = [
  {
    title: "Maths Assignment",
    subject: "Mathematics",
    due: "Due in 2 days",
  },
  {
    title: "DBMS Quiz",
    subject: "Database Management",
    due: "Due in 3 days",
  },
  {
    title: "OS Test",
    subject: "Operating Systems",
    due: "Due in 5 days",
  },
];

export default function UpcomingTasks() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">

      <div className="flex items-center justify-between">

        <div>
          <h2 className="font-bold">
            Upcoming
          </h2>

          <p className="mt-1 text-xs text-gray-400">
            Don't miss your deadlines.
          </p>
        </div>

        <button className="text-xs font-bold text-indigo-600">
          View all
        </button>

      </div>

      <div className="mt-6 space-y-4">

        {tasks.map((task) => (
          <div
            key={task.title}
            className="flex items-center gap-4 rounded-xl border border-gray-100 p-4 transition hover:bg-gray-50"
          >

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
              <CalendarDays size={18} />
            </div>

            <div className="min-w-0 flex-1">

              <p className="truncate text-sm font-bold">
                {task.title}
              </p>

              <p className="mt-1 text-xs text-gray-400">
                {task.subject}
              </p>

            </div>

            <div className="text-right">
              <p className="text-xs font-semibold text-gray-500">
                {task.due}
              </p>

              <ArrowRight
                size={15}
                className="ml-auto mt-2 text-gray-300"
              />
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}