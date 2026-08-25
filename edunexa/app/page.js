import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoleCard from "@/components/Rolecard";

const symbols = [
  { emoji: "⭐", top: "10%", left: "8%", size: "text-3xl", delay: "0s" },
  { emoji: "🚀", top: "20%", left: "85%", size: "text-4xl", delay: "1s" },
  { emoji: "📚", top: "70%", left: "5%", size: "text-3xl", delay: "2s" },
  { emoji: "🎨", top: "80%", left: "80%", size: "text-3xl", delay: "0.5s" },
  { emoji: "💡", top: "45%", left: "92%", size: "text-2xl", delay: "1.5s" },
  { emoji: "🧩", top: "5%", left: "50%", size: "text-2xl", delay: "2.5s" },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      {/* background symbol*/}
      {symbols.map((s, i) => (
        <span
          key={i}
          className={`symbol ${s.size}`}
          style={{ top: s.top, left: s.left, animationDelay: s.delay }}
        >
          {s.emoji}
        </span>
      ))}

      <Navbar />

      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 relative z-10">
        <h1 className="text-4xl font-extrabold text-slate-800 mb-2 opacity-0 animate-fade-up">
          Learning that feels like play   
        </h1>
        <p className="text-slate-600 mb-10 max-w-md opacity-0 animate-fade-up delay-100">
          EduNexa connects students, parents, and teachers in one fun, friendly space.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl w-full">
          <RoleCard
            emoji="🎒"
            title="I'm a kid!"
            subtitle="Let's play & learn"
            color="bg-pink-200"
            href="/login?role=student"
            delay="delay-100"
          />
          <RoleCard
            emoji="❤️"
            title="I'm a parent"
            subtitle="Follow their journey"
            color="bg-purple-200"
            href="/login?role=parent"
            delay="delay-200"
          />
          <RoleCard
            emoji="🧑‍🏫"
            title="I'm a teacher"
            subtitle="Run my classroom"
            color="bg-teal-200"
            href="/login?role=teacher"
            delay="delay-300"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}