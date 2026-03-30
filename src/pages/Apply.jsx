import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  User,
  BookOpen,
  FileText,
  Users,
} from "lucide-react";
import usePageTitle from "../hooks/usePageTitle";

const steps = [
  { id: 1, label: "Personal Info", icon: <User size={16} /> },
  { id: 2, label: "Qualifications", icon: <BookOpen size={16} /> },
  { id: 3, label: "Next of Kin", icon: <Users size={16} /> },
  { id: 4, label: "Documents", icon: <FileText size={16} /> },
];

const courseOptions = [
  "Diploma in Medical Laboratory Technology",
  "Diploma in Pharmacy",
  "Certificate in Medical Laboratory Technology",
  "Certificate in Pharmacy",
];

export default function Apply() {
  usePageTitle("Apply Now");
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

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
    2: [
      "oLevelSchool",
      "oLevelYear",
      "oLevelGrade",
      "aLevelSchool",
      "aLevelYear",
      "aLevelGrade",
    ],
    3: ["kinName", "kinRelationship", "kinPhone", "kinAddress"],
    4: [],
  };

  const handleNext = async () => {
    const valid = await trigger(stepFields[currentStep]);
    if (valid) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => setCurrentStep((prev) => prev - 1);

  const onSubmit = (data) => {
    setFormData(data);
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

      {/* Form */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          {/* Stepper */}
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center gap-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-colors duration-200 ${
                      currentStep === step.id
                        ? "bg-blue-950 text-white"
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
                        ? "text-blue-950"
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

          {/* Form Card */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-white border border-slate-200 rounded-lg p-8 flex flex-col gap-6">
              {/* Step 1 — Personal Info */}
              {currentStep === 1 && (
                <div className="flex flex-col gap-6">
                  <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                    Personal Information
                  </h2>

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
                  <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                    Previous Qualifications
                  </h2>

                  {/* O Level */}
                  <div className="flex flex-col gap-4">
                    <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                      O-Level Results
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-slate-700">
                          Grade / Passes <span className="text-red-500">*</span>
                        </label>
                        <input
                          {...register("oLevelGrade", {
                            required: "Grade is required",
                          })}
                          type="text"
                          placeholder="e.g. 8 passes"
                          className={`border rounded-md px-4 py-2.5 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-950 transition ${
                            errors.oLevelGrade
                              ? "border-red-400"
                              : "border-slate-200"
                          }`}
                        />
                        {errors.oLevelGrade && (
                          <p className="text-xs text-red-500">
                            {errors.oLevelGrade.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* A Level */}
                  <div className="flex flex-col gap-4">
                    <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                      A-Level Results (For Diploma applicants)
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-slate-700">
                          Principal Passes
                        </label>
                        <input
                          {...register("aLevelGrade")}
                          type="text"
                          placeholder="e.g. Biology, Chemistry"
                          className="border border-slate-200 rounded-md px-4 py-2.5 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-950 transition"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3 — Next of Kin */}
              {currentStep === 3 && (
                <div className="flex flex-col gap-6">
                  <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                    Next of Kin Details
                  </h2>

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
                  <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                    Supporting Documents
                  </h2>
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
              <div className="flex justify-between pt-4 border-t border-slate-100">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center gap-2 border-2 border-slate-200 text-slate-600 hover:border-blue-950 hover:text-blue-950 font-semibold px-6 py-2.5 rounded-md transition-colors duration-200"
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
                    className="flex items-center gap-2 bg-blue-950 hover:bg-blue-900 text-white font-semibold px-6 py-2.5 rounded-md transition-colors duration-200"
                  >
                    Next <ChevronRight size={16} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-blue-950 font-semibold px-6 py-2.5 rounded-md transition-colors duration-200"
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
