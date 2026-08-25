"use client";

import Link from "next/link";

export default function RoleCard({ emoji, title, subtitle, color, href, delay }) {
  return (
    <Link
      href={href}
      className={`group relative rounded-2xl p-6 text-center ${color} opacity-0 animate-fade-up ${delay} transition-transform duration-300 hover:-translate-y-2 hover:rotate-1 hover:shadow-xl`}
    >
      <div className="text-4xl mb-3 inline-block group-hover:animate-bounce">
        {emoji}
      </div>
      <p className="font-semibold text-slate-800">{title}</p>
      <p className="text-xs text-slate-600 mt-1">{subtitle}</p>
    </Link>
  );
}