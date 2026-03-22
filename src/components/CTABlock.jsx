import { Link } from "react-router-dom";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function CTABlock() {
  return (
    <section className="bg-blue-950 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text */}
        <div className="flex flex-col gap-3 text-center md:text-left">
          <h2 className="text-3xl font-bold text-white">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-300 text-base max-w-xl">
            Admissions for the 2026/2027 academic year are open. Join Kitgum
            Institute of Health Sciences and take the first step towards a
            rewarding career in health sciences.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <Link
            to="/apply"
            className="bg-amber-500 hover:bg-amber-400 text-blue-950 font-semibold px-6 py-3 rounded-md transition-colors duration-200 flex items-center justify-center gap-2"
          >
            Apply Now <ArrowRight size={16} />
          </Link>

          <a
            href="tel:+256 777 683228"
            className="border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-blue-950 font-semibold px-6 py-3 rounded-md transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <PhoneCall size={16} /> Call Us
          </a>
        </div>
      </div>
    </section>
  );
}
