import {
  CheckCircle2,
  GraduationCap,
  Users,
} from "lucide-react";

export default function Ecosystem() {
  const benefits = [
    "Real-time learning updates",
    "Data-driven insights",
    "Better communication",
    "Personalized learning experiences",
  ];

  return (
    <section
      id="how-it-works"
      className="bg-[#fafaff] py-28"
    >

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Content */}
        <div>

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
            One learning ecosystem
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            One ecosystem.
            <br />

            <span className="text-indigo-600">
              Three perspectives.
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
            Edunexa brings students, teachers, and parents together
            so everyone stays informed, engaged, and empowered.
          </p>

          <div className="mt-8 space-y-4">

            {benefits.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <CheckCircle2
                  size={20}
                  className="text-indigo-600"
                />

                <span className="font-medium text-gray-700">
                  {item}
                </span>
              </div>
            ))}

          </div>

        </div>

        {/* Ecosystem Graphic */}
        <div className="relative flex min-h-[450px] items-center justify-center">

          <div className="absolute h-72 w-72 rounded-full border border-dashed border-indigo-200" />

          <div className="absolute h-52 w-52 rounded-full border border-dashed border-purple-200" />

          {/* Center */}
          {/* <div className="relative z-10 flex h-28 w-28 flex-col items-center justify-center rounded-full border border-indigo-100 bg-white shadow-xl shadow-indigo-100">

            <div className="text-3xl font-black text-indigo-600">
              <img src="icon.png" alt="" />
            </div>

            
            </div> */}
            <span className="text-4xl font-bold">
              Edunexa
            </span> 

          {/* Student */}
          <div className="absolute left-5 top-8 flex h-32 w-32 flex-col items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-center shadow-lg">

            <GraduationCap className="text-blue-600" />

            <span className="mt-2 text-xs font-black">
              STUDENT
            </span>

            <span className="mt-1 text-[10px] text-gray-500">
              Learn • Practice
            </span>

          </div>

          {/* Teacher */}
          <div className="absolute bottom-5 left-10 flex h-32 w-32 flex-col items-center justify-center rounded-full border border-emerald-100 bg-emerald-50 text-center shadow-lg">

            <Users className="text-emerald-600" />

            <span className="mt-2 text-xs font-black">
              TEACHER
            </span>

            <span className="mt-1 text-[10px] text-gray-500">
              Teach • Assess
            </span>

          </div>

          {/* Parent */}
          <div className="absolute bottom-10 right-5 flex h-32 w-32 flex-col items-center justify-center rounded-full border border-pink-100 bg-pink-50 text-center shadow-lg">

            <Users className="text-pink-600" />

            <span className="mt-2 text-xs font-black">
              PARENT
            </span>

            <span className="mt-1 text-[10px] text-gray-500">
              Monitor • Support
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}