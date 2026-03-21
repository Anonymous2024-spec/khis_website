import { Calendar, Tag } from 'lucide-react'

export default function NewsCard({ item }) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col gap-4 hover:shadow-md hover:border-amber-400 transition-all duration-200">

      {/* Category Badge */}
      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-800 w-fit flex items-center gap-1">
        <Tag size={10} />
        {item.category}
      </span>

      {/* Title */}
      <h3 className="text-slate-900 font-semibold text-base leading-snug">
        {item.title}
      </h3>

      {/* Excerpt */}
      <p className="text-slate-500 text-sm leading-relaxed flex-1">
        {item.excerpt}
      </p>

      {/* Date */}
      <div className="flex items-center gap-2 text-xs text-slate-400 border-t border-slate-100 pt-4">
        <Calendar size={12} className="text-amber-400" />
        {item.date}
      </div>
    </div>
  )
}