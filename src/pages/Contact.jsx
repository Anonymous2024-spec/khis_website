import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import usePageTitle from "../hooks/usePageTitle";

const contactDetails = [
  {
    icon: <MapPin size={20} className="text-amber-400" />,
    label: "Address",
    value: "P.O Box 334, Kitgum, Uganda",
  },
  {
    icon: <Phone size={20} className="text-amber-400" />,
    label: "Phone",
    value: "+256 777 683228",
    href: "tel:+256777683228",
  },
  {
    icon: <Mail size={20} className="text-amber-400" />,
    label: "Email",
    value: "info@kihs.ac.ug",
    href: "mailto:info@kihs.ac.ug",
  },
  {
    icon: <Clock size={20} className="text-amber-400" />,
    label: "Working Hours",
    value: "Monday – Friday: 8:00am – 5:00pm",
  },
];

export default function Contact() {
  usePageTitle("Contact Us");

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
            Get In Touch
          </span>
          <h1 className="text-5xl font-bold text-white mt-3 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Have questions about admissions, courses or anything else? Reach out
            and we will get back to you as soon as possible.
          </p>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 mt-6" />
        </div>
      </section>

      {/* Contact Details Strip */}
      <section className="bg-white py-10 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map((detail, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 transition-all duration-300 hover:-translate-y-1"
              style={{
                boxShadow:
                  "0 4px 6px -1px rgba(0,0,0,0.05), 0 10px 40px -10px rgba(30,58,95,0.15)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 8px 12px -1px rgba(0,0,0,0.08), 0 20px 60px -10px rgba(30,58,95,0.25)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 4px 6px -1px rgba(0,0,0,0.05), 0 10px 40px -10px rgba(30,58,95,0.15)")
              }
            >
              <div className="bg-gradient-to-br from-blue-950 to-blue-800 p-2.5 rounded-xl shrink-0 shadow-md">
                {detail.icon}
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  {detail.label}
                </p>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="text-sm text-slate-700 font-semibold hover:text-amber-500 transition-colors"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="text-sm text-slate-700 font-semibold">
                    {detail.value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left — Map & Info */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold text-slate-900">Find Us</h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                We are located in Kitgum, Uganda. Visit us during working hours
                or reach out through any of our contact channels.
              </p>
            </div>

            {/* Map Card */}
            <div
              className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 rounded-2xl overflow-hidden relative"
              style={{ boxShadow: "0 10px 40px -10px rgba(30,58,95,0.4)" }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="p-8 flex flex-col items-center gap-4 text-center relative z-10">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/20">
                  <MapPin size={32} className="text-amber-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Kitgum, Uganda</p>
                  <p className="text-gray-400 text-sm mt-1">
                    P.O Box 334, Kitgum
                  </p>
                </div>
                <div className="h-px w-full bg-white/10" />
                <a
                  href="https://maps.google.com/?q=Kitgum,Uganda"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-blue-950 font-bold text-sm px-6 py-2.5 rounded-xl transition-all duration-200 shadow-md"
                >
                  View on Google Maps
                </a>
              </div>
            </div>

            {/* Quick contact note */}
            <div
              className="bg-white rounded-2xl p-5 flex flex-col gap-3"
              style={{
                boxShadow:
                  "0 4px 6px -1px rgba(0,0,0,0.05), 0 10px 40px -10px rgba(30,58,95,0.15)",
              }}
            >
              <p className="text-slate-900 font-bold text-sm">
                Need a quick response?
              </p>
              <p className="text-slate-500 text-xs leading-relaxed">
                Call us directly on{" "}
                <a
                  href="tel:0761150846"
                  className="text-blue-950 font-bold hover:text-amber-500 transition-colors"
                >
                  0761150846
                </a>{" "}
                during working hours for the fastest response.
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div
                className="bg-white rounded-2xl p-12 flex flex-col items-center gap-6 text-center h-full justify-center"
                style={{
                  boxShadow:
                    "0 4px 6px -1px rgba(0,0,0,0.07), 0 10px 40px -10px rgba(30,58,95,0.2)",
                }}
              >
                <div className="bg-gradient-to-br from-green-400 to-green-500 p-5 rounded-full shadow-lg">
                  <CheckCircle size={40} className="text-white" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Message Sent!
                  </h3>
                  <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
                    Thank you for reaching out. We have received your message
                    and will get back to you shortly. You can also call us
                    directly on{" "}
                    <span className="font-bold text-blue-950">0761150846</span>.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      email: "",
                      phone: "",
                      subject: "",
                      message: "",
                    });
                  }}
                  className="bg-gradient-to-r from-blue-950 to-blue-900 hover:from-blue-900 hover:to-blue-800 text-white font-bold px-8 py-3 rounded-xl transition-all duration-200 shadow-md"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 flex flex-col gap-6"
                style={{
                  boxShadow:
                    "0 4px 6px -1px rgba(0,0,0,0.07), 0 10px 40px -10px rgba(30,58,95,0.2)",
                }}
              >
                <div className="flex flex-col gap-1 border-b border-slate-100 pb-5">
                  <h2 className="text-xl font-bold text-slate-900">
                    Send Us a Message
                  </h2>
                  <p className="text-slate-500 text-sm">
                    Fill in the form below and we will get back to you.
                  </p>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-slate-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`border rounded-xl px-4 py-3 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-950 transition bg-slate-50 ${
                        errors.name ? "border-red-400" : "border-slate-200"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-slate-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`border rounded-xl px-4 py-3 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-950 transition bg-slate-50 ${
                        errors.email ? "border-red-400" : "border-slate-200"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Phone & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-slate-700">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="07XXXXXXXX"
                      className="border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-950 transition bg-slate-50"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-slate-700">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-950 transition bg-slate-50"
                    >
                      <option value="">Select a subject</option>
                      <option value="Admissions">Admissions Inquiry</option>
                      <option value="Courses">Course Information</option>
                      <option value="Fees">Fees & Payment</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-slate-700">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Write your message here..."
                    className={`border rounded-xl px-4 py-3 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-950 transition resize-none bg-slate-50 ${
                      errors.message ? "border-red-400" : "border-slate-200"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500">{errors.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-blue-950 font-bold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-md text-sm"
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
