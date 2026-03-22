import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Courses", path: "/courses" },
  { label: "News", path: "/news" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
  { label: "Partners", path: "/partners" },
];

const courses = [
  "Diploma in Medical Laboratory Technology",
  "Diploma in Pharmacy",
  "Certificate in Medical Laboratory Technology",
  "Certificate in Pharmacy",
];

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-gray-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1 — About */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white text-lg font-bold tracking-wide">
            Kitgum Institute of Health Sciences
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            A tertiary private medical training institution dedicated to
            training highly skilled and motivated medical professionals.
          </p>
          <p className="text-amber-400 font-semibold text-sm italic">
            Dedicated to Excellence
          </p>
        </div>

        {/* Column 2 — Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white text-base font-semibold">Quick Links</h4>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Courses */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white text-base font-semibold">Our Courses</h4>
          <ul className="flex flex-col gap-2">
            {courses.map((course) => (
              <li key={course} className="text-sm text-gray-400">
                {course}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Contact */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white text-base font-semibold">Contact Us</h4>
          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-3 text-sm text-gray-400">
              <MapPin size={16} className="text-amber-400 mt-1 shrink-0" />
              P.O Box 334, Kitgum, Uganda
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-400">
              <Phone size={16} className="text-amber-400 shrink-0" />
              +256 777 683228
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-400">
              <Mail size={16} className="text-amber-400 shrink-0" />
              titolutwa@gmail.com
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <a
              href="#"
              className="text-gray-400 hover:text-amber-400 transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-amber-400 transition-colors"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-amber-400 transition-colors"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Partners Strip */}
      <div className="border-t border-blue-900 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            Funded with support from our partners in England
          </p>
          <div className="bg-blue-900 px-4 py-2 rounded-md text-sm text-amber-400 font-medium">
            UK Funding Partner
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-900 py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Kitgum Institute of Health Sciences.
            All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            School of Allied Health Sciences
          </p>
        </div>
      </div>
    </footer>
  );
}
