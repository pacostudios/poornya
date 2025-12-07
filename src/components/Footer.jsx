"use client";

import {
  Activity,
  Brain,
  Facebook,
  GitGraph,
  HandHeart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { use } from "react";

export default function Footer() {

  const router = useRouter();
  const services = [
    {
      title: "facebook",
      icon: <Facebook />,
    },
    {
      title: "instagram",
      icon: <Instagram />,
    },
    {
      title: "linkedin",
      icon: <Linkedin />,
    },
  ];

  return (
    <footer className="relative bg-[#98C44B] pt-12 sm:pt-16 md:pt-4 sm:pb-8 px-4 sm:px-6 lg:px-8 rounded-lg bg-[url('/footerLine.png')] bg-no-repeat bg-[length:100%_auto]
bg-bottom-left bg-overflow-hidden">
      {/* CTA SECTION */}
      <section className="pb-8 sm:pb-10 md:pb-12 max-w-8xl mx-auto">
        <div className="relative bg-white border-2 sm:border-4 border-lime-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 overflow-hidden">
          {/* Floating Icons - Hidden on mobile/tablet */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block w-[180px] h-[180px]">
            <div
              className="absolute w-12 xl:w-16 h-12 xl:h-16 bg-gray-900 rounded-full flex items-center justify-center shadow-lg animate-bounce"
              style={{
                animationDelay: "0.5s",
                animationDuration: "3s",
                top: "-20%",
                left: "70%",
                transform: "translate(-50%, 0)",
              }}
            >
              <GitGraph className="text-[#98C44B] w-6 h-6 xl:w-8 xl:h-8" />
            </div>

            <div
              className="absolute w-12 xl:w-16 h-12 xl:h-16 bg-gray-900 rounded-full flex items-center justify-center shadow-lg animate-bounce"
              style={{
                animationDelay: "0s",
                animationDuration: "3s",
                top: "-10%",
                left: "30%",
                transform: "translate(-50%, 0)",
              }}
            >
              <HandHeart className="text-[#98C44B] w-6 h-6 xl:w-8 xl:h-8" />
            </div>

            <div
              className="absolute w-12 xl:w-16 h-12 xl:h-16 bg-gray-900 rounded-full flex items-center justify-center shadow-lg animate-bounce"
              style={{
                animationDelay: "0.5s",
                animationDuration: "3s",
                top: "36%",
                left: "10%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Activity className="text-[#98C44B] w-6 h-6 xl:w-8 xl:h-8" />
            </div>

            <div
              className="absolute w-12 xl:w-16 h-12 xl:h-16 bg-gray-900 rounded-full flex items-center justify-center shadow-lg animate-bounce"
              style={{
                animationDelay: "1s",
                animationDuration: "3s",
                top: "74%",
                left: "35%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Brain className="text-[#98C44B] w-6 h-6 xl:w-8 xl:h-8" />
            </div>

            <div
              className="absolute w-12 xl:w-16 h-12 xl:h-16 bg-gray-900 rounded-full flex items-center justify-center shadow-lg animate-bounce"
              style={{
                animationDelay: "1.5s",
                animationDuration: "3s",
                top: "95%",
                left: "75%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <svg
                className="w-8 xl:w-10 h-8 xl:h-10 text-[#98C44B]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
          </div>

          {/* Text + CTA */}
          <div className="relative z-10 max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Ready To Take The Next Step
              <br />
              Toward Positive Change?
            </h2>

            <button
            onClick={()=>{
              router.push('/contact');
            }}
             className="inline-flex items-center gap-2 sm:gap-3 bg-[#98C44B] text-gray-900 font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 text-xs sm:text-sm">
              <span className="uppercase">Book a Consultation</span>
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-900 rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Person Image - Responsive positioning */}
      <div className="relative sm:absolute sm:bottom-32 md:bottom-40 sm:left-1/2 sm:-translate-x-1/2 w-40 h-48 sm:w-44 sm:h-52 md:w-52 md:h-60 rounded-lg overflow-hidden shadow-xl mx-auto mb-6 sm:mb-0">
        <img
          src="/user2.png"
          className="object-cover w-full h-full"
          alt="person"
        />
      </div>

      {/* Big POORNAYA Text - Responsive sizing */}
      <p className="absolute bottom-0 left-1/2 -translate-x-1/2 text-6xl sm:text-8xl md:text-[120px] lg:text-[180px] xl:text-[240px] font-bold text-[#0E4037] leading-none select-none whitespace-nowrap opacity-80 sm:opacity-100">
        POORNAYA
      </p>

      {/* Main Content - Responsive layout */}
      <div className="relative z-10 max-w-8xl mx-auto flex flex-col sm:flex-row justify-between gap-8 sm:gap-6 md:gap-8 mb-32 sm:mb-36 md:mb-40 pt-6 sm:pt-0">
        {/* Left */}
        <div className="w-full sm:w-auto">
          <div className="w-24 h-20 sm:w-28 sm:h-24 md:w-32 md:h-28 bg-white rounded-lg flex items-center justify-center mb-4 mx-auto sm:mx-0">
            <img
              src="/poornaya.png"
              className="w-20 h-16 sm:w-24 sm:h-20 md:w-28 md:h-24 object-contain"
              alt="Poornaya"
            />
          </div>

          <p className="text-xs sm:text-sm text-black mb-4 font-semibold leading-relaxed text-center sm:text-left max-w-sm mx-auto sm:mx-0">
            Providing Physical And Mental Related Solutions For Over 12 Years.
            <br />
            Protecting What Matters Most To You And Your Family.
          </p>

          {/* Contact */}
          <div className="space-y-2 text-xs sm:text-sm text-black text-center sm:text-left">
            <div className="flex items-center font-semibold gap-2 justify-center sm:justify-start">
              <Phone className="w-4 h-4" />
              <span>1300990205</span>
            </div>
            <div className="flex items-center font-semibold gap-2 justify-center sm:justify-start">
              <Mail className="w-4 h-4" />
              <span>Info@Poornaya.Com.Au</span>
            </div>
            <div className="flex items-center font-semibold gap-2 justify-center sm:justify-start">
              <MapPin className="w-4 h-4" />
              <span>Melbourne, Victoria</span>
            </div>
          </div>
        </div>

        {/* Right Navigation */}
        <div className="flex flex-col items-center sm:items-end gap-4">
          <nav className="flex flex-col items-center sm:items-end gap-2 sm:gap-3 text-center sm:text-right">
            {["Home", "About Us", "Services", "Referral", "Contact Us"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-base sm:text-lg font-semibold text-gray-900 hover:text-emerald-900 transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </nav>

          {/* Social */}
          <div className="flex gap-3 mt-2 sm:mt-4">
            {services.map((icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 border border-[#000000] rounded-full flex items-center justify-center transition hover:bg-black hover:text-white group"
              >
                <span className="text-base sm:text-lg text-[#000000] group-hover:text-[#98C44B]">
                  {icon.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}