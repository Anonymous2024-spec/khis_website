import { Globe, HandshakeIcon, Award, ExternalLink, Phone } from "lucide-react";
import usePageTitle from "../hooks/usePageTitle";
import CTABlock from "../components/CTABlock";

const stats = [
  { value: "1", label: "International Partner" },
  { value: "UK", label: "Funding Country" },
  { value: "4", label: "Programs Supported" },
  { value: "500+", label: "Students Benefited" },
];

const contributions = [
  "Infrastructure and facility development",
  "Program curriculum development support",
  "Staff training and capacity building",
  "Equipment and laboratory supplies",
];

export default function Partners() {
  usePageTitle("Partners & Funders");

  return (
    <div className="bg-slate-50">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
            Our Support Network
          </span>
          <h1 className="text-5xl font-bold text-white mt-3 mb-4">
            Partners & Funders
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Kitgum Institute of Health Sciences is proud to be supported by
            international partners who share our commitment to quality health
            sciences education in Uganda.
          </p>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 mt-6" />
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-white py-10 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-2"
            >
              <p className="text-4xl font-bold text-blue-950">{stat.value}</p>
              <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partner Card */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">
              Who Supports Us
            </span>
            <h2 className="text-4xl font-bold text-slate-900">Our Partners</h2>
            <p className="text-slate-500 text-base max-w-2xl">
              We are grateful for the generous support of our international
              partners who make our work possible.
            </p>
          </div>

          {/* Main Partner Card */}
          <div
            className="bg-white rounded-2xl overflow-hidden"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0,0,0,0.07), 0 10px 40px -10px rgba(30,58,95,0.25)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Left — Visual */}
              <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 p-12 flex flex-col items-center justify-center gap-6 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 relative z-10">
                  <Globe size={48} className="text-amber-400" />
                </div>
                <div className="flex flex-col gap-2 relative z-10">
                  <p className="text-white font-bold text-xl">
                    UK Funding Partner
                  </p>
                  <p className="text-gray-400 text-sm">
                    England, United Kingdom
                  </p>
                </div>
                <div className="h-px w-full bg-white/10 relative z-10" />
                <span className="bg-gradient-to-r from-amber-500 to-amber-400 text-blue-950 text-sm font-bold px-5 py-2 rounded-full shadow-md relative z-10">
                  Primary Funder
                </span>
              </div>

              {/* Right — Details */}
              <div className="lg:col-span-2 p-10 flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-bold text-slate-900">
                    UK Funding Partner
                  </h3>
                  <div className="h-0.5 w-12 rounded-full bg-gradient-to-r from-amber-400 to-amber-500" />
                  <p className="text-slate-500 text-base leading-relaxed">
                    Our primary funding partner based in England has provided
                    crucial support that has enabled Kitgum Institute of Health
                    Sciences to establish and grow its programs, improve
                    facilities and expand access to quality health sciences
                    education in northern Uganda.
                  </p>
                </div>

                {/* Contributions */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-gradient-to-br from-blue-950 to-blue-800 p-2 rounded-lg">
                      <HandshakeIcon size={16} className="text-amber-400" />
                    </div>
                    <p className="text-base font-bold text-slate-900">
                      Areas of Support
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {contributions.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100"
                      >
                        <div className="bg-gradient-to-br from-blue-950 to-blue-800 p-1.5 rounded-lg shrink-0 mt-0.5">
                          <Award size={12} className="text-amber-400" />
                        </div>
                        <p className="text-sm text-slate-600 font-medium">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0,0,0,0.07), 0 10px 40px -10px rgba(30,58,95,0.25)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left */}
              <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 p-12 flex flex-col gap-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
                <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest relative z-10">
                  Join Us
                </span>
                <h2 className="text-3xl font-bold text-white relative z-10">
                  Become a Partner
                </h2>
                <div className="h-0.5 w-12 rounded-full bg-amber-400 relative z-10" />
                <p className="text-gray-300 text-base leading-relaxed relative z-10">
                  Are you an organization, institution or individual who shares
                  our vision of quality health sciences education in Uganda? We
                  welcome partnerships that help us grow and improve our
                  programs and facilities.
                </p>
              </div>

              {/* Right */}
              <div className="bg-white p-12 flex flex-col gap-6 justify-center">
                <h3 className="text-xl font-bold text-slate-900">
                  Get In Touch With Us
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Reach out to us through any of the channels below and we will
                  get back to you with partnership opportunities.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="mailto:info@kihs.ac.ug"
                    className="flex items-center gap-3 bg-gradient-to-r from-blue-950 to-blue-900 hover:from-blue-900 hover:to-blue-800 text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-md text-sm"
                  >
                    <ExternalLink size={16} />
                    Email Us — info@kihs.ac.ug
                  </a>
                  <a
                    href="tel:0761150846"
                    className="flex items-center gap-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold px-6 py-3.5 rounded-xl transition-all duration-200 text-sm"
                  >
                    <Phone size={16} className="text-amber-500" />
                    Call Us — +256 777 683228
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABlock />
    </div>
  );
}
