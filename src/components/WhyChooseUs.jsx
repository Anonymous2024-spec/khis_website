import { ShieldCheck, BookOpenCheck, Microscope, Globe, UserCheck, Building2 } from 'lucide-react'

const reasons = [
  {
    icon: <Microscope size={28} className="text-amber-400" />,
    title: 'Hands-on Lab Training',
    description:
      'Students get practical experience in fully equipped medical laboratories, preparing them for real-world health environments.',
  },
  {
    icon: <BookOpenCheck size={28} className="text-amber-400" />,
    title: 'Accredited Programs',
    description:
      'All our diploma and certificate programs meet national accreditation standards set by the relevant Ugandan health and education bodies.',
  },
  {
    icon: <UserCheck size={28} className="text-amber-400" />,
    title: 'Experienced Instructors',
    description:
      'Our faculty are qualified and experienced medical professionals who bring real clinical knowledge into the classroom.',
  },
  {
    icon: <ShieldCheck size={28} className="text-amber-400" />,
    title: 'Internationally Supported',
    description:
      'Funded with support from partners in England, ensuring our programs meet both national and international health training standards.',
  },
  {
    icon: <Building2 size={28} className="text-amber-400" />,
    title: 'Modern Facilities',
    description:
      'Our campus in Kitgum is equipped with modern classrooms, laboratories and clinical training spaces to support quality learning.',
  },
  {
    icon: <Globe size={28} className="text-amber-400" />,
    title: 'Career Opportunities',
    description:
      'Graduates are equipped to serve in health facilities locally and internationally, with licensure and certification pathways available.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">
            Why KIHS
          </span>
          <h2 className="text-3xl font-bold text-slate-900">
            Why Choose Us
          </h2>
          <p className="text-slate-500 text-base max-w-2xl">
            At Kitgum Institute of Health Sciences we are committed to producing highly skilled and motivated medical professionals who uphold the highest medical standards.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 p-6 rounded-lg border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all duration-200"
            >
              <div className="bg-blue-50 p-3 rounded-md w-fit">
                {reason.icon}
              </div>
              <h3 className="text-slate-900 font-semibold text-base">
                {reason.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}