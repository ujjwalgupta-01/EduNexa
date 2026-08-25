import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 relative z-20">
      <Link href="/" className="flex items-center gap-2 font-bold text-lg">
        <button className="w-8 h-8 rounded-xl bg-teal-500 flex items-center justify-center text-white animate-wiggle">
          ✨
        </button>
        <div className="animate-wiggle">
        EduNexa

        </div>
      </Link>
      <div className="flex gap-8 text-[15px] text-slate-600 font-sans">
        <Link href="/login" className="hover:text-teal-600 transition-colors font-bold" >Home</Link>
        <Link href="/about" className="hover:text-teal-600 transition-colors font-bold ">About</Link>
        <Link href="/login" className="hover:text-teal-600 transition-colors font-bold" >Contact</Link>
      </div>
    </nav>
  );
}