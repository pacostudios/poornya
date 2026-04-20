import React from "react";
import {
  MapPin,
  Briefcase,
  GraduationCap,
  HeartHandshake,
  Activity,
} from "lucide-react";

export default function WishBrarProfile() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FBFBFB] to-[#EFF3D0] pb-24">
      {/* HEADER HERO */}
      <div className="relative bg-[#98C44B] w-full py-24 md:py-32 flex flex-col items-center bg-[url('/Line2.png')] bg-no-repeat bg-left bg-cover">
        <h1 className="text-center font-semibold text-5xl sm:text-6xl md:text-7xl text-[#003A11] leading-tight px-4 shadow-sm">
          Wish Brar
        </h1>
        <p className="mt-4 text-xl sm:text-2xl md:text-3xl text-green-950 font-medium text-center px-4">
          Behavior Support Practitioner
        </p>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 mt-12 sm:mt-16 bg-white rounded-3xl shadow-xl py-12 md:py-16 -mt-8 relative z-10 border border-green-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* LEFT SIDE: Tags & Info */}
          <div className="md:col-span-1 space-y-6">
            <h3 className="text-2xl font-bold text-[#003A11] mb-6 border-b-2 border-[#98C44B] pb-2 inline-block">
              Expertise & Details
            </h3>

            <div className="flex flex-col gap-5">
              {/* Tag Item */}
              <div className="flex items-start gap-4 p-4 bg-[#F8FAEB] rounded-xl border border-green-100 transition-transform hover:scale-105">
                <MapPin className="w-6 h-6 text-green-800 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-green-700 uppercase tracking-widest font-semibold">
                    Clinic Location
                  </p>
                  <p className="font-semibold text-gray-800 text-sm mt-1">
                    Western Suburb Melbourne
                  </p>
                </div>
              </div>

              {/* Tag Item */}
              <div className="flex items-start gap-4 p-4 bg-[#F8FAEB] rounded-xl border border-green-100 transition-transform hover:scale-105">
                <Briefcase className="w-6 h-6 text-green-800 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-green-700 uppercase tracking-widest font-semibold">
                    Role
                  </p>
                  <p className="font-semibold text-gray-800 text-sm mt-1">
                    Positive Behavior Support Practitioner
                  </p>
                  <p className="font-semibold text-gray-800 text-sm mt-1">
                    Social Worker
                  </p>
                </div>
              </div>

              {/* Tag Item */}
              <div className="flex items-start gap-4 p-4 bg-[#F8FAEB] rounded-xl border border-green-100 transition-transform hover:scale-105">
                <Activity className="w-6 h-6 text-green-800 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-green-700 uppercase tracking-widest font-semibold">
                    Background
                  </p>
                  <p className="font-semibold text-gray-800 text-sm mt-1">
                    Physiotherapy
                  </p>
                </div>
              </div>

              {/* Tag Item */}
              <div className="flex items-start gap-4 p-4 bg-[#F8FAEB] rounded-xl border border-green-100 transition-transform hover:scale-105">
                <HeartHandshake className="w-6 h-6 text-green-800 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-green-700 uppercase tracking-widest font-semibold">
                    Registrations
                  </p>
                  <p className="font-semibold text-gray-800 text-sm mt-1">
                    NDIS PBS Practitioner
                  </p>
                  <p className="font-semibold text-gray-800 text-sm mt-1">
                    Australian Association of Social Workers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Biography */}
          <div className="md:col-span-2 space-y-8 text-gray-700 text-lg leading-relaxed">
            <div>
              <p>
                I’m <span className="font-bold text-[#003A11]">Wish Brar</span>,
                a Behavior Support Practitioner at Language for Life. My
                professional background encompasses physiotherapy and social work,
                with education obtained in Australia and New Zealand, though I
                come from India and can speak Hindi. Over the past 12 years,
                I’ve gained diverse experience working in various settings,
                including public hospitals, the Australian Defense Force, child
                protection services, a male maximum security prison, and as a
                behavior support practitioner in the National Disability
                Insurance Scheme (NDIS).
              </p>
            </div>

            <div className="flex gap-4 p-6 bg-green-50/60 rounded-2xl border-l-4 border-[#98C44B]">
              <GraduationCap className="w-8 h-8 text-green-800 shrink-0" />
              <p className="text-base text-gray-800">
                My academic qualifications include a{" "}
                <span className="font-semibold">
                  Master’s degree in Social Work
                </span>{" "}
                from Flinders University , A Postgraduate Certificate in Engaging
                in Positive Behavior Support from Monash University.
                Investigative and interviewing skills from Griffith University.
                Additionally, I hold a{" "}
                <span className="font-semibold">
                  Bachelor’s degree in Physiotherapy
                </span>{" "}
                and a Graduate Certificate in Sports and Exercise Science,
                earned at Massey University in New Zealand.
              </p>
            </div>

            <div>
              <p>
                My role involves interacting with vulnerable individuals,
                conducting functional interview assessments, and developing
                strategies and behavior support plans to aid clients in need. I
                manage complex cases involving aggressive and suicidal
                behaviors, ensuring that families are satisfied with and willing
                to implement the proposed strategies.
              </p>
            </div>

            <div>
              <p>
                My primary objectives are to help clients regulate their
                emotions, advocate for themselves, and exercise their right to
                choice and control. I also focus on reporting /reducing or
                eliminating different types of restrictive practices. My work
                requires an understanding of different family dynamics and
                backgrounds, as well as the ability to engage with clients of
                various ages and cultural backgrounds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
