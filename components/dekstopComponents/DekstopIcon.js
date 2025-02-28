"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

const DekstopIcon = ({ url, imageURL, text }) => {
  const soundFile = '/sounds/click.wav'
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    const audio = new Audio(soundFile);
    audio.play();
  };
  const handleDoubleClick = () => {
    router.push(url);
  };

  return (
    <motion.div
    initial={{ scale: 0,opacity: 0 }}
      animate={{ scale: 1,opacity: 1  }}
      transition={{
        duration: 0.2,
      }}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      className="w-20 h-20 cursor-pointer border-gray-500  select-none rounded-xl hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-md gap-2 flex flex-col justify-center items-center transition-all duration-200 ease-in-out"
    >
      <div>
        <Image src={imageURL} width={30} height={30} alt="portfolio Icon" />
      </div>

      <div className="text">
        <p className="text-sm">{text}</p>
      </div>
    </motion.div>
  );
};

export default DekstopIcon;
