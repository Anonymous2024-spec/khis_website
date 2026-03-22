import { useState } from "react";
import { Calendar, Tag, Search } from "lucide-react";
import { news } from "../data/news";
import CTABlock from "../components/CTABlock";
import usePageTitle from '../hooks/usePageTitle'

const categories = ["All", ...new Set(news.map((item) => item.category))];

export default function News() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = news.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {usePageTitle('News & Announcements')}
      {/* Page Header */}
      <section className="bg-blue-950 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-3">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
            Latest Updates
          </span>
          <h1 className="text-4xl font-bold text-white">
            News & Announcements
          </h1>
          <p className="text-gray-300 text-base max-w-2xl">
            Stay up to date with the latest news, events and announcements from
            Kitgum Institute of Health Sciences.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {/* Search & Filter Row */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Search */}
            <div className="relative w-full sm:max-w-sm">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-slate-200 rounded-md pl-9 pr-4 py-2.5 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-950 transition bg-white"
              />
            </div>

            {/* Category Filters */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                    activeCategory === cat
                      ? "bg-blue-950 text-white"
                      : "bg-white border border-slate-200 text-slate-600 hover:border-amber-400 hover:text-amber-500"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* News Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-md hover:border-amber-400 transition-all duration-200 flex flex-col"
                >
                  {/* Card Top Color Bar */}
                  <div className="bg-blue-950 h-2 w-full" />

                  <div className="p-6 flex flex-col gap-4 flex-1">
                    {/* Category Badge */}
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-800 w-fit flex items-center gap-1">
                      <Tag size={10} />
                      {item.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-slate-900 font-semibold text-base leading-snug flex-1">
                      {item.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.excerpt}
                    </p>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-xs text-slate-400 border-t border-slate-100 pt-4">
                      <Calendar size={12} className="text-amber-400" />
                      {item.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <div className="bg-slate-100 p-6 rounded-full">
                <Search size={32} className="text-slate-400" />
              </div>
              <p className="text-slate-500 font-medium">
                No news found matching your search.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="text-sm text-amber-500 font-semibold hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTABlock />
    </div>
  );
}
