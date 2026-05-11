import { Link, useNavigate } from "react-router-dom";
import {
  Clock,
  ChevronRight,
  FlaskConical,
  Pill,
  CheckCircle,
} from "lucide-react";

const courseStyles = {
  "Medical Laboratory Techniques": {
    gradient: "from-blue-950 via-blue-900 to-blue-800",
    badge: "bg-amber-500 text-blue-950",
    icon: <FlaskConical size={28} className="text-amber-400" />,
    accent: "from-amber-400 to-amber-500",
  },
  Pharmacy: {
    gradient: "from-slate-900 via-blue-950 to-slate-800",
    badge: "bg-amber-500 text-blue-950",
    icon: <Pill size={28} className="text-amber-400" />,
    accent: "from-amber-400 to-amber-500",
  },
};

export default function CourseCard({ course }) {
  const navigate = useNavigate();
  const styleKey = Object.keys(courseStyles).find((key) =>
    course.title.includes(key),
  );
  const style =
    courseStyles[styleKey] || courseStyles["Medical Laboratory Techniques"];

  const handleApplyClick = () => {
    navigate(`/apply?course=${course.id}`);
  };

  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col"
      style={{
        boxShadow:
          "0 4px 6px -1px rgba(0,0,0,0.1), 0 10px 40px -10px rgba(30,58,95,0.35)",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow =
          "0 8px 12px -1px rgba(0,0,0,0.15), 0 20px 60px -10px rgba(30,58,95,0.5)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.boxShadow =
          "0 4px 6px -1px rgba(0,0,0,0.1), 0 10px 40px -10px rgba(30,58,95,0.35)")
      }
    >
      {/* Top Banner */}
      <div
        className={`bg-gradient-to-br ${style.gradient} px-6 pt-8 pb-10 relative overflow-hidden`}
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />

        {/* Type Badge */}
        <div className="flex items-start justify-between mb-6 relative z-10">
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20">
            {style.icon}
          </div>
          <span
            className={`text-xs font-bold px-3 py-1.5 rounded-full ${style.badge} shadow-md`}
          >
            {course.type}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-white font-bold text-lg leading-snug relative z-10 pr-4">
          {course.title}
        </h3>

        {/* Accent line */}
        <div
          className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r ${style.accent}`}
        />
      </div>

      {/* Overlap stats bar */}
      <div className="mx-4 -mt-5 bg-white rounded-xl shadow-lg border border-slate-100 px-4 py-3 flex items-center justify-between z-10 relative">
        <div className="flex flex-col items-center gap-0.5">
          <p className="text-blue-950 font-bold text-sm">{course.duration}</p>
          <p className="text-slate-400 text-xs">Duration</p>
        </div>
        <div className="w-px h-8 bg-slate-200" />
        <div className="flex flex-col items-center gap-0.5">
          <p className="text-blue-950 font-bold text-sm">UGX {course.fee}</p>
          <p className="text-slate-400 text-xs">Per Year</p>
        </div>
        <div className="w-px h-8 bg-slate-200" />
        <div className="flex flex-col items-center gap-0.5">
          <p className="text-blue-950 font-bold text-sm">UHPAB</p>
          <p className="text-slate-400 text-xs">Accredited</p>
        </div>
      </div>

      {/* Body */}
      <div className="px-6 pt-5 pb-6 flex flex-col gap-4 flex-1">
        {/* Description */}
        <p className="text-slate-500 text-sm leading-relaxed">
          {course.description}
        </p>

        {/* Requirements */}
        <div className="flex flex-col gap-2">
          <p className="text-xs font-bold text-slate-700 uppercase tracking-widest">
            Entry Requirements
          </p>
          <ul className="flex flex-col gap-1.5">
            {course.requirements.map((req, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-xs text-slate-500"
              >
                <CheckCircle
                  size={13}
                  className="text-amber-400 shrink-0 mt-0.5"
                />
                {req}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <button
          onClick={handleApplyClick}
          className="mt-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-950 to-blue-900 hover:from-amber-500 hover:to-amber-400 text-white hover:text-blue-950 font-semibold py-3 rounded-xl transition-all duration-300 text-sm group-hover:shadow-md"
        >
          Apply for this Course <ChevronRight size={15} />
        </button>
      </div>
    </div>
  );
}
