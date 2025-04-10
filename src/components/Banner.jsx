import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div
      id="home"
      className="w-full bg-[#0a192f] text-gray-300 h-screen flex flex-col justify-center items-center px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-[1000px] mx-auto text-center"
      >
        <p className="text-[#64ffda] text-xl">Hello, I'm</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] my-4">
          Sahabul Islam Sifat
        </h1>
        <h2 className="text-2xl sm:text-4xl font-bold text-[#8892b0] mb-8">
          <TypeAnimation
            sequence={[
              "Front-End Developer",
              2000,
              "Tech Enthusiast",
              2000,
              "Lifelong Learner",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-[#64ffda]"
          />
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I specialize in building exceptional digital experiences. Currently,
          I'm focused on building responsive full-stack web applications using
          the MERN.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <a
            href="#projects"
            className="group border-2 px-6 py-2 flex rounded-sm items-center hover:bg-[#64ffda] hover:border-[#64ffda] hover:text-[#0a192f] duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="group border-2 px-6 py-2 rounded-sm flex items-center bg-[#64ffda] border-[#64ffda] text-[#0a192f] hover:bg-transparent hover:text-[#64ffda] duration-300"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
