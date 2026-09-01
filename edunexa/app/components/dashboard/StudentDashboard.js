"use client";

import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";
import StatCard from "./StatCard";
import CourseCard from "./CourseCard";
import UpcomingTasks from "./UpcomingTasks";
// import AIInsight from "./AIInsight";

import {
  BookOpen,
  TrendingUp,
  ClipboardCheck,
  Flame,
} from "lucide-react";

const courses = [
  {
    title: "Data Structures & Algorithms",
    shortName: "DSA",
    progress: 72,
    lessons: 24,
    completed: 17,
  },
  {
    title: "Database Management Systems",
    shortName: "DBMS",
    progress: 64,
    lessons: 20,
    completed: 13,
  },
  {
    title: "Operating Systems",
    shortName: "OS",
    progress: 58,
    lessons: 18,
    completed: 10,
  },
];

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-[#f7f7fc] text-[#11152b]">

      <Sidebar />

      <main className="lg:ml-64">

        <DashboardHeader />

        <div className="px-6 py-8 lg:px-8">

    
          <div className="mb-8">
            <p className="text-sm font-semibold text-indigo-600">
              STUDENT DASHBOARD
            </p>

            <h1 className="mt-1 text-3xl font-black tracking-tight">
              Welcome Back , Student
            </h1>

            <p className="mt-2 text-gray-500">
              Here's what's happening with your learning today.
            </p>
          </div>

     
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

            <StatCard
              title="My Courses"
              value="6"
              description="2 in progress"
              icon={BookOpen}
            />

            <StatCard
              title="Overall Progress"
              value="78%"
              description="+8% this month"
              icon={TrendingUp}
            />

            <StatCard
              title="Pending Tasks"
              value="4"
              description="2 due this week"
              icon={ClipboardCheck}
            />

            <StatCard
              title="Learning Streak"
              value="12"
              description="Keep it going!"
              icon={Flame}
            />

          </div>

         
          <section className="mt-10">

            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">
                  Continue Learning
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Pick up where you left off.
                </p>
              </div>

              <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">
                View all
              </button>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

              {courses.map((course) => (
                <CourseCard
                  key={course.shortName}
                  course={course}
                />
              ))}

            </div>

          </section>

          {/* Bottom section */}
          <div className="mt-10 grid gap-6 xl:grid-cols-2">

            <UpcomingTasks />

            {/* <AIInsight /> */}

          </div>

        </div>

      </main>

    </div>
  );
}