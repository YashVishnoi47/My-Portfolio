import Image from "next/image";
import Icons from "@/components/Icons";
import DekstopIcon from "@/components/dekstopComponents/DekstopIcon";
import Link from "next/link";
import Tooltip from "@/components/utilityComponents/Tooltip";
import AboutMeWidget from "@/components/dekstopComponents/AboutMeWidget";

export default function Home() {
  return (
    <div className="relative flex justify-between inset-0 w-full h-full">
      <div className="icons mt-10 w-1/2 p-2 flex flex-col gap-4 flex-wrap h-[94%]">
        {/* Projects */}
        <DekstopIcon
          url={"/about"}
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

      <div className="Widgets mt-10 w-1/2 p-2 items-end flex flex-col gap-4 flex-wrap h-[94%]">
        <AboutMeWidget />
      </div>
    </div>
  );
}
