import { Users, BookOpen, Clock, Award } from 'lucide-react'

const stats = [
  {
    icon: <BookOpen size={28} className="text-amber-400" />,
    value: '4',
    label: 'Programs Offered',
  },
  {
    icon: <Clock size={28} className="text-amber-400" />,
    value: '2-3 Yrs',
    label: 'Program Duration',
  },
  {
    icon: <Users size={28} className="text-amber-400" />,
    value: '500+',
    label: 'Students Trained',
  },
  {
    icon: <Award size={28} className="text-amber-400" />,
    value: '100%',
    label: 'Dedicated to Excellence',
  },
]

export default function StatsBanner() {
  return (
    <section className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-3"
          >
            {stat.icon}
            <p className="text-3xl font-bold text-blue-950">{stat.value}</p>
            <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}