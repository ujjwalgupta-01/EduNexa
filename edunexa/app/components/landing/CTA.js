import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function CTA() {
  return (
    <section
      id="pricing"
      className="px-6 py-24"
    >

      <div className="mx-auto max-w-5xl rounded-[2rem] bg-gradient-to-r from-[#5140e8] to-[#7754ee] px-8 py-16 text-center text-white shadow-2xl shadow-indigo-200">

        <Sparkles className="mx-auto mb-5" />

        <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
          Ready to start your
          <br />
          learning journey?
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-indigo-100">
          Join a smarter learning ecosystem built for students,
          teachers, and parents.
        </p>

        <Link
          href="/register"
          className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-indigo-700 shadow-xl transition hover:-translate-y-1"
        >
          Get Started Now
          <ArrowRight size={18} />
        </Link>

      </div>

    </section>
  );
}