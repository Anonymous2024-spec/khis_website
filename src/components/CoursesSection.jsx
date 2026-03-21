import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import CourseCard from './CourseCard'
import { courses } from '../data/courses'

export default function CoursesSection() {
  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">
              What We Offer
            </span>
            <h2 className="text-3xl font-bold text-slate-900">
              Our Programs
            </h2>
            <p className="text-slate-500 text-base max-w-xl">
              Choose from our diploma and certificate programs in Allied Health Sciences, designed to equip you with practical skills for the health sector.
            </p>
          </div>
          <Link
            to="/courses"
            className="flex items-center gap-2 text-sm font-semibold text-blue-950 hover:text-amber-500 transition-colors whitespace-nowrap"
          >
            View all courses <ArrowRight size={16} />
          </Link>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

      </div>
    </section>
  )
}