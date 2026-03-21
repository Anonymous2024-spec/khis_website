import { Link } from 'react-router-dom'
import { Clock, ChevronRight, FlaskConical, Pill } from 'lucide-react'

const icons = {
  'Medical Laboratory Technology': <FlaskConical size={24} className="text-amber-400" />,
  'Pharmacy': <Pill size={24} className="text-amber-400" />,
}

export default function CourseCard({ course }) {
  const iconKey = Object.keys(icons).find(key => course.title.includes(key))

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col gap-4 hover:shadow-lg hover:border-amber-400 transition-all duration-200">

      {/* Top Row */}
      <div className="flex items-start justify-between">
        <div className="bg-blue-50 p-3 rounded-md">
          {icons[iconKey]}
        </div>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
          course.type === 'Diploma'
            ? 'bg-blue-100 text-blue-800'
            : 'bg-amber-100 text-amber-800'
        }`}>
          {course.type}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-slate-900 font-semibold text-base leading-snug">
        {course.title}
      </h3>

      {/* Description */}
      <p className="text-slate-500 text-sm leading-relaxed flex-1">
        {course.description}
      </p>

      {/* Duration & Fee */}
      <div className="flex items-center justify-between text-sm border-t border-slate-100 pt-4">
        <div className="flex items-center gap-2 text-slate-500">
          <Clock size={14} className="text-amber-400" />
          {course.duration}
        </div>
        <span className="text-blue-950 font-semibold">
          UGX {course.fee} / yr
        </span>
      </div>

      {/* Requirements */}
      <div className="flex flex-col gap-1">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
          Entry Requirements
        </p>
        <ul className="flex flex-col gap-1">
          {course.requirements.map((req, i) => (
            <li key={i} className="text-xs text-slate-500 flex items-start gap-2">
              <span className="text-amber-400 mt-0.5">•</span>
              {req}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <Link
        to="/apply"
        className="mt-auto flex items-center justify-center gap-2 bg-blue-950 hover:bg-blue-900 text-white text-sm font-semibold py-2.5 rounded-md transition-colors duration-200"
      >
        Apply for this Course <ChevronRight size={16} />
      </Link>
    </div>
  )
}