import { ShieldCheck, Target, Eye, Users, Award, BookOpen } from "lucide-react";
import CTABlock from "../components/CTABlock";
import usePageTitle from "../hooks/usePageTitle";

const leadership = [
  {
    name: "[Principal Name]",
    role: "Principal",
    description:
      "Oversees the academic and administrative functions of the institute.",
    initial: "P",
  },
  {
    name: "[Deputy Principal Name]",
    role: "Deputy Principal",
    description:
      "Supports the principal in managing day to day operations of the institute.",
    initial: "D",
  },
  {
    name: "[HOD Name]",
    role: "Head of Department — Medical Laboratory",
    description:
      "Leads the medical laboratory technology department and clinical training.",
    initial: "H",
  },
  {
    name: "[HOD Name]",
    role: "Head of Department — Pharmacy",
    description:
      "Leads the pharmacy department and oversees pharmaceutical training programs.",
    initial: "H",
  },
];

const values = [
  {
    icon: <ShieldCheck size={22} className="text-amber-400" />,
    title: "Integrity",
    description:
      "We uphold the highest standards of honesty and professional ethics in everything we do.",
  },
  {
    icon: <Award size={22} className="text-amber-400" />,
    title: "Excellence",
    description:
      "We are dedicated to delivering quality education that meets national and international standards.",
  },
  {
    icon: <Users size={22} className="text-amber-400" />,
    title: "Service",
    description:
      "We train professionals who are committed to serving communities with compassion and skill.",
  },
];

const stats = [
  { value: "4", label: "Programs Offered" },
  { value: "2-3", label: "Years Duration" },
  { value: "500+", label: "Students Trained" },
  { value: "100%", label: "Dedicated to Excellence" },
];

