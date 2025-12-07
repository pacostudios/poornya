"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, ArrowRight, Sparkles, MoveRight } from "lucide-react";
import Footer from "@/components/Footer";
import MarqueeOnPath from "@/components/MarqueeOnPath";

export default function Home() {
  const [selectedItem, setSelectedItem] = useState(null);

  const aboutus = [
    {
      title: "People With Disabilities",
      image: "/people.png",
    },
    {
      title: "Children And Families",
      image: "/children.png",
    },
    {
      title: "Mental Health Support",
      image: "/mentalHealth.png",
    },
  ];
  return (
    <div className="text-black p-3 flex flex-col gap-16 bg-gradient-to-r from-[#FBFBFB] to-[#EFF3D0]">
      <section
        className="
    relative overflow-hidden 
    pt-24 
    bg-cover bg-bottom bg-no-repeat 
    flex items-center
    rounded-t-lg
    min-h-[600px] 
    sm:min-h-[700px]
    md:min-h-[85vh]
    lg:min-h-screen
    
  "
        style={{ backgroundImage: "url('/substract1.png')" }}
      >
        <div className="w-full h-screen flex items-end">
          <div
            className="
  absolute 
  bottom-32 right-5
  sm:right-[10%] sm:top-[65%]
  md:right-[20%] md:top-[70%]
  flex gap-1 items-center
"
          >
            <div className="w-9 h-9 rounded-full overflow-hidden border-[3px] border-[#FFFFFF66] bg-[#00000099] flex gap-2">
              <div className="w-[25px] h-[25px] rounded-full bg-white m-auto"></div>
            </div>

            <div className="border-2 border-[#666666] w-fit flex items-center gap-2 backdrop-blur-3xl  bg-[#FFFFFF66] px-5 py-2 rounded-full">
              <span className="text-white text-sm font-semibold">Healthy Body</span>
            </div>
          </div>
          {/* --- Healthy Mind Tag --- */}
          <div
            className="
  absolute 
  top-64 left-5 
  sm:top-[20%] sm:left-[20%] 
  md:top-[26%] md:left-[30%]
  flex gap-1 items-center
"
          >
            <div className="w-fit flex items-center border-2 border-[#666666] gap-2 backdrop-blur-lg bg-[#FFFFFF66] bg-cover bg-center px-5 py-2 rounded-full shadow-md">
              <span className="text-white text-sm font-semibold">Healthy Mind</span>
            </div>
            <div className="w-9 h-9 rounded-full overflow-hidden border-[3px] border-[#FFFFFF66] bg-[#00000099] flex gap-2">
              <div className="w-[25px] h-[25px] rounded-full bg-white m-auto"></div>
            </div>
          </div>
          <div className="absolute top-[50%] lg:top-[40%] left-3 bg-white/60 backdrop-blur-lg rounded-md w-fit px-6 py-4 shadow-lg">
            {/* Badge */}
            <div className="inline-block mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[#FFFFFF] bg-[#003A11] text-base font-semibold shadow-lg">
                Registered NDIS Provider
              </span>
            </div>

            {/* Tagline */}
            <p className="text-lg max-w-xs animate-in fade-in duration-700 delay-150 text-black">
              Delivering Personalised Behaviour Support Services For
              Individuals, Families, And Communities Across Australia
            </p>
          </div>
          {/* --- Left Content Box --- */}
          <div
            className="absolute bottom-0 -left-1 sm:left-0 flex flex-col gap-10 z-10 
    w-[180px] sm:w-[350px] md:w-[450px] lg:w-[600px] xl:w-[700px]"
          >
            <p
              className="text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] 
      font-medium text-black animate-in fade-in duration-700 delay-300 
      drop-shadow-md leading-tight py-1"
            >
              <span
                className="
    bg-white rounded-tr-[18px] p-2 relative inline-block pr-4

    /* RIGHT BOTTOM CURVE */
    after:content-[''] after:absolute after:bottom-1 after:sm:bottom-2.5 after:-right-4
    after:w-4 after:h-4
    after:bg-[radial-gradient(circle_at_top_left,transparent_70%,white_70%)]
    after:rotate-90

    /* LEFT TOP CURVE */
    before:content-[''] before:absolute before:-top-3.5 before:sm:-top-3.5 before:left-0
    before:w-4 before:h-4
    before:bg-[radial-gradient(circle_at_bottom_right,transparent_70%,white_70%)]
    before:-rotate-90
  "
              >
                Where Positive
              </span>
              <br />
              <span className="bg-white rounded-tr-[18px] p-2 relative  after:content-[''] after:absolute after:bottom-1 after:-right-4 after:w-4 after:h-4 after:bg-[radial-gradient(circle_at_top_left,transparent_70%,white_70%)] after:rotate-90">
                Change Feels Safe
              </span>
            </p>
          </div>

          {/* Card with decorative border */}

          <div className="hidden lg:block absolute top-[16%] right-8 w-64 animate-in fade-in slide-in-from-right-8 duration-1000 delay-500 z-10 bg-white rounded-2xl p-1 shadow-lg">
            {/* Image container with rounded corners */}
            <div className="relative rounded-2xl overflow-hidden mb-3">
              <img
                src="./getRight.png"
                alt="Support team"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Text below image */}
            <p className="text-sm font-semibold text-gray-800 text-center leading-snug">
              Get The Right Support – Reach Out Today
            </p>
          </div>

          <div
            className="inline-block absolute bottom-6 left-[80%] -translate-x-1/2
md:left-[55%] md:translate-x-0 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700"
          >
            <span className="inline-flex items-center gap-2 px-4 sm:px-11 py-1 sm:py-3 rounded-full text-[#FFFFFF] bg-[#003A11] text-lg font-semibold shadow-lg">
              Get Started <MoveRight />
            </span>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-gradient-to-r from-[#FBFBFB] to-[#EFF3D0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Side - Image Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[320px] sm:h-[400px] md:h-[500px] group">
              <img
                src="/therapys.png"
                alt="Therapy Session"
                className="w-full h-full object-cover"
              />

              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="flex gap-1 items-center absolute top-32 left-10">
                <div className="bg-gradient-to-r from-[#FFFFFF] to-[#666666]  rounded-full p-[1.5px]">
                  <div className=" w-fit flex items-center gap-2 backdrop-blur-3xl  bg-[#FFFFFF66] px-5 py-2 rounded-full">
                    <span className="text-white text-sm font-semibold">
                      Therapy Session
                    </span>
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full overflow-hidden border-[3px] border-[#FFFFFF66] bg-[#00000099] flex gap-2">
                  <div className="w-[25px] h-[25px] rounded-full bg-white m-auto"></div>
                </div>
              </div>

              {/* Book Now Button */}
              <div className="absolute bottom-6 left-6">
                <button className="bg-[#003A11] text-white px-6 py-3 rounded-full font-medium shadow-lg transition-all duration-300 hover:scale-105">
                  Book Now
                </button>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex flex-col gap-12">
              {/* Heading */}
              <div>
                <h2 className="text-5xl font-bold text-gray-800 mb-4">
                  About <span className="text-[#98C44B]">US</span>
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  At{" "}
                  <span className="font-semibold">
                    Poornava Behaviour Support
                  </span>
                  , We Believe Every Person Deserves The Opportunity To Live A
                  Safe, Fulfilling, And Empowered Life. As A Registered NDIS
                  Provider, We Specialise In Positive Behaviour Support (PBS) —
                  Helping Individuals With Complex Behavioural Needs Achieve
                  Their Goals Through Choice, Control, And Evidence-Based Care.
                </p>
              </div>

              {/* Explore More Button */}
              <div>
                <button className="bg-[#003A11] text-white px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-300 hover:scale-105">
                  Explore More
                </button>
              </div>

              {/* Service Categories Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-3">
                {aboutus.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedItem(index)}
                    className={`
        relative group cursor-pointer bg-[#98C44B] rounded-2xl pt-10 px-1 pb-1 min-h-[140px]
        ${
          selectedItem === index
            ? "bg-[#98C44B] text-white"
            : " bg-white shadow-xl scale-[1.02]"
        }
      `}
                  >
                    <h3
                      className={`
          absolute font-semibold text-sm top-1 left-3 transition-all duration-300
          ${selectedItem === index ? "text-white" : "text-black"}
        `}
                    >
                      {item.title}
                    </h3>

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <MarqueeOnPath />
        <section className="py-16 px-4 bg-[#98C44B] rounded-lg overflow-hidden">
          <div className="relative w-full max-w-md mx-auto sm:max-w-lg md:max-w-xl">
            {/* Heading */}
            <div className="text-center mb-4">
              <h2 className="text-4xl md:text-5xl font-semibold text-[#003A11] mb-3">
                Our Core Promise
              </h2>
              <p className="text-[#003A11] text-sm md:text-base max-w-2xl mx-auto">
                Our Mission Is To Empower Participants, Not Just Support Them
                Promoting Independence, Confidence, And Long-Term Wellbeing
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="relative mt-12 ">
              {/* Center Image */}
              <div className="flex justify-center items-center">
                <div className="relative w-full max-w-md">
                  <img
                    src="/promise.png"
                    alt="Father and child"
                    className="rounded-3xl shadow-2xl w-full h-auto"
                  />

                  {/* Card 1 - Top Left */}
                  <div
                    className="absolute top-16 -md:-left-48 → sm:-left-20 md:-left-32 lg:-left-48 w-48 md:w-56 
    rounded-xl p-4 shadow-lg 
    bg-white/60 backdrop-blur-md scale-75 sm:scale-90 md:scale-100"
                  >
                    <div
                      className="w-8 h-8 rounded-full absolute -top-4 bg-emerald-900 
        text-white flex items-center justify-center 
        text-sm font-semibold"
                    >
                      1
                    </div>
                    <div className="flex items-start gap-3">
                      <div>
                        <h3 className="text-[13px] font-semibold text-emerald-900 mb-1">
                          Person-Centred Care
                        </h3>

                        <p className="text-[11px] text-gray-700 leading-[1.4]">
                          Your Voice Guides Every Plan. We Listen, Understand,
                          And Build Strategies Around Your Unique Needs.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 - Top Right */}

                  <div
                    className="absolute top-32 -md:-right-48 → sm:-right-20 md:-right-32 lg:-right-48
w-48 md:w-56
    rounded-xl p-4 shadow-lg 
    bg-white/60 backdrop-blur-md scale-75 sm:scale-90 md:scale-100"
                  >
                    <div
                      className="w-8 h-8 rounded-full absolute -top-4 bg-emerald-900 
        text-white flex items-center justify-center 
        text-sm font-semibold"
                    >
                      2
                    </div>
                    <div className="flex items-start gap-3">
                      <div>
                        <h3 className="text-[13px] font-semibold text-emerald-900 mb-1">
                          Evidence-Based Practice
                        </h3>

                        <p className="text-[11px] text-gray-700 leading-[1.4]">
                          Proven Methods For Real, Measurable Change. Our
                          Approaches Are Grounded In Research.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Card 3 - Bottom Right */}

                  <div
                    className="absolute bottom-36  --md:-right-48 → sm:-right-20 md:-right-32 lg:-right-48
 w-48 md:w-56  
    rounded-xl p-4 shadow-lg 
    bg-white/60 backdrop-blur-md scale-75 sm:scale-90 md:scale-100"
                  >
                    <div
                      className="w-8 h-8 rounded-full absolute -top-4 bg-emerald-900 
        text-white flex items-center justify-center 
        text-sm font-semibold"
                    >
                      3
                    </div>
                    <div className="flex items-start gap-3">
                      <div>
                        <h3 className="text-[13px] font-semibold text-emerald-900 mb-1">
                          Empowerment First
                        </h3>

                        <p className="text-[11px] text-gray-700 leading-[1.4]">
                          Building Skills For Autonomy And Growth. We Focus On
                          Developing Capabilities For Independence.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 4 - Bottom Left */}

                  <div
                    className="absolute bottom-14 -md:-left-48 → sm:-left-20 md:-left-32 lg:-left-48 w-48 md:w-56  
    rounded-xl p-4 shadow-lg 
    bg-white/60 backdrop-blur-md scale-75 sm:scale-90 md:scale-100"
                  >
                    <div
                      className="w-8 h-8 rounded-full absolute -top-4 bg-emerald-900 
        text-white flex items-center justify-center 
        text-sm font-semibold"
                    >
                      4
                    </div>
                    <div className="flex items-start gap-3">
                      <div>
                        <h3 className="text-[13px] font-semibold text-emerald-900 mb-1">
                          Collaboration Always
                        </h3>

                        <p className="text-[11px] text-gray-700 leading-[1.4]">
                          Working With Your Entire Care Team To Ensure Holistic
                          Outcomes And Consistent Support.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Explore More Button */}
            <div className="flex justify-center mt-16">
              <button className="bg-emerald-900 hover:bg-emerald-800 text-white px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-300 hover:scale-105">
                Explore More
              </button>
            </div>
          </div>
        </section>
      </div>
      <section className="py-20 px-4 bg-gradient-to-r from-[#FBFBFB] to-[#EFF3D0] relative overflow-hidden">
        <div className="mx-auto max-w-6xl relative">
          {/* Concentric Circles Background - positioned to center content */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="relative w-[280px] h-[280px] xs:w-[320px] xs:h-[320px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]">
              <div className="absolute inset-0 border-2 border-stone-300/40 rounded-full" />
              <div className="absolute inset-[10%] border-2 border-stone-300/40 rounded-full" />
              <div className="absolute inset-[20%] border-2 border-stone-300/40 rounded-full" />
              <div className="absolute inset-[30%] border-2 border-stone-300/40 rounded-full" />

              {/* Center Content - positioned in the middle of circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center max-w-[200px] sm:max-w-xs md:max-w-sm px-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-3 sm:mb-4">
                    What Our <br />
                    <span className="text-[#003A11]">Clients Say</span>
                  </h2>
                  <p className="text-gray-700 text-[10px] sm:text-xs md:text-sm leading-relaxed">
                    We are very fortunate to have great relationships with many
                    of our clients. Here are the valuable testimonials from our
                    clients.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cards Around Circle - adjusted positioning */}
          <div className="relative min-h-[300px] xs:min-h-[340px] sm:min-h-[420px] md:min-h-[520px] lg:min-h-[620px]">
            {/* 1 - Top Left */}
            <div className="absolute flex items-center gap-1 sm:gap-2 top-4 sm:top-6 md:top-10 left-0 sm:left-4 md:left-8 lg:left-12 animate-in fade-in slide-in-from-left duration-700">
              <div className="bg-yellow-200 rounded-full px-2 py-1.5 sm:px-3 sm:py-2 shadow-lg max-w-[110px] sm:max-w-[140px] md:max-w-[260px]">
                <p className="text-[9px] sm:text-[10px] md:text-xs font-medium text-gray-900 leading-snug">
                  Poornaya provides a good health solution
                </p>
              </div>
              <img
                src="/User1.jpg"
                alt="Client"
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border-2 border-white flex-shrink-0"
              />
            </div>

            {/* 2 - Top Right */}
            <div className="absolute flex items-center gap-1 sm:gap-2 top-4 sm:top-6 md:top-10 right-0 sm:right-4 md:right-8 lg:right-12 animate-in fade-in slide-in-from-right duration-700 delay-200">
              <img
                src="/User1.jpg"
                alt="Client"
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border-2 border-white flex-shrink-0"
              />
              <div className="bg-white rounded-full px-2 py-1.5 sm:px-3 sm:py-2 shadow-lg max-w-[110px] sm:max-w-[140px] md:max-w-[260px]">
                <p className="text-[9px] sm:text-[10px] md:text-xs font-medium text-gray-900 leading-snug">
                  Poornaya is the best choice for mental support
                </p>
              </div>
            </div>

            {/* 3 - Middle Left */}
            <div className="absolute flex items-center gap-1 sm:gap-2 top-1/2 -translate-y-1/2 left-0 sm:left-2 md:left-4 lg:left-8 animate-in fade-in slide-in-from-left duration-700 delay-400">
              <div className="bg-emerald-200 rounded-full px-2 py-1.5 sm:px-3 sm:py-2 shadow-lg max-w-[110px] sm:max-w-[140px] md:max-w-[260px]">
                <p className="text-[9px] sm:text-[10px] md:text-xs font-medium text-gray-900 leading-snug">
                  Poornaya has helped protect me
                </p>
              </div>
              <img
                src="/User1.jpg"
                alt="Client"
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border-2 border-white flex-shrink-0"
              />
            </div>

            {/* 4 - Middle Right */}
            <div className="absolute flex items-center gap-1 sm:gap-2 top-1/2 -translate-y-1/2 right-0 sm:right-2 md:right-4 lg:right-8 animate-in fade-in slide-in-from-right duration-700 delay-600">
              <img
                src="/User1.jpg"
                alt="Client"
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border-2 border-white flex-shrink-0"
              />
              <div className="bg-lime-200 rounded-full px-2 py-1.5 sm:px-3 sm:py-2 shadow-lg max-w-[110px] sm:max-w-[140px] md:max-w-[260px]">
                <p className="text-[9px] sm:text-[10px] md:text-xs font-medium text-gray-900 leading-snug">
                  I recommend Poornaya to you
                </p>
              </div>
            </div>

            {/* 5 - Bottom Center */}
            <div className="absolute flex items-center gap-1 sm:gap-2 bottom-4 sm:bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 animate-in fade-in slide-in-from-bottom duration-700 delay-800">
              <img
                src="/User1.jpg"
                alt="Client"
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border-2 border-white flex-shrink-0"
              />
              <div className="bg-white rounded-full px-2 py-1.5 sm:px-3 sm:py-2 shadow-lg max-w-[110px] sm:max-w-[140px] md:max-w-[260px]">
                <p className="text-[9px] sm:text-[10px] md:text-xs font-medium text-gray-900 leading-snug">
                  I can focus on living life with Poornaya
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
