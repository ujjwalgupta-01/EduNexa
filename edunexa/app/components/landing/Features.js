import {
  BookOpen,
  Brain,
  CalendarCheck,
  ClipboardCheck,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Smart Learning",
    description:
      "Access courses, lectures, notes, videos, and learning resources anytime.",
  },
  {
    icon: ClipboardCheck,
    title: "Assessments",
    description:
      "Create and take quizzes, tests, and assignments with instant feedback.",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description:
      "Track performance over time with detailed analytics and visual reports.",
  },
  {
    icon: CalendarCheck,
    title: "Attendance",
    description:
      "Monitor attendance and keep everyone informed with transparent records.",
  },
  {
    icon: Brain,
    title: "AI Insights",
    description:
      "Get personalized insights and recommendations to improve learning outcomes.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description:
      "Your educational data is protected with secure, role-based access.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-white py-28"
    >

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
            Powerful features
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Everything you need in one place
          </h2>

          <p className="mt-5 text-lg text-gray-500">
            Tools designed to help students learn better and
            educators teach smarter.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-gray-200 bg-white p-7 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-gray-100"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                  <Icon size={23} />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-500">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}