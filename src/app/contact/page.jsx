"use client";
import Footer from "@/components/Footer";
import { ArrowRight, Phone, Mail, MapPin, SendHorizontal } from "lucide-react";

export default function contact() {
  return (
    <div className="p-2 bg-gradient-to-r from-[#FBFBFB] to-[#EFF3D0]">
      {/* HEADER */}
      <div className="bg-[#98C44B] w-full py-28 md:py-36 rounded-lg 
      bg-[url('/Line5.png')] bg-no-repeat bg-bottom-left">
        <p className="text-center font-semibold 
        text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#003A11] leading-tight">
          Contact <br /> Us
        </p>
      </div>

      {/* MAIN SECTION */}
      <section className="w-full px-4 sm:px-6 md:px-12 mb-16">
        <div className="max-w-7xl mx-auto relative">

          {/* ABSOLUTE IMAGE - NOW RESPONSIVE */}
          <div className="absolute -top-10 sm:-top-16 md:-top-20 
          left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-0 flex justify-center">
            <img
              src="/phone.png"
              alt="Phone"
              className="object-contain w-40 hidden sm:block sm:w-52 md:w-64 lg:w-72"
            />
          </div>

          {/* HEADING */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 
            mb-8 leading-snug text-center max-w-2xl mx-auto mt-32 sm:mt-40 lg:mt-20">
            Whether You're An Individual, Family Member, Or Organisation —
            We're Just A Message Away
          </h2>

          {/* FORM GRID RESPONSIVE FIX */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div></div>

            <div className="p-6 sm:p-8 md:p-12 bg-white rounded-2xl shadow-md col-span-2">

              {/* HEADING */}
              <p className="text-lg font-semibold mb-6">Get in Touch Today</p>

              {/* FORM INPUTS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div>
                  <label className="font-medium">Name</label>
                  <input
                    className="w-full border-b border-gray-300 focus:border-black 
                    bg-transparent pt-2 pb-1 outline-none"
                    placeholder="Enter Your Name"
                  />
                </div>

                <div>
                  <label className="font-medium">Email</label>
                  <input
                    className="w-full border-b border-gray-300 focus:border-black 
                    bg-transparent pt-2 pb-1 outline-none"
                    placeholder="Enter Your Email"
                  />
                </div>

                <div>
                  <label className="font-medium">Phone</label>
                  <input
                    className="w-full border-b border-gray-300 focus:border-black 
                    bg-transparent pt-2 pb-1 outline-none"
                    placeholder="Enter Phone Number"
                  />
                </div>

                <div>
                  <label className="font-medium">Message</label>
                  <input
                    className="w-full border-b border-gray-300 focus:border-black 
                    bg-transparent pt-2 pb-1 outline-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

              </div>

              {/* SUBMIT BUTTON */}
              <button className="mt-6 bg-[#003A11] text-white px-6 py-3 
              rounded-full flex items-center gap-2 hover:bg-[#3c8c3f] transition">
                Submit Request <SendHorizontal size={18} />
              </button>

              {/* CONTACT INFO */}
              <div className="mt-10 space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Contact Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                  {/* PHONE */}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Phone className="text-black w-5 h-5" />
                      <p className="text-[#000000B2] font-medium">Phone</p>
                    </div>
                    <p className="text-black font-semibold">
                      1300 000 765 <br />
                      <span className="text-sm text-[#000000B2]">
                        Mon to Fri: 9AM – 8PM
                      </span>
                    </p>
                  </div>

                  {/* EMAIL */}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Mail className="text-black w-5 h-5" />
                      <p className="text-[#000000B2] font-medium">Email</p>
                    </div>
                    <p className="text-black font-semibold">
                      info@company.com.au <br />
                      <span className="text-sm text-[#000000B2]">
                        Real Support With a Heart
                      </span>
                    </p>
                  </div>

                  {/* ADDRESS */}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="text-black w-5 h-5" />
                      <p className="text-[#000000B2] font-medium">Address</p>
                    </div>
                    <p className="text-black font-semibold">
                      Melbourne, Victoria <br />
                      <span className="text-sm text-[#000000B2]">
                        Serving Communities Across Australia
                      </span>
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
}
