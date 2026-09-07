"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CreateAccountPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "STUDENT",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Unable to create account");
        return;
      }

      // Account successfully created
      router.push(`/login?registered=true&role=${form.role.toLowerCase()}`);
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#fcfcff] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Create your EduNexa account
          </h1>

          <p className="mt-2 text-gray-500">
            Start your personalized learning journey
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
        >

          {/* Name */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#5540e8]"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#5540e8]"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Create Password
            </label>

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="At least 6 characters"
              minLength={6}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#5540e8]"
              required
            />
          </div>

          {/* Role */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              I am a
            </label>

            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#5540e8]"
            >
              <option value="STUDENT">Student</option>
              <option value="TEACHER">Teacher</option>
              <option value="PARENT">Parent</option>
            </select>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Create Account */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#5540e8] py-3 font-semibold text-white transition hover:bg-[#4633d0] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>

          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-[#5540e8] hover:underline"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}