export default function About() {
  usePageTitle("About Us");

  return (
    <div className="bg-slate-50">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
            Who We Are
          </span>
          <h1 className="text-5xl font-bold text-white mt-3 mb-4">
            About KIHS
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Learn about our background, mission, vision and the team behind
            Kitgum Institute of Health Sciences.
          </p>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 mt-6" />
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-white py-10 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-2"
            >
              <p className="text-4xl font-bold text-blue-950">{stat.value}</p>
              <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Background */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">
              Our Background
            </span>
            <h2 className="text-4xl font-bold text-slate-900 leading-tight">
              A Leading Health Sciences Institute in Uganda
            </h2>
            <p className="text-slate-500 text-base leading-relaxed">
              Kitgum Institute of Health Sciences is a tertiary private medical
              training institution located in Kitgum, Uganda. The institute's
              main goal is to prepare students with a quality education that
              affords them the opportunity to achieve career through licensure,
              certification and other professional distinctions.
            </p>
            <p className="text-slate-500 text-base leading-relaxed">
              With support from our partners in England, we continue to grow our
              facilities, expand our programs and raise the standard of health
              sciences education in northern Uganda and beyond.
            </p>
            <div
              className="bg-gradient-to-r from-blue-950 to-blue-900 rounded-2xl px-6 py-5 flex items-start gap-4"
              style={{ boxShadow: "0 10px 40px -10px rgba(30,58,95,0.4)" }}
            >
              <div className="bg-amber-400 rounded-full p-2 shrink-0 mt-0.5">
                <BookOpen size={16} className="text-blue-950" />
              </div>
              <div>
                <p className="text-white font-bold text-base italic">
                  "Dedicated to Excellence"
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  — Kitgum Institute of Health Sciences
                </p>
              </div>
            </div>
          </div>

          {/* Info Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                value: "4",
                label: "Programs in Allied Health Sciences",
                gradient: "from-blue-950 to-blue-900",
                textColor: "text-amber-400",
              },
              {
                value: "2-3 Yrs",
                label: "Program Duration",
                gradient: "from-amber-500 to-amber-400",
                textColor: "text-blue-950",
              },
              {
                value: "500+",
                label: "Students Trained",
                gradient: "from-slate-800 to-slate-700",
                textColor: "text-amber-400",
              },
              {
                value: "Kitgum",
                label: "Uganda",
                gradient: "from-blue-900 to-blue-800",
                textColor: "text-amber-400",
              },
            ].map((card, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${card.gradient} rounded-2xl p-6 flex flex-col gap-2`}
                style={{ boxShadow: "0 10px 40px -10px rgba(30,58,95,0.3)" }}
              >
                <p className={`text-3xl font-bold ${card.textColor}`}>
                  {card.value}
                </p>
                <p className="text-sm text-gray-300">{card.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col items-center text-center gap-3">
            <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">
              Our Purpose
            </span>
            <h2 className="text-4xl font-bold text-slate-900">
              Mission & Vision
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Target size={28} className="text-amber-400" />,
                label: "Our Mission",
                gradient: "from-blue-950 via-blue-900 to-blue-800",
                text: "To train highly skilled and motivated medical professionals who can serve nationally and internationally, upholding medical standards.",
              },
              {
                icon: <Eye size={28} className="text-amber-400" />,
                label: "Our Vision",
                gradient: "from-slate-900 via-blue-950 to-slate-800",
                text: "To be one of the leading institutes of health sciences in Uganda, ensuring access to skilled health workers across the country and beyond.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-8 flex flex-col gap-5 relative overflow-hidden`}
                style={{ boxShadow: "0 10px 40px -10px rgba(30,58,95,0.4)" }}
              >
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl w-fit border border-white/20">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{item.label}</h3>
                <div className="h-0.5 w-12 rounded-full bg-amber-400" />
                <p className="text-gray-300 text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col items-center text-center gap-3">
            <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">
              What We Stand For
            </span>
            <h2 className="text-4xl font-bold text-slate-900">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white flex flex-col gap-4 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  boxShadow:
                    "0 4px 6px -1px rgba(0,0,0,0.07), 0 10px 40px -10px rgba(30,58,95,0.2)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 8px 12px -1px rgba(0,0,0,0.1), 0 20px 60px -10px rgba(30,58,95,0.35)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 4px 6px -1px rgba(0,0,0,0.07), 0 10px 40px -10px rgba(30,58,95,0.2)")
                }
              >
                <div className="bg-gradient-to-br from-blue-950 to-blue-800 p-3 rounded-xl w-fit shadow-md">
                  {value.icon}
                </div>
                <h3 className="text-slate-900 font-bold text-base">
                  {value.title}
                </h3>
                <div className="h-0.5 w-10 rounded-full bg-gradient-to-r from-amber-400 to-amber-500" />
                <p className="text-slate-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col items-center text-center gap-3">
            <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">
              Our Team
            </span>
            <h2 className="text-4xl font-bold text-slate-900">Leadership</h2>
            <p className="text-slate-500 text-base max-w-xl">
              Our institute is led by experienced professionals committed to
              delivering quality health sciences education.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((person, index) => (
              <div
                key={index}
                className="group bg-white flex flex-col gap-4 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  boxShadow:
                    "0 4px 6px -1px rgba(0,0,0,0.07), 0 10px 40px -10px rgba(30,58,95,0.2)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 8px 12px -1px rgba(0,0,0,0.1), 0 20px 60px -10px rgba(30,58,95,0.35)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 4px 6px -1px rgba(0,0,0,0.07), 0 10px 40px -10px rgba(30,58,95,0.2)")
                }
              >
                {/* Top Banner */}
                <div className="bg-gradient-to-br from-blue-950 to-blue-900 pt-8 pb-10 px-6 flex flex-col items-center gap-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-2xl font-bold text-blue-950 shadow-lg">
                    {person.initial}
                  </div>
                </div>

                {/* Info */}
                <div className="px-5 pb-6 flex flex-col gap-2 -mt-4">
                  <div className="bg-white rounded-xl px-4 py-3 text-center shadow-sm border border-slate-100">
                    <h3 className="text-slate-900 font-bold text-sm">
                      {person.name}
                    </h3>
                    <p className="text-amber-500 text-xs font-semibold mt-0.5">
                      {person.role}
                    </p>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed text-center pt-1">
                    {person.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
    </div>
  );
}
