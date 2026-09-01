import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Users,
  ShieldCheck ,
} from "lucide-react";

const roles = [
  {
    title: "Student",
    description:
      "Learn, practice, and track your progress with everything you need in one place.",
    icon: GraduationCap,
    color: "blue",
    href: "/login?role=student",
  },
  {
    title: "Teacher",
    description:
      "Teach, create, assess, and understand your students with powerful insights.",
    icon: Users,
    color: "green",
    href: "/login?role=teacher",
  },
  {
    title: "Parent",
    description:
      "Stay connected with your child's learning, attendance, assignments, and progress.",
    icon: ShieldCheck ,
    color: "pink",
    href: "/login?role=parent",
  },
];

export default function RoleSelector() {
  return (
    <section id="RoleSelector" className="border-y border-gray-100 bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
            Who are you?
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Choose your role and get started
          </h2>

          <p className="mt-4 text-gray-500">
            A personalized experience tailored specifically for you.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3" >

          {roles.map((role) => {
            const Icon = role.icon;

            return (
              <Link
                href={role.href}
                key={role.title}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-100"
              >

                <div
                  className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl transition group-hover:scale-110 ${
                    role.color === "blue"
                      ? "bg-blue-50 text-blue-600"
                      : role.color === "green"
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-pink-50 text-pink-600"
                  }`}
                >
                  <Icon size={36} />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {role.title}
                </h3>

                <p className="mx-auto mt-3 max-w-sm leading-7 text-gray-500">
                  {role.description}
                </p>

                <div className="mt-7 inline-flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-sm font-bold transition group-hover:border-indigo-300 group-hover:text-indigo-600">
                  I'm a {role.title}

                  <ArrowRight size={16} />
                </div>

              </Link>
            );
          })}

        </div>
      </div>
    </section>
  );
}