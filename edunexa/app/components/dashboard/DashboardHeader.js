"use client";

import Link from "next/link";

import {
  LayoutDashboard,
  BookOpen,
  ClipboardCheck,
  FileQuestion,
  CalendarCheck,
  Brain,
  Settings,
  LogOut,
  X,
} from "lucide-react";

const navigation = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard/student",
  },
  {
    label: "My Courses",
    icon: BookOpen,
    href: "/dashboard/student/courses",
  },
  {
    label: "Assignments",
    icon: ClipboardCheck,
    href: "/dashboard/student/assignments",
  },
  {
    label: "Quizzes",
    icon: FileQuestion,
    href: "/dashboard/student/quizzes",
  },
  {
    label: "Attendance",
    icon: CalendarCheck,
    href: "/dashboard/student/attendance",
  },
  {
    label: "AI Insights",
    icon: Brain,
    href: "/dashboard/student/insights",
  },
];

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-gray-200 bg-white lg:flex lg:flex-col">

      {/* Logo */}
      <div className="flex h-20 items-center border-b border-gray-100 px-6">

        <Link href="/" className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5540e8] text-lg font-black text-white shadow-lg shadow-indigo-100">
            E
          </div>

          <span className="text-xl font-black tracking-tight">
            EduNexa
          </span>

        </Link>

      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">

        <p className="px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
          Learning
        </p>

        <div className="mt-4 space-y-1">

          {navigation.map((item) => {
            const Icon = item.icon;

            const active = item.label === "Dashboard";

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${
                  active
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <Icon size={19} />

                {item.label}
              </Link>
            );
          })}

        </div>

      </nav>

      {/* Bottom */}
      <div className="border-t border-gray-100 p-4">

        <Link
          href="/settings"
          className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-gray-500 hover:bg-gray-50"
        >
          <Settings size={19} />
          Settings
        </Link>

        <button className="mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-gray-500 hover:bg-red-50 hover:text-red-600">
          <LogOut size={19} />
          Sign out
        </button>

      </div>

    </aside>
  );
}