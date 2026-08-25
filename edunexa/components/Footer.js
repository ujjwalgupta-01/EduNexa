export default function Footer() {
  return (
    <footer className="relative z-0 my-0 text-center py-6 text-xs text-slate-500">
      <p>Made with 💛 for curious minds — EduNexa {new Date().getFullYear()}</p>
      <div className="flex justify-center gap-4 mt-1">
        <a href="/privacy" className="hover:text-teal-600 transition-colors">Privacy</a>
        <a href="/contact" className="hover:text-teal-600 transition-colors">Contact</a>
      </div>
    </footer>
  );
}