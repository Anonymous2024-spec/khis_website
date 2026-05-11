import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  User,
  BookOpen,
  FileText,
  Users,
  ClipboardList,
  Briefcase,
  Plus,
  X,
} from "lucide-react";
import { courses } from "../data/courses";
import usePageTitle from "../hooks/usePageTitle";

const steps = [
  { id: 1, label: "Personal Info", icon: <User size={16} /> },
  { id: 2, label: "Qualifications", icon: <BookOpen size={16} /> },
  { id: 3, label: "Next of Kin", icon: <Users size={16} /> },
  { id: 4, label: "Documents", icon: <FileText size={16} /> },
];

const courseOptions = [
  "Diploma in Medical Laboratory Techniques",
  "Diploma in Pharmacy",
  "Certificate in Medical Laboratory Techniques",
  "Certificate in Pharmacy",
];

export default function Apply() {
  usePageTitle("Apply Now");
  const [searchParams] = useSearchParams();
  const courseParam = searchParams.get("course");

  // Get the selected course object
  const selectedCourse = courseParam
    ? courses.find((c) => c.id === parseInt(courseParam))
    : null;

  const preSelectedCourse = selectedCourse?.title || "";

  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({});
  const [oLevelSubjects, setOLevelSubjects] = useState([
    { subject: "", grade: "" },
  ]);
  const [aLevelSubjects, setALevelSubjects] = useState([
    { subject: "", grade: "" },
  ]);

  // Grade to points mapping (Uganda system)
  const gradePoints = {
    A: 4,
    B: 3,
    C: 2,
    D: 1,
    E: 0,
  };

  const calculatePoints = (subjects) => {
    return subjects
      .filter((s) => s.subject && s.grade)
      .reduce((total, s) => total + (gradePoints[s.grade] || 0), 0);
  };

  const addOLevelSubject = () => {
    setOLevelSubjects([...oLevelSubjects, { subject: "", grade: "" }]);
  };

  const removeOLevelSubject = (index) => {
    setOLevelSubjects(oLevelSubjects.filter((_, i) => i !== index));
  };

  const updateOLevelSubject = (index, field, value) => {
    const updated = [...oLevelSubjects];
    updated[index][field] = value;
    setOLevelSubjects(updated);
  };

  const addALevelSubject = () => {
    setALevelSubjects([...aLevelSubjects, { subject: "", grade: "" }]);
  };

  const removeALevelSubject = (index) => {
    setALevelSubjects(aLevelSubjects.filter((_, i) => i !== index));
  };

  const updateALevelSubject = (index, field, value) => {
    const updated = [...aLevelSubjects];
    updated[index][field] = value;
    setALevelSubjects(updated);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({
    defaultValues: {
      course: preSelectedCourse,
    },
  });

  const stepFields = {
    1: [
      "fullName",
      "dateOfBirth",
      "nationalId",
      "email",
      "phone",
      "gender",
      "course",
    ],
    2: ["oLevelSchool", "oLevelYear"],
    3: ["kinName", "kinRelationship", "kinPhone", "kinAddress"],
    4: [],
  };

  const handleNext = async () => {
    const valid = await trigger(stepFields[currentStep]);
    if (valid) {
      console.log(`Moving from step ${currentStep} to ${currentStep + 1}`);
      setCurrentStep((prev) => prev + 1);
    } else {
      console.log(`Validation failed for step ${currentStep}`);
    }
  };

  const handleBack = () => setCurrentStep((prev) => prev - 1);

  const onSubmit = (data) => {
    console.log("Form submitted");
    setFormData({
      ...data,
      oLevelSubjects,
      aLevelSubjects,
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-20">
        <div className="bg-white border border-slate-200 rounded-lg p-10 max-w-md w-full flex flex-col items-center gap-6 text-center shadow-md">
          <div className="bg-green-100 p-4 rounded-full">
            <CheckCircle size={40} className="text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            Application Submitted!
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Thank you for applying to Kitgum Institute of Health Sciences. We
            have received your application and will be in touch shortly. Please
            call us on{" "}
            <span className="font-semibold text-blue-950">0761150846</span> for
            any inquiries.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-md px-4 py-3 w-full">
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-amber-600">
                Course Applied:{" "}
              </span>
              {formData.course}
            </p>
          </div>
          <button
            onClick={() => {
              setSubmitted(false);
              setCurrentStep(1);
            }}
            className="bg-blue-950 hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200 w-full"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
        <div className="max-w-7xl mx-auto flex flex-col gap-3">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
            Admissions 2026/2027
          </span>
          <h1 className="text-4xl font-bold text-white">Apply Now</h1>
          <p className="text-gray-300 text-base max-w-2xl">
            Fill in the form below to apply for a program at Kitgum Institute of
            Health Sciences. Classes commence July 2026.
          </p>
        </div>
      </section>

      {/* Course Details Section - if course is selected */}
      {selectedCourse && (
        <section className="bg-gradient-to-b from-slate-50 to-white px-6 py-16 border-b border-slate-200">
          <div className="max-w-7xl mx-auto">
            {/* Course Header */}
            <div className="mb-12">
              <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">
                Course Details
              </span>
              <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-4">
                {selectedCourse.title}
              </h2>
              <p className="text-slate-600 text-base max-w-3xl">
                {selectedCourse.description}
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left Column - Course Info */}
              <div className="flex flex-col gap-8">
                {/* Quick Facts */}
                <div className="flex flex-col gap-3">
                  <h4 className="text-sm font-bold text-slate-700 uppercase tracking-widest">
                    Quick Facts
                  </h4>
                  <div className="bg-white rounded-lg p-5 border border-blue-100 shadow-sm">
                    <p className="text-xs text-slate-500 mb-2">DURATION</p>
                    <p className="text-xl font-bold text-blue-950">
                      {selectedCourse.duration}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-5 border border-amber-100 shadow-sm">
                    <p className="text-xs text-slate-500 mb-2">ANNUAL FEE</p>
                    <p className="text-xl font-bold text-blue-950">
                      UGX {selectedCourse.fee}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-5 border border-slate-100 shadow-sm">
                    <p className="text-xs text-slate-500 mb-2">COURSE TYPE</p>
                    <p className="text-xl font-bold text-blue-950">
                      {selectedCourse.type}
                    </p>
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="text-sm font-bold text-slate-700 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <BookOpen size={16} className="text-amber-500" />
                    Highlights
                  </h4>
                  <div className="space-y-2">
                    {selectedCourse.programHighlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-100 text-xs"
                      >
                        <CheckCircle
                          size={16}
                          className="text-green-600 mt-0.5 flex-shrink-0"
                        />
                        <p className="text-slate-700">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Requirements */}
                <div>
                  <h4 className="text-sm font-bold text-slate-700 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <ClipboardList size={16} className="text-amber-500" />
                    Requirements
                  </h4>
                  <div className="bg-blue-50 rounded-lg border border-blue-100 p-4 space-y-2">
                    {selectedCourse.requirements.map((req, idx) => (
                      <p
                        key={idx}
                        className="flex items-start gap-2 text-xs text-slate-700"
                      >
                        <span className="text-blue-950 font-bold mt-0.5 text-sm">
                          ✓
                        </span>
                        <span>{req}</span>
                      </p>
                    ))}
                  </div>
                </div>

                {/* Career Opportunities */}
                <div>
                  <h4 className="text-sm font-bold text-slate-700 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Briefcase size={16} className="text-amber-500" />
                    Careers
                  </h4>
                  <div className="space-y-2">
                    {selectedCourse.careerOpportunities.map(
                      (opportunity, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg border border-amber-100 text-xs"
                        >
                          <CheckCircle
                            size={14}
                            className="text-amber-600 flex-shrink-0"
                          />
                          <p className="text-slate-800 font-medium">
                            {opportunity}
                          </p>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column - Form Preview */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-blue-950 to-blue-900 overflow-hidden">
                  {selectedCourse?.image && (
                    <img
                      src={selectedCourse.image}
                      alt={selectedCourse.title}
                      className="w-full h-full object-cover opacity-80"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20" />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    Ready to Apply?
                  </h4>
                  <p className="text-sm text-slate-600 mb-6">
                    Complete the application form below to join our program
                  </p>
                  <div className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-md hover:shadow-lg transition-shadow">
                    Fill in 4 easy steps
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Form */}
      <section className="bg-slate-50 py-16 px-6">
        <div
          className={`${selectedCourse ? "max-w-6xl" : "max-w-3xl"} mx-auto flex flex-col gap-8`}
        >
          {/* Stepper */}
          <div className="bg-white rounded-lg p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center flex-1">
                  <div className="flex flex-col items-center gap-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-colors duration-200 ${
                        currentStep === step.id
                          ? "bg-blue-950 text-white shadow-lg"
                          : currentStep > step.id
                            ? "bg-amber-500 text-blue-950"
                            : "bg-white border-2 border-slate-200 text-slate-400"
                      }`}
                    >
                      {currentStep > step.id ? (
                        <CheckCircle size={18} />
                      ) : (
                        step.icon
                      )}
                    </div>
                    <span
                      className={`text-xs font-medium hidden sm:block ${
                        currentStep === step.id
                          ? "text-blue-950 font-bold"
                          : "text-slate-400"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`flex-1 h-0.5 mx-2 transition-colors duration-200 ${
                        currentStep > step.id ? "bg-amber-500" : "bg-slate-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-white border border-slate-200 rounded-lg p-8 flex flex-col gap-6 shadow-md">
              {/* Step 1 — Personal Info */}
              {currentStep === 1 && (
                <div className="flex flex-col gap-6">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Personal Information
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">
                      Tell us about yourself
                    </p>
                  </div>

                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-slate-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("fullName", {
                        required: "Full name is required",
                      })}
                      type="text"
                      placeholder="Enter your full name"
                      className={`border rounded-md px-4 py-2.5 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-950 transition ${
                        errors.fullName ? "border-red-400" : "border-slate-200"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-500">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Date of Birth & Gender */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-slate-700">
                        Date of Birth <span className="text-red-500">*</span>
                      </label>
                      <input
                        {...register("dateOfBirth", {
                          required: "Date of birth is required",
                        })}
                        type="date"
                        className={`border rounded-md px-4 py-2.5 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-950 transition ${
                          errors.dateOfBirth
                            ? "border-red-400"
                            : "border-slate-200"
                        }`}
                      />
                      {errors.dateOfBirth && (
                        <p className="text-xs text-red-500">
                          {errors.dateOfBirth.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-slate-700">
                        Gender <span className="text-red-500">*</span>
                      </label>
                      <select
                        {...register("gender", {
                          required: "Gender is required",
                        })}
                        className={`border rounded-md px-4 py-2.5 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-950 transition ${
                          errors.gender ? "border-red-400" : "border-slate-200"
                        }`}
                      >
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                      {errors.gender && (
                        <p className="text-xs text-red-500">
                          {errors.gender.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* National ID */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-slate-700">
                      National ID / Passport No.{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("nationalId", {
                        required: "National ID is required",
                      })}
                      type="text"
                      placeholder="Enter your National ID or Passport number"
                      className={`border rounded-md px-4 py-2.5 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-950 transition ${
                        errors.nationalId
                          ? "border-red-400"
                          : "border-slate-200"
                      }`}
                    />
                    {errors.nationalId && (
                      <p className="text-xs text-red-500">
                        {errors.nationalId.message}
                      </p>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-slate-700">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^\S+@\S+\.\S+$/,
                            message: "Enter a valid email",
                          },
                        })}
                        type="email"
                        placeholder="you@example.com"
                        className={`border rounded-md px-4 py-2.5 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-950 transition ${
                          errors.email ? "border-red-400" : "border-slate-200"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-slate-700">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        {...register("phone", {
                          required: "Phone number is required",
                        })}
                        type="tel"
                        placeholder="07XXXXXXXX"
                        className={`border rounded-md px-4 py-2.5 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-950 transition ${
                          errors.phone ? "border-red-400" : "border-slate-200"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Course Selection */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-slate-700">
                      Course Applying For{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      {...register("course", {
                        required: "Please select a course",
                      })}
                      className={`border rounded-md px-4 py-2.5 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-950 transition ${
                        errors.course ? "border-red-400" : "border-slate-200"
                      }`}
                    >
                      <option value="">Select a course</option>
                      {courseOptions.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                    {errors.course && (
                      <p className="text-xs text-red-500">
                        {errors.course.message}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Step 2 — Qualifications */}
              {currentStep === 2 && (
                <div className="flex flex-col gap-6">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Previous Qualifications
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">
                      Tell us about your academic background
                    </p>
                  </div>

                  {/* O Level */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                        O-Level Results
                      </h3>
                      <span className="text-xs bg-blue-100 text-blue-950 px-3 py-1 rounded-full font-semibold">
                        Total Points: {calculatePoints(oLevelSubjects)}
                      </span>
                    </div>

                    {/* School and Year */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-slate-700">
                          School Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          {...register("oLevelSchool", {
                            required: "School name is required",
                          })}
                          type="text"
                          placeholder="School name"
                          className={`border rounded-md px-4 py-2.5 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-950 transition ${
                            errors.oLevelSchool
                              ? "border-red-400"
                              : "border-slate-200"
                          }`}
                        />
                        {errors.oLevelSchool && (
                          <p className="text-xs text-red-500">
                            {errors.oLevelSchool.message}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-slate-700">
                          Year <span className="text-red-500">*</span>
                        </label>
                        <input
                          {...register("oLevelYear", {
                            required: "Year is required",
                          })}
                          type="number"
                          placeholder="e.g. 2022"
                          className={`border rounded-md px-4 py-2.5 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-950 transition ${
                            errors.oLevelYear
                              ? "border-red-400"
                              : "border-slate-200"
                          }`}
                        />
                        {errors.oLevelYear && (
                          <p className="text-xs text-red-500">
                            {errors.oLevelYear.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subjects Table */}
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-slate-300">
                              <th className="text-left py-2 px-3 font-semibold text-slate-700">
                                Subject
                              </th>
                              <th className="text-left py-2 px-3 font-semibold text-slate-700">
                                Grade
                              </th>
                              <th className="text-center py-2 px-3 font-semibold text-slate-700">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {oLevelSubjects.map((sub, index) => (
                              <tr
                                key={index}
                                className="border-b border-slate-200"
                              >
                                <td className="py-3 px-3">
                                  <input
                                    type="text"
                                    placeholder="e.g. Mathematics"
                                    value={sub.subject}
                                    onChange={(e) =>
                                      updateOLevelSubject(
                                        index,
                                        "subject",
                                        e.target.value,
                                      )
                                    }
                                    className="w-full border border-slate-300 rounded px-3 py-1.5 text-sm focus:ring-2 focus:ring-blue-950 outline-none"
                                  />
                                </td>
                                <td className="py-3 px-3">
                                  <select
                                    value={sub.grade}
                                    onChange={(e) =>
                                      updateOLevelSubject(
                                        index,
                                        "grade",
                                        e.target.value,
                                      )
                                    }
                                    className="w-full border border-slate-300 rounded px-3 py-1.5 text-sm focus:ring-2 focus:ring-blue-950 outline-none"
                                  >
                                    <option value="">Select grade</option>
                                    <option value="A">A (4 points)</option>
                                    <option value="B">B (3 points)</option>
                                    <option value="C">C (2 points)</option>
                                    <option value="D">D (1 point)</option>
                                    <option value="E">E (0 points)</option>
                                  </select>
                                </td>
                                <td className="py-3 px-3 text-center">
                                  {oLevelSubjects.length > 1 && (
                                    <button
                                      type="button"
                                      onClick={() => removeOLevelSubject(index)}
                                      className="text-red-500 hover:text-red-700 transition"
                                    >
                                      <X size={16} />
                                    </button>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <button
                        type="button"
                        onClick={addOLevelSubject}
                        className="mt-3 flex items-center gap-2 text-sm font-semibold text-blue-950 hover:text-blue-700 transition"
                      >
                        <Plus size={16} /> Add Subject
                      </button>
                    </div>
                  </div>

                  {/* A Level */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                        A-Level Results (For Diploma applicants)
                      </h3>
                      <span className="text-xs bg-amber-100 text-amber-900 px-3 py-1 rounded-full font-semibold">
                        Total Points: {calculatePoints(aLevelSubjects)}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-slate-700">
                          School Name
                        </label>
                        <input
                          {...register("aLevelSchool")}
                          type="text"
                          placeholder="School name"
                          className="border border-slate-200 rounded-md px-4 py-2.5 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-950 transition"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-slate-700">
                          Year
                        </label>
                        <input
                          {...register("aLevelYear")}
                          type="number"
                          placeholder="e.g. 2024"
                          className="border border-slate-200 rounded-md px-4 py-2.5 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-950 transition"
                        />
                      </div>
                    </div>

                    {/* Subjects Table */}
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-slate-300">
                              <th className="text-left py-2 px-3 font-semibold text-slate-700">
                                Subject
                              </th>
                              <th className="text-left py-2 px-3 font-semibold text-slate-700">
                                Grade
                              </th>
                              <th className="text-center py-2 px-3 font-semibold text-slate-700">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {aLevelSubjects.map((sub, index) => (
                              <tr
                                key={index}
                                className="border-b border-slate-200"
                              >
                                <td className="py-3 px-3">
                                  <input
                                    type="text"
                                    placeholder="e.g. Biology"
                                    value={sub.subject}
                                    onChange={(e) =>
                                      updateALevelSubject(
                                        index,
                                        "subject",
                                        e.target.value,
                                      )
                                    }
                                    className="w-full border border-slate-300 rounded px-3 py-1.5 text-sm focus:ring-2 focus:ring-blue-950 outline-none"
                                  />
                                </td>
                                <td className="py-3 px-3">
                                  <select
                                    value={sub.grade}
                                    onChange={(e) =>
                                      updateALevelSubject(
                                        index,
                                        "grade",
                                        e.target.value,
                                      )
                                    }
                                    className="w-full border border-slate-300 rounded px-3 py-1.5 text-sm focus:ring-2 focus:ring-blue-950 outline-none"
                                  >
                                    <option value="">Select grade</option>
                                    <option value="A">A (4 points)</option>
                                    <option value="B">B (3 points)</option>
                                    <option value="C">C (2 points)</option>
                                    <option value="D">D (1 point)</option>
                                    <option value="E">E (0 points)</option>
                                  </select>
                                </td>
                                <td className="py-3 px-3 text-center">
                                  {aLevelSubjects.length > 1 && (
                                    <button
                                      type="button"
                                      onClick={() => removeALevelSubject(index)}
                                      className="text-red-500 hover:text-red-700 transition"
                                    >
                                      <X size={16} />
                                    </button>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <button
                        type="button"
                        onClick={addALevelSubject}
                        className="mt-3 flex items-center gap-2 text-sm font-semibold text-blue-950 hover:text-blue-700 transition"
                      >
                        <Plus size={16} /> Add Subject
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3 — Next of Kin */}
              {currentStep === 3 && (
                <div className="flex flex-col gap-6">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Next of Kin Details
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">
                      Emergency contact information
                    </p>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-slate-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("kinName", {
                        required: "Next of kin name is required",
                      })}
                      type="text"
                      placeholder="Full name of next of kin"
                      className={`border rounded-md px-4 py-2.5 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-950 transition ${
                        errors.kinName ? "border-red-400" : "border-slate-200"
                      }`}
                    />
                    {errors.kinName && (
                      <p className="text-xs text-red-500">
                        {errors.kinName.message}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-slate-700">
                        Relationship <span className="text-red-500">*</span>
                      </label>
                      <select
                        {...register("kinRelationship", {
                          required: "Relationship is required",
                        })}
                        className={`border rounded-md px-4 py-2.5 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-950 transition ${
                          errors.kinRelationship
                            ? "border-red-400"
                            : "border-slate-200"
                        }`}
                      >
                        <option value="">Select relationship</option>
                        <option value="Parent">Parent</option>
                        <option value="Guardian">Guardian</option>
                        <option value="Sibling">Sibling</option>
                        <option value="Spouse">Spouse</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.kinRelationship && (
                        <p className="text-xs text-red-500">
                          {errors.kinRelationship.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-slate-700">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        {...register("kinPhone", {
                          required: "Phone number is required",
                        })}
                        type="tel"
                        placeholder="07XXXXXXXX"
                        className={`border rounded-md px-4 py-2.5 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-950 transition ${
                          errors.kinPhone
                            ? "border-red-400"
                            : "border-slate-200"
                        }`}
                      />
                      {errors.kinPhone && (
                        <p className="text-xs text-red-500">
                          {errors.kinPhone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-slate-700">
                      Physical Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("kinAddress", {
                        required: "Address is required",
                      })}
                      type="text"
                      placeholder="Village, District"
                      className={`border rounded-md px-4 py-2.5 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-950 transition ${
                        errors.kinAddress
                          ? "border-red-400"
                          : "border-slate-200"
                      }`}
                    />
                    {errors.kinAddress && (
                      <p className="text-xs text-red-500">
                        {errors.kinAddress.message}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Step 4 — Documents */}
              {currentStep === 4 && (
                <div className="flex flex-col gap-6">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Supporting Documents
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">
                      Upload required documents to complete your application
                    </p>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Please upload copies of the following documents. Accepted
                    formats: PDF, JPG, PNG. Max size: 2MB per file.
                  </p>

                  {[
                    {
                      label: "O-Level Certificate / Result Slip",
                      name: "oLevelDoc",
                    },
                    {
                      label:
                        "A-Level Certificate / Result Slip (Diploma applicants)",
                      name: "aLevelDoc",
                    },
                    { label: "National ID / Passport", name: "nationalIdDoc" },
                    { label: "Passport Photo", name: "passportPhoto" },
                  ].map((doc) => (
                    <div key={doc.name} className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-slate-700">
                        {doc.label}
                      </label>
                      <input
                        {...register(doc.name)}
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="border border-slate-200 rounded-md px-4 py-2.5 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-950 transition file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-blue-950 file:text-white hover:file:bg-blue-900"
                      />
                    </div>
                  ))}

                  <div className="bg-amber-50 border border-amber-200 rounded-md px-4 py-3">
                    <p className="text-sm text-slate-600">
                      <span className="font-semibold text-amber-600">
                        Note:{" "}
                      </span>
                      Applicants with qualifications from outside Uganda must
                      have them equated by UNEB or the Professional Council of
                      Uganda before admission.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between gap-4 pt-6 border-t border-slate-100">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center gap-2 px-8 py-3 rounded-lg border-2 border-slate-200 text-slate-700 hover:border-blue-950 hover:text-blue-950 hover:bg-blue-50 font-semibold transition-all duration-200"
                  >
                    <ChevronLeft size={16} /> Back
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < steps.length ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-blue-950 to-blue-900 hover:from-blue-900 hover:to-blue-800 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    Next <ChevronRight size={16} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    Submit Application <CheckCircle size={16} />
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
