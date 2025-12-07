"use client";

import Footer from "@/components/Footer";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Shield, BookOpen, Heart, Brain, Scale, Search } from "lucide-react";

export default function Navbar() {
  const content = [
    { title: "Years of experience", value: "12" },
    { title: "Empowered Clients", value: "1000+" },
    { title: "Expert Collaborations", value: "150" },
  ];

  const team = [
    {
      name: "Micheal Nguyen N.S.W",
      role: "Licensed Clinical Social Worker",
      img: "/user3.png",
    },
    {
      name: "Nguyen N.S.W",
      role: "Licensed Clinical Social Worker",
      img: "/user4.png",
    },
    {
      name: "Micheal W",
      role: "Licensed Clinical Social Worker",
      img: "/user4.png",
    },
    { name: "Mi", role: "Licensed Clinical Social Worker", img: "/user4.png" },
  ];

  const values = [
    {
      title: "Safety And Trust",
      description:
        "Building Secure Environments For Growth Where Individuals Feel Protected And Valued",
      image: "./saftyTrust.png",
    },
    { title: "Respect And Dignity", description: "" },
    { title: "Empathy And Accountability", description: "" },
    { title: "Cultural Sensitivity", description: "" },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % (team.length - 1));
  const prev = () =>
    setCurrent((prev) => (prev === 0 ? team.length - 2 : prev - 1));

  const qualifications = [
    {
      icon: Shield,
      title: "Restrictive Practice Frameworks",
      description:
        "Expert Knowledge In Managing And Reducing Restrictive Interventions",
    },
    {
      icon: BookOpen,
      title: "Functional Behaviour Assessments",
      description: "Comprehensive Training In Analyzing Behavioral Patterns",
    },
    {
      icon: Heart,
      title: "Trauma-Informed Care",
      description: "Specialized Approaches For Supporting Trauma Survivors",
    },
    {
      icon: Brain,
      title: "Mental Health First Aid",
      description: "Certified In Both Youth And Adult Mental Health Support",
    },
    {
      icon: Scale,
      title: "Forensic Support",
      description: "Extensive Experience In Justice-Involved Settings",
    },
    {
      icon: Search,
      title: "Investigation Techniques",
      description: "Professional Training In Interviewing And Investigation",
    },
  ];

  return (
    <div className="p-2 flex flex-col gap-20 bg-gradient-to-r from-[#FBFBFB] to-[#EFF3D0]">
      {/* HEADER */}
      <div className="relative bg-[#98C44B] w-full py-28 md:py-36 rounded-lg flex flex-col items-center bg-[url('/Line2.png')] bg-no-repeat bg-left bg-cover">
        <p className="text-center font-semibold text-4xl sm:text-6xl md:text-7xl text-[#003A11] leading-tight">
          About <br /> Poornaya
        </p>
      </div>

      {/* ABOUT TEXT */}
      <div className="px-6 md:px-16 flex flex-col gap-10">
        <div className="w-28 h-24 mx-auto">
          <img src="/poornaya.png" className="w-full h-full object-contain" />
        </div>

        <p className="text-center lg:text-left font-medium text-lg sm:text-xl leading-relaxed">
          Behind <span className="text-[#003A11] font-bold">Poornaya’s</span>{" "}
          success is Wish, an exceptionally dedicated Behaviour Support
          Practitioner,{" "}
          <span className="text-[#003A11] font-bold">Physiotherapist</span>, and{" "}
          <span className="text-[#003A11] font-bold">Social Worker</span>. With
          qualifications earned in{" "}
          <span className="text-[#003A11] font-bold">
            Australia and New Zealand
          </span>
          , and more than a decade of clinical experience.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 text-center gap-10 mb-10">
          {content.map((item) => (
            <div key={item.title} className="flex flex-col gap-1">
              <p className="text-3xl text-[#003A11] font-semibold">
                {item.value}
              </p>
              <p className="text-lg font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TEAM SECTION */}
      <section className="w-full py-4 md:py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold">
              Meet Our Team
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-sm">
              Behind Every Milestone Is A Team That Powers The Vision
            </p>

            <div className="flex gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-md bg-green-800 text-white flex items-center justify-center hover:bg-green-900"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-md bg-green-800 text-white flex items-center justify-center hover:bg-green-900"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* RIGHT SLIDER */}
          <div className="flex gap-4 justify-center md:justify-end">
            {[team[current], team[current + 1]].map(
              (item, idx) =>
                item && (
                  <div
                    key={idx}
                    className="w-[250px] sm:w-[280px] md:w-[320px] transition-all"
                  >
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                      <div className="relative w-full h-56">
                        <img
                          src={item.img}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.role}</p>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </section>

      {/* TRAINING & QUALIFICATION */}
      <section className="w-full py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* IMAGE CARD */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl h-[400px] sm:h-[500px]">
            <img src="/GymTrain.png" className="w-full h-full object-cover" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Training &<br />
                Qualifications
              </h2>
              <p className="text-white/90 text-sm max-w-md mt-2">
                Comprehensive Training And Certifications Ensuring The Highest
                Standard Of Care
              </p>
            </div>
          </div>

          {/* LIST */}
          <div className="space-y-6">
            {qualifications.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-900 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="w-full py-16 px-6 md:px-16 bg-[#D4E6D4] bg-[url('/Line3.png')] bg-no-repeat bg-left bg-cover rounded-lg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* TITLE */}
          <div>
            <h2 className="text-4xl md:text-6xl font-bold">Core Values</h2>
            <p className="text-gray-700 text-lg max-w-md mt-3">
              The Principals That Guide Every Interactions And Decisions
            </p>
          </div>

          {/* ITEMS */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div key={index} className="border-b border-gray-400 pb-6">
                {index === 0 ? (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">{value.title}</h3>

                    <div className="relative rounded-2xl border-8 border-white overflow-hidden">
                      <img src={value.image} className="w-full object-cover" />

                      {/* GRADIENT OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end z-10">
                        <div className="p-6 flex items-end max-w-2/3">
                          <p className="text-white text-sm flex-1">
                            {value.description}
                          </p>
                        </div>
                      </div>

                      {/* BUTTON ON TOP OF EVERYTHING */}
                      <div className="bg-white w-1/3 p-3.5 rounded-tl-2xl  absolute bottom-0 right-0 z-20 
                      after:content-[''] after:absolute after:bottom-0 after:sm:bottom-0 after:-left-3.5 after:sm:-left-4
    after:w-4 after:h-4
    after:bg-[radial-gradient(circle_at_top_left,transparent_70%,white_70%)]
    after:rotate-0
                      
                      before:content-[''] before:absolute before:-top-3 before:sm:-top-3.5 before:right-0
    before:w-4 before:h-4
    before:bg-[radial-gradient(circle_at_bottom_right,transparent_70%,white_70%)]
    before:-rotate-180">
                        <button className="w-full block bg-green-900 hover:bg-green-800 text-white px-6 py-2  rounded-full text-sm">
                          Get Started
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <h3 className="text-2xl font-semibold">{value.title}</h3>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
