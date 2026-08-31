"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const closeMenu = () => {
    setMobileMenu(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-100/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#6846ff] to-[#4c32d8] text-xl font-black text-white shadow-lg shadow-indigo-200">
            <img src="/icon.png" alt="" />
          </div>

          <span className="text-2xl font-bold tracking-tight pop">
            EduNexa
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#features" className="nav-link">
            Features
          </a>

          <a href="#how-it-works" className="nav-link">
            How It Works
          </a>

          <a href="#about" className="nav-link">
            About Us
          </a>

          <a href="#pricing" className="nav-link">
            Pricing
          </a>

          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold transition hover:border-indigo-300 hover:bg-indigo-50"
          >
            Log in
          </Link>

          <Link
            href="#RoleSelector"
            className="rounded-xl bg-[#5540e8] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-[#4633d0]"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="rounded-lg p-2 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenu ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="border-t border-gray-100 bg-white px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">

            <a href="#features" onClick={closeMenu}>
              Features
            </a>

            <a href="#how-it-works" onClick={closeMenu}>
              How It Works
            </a>

            <a href="#about" onClick={closeMenu}>
              About Us
            </a>

            <a href="#pricing" onClick={closeMenu}>
              Pricing
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>

            <Link
              href="/login"
              className="rounded-xl border border-gray-200 px-5 py-3 text-center font-semibold"
              onClick={closeMenu}
            >
              Log in
            </Link>

            <Link
              href="/register"
              className="rounded-xl bg-[#5540e8] px-5 py-3 text-center font-semibold text-white"
              onClick={closeMenu}
            >
              Get Started
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}