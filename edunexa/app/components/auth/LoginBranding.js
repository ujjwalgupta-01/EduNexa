import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";

export default function LoginBranding() {
  return (
    <section className="relative hidden overflow-hidden bg-[#101532] lg:flex">

      {/* Background decoration */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />

      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="relative z-10 flex w-full flex-col justify-between px-12 py-10 xl:px-20">

        {/* Logo */}
        <Link
          href="/"
          className="flex w-fit items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl text-xl  font-black text-[#5540e8] shadow-lg">
            <Image src="/icon.png" height={40} width={40} alt="Logo"></Image>
          </div>

          <span className="text-xl font-bold tracking-tight text-white">
            EduNexa
          </span>
        </Link>

        {/* Main content */}
        <div className="max-w-xl">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-indigo-200">
            <Brain size={16} />
            Intelligent learning ecosystem
          </div>

          <h1 className="text-5xl font-black leading-[1.08] tracking-tight text-white xl:text-6xl">
            Welcome back.
            <br />

            <span className="text-indigo-400">
              Keep learning.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-gray-400">
            Your learning journey doesn't stop here. Sign in to
            continue learning, teaching, tracking, and growing with
            EduNexa.
          </p>

          {/* Benefits */}
          <div className="mt-9 space-y-4">

            <div className="flex items-center gap-3">
              <CheckCircle2
                size={20}
                className="text-indigo-400"
              />

              <span className="text-gray-300">
                Personalized learning experience
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2
                size={20}
                className="text-indigo-400"
              />

              <span className="text-gray-300">
                Track progress and performance
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2
                size={20}
                className="text-indigo-400"
              />

              <span className="text-gray-300">
                Stay connected with your education
              </span>
            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <GraduationCap size={18} />

          <span>
            Learn smarter. Grow faster.
          </span>

          <ArrowRight size={16} />
        </div>

      </div>
    </section>
  );
}