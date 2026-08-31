import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  ["10K+", "Learners"],
  ["500+", "Teachers"],
  ["100+", "Courses"],
  ["95%", "Satisfaction"],
];

export default function Impact() {
  return (
    <section
      id="about"
      className="px-6 py-12"
    >

      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#101532] px-8 py-14 text-white sm:px-14">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Content */}
          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-300">
              Why Edunexa
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Making education better,
              <br />
              one learner at a time.
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-gray-400">
              Edunexa is designed to create a stronger connection
              between students, teachers, and parents.
            </p>

            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
            >
              Learn More
              <ArrowRight size={16} />
            </Link>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-2">

            {stats.map(([number, label]) => (
              <div key={label}>

                <div className="text-4xl font-black">
                  {number}
                </div>

                <div className="mt-2 text-sm text-gray-400">
                  {label}
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}