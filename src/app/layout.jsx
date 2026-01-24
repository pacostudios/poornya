
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Urbanist } from "next/font/google";

export const metadata = {
  title: {
    default: "Poornaya | Mental Wellness & Positive Change Support",
    template: "%s | Poornaya",
  },
  description:
    "Poornaya supports individuals in achieving positive mental and emotional change through guidance, counselling, and wellness programs.",
  metadataBase: new URL("https://poornaya.com"),
  openGraph: {
    title: "Poornaya | Mental Wellness & Positive Change Support",
    description:
      "Professional mental wellness and personal growth support to help you move toward positive change.",
    url: "https://poornaya.com",
    siteName: "Poornaya",
    type: "website",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Poornaya Mental Wellness",
      },
    ],
  },
};

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-urbanist",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={urbanist.variable}>
      
      <body
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
