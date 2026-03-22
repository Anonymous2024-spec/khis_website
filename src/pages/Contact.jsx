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
    value: "0761150846",
    href: "tel:0761150846",
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
    <div>
      {usePageTitle('Contact Us')}
      {/* Page Header */}
      <section className="bg-blue-950 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-3">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
            Get In Touch
          </span>
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
          <p className="text-gray-300 text-base max-w-2xl">
            Have questions about admissions, courses or anything else? Reach out
            to us and we will get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left — Contact Details */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold text-slate-900">
                Contact Information
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Reach us through any of the channels below. We are happy to help
                with any inquiries about our programs and admissions.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="flex flex-col gap-4">
              {contactDetails.map((detail, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-lg p-4 flex items-start gap-4 hover:border-amber-400 hover:shadow-sm transition-all duration-200"
                >
                  <div className="bg-blue-50 p-2.5 rounded-md shrink-0">
                    {detail.icon}
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                      {detail.label}
                    </p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="text-sm text-slate-700 font-medium hover:text-amber-500 transition-colors"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-sm text-slate-700 font-medium">
                        {detail.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-blue-950 rounded-lg h-48 flex flex-col items-center justify-center gap-2">
              <MapPin size={32} className="text-amber-400" />
              <p className="text-white font-semibold text-sm">Kitgum, Uganda</p>
              <p className="text-gray-400 text-xs">P.O Box 334, Kitgum</p>
              <a
                href="https://maps.google.com/?q=Kitgum,Uganda"
                target="_blank"
                rel="noreferrer"
                className="mt-2 text-xs bg-amber-500 hover:bg-amber-400 text-blue-950 font-semibold px-4 py-1.5 rounded-md transition-colors"
              >
                View on Google Maps
              </a>
            </div>
          </div>

          {/* Right — Enquiry Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white border border-slate-200 rounded-lg p-10 flex flex-col items-center gap-5 text-center h-full justify-center">
                <div className="bg-green-100 p-4 rounded-full">
                  <CheckCircle size={40} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Message Sent!
                </h3>
                <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
                  Thank you for reaching out. We have received your message and
                  will get back to you shortly. You can also call us directly on{" "}
                  <span className="font-semibold text-blue-950">
                    0761150846
                  </span>
                  .
                </p>
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
                  className="bg-blue-950 hover:bg-blue-900 text-white font-semibold px-6 py-2.5 rounded-md transition-colors duration-200"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-slate-200 rounded-lg p-8 flex flex-col gap-6"
              >
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                  Send Us a Message
                </h2>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-slate-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`border rounded-md px-4 py-2.5 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-950 transition ${
                        errors.name ? "border-red-400" : "border-slate-200"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-slate-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`border rounded-md px-4 py-2.5 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-950 transition ${
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
                    <label className="text-sm font-medium text-slate-700">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="07XXXXXXXX"
                      className="border border-slate-200 rounded-md px-4 py-2.5 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-950 transition"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-slate-700">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="border border-slate-200 rounded-md px-4 py-2.5 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-950 transition"
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
                  <label className="text-sm font-medium text-slate-700">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Write your message here..."
                    className={`border rounded-md px-4 py-2.5 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-950 transition resize-none ${
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
                  className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-blue-950 font-semibold px-6 py-3 rounded-md transition-colors duration-200 w-full"
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
