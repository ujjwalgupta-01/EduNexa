import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoleCard from "@/components/Rolecard";

export default function HomePage() {
  return (
    <main className="relative flex flex-col">

      <Navbar />

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-20 pb-16 relative z-10">
        <h1 className="text-4xl font-extrabold text-slate-800 mb-2 opacity-0 animate-fade-up">
          Learning Management System
        </h1>

        <p className="text-slate-600 mb-10 max-w-md opacity-0 animate-fade-up delay-100">
          Your Learning Journey Starts Here
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl w-full">

          <RoleCard
            title="Student/Parent Login"
            subtitle="Login with your RollNo and Password to access your Student Services and Account. In case you face any login issues, contact DoAA Office"
            color="bg-[#3F3F3F]"
            icon="fa-user-graduate"
            href="/login?role=student"
            delay="delay-100"
          />

          <RoleCard
            title="Faculty Login"
            subtitle="Login using your Employee Code and Password to access your account, keep track of your progress and other official services."
            color="bg-[#3F3F3F]"
            icon="fa-chalkboard-user"
            href="/login?role=parent"
            delay="delay-200"
          />

          <RoleCard
            title="Administrator Login"
            subtitle="For Admission Staff only. Use your Employee Code and Password to log in for admission related services"
            color="bg-[#3F3F3F]"
            icon="fa-user-shield"
            href="/login?role=teacher"
            delay="delay-300"
          />

        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-slate-200 bg-white/60 relative z-10">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 px-6 py-10 text-center">
          <div>
            <div className="text-3xl font-extrabold text-teal-700">12,400+</div>
            <div className="text-xs uppercase tracking-widest text-slate-500 mt-1">Students</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-teal-700">640+</div>
            <div className="text-xs uppercase tracking-widest text-slate-500 mt-1">Faculty</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-teal-700">85+</div>
            <div className="text-xs uppercase tracking-widest text-slate-500 mt-1">Programs</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-teal-700">24/7</div>
            <div className="text-xs uppercase tracking-widest text-slate-500 mt-1">Portal Access</div>
          </div>
        </div>
      </section>

      {/* Features — full-width, Playfair Display for a distinct feel from the rest of the site */}
      <section
        className="w-full px-6 md:px-16 py-24 relative z-10"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-12 max-w-4xl">
          Everything in one place
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Large feature tile spanning 2 columns */}
          <div className="md:col-span-2 md:row-span-2 bg-[#0F766E] rounded-2xl p-8 flex flex-col justify-between min-h-[280px]">
            <div>
              <i className="fa-solid fa-chart-line text-2xl text-amber-300 mb-4"></i>
              <h3 className="text-xl font-semibold text-white mb-2">Academic Records</h3>
              <p className="text-teal-50/80 text-sm max-w-sm">
                Attendance, grade cards, and semester transcripts stay in sync in real time,
                visible to students and parents the moment faculty update them.
              </p>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-teal-50/90">
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-check text-amber-300 text-xs"></i>
                Live attendance updates
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-check text-amber-300 text-xs"></i>
                Downloadable transcripts
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-check text-amber-300 text-xs"></i>
                Parent visibility included
              </li>
            </ul>
          </div>

          {/* Smaller tiles */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <i className="fa-solid fa-file-invoice-dollar text-xl text-teal-700 mb-3"></i>
            <h3 className="font-semibold text-slate-800 mb-1">Fee Payments</h3>
            <p className="text-sm text-slate-600">
              Pay tuition and hostel fees online with instant receipts.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <i className="fa-solid fa-calendar-days text-xl text-teal-700 mb-3"></i>
            <h3 className="font-semibold text-slate-800 mb-1">Timetables</h3>
            <p className="text-sm text-slate-600">
              Class schedules and exam dates updated automatically each term.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <i className="fa-solid fa-bell text-xl text-teal-700 mb-3"></i>
            <h3 className="font-semibold text-slate-800 mb-1">Announcements</h3>
            <p className="text-sm text-slate-600">
              Circulars and notices from your department, delivered instantly.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <i className="fa-solid fa-headset text-xl text-teal-700 mb-3"></i>
            <h3 className="font-semibold text-slate-800 mb-1">Support Desk</h3>
            <p className="text-sm text-slate-600">
              Raise and track login or account issues with DoAA Office.
            </p>
          </div>

        </div>
      </section>

      {/* Getting started — full-width horizontal stepper, flows from features section */}
      <section className="bg-[#0F766E] px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2">Getting started</h2>
          <p className="text-teal-50/80 mb-14 max-w-md">
            Three steps between you and your dashboard.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            {/* connecting line, desktop only */}
            <div className="hidden md:block absolute top-6 left-[16%] right-[16%] h-px bg-teal-400/40" />

            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-amber-300 text-teal-900 font-bold text-lg flex items-center justify-center mb-5 relative z-10">
                1
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Choose your role</h3>
              <p className="text-teal-50/80 text-sm">
                Select Student/Parent, Faculty, or Administrator from the login options above.
              </p>
            </div>

            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-amber-300 text-teal-900 font-bold text-lg flex items-center justify-center mb-5 relative z-10">
                2
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Sign in securely</h3>
              <p className="text-teal-50/80 text-sm">
                Use your RollNo or Employee Code along with your password.
              </p>
            </div>

            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-amber-300 text-teal-900 font-bold text-lg flex items-center justify-center mb-5 relative z-10">
                3
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Access your dashboard</h3>
              <p className="text-teal-50/80 text-sm">
                View attendance, results, fees, and notices in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      <img
        src="/teacher.png"
        alt=""
        className="fixed bottom-5 right-5 w-44 h-auto z-20 pointer-events-none hidden lg:block"
      />

      <Footer />

    </main>
  );
}