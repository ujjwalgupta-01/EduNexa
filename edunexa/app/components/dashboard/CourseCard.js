import { ArrowRight, BookOpen } from "lucide-react";

export default function CourseCard({ course }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50">

      <div className="flex items-start justify-between">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
          <BookOpen size={22} />
        </div>

        <span className="rounded-full bg-gray-50 px-3 py-1 text-xs font-bold text-gray-500">
          {course.shortName}
        </span>

      </div>

      <h3 className="mt-5 font-bold">
        {course.title}
      </h3>

      <p className="mt-2 text-xs text-gray-400">
        {course.completed} of {course.lessons} lessons completed
      </p>

      <div className="mt-5">

        <div className="flex justify-between text-xs font-semibold">
          <span className="text-gray-500">
            Progress
          </span>

          <span className="text-indigo-600">
            {course.progress}%
          </span>
        </div>

        <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-indigo-600 transition-all"
            style={{ width: `${course.progress}%` }}
          />
        </div>

      </div>

      <button className="mt-5 flex items-center gap-2 text-sm font-bold text-gray-700 transition group-hover:text-indigo-600">
        Continue
        <ArrowRight
          size={16}
          className="transition group-hover:translate-x-1"
        />
      </button>

    </div>
  );
}