import {
  ShieldCheck,
  BookOpenCheck,
  Microscope,
  Globe,
  UserCheck,
  Building2,
} from "lucide-react";

const reasons = [
  {
    icon: <Microscope size={28} className="text-amber-400" />,
    title: "Hands-on Lab Training",
    description:
      "Students get practical experience in fully equipped medical laboratories, preparing them for real-world health environments.",
  },
  {
    icon: <BookOpenCheck size={28} className="text-amber-400" />,
    title: "Accredited Programs",
    description:
      "All our diploma and certificate programs meet national accreditation standards set by the relevant Ugandan health and education bodies.",
  },
  {
    icon: <UserCheck size={28} className="text-amber-400" />,
    title: "Experienced Instructors",
    description:
      "Our faculty are qualified and experienced medical professionals who bring real clinical knowledge into the classroom.",
  },
  {
    icon: <ShieldCheck size={28} className="text-amber-400" />,
    title: "Internationally Supported",
    description:
      "Funded with support from partners in England, ensuring our programs meet both national and international health training standards.",
  },
  {
    icon: <Building2 size={28} className="text-amber-400" />,
    title: "Modern Facilities",
    description:
      "Our campus in Kitgum is equipped with modern classrooms, laboratories and clinical training spaces to support quality learning.",
  },
  {
    icon: <Globe size={28} className="text-amber-400" />,
    title: "Career Opportunities",
    description:
      "Graduates are equipped to serve in health facilities locally and internationally, with licensure and certification pathways available.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">
            Why KIHS
          </span>
          <h2 className="text-3xl font-bold text-slate-900">Why Choose Us</h2>
          <p className="text-slate-500 text-base max-w-2xl">
            At Kitgum Institute of Health Sciences we are committed to producing
            highly skilled and motivated medical professionals who uphold the
            highest medical standards.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group flex flex-col gap-4 p-6 rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1"
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
              {/* Icon */}
              <div className="bg-gradient-to-br from-blue-950 to-blue-800 p-3 rounded-xl w-fit shadow-md">
                {reason.icon}
              </div>

              {/* Title */}
              <h3 className="text-slate-900 font-bold text-base group-hover:text-blue-950 transition-colors duration-200">
                {reason.title}
              </h3>

              {/* Accent line */}
              <div className="h-0.5 w-10 rounded-full bg-gradient-to-r from-amber-400 to-amber-500" />

              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
