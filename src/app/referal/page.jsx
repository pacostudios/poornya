"use client";

import Footer from "@/components/Footer";
import {
  CalendarCheck,
  Check,
  FileText,
  Mail,
  MapPin,
  Phone,
  SendHorizontal,
  UserRoundMinus,
} from "lucide-react";

export default function referal() {
  const steps = [
    {
      step: "Step 01",
      title: "Complete The Form",
      desc: "Simple, secure, and streamlined for your convenience.",
      icon: <FileText size={70} />,
    },
    {
      step: "Step 02",
      title: "We Review",
      desc: "Our team will assess suitability and contact you within 48 hours.",
      icon: <CalendarCheck size={70} />,
    },
    {
      step: "Step 03",
      title: "Schedule Appointment",
      desc: "We coordinate with the participant to begin services.",
      icon: <UserRoundMinus size={70} />,
    },
  ];

  const referrers = [
    "NDIS Support Coordinators",
    "Allied Health Professionals",
    "Community Service Organisations",
    "Family Members Or Carers",
    "Case Managers",
  ];

  const eligibilityCategories = [
    "Improved Relationships (CB)",
    "Behaviour Support Funding",
    "High-Risk Support Needs",
  ];

  return (
    <div className="p-2 bg-gradient-to-r from-[#FBFBFB] to-[#EFF3D0]">
      {/* HEADER */}
      <div className="bg-[#98C44B] w-full py-20 sm:py-28 md:py-36 rounded-lg bg-[url('/referalLine.png')] bg-no-repeat bg-bottom left bg-cover">
        <p className="text-center font-semibold text-4xl sm:text-5xl md:text-6xl text-[#003A11]">
          Referral
        </p>
      </div>

      {/* STEPS SECTION */}
      <section className="px-4 sm:px-8 md:px-12 mb-16">
        <div className="py-12 text-center">
          <p className="font-medium text-2xl sm:text-3xl">
            Simple, secure, and streamlined for your convenience
          </p>
        </div>

        <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-[#F5F5F5] rounded-2xl flex flex-col gap-6 py-6 shadow-sm px-6 text-left"
            >
              <div>
                <span className="inline-block bg-black text-white font-semibold text-xs px-4 py-1 rounded-full mb-3">
                  {item.step}
                </span>

                <p className="text-[#000000B2] font-medium text-sm mb-6 w-4/5">
                  {item.desc}
                </p>
              </div>

              <div className="flex justify-center mb-4 text-[#00000080]">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* WHO CAN REFER + ELIGIBILITY SECTION */}
      <section className="bg-[#7CCA984D] px-4 sm:px-10 md:px-20 py-16 flex items-center rounded-lg justify-center mb-16 bg-[url('/canReferLine.png')] bg-cover bg-left">
        <div className="w-full relative">
          {/* Decorative Circles */}
          <div className="absolute top-0 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-yellow-100 rounded-full opacity-60 -z-10"></div>
          <div className="absolute bottom-0 right-1/4 w-40 h-40 sm:w-64 sm:h-64 bg-green-200 rounded-full opacity-40 -z-10"></div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Who Can Refer */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                Who Can Refer
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                We Welcome Referrals From A Variety Of Professionals
              </p>

              <ul className="space-y-4">
                {referrers.map((referrer, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-800" strokeWidth={3} />
                    <span className="text-gray-700 font-medium">
                      {referrer}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Eligibility */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                Eligibility
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                Participants With NDIS Funding Under These Categories Are
                Eligible
              </p>

              <ul className="space-y-4">
                {eligibilityCategories.map((category, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-800" strokeWidth={3} />
                    <span className="text-gray-700 font-medium">
                      {category}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="mb-16 px-4 sm:px-10 md:px-20">
        <div className="py-8 text-center">
          <p className="font-medium text-2xl sm:text-3xl">Submit a Referral</p>
          <p>Complete the form below to refer a participant</p>
        </div>

        <div className="max-w-5xl mx-auto p-6 sm:p-10 md:p-12 bg-white rounded-2xl shadow-md">
          <p className="text-lg font-semibold mb-6">Referrer Information</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="font-medium">Your Name</label>
              <input
                className="w-full border-b border-gray-300 focus:border-black bg-transparent pt-2 pb-1 outline-none"
                placeholder="Enter Your Name"
              />
            </div>

            <div>
              <label className="font-medium">Email</label>
              <input
                className="w-full border-b border-gray-300 focus:border-black bg-transparent pt-2 pb-1 outline-none"
                placeholder="Enter Your Email"
              />
            </div>
          </div>

          <p className="text-lg font-semibold mb-6">Participant Information</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="font-medium">Participant Name</label>
              <input
                className="w-full border-b border-gray-300 focus:border-black bg-transparent pt-2 pb-1 outline-none"
                placeholder="Enter Participant’s full name"
              />
            </div>

            <div>
              <label className="font-medium">NDIS Number</label>
              <input
                className="w-full border-b border-gray-300 focus:border-black bg-transparent pt-2 pb-1 outline-none"
                placeholder="Enter NDIS Number"
              />
            </div>

            <div className="md:col-span-2">
              <label className="font-medium">Additional Information</label>
              <input
                className="w-full border-b border-gray-300 focus:border-black bg-transparent pt-2 pb-1 outline-none"
                placeholder="Enter Additional Information"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1 text-center">
            <button className="mt-6 bg-[#003A11] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#3c8c3f] transition mx-auto">
              Submit Referral <SendHorizontal size={18} />
            </button>

            <p className="text-[#000000B2] text-sm">
              All information provided is treated with strict confidentiality
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
