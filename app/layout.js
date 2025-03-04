import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ParticlesBackground from "@/components/particlebg";
import { AnimatePresence, motion } from "framer-motion";

export const metadata = {
  title: "Yash's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen relative text-white">
          <ParticlesBackground />
          <Navbar />
          <main className="absolute inset-0 overflow-hidden">{children}</main>
        </div>
      </body>
    </html>
  );
}
