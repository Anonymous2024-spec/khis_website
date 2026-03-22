import { Globe, HandshakeIcon, Award, ExternalLink } from "lucide-react";
import CTABlock from "../components/CTABlock";

const partners = [
  {
    id: 1,
    name: "UK Funding Partner",
    country: "England, United Kingdom",
    type: "Primary Funder",
    description:
      "Our primary funding partner based in England has provided crucial support that has enabled Kitgum Institute of Health Sciences to establish and grow its programs, improve facilities and expand access to quality health sciences education in northern Uganda.",
    contribution: [
      "Infrastructure and facility development",
      "Program curriculum development support",
      "Staff training and capacity building",
      "Equipment and laboratory supplies",
    ],
    logo: null,
  },
];

const stats = [
  {
    value: "1",
    label: "International Partner",
  },
  {
    value: "UK",
    label: "Funding Country",
  },
  {
    value: "4",
    label: "Programs Supported",
  },
  {
    value: "500+",
    label: "Students Benefited",
  },
];

export default function Partners() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-blue-950 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-3">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
            Our Support Network
          </span>
          <h1 className="text-4xl font-bold text-white">Partners & Funders</h1>
          <p className="text-gray-300 text-base max-w-2xl">
            Kitgum Institute of Health Sciences is proud to be supported by
            international partners who share our commitment to quality health
            sciences education in Uganda.
          </p>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-white border-b border-slate-200 py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-2"
            >
              <p className="text-3xl font-bold text-blue-950">{stat.value}</p>
              <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">
              Who Supports Us
            </span>
            <h2 className="text-3xl font-bold text-slate-900">Our Partners</h2>
            <p className="text-slate-500 text-base max-w-2xl">
              We are grateful for the generous support of our international
              partners who make our work possible.
            </p>
          </div>

          {/* Partner Cards */}
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-200"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Left — Logo / Country */}
                <div className="bg-blue-950 p-10 flex flex-col items-center justify-center gap-4 text-center">
                  <div className="bg-blue-900 p-5 rounded-full">
                    <Globe size={40} className="text-amber-400" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-white font-bold text-lg">
                      {partner.name}
                    </p>
                    <p className="text-gray-400 text-sm">{partner.country}</p>
                  </div>
                  <span className="bg-amber-500 text-blue-950 text-xs font-semibold px-4 py-1.5 rounded-full">
                    {partner.type}
                  </span>
                </div>

                {/* Right — Details */}
                <div className="lg:col-span-2 p-8 flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-slate-900">
                      {partner.name}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {partner.description}
                    </p>
                  </div>

                  {/* Contributions */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <HandshakeIcon size={16} className="text-amber-400" />
                      <p className="text-sm font-semibold text-slate-700">
                        Areas of Support
                      </p>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {partner.contribution.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-slate-500"
                        >
                          <Award
                            size={14}
                            className="text-amber-400 shrink-0 mt-0.5"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Become a Partner */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex flex-col gap-3 flex-1">
              <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">
                Join Us
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                Become a Partner
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xl">
                Are you an organization, institution or individual who shares
                our vision of quality health sciences education in Uganda? We
                welcome partnerships that help us grow and improve our programs
                and facilities.
              </p>
            </div>

            <div className="flex flex-col gap-3 shrink-0">
              <a
                href="mailto:info@kihs.ac.ug"
                className="flex items-center justify-center gap-2 bg-blue-950 hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200"
              >
                <ExternalLink size={16} /> Get In Touch
              </a>
              <a
                href="tel:0761150846"
                className="flex items-center justify-center gap-2 border-2 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABlock />
    </div>
  );
}
