import {
  Brain,
  TrendingUp,
  Flame
} from "lucide-react";

export default function DashboardPreview() {
  const courses = [
    ["DSA", "72%"],
    ["DBMS", "64%"],
    ["OS", "58%"],
  ];

  return (
    <div className="relative">

      {/* Glow */}
      <div className="absolute inset-10 rounded-full bg-indigo-300/20 blur-3xl" />

      <div className="relative overflow-hidden rounded-3xl border border-indigo-100 bg-white p-3 shadow-2xl shadow-indigo-100">

        <div className="flex min-h-[460px] overflow-hidden rounded-2xl bg-[#fafaff]">

          {/* Sidebar */}
          <aside className="hidden w-16 flex-col items-center gap-6 bg-[#171438] py-7 text-white sm:flex">

            <div className="text-xl font-black">
              E
            </div>

            <div className="mt-5 space-y-6 text-gray-400">
              <div className="text-white">▦</div>
              <div>▤</div>
              <div>◫</div>
              <div>◌</div>
              <div>◉</div>
            </div>

          </aside>

          {/* Dashboard */}
          <div className="flex-1 p-5 sm:p-7">

            {/* Header */}
            <div className="flex items-center justify-between">

              <div>
                <h3 className="font-bold">
                  Good morning, Ujjwal 
                </h3>

                <p className="mt-1 text-xs text-gray-400">
                  Let's continue your learning journey!
                </p>
              </div>

              <div className="rounded-full border border-gray-100 bg-white px-3 py-2 text-xs font-semibold">
                 12 Day Streak
              </div>

            </div>

            {/* Stats */}
            <div className="mt-7 grid gap-4 sm:grid-cols-2">

              {/* Progress */}
              <div className="rounded-2xl border border-gray-100 bg-white p-5">

                <p className="text-xs text-gray-400">
                  Overall Progress
                </p>

                <div className="mt-2 flex items-end justify-between">

                  <span className="text-3xl font-black">
                    78%
                  </span>

                  <TrendingUp
                    size={30}
                    className="text-indigo-500"
                  />

                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full w-[78%] rounded-full bg-indigo-600" />
                </div>

              </div>

              {/* Upcoming */}
              <div className="rounded-2xl border border-gray-100 bg-white p-5">

                <div className="flex justify-between">

                  <p className="text-xs text-gray-400">
                    Upcoming
                  </p>

                  <span className="text-xs font-semibold text-indigo-600">
                    View all
                  </span>

                </div>

                <div className="mt-3 space-y-3 text-xs">

                  <div className="flex justify-between">
                    <span>🟣 Maths Assignment</span>
                    <span className="text-gray-400">
                      2d
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>🔵 DBMS Quiz</span>
                    <span className="text-gray-400">
                      3d
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>🟠 OS Test</span>
                    <span className="text-gray-400">
                      5d
                    </span>
                  </div>

                </div>

              </div>

            </div>

            {/* Courses */}
            <div className="mt-5 rounded-2xl border border-gray-100 bg-white p-5">

              <div className="flex justify-between">

                <p className="text-sm font-bold">
                  Continue Learning
                </p>

                <span className="text-xs text-indigo-600">
                  View all
                </span>

              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">

                {courses.map(([name, progress]) => (
                  <div
                    key={name}
                    className="rounded-xl border border-gray-100 p-3"
                  >

                    <div className="text-lg">
                      
                    </div>

                    <p className="mt-2 text-xs font-bold">
                      {name}
                    </p>

                    <div className="mt-2 h-1.5 rounded-full bg-gray-100">
                      <div
                        className="h-full rounded-full bg-indigo-500"
                        style={{
                          width: progress,
                        }}
                      />
                    </div>

                    <p className="mt-1 text-[10px] text-gray-400">
                      {progress}
                    </p>

                  </div>
                ))}

              </div>

            </div>

            {/* AI Insight */}
            <div className="mt-4 rounded-2xl border border-indigo-100 bg-indigo-50 p-4">

              <div className="flex gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white">
                  <Brain size={18} />
                </div>

                <div>

                  <p className="text-xs font-bold text-indigo-700">
                    Edunexa AI Insight
                  </p>

                  <p className="mt-1 text-xs leading-5 text-gray-600">
                    Focus more on DBMS Normalization to improve
                    your next assessment score.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}