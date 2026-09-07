import {
  Users,
  BookOpen,
  ClipboardCheck,
  TrendingUp,
  Plus,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  {
    title: "Total Students",
    value: "128",
    change: "+12%",
    icon: Users,
  },
  {
    title: "Active Courses",
    value: "6",
    change: "+2",
    icon: BookOpen,
  },
  {
    title: "Quizzes Created",
    value: "24",
    change: "+8%",
    icon: ClipboardCheck,
  },
  {
    title: "Avg. Performance",
    value: "84%",
    change: "+6%",
    icon: TrendingUp,
  },
];

export default function TeacherDashboard() {
  return (
    <main className="min-h-screen bg-[#f8f9fc] p-6 md:p-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold text-[#5540e8]">
              Teacher Portal
            </p>

            <h1 className="mt-1 text-3xl font-black text-[#11152b]">
              Good morning, Teacher
            </h1>

            <p className="mt-2 text-gray-500">
              Here's what's happening with your students today.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 rounded-xl border bg-white px-4 py-3 text-sm font-semibold text-gray-700 shadow-sm">
              <Sparkles size={17} />
              AI Quiz
            </button>

            <button className="flex items-center gap-2 rounded-xl bg-[#5540e8] px-4 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-200">
              <Plus size={18} />
              Create Quiz
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-[#5540e8]">
                    <Icon size={21} />
                  </div>

                  <span className="text-xs font-bold text-emerald-600">
                    {stat.change}
                  </span>
                </div>

                <p className="mt-5 text-sm text-gray-500">
                  {stat.title}
                </p>

                <h2 className="mt-1 text-2xl font-black text-[#11152b]">
                  {stat.value}
                </h2>
              </div>
            );
          })}
        </div>

        {/* Main */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">

          {/* Performance */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold text-[#11152b]">
                  Student Performance
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Overall class performance this month
                </p>
              </div>

              <button className="flex items-center gap-1 text-sm font-semibold text-[#5540e8]">
                View analytics
                <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="mt-8 flex h-52 items-end gap-3">
              {[45, 60, 52, 72, 65, 82, 76, 90, 78, 88, 84, 94].map(
                (height, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-lg bg-indigo-100"
                    style={{ height: `${height}%` }}
                  />
                )
              )}
            </div>

            <div className="mt-3 flex justify-between text-xs text-gray-400">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-bold text-[#11152b]">
              Quick Actions
            </h2>

            <div className="mt-5 space-y-3">
              {[
                ["Create Assignment", ClipboardCheck],
                ["Generate with AI", Sparkles],
                ["View Students", Users],
                ["Course Materials", BookOpen],
              ].map(([label, Icon]) => (
                <button
                  key={label}
                  className="flex w-full items-center gap-3 rounded-xl border border-gray-100 p-4 text-left text-sm font-semibold text-gray-700 transition hover:border-indigo-200 hover:bg-indigo-50"
                >
                  <Icon size={18} className="text-[#5540e8]" />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Students */}
        <div className="mt-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold text-[#11152b]">
                Recent Student Activity
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Latest submissions and progress
              </p>
            </div>

            <button className="text-sm font-semibold text-[#5540e8]">
              View all
            </button>
          </div>

          <div className="mt-6 space-y-4">
            {[
              ["Aarav Sharma", "Completed Mathematics Quiz", "92%"],
              ["Riya Singh", "Submitted Physics Assignment", "88%"],
              ["Kabir Mehta", "Completed Programming Quiz", "95%"],
            ].map(([name, activity, score]) => (
              <div
                key={name}
                className="flex items-center justify-between rounded-xl bg-[#fafaff] p-4"
              >
                <div>
                  <p className="font-semibold text-[#11152b]">{name}</p>
                  <p className="mt-1 text-sm text-gray-500">{activity}</p>
                </div>

                <span className="font-bold text-emerald-600">
                  {score}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}