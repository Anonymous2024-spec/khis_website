import { Link } from "react-router-dom";
import { ArrowLeft, FlaskConical } from "lucide-react";
import usePageTitle from "../hooks/usePageTitle";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      {usePageTitle("Page Not Found")}
      <div className="flex flex-col items-center text-center gap-6 max-w-md">
        {/* Icon */}
        <div className="bg-blue-950 p-6 rounded-full">
          <FlaskConical size={48} className="text-amber-400" />
        </div>

        {/* 404 */}
        <div className="flex flex-col gap-2">
          <h1 className="text-8xl font-bold text-blue-950">404</h1>
          <h2 className="text-2xl font-bold text-slate-900">Page Not Found</h2>
          <p className="text-slate-500 text-base leading-relaxed">
            The page you are looking for does not exist or may have been moved.
            Let's get you back on track.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-blue-950 hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200 flex-1"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 border-2 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200 flex-1"
          >
            Contact Us
          </Link>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2 w-full border-t border-slate-200 pt-6">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide">
            Quick Links
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "About", path: "/about" },
              { label: "Courses", path: "/courses" },
              { label: "Apply", path: "/apply" },
              { label: "News", path: "/news" },
              { label: "Gallery", path: "/gallery" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-amber-500 hover:text-amber-400 font-medium hover:underline transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
