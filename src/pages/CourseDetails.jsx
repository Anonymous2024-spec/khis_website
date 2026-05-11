import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Briefcase,
  ClipboardList,
  BookOpen,
  Clock,
  DollarSign,
} from "lucide-react";
import { courses } from "../data/courses";
import usePageTitle from "../hooks/usePageTitle";
import CTABlock from "../components/CTABlock";

export default function CourseDetails() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === parseInt(courseId));

  if (!course) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Course Not Found
          </h1>
          <p className="text-slate-600 mb-6">
            We couldn't find the course you're looking for.
          </p>
          <Link
            to="/courses"
            className="inline-block bg-blue-950 hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-md transition-colors"
          >
            View All Courses
          </Link>
        </div>
      </div>
    );
  }

  usePageTitle(course.title);

  const relatedCoursesData = courses.filter((c) =>
    course.relatedCourses.includes(c.id),
  );

  const handleApplyClick = () => {
    navigate(`/apply?course=${course.id}`);
  };

  return (
    <div className="bg-white">
      {/* Hero Section with Course Image */}
      <section className="relative">
        <div className="relative h-96 overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/50 to-transparent" />
        </div>

        {/* Course Info Card - Overlapping */}
        <div className="max-w-7xl mx-auto px-6 relative -mt-20 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Type & Category */}
            <div className="flex flex-col gap-2">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-widest">
                Course Type
              </span>
              <p className="text-slate-900 font-bold text-lg">{course.type}</p>
            </div>

            {/* Duration */}
            <div className="flex flex-col gap-2">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-widest">
                Duration
              </span>
              <div className="flex items-center gap-2">
                <Clock size={20} className="text-blue-950" />
                <p className="text-slate-900 font-bold text-lg">
                  {course.duration}
                </p>
              </div>
            </div>

            {/* Fees */}
            <div className="flex flex-col gap-2">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-widest">
                Tuition Fee
              </span>
              <div className="flex items-center gap-2">
                <DollarSign size={20} className="text-blue-950" />
                <p className="text-slate-900 font-bold text-lg">
                  UGX {course.fee}
                </p>
              </div>
            </div>

            {/* Apply Button */}
            <div className="flex items-end">
              <button
                onClick={handleApplyClick}
                className="w-full bg-amber-500 hover:bg-amber-400 text-blue-950 font-semibold px-6 py-3 rounded-md transition-colors flex items-center justify-center gap-2"
              >
                Apply Now <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        {/* Course Title & Overview */}
        <div className="mb-16">
          <div className="mb-6">
            <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">
              Course Overview
            </span>
            <h1 className="text-4xl font-bold text-slate-900 mt-2">
              {course.title}
            </h1>
          </div>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
            {course.description}
          </p>
        </div>

        {/* Program Highlights */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen size={28} className="text-amber-500" />
            <h2 className="text-3xl font-bold text-slate-900">
              Program Highlights
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.programHighlights.map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-amber-200 transition-colors"
              >
                <CheckCircle
                  size={24}
                  className="text-green-600 mt-1 flex-shrink-0"
                />
                <p className="text-slate-700 text-base">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Entry Requirements */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <ClipboardList size={28} className="text-amber-500" />
            <h2 className="text-3xl font-bold text-slate-900">
              Entry Requirements
            </h2>
          </div>
          <div className="bg-blue-50 rounded-lg border border-blue-200 p-8">
            <ul className="space-y-3">
              {course.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-blue-950 font-bold text-lg mt-0.5">
                    •
                  </span>
                  <span className="text-slate-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase size={28} className="text-amber-500" />
            <h2 className="text-3xl font-bold text-slate-900">
              Career Opportunities
            </h2>
          </div>
          <p className="text-slate-600 text-base mb-6">
            Graduates of this program are equipped to pursue careers in:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {course.careerOpportunities.map((opportunity, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 bg-amber-50 rounded-lg border border-amber-200"
              >
                <CheckCircle
                  size={20}
                  className="text-amber-600 flex-shrink-0"
                />
                <p className="text-slate-800 font-medium">{opportunity}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Courses */}
        {relatedCoursesData.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Related Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedCoursesData.map((relatedCourse) => (
                <Link
                  key={relatedCourse.id}
                  to={`/courses/${relatedCourse.id}`}
                  className="group bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="h-40 overflow-hidden bg-gradient-to-br from-blue-950 to-blue-900 flex items-center justify-center">
                    <img
                      src={relatedCourse.image}
                      alt={relatedCourse.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-amber-500 text-xs font-semibold uppercase tracking-widest mb-2">
                      {relatedCourse.type}
                    </p>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-amber-500 transition-colors">
                      {relatedCourse.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">
                        {relatedCourse.duration}
                      </span>
                      <span className="text-sm font-semibold text-blue-950">
                        UGX {relatedCourse.fee}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* CTA Block */}
      <CTABlock />
    </div>
  );
}
