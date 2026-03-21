import { Link } from 'react-router-dom'
import { ArrowRight, FlaskConical, Award } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12">

        {/* Left — Text Content */}
        <div className="flex-1 flex flex-col gap-6">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-900 text-amber-400 text-xs font-semibold px-4 py-2 rounded-full w-fit">
            <FlaskConical size={14} />
            School of Allied Health Sciences
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
            Kitgum Institute of <span className="text-amber-400">Health Sciences</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg text-amber-400 font-semibold italic">
            Dedicated to Excellence
          </p>

          {/* Description */}
          <p className="text-gray-300 text-base leading-relaxed max-w-xl">
            A tertiary private medical training institution preparing students with quality education that affords them the opportunity to achieve career through licensure, certification and other professional distinctions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-2">
            <Link
              to="/apply"
              className="bg-amber-500 hover:bg-amber-400 text-blue-950 font-semibold px-6 py-3 rounded-md transition-colors duration-200 flex items-center gap-2"
            >
              Apply Now <ArrowRight size={16} />
            </Link>
            <Link
              to="/courses"
              className="border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-blue-950 font-semibold px-6 py-3 rounded-md transition-colors duration-200"
            >
              View Courses
            </Link>
          </div>

          {/* Intake Notice */}
          <div className="bg-blue-900 border border-blue-800 rounded-md px-4 py-3 text-sm text-gray-300 mt-2">
            <span className="text-amber-400 font-semibold">2026/2027 Admissions Open — </span>
            Classes commence July 2026. Registration is in progress.
          </div>
        </div>

        {/* Right — Info Cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">

          <div className="bg-blue-900 rounded-lg p-6 flex flex-col gap-3 border border-blue-800">
            <Award size={28} className="text-amber-400" />
            <h3 className="text-white font-semibold text-base">Diploma Programs</h3>
            <p className="text-gray-400 text-sm">Medical Laboratory Technology & Pharmacy. 3-year programs with full clinical training.</p>
            <Link to="/courses" className="text-amber-400 text-sm font-medium hover:underline">
              Learn more →
            </Link>
          </div>

          <div className="bg-blue-900 rounded-lg p-6 flex flex-col gap-3 border border-blue-800">
            <FlaskConical size={28} className="text-amber-400" />
            <h3 className="text-white font-semibold text-base">Certificate Programs</h3>
            <p className="text-gray-400 text-sm">Medical Laboratory Technology & Pharmacy. 2-year programs building core health skills.</p>
            <Link to="/courses" className="text-amber-400 text-sm font-medium hover:underline">
              Learn more →
            </Link>
          </div>

          <div className="bg-amber-500 rounded-lg p-6 flex flex-col gap-2 sm:col-span-2">
            <p className="text-blue-950 font-bold text-lg">UGX 2,800,000/=</p>
            <p className="text-blue-900 text-sm">Annual tuition fee for all Diploma & Certificate programs in Allied Health Sciences.</p>
          </div>

        </div>
      </div>
    </section>
  )
}