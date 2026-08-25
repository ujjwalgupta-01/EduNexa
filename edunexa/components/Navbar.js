import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-5 border-b border-slate-200 relative z-20">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/logo.jpg"
          alt="EduBridge logo"
          width={38}
          height={38}
          className="object-contain"
        />
        <div className="w-px h-8 bg-slate-300" />
        <div>
          <div className="font-serif font-bold text-xl tracking-tight text-slate-800 leading-none">
            EduBridge
          </div>
          <div className="text-[11px] font-medium tracking-widest text-teal-700 uppercase mt-1">
            Student Portal
          </div>
        </div>
      </Link>
      <div className="flex gap-8 text-[15px] text-slate-600 font-sans">
        <Link href="/login" className="hover:text-teal-600 transition-colors font-bold">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}