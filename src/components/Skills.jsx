import React from "react";
import { motion } from "framer-motion";
import {
  FaJs,
  FaReact,
  FaNode,
  FaHtml5,
  FaCss3,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
  SiMongoose,
  SiJsonwebtokens,
  SiPostman,
  SiCloudinary,
} from "react-icons/si";
import { IoLogoFirebase, IoLogoNodejs } from "react-icons/io5";
import { MdOutlineQueryStats } from "react-icons/md";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  const techs = [
    {
      id: 1,
      icon: <FaJs size={50} />,
      title: "JavaScript",
      color: "text-[#F7E018]",
    },
    {
      id: 2,
      icon: <FaReact size={50} />,
      title: "React.js",
      color: "text-[#1FBEEF]",
    },
    {
      id: 3,
      icon: <FaNode size={50} />,
      title: "Node.js",
      color: "text-[#7DB765]",
    },
    {
      id: 4,
      icon: <SiExpress size={50} />,
      title: "Express.js",
      color: "text-[#FFFBEB]",
    },
    {
      id: 5,
      icon: <SiMongodb size={50} />,
      title: "MongoDB",
      color: "text-[#199555]",
    },
    {
      id: 6,
      icon: <IoLogoFirebase size={50} />,
      title: "TypeScript",
      color: "text-[#FF9408]",
    },
    {
      id: 7,
      icon: <FaGitAlt size={50} />,
      title: "Git",
      color: "text-red-500",
    },
  ];

  return (
    <div
      id="skills"
      className="w-full min-h-screen md:pt-32 p-4 pt-[105px] bg-[#0a192f] text-gray-300"
    >
      <div className="text-center mb-8 pt-8 md:pt-0">
        <p className="text-4xl font-bold inline border-b-4 border-[#64ffda]">
          Skills
        </p>
        <p className="py-6">These are the technologies I've worked with</p>
      </div>
      {/* Content  */}
      <div className="flex flex-col-reverse md:flex-row">
        {/* Text  */}
        <div className="md:mt-28 mt-12 px-4 md:ml-[450px]">
          {/* Front End Development  */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2 text-slate-400">
              Frontend Development
            </h2>
            <div className="flex flex-wrap gap-2 py-1">
              <button className=" text-sm font-medium cursor-pointer flex text-gray-200 justify-center items-center gap-1 bg-[#FC4F13] px-2 py-[2px]">
                <FaHtml5 /> HTML
              </button>
              <button className=" text-sm font-medium cursor-pointer flex text-slate-300 justify-center items-center gap-1 bg-[#306AF1] px-2 py-[2px]">
                <FaCss3 /> CSS
              </button>
              <button className=" text-sm font-medium cursor-pointer flex text-slate-300 justify-center items-center gap-1 bg-sky-600 px-2 py-[2px]">
                <SiTailwindcss /> Tailwind
              </button>
              <button className=" text-sm font-medium cursor-pointer flex text-slate-700 justify-center items-center gap-1 bg-[#F7E018] px-2 py-[2px]">
                <SiJavascript /> JavaScript
              </button>
              <button className=" text-sm font-medium cursor-pointer flex text-slate-800 justify-center items-center gap-1 bg-[#1FBEEF] px-2 py-[2px]">
                <FaReact /> React
              </button>
              <button className=" text-sm font-medium cursor-pointer flex text-slate-300 justify-center items-center gap-1 bg-gray-600 px-2 py-[2px]">
                <MdOutlineQueryStats /> TanStack Query
              </button>
              <button className=" text-sm font-medium cursor-pointer flex text-slate-700 justify-center items-center gap-1 bg-[#FF9408] px-2 py-[2px]">
                <IoLogoFirebase /> Firebase
              </button>
            </div>
          </div>
          {/* Backend Development  */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2 text-slate-400">
              Backend Development
            </h2>
            <div className="flex flex-wrap gap-2 py-1">
              <button className=" text-sm font-medium cursor-pointer flex text-slate-800 justify-center items-center gap-1 bg-[#7DB765] px-2 py-[2px]">
                <IoLogoNodejs /> Node.js
              </button>
              <button className=" text-sm font-medium cursor-pointer flex text-slate-600 justify-center items-center gap-1 bg-[#FFFBEB] px-2 py-[2px]">
                <SiExpress /> Express.js
              </button>
              <button className=" text-sm font-medium cursor-pointer flex text-slate-200 justify-center items-center gap-1 bg-[#199555] px-2 py-[2px]">
                <SiMongodb /> MongoDB
              </button>
              <button className=" text-sm font-medium cursor-pointer flex text-slate-300 justify-center items-center gap-1 bg-[#8C0808] px-2 py-[2px]">
                <SiMongoose /> Mongoose
              </button>
              <button className=" text-sm font-medium cursor-pointer flex text-slate-300 justify-center items-center gap-1 bg-[#29292F] px-2 py-[2px]">
                <SiJsonwebtokens /> JWT
              </button>
            </div>
          </div>
          {/* Tools */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2 text-slate-400">Tools</h2>
            <div className="flex flex-wrap gap-2 py-1">
              <button className=" text-sm font-medium cursor-pointer flex text-gray-200 justify-center items-center gap-1 bg-[#F05539] px-2 py-[2px]">
                <FaGitAlt /> Git
              </button>
              <button className=" text-sm font-medium cursor-pointer flex text-slate-300 justify-center items-center gap-1 bg-[#22262A] px-2 py-[2px]">
                <FaGithub /> GitHub
              </button>
              <button className=" text-sm font-medium cursor-pointer flex text-slate-300 justify-center items-center gap-1 bg-[#333338] px-2 py-[2px]">
                <VscVscode /> VS Code
              </button>
              <button className=" text-sm font-medium cursor-pointer flex text-slate-800 justify-center items-center gap-1 bg-[#FF713E] px-2 py-[2px]">
                <SiPostman /> Postman
              </button>
              <button className=" text-sm font-medium cursor-pointer flex text-slate-300 justify-center items-center gap-1 bg-[#3A4EC7] px-2 py-[2px]">
                <SiCloudinary /> Cloudinary
              </button>
            </div>
          </div>
        </div>
        {/* Marquee  */}
        <div className="w-1/3 mx-auto md:ml-44 md:w-32 overflow-hidden">
          {techs.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ x: index % 2 === 0 ? "100%" : "-100%" }}
              animate={{ x: index % 2 === 0 ? "-100%" : "100%" }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 4,
                ease: "linear",
              }}
              className="flex shadow-xl gap-10 cursor-pointer"
            >
              <div
                className={`flex flex-col items-center justify-center text-center py-1 px-2 shadow-xl transition-transform duration-500 ease-in-out transform   ${tech.color}`}
              >
                {tech.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
