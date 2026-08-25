"use client";

import Link from "next/link";

export default function RoleCard({ icon, title, subtitle, color, href, delay }) {
  return (
    <Link
      href={href}
      className={`group relative rounded-2xl p-6 text-center ${color} opacity-0 animate-fade-up ${delay} transition-transform duration-300 hover:-translate-y-2 hover:rotate-1 hover:shadow-xl`}
    >
      <i className={`fa-solid ${icon} text-4xl text-amber-300 mb-3 inline-block group-hover:animate-bounce`}></i>
      <p className="font-semibold text-white">{title}</p>
      <p className="text-xs text-teal-50/80 mt-1">{subtitle}</p>
    </Link>
  );
}