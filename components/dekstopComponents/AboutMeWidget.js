"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const AboutMeWidget = () => {
  return (
    <motion.div
      initial={{ opacity: 0,scale: 0 }}
      animate={{ opacity: 1,scale: 1 }}
      transition={{
        duration: 0.1,
        // repeat: Infinity,
        // repeatType: "reverse",
        // ease: "easeInOut",
      }}
      // title="Click to know more about me "
      className="w-[40%] flex shadow-lg shadow-white/10 flex-col h-[60%] bg-white/10 backdrop-blur-xl rounded-3xl mt-2 p-4 border border-white/20 transition-all duration-500 ease-in-out"
    >
      {/* Profile Photo Section */}
      <div className="flex flex-col justify-center items-center w-full bg-gradient-to-r from-gray-900 to-gray-700 h-[30%] rounded-t-2xl">
        <Image
          className="rounded-full border-4 border-purple-400 shadow-md"
          src={"/images/me2.webp"}
          width={80}
          height={80}
          alt="me"
        />
      </div>

      {/* Text Section */}
      <div className="text-md w-full text-center min-h-[70%] p-4 bg-black bg-opacity-20 backdrop-blur-lg text-white rounded-xl shadow-md transition-all duration-300">
        <p className="text-lg font-semibold">Welcome to my Portfolio✨</p>
        <p className="text-sm text-gray-200 mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, iure
          hic. Laboriosam illum ex, perspiciatis ipsum fugit praesentium aut
          accusantium quis at obcaecati doloribus.
        </p>
        <div className="btn mt-2">
          <Button className="px-10 py-2 rounded-full bg-white/20 backdrop-blur-md text-white shadow-lg border border-white/30 hover:bg-white hover:text-black hover:shadow-xl transition-all duration-300 ease-in-out">
            More
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMeWidget;
