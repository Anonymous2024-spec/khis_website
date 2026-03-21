import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import NewsCard from './NewsCard'
import { news } from '../data/news'

export default function NewsSection() {
  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">
              Latest Updates
            </span>
            <h2 className="text-3xl font-bold text-slate-900">
              News & Announcements
            </h2>
            <p className="text-slate-500 text-base max-w-xl">
              Stay up to date with the latest news, events and announcements from Kitgum Institute of Health Sciences.
            </p>
          </div>
          <Link
            to="/news"
            className="flex items-center gap-2 text-sm font-semibold text-blue-950 hover:text-amber-500 transition-colors whitespace-nowrap"
          >
            View all news <ArrowRight size={16} />
          </Link>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {news.map(item => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  )
}