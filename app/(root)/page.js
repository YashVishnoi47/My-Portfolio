import DekstopIcon from "@/components/dekstopComponents/DekstopIcon";
import AboutMeWidget from "@/components/dekstopComponents/AboutMeWidget";
import Dock from "@/components/utilityComponents/Doc";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram,FaYoutube  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// When I am on home page I have social icons as bottom doc but on other pages I have proper navigation doc.

export default function Home() {
  const items = [
    {
      icon: <FaInstagram size={20} />,
      label: "Instagram",
      link:"https://www.instagram.com/yashss.realm/"
    },
    {
      icon: <FaYoutube size={20} />,
      label: "Youtube",
      link:"https://www.youtube.com/@yashssrealm"
    },
    {
      icon: <FaXTwitter size={20} />,
      label: "X(Twitter)",
      link:"https://x.com/home"
    },
    {
      icon: <FaGithub size={20} />,
      label: "GitHub",
      link:"https://github.com/YashVishnoi47"
    },
  ];

  return (
    <div className="relative flex justify-between inset-0 w-full h-full">
      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
        className={"bg-white/10 backdrop-blur-lg"}
      />

      {/* <SocialWidget /> */}
      <div className="icons mt-10 w-1/2 p-2 flex flex-col gap-4 flex-wrap h-[94%]">
        {/* Projects */}
        <DekstopIcon
          url={"/projects"}
          imageURL={"/icons/portfolio1.png"}
          text={"Projects"}
        />
        {/* Skills */}
        <DekstopIcon
          url={"/skills"}
          imageURL={"/icons/skills.png"}
          text={"Skills"}
        />
        {/* Skills */}
        {/* <DekstopIcon url={"/skills"} imageURL={"/icons/contact.png"} text={"Contact me"} /> */}
      </div>

      <div className="Widgets mt-10 w-1/2 p-2 justify-end items-start  flex gap-4 flex-wrap h-[94%]">
        <AboutMeWidget />
      </div>
    </div>
  );
}
