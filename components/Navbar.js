"use client";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import Clock from "./Clock";
import { motion } from "framer-motion";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";


// Left side of the navbar will have the navigation buttons-
//  1. The name of the page the user is at.
//  2. The buttons to go back and close the page.(Basically go to home page)
//  3. The Bution to minimize the page.(Impliment it at the end)

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        duration: 1,
      }}
      className="w-full select-none relative z-10 bg-white bg-opacity-10 backdrop-blur-md h-10 rounded-md border-white flex justify-between items-center"
    >
      {/* Navbar Left */}
      <div className="flex items-center h-full w-[33%] px-4 gap-4">
        {/* Mac-style buttons container */}
        <div className="flex gap-2">
          {/* Close Button (Red) */}
          <div
            onClick={() => router.push("/")}
            title="Go home"
            className="w-4 h-4 bg-red-500 border border-red-700 rounded-full shadow-sm hover:bg-red-600 transition-all duration-200 cursor-pointer"
          />

          {/* Minimize Button (Yellow) */}
          <div className="w-4 h-4 bg-yellow-500 border border-yellow-700 rounded-full shadow-sm hover:bg-yellow-600 transition-all duration-200 cursor-pointer" />

          {/* Back Button (Green) */}
          <div
            onClick={() => router.back()}
            title="Go back"
            className="w-4 h-4 bg-green-500 border border-green-700 rounded-full shadow-sm hover:bg-green-600 transition-all duration-200 cursor-pointer"
          />
        </div>

        {/* Page Title (Centered) */}
        <p className="text-sm text-gray-300 font-medium">
          {pathname === "/about" ? "About" : "Portfolio"}
        </p>
      </div>

      {/* Navbar Mid */}
      <div className="mid h-full flex justify-center items-center w-[33%] border-red-500 ">
        <div className="time font-sans cursor-default border-red-500 rounded-md py-1 px-2 hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-lg transition-all duration-200 ease-in-out ">
          <Clock />
        </div>
      </div>

      {/* Navbar Right */}
      <div className="right flex justify-end border-2 border-red-500 items-center h-full w-[33%] ">
        <div className="socials flex justify-center items-center gap-2 border-2 h-full w-[50%]">
          <FaInstagram className="rounded-full text-2xl hover:scale-110 transition-all duration-200 ease-in-out"/>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
