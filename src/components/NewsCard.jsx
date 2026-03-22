import { Calendar, Tag, ArrowRight } from 'lucide-react'

const categoryColors = {
  Admissions: 'bg-blue-50 text-blue-700 border border-blue-200',
  Registration: 'bg-amber-50 text-amber-700 border border-amber-200',
  Events: 'bg-slate-50 text-slate-700 border border-slate-200',
}

export default function NewsCard({ item }) {
  const badgeStyle = categoryColors[item.category] || categoryColors['Events']

  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
      style={{
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.07), 0 10px 40px -10px rgba(30,58,95,0.2)',
      }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 12px -1px rgba(0,0,0,0.1), 0 20px 60px -10px rgba(30,58,95,0.35)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.07), 0 10px 40px -10px rgba(30,58,95,0.2)'}
    >
      {/* Top Accent Bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-blue-950 via-blue-800 to-amber-400" />

      {/* Card Body */}
      <div className="p-6 flex flex-col gap-4 flex-1">

        {/* Category Badge */}
        <span className={`text-xs font-semibold px-3 py-1 rounded-full w-fit flex items-center gap-1.5 ${badgeStyle}`}>
          <Tag size={10} />
          {item.category}
        </span>

        {/* Title */}
        <h3 className="text-slate-900 font-bold text-base leading-snug group-hover:text-blue-950 transition-colors duration-200">
          {item.title}
        </h3>

        {/* Divider */}
        <div className="h-px w-full bg-slate-100" />

        {/* Excerpt */}
        <p className="text-slate-500 text-sm leading-relaxed flex-1">
          {item.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <div className="bg-amber-50 p-1.5 rounded-md">
              <Calendar size={11} className="text-amber-500" />
            </div>
            {item.date}
          </div>
          <span className="flex items-center gap-1 text-xs font-semibold text-blue-950 group-hover:text-amber-500 transition-colors duration-200">
            Read more <ArrowRight size={12} />
          </span>
        </div>

      </div>
    </div>
  )
}