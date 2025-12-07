"use client";

import Footer from "@/components/Footer";
import {
  ArrowUpRight,
  CheckCircle2,
  MoveRight,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Functional Behaviour Assessments",
      description:
        "Tailoring Services To Environment For Growth Where Individuals Feel Protected And Understood",
      image:
        "./functionalBehav.png",
    },
    {
      title: "Behaviour Support Plans",
      description:
        "Personalized Strategies That Promote Safety, Independence, And Positive Behaviour Changes",
      image:
        "./supportPlan.png",
    },
    {
      title: "Trauma-Informed Support",
      description:
        "Gentle, Respectful, And Emotionally Safe Approaches Rooted In Trauma-Informed Care Principles",
      image:
        "./Trauma.png",
    },
    {
      title: "Autism & Forensic Care",
      description:
        "Targeted Support For Participants Within Forensic, Neurodivergent, Or Dual-Diagnosis Contexts",
      image:
        "./Autism.png",
    },
    {
      title: "Mental Health & Self-Advocacy",
      description:
        "Building Resilience, Communication, And Emotional Regulation Through Structured Guidance",
      image:
        "./mentalH.png",
    },
    {
      title: "Training & Guidance",
      description:
        "Equipping Support Networks To Apply Behaviour Plans Effectively And Compassionately",
      image:
        "./traing.png",
    },
    {
      title: "Ongoing Review & Monitoring",
      description:
        "Continuous Progress Evaluations To Ensure Strategies Stay Relevant And Effective",
      image:
        "./ongoingReview.png",
    },
    {
      title: "Reducing Restrictive Practices",
      description:
        "Encouraging Independence And Dignity By Minimizing Restrictive Interventions Safely",
      image:
        "./reducing.png",
    },
  ];

  const fundingCategories = [
    "CB Relationships",
    "Behaviour Support",
    "High-Risk Support",
  ];

  return (
    <div className="p-2 bg-gradient-to-r from-[#FBFBFB] to-[#EFF3D0]">
      
      {/* HERO SECTION */}
      <div className="bg-[#98C44B] w-full py-24 md:py-36 rounded-lg bg-[url('/serviceLine.png')] bg-no-repeat bg-bottom-right bg-contain">
        <p className="text-center font-semibold text-4xl md:text-6xl lg:text-7xl text-[#003A11]">
          Services
        </p>
      </div>

      {/* INTRO SECTION */}
      <section className="w-full px-4 sm:px-6 md:px-12 my-12 md:my-16">
        <div className="text-center max-w-4xl mx-auto">
          <p className="font-medium text-xl md:text-3xl leading-relaxed">
            We Deliver Positive Behaviour Support For Children, Young People,
            And Adults — Especially Those With Multiple Or Complex Support Needs.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="mt-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-green-100 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  {/* Image Section */}
                  <div className="relative h-48 md:h-80 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>

                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-white text-xl md:text-2xl font-semibold drop-shadow-lg">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="bg-green-100 p-6 flex items-center justify-between gap-4">
                    <p className="text-[#003A11] text-sm md:text-base font-medium flex-1">
                      {service.description}
                    </p>

                    <button className="bg-[#003A11] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-all">
                      <ArrowUpRight className="w-4 md:w-5 h-4 md:h-5 text-white" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY SECTION */}
      <section className="bg-[#7CCA984D] px-4 sm:px-6 md:px-12 py-16 rounded-lg relative overflow-hidden bg-[url('/eligibilityLine.png')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-left mb-10">
            <p className="text-4xl md:text-5xl font-bold text-gray-900">
              Eligibility & Funding
            </p>
            <p className="text-gray-700 mt-2 text-sm md:text-base">
              Making Our Services Accessible To Those Who Need Them Most
            </p>
          </div>

          {/* GRID */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            
            {/* LEFT EMPTY FOR DESIGN BALANCE */}
            <div className="hidden lg:block"></div>

            {/* RIGHT CARDS */}
            <div className="space-y-8">
              {/* Funding Card */}
              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <div className="inline-block bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  NDIS Funding
                </div>

                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  NDIS Participants With Improved Relationships Or Behaviour
                  Support Funding Are Eligible For Our Services.
                </p>

                <div className="space-y-2">
                  {fundingCategories.map((category, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                      <span className="text-gray-800 text-sm font-medium">
                        {category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* PRICING CARD */}
              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <div className="inline-block bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  Pricing
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  Travel And Practitioner Rates Follow Current NDIS Pricing
                  Guidelines, Ensuring Transparency And Compliance With All
                  Regulations.
                </p>
              </div>

              {/* BUTTON */}
              <button className="group bg-[#003A11] text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl w-fit">
                Get Started
                <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
