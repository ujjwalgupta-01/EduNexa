"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Eye,
  EyeOff,
  ArrowRight,
  GraduationCap,
  Users,
  ShieldCheck,
} from "lucide-react";

const roleConfig = {
  student: {
    label: "Student",
    icon: GraduationCap,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },

  teacher: {
    label: "Teacher",
    icon: Users,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },

  parent: {
    label: "Parent",
    icon: ShieldCheck,
    color: "text-pink-600",
    bg: "bg-pink-50",
  },
};

export default function LoginForm({ role }) {
  const [showPassword, setShowPassword] = useState(false);

  const currentRole =
    roleConfig[role?.toLowerCase()] || roleConfig.student;

  const Icon = currentRole.icon;

  return (
    <div className="w-full max-w-md">

      {/* Mobile Logo */}
      <div className="mb-10 flex justify-center lg:hidden">
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5540e8] text-lg font-black text-white shadow-lg shadow-indigo-200">
            <img src="icon.png" alt="" />
          </div>

          <span className="text-xl font-bold text-[#11152b]">
            EduNexa
          </span>
        </Link>
      </div>

      {/* Header */}
      <div className="text-center">

        <div
          className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${currentRole.bg} ${currentRole.color}`}
        >
          <Icon size={30} />
        </div>

        <h1 className="mt-6 text-3xl font-black tracking-tight text-[#11152b]">
          Welcome back
        </h1>

        <p className="mt-2 text-gray-500">
          Sign in to your {currentRole.label.toLowerCase()} account
        </p>

      </div>

      {/* Form */}
      <form className="mt-9 space-y-5">

        {/* Email */}
        <div>

          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Email address
          </label>

          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
          />

        </div>

        {/* Password */}
        <div>

          <div className="mb-2 flex items-center justify-between">

            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700"
            >
              Password
            </label>

            <Link
              href="/forgot-password"
              className="text-sm font-semibold text-indigo-600 transition hover:text-indigo-700"
            >
              Forgot password?
            </Link>

          </div>

          <div className="relative">

            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              autoComplete="current-password"
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 pr-12 text-sm outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-gray-400 transition hover:text-gray-700"
              aria-label={
                showPassword
                  ? "Hide password"
                  : "Show password"
              }
            >
              {showPassword ? (
                <EyeOff size={19} />
              ) : (
                <Eye size={19} />
              )}
            </button>

          </div>

        </div>

        {/* Remember */}
        <div className="flex items-center">

          <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">

            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />

            Remember me

          </label>

        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#5540e8] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-[#4633d0]"
        >
          Sign In

          <ArrowRight
            size={18}
            className="transition group-hover:translate-x-1"
          />
        </button>

      </form>

      {/* Divider */}
      <div className="my-7 flex items-center gap-4">

        <div className="h-px flex-1 bg-gray-200" />

        <span className="text-xs font-medium text-gray-400">
          OR
        </span>

        <div className="h-px flex-1 bg-gray-200" />

      </div>

      {/* Google */}
      <button
        type="button"
        className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
      >
        <span className="text-lg font-bold">
          G
        </span>

        Continue with Google
      </button>

      {/* Register */}
      <p className="mt-8 text-center text-sm text-gray-500">

        Don't have an account?{" "}

        <Link
          href={`/register?role=${role}`}
          className="font-bold text-indigo-600 hover:text-indigo-700"
        >
          Create an account
        </Link>

      </p>

      {/* Security */}
      <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-400">
        <ShieldCheck size={14} />

        <span>
          Your information is securely protected
        </span>
      </div>

    </div>
  );
}