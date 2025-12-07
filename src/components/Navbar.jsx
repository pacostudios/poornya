"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Referal", href: "/referal" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="fixed top-2 sm:top-4 left-0 w-full z-50 px-3 sm:px-6 py-2">
      <div className="flex items-center justify-between bg-[#FFFFFF66] backdrop-blur-lg border border-white/30 rounded-[24px] sm:rounded-[32px] shadow-lg px-3 sm:px-4 md:px-2 py-2">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <img
            src="/logoMain.png"
            alt="Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 xl:gap-10 text-[14px] xl:text-[16px] font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`transition ${
                    isActive
                      ? "text-[#003A11] font-semibold"
                      : "text-gray-700 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Button */}
        <Link
          href="/contact"
          className="hidden sm:flex bg-[#003C1C] text-white pl-4 md:pl-6 pr-1 py-2 rounded-full items-center gap-2 md:gap-4 hover:bg-[#012e14] transition flex-shrink-0 text-sm md:text-base"
        >
          <span className="whitespace-nowrap">Get In Touch</span>
          <span className="bg-white text-[#003A11] rounded-full p-1.5 md:p-2">
            <ArrowUpRight size={16} className="md:w-[18px] md:h-[18px]" />
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden bg-[#003C1C] text-white p-2 rounded-full hover:bg-[#012e14] transition"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-3 right-3 sm:left-6 sm:right-6 mt-2 bg-white/95 backdrop-blur-lg border border-white/30 rounded-[24px] shadow-xl overflow-hidden animate-in slide-in-from-top duration-300">
          <ul className="flex flex-col">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-6 py-4 text-[15px] font-medium transition ${
                      isActive
                        ? "text-[#003A11] bg-[#003A11]/5 font-semibold"
                        : "text-gray-700 hover:text-[#003A11] hover:bg-[#003A11]/5"
                    } ${
                      index !== navLinks.length - 1
                        ? "border-b border-gray-200"
                        : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Button */}
          <div className="p-4 border-t border-gray-200">
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="flex bg-[#003C1C] text-white px-6 py-3 rounded-full items-center justify-center gap-3 hover:bg-[#012e14] transition text-[15px] font-medium"
            >
              <span>Get In Touch</span>
              <span className="bg-white text-[#003A11] rounded-full p-1.5">
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
