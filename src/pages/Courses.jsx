import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Clock,
  ChevronRight,
  FlaskConical,
  Pill,
  CheckCircle,
} from "lucide-react";
import { courses } from "../data/courses";
import CTABlock from "../components/CTABlock";
import usePageTitle from "../hooks/usePageTitle";

const icons = {
  "Medical Laboratory Technology": (
    <FlaskConical size={28} className="text-amber-400" />
  ),
  Pharmacy: <Pill size={28} className="text-amber-400" />,
};

export default function Courses() {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Diploma", "Certificate"];

  const filtered =
    activeTab === "All" ? courses : courses.filter((c) => c.type === activeTab);

  return (
    <div>
     {usePageTitle('Our Courses')}
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 py-24 px-6 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
        <div className="max-w-7xl mx-auto flex flex-col gap-3">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
            School of Allied Health Sciences
          </span>
          <h1 className="text-4xl font-bold text-white">Our Programs</h1>
          <p className="text-gray-300 text-base max-w-2xl">
            We offer diploma and certificate programs in Medical Laboratory
            Technology and Pharmacy, designed to equip students with practical
            skills for the health sector.
          </p>
        </div>
      </section>

      {/* Tabs & Course Cards */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {/* Tabs */}
          <div className="flex gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                  activeTab === tab
                    ? "bg-blue-950 text-white"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-amber-400 hover:text-amber-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((course) => {
              const iconKey = Object.keys(icons).find((key) =>
                course.title.includes(key),
              );
              return (
                <div
                  key={course.id}
                  className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-amber-400 transition-all duration-200"
                >
                  {/* Card Top */}
                  <div className="bg-blue-950 px-6 py-8 flex items-start justify-between">
                    <div className="flex flex-col gap-3">
                      <div className="bg-blue-900 p-3 rounded-md w-fit">
                        {icons[iconKey]}
                      </div>
                      <h2 className="text-white font-bold text-xl leading-snug">
                        {course.title}
                      </h2>
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full shrink-0 ${
                        course.type === "Diploma"
                          ? "bg-blue-800 text-blue-100"
                          : "bg-amber-500 text-blue-950"
                      }`}
                    >
                      {course.type}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="px-6 py-6 flex flex-col gap-6">
                    {/* Description */}
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {course.description}
                    </p>

                    {/* Duration & Fee */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-50 rounded-md p-4 flex flex-col gap-1">
                        <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">
                          Duration
                        </p>
                        <div className="flex items-center gap-2 text-blue-950 font-bold text-base">
                          <Clock size={16} className="text-amber-400" />
                          {course.duration}
                        </div>
                      </div>
                      <div className="bg-slate-50 rounded-md p-4 flex flex-col gap-1">
                        <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">
                          Annual Fee
                        </p>
                        <p className="text-blue-950 font-bold text-base">
                          UGX {course.fee}
                        </p>
                      </div>
                    </div>

                    {/* Entry Requirements */}
                    <div className="flex flex-col gap-3">
                      <p className="text-sm font-semibold text-slate-700">
                        Entry Requirements
                      </p>
                      <ul className="flex flex-col gap-2">
                        {course.requirements.map((req, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm text-slate-500"
                          >
                            <CheckCircle
                              size={16}
                              className="text-amber-400 shrink-0 mt-0.5"
                            />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Apply Button */}
                    <Link
                      to="/apply"
                      className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-blue-950 font-semibold py-3 rounded-md transition-colors duration-200"
                    >
                      Apply for this Course <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Admission Notice */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex flex-col gap-2 flex-1">
              <h3 className="text-slate-900 font-bold text-lg">
                Important Admission Note
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Applicants with qualifications from outside Uganda must first
                have them equated by the Uganda National Examination Board
                (UNEB) or by the Professional Council of Uganda, relevant to
                those qualifications.
              </p>
            </div>
            <Link
              to="/apply"
              className="bg-blue-950 hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200 shrink-0"
            >
              Start Application
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock />
    </div>
  );
}
