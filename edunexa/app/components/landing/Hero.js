import Link from "next/link";
import {
  ArrowRight,
  Play,
  Sparkles,
} from "lucide-react";

import DashboardPreview from "./DashBoard";

export default function Hero() {
  return (
    <section className="relative pt-32">

      {/* Background Decoration */}
      <div className="pointer-events-none absolute left-[-200px] top-32 h-[500px] w-[500px] rounded-full bg-purple-200/30 blur-3xl" />

      <div className="pointer-events-none absolute right-[-200px] top-20 h-[500px] w-[500px] rounded-full bg-blue-200/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:py-28">

        {/* Hero Content */}
        <div>

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
            <Sparkles size={15} />
            The future of learning is here
          </div>

          <h1 className="max-w-2xl text-5xl font-black leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Learn{" "}

            <span className="bg-gradient-to-r from-[#6547ef] via-[#7354f5] to-[#9a5cff] bg-clip-text text-transparent">
              Smarter.
            </span>

            <br />

            Grow{" "}

            <span className="bg-gradient-to-r from-[#6547ef] to-[#9a5cff] bg-clip-text text-transparent">
              Faster.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
            Edunexa is a unified learning platform that connects
            students, teachers, and parents in one intelligent,
            transparent, and engaging ecosystem.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">

            <Link
              href="#RoleSelector"
              className="group flex items-center gap-3 rounded-xl bg-[#5540e8] px-7 py-4 font-bold text-white shadow-xl shadow-indigo-200 transition hover:-translate-y-1 hover:bg-[#4633d0]"
            >
              Get Started Free

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <button className="group flex items-center gap-3 px-4 py-3 font-semibold text-gray-700">

              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition group-hover:border-indigo-300 group-hover:text-indigo-600">
                <Play size={17} fill="currentColor" />
              </span>

              <span className="text-left">
                Watch Demo

                <span className="block text-xs font-normal text-gray-500">
                  See how it works
                </span>
              </span>

            </button>

          </div>

          {/* Trust */}
          <div className="mt-12">

            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Built for modern education
            </p>

            <div className="mt-5 flex gap-7 text-sm font-bold text-gray-300">
              <span>EDUCATION</span>
              <span>LEARNING</span>
              <span>ACADEMY</span>
            </div>

          </div>

        </div>

        {/* Dashboard */}
        <DashboardPreview />

      </div>
    </section>
  );
}