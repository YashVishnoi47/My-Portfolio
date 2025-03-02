"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: <FaGithub size={30} />, url: "https://github.com" },
  { icon: <FaLinkedin size={30} />, url: "https://linkedin.com" },
  { icon: <FaTwitter size={30} />, url: "https://twitter.com" },
  { icon: <FaInstagram size={30} />, url: "https://instagram.com" },
];

export default function SocialWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        ease: "easeInOut", 
        type: "spring", 
      }}
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.3)" }}
      className="w-[20%] h-[8%] flex  border-2 border-white/20 bg-white/10 backdrop-blur-lg gap-6 justify-center items-center rounded-2xl bottom-5 right-[40%] absolute mt-2 p-4 shadow-lg hover:shadow-2xl transition-all"
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.url}
          target="_blank"
          whileHover={{ scale: 1.3, rotate: 15, textShadow: "0px 0px 8px rgba(255,255,255,0.9)" }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          className="text-white cursor-pointer"
        >
          {link.icon}
        </motion.a>
      ))}
    </motion.div>
  );
}
