import {  useState } from "react";
import { X, ZoomIn } from "lucide-react";
import CTABlock from "../components/CTABlock";
import usePageTitle from "../hooks/usePageTitle";

const galleryItems = [
  {
    id: 1,
    category: "Laboratories",
    title: "Medical Laboratory",
    description: "Students conducting practical laboratory sessions.",
    image: "https://picsum.photos/id/287/600/400",
  },
  {
    id: 2,
    category: "Laboratories",
    title: "Pharmacy Lab",
    description: "Pharmacy students working with medical equipment.",
    image: "https://picsum.photos/id/180/600/400",
  },
  {
    id: 3,
    category: "Laboratories",
    title: "Lab Equipment",
    description: "Modern laboratory equipment for practical training.",
    image: "https://picsum.photos/id/304/600/400",
  },
  {
    id: 4,
    category: "Classrooms",
    title: "Lecture Hall",
    description: "A modern lecture hall for theory classes.",
    image: "https://picsum.photos/id/160/600/400",
  },
  {
    id: 5,
    category: "Classrooms",
    title: "Tutorial Room",
    description: "Small group tutorial and discussion sessions.",
    image: "https://picsum.photos/id/20/600/400",
  },
  {
    id: 6,
    category: "Events",
    title: "Graduation Ceremony",
    description: "Annual graduation ceremony celebrating our students.",
    image: "https://picsum.photos/id/1/600/400",
  },
  {
    id: 7,
    category: "Events",
    title: "Orientation Day",
    description: "New students orientation and welcome program.",
    image: "https://picsum.photos/id/26/600/400",
  },
  {
    id: 8,
    category: "Facilities",
    title: "Library",
    description: "Our well stocked library and reading room.",
    image: "https://picsum.photos/id/24/600/400",
  },
  {
    id: 9,
    category: "Facilities",
    title: "Campus Grounds",
    description: "The main Kitgum campus grounds and buildings.",
    image: "https://picsum.photos/id/164/600/400",
  },
];
const categories = [
  "All",
  ...new Set(galleryItems.map((item) => item.category)),
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div>
      {usePageTitle("Gallery")}
      {/* Page Header */}
      <section className="bg-blue-950 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-3">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
            Our Facilities
          </span>
          <h1 className="text-4xl font-bold text-white">Gallery</h1>
          <p className="text-gray-300 text-base max-w-2xl">
            Take a look at our laboratories, classrooms, facilities and events
            at Kitgum Institute of Health Sciences.
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {/* Category Filters */}
          <div className="flex gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                  activeCategory === cat
                    ? "bg-blue-950 text-white"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-amber-400 hover:text-amber-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-amber-400 transition-all duration-200 cursor-pointer"
              >
                {/* Image */}
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-950/0 group-hover:bg-blue-950/40 transition-all duration-200 flex items-center justify-center">
                    <ZoomIn
                      size={28}
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col gap-2">
                  <span className="text-xs font-semibold text-amber-500 uppercase tracking-wide">
                    {item.category}
                  </span>
                  <h3 className="text-slate-900 font-bold text-base">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Upload Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 flex flex-col gap-2 text-center">
            <p className="text-blue-950 font-semibold text-base">
              More photos coming soon
            </p>
            <p className="text-slate-500 text-sm">
              We are currently updating our gallery with the latest photos of
              our facilities and events. Check back soon.
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center px-6"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-lg overflow-hidden max-w-lg w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="h-64 overflow-hidden bg-slate-200 relative flex items-center justify-center">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <span className="text-slate-400 text-sm font-medium">
                  {selectedItem.title}
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="p-6 flex flex-col gap-3">
              <span className="text-xs font-semibold text-amber-500 uppercase tracking-wide">
                {selectedItem.category}
              </span>
              <h3 className="text-slate-900 font-bold text-lg">
                {selectedItem.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {selectedItem.description}
              </p>
            </div>

            {/* Close Button */}
            <div className="px-6 pb-6">
              <button
                onClick={() => setSelectedItem(null)}
                className="w-full flex items-center justify-center gap-2 bg-blue-950 hover:bg-blue-900 text-white font-semibold py-2.5 rounded-md transition-colors duration-200"
              >
                <X size={16} /> Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <CTABlock />
    </div>
  );
}
