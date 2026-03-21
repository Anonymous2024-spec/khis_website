import { ShieldCheck, Target, Eye, Users } from 'lucide-react'
import CTABlock from '../components/CTABlock'

const leadership = [
  {
    name: '[Principal Name]',
    role: 'Principal',
    description: 'Oversees the academic and administrative functions of the institute.',
  },
  {
    name: '[Deputy Principal Name]',
    role: 'Deputy Principal',
    description: 'Supports the principal in managing day to day operations of the institute.',
  },
  {
    name: '[HOD Name]',
    role: 'Head of Department — Medical Laboratory',
    description: 'Leads the medical laboratory technology department and clinical training.',
  },
  {
    name: '[HOD Name]',
    role: 'Head of Department — Pharmacy',
    description: 'Leads the pharmacy department and oversees pharmaceutical training programs.',
  },
]

const values = [
  {
    icon: <ShieldCheck size={24} className="text-amber-400" />,
    title: 'Integrity',
    description: 'We uphold the highest standards of honesty and professional ethics in everything we do.',
  },
  {
    icon: <Target size={24} className="text-amber-400" />,
    title: 'Excellence',
    description: 'We are dedicated to delivering quality education that meets national and international standards.',
  },
  {
    icon: <Users size={24} className="text-amber-400" />,
    title: 'Service',
    description: 'We train professionals who are committed to serving communities with compassion and skill.',
  },
]

export default function About() {
  return (
    <div>

      {/* Page Header */}
      <section className="bg-blue-950 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-3">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
            Who We Are
          </span>
          <h1 className="text-4xl font-bold text-white">
            About KIHS
          </h1>
          <p className="text-gray-300 text-base max-w-2xl">
            Learn about our background, mission, vision and the team behind Kitgum Institute of Health Sciences.
          </p>
        </div>
      </section>

      {/* Background */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">
              Our Background
            </span>
            <h2 className="text-3xl font-bold text-slate-900">
              A Leading Health Sciences Institute in Uganda
            </h2>
            <p className="text-slate-500 text-base leading-relaxed">
              Kitgum Institute of Health Sciences is a tertiary private medical training institution located in Kitgum, Uganda. The institute's main goal is to prepare students with a quality education that affords them the opportunity to achieve career through licensure, certification and other professional distinctions.
            </p>
            <p className="text-slate-500 text-base leading-relaxed">
              With support from our partners in England, we continue to grow our facilities, expand our programs and raise the standard of health sciences education in northern Uganda and beyond.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-400 px-5 py-4 rounded-r-md">
              <p className="text-slate-700 font-semibold italic text-base">
                "Dedicated to Excellence"
              </p>
              <p className="text-slate-500 text-sm mt-1">
                — Kitgum Institute of Health Sciences
              </p>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-950 text-white rounded-lg p-6 flex flex-col gap-2">
              <p className="text-3xl font-bold text-amber-400">4</p>
              <p className="text-sm text-gray-300">Programs in Allied Health Sciences</p>
            </div>
            <div className="bg-amber-500 rounded-lg p-6 flex flex-col gap-2">
              <p className="text-3xl font-bold text-blue-950">2-3</p>
              <p className="text-sm text-blue-900 font-medium">Years program duration</p>
            </div>
            <div className="bg-slate-100 rounded-lg p-6 flex flex-col gap-2">
              <p className="text-3xl font-bold text-blue-950">500+</p>
              <p className="text-sm text-slate-500">Students trained</p>
            </div>
            <div className="bg-blue-900 text-white rounded-lg p-6 flex flex-col gap-2">
              <p className="text-3xl font-bold text-amber-400">UG</p>
              <p className="text-sm text-gray-300">Kitgum, Uganda</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-white border border-slate-200 rounded-lg p-8 flex flex-col gap-4">
            <div className="bg-blue-50 p-3 rounded-md w-fit">
              <Target size={28} className="text-blue-950" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
            <p className="text-slate-500 text-base leading-relaxed">
              To train highly skilled and motivated medical professionals who can serve nationally and internationally, upholding medical standards.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-8 flex flex-col gap-4">
            <div className="bg-blue-50 p-3 rounded-md w-fit">
              <Eye size={28} className="text-blue-950" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
            <p className="text-slate-500 text-base leading-relaxed">
              To be one of the leading institutes of health sciences in Uganda, ensuring access to skilled health workers across the country and beyond.
            </p>
          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col items-center text-center gap-3">
            <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">
              What We Stand For
            </span>
            <h2 className="text-3xl font-bold text-slate-900">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 p-6 rounded-lg border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all duration-200"
              >
                <div className="bg-blue-50 p-3 rounded-md w-fit">
                  {value.icon}
                </div>
                <h3 className="text-slate-900 font-semibold text-base">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col items-center text-center gap-3">
            <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">
              Our Team
            </span>
            <h2 className="text-3xl font-bold text-slate-900">Leadership</h2>
            <p className="text-slate-500 text-base max-w-xl">
              Our institute is led by experienced professionals committed to delivering quality health sciences education.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((person, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col gap-3 text-center hover:shadow-md transition-all duration-200"
              >
                <div className="bg-blue-950 text-white rounded-full w-14 h-14 flex items-center justify-center text-xl font-bold mx-auto">
                  {person.name.charAt(1)}
                </div>
                <h3 className="text-slate-900 font-semibold text-base">{person.name}</h3>
                <p className="text-amber-500 text-xs font-semibold">{person.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{person.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock />

    </div>
  )
}

