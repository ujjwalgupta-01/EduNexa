import {
  TrendingUp,
  BookOpen,
  ClipboardCheck,
  Clock,
  CalendarDays,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  ["Overall Progress", "82%", TrendingUp],
  ["Courses Active", "5", BookOpen],
  ["Quiz Average", "88%", ClipboardCheck],
  ["Study Time", "24h", Clock],
];

export default function ParentDashboard() {
  return (
    <main className="min-h-screen bg-[#f8f9fc] p-6 md:p-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div>
          <p className="text-sm font-semibold text-[#5540e8]">
            Parent Portal
          </p>

          <h1 className="mt-1 text-3xl font-black text-[#11152b]">
            Your child's learning journey 
          </h1>

          <p className="mt-2 text-gray-500">
            Stay updated with progress, performance and activities.
          </p>
        </div>

        {/* Child */}
        <div className="mt-8 flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 text-lg font-black text-[#5540e8]">
              AS
            </div>

            <div>
              <h2 className="font-bold text-[#11152b]">
                Aarav Sharma
              </h2>

              <p className="text-sm text-gray-500">
                Class XII · Science
              </p>
            </div>
          </div>

          <button className="hidden items-center gap-1 text-sm font-semibold text-[#5540e8] sm:flex">
            View profile
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Stats */}
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([title, value, Icon]) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-[#5540e8]">
                <Icon size={21} />
              </div>

              <p className="mt-5 text-sm text-gray-500">
                {title}
              </p>

              <h2 className="mt-1 text-2xl font-black text-[#11152b]">
                {value}
              </h2>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">

          {/* Progress */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold text-[#11152b]">
                  Learning Progress
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Current academic performance
                </p>
              </div>

              <span className="text-xl font-black text-[#5540e8]">
                82%
              </span>
            </div>

            <div className="mt-7 h-3 rounded-full bg-gray-100">
              <div className="h-3 w-[82%] rounded-full bg-[#5540e8]" />
            </div>

            <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                ["Mathematics", "91%"],
                ["Physics", "86%"],
                ["Chemistry", "78%"],
                ["Computer Science", "94%"],
              ].map(([subject, score]) => (
                <div key={subject} className="rounded-xl bg-[#fafaff] p-4">
                  <p className="text-xs text-gray-500">{subject}</p>
                  <p className="mt-2 font-bold text-[#11152b]">{score}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-bold text-[#11152b]">
              Upcoming
            </h2>

            <div className="mt-5 space-y-4">
              {[
                ["Mathematics Quiz", "Tomorrow"],
                ["Physics Assignment", "Sep 10"],
                ["Chemistry Test", "Sep 13"],
              ].map(([title, date]) => (
                <div
                  key={title}
                  className="flex items-center gap-3 rounded-xl bg-[#fafaff] p-4"
                >
                  <CalendarDays
                    size={18}
                    className="text-[#5540e8]"
                  />

                  <div>
                    <p className="text-sm font-semibold text-[#11152b]">
                      {title}
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      {date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Heatmap */}
        <div className="mt-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold text-[#11152b]">
                Study Activity
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Your child's learning consistency
              </p>
            </div>

            <span className="text-sm font-bold text-emerald-600">
              12 day streak
            </span>
          </div>

          <div className="mt-6 grid grid-cols-12 gap-2 sm:grid-cols-24">
            {Array.from({ length: 96 }).map((_, i) => (
              <div
                key={i}
                className={`h-4 rounded-sm ${
                  i % 9 === 0
                    ? "bg-indigo-300"
                    : i % 5 === 0
                    ? "bg-indigo-500"
                    : i % 3 === 0
                    ? "bg-indigo-200"
                    : "bg-indigo-50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Teacher Updates */}
        <div className="mt-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2">
            <MessageSquare size={19} className="text-[#5540e8]" />

            <h2 className="font-bold text-[#11152b]">
              Teacher Updates
            </h2>
          </div>

          <div className="mt-5 rounded-xl bg-indigo-50 p-5">
            <p className="font-semibold text-[#11152b]">
              Great improvement in Mathematics!
            </p>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Aarav has shown consistent improvement in problem-solving
              and performed particularly well in the recent assessment.
            </p>

            <p className="mt-3 text-xs text-gray-400">
              Mathematics · 2 days ago
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}